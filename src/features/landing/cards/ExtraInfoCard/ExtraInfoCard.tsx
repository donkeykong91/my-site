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
        maxWidth: 600,
        maxHeight: 550,
        mt: 20,
        borderRadius: 4,
        boxShadow: 20,
        backgroundColor: '#9acdf6',
      }}
      boxSx={{ display: 'flex', justifyContent: 'center' }}
      iconSx={{ fontSize: 100, justifyContent: 'center' }}
    />
  );
};

export default ExtraInfoCard;
