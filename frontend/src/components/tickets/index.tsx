import { cookies } from 'next/headers';

import { Container } from '#components/tickets/container';
import { Empty } from '#components/tickets/empty';
import { Items } from '#components/tickets/items';
import { COOKIE } from '#constants/keys';
import { getTickets } from '#requests/tickets';

import '#components/tickets/styles.scss';

const Tickets = async () => {
  const authToken = cookies().get(COOKIE.AUTH);
  const { tickets } = await getTickets(authToken?.value ?? '');

  return (
    <Container>
      {
        tickets.length === 0
          ? <Empty />
          : <Items tickets={tickets} />
      }
    </Container>
  );
};

export { Tickets };
