import React from 'react';
import { Badge, FlexBox } from '..';

const TagList = ({ tags, addSelectedTag }) => (
  <FlexBox>
    {tags?.map(({ name: tag }) => (
      <Badge key={tag} text={tag} onClick={() => addSelectedTag(tag)} />
    ))}
  </FlexBox>
);

export default TagList;
