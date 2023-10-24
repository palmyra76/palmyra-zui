import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { StoreFactoryContext } from '../PalmyraContext';

import { FlexiLayoutDefinition, FlexiLayoutRenderer, StringFormat, topic } from 'palmyra-rui';
import { DataStoreFactory } from '../Types';
import { HandlerInput } from '.';
import { getMergedDefaults } from './HandlerUtil';

const GridViewHandler = (p: HandlerInput) => {
    const props: HandlerInput = getMergedDefaults(p);
    const storeFactory: DataStoreFactory<any> = useContext(StoreFactoryContext);
    const params = useParams();
    const [pageDef, setPageDef] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        storeFactory.getPageLayout(params, "grid")
            .then((d) => setPageDef(d))
            .catch(() => { setPageDef(null) });
    }, [params])

    const enhancedPageDef = enhance(pageDef);

    useEffect(() => {
        var idKey = props.idProperty || "id";

        var handle = topic.subscribe("viewPage", (topic, data) => {
            data.id = data[idKey];
            navigate(StringFormat('view/{id}', data));
        });

        return () => {
            topic.unsubscribe(handle);
        }
    }, [params.pageName])

    return <>
        <div> {params.pageName} Grid View</div>
        {pageDef ? <FlexiLayoutRenderer layout={enhancedPageDef}
            mode={'grid'}
            storeFactory={storeFactory} layoutParams={params}
        ></FlexiLayoutRenderer> : <div> Grid Layout Definition not found</div>}
    </>
}

export default GridViewHandler;

function enhance(pageDef: FlexiLayoutDefinition): FlexiLayoutDefinition {
    if (pageDef) {
        const result = pageDef;
        const tableLayout = result.tabs[0]?.sections[0]?.tableLayout;
        if (tableLayout) {
            tableLayout.actionOptions = {
                onClick: {
                    topic: "viewPage"
                }
            }
        }
        return result;
    }
    return pageDef;
}
