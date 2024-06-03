<script>
    export let data;

    console.log(data)
    $: (data.animes[0].studio.name)

    
</script>

{#each data.animes as anime }
    <div style="background-color: #f0f;">{anime.studio.name}</div>
    <input type="text" bind:value={anime.studio.name} />
{/each}