import React from 'react';
import PropTypes from 'prop-types';
import CardBody from './Card/CardBody';
import { threadItemShape } from '../utils/propsValidate';

function Thread({
  threads,
  like,
  dislike,
  neutralLike,
  neutralDislike,
}) {
  return (
    <>
      {
        threads.map((thread) => (
          <CardBody
            key={thread.id}
            {...thread}
            like={like}
            dislike={dislike}
            neutralLike={neutralLike}
            neutralDislike={neutralDislike}
          />
        ))
      }
    </>
  );
}

Thread.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralLike: PropTypes.func.isRequired,
  neutralDislike: PropTypes.func.isRequired,
};

export default Thread;
