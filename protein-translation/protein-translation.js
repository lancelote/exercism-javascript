const PROTEINS = {
  AUG: "Methionine",
  UUU: "Phenylalanine",
  UUC: "Phenylalanine",
  UUA: "Leucine",
  UUG: "Leucine",
  UCU: "Serine",
  UCC: "Serine",
  UCA: "Serine",
  UCG: "Serine",
  UAU: "Tyrosine",
  UAC: "Tyrosine",
  UGU: "Cysteine",
  UGC: "Cysteine",
  UGG: "Tryptophan",
  UAA: "STOP",
  UAG: "STOP",
  UGA: "STOP",
};

export const translate = (rna) => {
  if (!rna) {
    return [];
  }

  const codons = rna.match(/.{1,3}/g);
  let proteins = [];

  for (let codon of codons) {
    let protein = PROTEINS[codon];

    if (protein === "STOP") {
      break;
    } else if (protein) {
      proteins.push(protein);
    } else {
      throw Error("Invalid codon");
    }
  }

  return proteins;
};
