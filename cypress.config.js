//defineConfigとは、cypressの設定ファイルを定義するための関数
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'xh8w3d',
  
  e2e: {
    baseUrl: 'http://localhost:3000'

  }
})
