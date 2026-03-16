<template>

    <nav class="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div class="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
            
            <!-- Logo / Nom -->
            <div class="font-bold text-lg tracking-tight">
                <span class="text-gray-800">Mathias</span>
                <span class="ml-1 px-2 py-1 bg-blue-500 text-white rounded-md text-base">
                    Etali
                </span>
            </div>

            <!-- Liens de navigation -->
            <ul class="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                <li><a href="#about" class="hover:text-blue-600 transition-colors duration-200">About</a></li>
                <li><a href="#skills" class="hover:text-blue-600 transition-colors duration-200">Skills</a></li>
                <li><a href="#projects" class="hover:text-blue-600 transition-colors duration-200">Projects</a></li>
                <li><a href="#contact" class="hover:text-blue-600 transition-colors duration-200">Contact</a></li>
            </ul>

            <!-- Actions secondaires (langue / thème) -->
            <div class="flex items-center gap-3">
                <button class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
                    <span class="text-sm">🌐</span>
                </button>
                <button class="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-full transition-colors">
                    <span class="text-sm">🌙</span>
                </button>
            </div>

            <!-- Menu hamburger pour mobile (à développer) -->
            <button class="block md:hidden text-gray-500 hover:text-gray-800">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </nav>

</template>