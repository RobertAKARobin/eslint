/**
 * @fileoverview Tests for no-unsafe-negation rule.
 * @author Robin Thomas (robertakarobin)
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-bang-negation"),
    RuleTester = require("../../../lib/rule-tester/rule-tester");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();

ruleTester.run("no-bang-negation", rule, {
    valid: [
        "isNo = isYes == false",
        "isNo =isYes == false",
        "isNo= isYes == false",
        "isNo=isYes == false",
        "isNo=isYes== false",
        "isNo=isYes==false",

        "isNo = isYes === false",

        "isNo = (isYes == false)",
        "isNo = (isYes === false)",
        "isNo = (((isYes == false)))",
        "isNo = (((isYes === false)))",

        "isNo = (   isYes      ==     false )",
        "isNo=(   isYes      ==     false )",
        "isNo= (   isYes      ==     false )",
        "isNo =(   isYes      ==     false )",
        `isNo=(
            isYes      ==
            false
        )`,

        "isNo = isYes != isYes",
        "isNo = isYes !== isYes",

        "isNo: isYes === false",
        "isNo:isYes===false",
        "isNo:isYes!=isYes"
    ],

    invalid: [
        {
            code: "isNo = !isYes",
            errors: [
                { messageId: "unexpectedBang" }
            ]
        },
        {
            code: "isYes && !isYes",
            errors: [
                { messageId: "unexpectedBang" }
            ]
        },
        {
            code: "isYes && !isYes && (!((isYes)))",
            errors: [
                { messageId: "unexpectedBang" },
                { messageId: "unexpectedBang" }
            ]
        },
        {
            code: `!isYes
            && !isYes
            || (!((isNo)))`,
            languageOptions: { ecmaVersion: 6 },
            errors: [
                { messageId: "unexpectedBang" },
                { messageId: "unexpectedBang" },
                { messageId: "unexpectedBang" }
            ]
        },
        {
            code: "var foo = `0${!isYes}`",
            languageOptions: { ecmaVersion: 6 },
            errors: [
                { messageId: "unexpectedBang" }
            ]
        }
    ]
});
