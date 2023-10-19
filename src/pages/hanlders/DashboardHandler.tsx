import { useParams } from "react-router-dom";

const DashboardHandler = () => {

    const { pageName } = useParams();

    return <div> {pageName} Dashboard</div>
}

export default DashboardHandler;