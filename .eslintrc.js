/*
 * @Author: 彭俊
 * @Date: 2020-12-16 11:15:44
 * @LastEditors: 彭俊
 * @LastEditTime: 2020-12-22 14:44:27
 * @FilePath: /SP_WEB_iview/Users/pengjun/vscode-workspace/vue/learn-vue-app/.eslintrc.js
 * @Description: eslint 自定义规则，同时对 vetur 插件和项目中的 eslint 检查组件有效
 */
module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [ // 强烈推荐使用的代码规则
    "plugin:vue/strongly-recommended",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": { // 在这里自定义代码规则
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // 这两条都是影响<template>中HTML格式的规则，因为默认的和 VSCode 自带的格式化规则冲突，所以需要这样设置
    "vue/max-attributes-per-line": "off",
    "vue/html-self-closing": "off",
    // 换行缩进和 prettier 冲突，所以关闭
    "vue/html-indent": "off",
    // html元素内内容必须换行。和 prettier 冲突，所以关闭
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    // 和 prettier 冲突，所以关闭
    "vue/html-closing-bracket-newline": "off",
    // HTML 强制使用双引号
    "vue/html-quotes": ["error", "double"],
    // JS 强制使用单引号
    "quotes": ["error", "single"],
    // 强制在Vue模板的自定义组件上使用连字符属性名称，比如：my-prop，而不是：myProp
    // 'vue/attribute-hyphenation': [2, 'never', { 'ignore': ['custom-prop'] }]
    // Disallow parsing errors in <template>
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
  }
}
