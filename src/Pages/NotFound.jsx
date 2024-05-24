import Navigate from "../Components/Navigate";
import { Row, Col } from "react-bootstrap";
function NotFound() {
    return (
        <>
            <Navigate />
            <div className="main-container">
                <div className="error-message">
                    <h1>404 - Page Not Found</h1>
                    <p>Please try another page 🙃</p>
                </div>
            </div>
        </>
    )
}

export default NotFound;