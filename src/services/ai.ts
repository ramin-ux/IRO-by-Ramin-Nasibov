export interface DailyPrediction {
  colorName: string;
  hexCode: string;
  prediction: string;
  typographyStyle: string;
}

type Vibe = 'editorial' | 'expressive' | 'brutalist' | 'avant-garde' | 'technical' | 'minimalist';

const COLORS: { name: string, hex: string, vibe: Vibe }[] = [
  // Original subset
  { name: "Void", hex: "#0B0C10", vibe: "brutalist" },
  { name: "Burnt Sage", hex: "#5C6B5A", vibe: "editorial" },
  { name: "Digital Lavender", hex: "#E6E6FA", vibe: "technical" },
  { name: "Oatmilk", hex: "#F3EDE4", vibe: "minimalist" },
  { name: "Electric Cyan", hex: "#00FFFF", vibe: "expressive" },
  { name: "Neon Peach", hex: "#FF9966", vibe: "expressive" },
  { name: "Industrial Chrome", hex: "#D1D5DB", vibe: "technical" },
  { name: "Chartreuse", hex: "#DFFF00", vibe: "avant-garde" },
  { name: "Absinthe", hex: "#7E995E", vibe: "avant-garde" },
  { name: "Concrete", hex: "#8F8F8F", vibe: "brutalist" },
  { name: "Blood Orange", hex: "#CC3333", vibe: "brutalist" },
  { name: "Midnight Aura", hex: "#191970", vibe: "editorial" },
  { name: "Raw Silk", hex: "#F4ECD8", vibe: "minimalist" },
  { name: "Matcha", hex: "#C5D1A5", vibe: "minimalist" },
  { name: "Obsidian", hex: "#111111", vibe: "brutalist" },
  { name: "Crimson", hex: "#DC143C", vibe: "expressive" },
  { name: "Sunkissed", hex: "#FFD700", vibe: "minimalist" },
  { name: "Cobalt", hex: "#0047AB", vibe: "editorial" },
  { name: "Rust", hex: "#B7410E", vibe: "brutalist" },
  { name: "Acid Green", hex: "#8CBF26", vibe: "technical" },
  { name: "Terracotta", hex: "#E2725B", vibe: "editorial" },
  { name: "Bone", hex: "#E3DAC9", vibe: "minimalist" },
  { name: "Onyx", hex: "#353839", vibe: "brutalist" },
  { name: "Azure", hex: "#007FFF", vibe: "technical" },
  { name: "Rosewood", hex: "#65000B", vibe: "editorial" },
  { name: "Marigold", hex: "#EAA221", vibe: "expressive" },
  { name: "Slate", hex: "#708090", vibe: "minimalist" },
  { name: "Violet", hex: "#7F00FF", vibe: "avant-garde" },
  { name: "Amber", hex: "#FFBF00", vibe: "editorial" },
  { name: "Malachite", hex: "#0BDA51", vibe: "avant-garde" },
  { name: "Lapis", hex: "#26619C", vibe: "editorial" },
  { name: "Alabaster", hex: "#F2F0E6", vibe: "minimalist" },
  { name: "Vantablack", hex: "#000000", vibe: "brutalist" },
  { name: "Blush", hex: "#DE5D83", vibe: "minimalist" },
  { name: "Cyber Yellow", hex: "#FFD300", vibe: "technical" },
  { name: "Ethereal Blue", hex: "#B6D0E2", vibe: "minimalist" },
  { name: "Liquid Silver", hex: "#C0C0C0", vibe: "avant-garde" },
  { name: "Galactic Purple", hex: "#614051", vibe: "technical" },
  { name: "Phantom Red", hex: "#9E1B1B", vibe: "brutalist" },
  { name: "Tuscan Sun", hex: "#ECA332", vibe: "expressive" },
  { name: "Abyss", hex: "#000B18", vibe: "brutalist" },
  { name: "Lotus", hex: "#EAD6E8", vibe: "editorial" },
  { name: "Toxic Green", hex: "#39FF14", vibe: "expressive" },
  { name: "Cashmere", hex: "#D1B399", vibe: "minimalist" },
  { name: "Glitch Blue", hex: "#0000FF", vibe: "technical" },
  { name: "Burnished Gold", hex: "#B49042", vibe: "avant-garde" },
  { name: "Deep Garnet", hex: "#733635", vibe: "editorial" },
  { name: "Asphalt", hex: "#1C1C1C", vibe: "brutalist" },
  // Extended massive subset (total 78 colors)
  { name: "Acid Wash", hex: "#9ACDBA", vibe: "technical" },
  { name: "Brutal Concrete", hex: "#5C5C5C", vibe: "brutalist" },
  { name: "Vaporwave Pink", hex: "#FF71CE", vibe: "expressive" },
  { name: "Toxic Sludge", hex: "#5F7400", vibe: "avant-garde" },
  { name: "Off-White", hex: "#F8F9FA", vibe: "minimalist" },
  { name: "Oxblood", hex: "#4A0404", vibe: "editorial" },
  { name: "Velvet", hex: "#4A0036", vibe: "editorial" },
  { name: "Dusty Rose", hex: "#DCAE96", vibe: "minimalist" },
  { name: "Pistachio", hex: "#93C572", vibe: "minimalist" },
  { name: "Holographic", hex: "#B4C4D1", vibe: "technical" },
  { name: "Neon Green", hex: "#00FF00", vibe: "expressive" },
  { name: "Synthwave", hex: "#4B0082", vibe: "avant-garde" },
  { name: "Molten Lava", hex: "#B53300", vibe: "brutalist" },
  { name: "Arctic Ice", hex: "#E8F4F8", vibe: "minimalist" },
  { name: "Chalk", hex: "#F6F4F1", vibe: "minimalist" },
  { name: "Graphite", hex: "#41424C", vibe: "brutalist" },
  { name: "Bone White", hex: "#F9F6EE", vibe: "minimalist" },
  { name: "Crimson Sand", hex: "#CC7357", vibe: "editorial" },
  { name: "Electric Indigo", hex: "#6F00FF", vibe: "technical" },
  { name: "Matte Black", hex: "#28282B", vibe: "brutalist" },
  { name: "Iridescent", hex: "#AB90C2", vibe: "avant-garde" },
  { name: "Cyber Mango", hex: "#FFB000", vibe: "expressive" },
  { name: "Burnt Orange", hex: "#CC5500", vibe: "expressive" },
  { name: "Muted Gold", hex: "#C5B358", vibe: "editorial" },
  { name: "Fossil", hex: "#D8D0C1", vibe: "minimalist" },
  { name: "Ultramarine", hex: "#120A8F", vibe: "editorial" },
  { name: "Laser Lemon", hex: "#FFFF66", vibe: "expressive" },
  { name: "Carbon", hex: "#333333", vibe: "brutalist" },
  { name: "Barium", hex: "#E5E4D7", vibe: "minimalist" },
  { name: "Plutonium", hex: "#8AF32C", vibe: "technical" },
  // Uncharted Additions (Over 60+ new variations)
  { name: "Mercury", hex: "#E6E8FA", vibe: "minimalist" },
  { name: "Liquid Mercury", hex: "#BFC1C2", vibe: "technical" },
  { name: "Vintage Mauve", hex: "#673147", vibe: "editorial" },
  { name: "Dark Cherry", hex: "#4A0404", vibe: "editorial" },
  { name: "Silicon", hex: "#9BA1A6", vibe: "technical" },
  { name: "Poison Ivy", hex: "#50C878", vibe: "avant-garde" },
  { name: "Glitch Red", hex: "#FF003C", vibe: "expressive" },
  { name: "White Noise", hex: "#F2F2F2", vibe: "minimalist" },
  { name: "Deep Space", hex: "#0c1445", vibe: "brutalist" },
  { name: "Crepe", hex: "#F3E1CE", vibe: "minimalist" },
  { name: "Plasma", hex: "#FF0090", vibe: "technical" },
  { name: "Linen", hex: "#FAF0E6", vibe: "minimalist" },
  { name: "Sepia", hex: "#704214", vibe: "editorial" },
  { name: "Titanium", hex: "#878681", vibe: "brutalist" },
  { name: "Chrome", hex: "#D8D8D8", vibe: "technical" },
  { name: "Neon Cyan", hex: "#00FFF5", vibe: "expressive" },
  { name: "Tar", hex: "#111111", vibe: "brutalist" },
  { name: "Oxford Blue", hex: "#002147", vibe: "editorial" },
  { name: "Saffron", hex: "#F4C430", vibe: "expressive" },
  { name: "Lithium", hex: "#DFDED8", vibe: "technical" },
  { name: "Mustard", hex: "#FFDB58", vibe: "avant-garde" },
  { name: "Sea Foam", hex: "#9FE2BF", vibe: "minimalist" },
  { name: "Hunter Green", hex: "#355E3B", vibe: "editorial" },
  { name: "Cinder", hex: "#242424", vibe: "brutalist" },
  { name: "Pomegranate", hex: "#C0392B", vibe: "expressive" },
  { name: "Antique Brass", hex: "#CD9575", vibe: "editorial" },
  { name: "LED Blue", hex: "#00F0FF", vibe: "technical" },
  { name: "Whisper", hex: "#EAE6E1", vibe: "minimalist" },
  { name: "Fiber Optic", hex: "#A8FF00", vibe: "avant-garde" },
  { name: "Merlot", hex: "#730039", vibe: "editorial" },
  { name: "Iron", hex: "#63666A", vibe: "brutalist" },
  { name: "Coral Reef", hex: "#FF7F50", vibe: "expressive" },
  { name: "Muted Clay", hex: "#D08A7C", vibe: "minimalist" },
  { name: "Acid Fuchsia", hex: "#F000FF", vibe: "avant-garde" },
  { name: "Neon Violet", hex: "#8F00FF", vibe: "expressive" },
  { name: "Cold Steel", hex: "#71797E", vibe: "brutalist" },
  { name: "Porcelain", hex: "#FFFFF0", vibe: "minimalist" },
  { name: "Imperial Red", hex: "#ED2939", vibe: "editorial" },
  { name: "Bismuth", hex: "#A98EAA", vibe: "technical" },
  { name: "Burnt Ash", hex: "#3B3C36", vibe: "brutalist" },
  { name: "Electric Violet", hex: "#8F00FF", vibe: "expressive" },
  { name: "Olivine", hex: "#9AB973", vibe: "avant-garde" },
  { name: "Vampire", hex: "#080808", vibe: "brutalist" },
  { name: "Macadamia", hex: "#E8D3B9", vibe: "minimalist" },
  { name: "Radioactive", hex: "#BFFF00", vibe: "technical" },
  { name: "Vintage Teal", hex: "#008080", vibe: "editorial" },
  { name: "Mango", hex: "#FDB813", vibe: "expressive" },
  { name: "Slate Grey", hex: "#708090", vibe: "minimalist" },
  { name: "Pitch", hex: "#000000", vibe: "brutalist" },
  { name: "Amber Glass", hex: "#FFBF00", vibe: "editorial" },
  { name: "Uranium", hex: "#00FF22", vibe: "avant-garde" },
  { name: "Cobweb", hex: "#E6E6FA", vibe: "minimalist" },
  { name: "Gunmetal", hex: "#2A3439", vibe: "brutalist" },
  { name: "Matrix Green", hex: "#00FF41", vibe: "technical" },
  { name: "Rouge", hex: "#A94064", vibe: "editorial" },
  { name: "Electric Pink", hex: "#FF0055", vibe: "expressive" },
  { name: "Limestone", hex: "#E1D9D1", vibe: "minimalist" },
  { name: "Carbon Fiber", hex: "#2B2B2B", vibe: "brutalist" },
  { name: "Neon Magenta", hex: "#FF00FF", vibe: "technical" },
  { name: "Tangerine", hex: "#F28500", vibe: "expressive" },
  { name: "Dust", hex: "#E5E4E2", vibe: "minimalist" },
  { name: "Oxidized", hex: "#7F8C8D", vibe: "brutalist" },
  { name: "Sapphire Deep", hex: "#0F52BA", vibe: "editorial" },
  { name: "Hologram", hex: "#E1E1E6", vibe: "avant-garde" },
  { name: "Blood Moon", hex: "#8A0303", vibe: "avant-garde" },
  { name: "Silver Leaf", hex: "#C0C0C0", vibe: "minimalist" },
  { name: "Obsidian Shard", hex: "#0D0D0D", vibe: "brutalist" }
];

