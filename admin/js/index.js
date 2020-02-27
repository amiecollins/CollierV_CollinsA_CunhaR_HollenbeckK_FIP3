import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import navigation_header from './components/header.js'
import pawp_footer from './components/footer.js'


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
                title: "Learn more on our Socials",
                icons: []
            }
        },

        created: function () {
            function get(table) {

                var REQ;

                if (window.XMLHttpRequest) {
                    // code for IE7+, Firefox, Chrome, Opera, Safari
                    REQ =new XMLHttpRequest();
                } else {
                    // code for IE6, IE5
                    REQ = new ActiveXObject("Microsoft.XMLHTTP");
                }

                var response;
                var result;

                REQ.onreadystatechange = function() {
                    if (this.readyState == 4 && this.status == 200) {
                        response = this.responseText;
                        console.log(response);
                        if (response === false || response === null || response === undefined || JSON.parse(response) === undefined) {
                            result = null;
                        } else {
                            result =  JSON.parse(response);
                        }
                        console.log(result);
                        return result;
                    }
                }
                REQ.open("GET", "http://127.0.0.1:5500/admin/php/getdata.php");
                REQ.setRequestHeader("Content-type", "application/json");
                REQ.send();
            }
            this.social_media.icons = get("socials");
            console.log(this.social_media.icons);
        },

        methods: {
        
            
        },
        
        components: {
            navigation_header,
            pawp_footer
        }

    }).$mount("#home");

})();