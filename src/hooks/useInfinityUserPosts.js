import React from 'react';
import { useGetUserPostsQuery } from '../services/postsApi';

const useInfinityUserPosts = ({ email, pageSize, sort }) => {
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState();
  const nextPage = React.useRef();

  const { data, isLoading } = useGetUserPostsQuery({ email, page: currentPage, pageSize, sort });

  React.useEffect(() => {
    if (!data) return;

    setPages(pages => (Object.is(data.posts, pages.at(-1)) ? pages : [...pages, data.posts]));
    nextPage.current = data.nextPage;
  }, [data]);

  const fetchNextPage = () => {
    setCurrentPage(nextPage.current);
  };

  const reset = () => {
    setPages([]);
    setCurrentPage(undefined);
    nextPage.current = null;
  };

  return { posts: pages.flat(), isLoading, fetchNextPage, hasNextPage: pages.at(-1)?.length === pageSize, reset };
};

export default useInfinityUserPosts;
