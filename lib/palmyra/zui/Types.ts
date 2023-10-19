
interface DataStoreFactory {
    getMenuStore(): any;
    getPageLayoutUrl(pageName: string, action?:string): string;
}

export type {DataStoreFactory};