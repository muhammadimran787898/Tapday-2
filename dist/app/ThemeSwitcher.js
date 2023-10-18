"use client";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
// import { Switch } from ''
// import { Label } from '@/components/ui/label'
var ThemeSwitcher = function() {
    var _useState = _sliced_to_array(useState(false), 2), mounted = _useState[0], setMounted = _useState[1];
    var _useTheme = useTheme(), theme = _useTheme.theme, setTheme = _useTheme.setTheme;
    useEffect(function() {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("div", {
        className: "flex items-center space-x-2"
    }), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            return setTheme("light");
        }
    }, "Light Mode"), /*#__PURE__*/ React.createElement("br", null), /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            return setTheme("dark");
        }
    }, "Dark Mode"));
};
export default ThemeSwitcher;
