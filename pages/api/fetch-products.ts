import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      const result = await axios.get(
        `https://fakestoreapi.com/products${req.query.urlParams}`
      );
      res.status(200).json({ products: result.data });
    }
  }
}
