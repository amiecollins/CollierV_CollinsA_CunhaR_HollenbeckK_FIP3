import socials from '../components/socials.js'

export default {
    data: function () {
        return {
            title: "Social Media",
            socials: [
                {
                    title: "YouTube",
                    url: "www.youtube.com",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    description: "",
                    button: "Go th Channel"
                }
            ]
        }
    },
    
    methods: {
        
    },

    components: {
        socials
    },

    template: `
    <section class="socials">
        <h2 class="social-title" v-text="title"></h2>
        <section class="social-container" v-for="social in socials">
            <h3 class="hidden" v-text="social.title"></h3>
            <a :href="socials.url">
                <img class="social-photo" :src="social.imgurl" :alt="social.alt">
                <div class="social-content">
                    <p class="social-description" v-text="social.description"></p>
                    <div class="social-button" v-text="social.button"></div>
                </div>
            </a>
        </section>
        <socials></socials>
    </section>`
}