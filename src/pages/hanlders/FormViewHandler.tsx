import { useParams } from "react-router-dom";

const FormViewHandler = () => {

    const { pageName } = useParams();

    return <div> {pageName} View Form</div>
}

export default FormViewHandler;