import { FC } from 'react';

import { ITicket } from '#types/common';

interface ItemsProps {
  tickets: ITicket[];
}

const Items: FC<ItemsProps> = ({ tickets }) => (
  <div>
    {
        tickets.map((x) => (
          <div>
            { x.event.title }
          </div>
        ))
      }
  </div>
);

export { Items };
