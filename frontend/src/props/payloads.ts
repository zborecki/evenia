import { PayloadAction } from '@reduxjs/toolkit';

import { EventCard } from '#props/common';

export type SET_CATEGORY_NAME_PAYLOAD = PayloadAction<{ categoryName: string }>;

export type SET_EVENTS_PAYLOAD = PayloadAction<EventCard[]>;
