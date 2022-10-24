let BASEURL = "https://6351c96cdfe45bbd55c90ff4.mockapi.io/";
const mainElement = document.getElementById("events-list");

let get_event = async () => {
  let response = await fetch(BASEURL + "events", {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  let data = await response.json();
  //   const user = await data.find((d) => d.email === email);

  // console.log(data);
  showEvents(data);
  //   console.log(user);
};

function showEvents(data) {
  mainElement.innerHTML = "";

  data.forEach((element) => {
    const { title, id, image, description, total } = element;
    const eventElement = document.createElement("div");
    eventElement.classList.add("row");
    eventElement.innerHTML = `
          <div class="col">
            <div class="card mb-5 bg-light" style="width: 16rem">
              <img class="card-img-top" src="${image}" alt="${title}" />
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">
                  ${description}
                </p>
                <a class="btn btn-success" href="formDonation.html" onclick="localStorage.setItem('eventId', ${id})">Donasi</a>
              </div>
            </div>
          </div>
        `;

    mainElement.append(eventElement);
    console.log();
  });
}

get_event();
