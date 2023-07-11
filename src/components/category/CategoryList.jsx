import React from 'react';
import { Grid } from '@mantine/core';
import { useGetCategoryListQuery } from '../../services/userApi';
import { SkeletonCard } from '..';
import CategoryCard from './CategoryCard';

const CategoryList = ({ user }) => {
  const { data: categoryList, isLoading } = useGetCategoryListQuery({ email: user.email });

  if (isLoading)
    return (
      <Grid miw="1080px" pos="relative" gutter="md" align="center">
        {Array.from({ length: 12 }, (_, idx) => (
          <Grid.Col key={idx} span={4} display="flex" sx={{ justifyContent: 'center' }}>
            <SkeletonCard />
          </Grid.Col>
        ))}
      </Grid>
    );

  return (
    <Grid miw="1080px" pos="relative" gutter="md" align="center">
      {categoryList.map(({ category, thumbnail, count, updateAt }) => (
        <CategoryCard
          key={category}
          category={category}
          thumbnail={thumbnail}
          count={count}
          updateAt={updateAt}
          email={user.email}
        />
      ))}
    </Grid>
  );
};

export default CategoryList;
