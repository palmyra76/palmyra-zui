import { ChartStore, FlexiLayoutDefinition, MenuDef, QueryStore, DataStore, LookupStore } from "palmyra-rui";
import { DataStoreFactory } from "../../main";
declare class PalmyraStoreFactory<T> implements DataStoreFactory<T> {
    getMenuStore(): QueryStore<MenuDef>;
    getPageLayout(request: Record<string, string>, action?: string): Promise<FlexiLayoutDefinition>;
    getGridStore(request: Record<string, string>, idProperty: string | string[]): QueryStore<T>;
    getLookupStore(request: Record<string, string>, idProperty: string | string[]): LookupStore<T>;
    getFormStore(request: Record<string, string>, idProperty: string | string[]): DataStore<T>;
    getChartStore(request: Record<string, string>): ChartStore<T>;
}
export default PalmyraStoreFactory;
