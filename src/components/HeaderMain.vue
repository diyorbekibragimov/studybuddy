<script type="module">

export default {
    data() {
        return {
            firstName: "",
            searchText: "",
            interests: [],
            categorySelected: [],
        }
    },
    methods: {
        getName() {
            fetch("https://buddy4study.herokuapp.com/user/get-info", {
                headers: {
                    "token": localStorage.getItem("user-token"),
                }
            })
            .then(response => response.json())
            .then(data => {
                this.firstName = data["firstName"];
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
        }
    },
    mounted: function () {
        this.getName();
        this.getInterests();
    }
}
</script>

<template>
	<nav class="navbar navbar-dark navbar-expand-lg bg-dark justify-content-around">
    <a class="navbar-brand" href="/">
            🎒 StudyBuddy
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="/study-group/create">Create study group</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/user/get-info">Hello, {{ firstName }}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/logout">Log out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  .navbar-brand {
    font-size: 36px;
  }
  .navbar-brand:hover {
    color: var(--bs-main-color);
  }
  .navbar-collapse {
    flex-grow: 0;
  }
  .signup-btn {
    background: var(--bs-main-color);
  }
  .signup-btn:hover {
    background: var(--bs-main-color-darken);
  }
  .signup-btn a {
    color: var(--bs-white);
    text-decoration: none;
  }
  .nav-item {
    margin-right: 15px;
  }
   .search-btn:hover {
    background: var(--bs-main-color-darken);
  }
</style>
