# Quest 19: The Devil's Vanguard

**Level:** 10 | **Type:** Story | **Style:** Mini-boss combat

As the party breaches the inner Citadel and secures the war room, the portal below sends a pulse of infernal energy through the building. A horned devil tears through the eastern wall of the Citadel courtyard, rampaging through the resistance lines outside. The party must leave the war room and stop the devil before it massacres their allies — the same allies who are holding the perimeter so the party can reach the ritual chamber.

This is a straightforward, urgent fight. No puzzles, no branching paths. A monster is killing the party's friends, and every round of delay costs lives.

---

The war room shakes. Dust sifts from the ceiling and the scale model of Ashenmere rattles on the table, pins toppling. A deep, resonant pulse — felt more than heard — rolls up through the floor like a heartbeat. Then a second. Then a third, faster.

> The eastern wall of the courtyard explodes outward. Stone and timber shatter in a spray of dust and fire, and something massive forces itself through the breach — a towering figure with leathery wings, a barbed tail, and a forked iron weapon that drips with liquid flame. It stands twelve feet tall, its body armoured in natural plates of infernal iron. Its eyes burn like forge coals.
>
> It surveys the courtyard below, where resistance fighters are scrambling for cover — and then it drops into their ranks like a falling boulder.

The party can see the courtyard from the war room windows or from the second-floor landing. Resistance fighters are scattered across the open ground — barricades of overturned carts and piled crates, wounded being dragged to cover, crossbow teams trying to hold formation. The horned devil has landed in the centre of this and is laying waste.

## A1. The Collapsing Courtyard

The courtyard is a roughly 80-foot square enclosed on three sides by Citadel walls. The fourth side — the east wall — has been torn open by the devil's entrance, exposing the street beyond. Rubble from the breach is piled in a 15-foot radius around the gap, creating difficult terrain. Fires are burning in two places where the devil's flames have caught on wooden barricades.

> The courtyard is carnage. Resistance fighters are scattered behind overturned carts and piled sandbags, loosing crossbow bolts that glance off the devil's hide like thrown pebbles. Two fighters lie motionless near the breach. A third is being dragged to safety by a comrade, leaving a dark smear across the cobblestones. The horned devil swings its massive fork in a wide arc, scattering a barricade into kindling, and turns toward the largest cluster of survivors.

**The horned devil's behaviour:** The devil [HORNEDDEVIL1] targets clusters of resistance fighters — not the party. It considers the resistance rabble, unworthy of its attention. It uses Hurl Flame to ignite barricades and its fork to sweep through groups. Each round the party does not engage the devil, 1d4 resistance fighters are killed.

**Drawing the devil's attention:** The devil shifts its focus to the party once any of the following occurs:

- A party member deals damage to it.
- A party member shouts a challenge (free action, no check needed — the devil understands Common and Infernal).
- A party member uses a spell of 3rd level or higher within the devil's line of sight. The magical signature draws its interest.

Once engaged, the devil fights the party exclusively — it considers them worthy opponents and ignores the resistance fighters.

**Encounter:** 1 horned devil (CR 11, 178 HP, AC 18). Base XP 7,200, adjusted x1 = 7,200. Hard threshold for 4 level-10 characters is 7,600. This is just under Hard — a significant fight, but one a healthy party should survive.

**Horned devil stat highlights:**

- **Multiattack:** Fork (+10 to hit, 2d8+6 piercing damage) and tail (+10 to hit, 1d8+6 piercing damage plus DC 17 Constitution save or infernal wound — 3d6 damage at the start of each turn until healed).
- **Hurl Flame:** Ranged spell attack, +7 to hit, 4d6 fire damage, 150-foot range. It uses this against distant targets or to ignite cover.
- **Flight:** 60-foot fly speed. The devil takes to the air if it is surrounded by melee fighters, hovering at 15 feet and using Hurl Flame before diving back in.
- **Devil's Sight:** Magical darkness does not impede it.
- **Magic Resistance:** Advantage on saving throws against spells and other magical effects.
- **Damage Resistances:** Cold; bludgeoning, piercing, and slashing from nonmagical attacks that are not silvered.
- **Damage Immunities:** Fire, poison.

**Tactical notes:**

- The devil opens by hurling flame at the party's backline (spellcasters, ranged attackers) before closing to melee.
- If a party member is isolated, the devil focuses fork and tail attacks on them, attempting to stack infernal wounds. Multiple infernal wounds stack — a character with two active wounds takes 6d6 damage per turn.
- At half HP (89 or below), the devil takes flight and fights defensively for 1 round, using Hurl Flame while it assesses the party. It then dives onto whichever party member has dealt the most damage.
- The devil does not flee. It fights to the death. It was summoned to kill, and its pride will not allow retreat.

