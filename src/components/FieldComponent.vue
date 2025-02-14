<script setup lang="ts">
    import type { FieldComponent } from '../types';

    defineProps<FieldComponent>();
</script>

<template>
    <section>
        <label :for="id">{{label}}</label>
        <input :type="type ?? 'text'" :id="id" :name="id" required :placeholder="placeholder" />
   </section>
</template>

<style scoped>
</style>