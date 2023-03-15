import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardThreadDetail from '../components/Card/CardThreadDetail';
import ThreadDetail from '../components/ThreadDetail';
import ThreadReplyInput from '../components/ThreadReplyInput';
import {
  asyncAddComment,
  asyncReceiveThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncToggleNeutralDownVoteThreadDetail,
  asyncToggleNeutralUpVoteThreadDetail,
  asyncToggleUpVoteThreadDetail,
} from '../states/threadDetail/action';

function ThreadDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    threadDetail = null,
    authUser,
  } = useSelector((states) => states);

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const replyCommentThread = (content) => {
    dispatch(asyncAddComment({ content, commentTo: id }));
  };

  const onLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleUpVoteThreadDetail(threadId));
  };

  const onDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleDownVoteThreadDetail(threadId));
  };

  const onNeutralLikeThreadDetail = (threadId) => {
    dispatch(asyncToggleNeutralUpVoteThreadDetail(threadId));
  };

  const onNeutralDislikeThreadDetail = (threadId) => {
    dispatch(asyncToggleNeutralDownVoteThreadDetail(threadId));
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <>
      <ThreadDetail
        {...threadDetail}
        authUser={authUser.id}
        like={onLikeThreadDetail}
        dislike={onDislikeThreadDetail}
        neutralLike={onNeutralLikeThreadDetail}
        neutralDislike={onNeutralDislikeThreadDetail}
      />
      <ThreadReplyInput replyComment={replyCommentThread} />
      <h3>
        Comments (
        {threadDetail.comments.length}
        )
      </h3>
      {threadDetail.comments.length > 0
        ? <CardThreadDetail comments={threadDetail.comments} authUser={authUser.id} />
        : <p className="text-center">No Comments</p>}
    </>
  );
}

export default ThreadDetailPage;
