// npm install faker json-server npm-run-all --save-dev

// Finalmente entramos en el archivo ‘package.json’ y reescribimos los ‘scripts’ para que quede de la siguiente forma:
// “scripts”: {
// “start”: “npm-run-all -p client server”, ------------------------------------- Ejecuta todos los scripts a una
// “client”: “react-scripts start”,
/* “server”: “json-server --port 3001 --watch server/db.json”, ------------------ Crea un servidor falso con un puerto 3001 
y unos datos que busca la api en el archivo especificado. */
// “seed”: “node server/seed.js”, ----------------------------------------------- Crea los datos falsos
// “build”: “react-scripts build”,
// “test”: “react-scripts test”,
// “eject”: “react-scripts eject”
// }

// Explicados:

// “start”: “npm-run-all -p client server”,
// Ejecuta todos los scripts a una

// “server”: “json-server --port 3001 --watch server/db.json”,
// Crea un servidor falso con un puerto 3001 y unos datos que busca la api en el archivo especificado.

// “seed”: “node server/seed.js”,
// Crea los datos falsos

const BASE_URL = "http://localhost:3001";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const randomNumber = (min = 0, max = 1) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const simulateNetworkLatency = (min = 30, max = 1500) =>
  delay(randomNumber(min, max));

async function callApi(endpoint, options = {}) {
  await simulateNetworkLatency();

  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const url = BASE_URL + endpoint;
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

const api = {
  badges: {
    list() {
      // return []
      // throw new Error('500: Server Error')
      return callApi("/badges");
    },
    create(badge) {
      // throw new Error('500: Server error')
      return callApi(`/badges`, {
        method: "POST",
        body: JSON.stringify(badge)
      });
    },
    read(badgeId) {
      return callApi(`/badges/${badgeId}`);
    },
    update(badgeId, updates) {
      return callApi(`/badges/${badgeId}`, {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },
    // Lo hubiera llamado `delete`, pero `delete` es un keyword en JavaScript asi que no es buena idea :P
    remove(badgeId) {
      return callApi(`/badges/${badgeId}`, {
        method: "DELETE"
      });
    }
  }
};

export default api;
