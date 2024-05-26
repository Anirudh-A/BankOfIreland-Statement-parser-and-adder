var inputLog = `
`;

const regexp = new RegExp('minus .* ');

const matches = findAll(regexp, inputLog)
const b = matches.map(m => m.slice(5));

var sum = 0;
b.map(value1 => {
    const value = value1.replace(',', '') * 1
    sum += value;
});

console.log(sum.toFixed(2), 'sum')

function findAll(regexPattern, sourceString) {
    let output = []
    let match
    // auto-add global flag while keeping others as-is
    let regexPatternWithGlobal = RegExp(regexPattern,[...new Set("g"+regexPattern.flags)].join(""))
    while (match = regexPatternWithGlobal.exec(sourceString)) {
        // get rid of the string copy
        delete match.input
        // store the match data
        output.push(match[0])

    } 
    return output
}
