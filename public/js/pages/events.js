export default {
    data: function () {
        return {
            events: [
                {
                    title: "The PAWP Walk",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    link: "https://www.eventbrite.ca/"
                },
                {
                    title: "The Party Red",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    link: "https://www.eventbrite.ca/"
                },
                {
                    title: "Motivation Day",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    link: "https://www.eventbrite.ca/"
                },
                {
                    title: "A Day to Remember",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    imgurl: "images/help_photo.png",
                    alt: "placeholder",
                    link: "https://www.eventbrite.ca/"
                }
            ]
        }
    },

    created: function () {
        this.checkSize();
        window.addEventListener('resize', this.checkSize);
    },
    
    methods: {
        
    },

    template: `
    <h2 class="events-title">Events</h2>
    <section class="event" v-for="event in events">
        <img class="event-image" :src="event.imgurl" :alt="event.alt">
        <div class="event-content">
            <h3 class="event-name">{{ event.title }}</h3>
            <p>{{ event.description }}</p>
            <a :href="event-link"><button class="buy-tickets"></button></a>
        </div>
    </section>
    `
}
