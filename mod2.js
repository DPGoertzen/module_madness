module.exports = {
toUSCurrency : toUSCurrency,
};

function toUSCurrency(value){
  return value.toLocaleString("en-US", {style: "currency", currency: "USD"});
}
