import FormNewHandler from "./FormNewHandler";
import FormEditHandler from "./FormEditHandler";
import FormViewHandler from "./FormViewHandler";
import GridViewHandler from "./GridViewHandler";
interface HandlerInput {
    idProperty?: string;
}
export { FormEditHandler, FormViewHandler, FormNewHandler, GridViewHandler };
export type { HandlerInput };
