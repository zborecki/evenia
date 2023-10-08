import { PayloadAction } from '@reduxjs/toolkit';

import { EventSlice } from './slices';

export type SetCategoryNamePayload = PayloadAction<{
  categoryName: string
}>;

export type SetEventPayload = PayloadAction<EventSlice>;

export type SetOffsetPayload = PayloadAction<{
  offset: number;
}>;
