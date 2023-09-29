import { PayloadAction } from '@reduxjs/toolkit';

export type SetCategoryNamePayload = PayloadAction<{
  categoryName: string
}>;

export type SetOffsetPayload = PayloadAction<{
  offset: number;
}>;
