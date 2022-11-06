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
					@click="$emit('changeActiveTask', task.id)"
					class="border-t-2 p-2 py-1 border-emerald-900 border-opacity-30 first:border-0 hover:bg-emerald-100 transition-colors last:mb-3"
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
	props: {
		weekDaysFromToday: {
			type: Array,
			required: true
		},
		tasks: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			showFullWeek: false
		};
	},
	methods: {
		// Get all tasks for specific week day
		allTasksForWeekDay(weekDayId) {
			return this.tasks.filter((task) => task.weekDayId === weekDayId);
		}
	}
};
</script>
