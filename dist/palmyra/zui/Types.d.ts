import { FlexiLayoutDefinition, MenuDef, QueryStore, StoreFactory } from "palmyra-rui";
interface DataStoreFactory<T> extends StoreFactory<T> {
    getMenuStore(): QueryStore<MenuDef>;
    getPageLayout(request: Record<string, string>, action?: string): Promise<FlexiLayoutDefinition>;
}
export type { DataStoreFactory };
