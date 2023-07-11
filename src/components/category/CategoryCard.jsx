import { Flex, Grid, Text, Title } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { CardLayOut, Img, VerticalDivider } from '..';
import formatElapsedDate from '../../util/formatElapsedDate';

const CategoryCard = ({ category, thumbnail, count, updateAt, email }) => (
  <Grid.Col key={category} span={4} display="flex" sx={{ justifyContent: 'center' }}>
    <Link to={`/category/${email}/${category}`} state={{ category, thumbnail, count }}>
      <CardLayOut image={<Img src={thumbnail} />}>
        <Flex mt="md" h="40%" justify="space-between" direction="column">
          <Flex gap="4px" direction="column">
            <Title c="var(--font-color)" order={2}>
              {category}
            </Title>
            <Text>{count}개의 게시물</Text>
          </Flex>
          <Text display="flex" sx={{ alignItems: 'center' }}>
            마지막 업데이트
            <VerticalDivider />
            {formatElapsedDate(updateAt)}
          </Text>
        </Flex>
      </CardLayOut>
    </Link>
  </Grid.Col>
);

export default CategoryCard;
