import { Platform } from 'react-native';

const FONT_FAMILY = {
  SYSTEM: Platform.select({
    ios: 'SF Pro Display',
    android: 'Roboto',
  }),
  SYSTEM_TEXT: Platform.select({
    ios: 'SF Pro Text', 
    android: 'Roboto',
  }),
};

const FONT_WEIGHTS = {
  REGULAR: '400',
  MEDIUM: '500',
  SEMIBOLD: '600',
  BOLD: '700',
};

const FONT_SIZES = {
  SMALL: 12,
  BODY: 14,
  SUBTITLE: 16,
  TITLE: 18,
  HEADING: 20,
  MEDIUM: 18,
  LARGE: 24,
  EXTRA_LARGE: 26,
};

export const TYPOGRAPHY = {
  header: {
    fontFamily: FONT_FAMILY.SYSTEM,
    fontSize: FONT_SIZES.TITLE,
    fontWeight: FONT_WEIGHTS.SEMIBOLD,
  },
  
  statsNumber: {
    fontFamily: FONT_FAMILY.SYSTEM,
    fontSize: FONT_SIZES.MEDIUM,
    fontWeight: FONT_WEIGHTS.BOLD,
  },
  
  statsLabel: {
    fontFamily: FONT_FAMILY.SYSTEM_TEXT,
    fontSize: FONT_SIZES.SMALL,
    fontWeight: FONT_WEIGHTS.BOLD,
  },
  
  buttonText: {
    fontFamily: FONT_FAMILY.SYSTEM_TEXT,
    fontSize: FONT_SIZES.SMALL,
    fontWeight: FONT_WEIGHTS.MEDIUM,
  },
  
  body: {
    fontFamily: FONT_FAMILY.SYSTEM_TEXT,
    fontSize: FONT_SIZES.BODY,
    fontWeight: FONT_WEIGHTS.REGULAR,
  },
  
  playCount: {
    fontFamily: FONT_FAMILY.SYSTEM_TEXT,
    fontSize: FONT_SIZES.SMALL,
    fontWeight: FONT_WEIGHTS.MEDIUM,
  },
  
  base: {
    fontFamily: FONT_FAMILY.SYSTEM_TEXT,
    fontSize: FONT_SIZES.BODY,
    fontWeight: FONT_WEIGHTS.REGULAR,
  },
};

// this is just for flexibility
export { FONT_FAMILY, FONT_WEIGHTS, FONT_SIZES };