<template>
  <div class="container py-5 wrapper">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-md-6 m-auto text-center">
        <h1>Find your buddy for the study!</h1>
        <p class="lead">We provide an easy way to find & create study groups.</p>
        <a class="btn btn-lg signup-btn" href="/register">Get Started</a>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6" >
        <img src="../assets/landing.png" class="img-fluid">
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  color: #fff;
}
.signup-btn {
  background: var(--bs-main-color);
  color: #fff;
}
.signup-btn:hover {
  background: var(--bs-main-color-darken);
  color: #fff;
}
.signup-btn a {
  color: var(--bs-white);
  text-decoration: none;
}
</style>