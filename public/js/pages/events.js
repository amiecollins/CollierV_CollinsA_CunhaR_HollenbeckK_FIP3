export default {
    data: function () {
        return {
            events: [
                {
                    title: "The PAWP Walk",
                    description: "Annually, we hold a 'PAWP Walk'. This walk is intended to get kids to come participate in activities in which they can learn more about HIV/AIDS and how to stay safe. At these events we also talk about how staying vaccinated can help reduce risk to those already affected by HIV/AIDS",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    link: "https://www.eventbrite.ca/"
                },
                {
                    title: "The Party Red",
                    description: "This year, we had our first 'The Party Red' concert. The concert is sponsored by local businesses and organizations to help bring singers and artists together. We try to bring in popular artists to invoke kids to come participate. We also have games and prizes to raise money for local initiatives.",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    link: "https://www.eventbrite.ca/"
                },
                {
                    title: "Motivation Day",
                    description: "Motivation day is an entire day dedicated to help inspire people in the community. We hold it on the weekend so anyone can come out. People will learn things about the Regional HIV/AIDS Connection and issues in our community to help bring everyone together and create a bright future for citizens.",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    link: "https://www.eventbrite.ca/"
                },
                {
                    title: "A Day to Remember",
                    description: "We could never forget those affected by the AIDS epidemic. This day is open to anyone that would like to remember and respect those who were involved in this biggest epidemic in North America.",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    link: "https://www.eventbrite.ca/"
                }
            ]
        }
    },
    
    methods: {
        
    },

    template: `<div class="events-container">
    <h2 class="events-title">Events</h2>
    <section class="event" v-for="event in events">
        <img class="event-image" :src="event.imgurl" :alt="event.alt">
        <div class="event-content">
            <h3 class="event-name">{{ event.title }}</h3>
            <p>{{ event.description }}</p>
            <a href="https://www.eventbrite.ca/"><button class="buy-tickets">Buy Tickets</button></a>
        </div>
    </section></div>
    `
}
