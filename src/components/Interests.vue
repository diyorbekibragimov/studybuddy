<script setup>
import InterestItem from "./InterestItem.vue";
</script>

<script type="module">
export default {
	data() {
		return {
			items: [],
			selectedItems: []
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
					this.items.push(data[i]);
				}
			})
		},
		select(e) {
			let element = e.currentTarget;
			let el_id = element.getAttribute("data-id");
			if (!this.selectedItems.includes(el_id)) {
				element.classList.add("interest-clicked");
				this.selectedItems.push(el_id);
			} else {
				element.classList.remove("interest-clicked");
				let index = this.selectedItems.indexOf(el_id);
				this.selectedItems.splice(index, 1);
			}
		},
		sendInterests() {
			let arr = Object.values(this.selectedItems);
			fetch("https://buddy4study.herokuapp.com/user/add-interest", {
				method: "POST",
				headers: {
					"token": localStorage.getItem("user-token"),
                    'Content-Type': "application/json",
				},
				body: JSON.stringify({
					"data": arr,
				}),
			})
			.then(response => response.json())
			.then(data => {
				this.$router.push({ name: "main" });
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
		<div class="title">
			<h1>Choose Your Interests:</h1>
		</div>
		<div class="wrapper">
			<div class="interest" v-on:click="select" v-for="item in items" :key="item.id" :data-id="item.id">
				<p>{{ item.name }}</p>
			</div>
		</div>
	</div>
	<div class="next-button">
		<button class="btn btn-lg finish-btn text-white" v-on:click="sendInterests">Finish</button>
	</div>
</template>

<style scoped>
.container {
	display: flex;
	flex-direction: column;
	padding: 50px;
}
.finish-btn {
  	background: var(--bs-main-color);
}
.finish-btn:hover {
  	background: var(--bs-main-color-darken);
}
.title {
	width: 100%;
	text-align: center;
	margin: 10px;
}
.wrapper {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
}
.wrapper .interest {
	width: 250px;
	background: var(--bs-main-color);
	border-radius: 7px;
	margin: 5px;
	text-align: center;
	padding: 10px;
	font-size: 20px;
}
.wrapper .interest:hover {
	background-color: var(--bs-main-color-darken);
}
.wrapper .interest p {
	margin: auto;
}
.wrapper .interest-clicked {
	background: var(--bs-main-color-darken);
}
.next-button {
	width: 100%;
	text-align: center;
}
</style>