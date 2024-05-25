import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function UrlForm({ handleSubmit }) {
    const [query, setQuery] = useState('');

    const submitQuery = (e) => {
        e.preventDefault();
        handleSubmit(query);
    }

    return (
        <Form onSubmit={ submitQuery }>
            <Form.Group 
                className="mb-12" 
                controlId="formBasicEmail">
                <Form.Control
                    type="text" 
                    placeholder="Enter url to shorten" 
                    className="url-form"
                    onChange={ e => setQuery(e.target.value)}/>
            </Form.Group>
        </Form>
    );
}

UrlForm.propTypes = {
    handleSubmit: PropTypes.func
}

export default UrlForm;