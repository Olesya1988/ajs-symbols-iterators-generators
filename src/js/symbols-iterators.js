export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  [Symbol.iterator]() {
    let index = 0;
    const characters = this.persons;

    return {
      next() {
        if (index < characters.length) {
          const count = index++;
          return {
            value: characters[count],
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
