<template>
    <div>
        <div class="form">
            <div class="row-headings">
                <TextInput
                    v-model="contactForm.name"
                    label="Name"
                    validation="text"
                    class="name"
                    v-bind:isValid.sync="isValid.name"
                    name="name"
                />
                <TextInput
                    v-model="contactForm.email"
                    label="Email"
                    validation="email"
                    class="email"
                    v-bind:isValid.sync="isValid.email"
                    name="email"
                />
            </div>
            <div class="row-message">
                <TextInput
                    v-model="contactForm.message"
                    type="textarea"
                    label="Message"
                    validation="text"
                    class="message"
                    v-bind:isValid.sync="isValid.message"
                    name="message"
                />
            </div>
            <div class="row-send">
                <Button @click.native="sendEmail" text="Send" />
            </div>
        </div>
    </div>
</template>

<script>
import TextInput from "@/components/form/Input";
import Button from "@/components/form/Button.vue";
import emailjs from "emailjs-com";

export default {
    name: "ContactForm",
    components: {
        TextInput,
        Button,
    },
    data() {
        return {
            contactForm: {
                email: "",
                name: "",
                message: "",
            },
            isValid: {
                email: false,
                name: false,
                message: false,
            },
        };
    },
    mounted() {
        emailjs.init("user_guZtTc7shPrwarg4itFEZ");
    },
    methods: {
        sendEmail() {
            if (!Object.keys(this.isValid).every((k) => !!this.isValid[k])) {
                this.$root.$emit("flash-invalid");
                return;
            }
            this.$root.$emit("reset-inputs");
            emailjs.send("contact_service", "contact_form", {
                user_name: this.contactForm.name,
                user_email: this.contactForm.email,
                message: this.contactForm.message,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.form {
    @media screen and (max-width: $l) {
        width: 700px;
    }
    @media screen and (max-width: $m) {
        width: 600px;
    }
    @media screen and (max-width: $s) {
        width: 80vw;
    }
    width: 750px;
    .email,
    .name,
    .message {
        margin-bottom: 40px;
    }
    .row-headings {
        display: flex;
        .name {
            margin-right: 30px;
        }
        .email {
            margin-left: 30px;
        }
        @media screen and (max-width: $s) {
            flex-direction: column;
            .name,
            .email {
                margin: 0 0 40px 0;
            }
        }
    }
    .row-send {
        @extend %center-content;
        ::v-deep .btn {
            font-size: 18px;
        }
    }
}
</style>
