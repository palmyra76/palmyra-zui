import { SectionDefinition, SectionType, TabDefinition } from "palmyra-rui";
import { FormSectionBuilder } from "./FormSectionBuilder";
import { GridSectionBuilder } from "./GridSectionBuilder";
import { IFormSectionBuilder, IGridSectionBuilder } from ".";

class TabBuilder {
    tab: TabDefinition;
    constructor(tab: TabDefinition) {
        this.tab = tab;
    }

    viewFormSection(name: string, title?: string): IFormSectionBuilder {
        return new FormSectionBuilder(this._section('view', name, title));
    }

    editFormSection(name: string, title?: string): IFormSectionBuilder {
        return new FormSectionBuilder(this._section('form', name, title));
    }

    gridSection(name: string, title?: string): IGridSectionBuilder {
        return new GridSectionBuilder(this._section('grid', name, title));
    }

    chartSection(name: string, title?: string) {
        return this._section('chart', name, title);
    }

    _section(type: SectionType, name: string, title?: string) {
        var section: SectionDefinition = this.tab.sections.find((section) => {
            return section.name == name;
        })
        if (!section) {
            section = {
                type,
                name, title
            }
            this.tab.sections.push(section);
        }

        return section;
    }
}

export { TabBuilder };
