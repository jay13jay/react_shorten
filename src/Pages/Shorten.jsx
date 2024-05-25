import { Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import { FaClipboardList } from "react-icons/fa";
import Navigate from "../Components/Navigate";
import UrlForm from "../Components/URLForm";

function ShortenPage() {
    const apiURL = "http://localhost:8080/shorten";

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [query, setQuery] = useState("");
    const [retData, setRetData] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    const handleSubmit = (url) => {
        setIsCopied(false);
        setQuery(url);
    }

    const handleCopy = () => {
        navigator.clipboard
          .writeText(retData.url)
          .then(() => setIsCopied(true))
          
    };

    useEffect(function() {
        async function fetchData() {
            try {
                setIsLoading(true);
                setError('');
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        url: query 
                    })
                };
                const res = await fetch(
                    apiURL,
                    requestOptions
                ).catch((err) => {
                    throw new Error(err);
                });


                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const data = await res.json();
                console.log("Data: ", data);
                if (data.Response === "False") {
                    throw new Error(data.Error);
                }

                setRetData(data);
                setError('');
                setIsLoading(false);
                
            } catch (err) {
                setError(err.message);
                // if (err.name === "AbortError") {
                //  setError(err.message);
                // }
                setIsLoading(false);
            }
        }
        if (query) {
            setError('');
            fetchData();
        }

    }, [query]);

    return (
        <>
            <header>
                <Navigate />
            </header>
                <Container className="justify-content-center">
                    <Row>
                        <Col></Col>
                        <Col>
                            <h1 className="page-title">Shorten Page</h1>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Container className="form-group justify-content-center">
                            <UrlForm handleSubmit={handleSubmit}/>
                            <Button 
                                className="submit-button"
                                variant="primary" 
                                type="submit" 
                                onClick={handleSubmit}>
                                    Shorten
                            </Button>
                        </Container>
                        <Container className="form-group justify-content-center">
                            {isLoading && <p>Loading...</p>}
                            {error && <p className="error error-message">{error}</p>}
                            { retData &&
                                <>
                                    <p> Short URL: <a href={retData.url}> {retData.url}</a> </p>
                                    <Button className="submit-button" variant="primary" type="submit" onClick={handleCopy}>
                                        {isCopied ? "Copied!" : "Copy"}
                                    <FaClipboardList name="copy" />
                                    </Button>
                                </>
                            }
                        </Container>
                    </Row>
                </Container>
        </>
    )
}

export default ShortenPage;