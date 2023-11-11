<template>
    <h1>Home Page for Nuxt 3 server Course</h1>
    <ul>
        <li>
            <img :src="scizor.sprite">
        </li>
        <li>
           {{ scizor.id }} : {{ scizor.name }} 
        </li>
    </ul>
</template>

<script setup>
const {data:scizor} = await useFetch("/api/bulbasaur")

</script>

<style>

</style>