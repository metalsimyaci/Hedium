import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import tr from 'vuetify/src/locale/tr';
import en from 'vuetify/src/locale/en';
Vue.use(Vuetify);

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
    },
}

export default new Vuetify(opts);
