import Form from 'react-bootstrap/Form';

function UrlForm() {
    return (
        <Form>
            <Form.Group 
                className="mb-12" 
                controlId="formBasicEmail">
                <Form.Control
                    type="text" 
                    placeholder="Enter url to shorten" 
                    className="url-form"/>
            </Form.Group>
        </Form>
    );
}

export default UrlForm;