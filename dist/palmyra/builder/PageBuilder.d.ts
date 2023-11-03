import { FlexiLayoutDefinition } from "palmyra-rui";
import { IPageBuilder, ITabBuilder } from ".";
declare class PageBuilder implements IPageBuilder {
    pageDefinition: FlexiLayoutDefinition;
    constructor(type: FlexiLayoutDefinition['type']);
    build(): FlexiLayoutDefinition;
    tab(name: string, title?: string): ITabBuilder;
}
export { PageBuilder };
