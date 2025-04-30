# 📦 console-vue-query-devtools-sdk

A lightweight dev-only SDK for visualizing Vue Query cache in **Vue 2.7** projects where official Vue Query Devtools are **not available**.

> 🚫 The official `@tanstack/vue-query-devtools` only supports Vue 3.x and Vite-based projects.  
> ✅ This SDK enables cache inspection in Vue 2.7 environments by bridging your app with a custom Chrome DevTools panel.

---

## ✨ Features

- 🔍 Automatically detects and registers the active `QueryClient`
- 💻 No UI – the SDK exposes a `<ConsoleVueQueryDevtools />` component that runs in the background
- 🧪 Dev-only – safe to include in production builds (no effect outside `NODE_ENV=development`)
- 🔌 Optional `client` prop – manually test a custom `QueryClient` if needed

---

## 📦 Installation

```bash
npm install console-vue-query-devtools-sdk --save-dev
# or
pnpm add -D console-vue-query-devtools-sdk
```

---

## 🚀 Usage
	
1. Use in your root app component (e.g. App.vue):

```vue
<script setup lang="ts">
import { ConsoleVueQueryDevtools } from 'console-vue-query-devtools-sdk';
</script>

<template>
    <ConsoleVueQueryDevtools />
</template>
```

> 💡 That’s it! The component automatically registers the active QueryClient using useQueryClient().

2. [Optional] Manually provide a QueryClient:

```vue
<script setup lang="ts">
import { QueryClient } from '@tanstack/vue-query';
import { ConsoleVueQueryDevtools } from 'console-vue-query-devtools-sdk';

const customClient = new QueryClient({ /* ... */ });
</script>

<template>
  <ConsoleVueQueryDevtools :client="customClient" />
</template>
```

> 🧪 Useful for testing multiple clients or using isolated instances.

---

## 🧠 How it works

The SDK registers the provided (or detected) QueryClient to window.__VUE_QUERY_DEVTOOLS__, enabling Chrome extensions to read:
- query keys
- observer counts
- cache state
- garbage collection time

A postMessage() loop in the injected script transfers the data to your DevTools extension.

---

## 🧩 Why this exists
– Vue 2.7 supports Composition API, but not Vue 3 Devtools
– @tanstack/vue-query-devtools is Vue 3.x only
- This SDK fills the gap for legacy or incremental migration projects

---

## 🧪 Dev-only by design

This SDK is automatically excluded in production environments.
- process.env.NODE_ENV or import.meta.env.MODE are used for environment checks
- No runtime logic will run in non-dev builds

---

## 🛠 Requirements
- @tanstack/vue-query v5+
- vue 2.7.x
- Chrome DevTools Extension (must be installed separately)

---

## 📄 License

MIT