import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutRenderer } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';

const FormViewHandler = () => {
    const appStore: DataStoreFactory = useContext(StoreFactoryContext);
    const { pageName } = useParams();
    const [pageDef, setPageDef] = useState({layout:undefined});

    useEffect(() => {
        var url = appStore.getPageLayoutUrl(pageName, "view");
        fetch(url).then((response) => response.json()).then((d) => setPageDef(d));
    }, [pageName])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {pageName} View Form</div>
        {pageDef.layout ? <FlexiLayoutRenderer layout={pageDef.layout}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default FormViewHandler;