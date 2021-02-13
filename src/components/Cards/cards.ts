import { createElement } from "../../utils/createElement";

export function createCard({ img, name, nick, status, occupation }) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("div", {
        className: "card__info",
        childs: [
          createElement("h2", {
            className: "card__name",
            innerText: name,
          }),
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
      }),
    ],
  });
}
