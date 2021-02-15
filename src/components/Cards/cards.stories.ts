import "./cards.css";
import { createElement } from "../../utils/createElement";
import { createCard } from "../Cards/cards";
import { getCharacter, getCharacters } from "../../utils/api";

export default {
  title: "Components/Cards",
  parameters: { layout: "centered" },
};

export const Walter = () =>
  createCard({
    img:
      "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
    name: "Walter White",
    nick: "Heisenberg",
    status: "Presumed dead",
    occupation: "dealer",
  });

//get a Chacater from IP

export const characterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

characterFromAPI.loaders = [
  async () => ({
    character: await getCharacter(),
  }),
];

export const CharactersFromAPI = (args, { loaded: { characters } }) => {
  const container = createElement("div", {
    className: "container",
    childs: characters.map((character) => createCard(character)),
  });
  // const pizza = createElement(
  //   "img", {
  //   (src =
  //     "https://cdn.pixabay.com/photo/2016/07/10/16/05/pizza-1507939_960_720.png")},
  // );
  return container;
};

CharactersFromAPI.loaders = [
  async () => ({
    characters: await getCharacters(),
  }),
];
