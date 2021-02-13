import { createCard } from "../components/Cards/cards";
import { createElement } from "./createElement";

export type APICharacter = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: [string, string];
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
  birth: string;
};

// Convert a Chacter

function convertToCharacter(apiCharacter: APICharacter): Character {
  return {
    img: apiCharacter.img,
    name: apiCharacter.name,
    nick: apiCharacter.nickname,
    status: apiCharacter.status,
    birth: "Birthday: " + apiCharacter.birthday,
  };
}

export async function getCharacter(char_id: number) {
  const response = await fetch(
    `https://breakingbadapi.com/api/characters/${char_id}`
  );
  const result = (await response.json()) as APICharacter;
  const character = convertToCharacter(result);
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
