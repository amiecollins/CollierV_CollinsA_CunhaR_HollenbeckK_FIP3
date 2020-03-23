export default {
    data: function () {
        return {
            title: "Resources",
            content: "We are here to help. We know that finding reliable resources can be tricky, so we’ve put them all in one spot for you. These are resources that we’ve narrowed down to the most reliable and accurate. Most importantly, these are resources that WE trust.",
            subtitle: "Helpful Links",
            currentdesc: "",
            resources: [
                {
                    url: "www.catie.ca",
                    description: "Canada's source for HIV & hepatitis C information"
                },
                {
                    url: "www.unaids.org",
                    description: "Global initiative to end the battle against AIDS"
                },
                {
                    url: "www.canada.ca",
                    description: "Government of Canada main website for all civic supports"
                },
                {
                    url: "www.doctorswithoutborders.ca",
                    description: "International Assosication of Doctors best known for it's practices in dangerous areas of the world"
                },
                {
                    url: "www.aids2020.org",
                    description: "International conference about AIDS in the U.S."
                },
                {
                    url: "www.hiv.gov",
                    description: "United States HIV information and statistics"
                },
                {
                    url: "www.hivaidsconnection.ca",
                    description: "Regional HIV / AIDS Connection: Community Services & Supports Serving Perth, Huron, Lambton, Elgin, Middlesex and Oxford Counties"
                },
                {
                    url: "www.who.int",
                    description: "World Health Organization has statistics and information on various diseases and prevention/treatment strategies"
                },
                {
                    url: "www.actoronto.org",
                    description: "Vision: A Toronto where there are no new HIV infections, and the people and communities living with or most affected by HIV and AIDS live long and healthy lives free from stigma and discrimination."
                },
                {
                    url: "www.redcross.ca",
                    description: "The American Red Cross prevents and alleviates human suffering in the face of emergencies by mobilizing the power of volunteers and the generosity of donors.​"
                },
                {
                    url: "www.cdnaids.ca",
                    description: "Canadian AIDS support and information service"
                }
            ]
        }
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