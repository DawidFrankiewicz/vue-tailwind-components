<template>
	<div
		class="grid relative gap-2 bg-slate-200 w-full min-h-[200px] rounded-md shadow-lg shadow-slate-900 p-6 pr-4 text-slate-800"
	>
		<div v-if="activeTask !== null">
			<div class="flex items-center">
				<h3
					class="inline text-2xl pr-4 border-r-2 border-slate-400 font-black bg-gradient-to-r gradient from-blue-600 to-purple-700 bg-clip-text text-transparent"
				>
					{{ tasks[activeTask].title }}
				</h3>
				<p class="inline text-slate-400 ml-4 font-bold uppercase">
					{{ weekDays[tasks[activeTask].weekDayId].name }}
				</p>
			</div>
			<p class="text-gray-500">
				{{ tasks[activeTask].description }}
			</p>
		</div>
		<div v-else>
			<h3 class="text-2xl font-bold text-gray-500">
				Wybierz zadanie aby zobaczyć szczegóły
			</h3>
			<font-awesome-icon
				icon="fa-solid fa-calendar-day"
				size="5x"
				beat-fade
				class="my-5 mx-2 text-cyan-800 [animation-duration:2s]"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TaskDisplay',
	computed: {
		activeTask() {
			return this.$store.state.activeTask;
		},
		weekDays() {
			return this.$store.state.weekDays;
		},
		tasks() {
			return this.$store.state.tasks;
		}
	}
};
</script>
