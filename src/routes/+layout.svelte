<script>
 let username = "Testusername"
</script>


<style>
#Navbar{
    width: 100%;
    height: auto;
    padding: 2rem, 0rem, 2rem, 0rem;
    background-color: #18da93;
    display: flex;
    justify-content: space-around;
}

#Nav_Table > td{
    padding-right: 80px;
}

a{
    color: azure;
    font-size: 22pt;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<!-- Navbar -->
<div id="Navbar">
    <table id="Nav_Table">
        <td><a href="/username">{username}</a></td>
        <td><a href="/login">Login</a></td>
        <td><a href="/list">List</a></td>
    </table>
</div>


<slot></slot>