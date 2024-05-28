
<body class="bg-gray-900 text-white">
  <header class="flex justify-between items-center py-4 px-6 bg-gray-800">
      <h1 class="text-xl">MyAnimeList</h1>
      <div class="flex space-x-4">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
          <div class="relative">
              <input type="text" placeholder="Suche" class="py-2 pl-3 pr-8 bg-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">
              <button class="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.95 4.95a1 1 0 01-1.414 1.414l-4.95-4.95zm-1.4-5.32a6 6 0 1112 0 6 6 0 01-12 0z" clip-rule="evenodd"></path>
                  </svg>
              </button>
          </div>
      </div>
  </header>
  <main class="p-6">
      <div class="mb-4 p-4 bg-gray-800 rounded">
          <textarea class="w-full h-24 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Text Feld (Optional)"></textarea>
      </div>
      <div class="space-y-2">
          <!-- Repeat this div for each entry -->
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
          <div class="p-2 bg-gray-800 rounded">Eintrag</div>
      </div>
  </main>
</body>