import { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { StoreFactoryContext } from '../Contexts';
import AppDataStoreFactory from '../../../../src/components/store/AppDataStoreFactory';

import {hello} from './view'

import { FlexiLayoutRenderer } from 'palmyra-rui';

const FormViewHandler = () => {
    const appStore: AppDataStoreFactory = useContext(StoreFactoryContext);
    const { pageName } = useParams();
    const [pageDef, setPageDef] = useState(hello);

    useEffect(() => {
        var url = appStore.getPageLayoutUrl(pageName, "view");
        fetch(url).then((response) => response.json()).then((d) => setPageDef(d));
    }, [pageName])

    const onValidChange = (valid: boolean) => {
        console.log(valid);
    }

    console.log(pageDef);

    return <>
        <div> {pageName} View Form</div>
        {pageDef.layout ? <FlexiLayoutRenderer layout={pageDef.layout}
            callbacks={{ onFormValidChange: onValidChange }}
        ></FlexiLayoutRenderer> : <div />}
    </>
}

export default FormViewHandler;