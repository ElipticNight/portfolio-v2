<template>
    <div class="input-container">
        <div class="required-container">
            <i v-if="validation !== undefined" class="fas fa-asterisk" />
        </div>
        <input
            v-model="content"
            @input="handleInput"
            :type="type"
            :id="name"
            :name="name"
            :min="min"
            :max="max"
            v-bind:class="{ invalid: !isValid }"
            v-if="type !== 'textarea'"
        />
        <textarea
            v-else
            ref="textarea"
            v-model="content"
            @input="handleInput"
            :id="name"
            :name="name"
            v-bind:class="{ invalid: !isValid }"
        ></textarea>
        <label :class="content ? 'input-with-value' : ''">
            <span>{{ label }}</span>
        </label>
    </div>
</template>

<script>
export default {
    name: "Input",
    props: {
        value: {},
        label: {
            type: String
        },
        name: {
            type: String
        },
        validation: {
            type: String
        },
        type: {
            type: String,
            default: "text"
        },
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    data() {
        return {
            content: this.value,
            isValid: true,
            regex: {
                email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }
        };
    },
    mounted() {
        this.$root.$on("reset-inputs", () => {
            this.content = "";
        });
        this.$root.$on("flash-invalid", () => {
            if (this.validation !== undefined && this.isValid && this.content.length === 0) {
                this.isValid = false;
                setTimeout(() => {
                    this.isValid = true;
                }, 400);
            }
        });
    },
    methods: {
        handleInput() {
            if (this.type === "textarea") {
                this.content = this.$refs.textarea.value;
            }
            this.validateInput();
            this.$emit("input", this.content);
            this.$emit("update:isValid", this.isValid);
        },
        validateInput() {
            switch (this.validation) {
                case undefined:
                    this.isValid = true;
                    break;
                case "text":
                    this.validateText();
                    break;
                case "email":
                    this.validateEmail();
                    break;
                case "number":
                    this.validateNumber();
                    break;
                default:
                    this.isValid = true;
            }
        },
        validateText() {
            if (this.content.length > 0) {
                this.isValid = true;
            } else {
                this.isValid = false;
            }
        },
        validateEmail() {
            this.content = this.content.toLowerCase();
            if (this.regex.email.test(this.content)) {
                this.isValid = true;
            } else {
                this.isValid = false;
            }
        },
        validateNumber() {
            if (isNaN(this.content)) {
                this.isValid = false;
            } else {
                this.isValid = true;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.input-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 40px;
    width: 100%;
    .required-container {
        position: relative;
        left: -20px;
        i {
            margin-top: 15px;
            font-size: 8px;
            color: $red;
        }
    }

    .icon {
        position: relative;
        margin-top: 12px;
        right: 30px;
    }

    input,
    textarea {
        display: flex;
        flex-direction: column;
        flex: 10;
        width: 100%;
        border-radius: 5px;
        border: solid 1px $lavender-grey;
        padding-left: 25px;
        outline: none;
        transition: border 200ms ease-out;
        &.invalid {
            border: solid 1px $red;
        }
    }

    textarea {
        resize: none;
        height: 150px !important;
        padding-top: 10px;
        font-size: 15px;
    }

    label {
        width: auto;
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        flex: 1;
        position: absolute;
        z-index: 900;
        color: $black;
        order: -1;
        margin-top: -10px;
        margin-left: 15px;
        padding-left: 15px;
        transition: all 0.3s ease-in;
        transform: translateY(20px);
        pointer-events: none;
        font-size: 15px;

        span {
            background: none;
            padding: 0 5px;
        }
    }

    input:focus + label,
    textarea:focus + label,
    .input-with-value {
        transform: translate(-20px, -15px);
        transform: font-size 0.3s;
        font-size: 16px;
        color: $white;
    }
}
</style>
