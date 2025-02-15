<script lang="ts" setup>
import { Comic } from 'types';

const comics = ref<Comic[]>([]);
const query = ref<string>('');
const isFetching = ref<boolean>(true);

const route = useRoute();

const getSearchComics = async () => {
  try {
    isFetching.value = true;
    const data = await useFetchData(`/search?q=${query.value}`);
    comics.value = data.comics;
  } catch (err) {
    console.log(err);
  } finally {
    isFetching.value = false;
  }
};

query.value = route.query.q as string;
await getSearchComics();

watch(route, async (route) => {
  query.value = route.query.q as string;
  await getSearchComics();
});

</script>

<template>
  <Head>
    <Title>{{ `${query ? `${query} | NextZ Comics` : 'NextZ Comics'}` }}</Title>
    <Meta name="description" content="Free comic and manga reader online" />
  </Head>
  <main class="max-w-6xl mx-auto min-h-screen py-6 px-3">
    <div
      class="flex items-center flex-wrap gap-1 text-gray-500 font-bold text-lg"
    >
      <NuxtLink to="/">Home</NuxtLink>
      <Icon name="icon-park:right" size="16" />
      <span>Search result</span>
      <Icon name="icon-park:right" size="16" />
      <span class="text-black">{{ query }}</span>
    </div>
    <h4
      class="text-2xl text-center mt-8 font-bold text-gray-600"
      v-show="!isFetching && !comics.length"
    >
      No result
    </h4>
    <ul class="grid grid-cols-1 md:grid-cols-2 gap-6 py-5">
      <template v-if="isFetching">
        <li
          v-for="(_, idx) in new Array(8)"
          :key="idx"
          class="bg-gray-200 animate-pulse rounded-lg w-full h-44"
        ></li>
      </template>
      <template v-else>
        <NuxtLink
          :to="`/comic/${comic.id}`"
          v-for="comic in comics"
          :key="comic.id"
          class="flex flex-col sm:flex-row gap-4 rounded-lg border border-gray-100 bg-gray-50 p-4"
        >
          <img
            :src="comic.thumbnail"
            :alt="comic.title"
            class="rounded aspect-[2/3] w-44 mx-auto sm:w-auto sm:h-36 border border-cyan-400 object-cover"
          />
          <div class="text-gray-500 font-bold w-full">
            <h3 class="text-lg text-black leading-5">
              {{ comic.title }}
              <span class="text-sm text-gray-500">
                ({{ comic.last_chapter.name }})
              </span>
            </h3>
            <p class="flex items-center gap-1 text-cyan-400">
              <template v-if="Array.isArray(comic.authors)">
                {{ comic.authors.join(' | ') }}
              </template>
              <template v-else-if="comic.authors === 'Updating'">
                <Icon name="mdi:dots-circle" size="16" />
                Updating
              </template>
              <template v-else>
                {{ comic.authors }}
              </template>
            </p>
            <p class="text-sm line-clamp-2 font-semibold">
              {{ comic.short_description }}
            </p>
            <ul class="text-sm flex items-center flex-wrap gap-2 mt-1">
              <li
                v-for="genre in comic.genres"
                :key="genre.id"
                class="bg-cyan-100 text-cyan-800 text-xs px-2.5 py-0.5 rounded-full"
              >
                {{ genre.name }}
              </li>
            </ul>
          </div>
        </NuxtLink>
      </template>
    </ul>
  </main>
</template>
