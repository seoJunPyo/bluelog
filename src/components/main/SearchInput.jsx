import React from 'react';
import { Autocomplete } from '@mantine/core';

const SearchInput = () => (
  <Autocomplete
    placeholder="search keyword!"
    data={[]}
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
  />
);

export default SearchInput;
