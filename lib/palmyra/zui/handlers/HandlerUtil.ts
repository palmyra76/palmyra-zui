import { mergeDeep } from "palmyra-rui";
import { HandlerInput } from ".";

const DEFAULT_HANDLER_INPUT: HandlerInput = {
    idProperty: "id"
}

// Do not export outside the folder
const getMergedDefaults = (value: HandlerInput) => {
    return mergeDeep({}, DEFAULT_HANDLER_INPUT, value);
}

export { getMergedDefaults }