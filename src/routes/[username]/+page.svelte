<script>
    import { goto } from "$app/navigation";


    import {page} from "$app/stores";
    export let data;
    let {supabase, session} = data;
    $: ({supabase, session} = data);


    if(session == null){
        goto("/login");
    }

    //session is valid
    // go get data from supabase with session ID Xyz

    $: username = $page.params.username
</script>

<h1>Hello {username}!</h1>
//