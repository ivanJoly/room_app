import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#f1485b",
        secondary: "#33546d",
        accentSecondary: "#7fa7b8",
        white: "#f7efed",
        error: "#f44336",
        info: "#ee44aa",
        success: "#4caf50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#33546d",
        accentPrimary: "#7fa7b8",
        secondary: "#f1485b",
        white: "#f7efed",
        error: "#f44336",
        info: "#ee44aa",
        success: "#4caf50",
        warning: "#FFC107",
      },
    },
  },
});