**Environmental hazards:**

- **Burning barricades:** Two barricades are on fire. A creature that starts its turn within 5 feet of a burning barricade takes 1d6 fire damage. The fires spread 5 feet per round unless extinguished.
- **Rubble from the breach:** The 15-foot radius around the eastern wall breach is difficult terrain. The devil ignores this (it can fly).
- **Falling masonry:** At initiative count 10 on rounds 2 and 4, unstable stonework collapses from the damaged wall. Each creature within 10 feet of the eastern breach must make a DC 13 Dexterity save or take 2d6 bludgeoning damage.

**Resistance fighters:** The surviving fighters (8-12 depending on how quickly the party engaged) provide covering fire with crossbows (+3 to hit, 1d8+1 piercing damage) but deal negligible damage to the devil due to its resistances to nonmagical weapons. Their primary role is narrative — they cheer when the party lands a solid blow, cry out when the devil strikes, and drag wounded to cover. They are allies, not combatants.

Connected to:

- A4 (Quest 18): The second-floor landing, where the party descends from.
- The eastern breach leads out to the city streets, but there is no reason to flee.

```yaml
npcs:
  - id: HORNEDDEVIL1
    type: Horned Devil
    description: A twelve-foot nightmare of leathery wings, barbed iron hide, and burning eyes. It carries a massive iron fork that drips with liquid flame. This is a soldier of the Nine Hells — not a cunning manipulator like Sorn, but a weapon of war, sent through the portal to break the siege by breaking the besiegers. It is disciplined, brutal, and utterly without mercy. Its voice is a deep, grinding rumble, like millstones turning.
    abilityScores:
      str: 22
      dex: 17
      con: 21
      int: 12
      wis: 16
      cha: 17
    ac: 18
    maxHp: 178
    speed: 20
    skills:
      - athletics
      - perception
      - intimidation
```

---

## After the Fight

The horned devil crashes to the cobblestones with a sound like a falling bell tower. Its body smoulders, cracks — and then dissolves into a pool of black ichor that sinks into the stone and vanishes, leaving only the stench of brimstone and the devil's equipment behind.

The resistance fighters emerge from behind their shattered barricades. Several are wounded. Some are weeping over fallen comrades. But they are alive, and the perimeter holds.

> A resistance captain — bloodied, one arm hanging limp — limps over to the party. She looks at the scorched ground where the devil fell, then at the party.
>
> "That thing came through the wall like it was paper. If you hadn't come down when you did..." She doesn't finish the sentence. She doesn't need to.

If Maren is present or reachable via sending stone:

> "The portal's getting stronger. That was a vanguard — a taste of what's coming. You need to get below the Citadel now. Find the ritual chamber. Shut it down. We'll hold up here as long as we can."

The path forward leads back into the Citadel and down — toward the ritual chamber, the portal, and Sorn.

### Hidden Find: The Forgotten Armoury

A DC 15 Perception check while examining the rubble from the breach reveals that the devil's entrance tore open a sealed room behind the eastern wall — a forgotten armoury, bricked up and lost to time.

> Behind the shattered masonry, a small chamber is exposed — dusty, cobwebbed, and untouched for what looks like decades. Weapon racks line the walls, most of them empty or holding rusted junk. But on one rack, wrapped in oiled cloth and still gleaming, a shield catches the light. Beside it, a quiver of crossbow bolts with silvered tips.

**Armoury contents:**

- *Shield of the Faithful* — a +2 shield engraved with a sunburst motif. Once per long rest, the wielder can cast *Shield of Faith* on themselves as a bonus action (no concentration required, lasts 1 minute). This was a paladin's shield, left here during a long-forgotten defence of the Citadel.
- 6 silvered crossbow bolts — effective against the devils the party will face in the remaining quests, bypassing their resistance to nonmagical weapon damage.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| Infernal Fork | Horned devil (loot) | +2 trident, +1d6 fire damage on hit |
| Devil's Eye Gem | Horned devil (loot) | Worth 500 gp; cast *See Invisibility* 1/long rest |
| Infernal Iron chunk | Horned devil (loot) | Rare crafting material |
| *Shield of the Faithful* | Forgotten armoury (DC 15 Perception) | +2 shield; *Shield of Faith* 1/long rest as bonus action |
| 6 silvered crossbow bolts | Forgotten armoury (DC 15 Perception) | Bypass devil damage resistances |

## Quest Connections

- **From Quest 18:** The party breaches the Citadel and secures the war room. The portal's pulse in response to the breach summons the horned devil as a counterstrike.
- **To Quest 20:** With the vanguard destroyed and the courtyard secured, the party must descend immediately into the Citadel's depths to reach the ritual chamber before the portal becomes permanent.
