import { createSlice } from '@reduxjs/toolkit';

import { SetCategoryIdPayload } from '#props/payloads';
import { TabsSlice } from '#props/slices';

const initialState: TabsSlice = {
  categoryId: 0
};

export const tabsSlice = createSlice({
  initialState,
  name: 'tab',
  reducers: {
    SET_CATEGORY_ID: (_, { payload }: SetCategoryIdPayload) => ({
      categoryId: payload.categoryId
    })
  }
});

export const { SET_CATEGORY_ID } = tabsSlice.actions;

export const tabsReducer = tabsSlice.reducer;

export const tabsSelector = (state: TabsSlice) => state;
