export default {
    data: function () {
        return {
            title: "Volunteering Applicant Form",
            form: [
                {
                    name: "Full Name",
                    type: "name",
                    value: "",
                    id: "name"
                },
                {
                    name: "Contact Number",
                    type: "phone",
                    value: "",
                    id: "phone"
                },
                {
                    name: "Email",
                    type: "email",
                    value: "",
                    id: "email"
                },
                {
                    name: "Area of Interest",
                    type: "text",
                    value: "",
                    id: "interest"
                }
            ],
            message: ""
        }
    },
    
    methods: {
        submitform: function () {
            // submit form with php
        }
    },

    template: `
    <section class="volunteering">
        <h2 class="volun-title" v-text="title"></h2>
        <div class="volun-content">
            <form class="volun-form">
                <div class="volun-form-item" v-for="item in form"><label for="item.id" v-text="item.name"></label><input type="item.type" value="item.value" id="item.id"></div>
                <div class="volun-form-item"><label for="message">Message</label><textarea value="message" id="message"></div>
                <div class="volun-button" @click="submitform">Send</div>
            </form>
        </div>
    </section>`
}