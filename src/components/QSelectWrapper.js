import { h } from 'vue'
import { QSelect, QIcon } from 'quasar'

const CLS = { class: 'ui-tab' }

const Select = function(props, { slots, emit, attrs }) {
  const { xref, ...rprops } = props
  const defaults = Object.assign({
    ref: xref?.el,
    outlined: true,
	fillInput: true
  }, rprops, CLS)
  
  let extendedSlots = slots

  if (rprops?.icon) {
    if (!xref.el.value?.hasError) {
      extendedSlots = {
        ...slots,
        append: () => h(QIcon, { name: rprops.icon })
      }
    } else {
      delete extendedSlots.append
    }
  }

  return h(QSelect, defaults, extendedSlots)
}
export default Select