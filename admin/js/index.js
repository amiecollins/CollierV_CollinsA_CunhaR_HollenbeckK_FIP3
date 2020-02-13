import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import navigation_header from './components/header.js'
import pawp_footer from './components/footer.js'
import get from './includes/get.js'

var home_top_data = get("tbl_home_top");
var home_bot_data = get("tbl_home_bot");
var socials_data = get("tbl_socials");

const vueIndex = (() => {

    let vm = new Vue({

        data: {
            top_video: {
                url: "./videos/batman.mp4",
                alt: "placeholder video, Batman 1966 S1E1",
                type: "video/mp4"
            },
            greeting: {
                title: "PAWP Heroes",
                left: "Who better to turn to for help than a hero? We know topics such as HIV and AIDS can be a sensitive matter, and you may not want to confide in a parent or close friend. That’s why we are here!",
                right: "PAWP Heroes unite! With the help of these well educated heroes, you can ask any question and have guaranteed support. We have your back!"
            },
            hero: {
                url: "./images/hero_photo.png",
                alt: "placeholder super hero image",
                title: "Our Campaign",
                contents: "Our goal is to end the stigma surrounding HIV/AIDS and to keep the young safe."
            },
            help: {
                url: "./images/help_photo.png",
                alt: "placeholder help image",
                title: "How to Help",
                contents: "There are many ways to help, and our website makes it easy. Whether you’re looking to help out in the community, or simply educate yourself so you can help end the stigma, we provide many resources under the resources tab."
            },
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