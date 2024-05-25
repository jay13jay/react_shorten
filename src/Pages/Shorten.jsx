import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

import Navigate from "../Components/Navigate";
import UrlForm from "../Components/URLForm";

function ShortenPage() {
    const apiURL = "http://localhost:8080/shorten";

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [query, setQuery] = useState("");
    const [retData, setRetData] = useState("");

    const handleSubmit = (url) => {
        setQuery(url);
    }

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
                if (err.name === "AbortError") {
                setError(err.message);
                }
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
                    <div className="main-container">
                        <h1>Shorten Page</h1>
                        <UrlForm handleSubmit={handleSubmit}/>
                        { retData && <p> Short URL: {retData.url}</p>}
                    </div>
                </Container>
        </>
    )
}

export default ShortenPage;