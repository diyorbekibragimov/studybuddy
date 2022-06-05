<script setup>
import Header from "@/components/HeaderMain.vue";
import LeftSide from "@/components/UserGroups.vue";
import RightSide from "@/components/RecommendedGroups.vue";
</script>

<template>
<header>
    <Header />
</header>
<main>
    <div class="container">
        <div class="row">
            <div class="col-6 col-lg-6 left">
                <LeftSide />
            </div>
            <div class="col-6 col-lg-6 right">
                <RightSide />
            </div>
        </div>
    </div>
</main>
</template>

<style scoped>
.container {
    height: 100vh;
    padding: 50px;
}
.container .row {
    height: 100%;
}
</style>