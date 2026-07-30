(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/video/HoverVideo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HoverVideo",
    ()=>HoverVideo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const HoverVideo = ({ src, poster, containerClassName = "", videoClassName = "h-full w-full object-cover", onPlayStart, onPlayPause, loop = true, muted = true, playsInline = true, preload = "metadata", ...videoProps })=>{
    _s();
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleMouseEnter = ()=>{
        if (videoRef.current) {
            videoRef.current.play().catch(()=>{});
            onPlayStart?.();
        }
    };
    const handleMouseLeave = ()=>{
        if (videoRef.current) {
            videoRef.current.pause();
            onPlayPause?.();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative h-full w-full overflow-hidden ${containerClassName}`,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            ref: videoRef,
            src: src,
            poster: poster,
            loop: loop,
            muted: muted,
            playsInline: playsInline,
            preload: preload,
            className: videoClassName,
            ...videoProps
        }, void 0, false, {
            fileName: "[project]/components/video/HoverVideo.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/video/HoverVideo.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HoverVideo, "0CLVWOVx+8g0ODBjgEMJWUwEryM=");
_c = HoverVideo;
var _c;
__turbopack_context__.k.register(_c, "HoverVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_video_HoverVideo_tsx_1570pk0._.js.map