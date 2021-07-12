<template>
  <div>
    <div class="mainBox">
      <el-form>
        <el-form-item label="Method" label-width="76px">
          <el-radio-group v-model="DataForm.method" size="small">
            <el-radio-button label="GET"></el-radio-button>
            <el-radio-button label="POST"></el-radio-button>
            <el-radio-button label="PUT"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="URL" label-width="76px">
          <el-input
            size="small"
            v-model="DataForm.url"
            placeholder=""
            style="width: 312px"
          ></el-input>
        </el-form-item>

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
            style="width: 150px"
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
      </el-form>
    </div>
  </div>
</template>

<script src="./index.ts"></script>

<style>
.mainBox {
  width: 80%;
  margin: 0 auto;
  margin-top: 20px;
}

.mainBox .el-form-item {
  margin-bottom: 2px;
}
</style>