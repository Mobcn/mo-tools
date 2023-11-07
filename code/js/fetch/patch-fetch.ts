/**
 * 查询参数
 */
export interface QueryParams {
    [key: string]: string | number | string[] | number[];
}

/**
 * JSON参数
 */
export interface JSONParams {
    [key: string]: string | number | boolean | string[] | number[] | boolean[] | JSONParams;
}

/** 请求设置参数及URL */
type RequestOptionsWithURL = RequestOptions & { url: string };

/** Promise及值 */
type PromiseOrValue<T> = T | Promise<T>;

/** 请求拦截器参数列表 */
type RequestInterceptorArgs = [optionsWithURL: RequestOptionsWithURL];
/** 请求拦截器 */
export type RequestInterceptor = (...args: RequestInterceptorArgs) => PromiseOrValue<RequestOptionsWithURL>;

/** 响应拦截器参数列表 */
type ResponseInterceptorArgs<T = any> = [data: T, response: Response];
/** 响应拦截器 */
export type ResponseInterceptor<T = any> = (...args: ResponseInterceptorArgs<T>) => PromiseOrValue<T>;

/** 错误响应拦截器参数列表 */
type ResponseErrorInterceptorArgs<T = any> = [response: Response, options: RequestOptions, data?: T];
/** 错误响应拦截器 */
export type ResponseErrorInterceptor<T = any> = (...args: ResponseErrorInterceptorArgs<T>) => PromiseOrValue<T>;

/**
 * 拦截器配置
 */
export type InterceptorConfig = {
    /** 请求拦截器数组 */
    requestInterceptors?: RequestInterceptor[];
    /** 响应拦截器数组 */
    responseInterceptors?: ResponseInterceptor[];
    /** 响应错误拦截器数组 */
    responseErrorInterceptors?: ResponseErrorInterceptor[];
};

/**
 * 请求设置参数
 */
export type RequestOptions = Omit<RequestInit, 'body'> & {
    /** 基础路径 */
    baseURL?: string;
    /** 请求超时时间 */
    timeout?: number;
    /** 请求体 */
    body?: QueryParams | JSONParams | BodyInit | null;
};

/** 默认参数 */
patchFetch.defaultOptions = { headers: { 'Content-Type': 'application/json' } };

/**
 * GET请求
 *
 * @param input 请求地址
 * @param init 请求参数
 * @param isResultRaw 是否返回原始响应对象
 */
patchFetch.get = async <B extends boolean>(
    input: RequestInfo | URL,
    init?: RequestOptions & InterceptorConfig,
    isResultRaw?: B
): Promise<B extends true ? Response : any> => {
    return patchFetch(input, { ...init, method: 'GET' }, isResultRaw);
};

/**
 * POST请求
 *
 * @param input 请求地址
 * @param init 请求参数
 * @param isResultRaw 是否返回原始响应对象
 */
patchFetch.post = async <B extends boolean>(
    input: RequestInfo | URL,
    init?: RequestOptions & InterceptorConfig,
    isResultRaw?: B
): Promise<B extends true ? Response : any> => {
    return patchFetch(input, { ...init, method: 'POST' }, isResultRaw);
};

/**
 * PUT请求
 *
 * @param input 请求地址
 * @param init 请求参数
 * @param isResultRaw 是否返回原始响应对象
 */
patchFetch.put = async <B extends boolean>(
    input: RequestInfo | URL,
    init?: RequestOptions & InterceptorConfig,
    isResultRaw?: B
): Promise<B extends true ? Response : any> => {
    return patchFetch(input, { ...init, method: 'PUT' }, isResultRaw);
};

/**
 * DELETE请求
 *
 * @param input 请求地址
 * @param init 请求参数
 * @param isResultRaw 是否返回原始响应对象
 */
patchFetch.delete = async <B extends boolean>(
    input: RequestInfo | URL,
    init?: RequestOptions & InterceptorConfig,
    isResultRaw?: B
): Promise<B extends true ? Response : any> => {
    return patchFetch(input, { ...init, method: 'DELETE' }, isResultRaw);
};

/**
 * PATCH请求
 *
 * @param input 请求地址
 * @param init 请求参数
 * @param isResultRaw 是否返回原始响应对象
 */
patchFetch.patch = async <B extends boolean>(
    input: RequestInfo | URL,
    init?: RequestOptions & InterceptorConfig,
    isResultRaw?: B
): Promise<B extends true ? Response : any> => {
    return patchFetch(input, { ...init, method: 'PATCH' }, isResultRaw);
};

/**
 * 加载文本
 *
 * @param input 请求地址
 * @param init 请求参数
 */
patchFetch.loadText = async (
    input: RequestInfo | URL,
    init?: Omit<RequestOptions & InterceptorConfig, 'responseInterceptors'>
): Promise<string> => {
    const responseInterceptors: ResponseInterceptor[] = [(_, response) => response.text()];
    return patchFetch(input, { ...init, responseInterceptors });
};

/**
 * 加载JSON
 *
 * @param input 请求地址
 * @param init 请求参数
 */
patchFetch.loadJSON = async <T = any>(
    input: RequestInfo | URL,
    init?: Omit<RequestOptions & InterceptorConfig, 'responseInterceptors'>
): Promise<T> => {
    const responseInterceptors: ResponseInterceptor[] = [(_, response) => response.json()];
    return patchFetch(input, { ...init, responseInterceptors });
};

