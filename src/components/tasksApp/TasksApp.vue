<template>
	<div class="grid p-6 gap-8">
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
							'from-orange-400 to-red-600': weekDay.id === 0,
							'from-fuchsia-400 to-orange-400': weekDay.id === 6
						}"
						class="inline text-2xl font-black bg-gradient-to-r gradient from-blue-600 to-purple-700 bg-clip-text text-transparent"
					>
						{{ weekDay.name }}
					</h3>
				</div>
				<div v-if="tasks.length">
					<div
						v-for="task in allTasksForWeekDay(weekDay.id)"
						:key="task.id"
						@click="activeTask = task.id"
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
		<!-- Display task -->
		<div
			class="grid relative gap-2 bg-slate-200 w-full min-h-[200px] rounded-md shadow-lg shadow-slate-900 p-6 pr-4 text-slate-800"
		>
			<div v-if="activeTask !== null">
				<div>
					<h3
						class="inline text-2xl font-black bg-gradient-to-r gradient from-blue-600 to-purple-700 bg-clip-text text-transparent"
					>
						{{ tasks[activeTask].title }}
					</h3>
				</div>
				<p class="text-gray-500">
					{{ tasks[activeTask].description }}
				</p>
			</div>
			<div v-else>
				<h2 class="text-2xl font-bold text-gray-500">
					Wybierz zadanie aby zobaczyć szczegóły
				</h2>
				<font-awesome-icon
					icon="fa-solid fa-calendar-day"
					size="5x [animation-duration:2s]"
					beat-fade
					class="my-5 mx-2 text-cyan-800"
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'TasksApp',
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
		// Get all tasks for specific week day
		allTasksForWeekDay(weekDayId) {
			return this.tasks.filter((task) => task.weekDayId === weekDayId);
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
