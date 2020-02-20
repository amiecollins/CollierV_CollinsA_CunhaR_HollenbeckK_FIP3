import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import navigation_header from './components/header.js'
import pawp_footer from './components/footer.js'
import get from './includes/get.js'

var socials_data = get("tbl_socials");

const vueIndex = (() => {

    let vm = new Vue({

        data: {
            social_media: {
                title: "FOLLOW US ON SOCIAL MEDIA",
                icons: [
                    {
                        a: "https://www.instagram.com/",
                        url: "./images/ig.png",
                        alt: "Instagram Icon"
                    },
                    {
                        a: "https://www.twitter.com/",
                        url: "./images/tw.png",
                        alt: "Twitter Icon"
                    },
                    {
                        a: "https://www.whatsapp.com/",
                        url: "./images/wa.png",
                        alt: "Whatsapp Icon"
                    },
                    {
                        a: "https://www.facebook.com/",
                        url: "./images/fb.png",
                        alt: "Facebook Icon"
                    },
                    {
                        a: "https://www.tiktok.com/en/",
                        url: "./images/tt.png",
                        alt: "Tik Tok Icon"
                    }
                ]
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