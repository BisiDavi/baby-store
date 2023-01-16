import { useAppSelector } from "@/redux/store";
import { formatCurrencyRate } from "@/utils/getCurrencyRate";

export default function usePrice() {
  const { currency } = useAppSelector((state) => state.currency);
  const rate = currency.code !== "USD" ? formatCurrencyRate(currency.code) : 1;
  return { rate, currency };
}
