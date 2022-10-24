let BASE_URL = "https://6351c96cdfe45bbd55c90ff4.mockapi.io/";
const mainElement = document.getElementById("tabel");
let user_id = localStorage.getItem("user_id");
let angka = ["1", "2", "3"];

let get_history = async () => {
  let response = await fetch(BASEURL + "donations/" + user_id, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let data = await response.json();

  console.log(data);
  //   showEvents(data);
};

// angka.forEach((element) => {
//   mainElement.innerHTML = `
//         <table class="table table-borderless" id="tabel">
//             <thead>
//             <tr>
//                 <th scope="col">Handle</th>
//             </tr>
//             </thead>
//             <tbody>
//             <tr>
//                 <td>@mdo</td>
//             </tr>
//             <tr>
//                 <td>@fat</td>
//             </tr>
//             </tbody>
//         </table>
//         `;
// });

// data.forEach((element) => {
//   const { title, id, image, description, total } = element;
//   const eventElement = document.createElement("div");
//   eventElement.classList.add("row");

// });
