import Team from '../src/team';
import Character from '../src/character';

describe('Team', () => {
  let team;
  let character1;
  let character2;

  beforeEach(() => {
    team = new Team();
    character1 = new Character('Alice');
    character2 = new Character('Bob');
  });

  test('add добавляет персонажа', () => {
    team.add(character1);
    expect(team.members.has(character1)).toBe(true);
  });

  test('add выбрасывает ошибку при дубликате', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow('Персонаж уже в команде');
  });

  test('addAll добавляет всех уникальных', () => {
    team.addAll(character1, character2, character1);
    expect(team.members.size).toBe(2);
  });

  test('toArray возвращает массив', () => {
    team.add(character1);
    expect(team.toArray()).toEqual([character1]);
  });
});