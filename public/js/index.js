import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import error_page from './pages/notavailable.js'
import home from './pages/home.js'
import gethelp from './pages/gethelp.js'
import socialmedia from './pages/socialmedia.js'
import events from './pages/events.js'
import give from './pages/give.js'
import volunteering from './pages/volunteering.js'
import resources from './pages/resources.js'
import pawp_footer from './components/footer.js'
import pawp_header from './components/header.js'

const vueIndex = (() => {

    let vm = new Vue({

        data: {
            page: "volunteering",
            burger: {
                active: false,
                url: "images/bg.svg",
                alt: "burger menu button"
            }
        },

        methods: {
            fetchdata (page) {
                console.log("trying to get data from " + table);
                let url = "../admin/php/getdata/" + page + ".php";

                fetch(url)
                .then(res => res.json())
                .then(data => this.social_media.icons = data)
                .then(data => console.log(data))
                .catch(function(error) { console.error(error); });
            },

            setPage(pagename) {
                console.log("page set from " + this.page + " to " + pagename);
                this.page = pagename;
            },
            
            setSubpage(pagename) {
                console.log("page set from " + this.page + " to " + pagename);
                this.page = pagename;
            },
            
            burgerToggle() {
                if (this.burger.active) {
                    this.burger.active = false;
                } else {
                    this.burger.active = true;
                }
               console.log("burger activated");
            }
        },

        components: {
            error_page,
            pawp_header,
            pawp_footer,
            home,
            socialmedia,
            resources,
            gethelp,
            events,
            volunteering,
            give
        }

    }).$mount("#index");

})();