import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutRenderer } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';
import { HandlerInput } from '.';

const FormNewHandler = (props: HandlerInput) => {
    const storeFactory: DataStoreFactory<any> = useContext(StoreFactoryContext);
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

    useEffect(() => {
        loadPageLayout("new");
    }, [params])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    return <>
        <div> {params.pageName} View Form</div>
        {pageDef ? <FlexiLayoutRenderer layout={pageDef}
            storeFactory={storeFactory} layoutParams={params}
            mode={'formEdit'}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default FormNewHandler;