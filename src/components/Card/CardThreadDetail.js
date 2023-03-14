import React from 'react';
import { Card, Stack, Image } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { postedAt } from '../../utils';

function CardThreadDetail({ comments, authUser }) {
  return (
    <>
      {comments.map((comment) => {
        const isThreadLiked = comment.upVotesBy.includes(authUser);
        const isThreadDisliked = comment.downVotesBy.includes(authUser);

        return (
          <Card className="mb-3" key={comment.id}>
            <Card.Body>
              <Stack>
                <Stack direction="horizontal" gap={3}>
                  <Image roundedCircle width={30} src={comment.owner.avatar} />
                  <p><b>{comment.owner.name}</b></p>
                  <p className="ms-auto">{postedAt(comment.createdAt)}</p>
                </Stack>
                <p>{comment.content}</p>
                <Stack direction="horizontal" gap={3}>
                  <button type="button">
                    {isThreadLiked
                      ? (
                        <i className="bi bi-hand-thumbs-up-fil">
                          {' '}
                          {comment.upVotesBy.length}
                        </i>
                      )
                      : (
                        <i className="bi bi-hand-thumbs-up">
                          {' '}
                          {comment.upVotesBy.length}
                        </i>
                      )}
                  </button>
                  <button type="button">
                    {isThreadDisliked
                      ? (
                        <i className="bi bi-hand-thumbs-down-fill">
                          {' '}
                          {comment.downVotesBy.length}
                        </i>
                      )
                      : (
                        <i className="bi bi-hand-thumbs-down">
                          {' '}
                          {comment.downVotesBy.length}
                        </i>
                      )}
                  </button>
                </Stack>
              </Stack>
            </Card.Body>
          </Card>
        );
      })}
    </>
  );
}

const ownerCommentItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadCommentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerCommentItemShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CardThreadDetail.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(threadCommentItemShape)).isRequired,
  authUser: PropTypes.string.isRequired,
};

export default CardThreadDetail;
