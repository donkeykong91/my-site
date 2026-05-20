import InfoCard from '../../../../globals/ui/InfoCard';
import { NOW_CARD_HEADER, NOW_CARD_BODY } from './constants.ts';

const NowCard = () => {
  return (
    <InfoCard
      cardHeader={NOW_CARD_HEADER}
      cardBody={NOW_CARD_BODY}
      cardSx={{
        maxWidth: 620,
      }}
    />
  );
};

export default NowCard;
