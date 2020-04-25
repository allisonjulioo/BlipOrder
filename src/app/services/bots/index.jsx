import { apiUrl } from "./../index";

export async function get() {
  const favorities = [];
  const others = [];
  const response = await fetch(`${apiUrl}/bots`).then((response) =>
    response.json()
  );
  favorities.push(await response.filter((item) => item.favorite));
  others.push(await response.filter((item) => !item.favorite));
  const todo = favorities.concat(others);
  return todo;
}

export async function profile(id) {
  return await fetch(`${apiUrl}/bots/${id}`).then((response) =>
    response.json()
  );
}

export async function update(bot) {
  fetch(`${apiUrl}/bots/${bot.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      favorite: bot.favorite,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => json);
}

export async function create(bot) {
  fetch(`${apiUrl}/bots`, {
    method: "POST",
    body: JSON.stringify(bot),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => json);
}

export async function botDelete(id) {
  fetch(`${apiUrl}/bots/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((json) => json);
}
