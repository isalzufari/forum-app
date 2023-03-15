import React, { useState } from 'react';
import {
  Form, FloatingLabel, Button, Row, Col,
} from 'react-bootstrap';
import PropTypes from 'prop-types';

function ThreadInput({ threadInput }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [body, setBody] = useState('');

  const threadInputHandler = (e) => {
    e.preventDefault();
    if (title.trim() && category.trim() && body.trim()) {
      threadInput(title, body, category);
      setTitle('');
      setBody('');
      setCategory('');
    }
  };

  return (
    <Form onSubmit={threadInputHandler}>
      <Row>
        <Col>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        </Col>
        <Col>
          <Form.Control value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" />
        </Col>
      </Row>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Threads"
        className="mb-3 mt-3"
      >
        <Form.Control
          value={body}
          onChange={(e) => setBody(e.target.value)}
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Discuss
      </Button>
    </Form>
  );
}

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
