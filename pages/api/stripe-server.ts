const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case "POST": {
      try {
        const session = await stripe.checkout.sessions.create({
          line_items: req.body.lineItems,
          mode: "payment",
          success_url: `${req.headers.origin}/checkout?status=success`,
          cancel_url: `${req.headers.origin}/checkout?status=cancelled`,
        });
        res.redirect(303, session.url);
      } catch (error: any) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  }
}
