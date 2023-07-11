import { Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

const InfoLinkText = ({ infoText, linkText, to }) => (
  <Text c="var(--content-font-color)">
    {infoText}
    <Text
      ml="8px"
      display="inline"
      c="var(--font-color)"
      sx={{
        ':hover': {
          textDecoration: 'underline',
        },
      }}>
      {linkText && <Link to={to}>{linkText}</Link>}
    </Text>
  </Text>
);

export default InfoLinkText;
