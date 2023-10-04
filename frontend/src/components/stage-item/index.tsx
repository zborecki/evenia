import { FC } from 'react';

import { StageItemProps } from './props';

import { STAGE } from '#constants/stages';
import { DebitCardIcon } from '#svg/debit-card-icon';
import { GlobeIcon } from '#svg/globe-icon';
import { RightUpIcon } from '#svg/right-up-icon';
import { BaseProps } from '#types/common';
import '#components/stage-item/styles.scss';

const iconProps: BaseProps = {
  className: 'evenia-stage-item__source'
};

const getIcon = (id: string) => {
  switch (id) {
    case STAGE.CREATE:
      return <GlobeIcon {...iconProps} />;
    case STAGE.SHARE:
      return <RightUpIcon {...iconProps} />;
    default:
      return <DebitCardIcon {...iconProps} />;
  }
};

const StageItem: FC<StageItemProps> = ({
  description, id, title
}) => (
  <li className="evenia-stage-item">
    <div className="evenia-stage-item__icon">
      { getIcon(id) }
    </div>
    <h2 className="evenia-stage-item__title">{ title }</h2>
    <p className="evenia-stage-item__description">{ description }</p>
  </li>
);

export { StageItem };
