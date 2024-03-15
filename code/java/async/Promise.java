import java.util.Arrays;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Executor;
import java.util.concurrent.ForkJoinPool;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.function.Function;

/**
 * Promise
 *
 * @param <R> 结果类型
 */
public class Promise<R> {

    /**
     * 异步线程池
     */
    private static Executor asyncPool = ForkJoinPool.commonPool();

    /**
     * 异步任务对象
     */
    private CompletableFuture<Void> future;

    /**
     * 是否完成
     */
    private boolean finished = false;

    /**
     * 是否成功
     */
    private boolean success = false;

    /**
     * 结果
     */
    private R promiseResult = null;

    /**
     * 等待完成
     *
     * @param promise 异步任务对象
     * @param <V>     结果类型
     * @return 结果
     */
    public static <V> V await(Promise<V> promise) throws ExecutionException, InterruptedException {
        promise.future.get();
        return promise.promiseResult;
    }

    /**
     * 异步处理
     *
     * @param value 原始值
     * @param <V>   原始值类型
     * @return 异步任务对象
     */
    public static <V> Promise<V> resolve(V value) {
        Promise<V> promise = new Promise<>();
        promise.future = CompletableFuture.completedFuture(null);
        promise.promiseResult = value;
        return promise;
    }

    /**
     * 异步任务并行执行完全部
     *
     * @param promises 异步任务对象数组
     * @return 异步任务结果数组
     */
    public static Promise<Object[]> all(Promise<?>... promises) {
        Promise<Object[]> allPromise = new Promise<>();
        allPromise.future = CompletableFuture
                .allOf(Arrays.stream(promises)
                        .map(p -> p.future)
                        .toArray(CompletableFuture[]::new))
                .thenRun(() -> {
                    Object[] results = new Object[promises.length];
                    for (int i = 0; i < promises.length; ++i) {
                        results[i] = promises[i].promiseResult;
                    }
                    allPromise.setPromiseResult(results);
                });
        return allPromise;
    }

    /**
     * 异步任务并行执行完某一个
     *
     * @param promises 异步任务对象数组
     * @return 异步任务最先执行完成的结果
     */
    public static Promise<Object> race(Promise<?>... promises) {
        Promise<Object> racePromise = new Promise<>();
        Object[] arr = new Object[]{true, null};
        racePromise.future = CompletableFuture
                .anyOf(Arrays.stream(promises)
                        .map(p -> p.future.thenRun(() -> {
                            if ((boolean) arr[0]) {
                                arr[0] = false;
                                arr[1] = p.promiseResult;
                            }
                        }))
                        .toArray(CompletableFuture[]::new))
                .thenRun(() -> {
                    racePromise.setPromiseResult(arr[1]);
                });
        return racePromise;
    }

    /**
     * 设置异步处理线程池
     *
     * @param asyncPool 异步处理线程池
     */
    public static void setAsyncPool(Executor asyncPool) {
        Promise.asyncPool = asyncPool;
    }

    private Promise() {
    }

    /**
     * @param executor 异步任务执行器
     */
    public Promise(Consumer<Consumer<R>> executor) {
        this((resolve, reject) -> executor.accept(resolve));
    }

    /**
     * @param executor 异步任务执行器
     */
    public Promise(BiConsumer<Consumer<R>, Consumer<? super Object>> executor) {
        this.future = CompletableFuture.runAsync(() -> {
            try {
                executor.accept(this::setPromiseResult, this::throwError);
            } catch (Throwable e) {
                if (!this.finished) {
                    throw e;
                }
            }
        }, asyncPool);
    }

    /**
     * 顺序执行
     *
     * @param action 执行函数
     * @param <V>    结果类型
     * @return 异步任务对象
     */
    public <V> Promise<V> then(Function<R, V> action) {
        Promise<V> promise = new Promise<>();
        promise.future = this.future
                .thenApplyAsync((v) -> action.apply(this.promiseResult), asyncPool)
                .thenAcceptAsync(promise::setPromiseResult, asyncPool);
        return promise;
    }

    /**
     * 顺序执行
     *
     * @param action 执行函数
     * @return 异步任务对象
     */
    public Promise<Void> then(Consumer<R> action) {
        Promise<Void> promise = new Promise<>();
        promise.future = this.future.thenRunAsync(() -> {
            action.accept(this.promiseResult);
            this.finished = true;
        }, asyncPool);
        return promise;
    }

    /**
     * 异常捕获
     *
     * @param catcher 异常处理函数
     */
    public Promise<R> catches(Consumer<Throwable> catcher) {
        this.future.exceptionally((error) -> {
            catcher.accept(error);
            return null;
        });
        return this;
    }

    /**
     * 异步任务是否成功
     */
    public boolean isSuccess() {
        return this.success;
    }

    /**
     * 异步任务是否完成
     */
    public boolean isFinished() {
        return this.finished;
    }

    /**
     * 设置异步任务结果
     *
     * @param promiseResult 异步任务结果
     */
    private void setPromiseResult(R promiseResult) {
        if (this.finished) {
            return;
        }
        this.promiseResult = promiseResult;
        this.finish(true);
    }

    /**
     * 抛出异常
     *
     * @param error 异常对象
     */
    private void throwError(Object error) {
        if (this.finished) {
            return;
        }
        this.finish();
        if (error instanceof Throwable) {
            throw new RuntimeException((Throwable) error);
        }
        throw new RuntimeException(error.toString());
    }

    /**
     * 标记异步任务完成
     */
    private void finish() {
        this.finish(false);
    }

    /**
     * 标记异步任务完成
     */
    private void finish(boolean isSuccess) {
        this.finished = true;
        this.success = isSuccess;
    }

}
