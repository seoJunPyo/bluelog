import React from 'react';
import { useLazyGetCommentsQuery } from '../services/commentsApi';

const useCommentPage = ({ postId }) => {
  const [comments, setComments] = React.useState([]);
  const [nextPage, setNextPage] = React.useState(null);
  const [trigger, { isLoading }] = useLazyGetCommentsQuery();

  React.useEffect(() => {
    (async () => {
      const { data } = await trigger({ postId });

      setComments([...comments, ...data.comments]);
      setNextPage(data.nextPage);
    })();
  }, []);

  const getNextPage = async () => {
    const { data } = await trigger({ postId, page: nextPage });
    console.log(data);
    setComments([...comments, ...data.comments]);
    setNextPage(data.nextPage);
  };

  return { isLoading, comments, getNextPage };
};

export default useCommentPage;
