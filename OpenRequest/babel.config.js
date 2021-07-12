module.exports = {
    plugins: [
      [
        'component',
        {
          libraryName: 'element-plus',
          styleLibraryName: 'theme-chalk'
        }
      ],
      [
        '@vue/babel-plugin-jsx',
        {
          enableObjectSlots: true // 开启jsx v-slots语法（设置为false也可以，有待进一步验证）
        }
      ]
    ]
  }
  