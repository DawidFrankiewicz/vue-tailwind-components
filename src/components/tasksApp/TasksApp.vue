<template>
	<div class="grid p-6">
		<div
			class="grid relative gap-2 bg-slate-200 w-full min-h-[200px] rounded-md shadow-lg shadow-slate-900 p-2 pl-6 text-slate-800"
		>
			<div
				v-for="weekDay in weekDaysFromToday"
				:key="weekDay"
				:class="{ hidden: !showFullWeek }"
				class="first:flex flex-col bg-white bg-opacity-30 rounded-lg cursor-pointer hover:bg-opacity-70 transition-colors"
			>
				<div class="p-2">
					<h3
						class="inline text-2xl font-black bg-gradient-to-r gradient from-blue-600 to-purple-700 bg-clip-text text-transparent"
					>
						{{ weekDay }}
					</h3>
				</div>
				<div>
					<div
						class="border-t-2 p-2 py-1 border-emerald-900 border-opacity-30 first:border-0 hover:bg-emerald-100 transition-colors"
					>
						<h4 class="text-sm text-gray-500">
							Zadanie na dziś...
						</h4>
					</div>
					<div
						class="border-t-2 p-2 py-1 border-emerald-900 border-opacity-30 first:border-0 hover:bg-emerald-100 transition-colors"
					>
						<h4 class="text-sm text-gray-500">
							Zadanie na dziś...
						</h4>
					</div>
					<div
						class="border-t-2 p-2 py-1 border-emerald-900 border-opacity-30 first:border-0 hover:bg-emerald-100 transition-colors"
					>
						<h4 class="text-sm text-gray-500">
							Zadanie na dziś...
						</h4>
					</div>
				</div>
			</div>
			<div
				@click="showFullWeek = !showFullWeek"
				:class="{ '': showFullWeek }"
				class="absolute px-1 py-4 h-max bg-sky-600 flex justify-center items-center [writing-mode:vertical-rl] rotate-180 text-white rounded-full shadow-md shadow-sky-900 -left-4 top-10 cursor-pointer hover:bg-sky-700 transition-all select-none"
			>
				Więcej
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
			weekDays: [
				'Niedziela',
				'Poniedziałek',
				'Wtorek',
				'Środa',
				'Czwartek',
				'Piątek',
				'Sobota'
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
			i = startIndex - 1;
			while (i < array.length && i >= 0) {
				sortedArray.push(array[i]);
				i--;
			}
			return sortedArray;
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
