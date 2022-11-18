<template>
  <h1 class="text-3xl font-bold underline">
    Vue3 + Vite + TypeScript + TailwindCSS + ESLint
  </h1>

  <div class="card">
    <el-button type="primary">Primary</el-button>
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p :class="HelloWorldCSS['read-the-docs']">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HelloWorldCSS from '@/assets/styles/helloWorld.module.scss'

defineProps<{ msg: string }>()

const count = ref(0)

</script>
