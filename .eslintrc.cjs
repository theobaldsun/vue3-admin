module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    // 规则继承
    // 默认全部关闭，在此选择开启
    "extends": [
        "eslint:recommended", // 函数重名、对象重复key检测
        "plugin:@typescript-eslint/recommended", // vue语法规则
        "plugin:vue/vue3-essential" // ts语法规则
    ],
    // 特定类型文件指定处理器
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    // 指定解析器选项
    "parserOptions": {
        "ecmaVersion": "latest", // 校验ECMA最新版本
        "parser": "@typescript-eslint/parser", // 指定解析器：ts解析器
        "sourceType": "module"
    },
    // 插件
    "plugins": [
        "@typescript-eslint",
        "vue"
    ],
    // eslint规则
    "rules": {
    }
}
