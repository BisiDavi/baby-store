import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET": {
      axios
        .get(
          `${process.env.APILAYER_BASE_URL}/live?source=USD&currencies=EUR%2CNGN%2CUSD%2CCAD`,
          {
            headers: {
              apikey: process.env.APILAYER_CURRENCY_KEY,
            },
          }
        )
        .then((response) => {
          console.log("response", response);
          res.status(200).json({ result: response });
        });
    }
  }
}
