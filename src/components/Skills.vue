<template>

<section id="skills" class="min-h-screen flex items-center bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <!-- Grille deux colonnes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        <!-- Colonne gauche : barres de progression -->
        <div class="space-y-8 col-span-2">
          <!-- En-tête -->
          <div class="space-y-3 mt-24">
            <span class="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
              ✦ Mon expertise
            </span>
            <h1 class="text-2xl sm:text-3xl font-medium text-gray-800 leading-tight">
              Développement web & Devops
            </h1> 
          </div>

          <!-- Liste des compétences avec barres de progression -->
          <div class="space-y-6"> 
            <div class="mb-1 gap-2 bg-white rounded shadow-sm p-4 space-y-6">
                <div class="flex gap-2">
                    <span class="material-symbols-outlined p-1 text-blue-500 bg-blue-500/10 rounded-lg">code</span>
                    <h1 class="text-xl text-blue-500">Langages & Frameworks</h1>
                </div> 
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
    
                    <div class="tech-card">
                        <i class="devicon-html5-plain colored text-xl"></i>
                        <span>HTML5</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-css3-plain colored text-xl"></i>
                        <span>CSS3</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-javascript-plain colored text-xl"></i>
                        <span>Javascript</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-bootstrap-plain colored text-xl"></i>
                        <span>Bootstrap</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-python-plain colored text-xl"></i>
                        <span>Python</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-php-plain colored text-xl"></i>
                        <span>PHP</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-tailwindcss-original colored text-xl"></i>
                        <span>Tailwindcss</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-vuejs-plain colored text-xl"></i>
                        <span>Vue.js</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-django-plain colored text-xl"></i>
                        <span>Django</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-djangorest-plain colored text-xl"></i>
                        <span>Rest Framework</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-postgresql-plain colored text-xl"></i>
                        <span>Postgresql</span>
                    </div>   

                    <div class="tech-card">
                        <i class="devicon-mysql-original colored text-xl"></i>
                        <span>MySql</span>
                    </div>  

                </div>
            </div>  

            <div class="bg-white rounded p-6 space-y-6 shadow-sm mt-4">

                <div class="flex items-center gap-3 mb-6">
                    <span class="material-symbols-outlined p-2 text-blue-500 bg-blue-100 rounded-lg">
                        code
                    </span>

                    <h3 class="text-xl text-blue-500">
                        Outils & Environnement
                    </h3>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

                    <div class="tech-card">
                        <i class="devicon-git-plain colored text-xl"></i>
                        <span>Git</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-github-original colored text-xl"></i>
                        <span>Github</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-gitlab-plain colored text-xl"></i>
                        <span>GitLab</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-postman-plain colored text-xl"></i>
                        <span>Postman</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-linux-plain colored text-xl"></i>
                        <span>Linux</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-vscode-plain colored text-xl"></i>
                        <span>VS Code</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-docker-plain colored text-xl"></i>
                        <span>Docker</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-amazonwebservices-plain-wordmark-amazonwebservices-original colored text-xl"></i>
                        <span>AWS</span>
                    </div>

                    <div class="tech-card"> 
                        <i class="devicon-gitlab-plain colored text-xl"></i>
                        <span>GitLab CI/CD</span>
                    </div>

                    <div class="tech-card">
                        <i class="devicon-nginx-original colored text-xl"></i>
                        <span>Nginx</span>
                    </div>


                </div>

            </div>
          </div>
        </div>

        <!-- Colonne droite : image -->
        <div class="relative flex justify-center md:justify-center items-center col-span-1" data-aos="zoom-in">
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

<style scoped> 

.tech-card{
  display:flex;
  align-items:center;
  gap:8px;
  padding:10px 14px;
  border-radius:12px;
  background:#f8fafc;
  font-size:14px;
  transition:all 0.25s;
  cursor:default;
}

.tech-card:hover{
  background:#eff6ff;
  color:#2563eb;
  transform:translateY(-2px);
}
</style>