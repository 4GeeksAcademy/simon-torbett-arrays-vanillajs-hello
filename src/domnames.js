var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];

function DomainNameGenerator(pronoun, adj, noun) {
  let NombresVariados = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let a = 0; a < adj.length; a++) {
      for (let b = 0; b < noun.length; b++) {
        NombresVariados.push(pronoun[i] + adj[a] + noun[b] + ".com");
        NombresVariados.push(pronoun[i] + adj[a] + noun[b] + ".org");
        NombresVariados.push(pronoun[i] + adj[a] + noun[b] + ".cl");
      }
    }
  }
  return NombresVariados;
}
console.log(DomainNameGenerator(pronoun, adj, noun));

