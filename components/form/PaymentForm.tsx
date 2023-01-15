import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
);

export default function PaymentForm() {
  const options = {
    clientSecret: `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <StripePaymentForm />
    </Elements>
  );
}

function StripePaymentForm() {
  return (
    <form>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
}
