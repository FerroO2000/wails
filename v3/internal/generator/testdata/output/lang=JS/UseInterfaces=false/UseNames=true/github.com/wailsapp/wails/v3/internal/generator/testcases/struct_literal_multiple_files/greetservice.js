// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call, Create as $Create} from "/wails/runtime.js";

/**
 * @param {string} name
 * @returns {Promise<string> & { cancel(): void }}
 */
export function Greet(name) {
    let $resultPromise = /** @type {any} */($Call.ByName("main.GreetService.Greet", name));
    return $resultPromise;
}