import { SectionDefinition, SectionType, TabDefinition } from "palmyra-rui";
import { IFormSectionBuilder, IGridSectionBuilder } from ".";
declare class TabBuilder {
    tab: TabDefinition;
    constructor(tab: TabDefinition);
    viewFormSection(name: string, title?: string): IFormSectionBuilder;
    editFormSection(name: string, title?: string): IFormSectionBuilder;
    gridSection(name: string, title?: string): IGridSectionBuilder;
    chartSection(name: string, title?: string): SectionDefinition;
    _section(type: SectionType, name: string, title?: string): SectionDefinition;
}
export { TabBuilder };
