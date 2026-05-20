import InfoCard from '../../../../globals/ui/InfoCard';
import { MID_CARD_BODY, MID_CARD_HEADER } from './constants.ts';

const MidCard = () => {
  return (
    <InfoCard
      cardHeader={MID_CARD_HEADER}
      cardBody={MID_CARD_BODY}
      cardSx={{
        maxWidth: 620,
      }}
    />
  );
};

export default MidCard;
