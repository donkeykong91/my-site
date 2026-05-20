import { SxProps, Theme } from '@mui/material/styles';

const GLASS_BORDER = '1px solid rgba(255, 255, 255, 0.48)';
const GLASS_SHADOW = '0 24px 80px rgba(31, 38, 135, 0.22)';

const GLASS_CARD_SX: SxProps<Theme> = {
  position: 'relative',
  overflow: 'hidden',
  border: GLASS_BORDER,
  borderRadius: 7,
  background:
    'linear-gradient(145deg, rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.28))',
  boxShadow: GLASS_SHADOW,
  backdropFilter: 'blur(28px) saturate(180%)',
  WebkitBackdropFilter: 'blur(28px) saturate(180%)',
  color: '#172033',
  transition:
    'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    background:
      'linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.08) 42%, rgba(255, 255, 255, 0))',
  },
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 30px 90px rgba(31, 38, 135, 0.3)',
    borderColor: 'rgba(255, 255, 255, 0.68)',
  },
};

const GLASS_NAV_SX: SxProps<Theme> = {
  mx: { xs: 1.5, md: 3 },
  mt: 2,
  width: 'auto',
  border: GLASS_BORDER,
  borderRadius: 999,
  background:
    'linear-gradient(135deg, rgba(255, 255, 255, 0.76), rgba(255, 255, 255, 0.38))',
  boxShadow: '0 18px 50px rgba(56, 73, 171, 0.18)',
  backdropFilter: 'blur(30px) saturate(180%)',
  WebkitBackdropFilter: 'blur(30px) saturate(180%)',
  color: '#162033',
};

const GLASS_BUTTON_SX: SxProps<Theme> = {
  borderRadius: 999,
  px: 2.5,
  color: '#172033',
  fontWeight: 700,
  letterSpacing: '0.02em',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.46)',
  },
};

const GLASS_PRIMARY_BUTTON_SX: SxProps<Theme> = {
  ...GLASS_BUTTON_SX,
  background:
    'linear-gradient(135deg, rgba(69, 126, 255, 0.92), rgba(154, 95, 255, 0.88))',
  boxShadow: '0 14px 34px rgba(79, 109, 245, 0.3)',
  color: '#ffffff',
  '&:hover': {
    background:
      'linear-gradient(135deg, rgba(57, 111, 255, 1), rgba(139, 80, 250, 0.96))',
    boxShadow: '0 18px 42px rgba(79, 109, 245, 0.4)',
  },
};

const PAGE_TITLE_SX: SxProps<Theme> = {
  display: 'inline-flex',
  px: { xs: 3, md: 5 },
  py: 1.5,
  border: GLASS_BORDER,
  borderRadius: 999,
  background: 'rgba(255, 255, 255, 0.36)',
  boxShadow: '0 16px 50px rgba(31, 38, 135, 0.16)',
  backdropFilter: 'blur(22px) saturate(180%)',
  WebkitBackdropFilter: 'blur(22px) saturate(180%)',
  color: '#172033',
  fontWeight: 800,
  letterSpacing: '-0.04em',
};

const GLASS_ICON_BUTTON_SX: SxProps<Theme> = {
  m: 1.5,
  p: { xs: 2, md: 3 },
  border: GLASS_BORDER,
  borderRadius: 6,
  background:
    'linear-gradient(145deg, rgba(255, 255, 255, 0.58), rgba(255, 255, 255, 0.22))',
  boxShadow: '0 20px 54px rgba(31, 38, 135, 0.18)',
  backdropFilter: 'blur(24px) saturate(180%)',
  WebkitBackdropFilter: 'blur(24px) saturate(180%)',
  transition: 'transform 180ms ease, box-shadow 180ms ease',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.02)',
    backgroundColor: 'rgba(255, 255, 255, 0.54)',
    boxShadow: '0 26px 70px rgba(31, 38, 135, 0.26)',
  },
};

export {
  GLASS_CARD_SX,
  GLASS_NAV_SX,
  GLASS_BUTTON_SX,
  GLASS_PRIMARY_BUTTON_SX,
  PAGE_TITLE_SX,
  GLASS_ICON_BUTTON_SX,
};
