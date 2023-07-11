import React from 'react';
import { useGetCategoryPostQuery } from '../services/postsApi';

const useInfinityCategoryPosts = ({ email, category, pageSize = 5, sort = 'desc' }) => {
  const [pages, setPages] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState();
  const nextPage = React.useRef();

  const { data, isLoading } = useGetCategoryPostQuery({ email, category, page: currentPage, pageSize, sort });

  React.useEffect(() => {
    if (!data) return;

    setPages(pages => (Object.is(data.posts, pages.at(-1)) ? pages : [...pages, data.posts]));
    nextPage.current = data.nextPage;
  }, [data]);

  const reset = () => {
    setPages([]);
    setCurrentPage(undefined);
    nextPage.current = null;
  };

  const fetchNextPage = () => {
    setCurrentPage(nextPage.current);
  };

  return { posts: pages.flat(), isLoading, fetchNextPage, hasNextPage: pages.at(-1)?.length === pageSize, reset };
};

export default useInfinityCategoryPosts;
