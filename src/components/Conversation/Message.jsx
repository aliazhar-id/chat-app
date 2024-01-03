import { Box, Stack } from '@mui/material';
import React from 'react';
import { Chat_History } from '../../data';
import { DocumentMessage, LinkMessage, MediaMessage, ReplyMessage, TextMessage, Timeline } from './MsgTypes';

const Message = ({ menu }) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el, index) => {
          switch (el.type) {
            case 'divider':
              return <Timeline el={el} key={index} />;
            case 'msg':
              switch (el.subtype) {
                case 'img':
                  return <MediaMessage el={el} menu={menu} key={index} />;
                case 'doc':
                  return <DocumentMessage el={el} menu={menu} key={index} />;
                case 'link':
                  return <LinkMessage el={el} menu={menu} key={index} />;
                case 'reply':
                  return <ReplyMessage el={el} menu={menu} key={index} />;
                default:
                  return <TextMessage el={el} menu={menu} key={index} />;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
