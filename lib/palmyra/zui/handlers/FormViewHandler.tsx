import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutRenderer, GetRequest } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';
import { HandlerInput } from '.';
import { getMergedDefaults } from './HandlerUtil';

const FormViewHandler = (p: HandlerInput) => {
    const props = getMergedDefaults(p);
    const storeFactory: DataStoreFactory<any> = useContext(StoreFactoryContext);
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);
    const [data, setData] = useState(null);

    const loadPageLayout = (type: string) => {
        try {
            storeFactory.getPageLayout(params, type)
                .then((d) => setPageDef(d))
                .catch(() => { setPageDef(null) });
        } catch (e) {
            console.log(e);
            console.log("Error while getting pageLayout")
        }
    }

    const loadPageData = () => {
        try {
            const id = params.id;
            const formStore = storeFactory.getFormStore(params, getIdKey());
            var request: GetRequest = {
                key: id
            }
            formStore.get(request).then(d => { console.log(d); setData(d) });
        } catch (e) {
            console.log(e);
            console.log("Error while loading data");
        }
    }

    useEffect(() => {
        loadPageLayout("view");
        loadPageData();
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
            storeFactory={storeFactory} layoutParams={params}
            mode={'formView'} data={data}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default FormViewHandler;