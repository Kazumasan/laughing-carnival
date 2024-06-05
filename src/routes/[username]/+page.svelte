<script>
    import { goto, invalidateAll } from "$app/navigation";
    import {page} from "$app/stores";
    import Anime from "../../modules/Anime.svelte"

    
    export let data;
    console.log(data);
    let {supabase, session} = data;
    $: ({supabase, session} = data);


    $: if(session == null){
        goto("/login");
    }

    //session is valid
    // go get data from supabase with session ID Xyz

    $: username = $page.params.username

    const Logout = () => {
        supabase.auth.signOut().then(()=> invalidateAll(), console.error);
    }
</script>

<main>
    {#each data.app.userData.watchlist as anime }
        <!-- <Anime bind:Anime={anime} /> -->
    {/each}
</main>

<body class="bg-gray-900 text-white min-h-screen p-4">
    <div class="container mx-auto">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg">Meine Watchlist:</h2>
            <div class="space-x-2">
                <button class="bg-emerald-400 hover:bg-emerald-500 text-white px-3 py-2 rounded">Hinzufügen+</button>
                <button class="bg-blue-700 hover:bg-blue-800 text-white px-3 py-2 rounded">Download ⬇️</button>
            </div>
        </div>
        <div class="space-y-2">
            <!-- Repeat this block for each row of entries -->
            <div class="flex space-x-2 border border-gray-700 p-2">
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <button class="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded">-</button>
            </div>
            <!-- Add more rows as needed -->
            <div class="flex space-x-2 border border-gray-700 p-2">
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <div class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center">Eintrag</div>
                <button class="bg-red-500 hover:bg-red-700 text-white px-3 py-2 rounded">-</button>
            </div>
            <!-- Continue adding rows as needed -->
        </div>
    </div>
</body>