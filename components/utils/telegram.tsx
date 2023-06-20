// // // import axios from "axios";

// // // export async function postRequest(
// // //   e,
// // //   name,
// // //   number,
// // //   setIsSuccess,
// // //   setName,
// // //   setNumber,
// // //   setMessage,
// // //   setIsModal
// // // ) {
// // //   e.preventDefault();

// // //   const data = {
// // //     full_name: name,
// // //     phone_number: number,
// // //   };

// // //   const res = await axios.post(
// // //     `${process.env.NEXT_PUBLIC_ENDPOINT}/applications/create`,
// // //     data
// // //   );

// // //   if (res.status == 201) {
// // //     setIsSuccess(true);
// // //     setTimeout(() => {
// // //       setName("");
// // //       setNumber("");
// // //       setIsSuccess(false);
// // //       setIsModal(false);
// // //     }, 1000);
// // //   }
// // // }
// // import axios from "axios";

// // export default async function handler(req, res) {
// //   const { name, phone } = req.body;

// //   try {
// //     // Send the form data to the Telegram channel
// //     await axios.post(
// //       "https://api.telegram.org/bot6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow/sendMessage",
// //       {
// //         chat_id: "-1001900084002",
// //         text: `Name: ${name}\nPhone: ${phone}`,
// //       }
// //     );

// //     res.status(200).json({ message: "Form data sent successfully" });
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500).json({ message: "Failed to send form data" });
// //   }
// // }
// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { name, phone } = req.body;

//   try {
//     // Send the form data to the Telegram channel
//     await axios.post(
//       "https://api.telegram.org/bot6034610821:AAEO4iFLAnblVYdIWutzVg_Mz6NhuBiqjow/sendMessage",
//       {
//         chat_id: "-1001900084002",
//         text: `Name: ${name}\nPhone: ${phone}`,
//       }
//     );

//     res.status(200).json({ message: "Form data sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to send form data" });
//   }
// }
// import { NextApiRequest, NextApiResponse } from "next";
// import axios from "axios";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { name, phone } = req.body;

//   try {
//     // Send the form data to the Telegram channel
//     await axios.post(
//       "https://api.telegram.org/bot<YOUR_TELEGRAM_BOT_TOKEN>/sendMessage",
//       {
//         chat_id: "<YOUR_TELEGRAM_CHANNEL_ID>",
//         text: `Name: ${name}\nPhone: ${phone}`,
//       }
//     );

//     res.status(200).json({ message: "Form data sent successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to send form data" });
//   }
// }
