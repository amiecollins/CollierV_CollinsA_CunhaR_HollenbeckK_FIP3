import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'
import error_page from './pages/notavailable.js'
import home from './pages/home.js'
import events from './pages/events.js'
import pawp_footer from './components/footer.js'
import pawp_header from './components/header.js'

const vueIndex = (() => {

    let vm = new Vue({

        data: {
            logo: {
                url: "images/logo.svg",
                alt: "PAWP Heros Logo, Protection, Awareness and Wellness Prophylactic Heros"
            },
            links: [
                {
                    name: "home",
                    url: "home",
                    sublinks: [

                    ]
                },
                {
                    name: "events",
                    url: "events",
                    sublinks: [
                        {
                            name: "pawp walk",
                            url: "event-pawpwalk"
                        },
                        {
                            name: "the party red",
                            url: "notavailable"
                        },
                        {
                            name: "motivation day",
                            url: "notavailable"
                        },
                        {
                            name: "a day To remember",
                            url: "notavailable"
                        }
                    ]
                },
                {
                    name: "socials",
                    url: "socialmedia",
                    sublinks: [
                        {
                            name: "youtube",
                            url: "notavailable"
                        }
                    ]
                },
                {
                    name: "resources",
                    url: "resources",
                    sublinks: [

                    ]
                },
                {
                    name: "how to help",
                    url: "give",
                    sublinks: [
                        {
                            name: "volunteering",
                            url: "notavailable"
                        },
                        {
                            name: "sharables",
                            url: "notavailable"
                        },
                        {
                            name: "donation",
                            url: "notavailable"
                        }
                    ]
                },
                {
                    name: "I need help",
                    url: "gethelp",
                    sublinks: [
                        {
                            name: "rhac",
                            url: "https://hivaidsconnection.ca/"
                        },
                        {
                            name: "resource",
                            url: "notavailable"
                        },
                        {
                            name: "resource",
                            url: "notavailable"
                        }
                    ]
                }
            ],
            burger: {
                active: false,
                url: "images/bg.svg",
                alt: "burger menu button"
            },

            resources: [
                {
                    title: "resource 1",
                    url: "whatever",
                    imgurl: "images/help_photo.png",
                    alt: "This is a resource!!!!!!!!!"
                },

                {
                    title: "resource 2",
                    url: "whatever",
                    imgurl: "images/help_photo.png",
                    alt: "This is a resource!!!!!!!!!"
                },

                {
                    title: "resource 3",
                    url: "whatever",
                    imgurl: "images/help_photo.png",
                    alt: "This is a resource!!!!!!!!!"
                }
            ]
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