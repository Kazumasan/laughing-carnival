<script>
    import "../app.css"
    export let data;
    $: ({session} = data);
</script>

<title>MyAnimeList</title>

<body class="text-white bg-emerald-400">
    <header class="p-4">
        <h1 class="container mx-auto text-center text-5xl">MyAnimeList</h1>
    </header>
    <nav class="flex justify-between items-center p-4">  
        <table class="w-full">
            <tr>
                {#if session != null}
                    <td class="pr-20">
                        <a class="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white text-2xl font-sans" href={session.user.email}>{session.user.email}</a></td>
                {:else}
                    <td class="pr-80">
                        <a class="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white text-2xl font-sans" href="/login">Login</a></td>
                {/if}
                <td class="pr-40 text-center">
                    <a class="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white text-2xl font-sans" href="/list">Anime Liste</a></td>

                <td class="pr-20 text-right">
                    <a class="bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded text-white text-2xl font-sans" href="/export">Suche</a></td>
            </tr>
        </table>
    </nav>
</body>

<slot></slot>