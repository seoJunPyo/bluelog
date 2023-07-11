import React from 'react';
import { Avatar, Flex, Menu, UnstyledButton } from '@mantine/core';
import { TbLogout } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { LinkHoverBox } from '.';
import useToast from '../hooks/useToast';
import useUser from '../hooks/useUser';

const MenuItem = ({ icon, children, onClick }) => (
  <UnstyledButton
    p="12px"
    sx={{
      borderRadius: '10px',

      ':hover': {
        color: 'var(--font-color)',
        background: 'var(--hover-bg-color) !important',
        transition: 'all 0.2s',
      },
    }}
    onClick={onClick}>
    <Flex justify="space-between" align="center">
      {children}
      {icon}
    </Flex>
  </UnstyledButton>
);

const UserMenu = () => {
  const { user, isLoading, userSignOut, initUser } = useUser();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(initUser, []);

  const toast = useToast();
  const navigate = useNavigate();

  const handleClickLogOut = async () => {
    try {
      await userSignOut();
    } catch (e) {
      toast.error({ title: '로그아웃 실패!', content: '잠시 후 다시 시도해주세요.' });
    }
  };

  return (
    <>
      {user ? (
        <Menu position="bottom-end">
          <Menu.Target sx={{ cursor: 'pointer' }}>
            {user.photoURL ? (
              <Avatar radius="xl" src={user.photoURL} />
            ) : (
              <Avatar radius="xl" c="blue">
                {user.displayName.slice(1, 3)}
              </Avatar>
            )}
          </Menu.Target>
          <Menu.Dropdown
            p="16px"
            sx={{
              minWidth: '180px !important',
              background: 'var(--input-bg-color)',
              border: 'none',
              borderRadius: '10px',
              boxShadow: 'var(--box-shadow)',

              button: {
                fontSize: '20px',
                color: 'var(--content-font-color)',
              },
            }}>
            <Flex c="var(--content-font-color)" fw="400" direction="column">
              <MenuItem onClick={() => navigate('/my')}>내 BLUELOG</MenuItem>
              <MenuItem onClick={() => navigate('/createpost')}>글 작성하기</MenuItem>
              <MenuItem>저장한 글</MenuItem>
              <MenuItem icon={<TbLogout />} onClick={handleClickLogOut}>
                로그아웃
              </MenuItem>
            </Flex>
          </Menu.Dropdown>
        </Menu>
      ) : isLoading ? (
        <Avatar radius="xl" />
      ) : (
        <LinkHoverBox to="/login">Log In</LinkHoverBox>
      )}
    </>
  );
};

export default UserMenu;
