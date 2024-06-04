<script lang="ts">
    import { json } from "@sveltejs/kit";
    import Fuse from "fuse.js";
    import * as jsonexport from "jsonexport/dist";

    export let data;
    console.log(data);

    let fuse = new Fuse(data.app.animes, {
        // isCaseSensitive: false,
        // includeScore: false,
        shouldSort: true,
        // includeMatches: true,
        findAllMatches: true,
        minMatchCharLength: 2,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        // useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        keys: ["titel"],
    });
    // export let data;

    let searchText = "";

    $: results = fuse.search(searchText);
    $: console.log(results);

    const exportToCSV = async () => {
        console.log(results);
        let reduced: any = [];
        results.forEach((result) => {
            reduced.push(result.item);
        });

        console.log(reduced);
        console.log(
            jsonexport.default(reduced, (err, csv) => {
                if (err) console.error(err);
                let blob = new Blob([csv], { type: "text/plain" });
                let url = URL.createObjectURL(blob);
                let anchor = document.createElement("a");
                anchor.href = url;
                anchor.download = `Export ${new Date().toLocaleDateString()}.txt`;
                document.body.appendChild(anchor);
                anchor.click();
                document.removeChild(anchor);
            }),
        );
    };
</script>

<div>
    <input
        type="text"
        style="border: 1px solid blue;"
        name="search"
        bind:value={searchText}
    />
    <table>
        {#if searchText == ""}
            {#each data.app.animes as animes}
                <tr>{animes.titel}</tr>
            {/each}
        {:else}
            {#each results as result}
                <tr>{result.item.titel}</tr>
            {/each}
        {/if}
    </table>

    <input type="button" on:click={exportToCSV} value="Export to CSV" />
</div>
