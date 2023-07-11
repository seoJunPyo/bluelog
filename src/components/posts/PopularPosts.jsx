import React from 'react';
import { Carousel } from '@mantine/carousel';
import { getStylesRef } from '@mantine/core';
import PostCard from './PostCard';
import { SkeletonCard } from '..';
import useUser from '../../hooks/useUser';
import { useGetPopularPostsQuery } from '../../services/postsApi';

const CarouselContainer = ({ children }) => (
  <Carousel
    withIndicators
    slideSize="25%"
    slideGap="lg"
    align="start"
    controlSize={40}
    slidesToScroll={1}
    styles={{
      control: {
        ref: getStylesRef('controls'),
        transition: 'opacity 150ms ease',
        opacity: 0,
      },
      root: {
        '&:hover': {
          [`& .${getStylesRef('controls')}`]: {
            opacity: 1,
          },
        },
      },
    }}
    sx={{
      '.mantine-Carousel-indicators': {
        bottom: '-20px',

        '.mantine-Carousel-indicator': {
          background: 'var(--color-gray)',
        },
      },
    }}>
    {children}
  </Carousel>
);

const PopularPosts = ({ keyword = '' }) => {
  const { data: posts, isLoading } = useGetPopularPostsQuery({ tag: keyword });
  const { user } = useUser();

  if (isLoading)
    return (
      <CarouselContainer>
        {Array.from({ length: 5 }, (_, idx) => (
          <Carousel.Slide key={idx}>
            <SkeletonCard />
          </Carousel.Slide>
        ))}
      </CarouselContainer>
    );

  return (
    <>
      <CarouselContainer>
        {posts.map(({ objectID, title, like, createAt, name, thumbnail, tagList, commentCount }) => (
          <Carousel.Slide key={objectID}>
            <PostCard
              id={objectID}
              thumbnail={thumbnail}
              title={title}
              name={name}
              like={like}
              createAt={createAt}
              tagList={tagList}
              commentCount={commentCount}
              user={user}
            />
          </Carousel.Slide>
        ))}
      </CarouselContainer>
    </>
  );
};

export default PopularPosts;
