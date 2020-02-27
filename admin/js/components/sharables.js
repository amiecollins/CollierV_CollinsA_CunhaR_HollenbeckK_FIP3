import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import navigation_header from '../components/header.js.js'
import pawp_footer from '../components/footer.js.js'

const vueSharables = (() => {

    let vm = new Vue({

        data: {

        },

        methods: {

        },
        
        components: {
            navigation_header,
            pawp_footer
        }

    }).$mount("#sharables");

})();