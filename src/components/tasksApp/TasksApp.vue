<template>
	<div class="grid p-6 gap-8">
		<WeekDisplay
			:weekDaysFromToday="weekDaysFromToday"
			:tasks="tasks"
			@change-active-task="(taskId) => changeActiveTask(taskId)"
		/>
		<TaskDisplay :tasks="tasks" :activeTask="activeTask" />
	</div>
</template>

<script>
import WeekDisplay from './WeekDisplay.vue';
import TaskDisplay from './TaskDisplay.vue';

export default {
	name: 'TasksApp',
	components: {
		WeekDisplay,
		TaskDisplay
	},
	data() {
		return {
			showFullWeek: false,
			activeTask: null,
			weekDays: [
				{ id: 0, name: 'Niedziela' },
				{ id: 1, name: 'Poniedziałek' },
				{ id: 2, name: 'Wtorek' },
				{ id: 3, name: 'Środa' },
				{ id: 4, name: 'Czwartek' },
				{ id: 5, name: 'Piątek' },
				{ id: 6, name: 'Sobota' }
			],
			// Temporary tasks data
			// TODO MongoDB
			tasks: [
				{
					id: 0,
					weekDayId: 6,
					title: 'Zadanie 1',
					description: 'Opis zadania 1'
				},
				{
					id: 1,
					weekDayId: 6,
					title: 'Zadanie 2',
					description: 'Opis zadania 2'
				},
				{
					id: 2,
					weekDayId: 2,
					title: 'Zadanie 3',
					description: 'Opis zadania 3'
				},
				{
					id: 3,
					weekDayId: 4,
					title: 'Zadanie 4',
					description: 'Opis zadania 4'
				},
				{
					id: 4,
					weekDayId: 1,
					title: 'Zadanie 5',
					description: 'Opis zadania 5'
				},
				{
					id: 5,
					weekDayId: 0,
					title: 'Zadanie 6',
					description: 'Opis zadania 6'
				},
				{
					id: 6,
					weekDayId: 0,
					title: 'Zadanie 7',
					description: 'Opis zadania 7'
				},
				{
					id: 7,
					weekDayId: 2,
					title: 'Zadanie 8',
					description: 'Opis zadania 8'
				},
				{
					id: 8,
					weekDayId: 4,
					title: 'Zadanie 9',
					description: 'Opis zadania 9'
				},
				{
					id: 9,
					weekDayId: 0,
					title: 'Zadanie 10',
					description: 'Opis zadania 10'
				},
				{
					id: 10,
					weekDayId: 5,
					title: 'Zadanie 11',
					description: 'Opis zadania 11'
				},
				{
					id: 11,
					weekDayId: 2,
					title: 'Zadanie 12',
					description: 'Opis zadania 12'
				},
				{
					id: 12,
					weekDayId: 4,
					title: 'Zadanie 13',
					description: 'Opis zadania 13'
				},
				{
					id: 13,
					weekDayId: 1,
					title: 'Zadanie 14',
					description: 'Opis zadania 14'
				},
				{
					id: 14,
					weekDayId: 4,
					title: 'Zadanie 15',
					description: 'Opis zadania 15'
				}
			]
		};
	},
	methods: {
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
		},
		changeActiveTask(taskId) {
			this.activeTask = taskId;
		}
	},
	computed: {
		today() {
			return new Date().getDay();
		},
		weekDaysFromToday() {
			return this.sortArrayToStartFromIndex(this.weekDays, this.today);
		}
	}
};
</script>
