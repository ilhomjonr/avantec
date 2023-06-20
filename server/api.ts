import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, phone } = req.body;

  try {
    // Send the form data to the Telegram channel
    await axios.post(
      "https://api.telegram.org/bot6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow/sendMessage",
      {
        chat_id: "-1001900084002",
        text: `Name: ${name}\nPhone: ${phone}`,
      }
    );

    res.status(200).json({ message: "Form data sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send form data" });
  }
}
