import { useParams } from "react-router-dom";

const GridCardHandler = () => {

    const { pageName } = useParams();

    return <div> {pageName} Card Grid</div>
}

export default GridCardHandler;