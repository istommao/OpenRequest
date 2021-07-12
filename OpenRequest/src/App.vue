<template>
  <div id="container">
    <el-container>
      <el-header>
        <div style="line-height: 40px; line-height: 40px"></div>
      </el-header>
      <el-container>
        <el-main>
          <div style="width: 100%; height: 60vh">
            <div class="node-view-background">
              <router-view />
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script src="./app.ts"></script>
<style>
body {
  margin: 0;
  padding: 0;
}
div {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
