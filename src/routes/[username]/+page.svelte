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
