<script type="module">
export default {
    data() {
        return {
            groups: [],
            interests: [],
            user_id: "",
            categorySelected: [],
            searchText: ""
        }
    },
    methods: {
        getId() {
            fetch("https://buddy4study.herokuapp.com/user/get-info", {
                headers: {
                    "token": localStorage.getItem("user-token"),
                }
            })
            .then(response => response.json())
            .then(data => {
                this.user_id = data["id"];
            })
        },
        fetchAllGroups() {
            let arr = Object.values(this.interests);
            fetch("https://buddy4study.herokuapp.com/study-group/feed?page=1&size=10&search=&sort=hottest", {
                method: "POST",
                headers: {
                    'token': localStorage.getItem("user-token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "data": arr
                })
            })
            .then(response => response.json())
            .then(data => {
                let content = data.content
                for(let i=0; i<content.length; i++) {
                    let members = content[i].members;
                    let con = true;
                    if (con) {
                        this.groups.push({
                            "id": content[i].id, 
                            "name": content[i]['name'], 
                            "description": content[i]['description'], 
                            "requirement": content[i]['requirement'], 
                            "interest": content[i]['interest'], 
                            "contacts": content[i]['contacts']
                        });
                    }
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        getInterests() {
          fetch("https://buddy4study.herokuapp.com/user/get-info", {
            headers: {
              "token": localStorage.getItem("user-token"),
            }
          })
          .then(response => response.json())
          .then(data => {
            this.interests = Object.values(data['interests']);
          })
        },
        select(e) {
			let element = e.currentTarget;
			let el_id = element.getAttribute("data-id");
            this.$router.push( { name: "group_info", params: { id: el_id } } );
		},
        joinGroup(e) {
            let element = e.currentTarget;
			let el_id = element.getAttribute("data-id");
            let child0 = element.children[0];
            let child1 = element.children[1];
            child0.classList.add("hidden")
            child1.classList.remove("hidden");
            fetch(`https://buddy4study.herokuapp.com/user/join-study-group/${el_id}`, {
                method: "POST",
                headers: {
                    "token": localStorage.getItem("user-token"),
                    'Content-Type': "application/json",
                }
            })
            .then(response => response.text())
            .then(data => {
                this.$router.go(this.$router.currentRoute);
            })
        },
        searchGroups(e) {
          e.preventDefault();
          let arr = this.categorySelected;
          fetch(`https://buddy4study.herokuapp.com/study-group/feed?page=1&size=10&search=${this.searchText}&sort=hottest`, {
            method: "POST",
            headers: {
              "token": localStorage.getItem("user-token"),
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "data": arr
            })
          })
          .then(response => response.json())
          .then(data => {
            let content = data['content'];
            this.groups = [];
            for(let i=0; i<content.length; i++) {
                this.groups.push({
                    "id": content[i].id, 
                    "name": content[i]['name'], 
                    "description": content[i]['description'], 
                    "requirement": content[i]['requirement'], 
                    "interest": content[i]['interest'], 
                    "contacts": content[i]['contacts']
                });
            }
          })
        }
    },
    mounted: function () {
        this.fetchAllGroups();
        this.getInterests();
    }
}
</script>

<template>
<div class="container">
    <div class="title">
        <h1>Recommended Groups</h1>
    </div>
    <form v-on:submit="searchGroups" class="mb-3">
        <div class="input-group">
        <input type="search" class="form-control rounded search-input" placeholder="Programming" aria-label="Search" aria-describedby="search-addon" v-model="searchText" />
        <button type="submit" class="btn search-btn btn-outline-primary" style="color: #fff; border-color: var(--bs-main-color)">search</button>
        </div>
    </form>
    <div class="card mb-3" v-for="item in groups" :key="item[0]" :data-id="item.id">
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
                <button class="btn ms-3" v-on:click="joinGroup" style="background: var(--bs-green); color: white" :data-id="item.id">
                    <span class="text-join">Join</span>
                    <div class="spinner-border hidden" role="status">
                        <span class="sr-only"></span>
                    </div>
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.hidden {
    display: none;
}
.card {
    background: rgb(83, 90, 168);;
    color: white;
    transition: 300ms;
    cursor:pointer;
}
.card:hover {
    background: rgb(64, 69, 129);
}
</style>