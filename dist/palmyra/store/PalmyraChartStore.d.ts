import { AuthDecorator, ChartStore, QueryRequest } from "palmyra-rui";
declare class PalmyraChartStore<T> implements ChartStore<T> {
    options: Record<string, string>;
    authProvider: AuthDecorator;
    constructor(o: Record<string, string>, authProvider?: AuthDecorator);
    query(request: QueryRequest): Promise<T[]>;
}
export { PalmyraChartStore };
