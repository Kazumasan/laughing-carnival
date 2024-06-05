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
        if (searchText != "") {
            results.forEach((result) => {
                reduced.push(result.item);
            });
        } else {
            data.app.animes.forEach((result) => {
                reduced.push(result);
            });
        }

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

<body class="bg-gray-900 text-white">
    <nav class="min-h-screen container mx-auto p-4">
        <div class="flex items-center mb-4">
            <input
                type="text"
                class="text-2xl w-80 py-1 pl-3 pr-0 bg-gray-700 rounded-lg"
                placeholder="Search"
                bind:value={searchText}
            />
        </div>

        <table class="w-full border-collapse border border-gray-700 mb-4">
            {#if searchText == ""}
                {#each data.app.animes as animes}
                    <tr class="border border-gray-700">{animes.titel}</tr>
                {/each}
            {:else}
                {#each results as result}
                    <tr class="border border-gray-700">{result.item.titel}</tr>
                {/each}
            {/if}
        </table>

        <input
            type="button"
            class="bg-blue-800 text-white py-2 px-4 rounded border border-gray-700"
            on:click={exportToCSV}
            value="Export to CSV"
        />
    </nav>
</body>
