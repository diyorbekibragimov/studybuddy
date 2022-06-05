<script type="module">
export default {
    data() {
        return {
            name: "",
            creator_name: "",
            description: "",
            requirement: "",
            contacts: "",
            category: "",
            category_id: "",
            members_count: "",
            members: [],
            count: 0,
            interests: [],
            is_creator: false,
        }
    },
    methods: {
        fetchGroup() {
            fetch(`https://buddy4study.herokuapp.com/study-group/get-info/${this.$route.params.id}`, {
                header: {
                    'token': localStorage.getItem("user-token"),
                }
            })
            .then(response => response.json())
            .then(data => {
                this.name = data['name'];
                this.creator_name = data['creator']['firstName'] + " " + data['creator']['lastName'];
                this.description = data['description'];
                this.requirement = data['requirement'];
                this.contacts = data['contacts'];
                this.category = data['interest']['name'];
                this.category_id = data['interest']['id'];
                this.members_count = data['count'];
                for(let i=0; i<data['members'].length; i++) {
                    this.members.push(data['members'][i]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
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
        editGroup(e) {
            e.preventDefault();
            fetch(`https:/buddy4study.herokuapp.com/study-group/edit/${this.$route.params.id}`, {
                method: "PUT",
                headers: {
                    'token': localStorage.getItem("user-token"),
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    "name": this.name,
                    "description": this.description,
                    "requirement": this.requirement,
                    "interestId": this.category_id,
                    "contacts": this.contacts
                })
            })
            .then(response => response.text())
            .then(data => {
                this.$router.go(this.$router.currentRoute)
            })
            .catch((error) => {
                console.log(error);
            })
        },
        isCreator() {
            fetch(`https:/buddy4study.herokuapp.com/user/is-creator/${this.$route.params.id}`, {
                headers: {
                    "token": localStorage.getItem("user-token")
                },
            })
            .then(data => data.text())
            .then(data => {
                console.log(data);
            })
        }
    },
    mounted: function () {
        this.fetchGroup();
        this.getAll();
        this.isCreator();
    }
}
</script>

<template>
<div class="container ">
    <div class="title">
        <span class="text-muted">Group Name</span>
        <h1>{{ name }}</h1>
    </div>
    <div class="creator">
        <span class="text-muted">Creator Name</span>
        <p>{{ creator_name }}</p>
    </div>
    <div class="description">
        <span class="text-muted">Description</span>
        <p>{{ description }}</p>
    </div>
    <div class="requirement">
        <span class="text-muted">Requirement</span>
        <p>{{ requirement }}</p>
    </div>
    <div class="contacts">
        <span class="text-muted">Contacts</span>
        <p>{{ contacts }}</p>
    </div>
    <div class="category">
        <span class="text-muted">Category</span>
        <p>{{ category }}</p>
    </div>
    <div class="members">
        <span class="text-muted">Members</span>
        <table class="table table-light table-striped table-hover mt-2">
            <thead class="thead-dark">
                <tr>
                <th scope="col">Number</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <td colspan="3">Total count: {{ members_count }}</td>
                </tr>
            </tfoot>
            <tbody>
                <tr v-for="(member, index) in members" :key="member.id">
                    <th scope="row">{{ ++index }}</th>
                    <td>{{ member.firstName }}</td>
                    <td>{{ member.lastName }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <!-- <div class="edit-data">
        <button class="btn edit-button"  data-bs-toggle="modal" data-bs-target="#editModal">Edit Group</button>
       <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalTitle" aria-hidden="true" style="color: var(--bs-dark)">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Change Group Info</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-on:submit="ediGroup">
                        <div class="form-group">
                            <label for="name1">Name of your study group</label>
                            <input type="text" class="form-control" id="name1" aria-describedby="nameHelp" :placeholder="name" v-model="name" required minlength="3">
                        </div>
                        <div class="form-group">
                            <label for="description1">Description</label>
                            <textarea class="form-control" id="description1" :placeholder="description" required minlength="3" v-model="description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="requirement1">Requirements</label>
                            <textarea class="form-control" id="requirement" :placeholder="requirement" v-model="requirement"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="interest1">Category</label>
                            <select class="form-control" id="interest" v-model="category_id" required>
                                <option v-for="item in interests" :key="item.id" :value="item.id">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="contacts1">Contacts</label>
                            <textarea class="form-control" id="contacts1" :placeholder="contacts" v-model="contacts" required minlength="3"></textarea>
                            <small id="contacts" class="form-text text-muted">Share your contacts. For example: t.me/ibragimov_diyor</small>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary edit" v-on:click="editGroup">Edit</button>
                            <button type="button" class="btn btn-secondary ms-3" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>

    </div> -->
</div>
</template>

<style scoped>
button.edit {
    background: var(--bs-main-color);
}
button.edit:hover {
    background: var(--bs-main-color-darken);
}
.form-group {
    margin-top: 20px;
}
table td, th {
    border: 1px solid var(--bs-dark);
}
.edit-button {
    background: var(--bs-main-color);
    color: #fff;
}
.edit-button:hover {
    background: var(--bs-main-color-darken);
}
</style>