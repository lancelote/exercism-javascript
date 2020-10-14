const DNA_TO_RNA = {
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U",
}

export const toRna = dna => {
  let rna = [];
  for (let nucleotide of dna) {
    rna.push(DNA_TO_RNA[nucleotide]);
  }
  return rna.join("");
};
