import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutRenderer } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';

const FormEditHandler = () => {
    const appStore: DataStoreFactory<any> = useContext(StoreFactoryContext);

    const params = useParams();
    const [pageDef, setPageDef] = useState(null);

    useEffect(() => {
        appStore.getPageLayout(params, "view")
            .then((d) => { console.log(d); setPageDef(d) })
            .catch((r) => setPageDef(null));
    }, [params])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {params.pageName} Edit Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            storeFactory={appStore}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default FormEditHandler;