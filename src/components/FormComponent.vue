<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
import FieldComponent from './FieldComponent.vue';

function onsubmit(event: Event) {
    event.preventDefault();
    alert('Hello');
}

interface FormData {
    formLegend: string;
    fields: Field[];
    actions: Button[];
}

type Field = {
    id: string;
    label: string;
    placeholder: string;
    type?: string;
};

type Button = {
    id: string;
    label: string;
    type?: 'submit' | 'reset' | 'button';
    className?: string;
    style?: string;
};

defineProps<FormData>();
</script>

<template>
    <form v-on:submit="onsubmit">
        <fieldset>
            <legend>Login</legend>

            <FieldComponent
                v-for="field in fields"
                :key="field.id"
                :id="field.id"
                :label="field.label"
                :placeholder="field.placeholder"
                :type="field.type"
            />

            <section class="actions">
                <ButtonComponent
                    v-for="action in actions"
                    :key="action.id"
                    :id="action.id"
                    :label="action.label"
                    :type="action.type" />
            </section>
        </fieldset>
    </form>
</template>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

form {
    font-family: monospace;
    width: 50%;
}

fieldset {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.actions {
    flex-direction: row;
    gap: 1rem;
}

#login {
    flex: 1 1 auto;
}

#reset {
    flex: 0 1 auto;
}
</style>