<script setup lang="ts">
    interface FieldComponentProps {
        id: string;
        label: string;
        placeholder: string;
        type?: string;
    }

    defineProps<FieldComponentProps>();
</script>

<template>
    <section>
        <label :for="id">{{label}}</label>
        <input :type="type ?? 'text'" :id="id" :name="id" required :placeholder="placeholder" />
   </section>
</template>

<style scoped>
</style>