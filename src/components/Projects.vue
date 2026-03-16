<template>

<section id="projects" class="py-24 bg-gray-50">

<div class="max-w-7xl mx-auto px-6">

    <!-- Header -->
    <div class="text-center mb-16">
        <span class="inline-block px-4 py-1.5 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full">
            ✦ Mes réalisations
        </span>

        <h2 class="text-3xl sm:text-4xl font-semibold text-gray-800 mt-4">
            Projets récents
        </h2>

        <p class="text-gray-500 mt-4 max-w-2xl mx-auto">
            Voici quelques projets sur lesquels j'ai travaillé. Ils illustrent mes compétences en développement web, backend et DevOps.
        </p>
    </div>

    <!-- Grid projets -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        <!-- Projet 1 -->
        <div class="project-card">

            <img 
            src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
            class="project-image"
            />

            <div class="p-6 space-y-4">

                <h3 class="text-lg font-semibold text-gray-800">
                    Security Audit Manager
                </h3>

                <p class="text-gray-500 text-sm">
                    Application web permettant de gérer les audits de sécurité et le suivi des recommandations avec analyse NLP.
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 text-xs">

                    <span class="tag">Django</span>
                    <span class="tag">Vue.js</span>
                    <span class="tag">NLP</span>

                </div>

                <!-- Liens -->
                <div class="flex gap-4 pt-2">

                    <a href="#" class="project-link">
                        Code
                    </a>

                    <a href="#" class="project-link">
                        Demo
                    </a>

                </div>

            </div>

        </div>


        <!-- Projet 2 -->
        <div class="project-card">

            <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            class="project-image"
            />

            <div class="p-6 space-y-4">

                <h3 class="text-lg font-semibold text-gray-800">
                    DevOps Deployment Pipeline
                </h3>

                <p class="text-gray-500 text-sm">
                    Mise en place d'un pipeline CI/CD pour déployer une application web avec Docker et GitLab CI.
                </p>

                <div class="flex flex-wrap gap-2 text-xs">

                    <span class="tag">Docker</span>
                    <span class="tag">GitLab CI</span>
                    <span class="tag">AWS</span>

                </div>

                <div class="flex gap-4 pt-2">

                    <a href="#" class="project-link">
                        Code
                    </a>

                </div>

            </div>

        </div>


        <!-- Projet 3 -->
        <div class="project-card">

            <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            class="project-image"
            />

            <div class="p-6 space-y-4">

                <h3 class="text-lg font-semibold text-gray-800">
                    Portfolio Developer
                </h3>

                <p class="text-gray-500 text-sm">
                    Portfolio personnel développé avec Vue.js et Tailwind CSS pour présenter mes projets et compétences.
                </p>

                <div class="flex flex-wrap gap-2 text-xs">

                    <span class="tag">Vue.js</span>
                    <span class="tag">Tailwind</span>

                </div>

                <div class="flex gap-4 pt-2">

                    <a href="#" class="project-link">
                        Code
                    </a>

                    <a href="#" class="project-link">
                        Demo
                    </a>

                </div>

            </div>

        </div>

    </div>

</div>

</section>

</template>

<style scoped>

.project-card{
background:white;
border-radius:16px;
overflow:hidden;
border:1px solid #f1f5f9;
transition:all 0.3s;
}

.project-card:hover{
transform:translateY(-6px);
box-shadow:0 15px 40px rgba(0,0,0,0.08);
}

.project-image{
width:100%;
height:200px;
object-fit:cover;
}

.tag{
background:#eff6ff;
color:#2563eb;
padding:4px 10px;
border-radius:999px;
}

.project-link{
font-size:14px;
color:#2563eb;
font-weight:500;
}

.project-link:hover{
text-decoration:underline;
}

</style>