

String.prototype.toAlternatingCase = function () {
    return this.split("").map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join("");
}
function longest(s1, s2) {
    let arr = s1 + s2
    let indEl = new Set(arr)
    let sortIndEl = Array.from(indEl).sort()
    return sortIndEl.join("");
}
