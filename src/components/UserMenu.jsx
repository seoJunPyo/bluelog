import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar, Flex, Menu, UnstyledButton } from '@mantine/core';
import { TbLogout } from 'react-icons/tb';
import { LinkHoverBox } from '.';
import { logOut } from '../api/auth';
import useToast from '../hooks/useToast';
import { logOutUser } from '../slices/userSlice';

const MenuItem = ({ icon, children, onClick }) => (
  <UnstyledButton
    sx={{
      ':hover': {
        color: 'var(--font-color)',
        background: 'none !important',
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
  const {
    user: { email, nickName },
  } = useSelector(state => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleClickLogOut = async () => {
    try {
      await logOut();
      dispatch(logOutUser());
    } catch (e) {
      toast.error({ title: '로그아웃 실패!', content: '잠시 후 다시 시도해주세요.' });
    }
  };

  return (
    <>
      {email && nickName ? (
        <Menu position="bottom-end">
          <Menu.Target sx={{ cursor: 'pointer' }}>
            <Avatar radius="xl" />
          </Menu.Target>
          <Menu.Dropdown
            p="24px 16px"
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
            <Flex c="var(--content-font-color)" fw="400" direction="column" gap="xl">
              <MenuItem>내 BLUELOG</MenuItem>
              <MenuItem>저장한 글</MenuItem>
              <MenuItem>프로필 편집</MenuItem>
              <MenuItem icon={<TbLogout />} onClick={handleClickLogOut}>
                로그아웃
              </MenuItem>
            </Flex>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <LinkHoverBox to="/login">Log In</LinkHoverBox>
      )}
    </>
  );
};

export default UserMenu;
