<script type="module">
	export default {
		data() {
			return {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
				repeat_password: "",
				errors: "",
			}
		},
		methods: {
			addUser(e) {
				e.preventDefault();
				if (this.repeat_password == this.password) {
					fetch("https://buddy4study.herokuapp.com/user/register", {
							method: "POST",
							headers: {
								'Accept': '*/*',
								'Content-Type': "application/json",
								'Access-Control-Allow-Origin': '*',
							},
							body: JSON.stringify({
								"firstName": this.firstName,
								"lastName": this.lastName,
								"email": this.email,
								"password": this.password,
							})
						})
						.then(response => response.text())
						.then(data => {
							if(data.includes("StudyBuddy"))  {
								localStorage.setItem("user-token", data);
								this.$router.push({ name: "interests" })
							} else {
								this.errors = "Fill all fields";
							}
						})
						.catch((error) => {
							console.error("Error: ", error);
						});
				}
			}
		}
	}
</script>

<template>
	<section class="vh-100" style="background: var(--bs-main-color);">
	  	<div class="container h-100">
	    	<div class="row d-flex justify-content-center align-items-center h-100">
	      		<div class="col-lg-11 col-xl-11">
	        		<div class="card" style="border-radius: 25px; background: rgba(var(--bs-dark-rgb))!important; color: #fff;">
	          			<div class="card-body p-md-5">
	            			<div class="row justify-content-center">
	              				<div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

	                				<p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
									<div class="errors" v-if="errors">
										{{ errors }}
									</div>
	                				<form v-on:submit="addUser" method="POST" class="mx-1 mx-md-4">

	                  					<div class="d-flex flex-row align-items-center mb-4">
	                    					<i class="fas fa-user fa-lg me-3 fa-fw"></i>
						                    <div class="form-outline flex-fill mb-0">
							                    <input type="text" id="first_name" v-model="firstName" class="form-control" minlength="2" required />
							                    <label class="form-label" for="first_name">First Name</label>
						                    </div>
	                  					</div>

	                  					<div class="d-flex flex-row align-items-center mb-4">
	                    					<i class="fas fa-user fa-lg me-3 fa-fw"></i>
						                    <div class="form-outline flex-fill mb-0">
							                    <input type="text" id="last_name" v-model="lastName" class="form-control" minlength="2" required />
							                    <label class="form-label" for="last_name">Last Name</label>
						                    </div>
	                  					</div>

	                  					<div class="d-flex flex-row align-items-center mb-4">
						                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
						                    <div class="form-outline flex-fill mb-0">
							                    <input type="email" id="email" v-model="email" class="form-control" required />
							                    <label class="form-label" for="email">Your Email</label>
						                    </div>
						                </div>

						                <div class="d-flex flex-row align-items-center mb-4">
						                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
						                    <div class="form-outline flex-fill mb-0">
							                    <input type="password" id="password" v-model="password" class="form-control" minlength="8" required />
							                    <label class="form-label" for="password">Password (Minimum: 8 characters)</label>
						                    </div>
						                </div>

						                <div class="d-flex flex-row align-items-center mb-4">
						                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
						                    <div class="form-outline flex-fill mb-0">
							                    <input type="password" id="password_repeat" v-model="repeat_password" class="form-control" required  />
							                    <label class="form-label" for="password_repeat">Repeat your password</label>
						                    </div>
						                </div>

						                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
						                    <button type="submit" class="btn signup-btn btn-lg">
												<span class="text-register">Register</span>
											</button>
						                </div>

                					</form>

	              				</div>
					            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
					                <img src="../assets/register.png" class="img-fluid" alt="Illustration" />
					            </div>
	            			</div>
	          			</div>
	        		</div>
	      		</div>
	    	</div>
	  	</div>
	</section>
</template>

<style scoped>
	.signup-btn {
    	background: var(--bs-main-color);
    	color: var(--bs-white);
  	}
  	.signup-btn:hover {
    	background: var(--bs-main-color-darken);
  	}
</style>