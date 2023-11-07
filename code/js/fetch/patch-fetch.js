/**
 * 默认参数
 *
 * @type {RequestOptions & InterceptorConfig}
 */
patchFetch.defaultOptions = { headers: { 'Content-Type': 'application/json' } };

/**
 * GET请求
 *
 * @template {boolean} B
 * @param {RequestInfo | URL} input 请求地址
 * @param {RequestOptions & InterceptorConfig} [init] 请求参数
 * @param {B} [isResultRaw] 是否返回原始响应对象
 * @returns {Promise<B extends true ? Response : any>}
 */
patchFetch.get = async (input, init, isResultRaw) => {
    return patchFetch(input, { ...init, method: 'GET' }, isResultRaw);
};

/**
 * POST请求
 *
 * @template {boolean} B
 * @param {RequestInfo | URL} input 请求地址
 * @param {RequestOptions & InterceptorConfig} [init] 请求参数
 * @param {B} [isResultRaw] 是否返回原始响应对象
 * @returns {Promise<B extends true ? Response : any>}
 */
patchFetch.post = async (input, init, isResultRaw) => {
    return patchFetch(input, { ...init, method: 'POST' }, isResultRaw);
};

/**
 * PUT请求
 *
 * @template {boolean} B
 * @param {RequestInfo | URL} input 请求地址
 * @param {RequestOptions & InterceptorConfig} [init] 请求参数
 * @param {B} [isResultRaw] 是否返回原始响应对象
 * @returns {Promise<B extends true ? Response : any>}
 */
patchFetch.put = async (input, init, isResultRaw) => {
    return patchFetch(input, { ...init, method: 'PUT' }, isResultRaw);
};

/**
 * DELETE请求
 *
 * @template {boolean} B
 * @param {RequestInfo | URL} input 请求地址
 * @param {RequestOptions & InterceptorConfig} [init] 请求参数
 * @param {B} [isResultRaw] 是否返回原始响应对象
 * @returns {Promise<B extends true ? Response : any>}
 */
patchFetch.delete = async (input, init, isResultRaw) => {
    return patchFetch(input, { ...init, method: 'DELETE' }, isResultRaw);
};

/**
 * PATCH请求
 *
 * @template {boolean} B
 * @param {RequestInfo | URL} input 请求地址
 * @param {RequestOptions & InterceptorConfig} [init] 请求参数
 * @param {B} [isResultRaw] 是否返回原始响应对象
 * @returns {Promise<B extends true ? Response : any>}
 */
patchFetch.patch = async (input, init, isResultRaw) => {
    return patchFetch(input, { ...init, method: 'PATCH' }, isResultRaw);
};

/**
 * 加载文本
 *
 * @param {RequestInfo | URL} input 请求地址
 * @param {Omit<RequestOptions & InterceptorConfig, 'responseInterceptors'>} [init] 请求参数
 * @returns {Promise<string>}
 */
patchFetch.loadText = async (input, init) => {
    const responseInterceptors = [(_, response) => response.text()];
    return patchFetch(input, { ...init, responseInterceptors });
};

/**
 * 加载JSON
 *
 * @param {RequestInfo | URL} input 请求地址
 * @param {Omit<RequestOptions & InterceptorConfig, 'responseInterceptors'>} [init] 请求参数
 */
patchFetch.loadJSON = async (input, init) => {
    const responseInterceptors = [(_, response) => response.json()];
    return patchFetch(input, { ...init, responseInterceptors });
};

/**
 * 功能附加fetch
 *
 * @template {boolean} B
 * @param {RequestInfo | URL} input 请求地址
 * @param {RequestOptions & InterceptorConfig} [init] 请求参数
 * @param {B} [isResultRaw] 是否返回原始响应对象
 * @returns {Promise<B extends true ? Response : any>}
 */
