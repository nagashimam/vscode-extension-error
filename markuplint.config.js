module.exports = {
  plugins: [
    {
      name: "markuplint-angular-control-flow-visitor",
      settings: {
        // プラグインがAngularの構文を評価した結果に対してMarkuplintを実行
        config: {
          extends: ["markuplint:recommended"],
          nodeRules: [
            {
              regexSelector: {
                attrName: "/^ng+$/",
              },
              rules: {
                "invalid-attr": false,
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
