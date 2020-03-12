import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js'

export default {
    data: function () {
        return {

        }
    },

    methods: {
        setPage: function (page) {
            this.$emit('setPage', page);
        }

    },
    
    template: `
    `
}

    