import Vue from "vue";
import Chakra, {
    CThemeProvider,
    CColorModeProvider,
    CBox,
    CReset,
    CButton
} from "@chakra";
import indexPage from "/mjs/pages/index.mjs";

const alreadyMounted = el => el.__vue_app__;

function $1(sel, el) {
    return typeof sel === "string" ? (el || document).querySelector(sel) : sel || null
}

export function mount(sel, component, props) {
    const el = $1(sel);
    if (alreadyMounted(el)) {
        return
    }
    
    Vue.use(Chakra);
    
    const app = new Vue({
        render(h) {
            // Mount our application inside the
            // ThemeProvider and ColorModeProvider components :)

            // You can also do this inside the App.vue file if you wish :)
            // See example at https://github.com/chakra-ui/chakra-ui-vue#usage
            return h(CThemeProvider, [
                h(CColorModeProvider, [h(CBox, [h(CReset), h(indexPage)])])
            ]);
        }
    }).$mount(el);
    
    return app
}