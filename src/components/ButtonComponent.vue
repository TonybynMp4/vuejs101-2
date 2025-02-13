<script setup lang="ts">
    interface FieldComponentProperties {
        id: string;
        label: string;
        type?: 'submit' | 'reset' | 'button';
        class?: string;
        style?: string;
    }

    defineProps<FieldComponentProperties>();
</script>

<template>
    <button :id="id" :type="type ?? 'submit'" :class="class" :style="style">
        {{ label }}
    </button>
</template>

<style scoped>
</style>