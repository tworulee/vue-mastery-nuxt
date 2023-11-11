<template>
    <h1>Login</h1>
    <button @click="authenticate">Login</button>
    <button @click="logout">Logout</button>
</template>

<script setup>
const auth = useCookie("pokemon-auth")
function authenticate(){
    auth.value="1fh3d"
}
function logout(){
    auth.value=""
}
</script>