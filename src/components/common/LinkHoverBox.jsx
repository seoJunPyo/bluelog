import { Box } from '@mantine/core';
import { Link } from 'react-router-dom';

const LinkHoverBox = ({ to, children }) => (
  <Link to={to}>
    <Box
      p="xs"
      fw={400}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        ':hover': {
          backgroundColor: 'var(--hover-bg-color)',
        },
      }}>
      {children}
    </Box>
  </Link>
);

export default LinkHoverBox;
