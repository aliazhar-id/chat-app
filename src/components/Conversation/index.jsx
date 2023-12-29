import { Box, Stack } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Conversation = () => {
  return (
    <Stack height={'100%'} maxHeight={'100vh'} width={'auto'}>
      {/* Chat Header */}
      <Header />
      {/* Message */}
      <Box width={'100%'} sx={{ flexGrow: 1 }}></Box>
      {/* Chat Footer */}
      <Footer />
    </Stack>
  );
};

export default Conversation;
