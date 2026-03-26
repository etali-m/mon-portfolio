<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}
</script>

<template>
  <nav class="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
    <div class="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
      
      <!-- Logo -->
      <div class="flex items-center text-lg font-bold gap-1 tracking-tight">
        <span class="text-gray-800">Mathias</span>
        <span class="px-2 py-1 bg-blue-500 -rotate-6 text-white rounded-md text-sm">
          Etali
        </span>
      </div>

      <!-- Desktop menu -->
      <ul class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <li><a href="#about" class="hover:text-blue-600">Qui suis je ?</a></li>
        <li><a href="#skills" class="hover:text-blue-600">Compétences</a></li>
        <li><a href="#projects" class="hover:text-blue-600">Projets</a></li>
        <li><a href="#contact" class="hover:text-blue-600">Contact</a></li>
      </ul>

      <!-- Actions -->
      <div class="hidden md:flex items-center gap-3">
        <button class="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full">
          🌐
        </button>
        <button class="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-full">
          🌙
        </button>
      </div>

      <!-- Hamburger -->
      <button @click="toggleMenu" class="md:hidden text-gray-500">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-6">
        
        <a @click="closeMenu" href="#about" class="block text-gray-700 hover:text-blue-600">
          Qui suis je ?
        </a>
        <a @click="closeMenu" href="#skills" class="block text-gray-700 hover:text-blue-600">
          Compétences
        </a>
        <a @click="closeMenu" href="#projects" class="block text-gray-700 hover:text-blue-600">
          Projets
        </a>
        <a @click="closeMenu" href="#contact" class="block text-gray-700 hover:text-blue-600">
          Contact
        </a>

        <!-- Actions mobile -->
        <div class="flex gap-4 pt-4 border-t border-gray-200">
          <button class="flex-1 py-2 bg-gray-100 rounded-lg">🌐 Langue</button>
          <button class="flex-1 py-2 bg-gray-100 rounded-lg">🌙 Thème</button>
        </div>

      </div>
    </transition>
  </nav>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>