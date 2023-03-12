import React from 'react';
import { Card, Stack, Image } from 'react-bootstrap';

const CardThreadDetail = () => {
  return (
    <Card className='mb-3'>
      <Card.Body>
        <Stack>
          <Stack direction='horizontal' gap={3}>
            <Image roundedCircle width={30} src='https://ui-avatars.com/api/?name=haloo@gmail.com&background=random' />
            <p><b>Haloo@gmail.com</b></p>
            <p className='ms-auto'>3 menit lalu</p>
          </Stack>
          <p>Content</p>
          <Stack direction='horizontal' gap={3}>
            <i class="bi bi-hand-thumbs-up"> 2</i>
            <i class="bi bi-hand-thumbs-down"> 1</i>
          </Stack>
        </Stack>
      </Card.Body>
    </Card >
  )
}

export default CardThreadDetail