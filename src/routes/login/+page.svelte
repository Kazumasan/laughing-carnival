<script lang="ts">
    export let data;
    import {Auth} from '@supabase/auth-ui-svelte';
    import {ThemeSupa} from '@supabase/auth-ui-shared'
    import { goto, invalidateAll } from '$app/navigation';
    let {supabase, session} = data;
    $: ({supabase, session} = data);

   $: if(session == null) {
    console.error("No Session")
    goto("/login")
   }else{
    console.log("Session now - Redirect")
    goto(`/${session.user.email}`)
   }
   let test = "test from /login"


</script>

<!-- supabase auth ui -->

<Auth supabaseClient={supabase} theme="dark" appearance={{
    theme: ThemeSupa, 
    style: {
        input: "width: 400px"
    }
}}/> 