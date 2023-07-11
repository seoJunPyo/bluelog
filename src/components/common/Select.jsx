import { Select as MantineSelect } from '@mantine/core';

const Select = ({ w, placeholder, value, onChange, data, searchable, onKeyUp }) => (
  <MantineSelect
    placeholder={placeholder}
    w={w}
    value={value}
    onChange={onChange}
    onKeyUp={onKeyUp}
    data={data}
    searchable={searchable}
    sx={{
      input: { border: 'none' },
      '.mantine-Select-dropdown': {
        background: 'var(--input-bg-color)',
        border: '1px solid var(--hover-bg-color)',
      },
      '.mantine-Select-item': {
        color: 'var(--content-font-color)',
        background: 'none',

        '&[data-selected]': {
          background: 'var(--color-blue2)',
          color: 'white',
        },
        ':hover': {
          background: 'var(--hover-bg-color)',
          color: 'var(--content-font-color)',
        },
      },
    }}
  />
);

export default Select;
