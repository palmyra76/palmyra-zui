import { ColumnDefinition, SectionDefinition } from "palmyra-rui";
import { IGridSectionBuilder } from ".";


class GridSectionBuilder implements IGridSectionBuilder {
    section: SectionDefinition;
    constructor(section: SectionDefinition) {
        this.section = section;
        this.section.tableLayout = {
            fields: []
        };
    }

    _getLayout() {
        return this.section.tableLayout;
    }

    getField(name: string): ColumnDefinition {
        return this._getLayout().fields.find((field) => {
            return field.name = name;
        });
    }

    field(name: string, type: ColumnDefinition['type'], title: string, attribute?: string): GridSectionBuilder {
        if (!attribute)
            attribute = name;
        var field: ColumnDefinition = {
            title, type, name, attribute
        }
        this._getLayout().fields.push(field);
        return this;
    }

    addFields(fields: ColumnDefinition[]): GridSectionBuilder {
        fields.map((field) => {
            this._getLayout().fields.push(field);
        });
        return this;
    }
}

export { GridSectionBuilder };
