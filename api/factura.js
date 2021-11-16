import axios from "axios";

const URL = "https://api.alegra.com/api/v1/invoices";
const USER = "fabianpacherres@gmail.com";
const TOKEN = "2add062b6d3f230a319a";

export default async function getDataApi(data) {
  try {
    const dataFact = {
      date: data.date,
      dueDate: data.dueDate,
      client: parseInt(data.idUser),
      items: [data.items[0]],
      seller: 1,
      operationType: data.operationType
    };
    console.log(data.items[0])
    const response = await axios.post(URL, dataFact, {
      auth: {
        username: USER,
        password: TOKEN,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
}

// import axios from "axios";

// const URL = "https://api.alegra.com/api/v1/invoices";
// const USER = "fabianpacherres@gmail.com";
// const TOKEN = "2add062b6d3f230a319a";

// export default async function getDataApi(data) {
//   try {
//     const dataFact = {
//       date: data.date,
//       dueDate: data.dueDate,
//       client: parseInt(data.idUser),
//       items: [data.items[0]],
//       seller: 1,
//     };
//     console.log(data.items[0])
//     const response = await axios.post(URL, dataFact, {
//       auth: {
//         username: USER,
//         password: TOKEN,
//       },
//     });
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }
