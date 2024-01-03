import { faker } from '@faker-js/faker';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Slide,
  Stack,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Bell, CaretRight, Phone, Prohibit, Star, Trash, VideoCamera, X } from 'phosphor-react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToggleSideBar, UpdateSideBarType } from '../redux/slices/app';
import AntSwitch from './AntSwitch';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BlockDialog = ({ open, handleClose }) => (
  <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
    <DialogTitle>Block this contact</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">Are you sure you want to block this Contact?</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>
);

const DeleteDialog = ({ open, handleClose }) => (
  <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
    <DialogTitle>Delete this chat</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">Are you sure you want to delete this Contact?</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleClose}>Yes</Button>
    </DialogActions>
  </Dialog>
);

const Contact = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const [openBlock, setOpenBlock] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseBlock = () => setOpenBlock(false);
  const handleCloseDelete = () => setOpenDelete(false);

  return (
    <Box sx={{ width: 320, height: '100vh' }}>
      <Stack sx={{ height: '100%' }}>
        {/* Header */}
        <Box
          sx={{
            boxShadow: '0px 0px 2px rgba(0,0,0,0.25)',
            width: '100%',
            backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background,
          }}
        >
          <Stack
            direction={'row'}
            sx={{
              height: '100%',
              p: 2,
            }}
            alignItems={'center'}
            justifyContent={'space-between'}
            spacing={3}
          >
            <Typography variant="subtitle2">Contact Info</Typography>
            <IconButton
              onClick={() => {
                dispatch(ToggleSideBar());
              }}
            >
              <X />
            </IconButton>
          </Stack>
        </Box>

        {/* Body */}
        <Stack
          sx={{
            height: '100%',
            position: 'relative',
          }}
          flexGrow={1}
          overflow={'auto'}
          p={3}
          spacing={3}
        >
          <Stack alignItems={'center'} direction={'row'} spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{
                height: 64,
                width: 64,
              }}
            />

            <Stack spacing={0.5}>
              <Typography variant="article" fontWeight={600}>
                {faker.name.fullName()}
              </Typography>
              <Typography variant="body2" fontWeight={500}>
                +62 822 9188 5411
              </Typography>
            </Stack>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <Phone />
              </IconButton>
              <Typography variant="overline">Voice</Typography>
            </Stack>
            <Stack spacing={1} alignItems={'center'}>
              <IconButton>
                <VideoCamera />
              </IconButton>
              <Typography variant="overline">Video</Typography>
            </Stack>
          </Stack>

          <Divider />

          <Stack spacing={0.5}>
            <Typography variant="article">About</Typography>
            <Typography variant="body2">Hi there, I am using REACT!</Typography>
          </Stack>

          <Divider />

          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Typography variant="subtitle2">Media, links and docs</Typography>
            <Button onClick={() => dispatch(UpdateSideBarType('SHARED'))} endIcon={<CaretRight />}>
              401
            </Button>
          </Stack>

          <Stack direction={'row'} spacing={2} alignItems={'center'}>
            {[1, 2, 3].map((el) => (
              <Box key={el}>
                <img src={faker.image.food()} alt={faker.name.fullName()} />
              </Box>
            ))}
          </Stack>

          <Divider />

          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Star size={21} />
              <Typography variant="subtitle2">Starred Messages</Typography>
            </Stack>
            <IconButton onClick={() => dispatch(UpdateSideBarType('STARRED'))}>
              <CaretRight />
            </IconButton>
          </Stack>

          <Divider />

          <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>
              <Bell size={21} />
              <Typography variant="subtitle2">Mute Notifications</Typography>
            </Stack>
            <AntSwitch />
          </Stack>

          <Divider />

          <Typography>4 group in common</Typography>
          <Stack direction={'row'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
            <Stack spacing={0.5} alignItems={'start'}>
              <Typography variant="subtitle2">Iwak Haruan Babanam</Typography>
              <Typography variant="caption">Ali, Budi, Cindy, Dadan, Ea</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
            <Stack spacing={0.5} alignItems={'start'}>
              <Typography variant="subtitle2">Peradaban</Typography>
              <Typography variant="caption">Ali, Akbar, Dzaky, Renatan, Radja</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
            <Stack spacing={0.5} alignItems={'start'}>
              <Typography variant="subtitle2">Buzzer 02</Typography>
              <Typography variant="caption">Raihan, Fadly, Rasyid, Murot</Typography>
            </Stack>
          </Stack>
          <Stack direction={'row'} spacing={2}>
            <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} />
            <Stack spacing={0.5} alignItems={'start'}>
              <Typography variant="subtitle2">Panitia Hari Kiamat</Typography>
              <Typography variant="caption">Izrail, Israfil, Raqib, Atid</Typography>
            </Stack>
          </Stack>

          <Stack direction={'row'} alignItems={'center'} spacing={2}>
            <Button onClick={() => setOpenBlock(true)} startIcon={<Prohibit />} fullWidth variant="outlined">
              Block
            </Button>
            <Button onClick={() => setOpenDelete(true)} startIcon={<Trash />} fullWidth variant="outlined">
              Delete
            </Button>
          </Stack>
        </Stack>
      </Stack>
      {openBlock && <BlockDialog open={openBlock} handleClose={handleCloseBlock} />}
      {openDelete && <DeleteDialog open={openDelete} handleClose={handleCloseDelete} />}
    </Box>
  );
};

export default Contact;
