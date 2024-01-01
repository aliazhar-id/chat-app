import { createSlice } from '@reduxjs/toolkit';
import { dispatch } from '../store';

const initialState = {
  sidebar: {
    open: false,
    type: 'CONTACT', // CONTACT | STARRED | SHARED
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Toogle Sidebar
    toogleSidebar(state, action) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

// Reducer
export default slice.reducer;

export function ToggleSideBar() {
  return async () => {
    dispatch(slice.actions.toogleSidebar());
  };
}

export function UpdateSideBarType(type) {
  return async () => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}
