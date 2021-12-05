// create a axios instance
import axios from "axios";

export const houseRequest = axios.create({
    baseURL: "http://192.168.0.120:3001/",
    timeout: 1000,
    headers: { "content-type": "application/json" },
  });


// this is example
// export const create_student_with_fetch = async (name) => {
// return fetch("http://192.168.0.120:3001/students", {
//     body: `{"name": "${name}"}`,
//     headers: { "content-type": "application/json" },
//     method: "POST",
// })
//     .then((res) => res.json())
//     .then((data) => {
//     console.log(data);
//     return data;
//     });
// };

// this is also a example
// export const read_student_with_axios = async () => {
//     return userRequest
//       .get("/students")
//       .then((res) => res.data)
//       .then((data) => {
//         // console.log(data);
//         return data;
//       });
//   };