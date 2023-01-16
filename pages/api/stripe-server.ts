const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case "POST": {
      try {
        const sessionData = {
          ...req.body,
          mode: "payment",
          success_url: `${req.headers.origin}/checkout/payment-successful/session?id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/checkout`,
        };
        const session = await stripe.checkout.sessions.create(sessionData);
        res.status(200).json({ session });
      } catch (error: any) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  }
}
