import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      try {
        const currencyRequest = await axios.get(
          `${process.env.APILAYER_BASE_URL}/live?source=USD&currencies=EUR%2CNGN%2CUSD%2CCAD`,
          {
            headers: {
              apikey: process.env.APILAYER_CURRENCY_KEY,
            },
          }
        );
        res.status(200).json({ result: currencyRequest.data });
      } catch (error: any) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  }
}
