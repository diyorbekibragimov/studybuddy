<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script> -->

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
          <a class="nav-link" href="/how-it-works">How it works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <button class="btn signup-btn nav-link">
            <a href="/register">Sign up</a>
          </button>
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
</style>
