<script type="module">
export default {
    data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            prevPassword: "",
            newPassword: "",
            interests: [],
        }
    },
    methods: {
        fetchUser() {
            fetch("https://buddy4study.herokuapp.com/user/get-info", {
                headers: {
                    "token": localStorage.getItem("user-token")
                }
            })
            .then(response => response.json())
            .then(data => {
                this.firstName = data["firstName"];
                this.lastName = data["lastName"];
                this.email = data["username"];
            })
        },
        editUser(e) {
            e.preventDefault();
            fetch("https://buddy4study.herokuapp.com/user/edit", {
                method: "PUT",
                headers: {
                    "token": localStorage.getItem("user-token"),
                    'Content-Type': "application/json",
                },
                body: JSON.stringify({
                    "firstName": this.firstName,
                    "lastName": this.lastName,
                    "email": this.email,
                    "previousPassword": this.prevPassword,
                    "newPassword": this.newPassword,
                })
            })
            .then(response => response.text())
            .then(data => {
                if (data) {
                    this.$router.go(this.$router.currentRoute)
                }
            })
        }
    },
    mounted: function () {
        this.fetchUser();
    }
}
</script>

<template>
<div class="container">
    <div class="fullName">
        <span class="text-muted">Full Name</span>
        <h1>{{ firstName }} {{ lastName }}</h1>
    </div>
    <div class="email">
        <span class="text-muted">Email</span>
        <h1>{{ email }}</h1>
    </div>
    <div class="edit-data">
        <button class="btn edit-button"  data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
        <!-- Modal -->
       <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalTitle" aria-hidden="true" style="color: var(--bs-dark)">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="editModalLabel">Change Information {{ prevPassword }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form v-on:submit="editUser">
                        <div class="form-group">
                            <label for="firstName">First Name</label>
                            <input type="text" class="form-control" id="firstName" aria-describedby="nameHelp" :placeholder="firstName" v-model="firstName" required minlength="3">
                        </div>
                        <div class="form-group">
                            <label for="lastName">Last Name</label>
                            <input type="text" class="form-control" id="lastName" :placeholder="lastName" required minlength="3" v-model="lastName" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" :placeholder="email" v-model="email" />
                        </div>
                        <div class="form-group">
                            <label for="prevPassword">Previous Password</label>
                            <input type="password" class="form-control" id="prevPassword" :placeholder="prevPassword" v-model="prevPassword" minlength="8" />
                            <small id="newPasswordText" class="form-text text-muted">You can leave this blank, if you do not want to change password.</small>
                        </div>
                        <div class="form-group">
                            <label for="newPassword">New Password</label>
                            <input type="password" class="form-control" id="newPassword" :placeholder="newPassword" v-model="newPassword" minlength="8" />
                            <small id="newPasswordText" class="form-text text-muted">You can leave this blank, if you do not want to change password.</small>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary edit">Edit</button>
                            <button type="button" class="btn btn-secondary ms-3" data-bs-dismiss="modal">Close</button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            </div>

    </div>
</div>
</template>

<style scoped>
button.edit {
    background: var(--bs-main-color);
}
button.edit:hover {
    background: var(--bs-main-color-darken);
}
.edit-button {
    background: var(--bs-main-color);
    color: #fff;
}
.edit-button:hover {
    background: var(--bs-main-color-darken);
}
</style>