<script>
    export let data;

    console.log(data)
    $: (data)
</script>

{#each data.app.animes as anime }
    <div style="background-color: #f0f;">{anime.studio.name}</div>
    <input type="text" bind:value={anime.studio.name} />
{/each}