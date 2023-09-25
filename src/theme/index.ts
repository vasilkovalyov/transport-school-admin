import { createTheme } from '@mui/material/styles';

import fontSize from './fontSize';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  components: {
    MuiList: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          marginBottom: 14,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
        },
        maxWidthLg: {
          maxWidth: '1200px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          height: 35,
          paddingTop: 10,
          paddingBottom: 10,
          paddingLeft: 16,
          paddingRight: 16,
          borderRadius: 6,
          fontSize: 12,
          letterSpacing: 0,
        },
        sizeMedium: {
          height: 40,
          paddingTop: 12,
          paddingBottom: 10,
          paddingLeft: 24,
          paddingRight: 24,
          borderRadius: 6,
          fontSize: 14,
          letterSpacing: 0,
        },
        sizeLarge: {
          height: 45,
          paddingTop: 16,
          paddingBottom: 16,
          paddingLeft: 32,
          paddingRight: 32,
          borderRadius: 6,
          fontSize: 16,
          letterSpacing: 0,
        },
        outlined: {
          borderWidth: 1,
          '&:hover': {
            borderWidth: 1,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: fontSize.fz_1_xxs,
          fontWeight: 500,
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          overflow: 'hidden',
          marginTop: 0,
          width: '100%',
        },
        input: {
          height: 16,
          paddingBottom: 10,
          paddingLeft: 14,
          paddingRight: 14,
          borderRadius: 6,
        },
        inputAdornedStart: {
          paddingLeft: 46,
        },
        inputAdornedEnd: {
          paddingRight: 46,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          width: '100%',
          marginTop: 0,
          height: 16,
          paddingBottom: 10,
          paddingLeft: 14,
          paddingRight: 14,
          borderRadius: 6,
          overflow: 'hidden',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'transparent',
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        positionEnd: {
          position: 'absolute',
          right: 15,
          width: 20,
          height: 20,
          cursor: 'pointer',
        },
        positionStart: {
          position: 'absolute',
          left: 15,
          width: 20,
          height: 20,
          cursor: 'pointer',
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          marginBottom: 0,
        },
      },
    },
  },
});

// **** CONTAINER ****

// **** TYPOGRAPHY ****

const baseStyle = {
  fontWeight: 700,
  marginBottom: 16,
  border: 'none',
  borderBlockColor: 'transparent',
  fontFamily: 'Roboto',
};

theme.typography.h1 = {
  fontSize: fontSize.fz_3_sm,
  ...baseStyle,

  [theme.breakpoints.up('lg')]: {
    fontSize: fontSize.fz_3_md,
  },
};

theme.typography.h2 = {
  fontSize: fontSize.fz_3_sm,
  ...baseStyle,
};

theme.typography.h3 = {
  fontSize: fontSize.fz_2_lg,
  ...baseStyle,
};

theme.typography.h4 = {
  fontSize: fontSize.fz_2_md,
  ...baseStyle,
};

theme.typography.h5 = {
  fontSize: fontSize.fz_2_sm,
  ...baseStyle,
};

theme.typography.h6 = {
  fontSize: fontSize.fz_1_lg - 1,
  ...baseStyle,
};

theme.typography.body1 = {
  fontSize: fontSize.fz_1_xs,
  lineHeight: 1.7,
  fontWeight: 400,
};

theme.typography.body2 = {
  fontSize: fontSize.fz_1_sm,
  fontWeight: 500,
  marginBottom: 16,
  border: 0,
};

theme.typography.caption = {
  fontSize: fontSize.fz_1_sm,
  fontWeight: 400,
  marginBottom: 16,
  border: 0,
  display: 'block',
};

theme.typography.subtitle1 = {
  fontSize: fontSize.fz_1_md,

  fontWeight: 500,
  marginBottom: 16,
  border: 0,
};

theme.typography.overline = {
  fontSize: fontSize.fz_1_xs,

  fontWeight: 500,
  marginBottom: 16,
  border: 0,
  textTransform: 'uppercase',
};

// ************

export default theme;
