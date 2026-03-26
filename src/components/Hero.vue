<template>
  <section class="min-h-screen flex items-center bg-gradient-to-br from-white to-gray-50 pt-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <!-- Grille responsive : 1 colonne sur mobile, 2 sur desktop -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Colonne gauche : Photo avec animation -->
        <div class="relative flex justify-center md:justify-center order-2 md:order-1" data-aos="fade-right">
          <div class="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-white hover:scale-105 transition-transform duration-300 ease-in-out">
            <!-- Image placeholder - remplace par ton image réelle -->
            <img 
              src="../assets/images/profile_picture.jpg" 
              alt="Mathias Etali"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Petit effet de cercle flou derrière (optionnel) -->
          <div class="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -bottom-10 -right-10"></div>
        </div>

        <!-- Colonne droite : Texte et boutons -->
        <div class="text-left order-1 md:order-2 space-y-6" data-aos="fade-up">
          <!-- Badge (optionnel) pour un effet moderne -->
          <span class="inline-block px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-50 rounded-full">
            👋 Disponible pour des missions
          </span>
          
          <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
            Mathias Etali
          </h1>
          
          <h2 class="text-2xl sm:text-3xl text-blue-500 font-medium">
            Python Backend Developer
          </h2>
          
          <p class="text-lg text-gray-600 max-w-lg">
            Je conçois des systèmes backend scalables et des APIs robustes avec Python, Django et les technologies cloud.
          </p>
          
          <!-- Stats rapides (optionnel) pour plus de crédibilité -->
          <div class="flex gap-6 pt-4">
            <div>
              <div class="text-2xl font-bold text-gray-800">2+</div>
              <div class="text-sm text-gray-500">Années d'exp.</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-800">05+</div>
              <div class="text-sm text-gray-500">Projets</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-gray-800">98%</div>
              <div class="text-sm text-gray-500">Satisfaction</div>
            </div>
          </div>
          
          <!-- Boutons -->
          <div class="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects"
              class="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact"
              class="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 hover:border-gray-400 transition-all duration-200"
            >
              Me contacter
            </a>
          </div>

          <!-- Réseaux sociaux (optionnel) -->
          <div class="flex gap-4 pt-6">
            <a href="https://github.com/etali-m" target="_blank" class="text-gray-400 hover:text-blue-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.39-1.335-1.76-1.335-1.76-1.09-.746.082-.73.082-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.306.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578 4.765-1.588 8.2-6.086 8.2-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="#" class="text-gray-400 hover:text-blue-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.535-12.3c0-.21-.005-.42-.015-.63.961-.694 1.8-1.56 2.46-2.55z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/mathias-etali-9564871b6/" class="text-gray-400 hover:text-blue-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>