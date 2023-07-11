import React from 'react';
import { TextInput } from '@mantine/core';
import { useNavigate } from 'react-router';

const SearchInput = () => {
  const inputRef = React.useRef(null);
  const navigate = useNavigate();

  const handleKeyUp = e => {
    const value = inputRef.current.value.trim();
    if (e.key !== 'Enter' || value === '') return;

    navigate(`posts/search/${value}/1`);
  };

  return (
    <TextInput
      ref={inputRef}
      placeholder="Search Keyword!"
      radius="xl"
      sx={{
        padding: '16px',
        input: {
          height: '56px',
          padding: '0 32px',
          fontSize: '20px',
          border: 'none',
          boxShadow: 'var(--box-shadow)',
        },
      }}
      onKeyUp={handleKeyUp}
    />
  );
};

export default SearchInput;
