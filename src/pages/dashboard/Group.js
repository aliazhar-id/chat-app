import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement';

const Group = () => {
  const theme = useTheme();

  return (
    <>
      <Stack direction={'row'} sx={{ width: '100%' }}>
        {/* Left */}
        <Box
          sx={{
            height: '100vh',
            width: 320,
            backgroundColor: (theme) => (theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background),
            boxShadow: '0px 0px 2px rgba(0,0,0, 0.5)',
          }}
        >
          <Stack p={3} spacing={2} sx={{ maxHeight: '100vh' }}>
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>

            <Stack sx={{ width: '100%' }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search..." />
              </Search>
            </Stack>

            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Typography variant="subtitle2" component={Link}>
                Crate New Group
              </Typography>
              <IconButton>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>

            <Divider />

            <Stack spacing={3} sx={{ flexGrow: 1, overflowY: 'auto', height: '100%' }}>
              {/* <SimpleBarStyle timeout={500} clickOnTrack={false}> */}
              <Stack spacing={2.5}>
                <Typography variant="subtitle2" sx={{ color: '#676667' }}>
                  Pinned
                </Typography>

                {/* Chat List */}
                {ChatList.filter((el) => el.pinned).map((el) => (
                  <ChatElement {...el} key={el.id}></ChatElement>
                ))}

                <Typography variant="subtitle2" sx={{ color: '#676667' }}>
                  All Chats
                </Typography>

                {/* Chat List */}
                {ChatList.filter((el) => !el.pinned).map((el) => (
                  <ChatElement {...el} key={el.id}></ChatElement>
                ))}
              </Stack>
              {/* </SimpleBarStyle> */}
            </Stack>
          </Stack>
        </Box>

        {/* Right */}
        {/* // TODO: Reuse Conversation Components */}
      </Stack>
    </>
  );
};

export default Group;
