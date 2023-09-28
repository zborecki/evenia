import { createSlice } from '@reduxjs/toolkit';

import { SET_CATEGORY_NAME_PAYLOAD } from '#props/payloads';
import { TabsSlice } from '#props/slices';

const initialState: TabsSlice = {
  categoryName: ''
};

export const tabsSlice = createSlice({
  initialState,
  name: 'tab',
  reducers: {
    SET_CATEGORY_NAME: (_, { payload }: SET_CATEGORY_NAME_PAYLOAD) => ({
      categoryName: payload.categoryName
    })
  }
});

export const { SET_CATEGORY_NAME } = tabsSlice.actions;

export const tabsReducer = tabsSlice.reducer;

export const tabsSelector = (state: { tab: TabsSlice }) => state.tab;
