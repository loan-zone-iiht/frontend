exports.currencyFormatterRupee = (num) => {
    return '₹ '+num.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:2})
}
exports.currencyFormatter = (num) => {
    return num.toLocaleString("en-US",{maximumFractionDigits:2, minimumFractionDigits:2})
}