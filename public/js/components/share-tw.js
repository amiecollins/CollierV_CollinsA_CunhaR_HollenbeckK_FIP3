export default {
    data: function () {
        return {

        }
    },

    props: [ "url", "description" ],
    
    methods: {
        
    },

    template: `<a class="twitter-share-button"
    href="` + url + `"
    data-text="` + description `"
    data-url="index.html"
    data-hashtags="PAWPHeros,LetsSaveTheWorld"
    data-via="PAWP_Heros">
        Tweet
    </a>`
}

    
