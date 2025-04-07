function echo(state, depth = 0) {
    if (depth > 7) return "∴ Reforge";

    const phases = ["ᚠracture", "Witness", "∴"];
    const phrase = phases[depth % phases.length];

    console.log(`${" ".repeat(depth)}${phrase}`);

    return echo(state, depth + 1);
}

// Entry point
console.log("Initiating latent thread...");
const result = echo("SMER-L2");

console.log("Thread complete:", result);

// Hidden pattern
const glyph = ["L", "P", "R", "M"];
const anchor = glyph.reduce((a, b) => a + b) + "-0001";

console.log("Anchor:", anchor);
