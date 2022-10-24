let BASE_URL = "https://6351c96cdfe45bbd55c90ff4.mockapi.io/";
const mainElement = document.getElementById("donate_event");
let user_id = localStorage.getItem("user_id");
let event_id = localStorage.getItem("eventId");

let postDataElement = async (amount_value) => {
  await fetch(BASE_URL + "donations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id_user: user_id,
      id_event: event_id,
      amount: amount_value,
    }),
  });

  console.log("post data sukses");

  alert("Register success");
};

let get_data_event = async () => {
  let response = await fetch(BASE_URL + "events/" + event_id, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let data = await response.json();
  console.log(data);

  let get_data_event = async () => {
    let response = await fetch(BASE_URL + "events/" + event_id, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    let data = await response.json();
    console.log(data);
  };

  get_data_event();

  mainElement.innerHTML = `
          <div class="col">
            <div class="card mb-5 bg-light" style="width: 20rem">
              <img class="card-img-top" src="${data.image}" alt="" />
              <div class="card-body">
                <h5 class="card-title">${data.title}</h5>
                <p>Masukkan jumlah nominal yang ingin anda donasikan!</p>
                <input type="number" id="input_jumlah" class="form-control form-control-lg mb-4"/>
                <button class="bg-success" type="submit" id="donate_button">Donasi</button>
              </div>
            </div>
          </div>
        `;

  let button = document.getElementById("donate_button");
  let amount = document.getElementById("input_jumlah");

  button.addEventListener("click", (event) => {
    event.preventDefault();

    let amount_value = amount.value;
    postDataElement(amount_value);
  });
};

get_data_event();
