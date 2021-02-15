// import { createCard } from "../components/Cards/cards";
// import { createElement } from "./createElement";

export type APICharacter = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string;
  img: string;
  status: string;
  nickname: string;
  portrayed: string;
};

export type Character = {
  img: string;
  name: string;
  nick: string;
  status: string;
  occupation: string;
};

// Convert a Chacter

function convertToCharacter(apiCharacter: APICharacter): Character {
  return {
    img: apiCharacter.img,
    name: apiCharacter.name,
    nick: apiCharacter.nickname,
    status: apiCharacter.status,
    occupation: "Occupation: " + apiCharacter.occupation,
  };
}

export async function getCharacter() {
  const response = await fetch(`https://breakingbadapi.com/api/characters/1`);
  const result = (await response.json()) as APICharacter[];
  const character = convertToCharacter(result[0]);
  return character;
}

export async function getCharacters(name?: string) {
  const response = await fetch(
    `https://breakingbadapi.com/api/characters/${name ? `?name=$(name)` : ""}`
  );
  const result = (await response.json()) as APICharacter;
  const characters = result.map((apiCharacter) =>
    convertToCharacter(apiCharacter)
  );
  return characters;
}
