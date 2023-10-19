import { FlexiLayoutDefinition, MenuDef, QueryStore } from "palmyra-rui";

interface DataStoreFactory {
    getMenuStore(): QueryStore<MenuDef>;
    getPageLayout(pageName: string, action?:string): Promise<FlexiLayoutDefinition>;
}

export type {DataStoreFactory};