import {ref} from "vue";
import {CButton} from "@chakra";

export default {
    template: `
        <c-button @click="count++">
            You clicked me {{count}} times.
        </c-button>
    `,
    components: {
        CButton
    },
    setup() {
        const count = ref(0);
        return {count};
    }
};