export default {
    data: function () {
        return {
            on: true,
            data: [
                {
                    url: "./videos/pawpman.mp4",
                    alt: "PAWPman introduction",
                    type: "video/mp4"
                },{
                    url: "./videos/rubberrebel.mp4",
                    alt: "Rebel Rubber introduction",
                    type: "video/mp4"
                },{
                    url: "./videos/vaxter.mp4",
                    alt: "Vaxter introduction",
                    type: "video/mp4"
                }
            ]
        }
    },

    props: [ "id" ],
    
    methods: {
        nextVideo: function () {
            console.log("next video");
            this.$emit("reload-video");
        }
    },

    template: `<video :src="data[id].url" :type="data[id].type" :alt="data[id].alt" class="top-video" autoplay controls muted @ended="nextVideo" v-if="on"></video>
    `
}