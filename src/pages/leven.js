function levenshteinDistance(s1, s2) {
  const dp = Array(s1.length + 1)
    .fill(null)
    .map(() => Array(s2.length + 1).fill(0));

  for (let i = 0; i <= s1.length; i++) dp[i][0] = i;
  for (let j = 0; j <= s2.length; j++) dp[0][j] = j;

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1, // Eliminación
        dp[i][j - 1] + 1, // Inserción
        dp[i - 1][j - 1] + cost // Sustitución
      );
    }
  }

  return dp[s1.length][s2.length];
}

function findClosestWord(input, words) {
  return words.reduce((closest, word) =>
    levenshteinDistance(input, word) < levenshteinDistance(input, closest)
      ? word
      : closest
  );
}

// Prueba
const words = ["hola", "adios", "triste", "dante"];
console.log(findClosestWord("pinte", words)); // "adios"
