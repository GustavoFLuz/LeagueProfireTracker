import { useLocation } from "react-router-dom";

export default function ErrorPage() {
    const location = useLocation();
    return <div>
        <h1 color="red">Error 404: path {location.pathname} does not exist</h1>
    </div>
}