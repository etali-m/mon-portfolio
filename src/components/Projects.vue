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
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">

        <!-- liste des projets --> 
        <div v-for="project in projects" :key="project.id" class="project-card">

            <div class="p-6 space-y-4">

                <h3 class="text-lg font-semibold text-gray-800">
                    {{ project.title }}
                </h3>

                <p class="text-gray-500 text-sm">
                    {{ project.description }}
                </p>

                <!-- Technologies -->
                <div class="flex flex-wrap gap-2 text-xs">

                    <span class="tag" v-for="tech in project.technologies" :key="tech">{{ tech }}</span> 

                </div>

                <!-- Liens -->
                <div class="flex gap-4 pt-2">

                    <span v-for="link in project.links" :key="link">
                        <a :href="link.url" class="project-link" target="_blank" >
                            {{ link.label }}
                        </a>
                    </span> 

                </div>

            </div>

        </div> 

    </div>

</div>

</section>

</template>

<script setup>
import { ref } from 'vue';
import { projects } from '../data/projects';



</script>

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