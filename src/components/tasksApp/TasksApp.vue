<script setup>
import WeekDisplay from './WeekDisplay.vue';
import TaskDisplay from './TaskDisplay.vue';
</script>

<template>
	<div class="grid p-6 gap-8 lg:grid-cols-2">
		<WeekDisplay />
		<TaskDisplay />
	</div>
</template>
