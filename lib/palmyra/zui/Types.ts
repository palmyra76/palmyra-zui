import { ChartStore, FlexiLayoutDefinition, MenuDef, QueryStore, Store, StoreFactory } from "palmyra-rui";

interface DataStoreFactory<T> extends StoreFactory<T>{
    getMenuStore(): QueryStore<MenuDef>;
    getPageLayout(request: Record<string, string>, action?: string): Promise<FlexiLayoutDefinition>;    
    getGridStore(request: Record<string, string>): QueryStore<T>;
    getFormStore(request: Record<string, string>): Store<T>;
    getChartStore(request: Record<string, string>): ChartStore<T>;
}

export type { DataStoreFactory };