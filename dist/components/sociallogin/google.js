import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
export var GoogleButton = function() {
    return /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            signIn("google");
        }
    }, /*#__PURE__*/ React.createElement(FcGoogle, null), "Sign in with Google");
};
