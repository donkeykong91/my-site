import React from 'react';
import {
  EXTRA_INFO_CARD_HEADING,
  EXTRA_INFO_CARD_BODY_TEXT,
} from './constants.ts';
import { RocketLaunch } from '@mui/icons-material';
import InfoCard from '../../../../globals/ui/InfoCard';

/**
 * Displays extra, longer, information about me and my experience in the card. <br>
 * @constructor
 */
const ExtraInfoCard: React.FC = () => {
  return (
    <InfoCard
      cardHeader={EXTRA_INFO_CARD_HEADING}
      cardBody={EXTRA_INFO_CARD_BODY_TEXT}
      Icon={RocketLaunch}
      cardSx={{
        maxWidth: 620,
        mt: { xs: 2, md: 14 },
      }}
      boxSx={{ display: 'flex', justifyContent: 'center' }}
      iconSx={{
        fontSize: 100,
        justifyContent: 'center',
        color: 'rgba(69, 126, 255, 0.88)',
        filter: 'drop-shadow(0 12px 24px rgba(69, 126, 255, 0.32))',
      }}
    />
  );
};

export default ExtraInfoCard;
