export default {
    data: function () {
        return {
            title: "Resources",
            content: "We are here to help. We know that finding reliable resources can be tricky, so we’ve put them all in one spot for you. These are resources that we’ve narrowed down to the most reliable and accurate. Most importantly, these are resources that WE trust.",
            subtitle: "Helpful Links",
            currentdesc: "",
            resources: []
        }
    },
    created: function () {
        fetch('../admin/scripts/getResources.php')
        .then(function(res) {
            console.log(res);
            res.json();
        }).then(function(data) {
            console.log(data);
            this.resources = JSON.parse(data);
        }).catch(function() {
            console.log("error");
        });
    },
    methods: {
        
    },

    template: `
    <section class="resources">
        <h2 class="resources-title" v-text="title"></h2>
        <div class="resources-content">
            <p v-text="content"></p>
            <h3 v-text="subtitle"></h3>
            <div class="resources-links">
                <div class="resource-description" v-text="currentdesc"></div>
                <ul>
                    <li v-for="resource in resources">
                        <a :href="resource.url" v-text="resource.url" class="resource" @mouseover="currentdesc = resource.description" @mouseleave="currentdesc = ''"></a>
                    </li>
                </ul>
            </div>
        </div>
    </section>`
}