import { useParams } from "react-router-dom";

const FormNewHandler = () => {

    const { pageName } = useParams();

    return <div> {pageName} New Form</div>
}

export default FormNewHandler;