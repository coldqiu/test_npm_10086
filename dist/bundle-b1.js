'use strict';

var vue = require('vue');

var script$1 = {
  name: 'Test1comp'
};

const _hoisted_1$1 = { class: "wrap" };

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = vue.resolveComponent("el-button");

  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1$1, [
    vue.createVNode(_component_el_button, null, {
      default: vue.withCtx(() => [
        vue.renderSlot(_ctx.$slots, "default")
      ]),
      _: 3 /* FORWARDED */
    })
  ]))
}

script$1.render = render$1;
script$1.__file = "src/components/test/index.vue";

script$1.install = (app, options) => {
  app.component(script$1.name, script$1, options);
};

var script = {
  name: 'Test2Comp'
};

const _hoisted_1 = { class: "wrap" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("button", null, [
      vue.renderSlot(_ctx.$slots, "default")
    ])
  ]))
}

script.render = render;
script.__file = "src/components/test2/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

const components = { Test2Comp: script, Test1Comp: script$1 };
const comp = { version: '1.0.0' };
comp.install = function (app) {
  Object.keys(components).forEach(key => {
    app.component(key, components[key]);
  });
};

module.exports = comp;
