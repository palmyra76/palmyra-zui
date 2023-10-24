import { FieldDefinition, FormLayout, SectionDefinition } from "palmyra-rui";
import { IFormSectionBuilder } from ".";

class FormSectionBuilder implements IFormSectionBuilder {

    section: SectionDefinition;
    constructor(section: SectionDefinition) {
        this.section = section;
        this.section.formLayout = {
            fields: []
        };
    }

    _getLayout(): FormLayout {
        return this.section.formLayout;
    }

    getField(name: string): FieldDefinition {
        return this._getLayout().fields.find((field) => {
            return field.name = name;
        });
    }

    field(name: string, type: FieldDefinition['type'], title: string, attribute?: string): IFormSectionBuilder {
        if (!attribute)
            attribute = name;

        var field: FieldDefinition = {
            name, title, type, attribute, errorMessage: {
                "default": "Invalid"
            }
        }
        this._getLayout().fields.push(field);
        return this;
    }

    addFields(fields: FieldDefinition[]): IFormSectionBuilder {
        fields.map((field) => {
            this._getLayout().fields.push(field);
        });
        return this;
    }
}

export { FormSectionBuilder };
