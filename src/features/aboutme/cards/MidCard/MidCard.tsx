import InfoCard from '../../../../globals/ui/InfoCard';
import { MID_CARD_BODY, MID_CARD_HEADER } from './constants.ts';

const MidCard = () => {
  return (
    <InfoCard
      cardHeader={MID_CARD_HEADER}
      cardBody={MID_CARD_BODY}
      cardSx={{
        maxWidth: 600,
        maxHeight: 550,
        mt: 20,
        borderRadius: 4,
        boxShadow: 20,
        backgroundColor: '#9acdf6',
      }}
    />
  );
};

export default MidCard;
