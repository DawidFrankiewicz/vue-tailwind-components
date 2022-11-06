import { createApp } from 'vue';
import { createStore } from 'vuex';
import './style.css';
import App from './App.vue';

// Font Awesome Icons
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faArrowDown, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faArrowDown, faCalendarDay);
// Font Awesome Icons End

// Vuex Store
const store = createStore({
	state() {
		return {
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
	mutations: {
		setActiveTask(state, taskId) {
			state.activeTask = taskId;
		}
	}
});

createApp(App)
	.use(store)
	.component('font-awesome-icon', FontAwesomeIcon)
	.mount('#app');
