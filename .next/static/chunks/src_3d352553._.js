(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
// Create axios instance for 10 Minute School API
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'https://api.10minuteschool.com/discovery-service/api/v1',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'X-TENMS-SOURCE-PLATFORM': 'web',
        accept: 'application/json'
    }
});
// Request interceptor
api.interceptors.request.use((config)=>{
    // Add auth token if available
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('authToken') : "TURBOPACK unreachable";
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    // Log request in development
    if ("TURBOPACK compile-time truthy", 1) {
        var _config_method;
        console.log('🚀 Request:', {
            method: (_config_method = config.method) === null || _config_method === void 0 ? void 0 : _config_method.toUpperCase(),
            url: config.url,
            params: config.params,
            headers: config.headers
        });
    }
    return config;
}, (error)=>{
    console.error('❌ Request Error:', error);
    return Promise.reject(error);
});
// Response interceptor
api.interceptors.response.use((response)=>{
    // Log response in development
    if ("TURBOPACK compile-time truthy", 1) {
        console.log('✅ Response:', {
            status: response.status,
            url: response.config.url,
            data: response.data
        });
    }
    return response;
}, (error)=>{
    var _error_response, _error_response1, _error_response2, _error_response3, _error_config;
    // Handle common errors
    if (((_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.status) === 401) {
        // Unauthorized - clear token and redirect to login
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.removeItem('authToken');
            window.location.href = '/login';
        }
    }
    if (((_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : _error_response1.status) === 403) {
        // Forbidden
        console.error('❌ Access denied');
    }
    if (((_error_response2 = error.response) === null || _error_response2 === void 0 ? void 0 : _error_response2.status) && error.response.status >= 500) {
        // Server error
        console.error('❌ Server error');
    }
    console.error('❌ Response Error:', {
        status: (_error_response3 = error.response) === null || _error_response3 === void 0 ? void 0 : _error_response3.status,
        message: error.message,
        url: (_error_config = error.config) === null || _error_config === void 0 ? void 0 : _error_config.url
    });
    return Promise.reject(error);
});
const __TURBOPACK__default__export__ = api;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/services/products.service.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCachedProducts": ()=>getCachedProducts,
    "productsService": ()=>productsService
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
;
const productsService = {
    // Get products list with filters
    getProducts: async function() {
        let filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'bn';
        const params = {
            lang: locale,
            page: filters.page || 1,
            limit: filters.per_page || 12,
            per_page: filters.per_page || 12,
            items_per_page: filters.per_page || 12,
            ...filters
        };
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/products', {
            params
        });
        return response.data;
    },
    // Get product categories for filters
    getCategories: async function() {
        let locale = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'bn';
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/products/categories', {
            params: {
                lang: locale
            }
        });
        return response.data.data;
    },
    // Search products
    searchProducts: async function(query) {
        let locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'bn';
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get('/products/search', {
            params: {
                q: query,
                lang: locale
            }
        });
        return response.data.data;
    }
};
const getCachedProducts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cache"])(async (filters, locale)=>{
    return await productsService.getProducts(filters, locale);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/use-products.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "productsKeys": ()=>productsKeys,
    "useProductCategories": ()=>useProductCategories,
    "useProductSearch": ()=>useProductSearch,
    "useProducts": ()=>useProducts
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$products$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/services/products.service.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
;
;
const productsKeys = {
    all: [
        'products'
    ],
    lists: ()=>[
            ...productsKeys.all,
            'list'
        ],
    list: (filters, locale)=>[
            ...productsKeys.lists(),
            filters,
            locale
        ],
    categories: (locale)=>[
            ...productsKeys.all,
            'categories',
            locale
        ],
    search: (query, locale)=>[
            ...productsKeys.all,
            'search',
            query,
            locale
        ]
};
function useProducts() {
    let filters = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'bn';
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: productsKeys.list(filters, locale),
        queryFn: {
            "useProducts.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$products$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsService"].getProducts(filters, locale)
        }["useProducts.useQuery"],
        staleTime: 5 * 60 * 1000,
        retry: 2
    });
}
_s(useProducts, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProductCategories() {
    let locale = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'bn';
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: productsKeys.categories(locale),
        queryFn: {
            "useProductCategories.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$products$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsService"].getCategories(locale)
        }["useProductCategories.useQuery"],
        staleTime: 30 * 60 * 1000,
        retry: 2
    });
}
_s1(useProductCategories, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useProductSearch(query) {
    let locale = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'bn';
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: productsKeys.search(query, locale),
        queryFn: {
            "useProductSearch.useQuery": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$services$2f$products$2e$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["productsService"].searchProducts(query, locale)
        }["useProductSearch.useQuery"],
        enabled: query.length > 2,
        staleTime: 2 * 60 * 1000,
        retry: 1
    });
}
_s2(useProductSearch, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/products/page-products.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {

var { k: __turbopack_refresh__, m: module, e: exports } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/src/app/products/page-products.tsx'\n\nExpected '</', got '['");
e.code = 'MODULE_UNPARSABLE';
throw e;
}}),
}]);

//# sourceMappingURL=src_3d352553._.js.map