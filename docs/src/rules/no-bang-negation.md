---
title: no-bang-negation
rule_type: suggestion
related_rules:
- no-unsafe-negation
---





The exclamation mark operator, also called "bang," can be used to _negate_ a varible, or get its opposite boolean value: if `isYes` is `true`, then `!isYes` is `false`. This keeps code short, makes it harder to read at a glance.

## Rule Details

This rule disallows using the bang `!` operator to negate a variable.

Examples of **incorrect** code for this rule:

::: incorrect

```js
/*eslint no-bang-negation: "error"*/

isYes = !isNo;

if (!isNo) {

}
```

:::

Examples of **correct** code for this rule:

::: correct

```js
/*eslint no-bang-negation: "error"*/

isYes = isNo === false;

if (isNo === false) {

}
```

:::

## When Not To Use It

If you think negating variables with bang `!` is readable enough, then you don't need this rule.
