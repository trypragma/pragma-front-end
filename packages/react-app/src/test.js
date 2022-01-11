// // import { Client } from "@notionhq/client"
// const notion = new Client({ auth: "secret_edlmCVedjBzfXKaLmYcRtEpZxBu0QQyTOhpDNqCUuts" });
// const databaseId = '4685289dd26b49c3a4dae8226f480c66';

// async function addItem(text) {
//   try {
//     const response = await notion.pages.create({
//       parent: { database_id: databaseId },
//       properties: {
//         title: { 
//           title:[
//             {
//               "text": {
//                 "content": text
//               }
//             }
//           ]
//         }
//       },
//     })
//     console.log(response)
//     console.log("Success! Entry added.")
//   } catch (error) {
//     console.error(error.body)
//   }
// }

// addItem("Yurts in Big Sur, California")