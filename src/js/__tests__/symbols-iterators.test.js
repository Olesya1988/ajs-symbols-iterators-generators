import Team from '../symbols-iterators';

const bowman = {
  name: 'Лучник',
  type: 'Bowman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

const daemon = {
  name: 'Демон',
  type: 'Daemon',
  health: 100,
  level: 1,
  attack: 50,
  defence: 10,
};

const zombie = {
  name: 'Зомби',
  type: 'Zombie',
  health: 100,
  level: 1,
  attack: 40,
  defence: 15,
};

const magician = {
  name: 'Маг',
  type: 'Magician',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

const swordsman = {
  name: 'Фехтовальщик',
  type: 'Swordsman',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};

const undead = {
  name: 'Нежить',
  type: 'Undead',
  health: 100,
  level: 1,
  attack: 25,
  defence: 25,
};

const team = new Team([bowman, daemon, zombie, magician, swordsman, undead]);

test('test of iterator', () => {
  const arrayOfTeam = [];

  for (const item of team) {
    arrayOfTeam.push(item);
  }

  const correct = [
    {
      attack: 40, defence: 10, health: 100, level: 1, name: 'Лучник', type: 'Bowman',
    },
    {
      attack: 50, defence: 10, health: 100, level: 1, name: 'Демон', type: 'Daemon',
    },
    {
      attack: 40, defence: 15, health: 100, level: 1, name: 'Зомби', type: 'Zombie',
    },
    {
      attack: 10, defence: 40, health: 100, level: 1, name: 'Маг', type: 'Magician',
    },
    {
      attack: 40, defence: 10, health: 100, level: 1, name: 'Фехтовальщик', type: 'Swordsman',
    },
    {
      attack: 25, defence: 25, health: 100, level: 1, name: 'Нежить', type: 'Undead',
    },
  ];

  expect(arrayOfTeam).toEqual(correct);
});
