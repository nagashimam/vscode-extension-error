module.exports = {
  plugins: [
    {
      name: "markuplint-angular-control-flow-visitor",
      settings: {
        // プラグインがAngularの構文を評価した結果に対してMarkuplintを実行
        config: {
          extends: ["markuplint:recommended"],
          rules: {
            "required-h1": false,
            "invalid-attr": {
              options: {
                ignoreAttrNamePrefix: ["app", "ng"],
                allowAttrs: ["formgroup"],
              },
            },
          },
          nodeRules: [
            {
              selector: "img",
              rules: {
                "required-attr": ["src", "alt"],
              },
            },
          ],
        },
      },
    },
  ],
  rules: {
    "markuplint-angular-control-flow-visitor/control-flow-visitor": true,
  },
};
