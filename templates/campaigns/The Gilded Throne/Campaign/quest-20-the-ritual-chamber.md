# Quest 20: The Ritual Chamber

**Level:** 10 | **Type:** Story | **Style:** Combat/Puzzle hybrid

Below the throne room of the Council Citadel, the summoning ritual blazes in a vast subterranean chamber carved from living rock. A portal to the Nine Hells is half-open — a wound in reality, bleeding heat and sulphurous light. Four anchor points sustain the ritual, each bound to the portal by chains of Infernal energy. The anchors must be disrupted to collapse the portal, but each requires a different approach: brute force, arcane knowledge, divine power, or sheer nerve.

This quest is a puzzle-combat hybrid. The party must solve four distinct challenges while fighting off fiendish defenders. The anchor puzzles reward different party members' strengths — strength, arcana, religion, and willpower all have their moment.

---

The staircase from the throne room descends in a tight spiral, the stonework changing from polished marble to rough-hewn basalt. The air grows hotter with every step. A dull orange glow pulses from below, and the walls are warm to the touch. When you reach the bottom, the passage opens into an enormous vaulted chamber — easily a hundred feet across, with a ceiling lost in shadow and smoke.

At the centre of the chamber, a column of fire twists upward from a ritual circle carved into the floor. Within the fire, reality is torn open — you can see through the flames into a landscape of iron and ash, where distant shapes move against a burning sky. The Nine Hells. The portal is not yet fully open, but it is close. Infernal energy pulses outward from the circle in waves, making your teeth ache and your eyes water.

Four anchor points are spaced evenly around the ritual circle, each connected to the portal by a crackling line of red-black energy. Each anchor glows with its own light, and each is guarded.

## A1. The Chamber Overview

The ritual chamber is roughly circular, 100 feet in diameter. The portal occupies the centre — a 20-foot-wide column of fire and distorted space. The four anchors are positioned at the cardinal points, each 30 feet from the portal's edge and connected to it by a visible conduit of Infernal energy.

> The heat is oppressive. Sweat beads on your skin the moment you step off the staircase. The floor is carved with concentric rings of Infernal script that pulse with dull red light, and the air smells of hot metal and brimstone. Somewhere in the fire, something screams — a thin, high sound that might be a soul or might be the portal itself straining at its boundaries.

**The defenders:** Two barbed devils [BARBED1] [BARBED2] patrol the chamber, each stationed near an anchor. An erinyes [ERINYES1] hovers near the ceiling above the portal, wings spread, observing. She does not engage immediately — she considers herself above dealing with mortals and waits to see if the barbed devils can handle the intrusion.

