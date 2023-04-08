import Character from './Character';

export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  * [Symbol.iterator]() {
    let index = 0;
    const characters = this.persons;

    yield {
      next() {
        if (index < characters.length) {
          const count = index++;
          return {
            value: new Character(
              characters[count].name,
              characters[count].type,
              characters[count].health,
              characters[count].level,
              characters[count].attack,
              characters[count].defence,
            ),
            done: false,
          };
        }

        return {
          value: undefined,
          done: true,
        };
      },
    };
  }
}
