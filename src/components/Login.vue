<template>
	<section class="vh-100">
	  	<div class="container h-100">
	    	<div class="row d-flex justify-content-center align-items-center h-100">
	      		<div class="col-lg-12 col-xl-11">
	        		<div class="card" style="border-radius: 25px;background: #1e1e1e; color: #fff;">
	          			<div class="card-body p-md-5">
	            			<div class="row justify-content-center align-items-center">
	              				<div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

	                				<p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log In</p>
	                				<form action="#" method="POST" class="mx-1 mx-md-4">

	                  					<div class="d-flex flex-row align-items-center mb-4">
						                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
						                    <div class="form-outline flex-fill mb-0">
							                    <input type="email" id="email" name="email" class="form-control" />
							                    <label class="form-label" for="email">Email</label>
						                    </div>
						                </div>

						                <div class="d-flex flex-row align-items-center mb-4">
						                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
						                    <div class="form-outline flex-fill mb-0">
							                    <input type="password" id="password" name="password" class="form-control" />
							                    <label class="form-label" for="password">Password</label>
						                    </div>
						                </div>

						                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
						                    <button type="submit" class="btn login-btn btn-lg">Login</button>
						                </div>

                					</form>

	              				</div>
					            <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
					                <img src="../assets/login.png" class="img-fluid" alt="Illustration" />
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
	.login-btn {
    	background: var(--bs-main-color);
    	color: var(--bs-white);
  	}
  	.login-btn:hover {
    	background: var(--bs-main-color-darken);
  	}
</style>