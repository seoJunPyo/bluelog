import React from 'react';
import { Container } from '@mantine/core';
import TabMenu from './TabMenu';
import { MyPosts, CategoryList, Profile } from '..';

const TAB_LIST = {
  all: 'all',
  category: 'category',
  introduce: 'introduce',
};

const Tabs = ({ user }) => {
  const [currentTab, setTab] = React.useState('all');

  return (
    <>
      <TabMenu currentTab={currentTab} setTab={setTab} />
      <Container size="lg" p="36px">
        {TAB_LIST.all === currentTab && <MyPosts user={user} />}
        {TAB_LIST.category === currentTab && <CategoryList user={user} />}
        {TAB_LIST.introduce === currentTab && <Profile user={user} />}
      </Container>
    </>
  );
};

export default Tabs;
