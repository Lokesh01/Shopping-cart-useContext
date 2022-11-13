const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "INR",
  style: "currency",
});

export function currencyFormatter(num: number) {
  return CURRENCY_FORMATTER.format(num);
}
