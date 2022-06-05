<script type="module">
export default {
    data() {
        return {
            name: "",
            description: "",
            requirements: "",
            category: "",
            contacts: "",
            interests: [],
        }
    },
    methods: {
        getAll() {
            fetch("https://buddy4study.herokuapp.com/interest/get-all", {
                method: "GET"
            })
            .then(response => response.json())
            .then(data => {
                for(let i=0; i<data.length; i++) {
                    this.interests.push(data[i]);
                }
            })
        },
        createGroup(e) {
            e.preventDefault();
            fetch("https://buddy4study.herokuapp.com/user/create-study-group", {
                method: "POST",
                headers: {
                    'token': localStorage.getItem("user-token"),
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    "name": this.name,
                    "description": this.description,
                    "requirement": this.requirements,
                    "contacts": this.contacts,
                    "interestId": this.category
                })
            })
            .then(response => response.json())
            .then(data => {
                let group_id = data["id"];
                this.$router.push( { name: "group_info", params: { id: group_id } } );
            })
            .catch(error => {
                console.log(error);
            })
        }
    },
    mounted: function() {
        this.getAll();
    }
}
</script>

<template>
<div class="container">
    <h1>Create your study group!</h1>
    <div class="wrapper">
        <form v-on:submit="createGroup">
            <div class="form-group">
                <label for="name">Name of your study group *</label>
                <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Programming" v-model="name" required minlength="3">
            </div>
            <div class="form-group">
                <label for="description">Description *</label>
                <textarea class="form-control" id="description" placeholder="Do you want to learn Python, Java, or Javascript? If yes, join us!" v-model="description" required minlength="3"></textarea>
            </div>
            <div class="form-group">
                <label for="requirements">Requirements</label>
                <textarea class="form-control" id="requirements" placeholder="No requirements" v-model="requirements"></textarea>
            </div>
            <div class="form-group">
                <label for="interest">Category *</label>
                <select class="form-control" id="interest" v-model="category" required>
                    <option v-for="category in interests" :key="category.id" :value="category.id">
                        {{ category.name }}
                    </option>
                </select>
            </div>
            <div class="form-group">
                <label for="contacts">Contacts *</label>
                <textarea class="form-control" id="contacts" placeholder="TG: t.me/mooradabduhalikov" v-model="contacts" required minlength="3"></textarea>
                <small id="contacts" class="form-text text-muted">Share your contacts. For example: t.me/ibragimov_diyor</small>
            </div>
            <button type="submit" class="btn btn-primary create">Create</button>
        </form>
    </div>
</div>
</template>

<style scoped>
div.form-group {
    margin-top: 20px;
}
div.form-group label {
    margin-bottom: 10px;
}
button.create {
    margin-top: 20px;
    background-color: var(--bs-main-color);
}

</style>