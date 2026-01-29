<template>
  <div class="min-h-screen flex flex-col bg-white text-gray-900">
    <!-- Header -->
    <header class="border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-6 py-4">
        <h1 class="text-lg font-medium">
          AI-Based Sit-to-Walk Movement Quality Screening System
        </h1>
      </div>
    </header>

    <!-- Page content -->
    <main class="flex-1">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
</script>
