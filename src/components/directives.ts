import { Directive } from 'vue';

export const vVisible: Directive = {
  mounted: (el, binding) => el.style.visibility = !!binding.value ? 'visible' : 'hidden',
}
