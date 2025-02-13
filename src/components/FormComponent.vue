<script setup lang="ts">
import FieldComponent from './FieldComponent.vue';

    function onsubmit(event: Event) {
        event.preventDefault();
        alert('Hello');
    }
</script>

<template>
    <form v-on:submit="onsubmit">
        <fieldset>
            <legend>Login</legend>

            <FieldComponent id="username" label="Username" placeholder="Username" />

            <section class="actions">
                <button id="login">Login</button>
                <button id="reset" type="reset">Reset</button>
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