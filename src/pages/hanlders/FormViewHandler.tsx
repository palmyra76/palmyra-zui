import { useParams } from "react-router-dom";

const FormViewHandler = () => {

    const {pageName} = useParams();


    return <div> {pageName} Form View</div>
}


export default FormViewHandler;