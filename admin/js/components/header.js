import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

export default {
    data: function () {
        return {
            logo: {
                url: "images/logo.svg",
                alt: "PAWP Heros Logo, Protection, Awareness and Wellness Prophylactic Heros"
            },
            links: [
                {
                    name: "home",
                    url: "index.html",
                    sublinks: [

                    ]
                },
                {
                    name: "events",
                    url: "events.html",
                    sublinks: [
                        {
                            name: "PAWP Walk",
                            url: "notavailable.html"
                        },
                        {
                            name: "The Party Red",
                            url: "notavailable.html"
                        },
                        {
                            name: "Motivation Day",
                            url: "notavailable.html"
                        },
                        {
                            name: "A Day To Remember",
                            url: "notavailable.html"
                        }
                    ]
                },
                {
                    name: "socials",
                    url: "socialmedia.html",
                    sublinks: [
                        {
                            name: "youtube",
                            url: "notavailable.html"
                        }
                    ]
                },
                {
                    name: "resources",
                    url: "resources.html",
                    sublinks: [

                    ]
                },
                {
                    name: "how to help",
                    url: "give.html",
                    sublinks: [
                        {
                            name: "volunteering",
                            url: "notavailable.html"
                        },
                        {
                            name: "education",
                            url: "notavailable.html"
                        },
                        {
                            name: "donation",
                            url: "notavailable.html"
                        }
                    ]
                },
                {
                    name: "I need help",
                    url: "gethelp.html",
                    sublinks: [
                        {
                            name: "RHAC",
                            url: "https://hivaidsconnection.ca/"
                        },
                        {
                            name: "resource",
                            url: "notavailable.html"
                        },
                        {
                            name: "resource",
                            url: "notavailable.html"
                        }
                    ]
                }
            ],
            burger: {
                active: false,
                url: "images/bg.svg",
                alt: "burger menu button"
            }
        }
        },

        methods: {

        },
        
        template: `<header><h2 class="hidden">Header Bar</h2><div class="header-top"><img class="logo" :src="logo.url" :alt="logo.alt"/></div><div class="header-mid"><img class="burger" :class="{'burger-active': burger.active}" :src="burger.url" :alt="burger.alt" @click="burger.active = !burger.active"><nav class="header-nav" :class="{'mobile-show': burger.active}"><h3 class="hidden">Navigation</h3><ul class="header-links"><li class="link" v-for="link in links"><a :href="link.url" v-text="link.name"></a><div class="sublink-box" v-if="link.sublinks !== null"><div class="sublink" v-for="sublink in link.sublinks"><a :href="sublink.url" v-text="sublink.name"></a></div></div></li></ul></nav></div><div class="header-bot"><div class="tri-left"></div><div class="tri-right"></div></div></header>`
    }

    