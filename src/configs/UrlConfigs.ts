const prefix = '/';

const Urls = {
    'menu': 'api/webconfig/sideMenu.json',
    'users': {
        'grid': 'api/webconfig/users/grid.json'
    }
}


const getUrl = (key: string, action?: string): string => {
    if (action) {
        return Urls[key][action];
    } else {
        if (Urls[key])
            return prefix + Urls[key];
        else
            throw new Error("url for key " + key + " not configured");
    }
}

export { getUrl };
