const prefix = '/';

const Urls = {
    'menu': 'MenuDef.json'
}


const getUrl = (key: string): string => {
    if (Urls[key])
        return prefix + Urls[key];
    else
        throw new Error("url for key " + key + " not configured");

}

export { getUrl };