**NPC allies:** Bearded devils and lemures pour from the portal at irregular intervals, but allied NPCs (resistance fighters, the Valiant Company if recruited, Brokka's dockers) are holding them at the chamber entrance. The party can hear the sounds of fighting behind them. The NPCs cannot help with the anchors or the erinyes — they are fully occupied keeping the lesser fiends from overrunning the staircase.

**The erinyes' behaviour:** She engages after the party disrupts 2 of the 4 anchors. When she descends, she announces herself.

> A voice cuts through the roar of the portal — cold, clear, and contemptuous. "Enough." The winged figure drops from the ceiling, landing between you and the third anchor. She is beautiful and terrible — bronze-skinned, black-winged, wearing armour that gleams like dark gold. A longbow is slung across her back, and a longsword rests at her hip. "Lord Sorn's work will not be undone by rats in the cellar."

**The barbed devils' behaviour:** Each barbed devil stays near its assigned anchor and attacks anyone who approaches within 15 feet. They do not pursue party members who retreat beyond that range — their orders are to guard the anchors, not chase intruders. The party faces one barbed devil at a time rather than both simultaneously.

**Combat pacing:** The party can approach the anchors in any order. Each anchor encounter is a contained puzzle with a barbed devil guarding it. The erinyes joining after 2 anchors creates the climactic moment — the party must solve the remaining puzzles while fighting a CR 12 opponent.

Connected to:

- The staircase: Back up to the throne room (Quest 21 follows after the anchors are disrupted).
- A2-A5: The four anchor points, spaced around the chamber.

```yaml
npcs:
  - id: BARBED1
    type: Barbed Devil
    description: A hulking fiend covered in sharp barbs and hooks, its skin like rusted iron. It crouches near its assigned anchor, eyes glowing with sullen malice. It fights with claws and tail, and its barbed hide damages anyone who strikes it in melee.
  - id: BARBED2
    type: Barbed Devil
    description: Identical to its counterpart — a barbed devil stationed at another anchor point. It does not coordinate with the other devil; each guards its post independently.
  - id: ERINYES1
    name: Zarieth
    type: Erinyes
    description: A fallen angel in dark golden armour with vast black-feathered wings. Her face is coldly beautiful, her expression one of absolute disdain. She carries a +3 longbow and wears winged armour. She serves Sorn not out of loyalty but because his portal serves her own interests — a foothold on the Material Plane is valuable to any fiend with ambition. She fights with tactical precision, targeting spellcasters and anyone carrying the blessed blade first.
    abilityScores:
      str: 18
      dex: 16
      con: 18
      int: 14
      wis: 14
      cha: 18
    ac: 18
    maxHp: 153
    speed: 30 (fly 60)
    skills:
      - perception
      - insight
```

## A2. Anchor 1 — The Pillar of Chains

The northern anchor is a ten-foot-tall pillar of black iron, wrapped in heavy chains that pulse with Infernal energy. The chains are anchored to the floor at four points, and each link is etched with tiny Infernal runes. The conduit of energy running from the pillar to the portal is thick and steady — this anchor is bearing a significant portion of the ritual's weight.

> The pillar hums with a deep vibration you can feel in your bones. The chains are as thick as your forearm, each link inscribed with script that shifts and writhes when you look at it directly. The iron is hot — not enough to burn, but enough to make holding it uncomfortable. The barbed devil crouching at its base snarls as you approach.

**BARBED1 guards this anchor.** It attacks anyone who comes within 15 feet of the pillar.

**Disrupting the anchor:**

- **DC 20 Strength (Athletics) check:** Physically wrench the chains free from their floor anchors. The chains resist — they tighten and pull back — but raw force can tear them loose. On a success, the chains snap free with a shriek of tearing metal, and the pillar cracks down the centre. The energy conduit flickers and dies.
- **50 points of damage to the pillar:** The pillar has AC 17 and is immune to fire and poison damage. It is vulnerable to radiant damage. Dealing 50 total damage shatters it. When the pillar breaks, the chains lash outward — everyone within 10 feet must make a DC 14 Dexterity saving throw or take 2d6 slashing damage from whipping chain links.
- **Creative alternatives:** A character who uses Enlarge/Reduce to shrink the pillar reduces the Strength DC to 15. A character who heats the iron with a sustained fire spell (e.g., Heat Metal for 3 rounds on the floor anchors) weakens the moorings, reducing the Strength DC to 16. Dispel Magic (DC 15) suppresses the runes for 1 round, during which the Strength DC drops to 14.

**When disrupted:** The pillar cracks and topples. The conduit of energy snaps, and the portal visibly contracts — the flames dim slightly. One quarter of the ritual's power is gone.

Connected to:

- A1: The main chamber.

## A3. Anchor 2 — The Infernal Inscription

The eastern anchor is a broad stone slab set into the floor, covered in lines of Infernal script that glow with a steady amber light. The text is a long incantation — the ritual formula that binds this anchor to the portal. The script radiates outward from a central glyph in concentric circles, and the air above it shimmers with heat distortion.

> The stone slab is covered in writing — line after line of angular Infernal script, spiralling outward from a central symbol that hurts to look at directly. The letters glow like embers, and you can feel the words pressing against your mind, trying to be understood. The script is not simply written — it is alive, the letters shifting positions in a slow, deliberate pattern.

**BARBED2 guards this anchor** (or BARBED1, if the party approaches this anchor first).

**Disrupting the anchor:**

- **DC 16 Intelligence (Arcana) check:** The key is that the incantation must be read backwards. A character who studies the inscription and succeeds on the check realises that the script is a binding formula — and like all binding formulae, it contains its own undoing. Reading the central glyph's components in reverse order unravels the enchantment. The character must speak the reversed incantation aloud (a full action), during which the script fights back — the reader must make a DC 13 Constitution saving throw or take 2d8 psychic damage from the inscription resisting dissolution. On a success, the glyph cracks and the script goes dark.
- **Aldous's texts:** If the party recovered Brother Aldous's theological texts (from Quest 10 or Quest 14), a character who has read them gains advantage on the Arcana check. The texts contain a passage about Infernal binding formulae and their inherent reversibility — Aldous wrote extensively about the weaknesses of fiendish magic.
- **Brute force alternative:** The slab can be physically destroyed (AC 15, 40 HP, immune to fire and poison, vulnerable to radiant). However, destroying the slab without reading the counter-incantation causes it to discharge — everyone within 20 feet must make a DC 15 Wisdom saving throw or be stunned until the end of their next turn as fragments of the incantation assault their minds.

**When disrupted:** The amber glow drains from the script like water running downhill, and the stone cracks. The conduit of energy collapses, and the portal contracts further.

Connected to:

- A1: The main chamber.

## A4. Anchor 3 — The Sacrificial Flame

The southern anchor is a bronze brazier, five feet across, filled with pale blue-white fire that burns without fuel. Within the flames, shapes move — faces, hands, mouths open in silent screams. These are souls, trapped in the fire and used as fuel for the ritual. The brazier sits on a raised dais of black marble, and the heat from the flames is intense but strangely localised — beyond five feet, the temperature drops sharply.

> The fire burns white-blue and makes no sound. But the shapes inside it are unmistakable — faces pressing against an invisible barrier, hands reaching outward, mouths forming words you cannot hear. There are dozens of them, layered over each other, trapped. The fire doesn't warm the air around it. It's cold — a cold that seeps into your chest and makes your heart stutter.

**No barbed devil guards this anchor** (both are at anchors 1 and 2). Instead, the fire itself is the defence — approaching within 5 feet of the brazier without protection deals 2d6 necrotic damage per round (the trapped souls lash out instinctively, draining life force from the living).

**Disrupting the anchor:**

- **Radiant damage spell:** Any spell that deals radiant damage, cast directly into the brazier, disrupts the soul trap. The radiant energy burns away the Infernal bindings and frees the trapped souls. The fire turns golden, the faces relax, and the souls stream upward through the ceiling and are gone. The brazier cracks and the conduit dies. The minimum spell level is 1st — even Sacred Flame or a Guiding Bolt is sufficient.
- **DC 16 Intelligence (Religion) check:** A character who succeeds understands the nature of the soul trap and can perform a brief consecration rite (1 minute, requiring a holy symbol or holy water) that achieves the same result as a radiant damage spell. The rite is a prayer of release — speaking the souls' freedom in the name of any good-aligned deity.
- **Holy water:** Pouring a flask of holy water into the brazier frees the souls automatically, no check required. The fire hisses, turns gold, and dies.

**When disrupted:** The souls are released — a moment of eerie beauty as translucent figures rise from the flames, their expressions shifting from anguish to peace before they fade. Any character with a connection to the divine (cleric, paladin, or devout background) feels a surge of warmth — they gain 2d6 temporary hit points that last for 1 hour.

**Roleplaying note:** This anchor is the most emotionally charged. The DM should describe the trapped souls with specificity — a child clutching a doll, an elderly man with his hands pressed together in prayer, a young woman with a look of defiant fury. These are Ashenmere citizens who disappeared. If the party completed Quest 7 (The Disappeared), they recognise some of the faces.

Connected to:

- A1: The main chamber.

## A5. Anchor 4 — The Mirror of the Nine Hells

The western anchor is a full-length mirror — eight feet tall, framed in tarnished silver, standing unsupported on the chamber floor. The mirror does not reflect the chamber. Instead, it shows a landscape of fire and iron — the same view visible through the portal, but sharper, clearer, and closer. Shapes move in the reflection — tall, horned figures walking across a blasted plain. The mirror is the ritual's eye, the fixed point through which the portal locks onto the Nine Hells.

> The mirror stands alone, impossibly balanced on the uneven floor. Its silver frame is tarnished black, and the glass shows nothing of this chamber — instead, you see a plain of cracked iron stretching to a burning horizon, where a fortress of black stone rises against a sky of perpetual flame. Figures move across the plain — devils, hundreds of them, marching in ordered columns. They are not looking at you. Not yet.

**No barbed devil guards this anchor.** The mirror's defence is psychological — anyone who looks into it for more than a few seconds must make a DC 13 Wisdom saving throw or become frightened of the mirror for 1 minute (the sheer scale of what waits on the other side is overwhelming). A frightened character can still act but cannot willingly move closer to the mirror.

**Disrupting the anchor:**

- **Shatter the mirror:** Any attack that deals damage to the mirror (AC 11, 5 HP) breaks it. However, shattering the mirror triggers a psychic backlash — everyone within 20 feet must make a DC 15 Wisdom saving throw or take 4d6 psychic damage as the connection between planes snaps and the broken glass reflects a thousand fractured images of the Nine Hells directly into their minds. On a success, half damage. Covering one's eyes before the mirror breaks grants advantage on the save.
- **Turning the mirror:** A DC 14 Strength check can physically turn the mirror to face the portal instead of outward. This creates a feedback loop — the mirror reflects the portal back at itself, and the anchor destabilises. The mirror cracks on its own after 1 round, but the psychic backlash is reduced (DC 12 Wisdom save, 2d6 psychic damage) because the energy is redirected inward.
- **Covering the mirror:** A cloak, blanket, or similar covering thrown over the mirror suppresses the anchor for as long as the covering remains. The conduit flickers and weakens but does not die. This buys time but does not permanently disrupt the anchor. The covering must be held in place — the mirror vibrates and tries to shake it off. A DC 12 Strength check each round to maintain the covering, or simply destroy the mirror while it is covered (no psychic backlash if the glass cannot reflect).

**When disrupted:** The mirror shatters, and for one terrible instant, every creature in the chamber sees the Nine Hells with perfect clarity — the fortresses, the legions, the burning sky. Then the vision is gone, and the last conduit dies.

Connected to:

- A1: The main chamber.

---

## The Portal Collapses

When all four anchors are disrupted, the portal convulses. The column of fire contracts, then expands violently — a shockwave of heat and Infernal energy that knocks everyone prone (DC 13 Strength saving throw to remain standing) and deals 2d6 fire damage. The portal does not close entirely — it shrinks to a flickering wound in space, five feet across, still burning but no longer stable enough to allow passage. The ritual is broken, but the portal will not fully close while Sorn lives.

> The four conduits are dead. The ritual circle's inscriptions flicker and go dark. The portal screams — a sound like tearing metal amplified a thousandfold — and contracts violently. The column of fire collapses inward, shrinking from twenty feet to five, and the images of the Nine Hells within it blur and fragment. The portal is not closed. But it is wounded, and nothing is coming through it any more.

The erinyes, if still alive, snarls and retreats through the weakened portal — she has no loyalty to Sorn and will not die for his failed gambit. If the party killed her, her body dissolves into black smoke and is drawn into the portal.

**If Zarieth retreated:** She is gone. The party may encounter her again if the campaign continues beyond Ashenmere, but she is no longer a threat here.

**Hidden find — the portal as banishment conduit:** A DC 17 Intelligence (Arcana) check reveals that the weakened portal is unstable in both directions — it can pull things in as well as let them out. For exactly 1 round after the anchors collapse, the portal can be used as a banishment conduit. A DC 20 combined Arcana + Athletics check (one character makes each check, both must succeed in the same round) can force a fiend within 10 feet of the portal into it — banishing them to the Nine Hells. This works on Sorn. If the party has lost the blessed Blade of Tyr's Witness, this is the failsafe — they can banish Sorn through the portal instead of slaying him with a blessed weapon. The DM should not volunteer this information, but if a player asks whether the portal can be used offensively, the Arcana check reveals the possibility.

## After the Anchors

The chamber falls quiet except for the hiss of the diminished portal. The allied NPCs at the entrance report that the flow of lesser devils has stopped — the bearded devils and lemures that were pouring through have ceased.

Brokka (if present) kicks a dead lemure aside and looks at the party.

> "That's the worst of it dealt with. But the snake is still upstairs." She jerks her thumb toward the staircase. "He'll know the ritual's broken. He'll be angry. Or scared. Either way — go finish it."

Brother Aldous (if present) kneels beside the cracked brazier where the souls were trapped, murmuring a prayer.

> "They're free. After everything he did to them, they're free." He looks up, and his old eyes are hard. "Go. End this. I'll consecrate this chamber while you deal with Sorn."

**Short rest opportunity:** With the portal collapsed and the erinyes defeated, the party has a brief window. The consecrated ground around the disrupted anchors is safe — fiendish energy has been purged from this space. A 10-minute short rest is possible before ascending to the throne room, though the sounds of fighting above grow louder. This is the last chance to recover before the finale.

The staircase leads back up to the throne room, where Sorn has established his mockery of a royal court — see Quest 21.

Connected to:

- The staircase: Up to the throne room (Quest 21).

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 4 Shards of Divine Light | Quest reward (anchors disrupted) | Ranged 30/60, 3d8 radiant to fiends, 1d8 to others, single use each |
| +3 longbow | Erinyes loot | Rare, requires attunement |
| 10 +1 arrows | Erinyes loot | Magical ammunition |
| Winged Armour (breastplate) | Erinyes loot | AC 14 + Dex (max 2), 30 ft fly speed for 1 hour/day |
| 50 gp | Barbed devil 1 loot | Loose coins in Infernal metal |
| 50 gp | Barbed devil 2 loot | Loose coins in Infernal metal |
| *Potion of Greater Healing* | Barbed devil 1 loot | Found in a leather pouch |
| *Potion of Greater Healing* | Barbed devil 2 loot | Found in a leather pouch |
| Banishment conduit knowledge | DC 17 Arcana (hidden find) | Portal can banish Sorn — failsafe if Blade is lost |
| 2d6 temporary HP (1 hour) | Disrupting Anchor 3 (divine characters) | Emotional/thematic reward |

## Quest Connections

- **From Quest 13:** The traitor's intelligence (or captured Sorn agent documents) provided the layout of the ritual chamber and the number of anchor points. Without this intel, the party enters blind and must discover the anchors by exploration.
- **From Quest 18:** The party descends to this chamber after fighting through the Citadel and the horned devil in the courtyard (Q18, A6). The staircase down is behind the throne room.
- **To Quest 21:** After disrupting the anchors, the party ascends to the throne room, where Sorn has staged his pretender's court.
- **From Quest 10/14:** Brother Aldous's texts provide advantage on the Arcana check at Anchor 2. If Aldous is present, he can identify the soul trap at Anchor 3 automatically.
- **From Quest 12:** The Blade of Tyr's Witness is the primary means to slay Sorn, but the banishment conduit here provides an alternative if the Blade was lost or never found.
