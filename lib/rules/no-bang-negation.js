/**
 * @fileoverview Rule to disallow using bang (!) to negate variables
 * @author Robin Thomas (robertakarobin)
 */
"use strict";

/** @type {import('../shared/types').Rule} */
module.exports = {
    meta: {
        docs: {
            description: "Disallow using bang (!) to negate variables",
            recommended: false,
            url: "https://eslint.org/docs/latest/rules/no-bang-negation"
        },
        messages: {
            unexpectedBang: "Don't use bang (!) to negate variables. Use explicit comparisons instead, e.g. `=== false`, or change the variable name to be negative."
        },
        schema: [],
        type: "suggestion"
    },

    create(context) {
        return {
            UnaryExpression(node) {
                if (node.operator === "!") {
                    context.report({
                        messageId: "unexpectedBang",
                        node
                    });
                }
            }
        };
    }
};
