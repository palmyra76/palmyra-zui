import { ChartStore, FlexiLayoutDefinition, MenuDef, QueryStore, Store, StringFormat } from "palmyra-rui";
import { DataStoreFactory } from "../../../lib/main";

class AppDataStoreFactory<T> implements DataStoreFactory<T> {
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
        console.log(request);
        throw new Error("not implemented");
    }

    getFormStore(request: Record<string, string>): Store<T> {
        throw new Error("not implemented");
    }

    getChartStore(request: Record<string, string>): ChartStore<T> {
        throw new Error("not implemented");
    }
}

export default AppDataStoreFactory;