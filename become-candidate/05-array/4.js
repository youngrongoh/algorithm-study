function solve(answers) {
  const patterns = [
    '12345',
    '21232425',
    '3311224455'
  ];

  const counts = patterns.map((pattern) =>
    answers.reduce((sum, answer, i) => {
      const isCorrect = answer === Number(pattern.at(i % pattern.length));
      return sum + (isCorrect ? 1 : 0);
    }, 0)
  );

  const result = counts.reduce(([max, indexes], count, i) => {
    if (max < count) {
      return [count, [i]];
    } else if (max === count){
      return [max, [...indexes, i]]
    } else {
      return [max, indexes];
    }
  }, [0, []]);

  return result[1].map((i) => i + 1);
}

module.exports = [ solve ];