/**
 * 功能附加fetch
 *
 * @param input 请求地址
 * @param init 请求参数
 * @param isResultRaw 是否返回原始响应对象
 */
async function patchFetch<B extends boolean>(
    input: RequestInfo | URL,
    init?: RequestOptions & InterceptorConfig,
    isResultRaw?: B
): Promise<B extends true ? Response : any> {
    const _url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
    const { requestInterceptors, responseInterceptors, responseErrorInterceptors, ..._options } = {
        ...patchFetch.defaultOptions,
        ...init
    };

    // 执行请求拦截
    const _optionsWithURL: RequestOptionsWithURL = { ..._options, url: _url };
    let optionsWithURL = _optionsWithURL;
    if (requestInterceptors && requestInterceptors.length > 0) {
        optionsWithURL = await _sequenceTasks(requestInterceptors, [_optionsWithURL]);
    }
    let { url, ..._opts } = optionsWithURL;

    // 参数
    const { baseURL, timeout, body: _body, ...opts } = _opts;
    const options: RequestInit = opts;

    // 添加超时控制
    if (timeout && timeout > 0) {
        const controller = new AbortController();
        options.signal && (options.signal.onabort = (e) => controller.abort(e));
        options.signal = controller.signal;
        setTimeout(() => controller.abort('timeout!'), timeout);
    }

    // 请求参数处理
    if (_body) {
        const method = options.method || 'GET';
        if (['POST', 'PUT', 'PATCH'].includes(method)) {
            // 设置body
            options.body = _resolveBody(_body, (options.headers = new Headers(options.headers)));
        } else if (typeof _body === 'object') {
            // 设置地址栏参数
            const $url = new URL(url, baseURL);
            _mergeURLParams($url.searchParams, _body as QueryParams);
            url = $url.toString();
        }
    }

    // 发起请求
    const response = await fetch(new URL(url, baseURL), options);

    if (!isResultRaw) {
        // 执行错误响应拦截
        if (response.status !== 200) {
            if (responseErrorInterceptors && responseErrorInterceptors.length > 0) {
                return await _sequenceTasks<ResponseErrorInterceptorArgs>(
                    responseErrorInterceptors,
                    [response, options],
                    (preValue) => [response, options, preValue]
                );
            }
            throw new Error(response.statusText);
        }

        // 执行响应拦截
        if (responseInterceptors && responseInterceptors.length > 0) {
            return await _sequenceTasks<ResponseInterceptorArgs>(
                responseInterceptors,
                [response, response],
                (preValue) => [preValue, response]
            );
        }
    }

    return response;
}

/**
 * 顺序执行任务
 *
 * @param tasks 任务函数列表
 * @param init 任务初始参数
 * @param next 根据上一个任务值获取下一个任务参数函数
 */
async function _sequenceTasks<Args extends any[], T = any>(
    tasks: ((...args: Args) => PromiseOrValue<T>)[],
    init: Args,
    next?: (preValue: T) => PromiseOrValue<Args>
) {
    const run = tasks.reduce((pre, cur) => async (...args) => {
        const preValue = await pre.apply(null, args);
        const newArgs = next ? await next.call(null, preValue) : ([preValue] as Args);
        return cur.apply(null, newArgs);
    });
    return run.apply(null, init);
}

/**
 * 合并地址栏参数
 *
 * @param query 查询参数对象
 * @param params 查询参数
 */
function _mergeURLParams(query: URLSearchParams, params: QueryParams) {
    Object.entries(params).forEach(([key, value]) => {
        if (value === undefined) {
            return;
        }
        const isArray = value instanceof Array;
        const valueType = isArray ? (value.length ? typeof value[0] : 'string') : typeof value;
        if (valueType !== 'string' && valueType !== 'number') {
            throw new Error('URL 格式参数只能为 string 或 number');
        }
        if (isArray) {
            value.forEach((v) => query.append(key, v.toString()));
        } else {
            query.append(key, value.toString());
        }
    });
}

/**
 * 处理请求体
 *
 * @param body 请求体
 * @param headers 请求头
 */
function _resolveBody(body: QueryParams | JSONParams | BodyInit, headers: Headers) {
    // 字符串类型直接返回
    if (typeof body === 'string') {
        return body;
    }

    // 特殊类型直接返回，删除 Content-Type 让 fetch 自动判断生成
    if (
        body instanceof FormData ||
        body instanceof URLSearchParams ||
        body instanceof ReadableStream ||
        body instanceof Blob ||
        body instanceof ArrayBuffer ||
        ArrayBuffer.isView(body)
    ) {
        headers.delete('Content-Type');
        return body;
    }

    // 获取 Content-Type，默认为 application/json
    let contentType = headers.get('Content-Type');
    contentType ??= new Headers(patchFetch.defaultOptions.headers).get('Content-Type');
    contentType ??= 'application/json';

    // URL 格式处理
    if (contentType === 'application/x-www-form-urlencoded') {
        const query = new URLSearchParams();
        _mergeURLParams(query, body as QueryParams);
        return query.toString();
    }

    return JSON.stringify(body);
}

export default patchFetch;
