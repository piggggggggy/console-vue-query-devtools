# Console Vue Query Devtools

A lightweight Chrome DevTools extension + SDK built specifically for the [Cloudforet Console](https://github.com/cloudforet-io/console), enabling debugging support for TanStack Query (Vue Query v5) in Vue 2.7 environments.

## Background

The official [TanStack Query Devtools](https://tanstack.com/query/latest/docs/framework/react/devtools) only supports Vue 3.x, leaving Vue 2.7 projects unsupported.  
**Cloudforet Console**, an open-source cloud management platform frontend, is built using **Vue 2.7** and **TanStack Query v5**.  
This devtools project was created to address that limitation.

Unlike general-purpose devtools, this extension is tightly coupled with Cloudforet’s **queryKey policy and structure**.  
It reflects the **context-based queryKey system** used throughout the Console codebase, allowing visibility into `admin`, `user`, and `workspace` scoped queries with precise filtering and display.

## Architecture

This is a **monorepo**, containing two main workspaces:

- **extension/** – The Chrome DevTools panel UI.
- **sdk/** – The queryClient registration logic injected into the product.

## Installation

### 🔹 Devtools Extension (Chrome)

Install the extension directly from the Chrome Web Store:  
👉 [Console Vue Query Devtools – Chrome Web Store](https://chromewebstore.google.com/detail/console-vue-query-devtool/akehibhefmaginaifkoffdpnbekgeoje)

Once installed, open your browser DevTools → click the **Console Vue Query Devtools** tab.

### 🔹 SDK (npm)

Install the SDK in your project (Vue 2.7 + TanStack Query v5 environment):

```bash
npm install console-vue-query-devtools-sdk
```

Then register it in your app:
```ts
// App.vue (script setup)
import { ConsoleVueQueryDevtools } from 'console-vue-query-devtools-sdk';

<template>
  <ConsoleVueQueryDevtools />
</template>
```

No need to manually inject queryClient—it is automatically retrieved via useQueryClient() from Vue Query.

If you’re using a custom client, you can optionally pass it as a prop.

## Features

- View all active queries (by tabbed context: admin / user / workspace)
- QueryKey-aware filtering and grouping
- Detail view with raw query data (using react-json-view)
- Compact, theme-aligned panel powered by Radix UI + Vanilla Extract

## Tech Stack

- Vue 2.7 + Vite (for SDK)
- React + Vite (for Extension panel)
- TanStack Query v5
- Radix UI + Vanilla Extract for styling
- Monorepo (pnpm workspaces)

## Status

Actively maintained and used within the cloudforet-io/console codebase.

Pull requests and feedback are welcome—this tool may be extended in the future to support other Vue 2.7-based TanStack Query projects.
