<script setup lang="ts">
    function onsubmit(event: Event) {
        event.preventDefault();
        alert('Hello');
    }
</script>

<template>
    <main>
        <form v-on:submit="onsubmit">
            <fieldset>
                <legend>Login</legend>
                <section>
                    <label for="username">Username :</label>
                    <input id="username" type="text" required placeholder="Nom d'utilisateur">
                </section>

                <section>
                    <label for="password">Password :</label>
                    <input type="password" required placeholder="Mot de passe">
                </section>

                <button>Login</button>
            </fieldset>
        </form>
    </main>
</template>

<style scoped>
    form {
        font-family: monospace;
    }
    fieldset {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>