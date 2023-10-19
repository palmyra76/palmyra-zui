import { useParams } from "react-router-dom";

const GridTableHandler = () => {

    const { pageName } = useParams();

    return <div> {pageName} Table Grid</div>
}

export default GridTableHandler;