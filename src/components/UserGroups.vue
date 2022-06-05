<script type="module">
export default {
    data() {
        return {
            groups: [],
        }
    },
    methods: {
        fetchAllGroups() {
            fetch("https://buddy4study.herokuapp.com/user/get-joined-study-groups", {
                headers: {
                    'token': localStorage.getItem("user-token"),
                },
            })
            .then(response => response.json())
            .then(data => {
                for(let i=0; i<data.length; i++) {
                    this.groups.push({
                        "id": data[i]['id'], 
                        "name": data[i]['name'], 
                        "description": data[i]['description'], 
                        "requirement": data[i]['requirement'], 
                        "interest": data[i]['interest'], 
                        "contacts": data[i]['contacts']
                });
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        select(e) {
			let element = e.currentTarget;
			let el_id = element.getAttribute("data-id");
            this.$router.push( { name: "group_info", params: { id: el_id } } );
		},
    },
    mounted: function () {
        this.fetchAllGroups();
    }
}
</script>

<template>
<div class="container">
    <div class="title">
        <h1>Your Study Groups</h1>
    </div>
    <div class="card mb-3" v-for="item in groups" :key="item[0]" v-on:click="select" :data-id="item.id">
        <div class="card-body">
            <div class="title">
                <h1>{{ item.name }}</h1>
            </div>
            <hr />
            <div class="description">
                <span class="text" style="color: white; font-weight: bold; text-decoration: underline;">Description</span>
                <p>{{ item.description }}</p>
            </div>
            <div class="requirement">
                <span class="text" style="color: white; font-weight: bold; text-decoration: underline;">Requirements</span>
                <p>{{ item.requirement }}</p>
            </div>
            <div class="contacts">
                <span class="text" style="color: white; font-weight: bold; text-decoration: underline;">How to contact</span>
                <p>{{ item.contacts }}</p>
            </div>
            <div class="buttons">
                <a class="btn" :href="'/study-group/'+item.id" style="background: var(--bs-dark); color: white">More</a>
            </div> 
        </div>
    </div>
</div>
</template>

<style scoped>
.card {
    background: rgb(83, 90, 168);;
    color: white;
    transition: 300ms;
    cursor: pointer;
}
.card:hover {
    background: rgb(64, 69, 129);
}
</style>