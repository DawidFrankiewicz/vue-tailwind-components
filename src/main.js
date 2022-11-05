import { createApp } from 'vue';
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

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
