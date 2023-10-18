import { signIn } from "next-auth/react";
import { BsFacebook } from "react-icons/bs";
// import styles from "./index.module.scss"
export var FacebookButton = function() {
    return /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            signIn("facebook");
        }
    }, /*#__PURE__*/ React.createElement(BsFacebook, null), "Sign in with Facebook");
};
