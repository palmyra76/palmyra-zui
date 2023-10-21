import { FlexiLayoutDefinition, MenuDef, QueryStore, StoreFactory } from "palmyra-rui";

// TODO - change to a reasonable name for this type.
interface DataStoreFactory<T> extends StoreFactory<T>{
    getMenuStore(): QueryStore<MenuDef>;
    getPageLayout(request: Record<string, string>, action?: string): Promise<FlexiLayoutDefinition>;
}

export type { DataStoreFactory };