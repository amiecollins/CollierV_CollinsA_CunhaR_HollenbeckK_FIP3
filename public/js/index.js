import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import error_page from './pages/notavailable.js'
import home from './pages/home.js'
import events from './pages/events.js'
import pawp_footer from './components/footer.js'
import pawp_header from './components/header.js'

const vueIndex = (() => {

    let vm = new Vue({

        data: {
            page: "home"
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
            
            burgerToggle() {
                if (this.burger.active) {
                    this.burger.active = false;
                } else {
                    this.burger.active = true;
                }
               console.log("burger activated");
            },
            checkSize() {
                if (window.innerWidth >= 900) {
                    this.burger.active = true;
                  } else {
                    this.burger.active = false;
                  }
            }
        },

        components: {
            error_page,
            pawp_header,
            pawp_footer,
            home,
            events
        }

    }).$mount("#index");

})();