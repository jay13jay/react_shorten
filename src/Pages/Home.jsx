import { Col, Container, Row } from "react-bootstrap";
import Navigate from "../Components/Navigate";

function Home() {
    return (
        <>
            <header>
                <Navigate />
            </header>
            <body>
                <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <div>
                            <h1>Home</h1>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
                </Container>
            </body>
        </>
    )
}

export default Home;