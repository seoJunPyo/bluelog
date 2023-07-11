import React from 'react';
import { Badge, FlexBox } from '..';

const SelectedTagList = ({ selectedTags, removeSelectedTag }) => (
  <FlexBox>
    {selectedTags.map(tag => (
      <Badge key={tag} text={tag} withCloseBtn onClose={removeSelectedTag(tag)} withoutAnimation />
    ))}
  </FlexBox>
);

export default SelectedTagList;
