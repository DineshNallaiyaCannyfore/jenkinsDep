module.exports = {
  'no-alert': {
    meta: {
      type: 'problem',
      docs: { description: 'Disallow alert()' },
      schema: []
    },
    create(context) {
      return {
        CallExpression(node) {
          if (node.callee.name === 'alert') {
            context.report({
              node,
              message: 'Please remove alert(). Use a logger or notification service instead.'
            });
          }
        }
      };
    }
  }
};
