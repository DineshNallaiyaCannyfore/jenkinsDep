// esLintRules/no-console-log.js
module.exports= {
  'no-console-log': {
    meta: {
      type: 'problem',
      docs: { description: 'Disallow console.log' },
      schema: [],
    },
    create(context) {
      return {
        CallExpression(node) {
          if (
            node.callee.object?.name === 'console' &&
            node.callee.property?.name === 'log'
          ) {
            context.report({
              node,
              message: 'Avoid using console.log',
            });
          }
        },
      };
    },
  },
};
