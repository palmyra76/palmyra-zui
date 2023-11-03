import { AuthDecorator, DataStore, GetRequest, QueryOptions, QueryRequest, QueryResponse } from "palmyra-rui";
declare class PalmyraDataStore<T> implements DataStore<T> {
    options: Record<string, string>;
    authProvider: AuthDecorator;
    idProperty: string | string[];
    constructor(idProperty: string | string[], o: Record<string, string>, authProvider?: AuthDecorator);
    query(request: QueryRequest): Promise<QueryResponse<T>>;
    get(request: GetRequest): Promise<T>;
    remove(key: any): Promise<T>;
    getIdentity(o: T): void;
    getIdProperty(): string | string[];
    post(data: T, options?: QueryOptions): Promise<T>;
    put(data: T, options?: QueryOptions): Promise<T>;
}
export { PalmyraDataStore };
