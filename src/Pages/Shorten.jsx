import { Col, Container, Row } from "react-bootstrap";
import Navigate from "../Components/Navigate";
import UrlForm from "../Components/URLForm";

function ShortenPage() {
    return (
        <>
            <header>
                <Navigate />
            </header>
            <body>
                <Container className="justify-content-center">
                    <div className="main-container">
                        <h1>Shorten Page</h1>
                        <UrlForm />
                    </div>
                </Container>
            </body>
        </>
    )
}

export default ShortenPage;