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
    <div>
        <LeftSide />
    </div>
    <div>
        <RightSide />
    </div>
</main>
</template>