<template>
	<div class="container">
		<div class="title">
			<h1>Choose Your Interests:</h1>
		</div>
		<div class="wrapper">
			<div class="interest">
				<p>💻 Programming</p>
			</div>
			<div class="interest">
				<p>🎨 Drawing</p>
			</div>
			<div class="interest">
				<p>😎 Mathematics</p>
			</div>
			<div class="interest">
				<p>😏 Physics</p>
			</div>
			<div class="interest">
				<p>⭐️ Astronomy</p>
			</div>
			<div class="interest">
				<p>🌱 Biology</p>
			</div>
			<div class="interest">
				<p>💪 English</p>
			</div>
			<div class="interest">
				<p>🙂 Philosophy</p>
			</div>
			<div class="interest">
				<p>📖 Literature</p>
			</div>
			<div class="interest">
				<p>💼️ Economics</p>
			</div>
			<div class="interest">
				<p>💊 Chemistry</p>
			</div>
			<div class="interest">
				<p>🤴 History</p>
			</div>
			<div class="interest">
				<p>🇺🇿 Uzbek</p>
			</div>
			<div class="interest">
				<p>🇷🇺 Russian</p>
			</div>
		</div>
	</div>
	<div class="next-button">
		<button class="btn btn-lg finish-btn text-white">Finish</button>
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
}
.next-button {
	width: 100%;
	text-align: center;
}
</style>