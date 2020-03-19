export default {
    data: function () {
        return {
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
        }
    },
    
    methods: {
        
    },

    template: `<div class="helpContainer">

    <h1 class="needHelp">I Need Help</h1>

    <p>We are here to help. We know that not everyone has people to talk to. We want to make sure people feel the comfort to confide in us and local organizations like the Region HIV/AIDS Connection. We provide many resources to try and help whatever need you may have.</p>

    <section class="helpLinkCont">
        <h3 class="hidden">Here are some resources to help you out.</h3>
        <div v-for="resource in resources" class="resources">
            <a :href="resource.url">
                <div class="resourceTitle">
                    {{ resource.title }}
                </div>

                <img :src="resource.imgurl" :alt="resource.alt" class="resourceImg">
            </a>
        </div>
    </section>

    </div>

    `
}
