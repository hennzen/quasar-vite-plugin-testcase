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
	<q-btn filled color="primary" no-caps label="YAWP! MyTestCase"></q-btn>
	<div class="q-pa-md">
		<p>Normal QSelect</p>
		<q-select
			class="q-mb-md"
			filled
			v-model="modelMultiple"
			multiple
			:options="options"
			use-chips
			stack-label
			label="Multiple selection"
		/>
		<p>Wrapped QSelect "MySelect"</p>
		<MySelect
		    class="q-mb-md"
			v-model="modelMultiple"
			multiple
			:options="options"
			use-chips
			stack-label
			label="Multiple selection"
		/>
	</div>
</template>