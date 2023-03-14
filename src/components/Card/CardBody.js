import React from 'react';
import { Card, Stack, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';

function CardBody({
  id,
  title,
  body,
  category,
  totalComments,
  createdAt,
  downVotesBy,
  upVotesBy,
  user,
  authUser,
  like,
  dislike,
  neutralLike,
  neutralDislike,
}) {
  const navigate = useNavigate();
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (e) => {
    e.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      like(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
      like(id);
    } else if (isThreadLiked) {
      neutralLike(id);
    }
  };

  const onDislikeClick = (e) => {
    e.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      dislike(id);
    } else if (isThreadLiked) {
      neutralLike(id);
      dislike(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
    }
  };

  const onThreadClick = () => {
    navigate(`/thread/${id}`);
  };

  const onThreadPress = (e) => {
    if (e.key === 'Enter' || e.key === '') {
      navigate(`/thread/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} onClick={onThreadClick} onKeyDown={onThreadPress}>
      <Card className="mb-3">
        {/* <Card.Header>Featured</Card.Header> */}
        <Card.Body>
          <Badge pill bg="dark">
            #
            {category}
          </Badge>
          <Card.Title>{title}</Card.Title>
          <Card.Text as="div">
            {parse(body.substring(0, 80))}
            ...
          </Card.Text>
          <Stack direction="horizontal" gap={3}>
            <button onClick={onLikeClick} type="button">
              {isThreadLiked
                ? (
                  <i className="bi bi-hand-thumbs-up-fill">
                    {' '}
                    {upVotesBy.length}
                  </i>
                )
                : (
                  <i className="bi bi-hand-thumbs-up">
                    {' '}
                    {upVotesBy.length}
                  </i>
                )}
            </button>
            <button onClick={onDislikeClick} type="button">
              {isThreadDisliked
                ? (
                  <i className="bi bi-hand-thumbs-down-fill">
                    {' '}
                    {downVotesBy.length}
                  </i>
                )
                : (
                  <i className="bi bi-hand-thumbs-down">
                    {' '}
                    {downVotesBy.length}
                  </i>
                )}
            </button>
            <i className="bi bi-reply">
              {totalComments}
            </i>
            <p>{postedAt(createdAt)}</p>
            <p>
              Dibuat oleh
              {' '}
              {user.name}
            </p>
          </Stack>
        </Card.Body>
      </Card>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

CardBody.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.shape(userShape).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralLike: PropTypes.func.isRequired,
  neutralDislike: PropTypes.func.isRequired,
};

export default CardBody;
