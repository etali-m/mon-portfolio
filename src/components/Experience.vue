<template>
    <section id="experience" class="py-24 bg-gray-50">

  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    <!-- Colonne gauche : image décorative -->
    <div class="relative flex justify-center md:justify-end">
      <div class="relative w-full max-w-md h-auto rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
        <img 
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80" 
          alt="Expérience professionnelle"
          class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <!-- Cercle flou décoratif -->
      <div class="absolute -z-10 w-64 h-64 md:w-80 md:h-80 bg-blue-100 rounded-full blur-3xl opacity-30 -bottom-10 -right-10"></div>
    </div>

    <!-- Colonne droite : expériences -->
    <div>

      <!-- Titre section -->
      <div class="flex items-center gap-3 mb-10">
        <div class="w-1 h-10 bg-blue-500 rounded-full"></div> <!-- objet décoratif vertical -->
        <h2 class="text-3xl sm:text-4xl font-medium text-gray-800">
          Expériences professionnelles
        </h2>
      </div>

      <!-- Liste expériences -->
      <div class="space-y-6">

        <!-- Expérience 1 -->
        <div class="experience-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 class="text-lg font-semibold text-gray-800">Développeur Backend</h3>
          <span class="text-sm text-gray-500">Société ABC • 2025 - 2026 • Yaoundé</span>
          <p class="mt-3 text-gray-600 text-sm">
            Développement et maintenance d'applications web, mise en place d'API REST, gestion de la base PostgreSQL.
          </p>
          <div class="flex flex-wrap gap-2 mt-3 text-xs">
            <span class="tag">Django</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">Docker</span>
          </div>
        </div>

        <!-- Expérience 2 -->
        <div class="experience-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 class="text-lg font-semibold text-gray-800">Stage Développeur Fullstack</h3>
          <span class="text-sm text-gray-500">Startup XYZ • 2024 • Yaoundé</span>
          <p class="mt-3 text-gray-600 text-sm">
            Développement frontend avec Vue.js, intégration de composants, tests unitaires et participation à la CI/CD.
          </p>
          <div class="flex flex-wrap gap-2 mt-3 text-xs">
            <span class="tag">Vue.js</span>
            <span class="tag">Tailwind CSS</span>
            <span class="tag">GitLab CI/CD</span>
          </div>
        </div>

        <!-- Tu peux ajouter d'autres expériences ici -->

      </div>

    </div>

  </div>

</section>
</template>

<style scoped>
.experience-card {
  transition: all 0.3s;
}

.experience-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.tag {
  background: #eff6ff;
  color: #2563eb;
  padding: 3px 8px;
  border-radius: 999px;
}

@media (max-width: 768px){
  /* Décoratif repositionné sur mobile */
  .experience-card {
    text-align: center;
  }
}
</style>