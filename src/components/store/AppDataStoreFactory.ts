import { FlexiLayoutDefinition, MenuDef, QueryStore } from "palmyra-rui";
import { DataStoreFactory } from "../../../lib/main";

class AppDataStoreFactory implements DataStoreFactory {
    getMenuStore(): QueryStore<MenuDef>{
        throw new Error('not implemented');
    }
    getPageLayout(pageName: string, action?:string): Promise<FlexiLayoutDefinition>{
        throw new Error('not implemented');
    }
}

export default AppDataStoreFactory;