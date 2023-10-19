import { useContext, useEffect, useRef, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../Contexts';
import AppDataStoreFactory from '../../../../src/components/store/AppDataStoreFactory';

import { FlexiLayoutRenderer } from 'palmyra-rui';

const FormEditHandler = () => {
    const appStore: AppDataStoreFactory = useContext(StoreFactoryContext);
    const { pageName } = useParams();
    const [pageDef, setPageDef] = useState({
        layout: undefined
    });

    useEffect(() => {
        var url = appStore.getPageLayoutUrl(pageName, "edit");
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

export default FormEditHandler;