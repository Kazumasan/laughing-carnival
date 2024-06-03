<script>
    import { goto, invalidateAll } from "$app/navigation";


    import {page} from "$app/stores";
    export let data;
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

<h1 class=" center text-3xl">Hello {username}!</h1>

<button type="button" on:click={Logout}>Logout</button>
