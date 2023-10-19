
import { useEffect, useState } from "react";
import { StaticTreeMenu } from 'palmyra-rui'
import { getUrl } from "../../configs/UrlConfigs";

const orgRoutes = {
    children: [
        {
            name: "Master Data"
        }
    ]
};

const ApplicationMenu = () => {
    const [routes, setRoutes] = useState(orgRoutes);

    const loadMenu = () => {
        fetch(getUrl('menu')).then((response) => response.json()).then((d) => setRoutes(d));
    }

    useEffect(() => {
        loadMenu();
    }, []);

    return (
        <StaticTreeMenu appRoutes={routes.children} />
    )
}

export default ApplicationMenu;