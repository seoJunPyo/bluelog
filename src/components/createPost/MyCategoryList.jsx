import { List, Pagination } from '@mantine/core';
import React from 'react';

const usePagination = ({ data, pageSize }) => {
  const [page, setPage] = React.useState(1);

  return {
    data: data?.slice(pageSize * (page - 1), pageSize * (page - 1) + pageSize),
    page,
    totalPage: data ? Math.ceil(data.length / pageSize) : 1,
    setPage,
  };
};

const MyCategoryList = ({ categoryList, handleSelectedCategory }) => {
  const { data, totalPage, page, setPage } = usePagination({ data: categoryList, pageSize: 5 });

  return (
    <>
      <List my="12px" c="var(--content-font-color)">
        {data.map((category, idx) => (
          <List.Item
            p="xs"
            fz="20px"
            key={idx}
            onClick={() => handleSelectedCategory(category)}
            sx={{
              cursor: 'pointer',
              borderBottom: '1px solid var(--hover-bg-color)',
              ':hover': {
                background: 'var(--hover-bg-color)',
                transition: 'all 0.2s',
              },
            }}>
            {category}
          </List.Item>
        ))}
      </List>

      <Pagination
        my="lg"
        position="center"
        siblings={2}
        value={page}
        onChange={setPage}
        total={totalPage}
        sx={{
          button: {
            background: 'var(--input-bg-color)',
            border: '1px solid var(--hover-bg-color)',
            color: 'var(--content-font-color)',
          },

          '.mantine-1n8gmw6[data-active]': {
            background: 'var(--page-button-color)',
          },
        }}
      />
    </>
  );
};

export default MyCategoryList;
