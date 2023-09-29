import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '#theme/libraries/react-loading-skeleton.scss';
import '#skeletons/event-card/styles.scss';

const EventCardSkeleton = () => (
  <div>
    <Skeleton className="evenia-event-card-skeleton__image" height={174} />
    <div className="evenia-event-card-skeleton__content">
      <Skeleton height={20} width="30%" />
      <Skeleton height={56} />
      <Skeleton height={24} width="50%" />
    </div>
  </div>
);

export { EventCardSkeleton };
