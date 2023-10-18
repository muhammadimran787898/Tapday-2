import { signIn } from "next-auth/react";
import { BsGithub } from "react-icons/bs";
export var GithubButton = function() {
    return /*#__PURE__*/ React.createElement("button", {
        onClick: function() {
            signIn("github");
        }
    }, /*#__PURE__*/ React.createElement(BsGithub, null), "Sign in with Github");
};
