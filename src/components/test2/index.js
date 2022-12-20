import Test2 from './index.vue'

Test2.install = (app) => {
  app.component(Test2.name, Test2)
}

export default Test2