import { FlexiLayoutDefinition, TabDefinition } from "palmyra-rui";
import { TabBuilder } from "./TabBuilder";
import { IPageBuilder, ITabBuilder } from ".";



class PageBuilder implements IPageBuilder {
    pageDefinition: FlexiLayoutDefinition;

    constructor(type: FlexiLayoutDefinition['type']) {
        this.pageDefinition = {
            tabs: [],
            type: type
        };
    }

    build(): FlexiLayoutDefinition {
        return this.pageDefinition;
    }

    tab(name: string, title?: string): ITabBuilder {
        var tab = this.pageDefinition.tabs.find((tab) => {
            return tab.name == name;
        })
        if (tab)
            return new TabBuilder(tab);

        var tab: TabDefinition = {
            sections: [],
            title: title,
            name
        }
        this.pageDefinition.tabs.push(tab);

        return new TabBuilder(tab);
    }
}

export { PageBuilder };
