import { createElement } from "../../utils/createElement";

export function getPizza() {
  const pizza = createElement("img", {
    className: "pizzaImg",
    src:
      "https://cdn.pixabay.com/photo/2016/07/10/16/05/pizza-1507939_960_720.png",
  });
  return pizza;
}

export function createCard({ img, name, nick, status, occupation }) {
  const headline = createElement("h2", {
    className: "card__name",
    innerText: name,
  });
  const cardInfo = createElement("div", {
    className: "card__info",
    childs: [
      headline,
      createElement("p", {
        className: "card__nick",
        innerText: nick,
      }),
      createElement("img", {
        className: "card__img",
        src: img,
        alt: "",
      }),
      createElement("p", {
        className: "card__occ",
        innerText: occupation,
      }),
      createElement("p", {
        className: "card__status",
        innerText: status,
      }),
    ],
  });
  return createElement("article", {
    className: "card",
    childs: [
      cardInfo,
      createElement("button", {
        className: "btn",
        innerText: "get a Pizza",
        onclick: () => {
          const pizza = getPizza();
          headline.append(pizza);
        },
      }),
    ],
  });
}
