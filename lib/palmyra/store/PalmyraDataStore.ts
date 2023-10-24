import { AuthDecorator, DataStore, GetRequest, NOOPDecorator, QueryOptions, QueryRequest, QueryResponse } from "palmyra-rui";

class PalmyraDataStore<T> implements DataStore<T>{
    options: Record<string, string>;
    authProvider: AuthDecorator = NOOPDecorator;
    idProperty: string | string[];

    constructor(idProperty: string | string[], o: Record<string, string>, authProvider?: AuthDecorator) {
        this.idProperty = idProperty || "id";
        this.options = o;
        this.authProvider = authProvider || NOOPDecorator;
    }

    query(request: QueryRequest): Promise<QueryResponse<T>> {
        throw new Error("Method not implemented.");
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

export { PalmyraDataStore }