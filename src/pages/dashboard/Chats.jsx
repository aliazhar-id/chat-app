import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ArchiveBox, CircleDashed, MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import ChatElement from '../../components/ChatElement';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { ChatList } from '../../data';
// import { SimpleBarStyle } from '../../components/Scrollbar';

const Chats = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        width: 320,
        backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.default,
        boxShadow: '0px 0px 2px rgba(0,0,0,0.25',
      }}
    >
      <Stack p={3} spacing={2} sx={{ height: '100vh' }}>
        <Stack direction="row" alignItems={'center'} justifyContent={'space-between'}>
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: '100%' }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={'row'} alignItems={'center'} spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack spacing={2} direction={'column'} sx={{ flexGrow: 1, overflow: 'auto', height: '100%' }}>
          {/* <SimpleBarStyle timeout={500} clickOnTrack={false}> */}
          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: '#676767' }}>
              Pinned
            </Typography>

            {ChatList.filter((el) => el.pinned).map((el) => (
              <ChatElement {...el} key={el.id}></ChatElement>
            ))}
          </Stack>

          <Stack spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: '#676767' }}>
              All Chats
            </Typography>

            {ChatList.filter((el) => !el.pinned).map((el) => (
              <ChatElement {...el} key={el.id}></ChatElement>
            ))}
          </Stack>
          {/* </SimpleBarStyle> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chats;
