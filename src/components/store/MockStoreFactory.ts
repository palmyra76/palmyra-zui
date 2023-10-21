import { ChartStore, FlexiLayoutDefinition, MenuDef, QueryStore, DataStore, StringFormat } from "palmyra-rui";
import { MockDataStore } from "./MockDataStore";
import { MockChartStore } from "./MockChartStore";
import { DataStoreFactory } from "../../../lib/main";

class MockStoreFactory<T> implements DataStoreFactory<T> {
    getMenuStore(): QueryStore<MenuDef> {
        throw new Error("not implemented");
    }
    getPageLayout(request: Record<string, string>, action?: string): Promise<FlexiLayoutDefinition> {
        const format: string = "/api/webconfig/{pageName}/{action}.json";
        var url:any = StringFormat(format, {...request, action});        
        return fetch(url)
            .then((response) => response.json());
    }

    getGridStore(request: Record<string, string>): QueryStore<T> {
        return new MockDataStore(request);
    }

    getFormStore(request: Record<string, string>): DataStore<T> {
        return new MockDataStore(request);
    }

    getChartStore(request: Record<string, string>): ChartStore<T> {
        return new MockChartStore(request);
    }
}

export default MockStoreFactory;