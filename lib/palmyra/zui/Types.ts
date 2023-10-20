import { FlexiLayoutDefinition, MenuDef, QueryStore } from "palmyra-rui";

interface DataStoreFactory {
    getMenuStore(): QueryStore<MenuDef>;
    getPageLayout(request: Record<string,string>, action?:string): Promise<FlexiLayoutDefinition>;
}

export type {DataStoreFactory};