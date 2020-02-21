import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import navigation_header from './components/header.js'
import pawp_footer from './components/footer.js'
import get from './includes/get.js'

var socials_data = get("tbl_socials");
console.log(socials_data);
const vueIndex = (() => {

    let vm = new Vue({

        data: {
            social_media: {
                title: "Learn more on our Socials",
                icons: Object.values(socials_data)
            }
        },

        methods: {

        },
        
        components: {
            navigation_header,
            pawp_footer
        }

    }).$mount("#home");

})();