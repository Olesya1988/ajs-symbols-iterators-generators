import Team from '../symbols-generators';

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

test('test of generator', () => {
  const team = new Team([bowman, daemon, zombie]);
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
  ];

  expect(arrayOfTeam).toEqual(correct);
});
