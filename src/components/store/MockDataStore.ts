import { AuthDecorator, DataStore, GetRequest, NOOPDecorator, QueryOptions, QueryRequest, QueryResponse } from "palmyra-rui";
import { appConfig } from "../../configs/Config";
import axios from 'axios'

class MockDataStore<T> implements DataStore<T>{
    options: Record<string, string>;
    authProvider: AuthDecorator = NOOPDecorator;
    target: string;
    idProperty: string | string[];

    constructor(idProperty: string | string[], o: Record<string, string>, authProvider?: AuthDecorator) {
        this.options = o;
        this.idProperty = idProperty;
        var apiRef = o.pageName;
        var base = appConfig.apiBaseContext;
        this.target = base + apiRef;
        this.authProvider = authProvider || NOOPDecorator;
    }

    query(request: QueryRequest): Promise<QueryResponse<T>> {
        var target = this.target + "/allData.json";
        var client = axios.create();
        return client.get(target).then(d => d.data);
    }

    get(request: GetRequest): Promise<T> {
        throw new Error("Method not implemented.");
    }

    remove(key: any): Promise<T> {
        throw new Error("Method not implemented.");
    }
    getIdentity(o: T) {
        throw new Error("Method not implemented.");
    }

    getIdProperty(): string | string[]{
        return this.idProperty;
    }

    post(data: T, options?: QueryOptions): Promise<T> {
        throw new Error("Method not implemented.");
    }

    put(data: T, options?: QueryOptions): Promise<T> {
        throw new Error("Method not implemented.");
    }

}

export { MockDataStore }