<script>

    import {page} from "$app/stores";

    $: username = $page.params.username
</script>

<h1>Hello {username}!</h1>


