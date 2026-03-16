<template>

<section id="skills" class="min-h-screen flex items-center bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Grille deux colonnes -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Colonne gauche : barres de progression -->
        <div class="space-y-8">
          <!-- En-tête -->
          <div class="space-y-3">
            <span class="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
              ✦ Mon expertise
            </span>
            <h1 class="text-2xl sm:text-3xl font-medium text-gray-800 leading-tight">
              Développement web & Devops
            </h1> 
          </div>

          <!-- Liste des compétences avec barres de progression -->
          <div class="space-y-6"> 
            <div class="mb-1 gap-2 bg-white rounded p-4 space-y-6">
                <div class="flex gap-2">
                    <span class="material-symbols-outlined p-1 text-blue-500 bg-blue-500/10 rounded-lg">code</span>
                    <h1 class="text-xl text-blue-500">Langages & Frameworks</h1>
                </div> 
                <div class="flex flex-wrap gap-1">
                    <span class="px-3 py-2 rounded-xl text-xs sm:text-sm bg-blue-500/10 hover:text-blue-500 flex items-center sm:w-1/2 md:w-1/4 gap-2">
                        <i class="devicon-html5-plain colored text-lg"></i> 
                        <span>HTML 5</span>
                    </span> 

                    <span class="px-3 py-2 rounded-xl text-xs sm:text-sm bg-blue-500/10 hover:text-blue-500 flex items-center sm:w-1/2 md:w-1/4 gap-2">
                        <i class="devicon-css3-plain colored text-lg"></i> 
                        <span>CSS 3</span>
                    </span> 

                    <span class="px-3 py-2 rounded-xl text-xs sm:text-sm bg-blue-500/10 hover:text-blue-500 flex items-center sm:w-1/2 md:w-1/4 gap-2">
                        <i class="devicon-javascript-plain colored text-lg"></i> 
                        <span>Javascript</span>
                    </span> 

                    <span class="px-3 py-2 rounded-xl text-xs sm:text-sm bg-blue-500/10 hover:text-blue-500 flex items-center sm:w-1/2 md:w-1/4 gap-2">
                        <i class="devicon-php-plain colored text-lg"></i>
                        <span>PHP</span>
                    </span>

                    <span class="px-3 py-2 rounded-xl text-xs sm:text-sm bg-blue-500/10 hover:text-blue-500 flex items-center sm:w-1/2 md:w-1/4 gap-2">
                        <i class="devicon-python-plain colored text-lg"></i> 
                        <span>Python</span>
                    </span> 
 
                </div>
            </div>  
          </div>

          <!-- Petit texte complémentaire (optionnel) -->
          <p class="text-sm text-gray-500 pt-4">
            * Niveaux estimés basés sur mon expérience professionnelle et mes projets.
          </p>
        </div>

        <!-- Colonne droite : image -->
        <div class="relative flex justify-center md:justify-center items-center">
          <div class="relative w-full max-w-md h-auto rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <img 
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
              alt="Développement web et code"
              class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
          <!-- Cercle flou décoratif -->
          <div class="absolute -z-10 w-72 h-72 md:w-96 md:h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -bottom-10 -right-10"></div>
        </div>
      </div>
    </div>
  </section> 

</template>