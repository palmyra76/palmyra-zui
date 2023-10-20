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
        storeFactory.getPageLayout(params, "grid").then((d) => setPageDef(d));
    }, [params])
    
    return <>
        <div> {params.pageName} View Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}  
        storeFactory={storeFactory}          
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default GridViewHandler;