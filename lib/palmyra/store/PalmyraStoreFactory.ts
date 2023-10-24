import { ChartStore, FlexiLayoutDefinition, MenuDef, QueryStore, DataStore, StringFormat } from "palmyra-rui";
import { DataStoreFactory } from "../../main";
import { PalmyraDataStore } from "./PalmyraDataStore";
import { PalmyraChartStore } from "./PalmyraChartStore";

class PalmyraStoreFactory<T> implements DataStoreFactory<T> {
    getMenuStore(): QueryStore<MenuDef> {
        throw new Error("not implemented");
    }
    getPageLayout(request: Record<string, string>, action?: string): Promise<FlexiLayoutDefinition> {
        const format: string = "/api/webconfig/{pageName}/{action}.json";
        var url: any = StringFormat(format, { ...request, action });
        return fetch(url)
            .then((response) => response.json());
    }

    getGridStore(request: Record<string, string>, idProperty: string | string[]): QueryStore<T> {
        return new PalmyraDataStore(idProperty, request);
    }

    getFormStore(request: Record<string, string>, idProperty: string | string[]): DataStore<T> {
        return new PalmyraDataStore(idProperty, request);
    }

    getChartStore(request: Record<string, string>): ChartStore<T> {
        return new PalmyraChartStore(request);
    }
}

export default PalmyraStoreFactory;