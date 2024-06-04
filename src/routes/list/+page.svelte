<script>
    export let data;

    console.log(data)
    $: (data)
</script>




<body class="bg-gray-900 text-white">
    <div class="container mx-auto p-4">
        <div class="mb-4 p-4 bg-gray-800 rounded">
            <textarea class="w-full h-24 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Feld mit Text drin"></textarea>
        </div>
        <div class="space-y-2">
            <!-- Repeat this div for each entry -->
            
            {#each data.app.animes as anime }
            <div class="p-2 bg-gray-800 rounded border border-gray-700">{anime.studio.name} </div>
            <input class="p-2 bg-gray-800 rounded border border-gray-700" type="text" bind:value={anime.studio.name} />
            {/each}
        </div>
    </div>
</body>
