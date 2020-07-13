
//   此文件是 create-react-app 官方推荐的一个库  customize-cra 的扩展文件
//   实际上市扩展webpack 的功能
//   所以是基于common的模块化规范
//   项目中是基于es 模块化的规范

const { override,fixBabelImports, addLessLoader  } = require('customize-cra')

module.exports = override(
    fixBabelImports('import',{
        libraryName:'antd',
        libraryDirectory:'es',
        // style 的选项 'css' 表示引入css文件  true表示引入的less
        style:true
    }),
    addLessLoader({
        javascriptEnabled: true,
        // 这里配置less    控制antd-design 主题颜色
        modifyVars:{
            // 定制主题 链接 https://ant.design/docs/react/customize-theme-cn
            '@primary-color':'#d214a2',
            '@font-size-base':'16px'
        }
    })
)












