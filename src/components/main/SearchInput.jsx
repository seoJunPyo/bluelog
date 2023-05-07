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
        height: '50px',
        padding: '0 24px',
        fontSize: '20px',
        border: 'none',
        boxShadow: '4px 4px 12px 2px rgba(0,0,0,0.2)',
      },
    }}
  />
);

export default SearchInput;
