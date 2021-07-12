import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Index',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const DataForm = ref({
      method: 'GET',
      url: '',
    });

    const Headers = ref<{ key: string, value: string }[]>([{ key: '', value: '' }]);

    const newHeaderBtnClick = () => {
      Headers.value.push({ key: '', value: '' })
    }

    const removeHeaderItem = (index: number) => {
      Headers.value.splice(index, 1);
    }

    return {
      DataForm,
      Headers,

      newHeaderBtnClick,
      removeHeaderItem,
    }
  }
});