<script setup>
import HeaderComponent from '@/components/page_components/HeaderComponent.vue'

const recordings = [
  {
    title: 'Getting it right the first time',
    description: 'The video description should be shown here if the user added it',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    views: 25,
    size: '325kb',
    'last_modified': '3 months ago'
  },
  {
    title: 'Getting it right the first time',
    description: 'The video description should be shown here if the user added it',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    views: 324,
    size: '325kb',
    'last_modified': '2 months ago'
  }
]
</script>

<template>
  <div>
    <HeaderComponent class="pb-11" />
    <div class="container mx-auto">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead>
          <tr>
            <th class="py-3.5 pl-4 pr-3 text-sm text-left text-cyan-blue font-poppins font-semibold sm:pl-0 w-[150px]"
                scope="col">
              Recordings
            </th>
            <th class="px-3 py-3.5 text-left text-sm text-cyan-blue font-poppins max-w-[500px] w-[450px]" scope="col">
              Title
            </th>
            <th class="px-3 py-3.5 text-left text-sm text-cyan-blue font-poppins" scope="col">Views</th>
            <th class="px-3 py-3.5 text-left text-sm text-cyan-blue font-poppins" scope="col">Size</th>
            <th class="px-3 py-3.5 text-left text-sm text-cyan-blue font-poppins" scope="col">Last Modified</th>
            <th class="relative py-3.5 pl-3 pr-4 sm:pr-0" scope="col">
              <span class="sr-only">Actions</span>
            </th>
          </tr>
          </thead>
          <tbody class="bg-white font-poppins">
          <tr v-for="person in recordings" :key="person.index">
            <td class="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0">
              <div class="w-[120px] h-[65px] flex-shrink-0">
                <img :src="person.image" alt="" class="w-[120px] h-[65px] rounded-sm" />
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-gray-500">
              <div class="text-cyan-blue">{{ person.title }}</div>
              <div class="mt-1 text-gray-500 whitespace-pre-line overflow-wrap-normal max-w-[300px]">
                {{ person.description }}
              </div>
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-cyan-blue">
              {{ person.views }}
            </td>
            <td class="whitespace-nowrap px-3 py-5 text-sm text-cyan-blue">{{ person.size }}</td>
            <td class="whitespace-nowrap px-3 py-5 text-xs text-cyan-blue">{{ person.last_modified }}</td>
            <td class="relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <a class="text-cyan-blue font-extrabold text-xl" href="#"
              ><i class="bi bi-three-dots"></i><span class="sr-only">, action</span></a
              >
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
