import { FieldDefinition, FormLayout, SectionDefinition } from "palmyra-rui";
import { IFormSectionBuilder } from ".";
declare class FormSectionBuilder implements IFormSectionBuilder {
    section: SectionDefinition;
    constructor(section: SectionDefinition);
    _getLayout(): FormLayout;
    getField(name: string): FieldDefinition;
    field(name: string, type: FieldDefinition['type'], title: string, attribute?: string): IFormSectionBuilder;
    addFields(fields: FieldDefinition[]): IFormSectionBuilder;
}
export { FormSectionBuilder };
