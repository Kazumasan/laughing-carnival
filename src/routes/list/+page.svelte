<script>
    export let data;

    console.log(data)
    $: (data)
</script>


<body class="bg-gray-900 text-white">
    <div class="min-h-screen container mx-auto p-4">
        <div class="mb-4 p-4 bg-gray-800 rounded">
            <textarea class="w-full h-24 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Feld mit Text drin" readonly>Feld mit Text drin :D</textarea>
        </div>
        <div class="space-y-2">
            <!-- Repeat this div for each entry -->
            
            {#each data.app.animes as anime }
            <div class="flex space-x-2 border border-gray-700 p-2">
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">{anime.studio.name}</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <button class="px-4 py-2 bg-green-700 text-white rounded border border-gray-700">Add+</button>
            </div>
            {/each}
        </div>
    </div>
</body>
