<template>
    <BForm @submit="onSubmit" @reset="onReset" v-if="show">
        <BFormGroup id="input-group-1" label="Email address:" label-for="input-1"
            description="We'll never share your email with anyone else.">
            <BFormInput id="input-1" v-model="form.email" type="email" placeholder="Enter email" required />
        </BFormGroup>

        <BFormGroup id="input-group-2" label="Your Name:" label-for="input-2">
            <BFormInput id="input-2" v-model="form.name" placeholder="Enter name" required />
        </BFormGroup>
        <BFormGroup id="input-group-3" label="Food:" label-for="input-3">
            <BFormSelect id="input-3" v-model="form.food" :options="foods" required />
        </BFormGroup>

        <BFormGroup id="input-group-4">
            <BFormCheckboxGroup v-model="form.checked" id="checkboxes-4">
                <BFormCheckbox value="me">Check me out</BFormCheckbox>
                <BFormCheckbox value="that">Check that out</BFormCheckbox>
            </BFormCheckboxGroup>
        </BFormGroup>
        <BButton type="submit" variant="primary" class="mr-2">Submit</BButton>
        <BButton type="reset" variant="danger">Reset</BButton>
    </BForm>

    <BCard class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
    </BCard>
</template>
<script setup>
import { reactive, ref, nextTick } from "vue";
const foods = [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn']

const form = reactive({
	email: '',
	name: '',
	food: null,
	checked: [],
})
const show = ref(true)

const onSubmit = (event) => {
	event.preventDefault()
	alert(JSON.stringify(form))
}

const onReset = (event) => {
	event.preventDefault()
	// Reset our form values
	form.email = ''
	form.name = ''
	form.food = null
	form.checked = []
	// Trick to reset/clear native browser form validation state
	show.value = false
	nextTick(() => {
		show.value = true
	})
}
</script>