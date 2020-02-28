import video_playlist from '../components/video_player.js'

export default {
    data: function () {
        return {
            top_video: {
                id: 0,
                on: true,
                videos: 3
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
                icons: [
                    {
                        name: "Facebook",
                        url: "images/fb.svg",
                        a: "https://www.facebook.com/PAWP-Heroes-100858708186011/",
                        description: "Visit our Facebook to learn more about our Heroes and how they can help us fight against the BB&V Villians and help their victims."
                    },
                    {
                        name: "Twitter",
                        url: "images/tw.svg",
                        a: "https://twitter.com/PAWP_Heroes",
                        description: "Sassy much? Hear from our favourite heroes and learn more about their cause and how to help them fight the BB&V Villians and help their everyone live healthy and safe lives."
                    },
                    {
                        name: "Instagram",
                        url: "images/ig.svg",
                        a: "https://www.instagram.com/pawp_heroes/",
                        description: "Visit our Instagram to meet our Heroes and Villians well as learn cool facts to help keep you and your loved ones' safe and healthy."
                    },
                    {
                        name: "Tik Tok",
                        url: "images/tt.svg",
                        a: "https://www.tiktok.com/en/",
                        description: "Download Tik Tok to see our Heroes in action!"
                    }
                ]
            }
        }
    },
    
    methods: {
        reloadVideo: function () {
            this.top_video.on = false;

            var newid = this.top_video.id + 1;

            if (newid === this.top_video.videos ){
                newid = 0;
            }
            this.top_video.id = newid;
        
            this.$nextTick(() => {
                this.top_video.on = true;
            });
        }
    },
    completed: function () {
        this.reloadVideo();
        window.addEventListener(onresize, this.reloadVideo);
    },
    components: {
        video_playlist
    },

    template: `<section id="home-contents"><h1 class="hidden">PAWP Heroes Home</h1>

       
    <h2 class="hidden">Meet the Heros!</h2><video_playlist :id.sync="top_video.id" v-if="top_video.on" @reload-video="reloadVideo"></video_playlist>
     
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
                <div class="help-more"><a @click="$emit('set-page','give')">SEE MORE</a></div>
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
        </section>
    </section>
    `
}

