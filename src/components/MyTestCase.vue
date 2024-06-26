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
	<q-btn filled color="primary" label="YAWP!"></q-btn>
	<div class="q-pa-md">
		<q-select
			q-mt-xl
			filled
			v-model="modelMultiple"
			multiple
			:options="options"
			use-chips
			stack-label
			label="Multiple selection"
		/>
		<MySelect
			q-mt-xl
			v-model="modelMultiple"
			multiple
			:options="options"
			use-chips
			stack-label
			label="Multiple selection"
		/>
	</div>
</template>