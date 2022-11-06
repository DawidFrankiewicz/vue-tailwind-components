<template>
	<div
		class="grid relative gap-2 bg-slate-200 w-full min-h-[200px] rounded-md shadow-lg shadow-slate-900 p-6 pr-4 text-slate-800"
	>
		<div
			v-for="weekDay in weekDaysFromToday"
			:key="weekDay"
			:class="{ hidden: !showFullWeek }"
			class="first:flex flex-col bg-white bg-opacity-30 rounded-lg cursor-pointer hover:bg-opacity-70 transition-colors"
		>
			<div class="p-2">
				<h3
					:class="{
						'from-blue-600 to-purple-700':
							weekDay.id !== 6 && weekDay.id !== 0,
						'from-orange-400 to-red-600': weekDay.id === 0,
						'from-fuchsia-400 to-orange-400': weekDay.id === 6
					}"
					class="inline text-2xl font-black bg-gradient-to-r gradient bg-clip-text text-transparent"
				>
					{{ weekDay.name }}
				</h3>
			</div>
			<div v-if="tasks.length">
				<div
					v-for="task in allTasksForWeekDay(weekDay.id)"
					:key="task.id"
					@click="this.$store.commit('setActiveTask', task.id)"
					class="border-t-2 p-2 py-1 border-emerald-900 border-opacity-30 first:border-0 hover:bg-emerald-100 transition-colors last:mb-3"
					:class="{
						'bg-emerald-200': task.id === activeTask
					}"
				>
					<h4 class="text-sm text-gray-500">
						{{ task.title }}
					</h4>
				</div>
			</div>
			<div v-else>
				<h4 class="text-gray-500 p-2 py-1">Brak zadań na dzis</h4>
			</div>
		</div>
		<div
			class="absolute flex flex-col justify-center items-center -left-3 top-10 gap-3"
		>
			<div
				@click="showFullWeek = !showFullWeek"
				class="px-1 py-4 h-max bg-sky-600 text-white rounded-full shadow-md shadow-sky-900 cursor-pointer hover:bg-sky-700 transition-all select-none"
			>
				<font-awesome-icon
					icon="fa-solid fa-arrow-down large"
					size="lg"
					:class="{ 'rotate-180': showFullWeek }"
					class="transition-transform"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'WeekDisplay',
	data() {
		return {
			showFullWeek: false
		};
	},
	computed: {
		activeTask() {
			return this.$store.state.activeTask;
		},
		weekDays() {
			return this.$store.state.weekDays;
		},
		tasks() {
			return this.$store.state.tasks;
		},
		today() {
			return new Date().getDay();
		},
		weekDaysFromToday() {
			return this.sortArrayToStartFromIndex(this.weekDays, this.today);
		}
	},
	methods: {
		// Get all tasks for specific week day
		allTasksForWeekDay(weekDayId) {
			return this.tasks.filter((task) => task.weekDayId === weekDayId);
		},
		// Sort array to start from specific index - example (arr, 4) [1,2,3,4,5,6,7] -> [5,6,7,1,2,3,4]
		sortArrayToStartFromIndex(array, startIndex) {
			let sortedArray = [];
			let i = startIndex;
			while (i < array.length) {
				sortedArray.push(array[i]);
				i++;
			}
			i = 0;
			while (i < startIndex && i >= 0) {
				sortedArray.push(array[i]);
				i++;
			}
			return sortedArray;
		}
	}
};
</script>
