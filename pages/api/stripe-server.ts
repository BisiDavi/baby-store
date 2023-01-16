const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case "POST": {
      try {
        const sessionData = {
          ...req.body,
          mode: "payment",
          success_url: `${req.headers.origin}/checkout/success?session_id=CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}/checkout/error`,
        };
        console.log("sessionData", sessionData);
        const session = await stripe.checkout.sessions.create(sessionData);
        console.log("session", session);
        res.redirect(303, session.url);
        // res.status(200).json({ session });
      } catch (error: any) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
    default: {
      res.setHeader("Allow", "POST");
      res.status(405).end("Method Not Allowed");
    }
  }
}
