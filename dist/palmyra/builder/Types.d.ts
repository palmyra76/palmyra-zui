import { ColumnDefinition, FieldDefinition, FlexiLayoutDefinition } from "palmyra-rui";
interface IPageBuilder {
    tab(name: string, title?: string): ITabBuilder;
    build(): FlexiLayoutDefinition;
}
interface IFormSectionBuilder {
    getField(name: string): FieldDefinition;
    field(name: string, type: FieldDefinition['type'], title: string, attribute?: string): IFormSectionBuilder;
    addFields(fields: FieldDefinition[]): IFormSectionBuilder;
}
interface IGridSectionBuilder {
    getField(name: string): ColumnDefinition;
    field(name: string, type: ColumnDefinition['type'], title: string, attribute?: string): IGridSectionBuilder;
    addFields(fields: ColumnDefinition[]): IGridSectionBuilder;
}
interface ITabBuilder {
    viewFormSection(name: string, title?: string): IFormSectionBuilder;
    editFormSection(name: string, title?: string): IFormSectionBuilder;
    gridSection(name: string, title?: string): IGridSectionBuilder;
}
export type { IPageBuilder, ITabBuilder, IFormSectionBuilder, IGridSectionBuilder };
