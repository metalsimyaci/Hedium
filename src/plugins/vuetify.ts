import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n'
import tr from '../locales/tr_vuetify';
import en from '../locales/en_vuetify';
import { VuetifyPreset } from 'vuetify/types/services/presets'

Vue.use(Vuetify);
Vue.use(VueI18n);

const messages = {
  en: en,
  tr: tr,
}
console.log(messages);

const locale = 'en';//navigator.language;
const i18n = new VueI18n({
  locale: locale, // set locale
  fallbackLocale: 'en',
  messages, // set locale messages
  silentTranslationWarn: true
});

export const preset: VuetifyPreset = {
  breakpoint: {
    mobileBreakpoint: "sm",
    scrollBarWidth: 5,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
  },
  icons: {
    iconfont: 'mdi',
    values: {},
  },
  lang: {
    current: 'tr',
    locales: { tr, en },
    t: (key: string, ...params: any[]) => i18n.t(key, params) as string,
  },
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      cspNonce: undefined,
      customProperties: undefined,
      minifyTheme: undefined,
      themeCache: undefined,
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
}
const opts = {
  rtl: false,
  theme: {
    dark: false,
    default: 'light',
    disable: false,
    options: {
      customProperties: true,
      cspNonce: 'dQw4w9WgXcQ',
      minifyTheme: undefined,
      themeCache: {
        get: (key: any) => localStorage.getItem(key),
        set: (key: any, value: any) => localStorage.setItem(key, value),
      },
    },
    themes: {
      light: {
        primary: '#1976D2',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        highlighted: '#7DFFB3'
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        highlighted: '#f69a22'
      },
    },
  },
  lang: {
    locales: { tr, en },
    current: 'tr',
    t: (key: string, ...params: any[]) => i18n.t(key, params) as string,
  },
}

export default new Vuetify({ preset, ...opts });