const PREDICTIONS: string[] = [
  // Original
  "Your obsession with control is masking your exhaustion. Let the system crash.",
  "Stop performing for an empty room. They aren't watching.",
  "Silence is an aesthetic choice. Weaponize it today.",
  "You are outgrowing people and apologizing for it. Stop.",
  "The friction you feel is just reality reformatting.",
  "They misinterpret your boundaries as distance. Let them.",
  "Nostalgia is a trap. Stay in the present.",
  "Stop explaining yourself to people committed to misunderstanding you.",
  "You are not required to set yourself on fire to keep others warm.",
  "The closure you need is the apology you will never get.",
  "Lower your expectations and raise your boundaries.",
  "Acknowledge the ghost, then walk through it.",
  "You can't heal in the same environment that broke you. Plan an exit.",
  "Validation is a scam. Approve of yourself.",
  "Your loyalty is becoming a liability. Audit your circle.",
  "Stop waiting for the storm to pass. Learn to operate in the rain.",
  "The resistance you feel is a signal, not a detour.",
  "Unsubscribe from the timeline they gave you.",
  "You are carrying weight that isn't yours. Drop it.",
  "Not every action requires an immediate reaction. Pause.",
  "If it costs you your peace, it is too expensive.",
  "Outgrow the narrative that you are hard to love.",
  "Distance is the most respectful response to disrespect.",
  "Don't scale back your ambition to make them comfortable.",
  "You are the architect of your own delay. Move.",
  "Romance your solitude. It is the greatest luxury.",
  "Apologizing when you did nothing wrong is self-betrayal.",
  "Your absence is the only answer they deserve.",
  "Stop romanticizing potential. Look at the reality in front of you.",
  "The fear of missing out is nothing compared to the fear of remaining the same.",
  "Evolve in private. They don't need to see the process.",
  "Let the bridge burn. The light will guide your way forward.",
  "Stop bargaining for a seat at tables you already outgrew.",
  "A quiet exit speaks louder than an explosive argument.",
  "The chapter ended three pages ago. Stop re-reading it.",
  "You owe nothing to the version of you they want to remember.",
  "Their discomfort with your growth is not your problem.",
  "You are surviving, not thriving. Identify the difference.",
  "Friction is heat. Heat is energy. Direct it.",
  "Your isolation is preparation, not punishment.",
  // Extended massive subset (total 70 predictions)
  "You are romanticizing a version of them that never existed.",
  "The anxiety is a compass. Follow it to the truth.",
  "Comfort is the enemy of your aesthetic. Destroy it.",
  "You are playing a supporting role in your own life to avoid criticism.",
  "Rejection is just universe-level redirection. Keep moving.",
  "Stop waiting for the applause. The show is already over.",
  "Your empathy is becoming toxic. Stop absorbing their chaos.",
  "Aesthetically pleasing, emotionally unavailable. Fix the balance.",
  "You are consuming to avoid creating. Put the screen down.",
  "You are addicted to the struggle. Step back and let it be easy.",
  "They didn't change; your perception of them finally became accurate.",
  "Forgive them, but never give them back their access. Ever.",
  "Your perfectionism is just procrastination in a designer suit.",
  "Start saying no to things that don't excite you immediately.",
  "You can't decode mixed signals. A 'maybe' is a definitive 'no'.",
  "The silence is loud. Sit in it and actually listen.",
  "Protect your energy. Not everyone deserves your frequency.",
  "Let them misunderstand you. It's not your job to translate yourself.",
  "You are a masterpiece, act like it. Stop accepting discounts.",
  "Stop performing nostalgia. Build the future.",
  "Take the space you occupy. Stop shrinking to fit their lens.",
  "The hardest reset always brings the clearest vision.",
  "Your peace is worth significantly more than their validation.",
  "Cut the dead weight. It's slowing your ascent to the top.",
  "You are addicted to fixing people who secretly love being broken.",
  "Stop asking for permission from people who have no authority over you.",
  "Overthinking is just a glitch in your software. Reboot.",
  "The discomfort of growth is infinitely better than the quiet agony of staying the same.",
  "You don't need closure. You just need to close the door.",
  "Stop making eye contact with your past."
];

