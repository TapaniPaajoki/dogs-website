const facts = [
  "A dog's sense of smell is roughly 10,000 to 100,000 times stronger than a human's.",
  "Every dog's nose print is unique, much like a human fingerprint.",
  "Dogs can understand around 150 to 250 words and gestures.",
  "The Basenji is known as the 'barkless dog' — it yodels instead.",
  "Greyhounds can reach speeds of about 70 km/h (45 mph).",
  "Dogs sweat mainly through the pads of their paws.",
  "Puppies are born deaf and blind; their senses develop in the first few weeks.",
  "Dogs have three eyelids, including one that helps keep the eye moist and protected.",
  "A wagging tail to the right tends to signal happiness; to the left, uncertainty.",
  "Dalmatian puppies are born completely white — their spots appear later."
];

const factEl = document.getElementById("fact");
let last = -1;

document.getElementById("fact-btn").addEventListener("click", () => {
  let i;
  do { i = Math.floor(Math.random() * facts.length); } while (i === last);
  last = i;
  factEl.textContent = facts[i];
});
