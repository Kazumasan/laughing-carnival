<script lang="ts">
    import {addToWatchlist} from "$lib/db_fetch.ts"
    export let data;
    // import { addToWatchlist } from "$lib/db_fetch.ts";
    console.log(data);
    $: data;

    const checkWatchlist = (id: String) => {
        if (data) {
            for (let i = 0; i < data.app.userData.watchlist.length; i++) {
                if (id == data.app.userData.watchlist[i].anime.id) {
                    console.log("ID found");
                    return true;
                }
            }
        }
        return false;
    };
</script>

<body class="bg-gray-900 text-white">
    <div class="min-h-screen container mx-auto p-4">
        <div class="mb-4 p-4 bg-gray-800 rounded">
            <textarea
                class="w-full h-24 p-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Feld mit Text drin"
                readonly
                >Willkommen auf MyAnimeList! Erstelle noch heute deine eigene
                Watchlist damit du keine deiner Anime verpasst. :D</textarea
            >
        </div>
        <div class="space-y-2">
            <!-- Repeat this div for each entry -->

            {#if data.app}
                {#each data.app.animes as anime}
                    <div class="flex space-x-2 border border-gray-700 p-2">
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            {anime.titel}
                        </div>
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            Episoden: {anime.episodes}
                        </div>
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            Erscheinungsjahr: {anime.studio.founding_year}
                        </div>
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            Studio: {anime.studio.name}
                        </div>
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            Studio Location:{anime.studio.location}
                        </div>
                        <button
                            on:click={addToWatchlist(
                                data.supabase,
                                anime.id,
                                data.session.user.id,
                            )}
                            class="px-4 py-2 bg-emerald-400 hover:bg-emerald-500 text-white rounded border border-gray-700"
                            >Add+</button
                        >
                    </div>
                {/each}
            {:else}
                <div>Failed to Fetch</div>
            {/if}
        </div>
    </div>
</body>
