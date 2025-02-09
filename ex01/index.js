const babel = require("@babel/core");

const source = "const fn = () => {}";
const result = babel.transform(source, {});

console.log(result);
