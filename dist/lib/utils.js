import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return twMerge(clsx(inputs));
}
