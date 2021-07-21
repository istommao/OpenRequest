<template>
  <div class="Box">
    <div class="topBox">
      <el-form>
        <el-form-item label="" label-width="16px">
          <el-radio-group v-model="DataForm.method" size="small">
            <el-radio-button label="GET"></el-radio-button>
            <el-radio-button label="POST"></el-radio-button>
            <el-radio-button label="PUT"></el-radio-button>
          </el-radio-group>
          &nbsp;&nbsp;
          <el-input
            size="small"
            v-model="DataForm.url"
            placeholder=""
            style="width: 350px"
          ></el-input>
          &nbsp;
          <el-button
            size="small"
            type="primary"
            plain
            icon="el-icon-s-promotion"
            @click="newHeaderBtnClick"
            >Send</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="mainBox">
      <div class="leftBox">
        <el-form>
          <el-form-item label="Headers" label-width="76px">
            <el-button
              size="small"
              type="primary"
              plain
              icon="el-icon-plus"
              @click="newHeaderBtnClick"
              >new</el-button
            >
          </el-form-item>
          <el-form-item label=" " label-width="76px" v-for="(item, index) in Headers" :key="index">
            <el-input
              size="small"
              placeholder="key"
              style="width: 150px"
              v-model="item.key"
            ></el-input
            >&nbsp;&nbsp;
            <el-input
              size="small"
              placeholder="value"
              style="width: 200px"
              v-model="item.value"
            ></el-input
            >&nbsp;&nbsp;
            <el-button
              v-if="Headers.length > 1"
              size="small"
              type="primary"
              plain
              icon="el-icon-delete"
              @click="removeHeaderItem(index)"
            ></el-button>
          </el-form-item>
          <!-- body -->
          <el-form-item label="Body" label-width="76px">
            <el-button
              size="small"
              type="primary"
              plain
              icon="el-icon-plus"
              @click="newBodyBtnClick"
              >new</el-button
            >
          </el-form-item>
          <el-form-item label=" " label-width="76px" v-for="(item, index) in Bodys" :key="index">
            <el-input
              size="small"
              placeholder="key"
              style="width: 150px"
              v-model="item.key"
            ></el-input
            >&nbsp;&nbsp;
            <el-input
              size="small"
              placeholder="value"
              style="width: 200px"
              v-model="item.value"
            ></el-input
            >&nbsp;&nbsp;
            <el-button
              v-if="Bodys.length > 1"
              size="small"
              type="primary"
              plain
              icon="el-icon-delete"
              @click="removeBodyItem(index)"
            ></el-button>
          </el-form-item>
        </el-form>
        <CodeMirrorEditor
          :mode="editorMode"
          :language="editorLanguage"
          :data="RequestData"
          @DataChange="RequestDataChangeHandler"
        ></CodeMirrorEditor>
      </div>
      <div class="rightBox">
        <el-form>
          <el-form-item label="Headers" label-width="76px"> Response Headers </el-form-item>
          <el-form-item label=" " label-width="76px" v-for="(item, index) in Headers" :key="index">
            <el-input
              size="small"
              placeholder="key"
              style="width: 150px"
              v-model="item.key"
            ></el-input
            >&nbsp;&nbsp;
            <el-input
              size="small"
              placeholder="value"
              style="width: 200px"
              v-model="item.value"
            ></el-input
            >&nbsp;&nbsp;
            <el-button
              v-if="Headers.length > 1"
              size="small"
              type="primary"
              plain
              icon="el-icon-delete"
              @click="removeHeaderItem(index)"
            ></el-button>
          </el-form-item>
          <!-- body -->
          <el-form-item label="Body" label-width="76px"> Body </el-form-item>
          <el-form-item label=" " label-width="76px" v-for="(item, index) in Bodys" :key="index">
            <el-input
              size="small"
              placeholder="key"
              style="width: 150px"
              v-model="item.key"
            ></el-input
            >&nbsp;&nbsp;
            <el-input
              size="small"
              placeholder="value"
              style="width: 200px"
              v-model="item.value"
            ></el-input
            >&nbsp;&nbsp;
            <el-button
              v-if="Bodys.length > 1"
              size="small"
              type="primary"
              plain
              icon="el-icon-delete"
              @click="removeBodyItem(index)"
            ></el-button>
          </el-form-item>
        </el-form>
        <CodeMirrorEditor
          :mode="editorMode"
          :language="editorLanguage"
          :data="CodeData"
          @DataChange="dataChangeHandler"
        ></CodeMirrorEditor>
      </div>
    </div>
  </div>
</template>

<script src="./index.ts"></script>

<style>
body,
div {
  margin: 0;
  padding: 0;
}

.Box {
  width: 90%;
  margin: 0 auto;
  margin-top: 0px;
  height: 800px;
  border: 1px dashed #ccc;
}

.mainBox {
  width: 100%;
  display: flex;
  border-top: 1px dashed #ccc;
}
.topBox {
  width: 100%;
  height: 50px;
  line-height: 50px;
  padding-top: 10px;
}

.leftBox {
  width: 50%;
  padding: 5px;
  border-right: 1px dashed #ccc;
}
.rightBox {
  width: 50%;
  padding: 5px;
}

.mainBox .el-form-item {
  margin-bottom: 2px;
}
</style>