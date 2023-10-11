import { cookies } from 'next/headers';

import { Container } from '#components/tickets/container';
import { Empty } from '#components/tickets/empty';
import { Items } from '#components/tickets/items';
import { COOKIE } from '#constants/keys';
import { getTickets } from '#requests/tickets';

import '#components/tickets/styles.scss';

const DEFAULT_OFFSET = 9;

const Tickets = async () => {
  const authToken = cookies().get(COOKIE.AUTH);
  const { tickets } = await getTickets(authToken?.value ?? '', DEFAULT_OFFSET, 0);

  return (
    <Container>
      {
        tickets.length === 0
          ? <Empty />
          : (
            <Items
              defaultOffset={DEFAULT_OFFSET}
              initialTickets={tickets}
              userId={authToken?.value ?? ''}
            />
          )
      }
    </Container>
  );
};

export { Tickets };
