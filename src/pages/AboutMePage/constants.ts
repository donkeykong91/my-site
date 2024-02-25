import youngImage from '../../assets/young.webp';
import midImage from '../../assets/mid.webp';
import nowImage from '../../assets/senior.webp';
import YoungCard from '../../features/aboutme/cards/YoungCard';
import MidCard from '../../features/aboutme/cards/MidCard';
import NowCard from '../../features/aboutme/cards/NowCard';

const ABOUT_ME_PAGE_TITLE = 'About Me';

const CARD_AND_IMAGE_LIST = [
  {
    component: 'img',
    boxStyle: { maxWidth: 645, height: 440 },
    src: youngImage,
    gridCard: {
      alignSelf: 'center',
    },
    cardComponent: YoungCard,
  },
  {
    component: 'img',
    boxStyle: { maxWidth: 645, height: 440 },
    src: midImage,
    gridCard: {
      alignSelf: 'center',
    },
    cardComponent: MidCard,
  },
  {
    component: 'img',
    boxStyle: { maxWidth: 645, height: 440 },
    src: nowImage,
    gridCard: {
      alignSelf: 'center',
    },
    cardComponent: NowCard,
  },
];

export { CARD_AND_IMAGE_LIST, ABOUT_ME_PAGE_TITLE };
