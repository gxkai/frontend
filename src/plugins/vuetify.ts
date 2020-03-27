import "@mdi/font/css/materialdesignicons.css";
import Vue from "vue";
import Vuetify from "vuetify";

import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";

import ArrowNext from "@/components/icons/arrow-next.vue";
import ArrowBack from "@/components/icons/arrow-back.vue";
import VoiceIcon from "@/components/icons/voice.vue";
import HeartIcon from "@/components/icons/heart.vue";

Vue.use(Vuetify);

const opts = {
    theme: {
        themes: {
            light: {
                primary: colors.cyan.darken1,
                accent: colors.grey.base
            }
        }
    },
    icons: {
        values: {
            nextArrow: {
                component: ArrowNext
            },
            backArrow: {
                component: ArrowBack
            },
            voiceIcon: {
                component: VoiceIcon
            },
            heartIcon: {
                component: HeartIcon
            }
        }
    }
};

export default new Vuetify(opts);
