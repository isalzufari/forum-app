import React from 'react';
import { Stack, Badge } from 'react-bootstrap';
import parse from 'html-react-parser';
import PropTypes from 'prop-types';
import { postedAt } from '../utils';

function ThreadDetail({
  id,
  category,
  title,
  body,
  createdAt,
  owner,
  authUser,
  upVotesBy,
  downVotesBy,
  like,
  dislike,
  neutralLike,
  neutralDislike,
}) {
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

  return (
    <>
      <Badge pill bg="dark">
        #
        {category}
      </Badge>
      <h1>{title}</h1>
      <p>{parse(body)}</p>
      <Stack direction="horizontal" gap={3}>
        <button onClick={onLikeClick} type="button">
          {isThreadLiked
            ? (
              <i className="bi bi-hand-thumbs-up-fill">
                {upVotesBy.length}
              </i>
            )
            : (
              <i className="bi bi-hand-thumbs-up">
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
        <i className="bi bi-reply"> 3</i>
        <p>{postedAt(createdAt)}</p>
        <p>
          Dibuat oleh
          @
          {owner.name}
        </p>
      </Stack>
    </>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralLike: PropTypes.func.isRequired,
  neutralDislike: PropTypes.func.isRequired,
};

export default ThreadDetail;
