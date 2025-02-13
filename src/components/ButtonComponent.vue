<script setup lang="ts">
    interface ButtonComponentProps {
        id: string;
        label: string;
        type?: 'submit' | 'reset' | 'button';
        className?: string;
        style?: string;
    }

    defineProps<ButtonComponentProps>();
</script>

<template>
    <button :id="id" :type="type ?? 'submit'" :class="className" :style="style">
        {{ label }}
    </button>
</template>

<style scoped>
</style>