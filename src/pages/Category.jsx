/* eslint-disable jsx-a11y/no-autofocus */
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mantine/core';
import { CategoryImage, CategoryTitle, CategoryPosts } from '../components';
import {
  useChangeCategoryNameMutation,
  useGetCategoryInfoQuery,
  useRemoveCategoryMutation,
  useUpdateCategoryInfoMutation,
} from '../services/userApi';
import useUser from '../hooks/useUser';

const Category = () => {
  const { email, category } = useParams();

  const { data: info } = useGetCategoryInfoQuery({ email, category });
  const [updateCategoryInfo] = useUpdateCategoryInfoMutation();
  const [changeCategoryName] = useChangeCategoryNameMutation();
  const [removeCategory] = useRemoveCategoryMutation();
  const { user } = useUser();
  const isMy = user ? user.email === email : false;

  return (
    <>
      <CategoryImage
        isMy={isMy}
        thumbnail={info?.thumbnail}
        updateImage={thumbnail =>
          updateCategoryInfo({
            email,
            category,
            categoryInfo: {
              thumbnail,
            },
          })
        }
      />
      <Container size="xl" my="32px" c="var(--content-font-color)">
        <CategoryTitle
          isMy={isMy}
          category={info?.name ?? category}
          changeCategoryName={categoryName =>
            changeCategoryName({
              email,
              category,
              categoryName,
            })
          }
          removeCategory={() => removeCategory({ email, category })}
        />

        <CategoryPosts email={email} category={category} />
      </Container>
    </>
  );
};

export default Category;
