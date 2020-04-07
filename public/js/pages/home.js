import video_player from '../components/video_player.js'
import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

export default  {
    data: function () {
        return {
            top_video: {
                id: 0,
                max: 3,
                on: true
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
                        url: "./images/ig.svg",
                        alt: "Instagram Icon"
                    },
                    {
                        a: "https://www.twitter.com/",
                        url: "./images/tw.svg",
                        alt: "Twitter Icon"
                    },
                    {
                        a: "https://www.facebook.com/",
                        url: "./images/fb.svg",
                        alt: "Facebook Icon"
                    },
                    {
                        a: "https://www.tiktok.com/en/",
                        url: "./images/tt.svg",
                        alt: "Tik Tok Icon"
                    }
                ]
            }
        }
    },
    
    methods: {
        refreshVideo: function () {
            var newID = this.top_video.id + 1;
            if (newID === this.max) {
                newID = 0;
            } 
            this.top_video.id = newID;
            this.top_video.on = false;
            Vue.nextTick().then(function () {

            });
            this.top_video.on = true;
        },
        showVideo: function () {
            this.top_video.on = true;
        }
    },

    components: {
        video_player
    },


    template: `<div id="home">
    <section class="video-player"><h2 class="hidden">Meet the Heroes</h2><video_player :id.sync="top_video.id" v-if="top_video.on === true" v-on:reload-video="refreshVideo"></video_player></section>
    
    <section class="greeting">
        <h2 class="greeting-title">{{ greeting.title }}</h2>
        <section class="greeting-contents">
            <h3 class="hidden">Why PAWP Heroes?</h3>
            <div class="greeting-left">
                {{ greeting.left }}
            </div>
            <div class="greeting-right">
                {{ greeting.right }}
            </div>
        </section>
    </section>
    
    <div class="greeting-bot">
        <div class="tri-left"></div>
        <div class="tri-right"></div>
    </div>

    <section class="campaign">
        <img class="hero-photo" :src="hero.url" :alt="hero.alt">
        <div class="campaign-text">
            <h2 class="campaign-title">{{ hero.title }}</h2>
            {{ hero.contents }}
        </div>
    </section>

    <section class="help">
        <div class="help-content">
            <h2 class="help-title">{{ help.title }}</h2>
            {{ help.contents }}
        </div>
        <div class="photo-wrapper">
            <img class="help-photo" :src="help.url" :alt="help.alt">
            <div class="help-more"><a href="give.html">SEE MORE</a></div>
        </div>
    </section>

    <section class="social-media">
        <div class="social-media-title">
            {{ social_media.title }}
        </div>
        <div class="social-media-icons">
            <div v-for="link in social_media.icons">
                <a :href="link.a"><img class="social-media-icon" :src="link.url" :alt="link.alt"></a>
            </div>
        </div>
    </section></div> `
}