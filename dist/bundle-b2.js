import { resolveComponent, openBlock, createElementBlock, createVNode, withCtx, createTextVNode, createElementVNode } from 'vue';

var script = {
  name: 'test'
};

const _hoisted_1 = { class: "wrap" };
const _hoisted_2 = /*#__PURE__*/createElementVNode("button", null, "button", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");

  return (openBlock(), createElementBlock("div", _hoisted_1, [
    _hoisted_2,
    createVNode(_component_el_button, null, {
      default: withCtx(() => [
        createTextVNode("el-button")
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

script.render = render;
script.__file = "src/components/test/index.vue";

script.install = (app, options) => {
  app.component(script, script.name, options);
};

export { script as default };
