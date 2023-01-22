import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

/**
 * @swagger
 * /api/currency-rate:
 *   get:
 *     description: Fetch the current currency rate of EUR, NGN & CAD in relative to USD and writes the rate in a file
 *     responses:
 *       200:
 *         description:  "currency-rate updated"
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET": {
      try {
        const filePath = path.join(
          __dirname,
          "..",
          "..",
          "..",
          "..",
          "json",
          "currency-rate.json"
        );
        await axios
          .get(
            `${process.env.APILAYER_BASE_URL}/live?source=USD&currencies=EUR%2CNGN%2CUSD%2CCAD`,
            {
              headers: {
                apikey: process.env.APILAYER_CURRENCY_KEY,
              },
            }
          )
          .then((response) => {
            const currentDate = new Date();
            const result = {
              ...response.data,
              date: currentDate.toLocaleDateString("en-CA"),
            };
            fs.writeFile(filePath, JSON.stringify(result), (err) => {
              if (err) {
                return res.status(400).json({ status: err });
              }
              return res.status(200).json({ status: "currency-rate updated" });
            });
          });
      } catch (error: any) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  }
}
