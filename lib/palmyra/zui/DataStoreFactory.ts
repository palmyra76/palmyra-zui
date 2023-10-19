
interface DataStoreFactory {
    getStore(key: string): any;
    getMenuStore(key: string): any;
}