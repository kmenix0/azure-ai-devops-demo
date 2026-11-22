function obliczCeneBrutto(netto, vat = 0.23) {
  return Math.round(netto * (1 + vat) * 100) / 100;
}

if (typeof module !== "undefined") {
  module.exports = { obliczCeneBrutto };
}