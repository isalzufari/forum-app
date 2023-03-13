import React from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardBody = () => {
  return (
    <Card className='mb-3'>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <p>#tag</p>
        <Link to='/threads'><Card.Title>Special title treatment</Card.Title></Link>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Stack direction='horizontal' gap={3}>
          <Link to="/"><i className="bi bi-hand-thumbs-up"> 2</i></Link>
          <i className="bi bi-hand-thumbs-down"> 1</i>
          <i className="bi bi-reply"> 3</i>
          <p>53 menit lalu</p>
          <p>Dibuat oleh </p>
        </Stack>
      </Card.Body>
    </Card>
  )
}

export default CardBody;
