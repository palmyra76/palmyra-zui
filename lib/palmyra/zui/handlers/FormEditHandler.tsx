import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutRenderer, GetRequest } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';
import { HandlerInput } from '.';

const FormEditHandler = (props: HandlerInput) => {
    const storeFactory: DataStoreFactory<any> = useContext(StoreFactoryContext);
    const [data, setData] = useState(null);
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);

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

    const enhancedPageDef = pageDef;
    
    const getIdKey = () => {
        return enhancedPageDef?.idProperty || props.idProperty || "id";
    }

    useEffect(() => {
        loadPageLayout("edit");
        loadPageData();
    }, [params])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {params.pageName} Edit Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            storeFactory={storeFactory} layoutParams={params}
            mode={'formEdit'} data={data}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default FormEditHandler;