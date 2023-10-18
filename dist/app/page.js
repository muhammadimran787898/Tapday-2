"use client";
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _templateObject() {
    var data = _tagged_template_literal([
        "how to become rich."
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
import { useLingui } from "@lingui/react";
import { t } from "@lingui/macro";
var HomeComponent = function() {
    var i18n = useLingui().i18n;
    return /*#__PURE__*/ React.createElement(React.Fragment, null, i18n._(t(_templateObject())));
};
export default HomeComponent;
