import React, { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ThreadReplyInput({ replyComment }) {
  const [comment, setComment] = useState('');

  const replyThreadHandler = () => {
    if (comment.trim()) {
      replyComment(comment);
      setComment('');
    }
  };

  const handleTextChange = (e) => {
    if (e.target.value.length <= 220) {
      setComment(e.target.value);
    }
  };

  return (
    <Form className="mt-3">
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mb-3"
      >
        <Form.Control
          value={comment}
          onChange={handleTextChange}
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <Button onClick={replyThreadHandler} variant="primary" type="button">
        Submit
      </Button>
    </Form>
  );
}

ThreadReplyInput.propTypes = {
  replyComment: PropTypes.func.isRequired,
};

export default ThreadReplyInput;
