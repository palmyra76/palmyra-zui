
interface DataStoreFactory {
    getMenuStore(): any;
    getPageLayoutUrl(pageName: string): string;
}