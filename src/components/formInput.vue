<script setup lang="ts">
    import { ref } from 'vue'

    export default {
        setup() {
            const count = ref(0)

            return {
                count
            }
        }
    }
</script>

<template>
    <section>
        <label for="password">{{label}}</label>
        <input type="password" required placeholder="Mot de passe">
   </section>
</template>

<style scoped>
</style>