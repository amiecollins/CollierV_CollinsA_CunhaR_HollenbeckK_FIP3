export default {
    data: function () {
        return {
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

    },

    template: `
        <section class="social-media">
            <h3 class="social-media-title hidden" v-text="social_media.title"></h3>
            <div class="social-media-icons">
                <div v-for="link in social_media.icons">
                    <a :href="link.a"><img class="social-media-icon" :src="link.url" :alt="link.alt"></a>
                </div>
            </div>
        </section>`

}