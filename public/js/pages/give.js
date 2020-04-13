export default {
    data: function () {
        return {
            title: "How to Help",
            description: "Do you want to have a hand in what we are doing? We have many opportunities for the community to help out. From Volunteering to Donation, anything helps! We are trying to change the way future looks at HIV / AIDS and other diseases. Help us do it.",
            giveways: [
                {
                    title: "Volunteering",
                    url: "volunteering",
                    imgurl: "images/hero_photo.png",
                    alt: "placeholder",
                    button: "Give My Time"
                },
                {
                    title: "Education",
                    url: "resources",
                    imgurl: "images/hero_photo.png",
                    alt: "placeholder",
                    button: "Learn & Share"
                },
                {
                    title: "Donation",
                    url: "notavailable",
                    imgurl: "images/hero_photo.png",
                    alt: "placeholder",
                    button: "Donate Now"
                }
            ],
            quote: {
                content: "No one in this world is useless who lightens the burdan of another.",
                person: "- Charles Dickens"
            }
        }
    },
    
    methods: {
        
    },

    template: `
    <section class="give">
        <h2 class="give-title" v-text="title"></h2>
        <p class="description" v-text="description"></p>
        <div class="in-need">
            <section class="give-way" v-for="way in giveways">
                <h3 class="way-title" v-text="way.title"></h3>
                <img class="way-img" :src="way.imgurl" :alt="way.alt">
                <div class="way-button" v-text="way.button" @click="$emit(setpage, way.url)"></div>
            </section>
        </div>
        <div class="quote" v-text="quote.content"></div>
        <div class="attribution" v-text="quote.person"></div>
    </section>`
}
