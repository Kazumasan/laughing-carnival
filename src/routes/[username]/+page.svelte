<script lang="ts">
    import { goto, invalidateAll } from "$app/navigation";
    import { page } from "$app/stores";

    export let data;
    console.log(data);
    let { supabase, session } = data;
    $: ({ supabase, session } = data);

    $: if (session == null) {
        goto("/login");
    }
    //session is valid
    // go get data from supabase with session ID Xyz

    $: username = $page.params.username;

    const Logout = () => {
        supabase.auth.signOut().then(() => invalidateAll(), console.error);
    };
</script>

<body class="bg-gray-900 text-white min-h-screen p-4">
    <div class="container mx-auto">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg">Meine Watchlist:</h2>
            <div class="space-x-2"></div>
        </div>
        <div class="space-y-2">
            {#if data.app.watchlist}
                {#each data.app.watchlist as entry}
                    {JSON.stringify(entry)}
                {/each}
            {:else}
                <div>
                    No Session go to Login 
                    <button on:click={() => goto("/login")}>Login</button>
                </div>
            {/if}

            <!-- Continue adding rows as needed -->
        </div>
    </div>
</body>


<!-- <div class="flex space-x-2 border border-gray-700 p-2">
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            {entry.anime.titel}
                        </div>
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            Episoden: {entry.anime.episodes}
                        </div>
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            Erscheinungsjahr: {entry.anime.studio.founding_year}
                        </div>
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            Studio: {entry.anime.studio.name}
                        </div>
                        <div
                            class="flex-grow p-2 bg-gray-800 border border-gray-700 text-center"
                        >
                            Studio Location:{entry.anime.studio.location}
                        </div>
                        <button
                            on:click={() => {
                                removeFromWatchlist(
                                    data.supabase,
                                    entry.anime.id,
                                    data.session.user.id,
                                );
                            }}
                            class="px-4 py-2 bg-red-400 hover:bg-red-500 text-white rounded border border-gray-700"
                            >remove -</button
                        >
                    </div> -->