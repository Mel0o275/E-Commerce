module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/utilities/data:2fd345 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00c970081d16c0e0c9ab8d6612ed9b56ec44d674f2":"default"},"src/utilities/getMyToken.ts",""] */ __turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00c970081d16c0e0c9ab8d6612ed9b56ec44d674f2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "default");
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vZ2V0TXlUb2tlbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxyXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiO1xyXG5pbXBvcnQgeyBkZWNvZGUgfSBmcm9tIFwibmV4dC1hdXRoL2p3dFwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldE15VG9rZW4oKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRlY29kZWQgPSAoYXdhaXQgY29va2llcygpKS5nZXQoJ25leHQtYXV0aC5zZXNzaW9uLXRva2VuJyk/LnZhbHVlIHx8XHJcbiAgICAgICAgKGF3YWl0IGNvb2tpZXMoKSkuZ2V0KCdfX1NlY3VyZS1uZXh0LWF1dGguc2Vzc2lvbi10b2tlbicpPy52YWx1ZTtcclxuICAgIFxyXG4gICAgICAgIGlmKCFkZWNvZGVkKSByZXR1cm4gbnVsbDtcclxuICAgIFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBkZWNvZGUoe3Rva2VuIDogZGVjb2RlZCwgc2VjcmV0IDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVUIX0pXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRva2VuPy50b2tlbiB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6ImdTQUs4QiJ9
}),
"[project]/src/CartAction/getUserCart.action.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getUserCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$data$3a$2fd345__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/utilities/data:2fd345 [app-ssr] (ecmascript) <text/javascript>");
;
async function getUserCart() {
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$data$3a$2fd345__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["default"])();
    if (!token) {
        throw new Error("No token found");
    }
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/cart', {
        method: "GET",
        headers: {
            token,
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return data;
}
}),
"[project]/src/context/CartContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartContext",
    ()=>CartContext,
    "default",
    ()=>CartContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$CartAction$2f$getUserCart$2e$action$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/CartAction/getUserCart.action.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function CartContextProvider({ children }) {
    const [count, setcount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    let sum = 0;
    async function userCart() {
        try {
            let res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$CartAction$2f$getUserCart$2e$action$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            console.log(res);
            if (res.status === 'success') {
                res.data.products.forEach((item)=>{
                    sum += item.count;
                });
                console.log(sum);
                setcount(sum);
            }
        } catch (err) {
            console.log("not Logged in");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        userCart();
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            count,
            setcount
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/CartContext.jsx",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/WishActions/getUserWish.wish.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>getUserWish
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$data$3a$2fd345__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/utilities/data:2fd345 [app-ssr] (ecmascript) <text/javascript>");
;
async function getUserWish() {
    const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utilities$2f$data$3a$2fd345__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["default"])();
    if (!token) {
        throw new Error("No token found");
    }
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/wishlist', {
        method: "GET",
        headers: {
            token,
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return data;
}
}),
"[project]/src/context/WishContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishContext",
    ()=>WishContext,
    "default",
    ()=>WishContextProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$WishActions$2f$getUserWish$2e$wish$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/WishActions/getUserWish.wish.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const WishContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function WishContextProvider({ children }) {
    const [wishCount, setWishCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    async function refreshWish() {
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$WishActions$2f$getUserWish$2e$wish$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
            if (res?.status === "success") {
                setWishCount(res.data.length);
            } else {
                setWishCount(0);
            }
        } catch (err) {
            console.error("refreshWish error:", err);
            setWishCount(0);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refreshWish();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WishContext.Provider, {
        value: {
            wishCount,
            refreshWish
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/WishContext.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dfcea770._.js.map