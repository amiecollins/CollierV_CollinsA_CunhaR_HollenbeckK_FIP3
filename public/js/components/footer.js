import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

export default {
    data: function () {
        return {
            logo: {
                url: "images/pawp-logo.svg",
                alt: "PAWP Heros Logo, Protection, Awareness and Wellness Prophylactic Heros"
            },
            copyright: "© 2020"
        }
    },
    
    methods: {
        backtotop() {
            console.log("back to top pressed");
            // back to top
        }
    },

    template: '<footer><div class="footer-top"><div class="tri-left"></div><div class="tri-right"></div></div><div class="footer-bot"><img class="footer-logo" :src="logo.url" :alt="logo.alt"><span class="back-to-top" @click="backtotop">Back to Top</span></div><div class="copyright" v-text="copyright"></div></footer>'
    
}

    