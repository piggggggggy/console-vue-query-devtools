# 📦 console-vue-query-devtools-sdk

A lightweight SDK for connecting [Vue Query (TanStack)](https://tanstack.com/query) with a custom DevTools extension in **Vue 2.7** + **Vite** environments.

> ⚠️ Vue 2.7 환경에서는 공식 Vue Query Devtools가 동작하지 않기 때문에, 본 SDK는 이를 대체하거나 보완하기 위한 개발 전용 도구입니다.

---

## ✨ Features

- 📡 Registers your `QueryClient` with the DevTools extension
- 🔍 Enables live inspection of Vue Query cache from a custom Chrome DevTools panel
- 🚀 Designed for use with `vite` and `@tanstack/vue-query` v5
- 🧪 Automatically excluded in production environments

---

## 📦 Installation

```bash
npm install console-vue-query-devtools-sdk --save-dev
# or
pnpm add -D console-vue-query-devtools-sdk
```

---

## 🚀 Usage
	
1. Register the QueryClient (usually in App.vue or main entry point):
```ts
import { useQueryClient } from '@tanstack/vue-query';
import { ConsoleVueQueryDevtools } from 'console-vue-query-devtools-sdk';

if (import.meta.env.DEV && window.__VUE_QUERY_DEVTOOLS__) {
    const queryClient = useQueryClient();
    window.__VUE_QUERY_DEVTOOLS__.registerClient(queryClient);
}
```

2. Mount the Devtools Component (optional)
If you want to trigger client registration automatically via component:
```vue
<script setup lang="ts">
import { ConsoleVueQueryDevtools } from 'console-vue-query-devtools-sdk';
</script>

<template>
    <ConsoleVueQueryDevtools />
</template>
```

---

## 🧠 How it works

This SDK attaches a global object to window.__VUE_QUERY_DEVTOOLS__ which allows the DevTools Chrome extension to:
- Access the current query cache
- Read query keys, GC time, observer count, and state
- Send data to the DevTools panel via postMessage

---

## 🧪 Dev-only by design

This SDK is automatically excluded in production environments.
- process.env.NODE_ENV or import.meta.env.MODE are used for environment checks
- No runtime logic will run in non-dev builds

---

## 🛠 Requirements
- @tanstack/vue-query v5+
- vite build tool
- vue 2.7.x
- Chrome DevTools Extension (must be installed separately)

---

## 🧩 Related Projects
- console-vue-query-devtools-extension – Chrome DevTools panel to visualize Vue Query cache

⸻

## 📄 License

MIT



---


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