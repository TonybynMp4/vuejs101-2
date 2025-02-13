<script setup lang="ts">
    import { reactive } from 'vue';
    import FormComponent from '../components/FormComponent.vue';

    const formData = reactive({
        formLegend: 'Login',
        fields: [
            { id: 'username', label: 'Username', placeholder: 'Username' },
            { id: 'password', label: 'Password', placeholder: 'Password', type: 'password' }
        ] as Field[],
        actions: [
            { id: 'login', label: 'Login' },
            { id: 'reset', label: 'Reset', type: 'reset' }
        ] as Button[]
    });

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
</script>

<template>
    <main>
        <FormComponent
            :formLegend="formData.formLegend"
            :fields="formData.fields"
            :actions="formData.actions"
        />
    </main>
</template>

<style scoped>
    main {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        margin: 3rem auto;
    }
</style>