import Test1Comp from './test/index.js'
import Test2Comp from './test2/index.js'

const components = { Test2Comp, Test1Comp }
const comp = { version: '1.0.0' }
comp.install = function (app) {
  Object.keys(components).forEach(key => {
    app.component(key, components[key])
  })
}

export default comp