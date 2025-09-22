import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@pickly/design-foundations/dist/css/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: {
      base: 'light',
      brandTitle: 'Pickly Design System',
      brandUrl: 'https://pickly.co.kr',
      brandImage: undefined,
      brandTarget: '_self',
    },
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '900px',
        },
      },
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#1a1a1a',
      },
      {
        name: 'gray',
        value: '#f5f5f5',
      },
    ],
  },
  layout: 'centered',
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'ko',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ko', title: '한국어' },
        { value: 'en', title: 'English' },
      ],
    },
  },
};