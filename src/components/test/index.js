import Test1 from './index.vue'

Test1.install = (app, options) => {
  app.component(Test1.name, Test1, options)
}

export default Test1