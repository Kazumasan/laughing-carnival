<script lang="ts">
    export let data;
    import {Auth} from '@supabase/auth-ui-svelte';
    import {ThemeSupa} from '@supabase/auth-ui-shared'
    import { json } from '@sveltejs/kit';
    import { invalidateAll } from '$app/navigation';
    import Layout from '../+layout.svelte';
    let {supabase, session} = data;
    $: ({supabase, session} = data);

   let myFunc : int;
   myFunc = "5"

    $: console.log(supabase);
    $: console.log(session);
</script>

<style>


</style>
<!-- supabase auth ui -->




<input type="button" on:click={() => {myFunc++}} value="myFunc++" />
<p>{myFunc}</p>

{#if  data.session != null}
	<h1>Hey you Are Loged in {data.session}</h1>
    <input type="button" on:click={() => {data.session = null}} value="Logout" />
{/if}

{#if data.session == null}
    <Auth supabaseClient={supabase} theme="dark" appearance={{
        theme: ThemeSupa, 
        style: {
            input: "width: 400px"
        }
    }}/> 
{/if}



{JSON.stringify(data.supabase)}
<br>
<br>

{JSON.stringify(data.session)}