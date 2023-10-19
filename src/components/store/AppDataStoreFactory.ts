class AppDataStoreFactory implements DataStoreFactory{
    getStore(key: string) {
        throw new Error("Method not implemented.");
    }
    getMenuStore(key: string) {
        throw new Error("Method not implemented.");
    }
}

export default AppDataStoreFactory;