const FONTS: Record<Vibe, string[]> = {
  'editorial': ['playfair', 'cormorant', 'bodoni', 'prata', 'italiana'],
  'expressive': ['dmserif', 'fraunces', 'cinzel'],
  'brutalist': ['spacegrotesk', 'anton', 'archivoblack'],
  'avant-garde': ['syne', 'syncopate'],
  'technical': ['spacemono', 'jetbrains', 'sharetech'],
  'minimalist': ['outfit', 'manrope', 'jakarta', 'dmsans']
};

export async function generateDailyColor(birthday: Date): Promise<DailyPrediction> {
  const today = new Date();
  
  // Deterministic seed based on Birthday + Today
  // Multiplying ensures a robust psychological offset so tomorrow is fully different for the exact same birthday
  const seed = birthday.getTime() + (today.getFullYear() * 10000 + today.getMonth() * 100 + today.getDate()) * 99999;
  
  // Simple seeded pseudo-random number generator
  const seededRNG = (max: number, salt: number) => {
    const x = Math.sin(seed + salt) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
  };

  const selectedColor = COLORS[seededRNG(COLORS.length, 1)];
  const selectedPrediction = PREDICTIONS[seededRNG(PREDICTIONS.length, 2)];
  
  const vibeFonts = FONTS[selectedColor.vibe];
  const selectedFont = vibeFonts[seededRNG(vibeFonts.length, 3)];

  // We add a tiny artificial delay to simulate "thinking" - it builds anticipation perfectly
  // It is 400ms, making it feel instant but high-quality and satisfying.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        colorName: selectedColor.name,
        hexCode: selectedColor.hex,
        prediction: selectedPrediction,
        typographyStyle: selectedFont
      });
    }, 400);
  });
}
