import { defineComponent, ref } from 'vue'
import CodeMirrorEditor from '@/components/CodeMirrorEditor.vue'

import { Get, HttpResultResponse, Post } from '@/utils/requests'

export default defineComponent({
  name: 'Index',
  components: {
    CodeMirrorEditor
  },
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const editorMode = ref('javascript');
    const editorLanguage = ref('json');
    const CodeData = ref('')
    const RequestData = ref('')
    const JSONPath = ref('')

    const DataForm = ref({
      method: 'GET',
      url: '',
    });

    const Headers = ref<{ key: string, value: string }[]>([{ key: '', value: '' }]);
    const Bodys = ref<{ key: string, value: string }[]>([{ key: '', value: '' }]);

    const newHeaderBtnClick = () => {
      Headers.value.push({ key: '', value: '' })
    }

    const removeHeaderItem = (index: number) => {
      Headers.value.splice(index, 1);
    }

    const newBodyBtnClick = () => {
      Bodys.value.push({ key: '', value: '' })
    }

    const removeBodyItem = (index: number) => {
      Bodys.value.splice(index, 1);
    }

    const RequestDataChangeHandler = (data: string) => {
      CodeData.value = data;
    }

    const dataChangeHandler = (data: string) => {
      RequestData.value = data;
    }

    const GetResponse = async (url: string): Promise<HttpResultResponse<any>> => Get(url)

    const doHttpRequest = async () => {
      const { data: response } = await GetResponse(DataForm.value.url)
      CodeData.value = JSON.stringify(response)
    }

    return {
      DataForm,
      Headers,
      Bodys,

      RequestData,
      RequestDataChangeHandler,
      editorMode,
      editorLanguage,
      JSONPath,
      CodeData,
      doHttpRequest,
      dataChangeHandler,

      newHeaderBtnClick,
      removeHeaderItem,

      newBodyBtnClick,
      removeBodyItem,
    }
  }
});