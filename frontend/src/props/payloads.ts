import { PayloadAction } from '@reduxjs/toolkit';

import { EventCard } from '#props/common';

export type SetCategoryIdPayload = PayloadAction<{ categoryId: number; }>;

export type SetEventsPayload = PayloadAction<EventCard[]>;
