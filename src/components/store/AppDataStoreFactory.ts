import { DataStoreFactory } from "../../../lib/palmyra/zui/Types";

class AppDataStoreFactory implements DataStoreFactory {
    getMenuStore() {
        throw new Error("Method not implemented.");
    }
    getPageLayoutUrl(pageName: string, action?: string): string {
        if (action) {
            return '/api/pageDefs/' + pageName + "/" + action + ".json";
        } else
            return '/api/pageDefs/' + pageName + ".json";
    }
}

export default AppDataStoreFactory;