async function patchFetch(input, init, isResultRaw) {
    const _url = typeof input === 'string' ? input : input instanceof URL ? input.toString() : input.url;
    const { requestInterceptors, responseInterceptors, responseErrorInterceptors, ..._options } = {
        ...patchFetch.defaultOptions,
        ...init
    };

    // 执行请求拦截
    const _optionsWithURL = { ..._options, url: _url };
    let optionsWithURL = _optionsWithURL;
    if (requestInterceptors && requestInterceptors.length > 0) {
        optionsWithURL = await _sequenceTasks(requestInterceptors, [_optionsWithURL]);
    }
    let { url, ..._opts } = optionsWithURL;

    // 参数
    const { baseURL, timeout, body: _body, ...opts } = _opts;
    const options = opts;

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
            _mergeURLParams($url.searchParams, _body);
            url = $url.toString();
        }
    }

    // 发起请求
    const response = await fetch(new URL(url, baseURL), options);

    if (!isResultRaw) {
        // 执行错误响应拦截
        if (response.status !== 200) {
            if (responseErrorInterceptors && responseErrorInterceptors.length > 0) {
                return await _sequenceTasks(responseErrorInterceptors, [response, options], (preValue) => [
                    response,
                    options,
                    preValue
                ]);
            }
            throw new Error(response.statusText);
        }

        // 执行响应拦截
        if (responseInterceptors && responseInterceptors.length > 0) {
            return await _sequenceTasks(responseInterceptors, [response, response], (preValue) => [preValue, response]);
        }
    }

    return response;
}

/**
 * 顺序执行任务
 *
 * @template {any[]} Args
 * @template T
 * @param {((...args: Args) => PromiseOrValue<T>)[]} tasks 任务函数列表
 * @param {Args} init 任务初始参数
 * @param {(preValue: T) => PromiseOrValue<Args>} [next] 根据上一个任务值获取下一个任务参数函数
 */
async function _sequenceTasks(tasks, init, next) {
    const run = tasks.reduce((pre, cur) => async (...args) => {
        const preValue = await pre.apply(null, args);
        const newArgs = next ? await next.call(null, preValue) : [preValue];
        return cur.apply(null, newArgs);
    });
    return run.apply(null, init);
}

/**
 * 合并地址栏参数
 *
 * @param {URLSearchParams} query 查询参数对象
 * @param {QueryParams} params 查询参数
 */
function _mergeURLParams(query, params) {
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
 * @param {QueryParams | JSONParams | BodyInit} body 请求体
 * @param {Headers} headers 请求头
 */
function _resolveBody(body, headers) {
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
        _mergeURLParams(query, body);
        return query.toString();
    }

    return JSON.stringify(body);
}

export default patchFetch;

/** @typedef {{ [key: string]: string | number | string[] | number[] }} QueryParams 查询参数 */

/** @typedef {{ [key: string]: string | number | boolean | string[] | number[] | boolean[] | JSONParams }} JSONParams JSON参数 */

/**
 * @typedef {Omit<RequestInit, 'body'> & {
 *     baseURL?: string;
 *     timeout?: number;
 *     body?: QueryParams | JSONParams | BodyInit | null;
 * }} RequestOptions 请求设置参数
 */

/** @typedef {RequestOptions & { url: string }} RequestOptionsWithURL 请求设置参数及URL */

/**
 * @template T
 * @typedef {T | Promise<T>} PromiseOrValue Promise及值
 */

/** @typedef {[optionsWithURL: RequestOptionsWithURL]} RequestInterceptorArgs 请求拦截器参数列表 */

/** @typedef {(...args: RequestInterceptorArgs) => PromiseOrValue<RequestOptionsWithURL>} RequestInterceptor 请求拦截器 */

/**
 * @template T
 * @typedef {[data: T, response: Response]} ResponseInterceptorArgs 响应拦截器参数列表
 */

/**
 * @template T
 * @typedef {(...args: ResponseInterceptorArgs<T>) => PromiseOrValue<T>} ResponseInterceptor 响应拦截器
 */

/**
 * @template T
 * @typedef {[response: Response, options: RequestOptions, data?: T]} ResponseErrorInterceptorArgs 错误响应拦截器参数列表
 */

/**
 * @template T
 * @typedef {(...args: ResponseErrorInterceptorArgs<T>) => PromiseOrValue<T>} ResponseErrorInterceptor 错误响应拦截器
 */

/**
 * @typedef {{
 *     requestInterceptors?: RequestInterceptor[];
 *     responseInterceptors?: ResponseInterceptor[];
 *     responseErrorInterceptors?: ResponseErrorInterceptor[];
 * }} InterceptorConfig 拦截器配置
 */
