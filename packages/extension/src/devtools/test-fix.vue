<template>
    <div>
        <h1>Test Fix on Save</h1>
        <p v-if="condition" v-show="visible">Hello world</p>
        <div v-html="rawHtml"></div>
    </div>
</template>

<script setup lang="ts">
// Import but don't use (auto-fixable)
import { ref, onMounted } from 'vue';

// Extra spaces (auto-fixable)
const condition = true;
const visible = false;
// Trailing semicolon missing (auto-fixable)
const rawHtml = '<span style="color: red">This is raw HTML</span>';

// Double quotes instead of single quotes (auto-fixable if rule is set)
const message = 'This is a message';
</script>

<style>
.test {
    color: red;
}
</style>
