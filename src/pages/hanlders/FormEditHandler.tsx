import { useParams } from "react-router-dom";

const FormEditHandler = () => {

    const { pageName } = useParams();

    return <div> {pageName} Edit Form</div>
}

export default FormEditHandler;