import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SearchForm extends React.Component {
    render() {
        return (
            <>
                <Form onSubmit={this.props.display}>
                    <Form.Group className="mb-3" controlId="nameField">
                        <Form.Label>City name</Form.Label>
                        <Form.Control type="text" placeholder="Enter a city name" />
                        </Form.Group>
                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>
                </Form>
            </>
        )
    }
}
export default SearchForm;