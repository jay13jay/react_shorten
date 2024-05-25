import Navigate from "../Components/Navigate";
function NotFound() {
    return (
        <>
            <Navigate />
            <div className="main-container">
                <div className="error-message">
                    <h3>404 - Page Not Found</h3>
                    <p>Please try another page 🙃</p>
                </div>
            </div>
        </>
    )
}

export default NotFound;