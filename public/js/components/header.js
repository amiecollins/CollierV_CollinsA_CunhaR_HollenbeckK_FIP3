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
                            url: "event-1"
                        },
                        {
                            name: "the party red",
                            url: "event-2"
                        },
                        {
                            name: "motivation day",
                            url: "event-3"
                        },
                        {
                            name: "a day To remember",
                            url: "event-4"
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
                        },
                        {
                            name: "instagram",
                            url: "notavailable"
                        },
                        {
                            name: "faacebook",
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
                            url: "give-1"
                        },
                        {
                            name: "sharables",
                            url: "give-2"
                        },
                        {
                            name: "donation",
                            url: "give-3"
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
            }
        }
    },

    methods: {

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
    
    created: function () {
        this.checkSize();
        window.addEventListener('resize', this.checkSize);
    },
    
    template: `
    <div>
        <h2 class="hidden">Header Bar</h2>
        <div class="header-top"><img class="logo" :src="logo.url" :alt="logo.alt"/></div>
        <div class="header-mid">
            <img class="burger" :class="{'burger-active': burger.active}" :src="burger.url" :alt="burger.alt" @click="burgerToggle">
            <nav class="header-nav" :class="{'mobile-show': burger.active}">
                <h3 class="hidden">Navigation</h3>
                <ul class="header-links">
                    <li v-for="link in links" class="link" >
                        <a @click="$emit('setpage', link.url)" v-text="link.name"></a>
                        <div class="sublink-box" v-if="link.sublinks.length !== 0">
                            <div class="sublink" v-for="sublink in link.sublinks">
                                <a @click="$emit('setsubpage', sublink.url)" v-text="sublink.name"></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
        <div class="header-bot"><div class="tri-left"></div><div class="tri-right"></div></div>
    </div>
    `
}