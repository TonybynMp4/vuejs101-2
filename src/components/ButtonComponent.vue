<script setup lang="ts">
    interface FieldComponentProperties {
        id: string;
        type?: 'submit' | 'reset' | 'button';
        label: string;
    }

    defineProps<FieldComponentProperties>();
</script>

<template>
    <button :id="id" :type="type ?? 'submit'">
        {{ label }}
    </button>
</template>

<style scoped>
</style>