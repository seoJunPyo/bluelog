import React from 'react';
import { Accordion, Stack } from '@mantine/core';
import { useGetRepliesCountQuery } from '../../services/repliesApi';
import { Replies, ReplyEditor } from '.';

const AccordionItem = ({ label, children }) => (
  <Accordion.Item
    value="createRelay"
    sx={{
      border: 'none',

      '.mantine-Accordion-control': {
        ':hover': {
          backgroundColor: 'transparent !important',
          textDecoration: 'underline',
        },
      },
    }}>
    <Accordion.Control c="var(--font-color)">{label}</Accordion.Control>
    <Accordion.Panel>{children}</Accordion.Panel>
  </Accordion.Item>
);

const RepliesAccordion = ({ commentId }) => {
  const { data: repliesCount } = useGetRepliesCountQuery({ commentId });

  return (
    <Accordion chevronPosition="left">
      <AccordionItem label={repliesCount > 0 ? `답글 ${repliesCount}` : '답글 달기'}>
        <Stack c="var(--content-font-color)">
          {repliesCount > 0 && <Replies commentId={commentId} />}
          <ReplyEditor commentId={commentId} />
        </Stack>
      </AccordionItem>
    </Accordion>
  );
};

export default RepliesAccordion;
