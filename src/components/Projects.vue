<script setup lang="ts">
import { onMounted } from "vue";
import { projectsData } from "@/data";

async function fetchNotionData () {
  const response = await fetch(
      'https://api.notion.com/v1/databases/11c21758e89a801b9b15dbf3b33d7af8/query',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ntn_V89816372749w7jcy49PAx7WekZPxIwDlT3nXicySgrgmW`,
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28',
        },
      }
  );

  if (!response.ok) {
    console.error('Error fetching data:', response.statusText);

    return;
  }

  const data = await response.json();
  console.log(data);  // Проверка данных
}

onMounted(() => {
  fetchNotionData();
});

</script>

<template>
    <section
        id="projects"
        class="scroll-mt-28 mb-28"
    >
        <h2 class="text-3xl font-medium capitalize mb-8 text-center">
            My projects
        </h2>
        <div>
            <div
                v-for="(project, index) in projectsData"
                :key="`project-${index}`"
                class="group mb-3 sm:mb-8 last:mb-0"
            >
                <a
                    class="bg-gray-100 block max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8
                    relative sm:h-[40rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white
                    dark:bg-white/10 dark:hover:bg-white/20"
                    target="_blank"
                    :href="project.url"
                >
                    <div
                        class="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
                    sm:group-even:ml-[18rem]"
                    >
                        <h3 class="text-2xl font-semibold">{{ project.name }}</h3>
                        <p class="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                            {{ project.description }}
                        </p>
                        <ul class="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                            <li
                                v-for="(skill, skillIndex) in project.skills"
                                :key="`project-${skillIndex}`"
                                class="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
                                rounded-full dark:text-white/70"
                            >
                                {{ skill }}
                            </li>
                        </ul>
                    </div>
                    <img
                        alt="Project I worked on"
                        class="sm:absolute sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition
                        group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3
                        group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
                        group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
                        height="850"
                        style="color: transparent"
                        width="715"
                        :src="project.image"
                    >
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
