import { excapeHtml } from '@/utils/excapeHtml'

const richtext = {
  bind: (el, binding) => {
    el.innerHTML = excapeHtml(binding.value)
  },
  componentUpdated: (el, binding) => {
    el.innerHTML = excapeHtml(binding.value)
  }
}

export default {
  richtext
}
