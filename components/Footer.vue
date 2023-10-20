<template>
  <footer class="bg-white">
    <div class="max-w-7xl px-4 py-12 mx-auto space-y-8 overflow-hidden">
      <div class="flex justify-center mt-8 space-x-6">
        <NuxtLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://www.facebook.com/quangdai1103z"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Facebook</span>
          <Icon name="mdi:facebook" size="28" />
        </NuxtLink>
        <NuxtLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://quangdai.id.vn"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Website quản lý</span>
          <Icon :name="'tabler:world-check'" size="28" />
        </NuxtLink>
        <NuxtLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://nextzintereac.com"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Tăng tương tác - Seeding</span>
          <Icon name="solar:chat-round-like-bold" size="28" />
        </NuxtLink>
        <NuxtLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://nextzcinema.com"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Xem phim miễn phí</span>
          <Icon name="maki:cinema-11" size="28" />
        </NuxtLink>
        <NuxtLink
          target="_blank"
          rel="noopener noreferrer"
          to="https://nextzantiscam.com"
          class="text-gray-400 hover:text-gray-500"
        >
          <span class="sr-only">Anti Scamer</span>
          <Icon name="mdi:account-check" size="28" />
        </NuxtLink>
      </div>
      <p class="mt-8 text-base leading-6 text-center text-gray-400">
        © {{ new Date().getFullYear() }} NComics™. All rights reserved.
      </p>
    </div>
  </footer>
</template>
