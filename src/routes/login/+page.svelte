<script lang="ts">
    export let data;
    import {Auth} from '@supabase/auth-ui-svelte';
    import {ThemeSupa} from '@supabase/auth-ui-shared'
    import { json } from '@sveltejs/kit';
    let {supabase, session} = data;
    $: ({supabase, session} = data);

    $: console.log(supabase);
    $: console.log(session);
</script>

<style>


</style>
<!-- supabase auth ui -->
<Auth supabaseClient={supabase} theme="dark" appearance={{
    theme: ThemeSupa, 
    style: {
        input: "width: 400px"
    }
}}/> 

{JSON.stringify(data.supabase)}
<br>
<br>

{JSON.stringify(data.session)}