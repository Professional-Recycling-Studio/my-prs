module.exports = {
<<<<<<< HEAD
  publicPath: './', //执行npm run build打包命令的时候，调整资源的引用路径
  devServer: { //当我们访问别人的接口，发生跨域问题的时候需要这个配置项
      proxy: {
          '/api': {
              target: 'https://www.qupingce.com',
              changeOrigin: true,
              pathRewrite: {
                  '^/api': ''
              }
          }
      }
  }
=======
    publicPath: './', //执行npm run build打包命令的时候，调整资源的引用路径
    devServer: { //当我们访问别人的接口，发生跨域问题的时候需要这个配置项
        proxy: {
            '/api': {
                target: 'https://www.qupingce.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
>>>>>>> e51da820eb17a59df462ed506ac4e5f1e684b0fa
}