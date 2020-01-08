const path = require("path")

module.exports = {
    // 配置服务器代理
    devServer:{
        "/api":{
            target:"http://39.97.33.178",
            changeOrigin:true
        }
    },
    // 配置别名
    configuerWebpack:{
        alias:{
            "@":path.join(__dirname,"./src"),
            "@aip":path.join(__dirname,"./src/api"),
            "@assets":path.join(__dirname,"./src/assets"),
            "@common":path.join(__dirname,"./src/common"),
            "@components":path.join(__dirname,"./src/components"),
            "@pages":path.join(__dirname,"./src/pages"),
            "@router":path.join(__dirname,"./src/router"),
            "@store":path.join(__dirname,"./src/store"),
            "@utils":path.join(__dirname,"./src/utils"),
        }
    }
}