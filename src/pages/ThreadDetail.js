import React from 'react';
import { Stack, Form, FloatingLabel } from 'react-bootstrap';
import CardThreadDetail from '../components/Card/CardThreadDetail';

const ThreadDetail = () => {
  return (
    <>
      <p>#tag</p>
      <h1>Title</h1>
      <p>Content</p>
      <Stack direction='horizontal' gap={3}>
        <i class="bi bi-hand-thumbs-up"> 2</i>
        <i class="bi bi-hand-thumbs-down"> 1</i>
        <i class="bi bi-reply"> 3</i>
        <p>53 menit lalu</p>
        <p>Dibuat oleh </p>
      </Stack>
      <FloatingLabel
        controlId="floatingTextarea"
        label="Comments"
        className="mt-3"
      >
        <Form.Control
          as='textarea'
          placeholder='Leave a comment here'
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      <h3>Komentar (1)</h3>
      <CardThreadDetail />
      <CardThreadDetail />
    </>
  )
}

export default ThreadDetail