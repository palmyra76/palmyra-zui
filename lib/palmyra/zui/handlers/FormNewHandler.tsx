import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutRenderer } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';
import { HandlerInput } from '.';

const FormNewHandler = (props: HandlerInput) => {
    const appStore: DataStoreFactory<any> = useContext(StoreFactoryContext);
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);

    useEffect(() => {
        appStore.getPageLayout(params, "new").then((d) => setPageDef(d));
    }, [params])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {params.pageName} View Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            storeFactory={appStore} layoutParams={params}
            mode={'formEdit'}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default FormNewHandler;