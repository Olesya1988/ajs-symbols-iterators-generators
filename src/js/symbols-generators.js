export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  * [Symbol.iterator]() {
    const characters = this.persons;

    for (let i = 0; i < characters.length; i++) {
      yield characters[i];
    }
  }
}
