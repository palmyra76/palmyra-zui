import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutRenderer, GetRequest } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';
import { HandlerInput } from '.';
import { getMergedDefaults } from './HandlerUtil';

const FormViewHandler = (p: HandlerInput) => {
    const props = getMergedDefaults(p);
    const appStore: DataStoreFactory<any> = useContext(StoreFactoryContext);
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        appStore.getPageLayout(params, "view").then((d) => setPageDef(d));
        const id = params.id;
        const formStore = appStore.getFormStore(params, getIdKey());
        var request: GetRequest = {
            key: id
        }
        formStore.get(request).then(d => { console.log(d); setData(d) });
    }, [params])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    const enhancedPageDef = pageDef;

    const getIdKey = () => {
        return enhancedPageDef?.idProperty || props.idProperty || "id";
    }

    return <>
        <div> {params.pageName} View Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            storeFactory={appStore} layoutParams={params}
            mode={'formView'} data={data}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default FormViewHandler;