import InfoCard from '../../../../globals/ui/InfoCard';
import { YOUNG_CARD_BODY, YOUNG_CARD_HEADER } from './constants.ts';

const YoungCard = () => {
  return (
    <InfoCard
      cardHeader={YOUNG_CARD_HEADER}
      cardBody={YOUNG_CARD_BODY}
      cardSx={{
        maxWidth: 600,
        maxHeight: 550,
        borderRadius: 4,
        boxShadow: 20,
        backgroundColor: '#9acdf6',
      }}
    />
  );
};

export default YoungCard;
