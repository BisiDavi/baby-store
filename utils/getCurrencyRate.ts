import currencyRate from "@/json/currency-rate.json";
import axios from "axios";

export default function getCurrencyRate() {
  const currentDateInstance = new Date().toLocaleDateString("en-CA");
  const currentDateTime = new Date(currentDateInstance).getTime();
  const currencyDateTime = new Date(currencyRate.date).getTime();

  if (currentDateTime > currencyDateTime) {
    axios.get("/api/currency-rate");
  }
}
