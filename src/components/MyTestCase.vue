<script>
import { ref } from 'vue'
// import CustomSelect from './QSelectFunctionalWrapper'

export default {
  setup () {
    return {
      modelMultiple: ref(['Facebook']),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  }
}
</script>

<template>
	<h4>Testcase below</h4>
	<div class="q-pa-md">
		<p>Normal QSelect: selecting options works ✅</p>
		<q-select
			style="min-width: 300px"
			class="q-mb-md"
			filled
			v-model="modelMultiple"
			multiple
			:options="options"
			use-chips
			stack-label
			label="Multiple selection"
		/>
		<p>Normal QSelect within QMenu: selecting options works ✅</p>
		<q-btn class="q-mb-md" color="primary" label="Menu with working QSelect inside">
			<q-menu anchor="bottom middle" self="top middle">
				<q-select
					style="min-width: 300px"
					class="q-ma-lg"
					filled
					v-model="modelMultiple"
					multiple
					:options="options"
					use-chips
					stack-label
					label="Multiple selection"
				/>
			</q-menu>
		</q-btn>
		<p>"MySelect" within QMenu: selecting options <strong>does not</strong> work ⛔</p>
		<q-btn class="q-mb-md" color="primary" label="Menu with non-working MySelect inside">
			<q-menu anchor="bottom middle" self="top middle">
				<MySelect
					style="min-width: 300px"
					class="q-ma-lg"
					v-model="modelMultiple"
					multiple
					:options="options"
					use-chips
					stack-label
					label="Multiple selection"
				/>
			</q-menu>
		</q-btn>
	</div>
</template>