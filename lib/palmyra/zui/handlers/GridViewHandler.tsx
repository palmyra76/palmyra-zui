import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutRenderer } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';

const GridViewHandler = () => {
    const storeFactory: DataStoreFactory<any> = useContext(StoreFactoryContext);
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);

    useEffect(() => {
        storeFactory.getPageLayout(params, "grid")
            .then((d) => setPageDef(d))
            .catch(() => { setPageDef(null) });
    }, [params])


    return <>
        <div> {params.pageName} Grid View</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            mode={'grid'}
            storeFactory={storeFactory} layoutParams={params}
        ></FlexiLayoutRenderer> : <div> Grid Layout Definition not found</div>}
    </>
}

export default GridViewHandler;