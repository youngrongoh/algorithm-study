const funcs = require('./3-1620');

funcs.forEach(runTest);

function runTest(func, i) {
  describe(func.name, () => {
    it('case1', () => {
      const input = `26 5
      Bulbasaur
      Ivysaur
      Venusaur
      Charmander
      Charmeleon
      Charizard
      Squirtle
      Wartortle
      Blastoise
      Caterpie
      Metapod
      Butterfree
      Weedle
      Kakuna
      Beedrill
      Pidgey
      Pidgeotto
      Pidgeot
      Rattata
      Raticate
      Spearow
      Fearow
      Ekans
      Arbok
      Pikachu
      Raichu
      25
      Raichu
      3
      Pidgey
      Kakuna`;
      expect(func(input)).toBe(`Pikachu\n26\nVenusaur\n16\n14`);
    });
  });
}