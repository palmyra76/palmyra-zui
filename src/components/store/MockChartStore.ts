import { AuthDecorator,NOOPDecorator, ChartStore, QueryRequest } from "palmyra-rui";


class MockChartStore<T> implements ChartStore<T>{
    options: Record<string, string>;
    authProvider: AuthDecorator = NOOPDecorator;

    constructor(o: Record<string, string>, authProvider?: AuthDecorator) {
        this.options = o;
        this.authProvider = authProvider ||  NOOPDecorator;
    }

    query(request: QueryRequest): Promise<T[]> {
        throw new Error("Method not implemented.");
    }
}

export { MockChartStore }