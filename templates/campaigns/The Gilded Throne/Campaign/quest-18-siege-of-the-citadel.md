# Quest 18: The Siege of the Citadel

**Level:** 10 | **Type:** Story | **Style:** Dungeon assault with multiple paths

The resistance launches its assault on the Council Citadel while the party leads a strike team inside. With the protective wards dismantled in Quest 17, the building is vulnerable for the first time in months. Three approach routes offer different challenges depending on the alliances the party has forged and the intelligence they have gathered. Every prior quest funnels into this moment — allies recruited, secrets uncovered, and debts owed all pay off here.

This quest rewards preparation. Parties who secured allies in Quest 15, obtained Calla's floor plan in Quest 8, and gathered Brenn's sewer intelligence in Quest 16 will find the Citadel far more manageable than those who neglected the campaign's political threads.

---

The resistance gathers in the predawn dark — two hundred fighters spread across rooftops, alleyways, and cellar entrances surrounding the Council Citadel. Maren stands on a warehouse roof overlooking the Citadel's front plaza, a hooded lantern in one hand and a short sword in the other. She turns to the party.

> "The wards are down. The window is now. Once we hit the front gate, Sorn's guards will pull inward to defend the inner chambers. That's when you go in." She points to a rough map pinned to a crate lid. "Three ways inside. Pick one and commit — once the assault starts, there's no changing your mind."

She meets each of the party's eyes in turn.

> "Find the war room on the second floor. Sorn's battle plans, his devil contacts, the portal timeline — it's all in there. We need to know what we're walking into before we go deeper. Get in, get the intelligence, get to the inner sanctum. We end this tonight."

A signal horn sounds from the north wall. The resistance fighters tense. Maren lifts the lantern and opens the shutter three times.

> "Go."

## Route Selection

The party must choose one of three routes into the Citadel. Each has been scouted by the resistance and carries different risks. Maren briefs them quickly before the assault begins.

**Front Gate (A1):** The main entrance. The resistance's bulk force will engage the Citadel guards at the gate, creating an opening for the party to push through. Direct, fast, and violent. This is the hardest route in terms of combat but the shortest path to the war room.

**Servant's Passage (A2):** A concealed entrance on the Citadel's east side, behind the kitchens. Calla's floor plan from Quest 8 marks it clearly. Narrow corridors, fewer enemies, but trapped. Best for parties who favour stealth and precision.

**The Sewers (A3):** An underground route connecting to the undercity tunnels the party explored in Quest 7. Brenn's intelligence from Quest 16 identifies a sewer grate that opens into the Citadel's basement. Wet, dark, and guarded by something infernal.

All three routes converge at the second-floor landing (A4), where the war room is located.

---

## A1. The Front Gate

The Citadel's main gate is a pair of ironbound oak doors set into a stone archway, flanked by guard towers. Under normal circumstances, a dozen guards patrol the entrance. Tonight, the resistance's assault draws most of them into the plaza — but not all.

> The front gate erupts into chaos. Resistance fighters pour out of the surrounding streets, crashing into the Citadel's guard line with a roar. Steel clashes against steel. Crossbow bolts streak through torchlight. The gate itself is ajar — two guards lie sprawled on the steps, and a resistance fighter waves you forward. "Through the gate! Go now, before they regroup!"

Beyond the gate is a wide entrance hall — marble floors, vaulted ceiling, a grand staircase rising to the upper floors. The hall is mostly cleared by the initial assault, but a defensive line has formed at the base of the staircase.

**With allies from Quest 15:** If the party secured military allies (the Dockmasters' militia, the Tanners' Quarter volunteers, or the Watch deserters), these forces engage the bulk of the Citadel's guard. The party faces a reduced force at the staircase: 2 knights [KNIGHT1] [KNIGHT2] and 1 champion [CHAMPION1] holding the landing.

> Two armoured knights stand shoulder to shoulder at the base of the grand staircase, shields locked. Behind them, a massive figure in blackened plate descends the stairs — a champion of the Citadel guard, greatsword resting on one shoulder. He surveys the chaos below with cold contempt.
>
> "You will not pass this staircase. Sorn's orders."

**Encounter (with allies):** 2 knights (CR 3) + 1 champion (CR 9). Base XP 6,400, adjusted x2 for multiple enemies = 12,800. Deadly threshold for 4 level-10 characters is 11,200. This is Deadly — barely. The fight is intense but winnable.

**Without allies from Quest 15:** The party faces the full defensive line: 4 knights [KNIGHT1] [KNIGHT2] [KNIGHT3] [KNIGHT4] and the champion [CHAMPION1]. No resistance fighters are available to thin the ranks.

> The entrance hall is a killing ground. Four knights have formed a shield wall at the staircase, and the champion behind them is already barking orders. No resistance fighters have made it this far. You're on your own.

**Encounter (without allies):** 4 knights (CR 3) + 1 champion (CR 9). Base XP 7,800, adjusted x2 = 15,600. Far above the Deadly threshold. This is the price of failed alliances — a punishing fight that will burn resources the party needs for the battles ahead. Consider having the champion focus on the strongest-looking party member while the knights use coordinated shield wall tactics (advantage on saves against being pushed or knocked prone when adjacent to another knight).

**Champion's behaviour:** The champion fights with disciplined aggression. He targets the party's most effective combatant, attempting to cut the head off the snake. At half HP, he does not flee — he fights harder, making reckless attacks (+2 to hit, enemies have advantage against him). He considers retreat dishonourable.

**Knight behaviour:** Knights fight in pairs, using the Protection fighting style to impose disadvantage on attacks against their partner. If the champion falls, the knights' morale breaks — surviving knights attempt to flee upstairs toward the war room.

**When the staircase is cleared:** The party can ascend to the second-floor landing (A4).

Connected to:

- A4: The grand staircase leads up to the second-floor landing.

```yaml
npcs:
  - id: KNIGHT1
    type: Knight
    description: A Citadel guard in polished half-plate bearing Sorn's crest — a coiled serpent on a gold field. Professional, disciplined, and loyal to the paymaster.
  - id: KNIGHT2
    type: Knight
    description: A Citadel guard in polished half-plate, identical to KNIGHT1. Fights in lockstep with their partner.
  - id: KNIGHT3
    type: Knight
    description: A Citadel guard in polished half-plate. Only present if the party lacks allies from Quest 15.
  - id: KNIGHT4
    type: Knight
    description: A Citadel guard in polished half-plate. Only present if the party lacks allies from Quest 15.
  - id: CHAMPION1
    name: Captain Harsk
    type: Champion
    description: A towering human in blackened full plate with a red cloak pinned at the shoulder. He carries a massive greatsword with an etched blade. Captain Harsk is Sorn's head of Citadel security — a career soldier who sold his loyalty for gold and has no intention of surrendering it cheaply. His face is scarred across the jaw, and his eyes are flat and professional.
    abilityScores:
      str: 20
      dex: 15
      con: 14
      int: 10
      wis: 14
      cha: 12
    ac: 18
    maxHp: 143
    speed: 30
    skills:
      - athletics
      - perception
      - intimidation
```

## A2. The Servant's Passage

The servant's entrance is a narrow door recessed into the Citadel's east wall, half-hidden behind a growth of ivy and a stack of empty wine barrels. Calla's floor plan from Quest 8 marks it precisely. Without the floor plan, finding the door requires a DC 18 Perception check from outside — it was designed to be invisible.

> The servant's door opens with a low creak. Beyond it, a narrow corridor stretches into darkness — barely wide enough for two people abreast. The walls are rough-cut stone, the ceiling low. Hooks line the walls where servant uniforms once hung, now empty. The air smells of dust, candle wax, and something faintly sulphurous.

This route is quieter than the front gate but not unguarded. Sorn stationed a fiend in the passage after Calla's disappearance, suspecting the servants' routes had been compromised.

### A2a. The Trapped Corridor

The passage runs straight for sixty feet before turning sharply left. The first thirty feet are safe. The second thirty feet are trapped.

**Trap 1 — Pressure Plates (DC 14 Perception to detect, DC 13 Thieves' Tools to disarm):** Three flagstones along the corridor are pressure plates. Stepping on one triggers a volley of crossbow bolts from concealed slits in the walls. +8 to hit, 1d10+3 piercing damage per bolt (2 bolts per trigger). Each plate triggers independently.

**Trap 2 — Infernal Glyph (DC 15 Arcana to detect, DC 15 Thieves' Tools or Dispel Magic to disarm):** At the corner where the corridor turns left, a glyph is inscribed on the floor beneath a thin layer of dust. Stepping on it triggers a blast of hellfire in a 10-foot radius: DC 14 Dexterity save, 4d6 fire damage on a failed save, half on success. The glyph is visibly infernal in design — characters who have encountered Sorn's fiendish allies before recognise the style.

> The corridor turns sharply left, and ahead you can see a faint red glow — torchlight, filtered through a beaded curtain at the far end. Something moves behind the curtain. A low, guttural sound — like a dog growling through a mouthful of broken glass.

### A2b. The Barbed Devil's Guard Post

Beyond the beaded curtain is a small guardroom — once a servant's rest area, now converted into a sentry post. A barbed devil [BARBEDDEVIL1] crouches in the centre of the room, its spined body coiled like a spring. It has been stationed here for weeks and is bored, irritable, and eager for violence.

> The curtain parts and a nightmare unfolds. The creature fills the small room — eight feet of glistening barbed hide, its body covered in hooked spines that drip with something dark. Its eyes are molten red, and its mouth splits into a grin full of needles. It speaks in Infernal, its voice a rasping hiss.
>
> In Common, it says: "Flesh. Finally."

**Encounter:** 1 barbed devil (CR 5). Base XP 1,800, adjusted x1 = 1,800. Easy for a level-10 party. The danger here is not the devil itself but the confined space — the room is only 15 feet square. The devil's Hurl Flame ability (ranged spell attack, +5 to hit, 3d6 fire damage) is effective in the corridor if the party tries to fight at range, and its barbed hide (any creature that grapples or hits it with a melee attack within 5 feet takes 1d10 piercing damage) punishes melee fighters in the tight quarters.

**Stealth approach:** If the party approaches with stealth (group DC 14 Stealth check), they can catch the devil off guard. It is picking at the remains of a rat and not paying attention. A surprise round in this confined space can end the fight before it begins.

**After the devil is defeated:** The guardroom has a door on the far wall that opens onto a narrow staircase leading up to the second floor. This staircase passes through Sorn's private quarters (see "Hidden Find" in Rewards).

Connected to:

- A4: The staircase beyond the guardroom leads up to the second-floor landing.
- Sorn's Quarters: The staircase passes through Sorn's private chambers (DC 18 Investigation to notice the concealed door).

```yaml
npcs:
  - id: BARBEDDEVIL1
    type: Barbed Devil
    description: A hulking fiend covered in iron-hard barbed spines, stationed in a cramped guardroom in the servant's passage. It has been here for weeks with nothing to do but eat rats and wait. Its orders are to kill anyone who enters the passage without speaking the infernal passphrase — a passphrase the party does not have.
```

## A3. The Sewers

The sewer route begins in the undercity tunnels the party explored during Quest 7. Brenn's intelligence from Quest 16 identifies a specific junction where a storm drain connects to the Citadel's basement — a route used by Sorn's agents to move prisoners and contraband without being seen. The grate is marked with the same serpent sigil the party first found on the smuggled cargo in Quest 1.

> The sewer tunnel narrows as you push deeper beneath the Citadel's foundations. The water here is knee-deep and sluggish, carrying the stench of decay and something chemical — the same acrid smell from the alchemical lab in Quest 3. Ahead, the tunnel opens into a wide junction where three drainage channels converge. A rusted iron grate is set into the ceiling, and beyond it, you can see the stone floor of a basement room. The serpent sigil is scratched into the grate's frame.

**Opening the grate:** The grate is locked from above with a heavy iron padlock. DC 15 Thieves' Tools to pick, DC 18 Strength to wrench it open, or a spell such as Knock opens it automatically. Forcing the grate makes noise — if the party fails the Strength check or uses Knock, the chain devil in the basement above is alerted and cannot be surprised.

### A3a. The Flooded Junction

The junction itself is hazardous. The three drainage channels create unpredictable currents, and the water is deeper than it looks.

**Environmental hazard — Strong current:** Any character who enters the junction must succeed on a DC 12 Strength (Athletics) check or be swept 10 feet toward the eastern drain, which drops into a lower tunnel (10 feet fall, 1d6 bludgeoning damage, must climb back up). Characters in heavy armour make this check with disadvantage.

**Environmental hazard — Alchemical contamination:** The water in the junction has a faint greenish tinge. A DC 13 Nature or Arcana check identifies it as diluted alchemical runoff — not immediately dangerous, but any character who is submerged (such as by failing the Athletics check badly, rolling 5 or lower) must make a DC 12 Constitution save or suffer 1d4 poison damage and be poisoned for 1 hour.

### A3b. The Citadel Basement

Through the grate and up into the basement. The room above is a storage cellar — wine racks, supply crates, and a heavy wooden door leading to a corridor. A chain devil [CHAINDEVIL1] patrols this basement, its chains dragging across the stone floor with a sound like grinding teeth.

> You haul yourself up through the grate into a cold stone cellar. Wine bottles line the walls in dusty racks. Crates stamped with the serpent sigil are stacked against the far wall. And in the centre of the room, something waits. Chains. Dozens of chains, each ending in a barbed hook, writhing independently like the limbs of an iron spider. At the centre of the mass, a gaunt humanoid figure turns its eyeless face toward you.

**Encounter:** 1 chain devil (CR 8). Base XP 3,900, adjusted x1 = 3,900. Medium difficulty for a level-10 party. The chain devil uses its Animate Chains ability to control up to four chains in the room (attached to wine racks, ceiling hooks, and crate hoists), giving it effective reach across the entire 30-foot cellar. Its Chain attack has a 10-foot reach with +8 to hit for 2d6+4 slashing damage, and a hit grapples the target (escape DC 14).

**Tactical note:** The chain devil fights defensively near the grate, trying to prevent the party from fully entering the room. It uses animated chains to grapple characters as they climb through, dragging them back down into the sewer water. A grappled character hanging half-through the grate has half cover but is restrained.

**If the party was quiet entering:** If the party picked the lock and climbed through silently (group DC 13 Stealth check after opening the grate quietly), the chain devil is at the far end of the basement, its back turned. Surprise round available.

**After the devil is defeated:** The basement door opens onto a service corridor with a staircase leading up to the second floor.

Connected to:

- A4: The service staircase leads up to the second-floor landing.

```yaml
npcs:
  - id: CHAINDEVIL1
    type: Chain Devil
    description: A gaunt, eyeless fiend wrapped in animated chains that move with predatory intelligence. It patrols the Citadel's basement, guarding the sewer access point. Its chains are integrated into the room's fixtures — wine rack hooks, ceiling pulleys, and crate hoists — giving it control over the entire cellar. It does not speak. It does not negotiate.
    ac: 16
    maxHp: 85
    speed: 30
```

## A4. The Second-Floor Landing

All three routes converge here — the grand staircase from the front gate, the servant's staircase from the east passage, and the service staircase from the basement. The second-floor landing is a wide corridor lined with portraits of former council members. The war room is at the end of the corridor, behind a set of double doors. Standing between the party and those doors is a familiar face.

> The landing opens into a broad corridor lit by iron sconces. Portraits of stern-faced men and women line the walls — former council members, their nameplates tarnished with age. At the far end, a pair of heavy oak doors are flanked by two hunched, bearded devils that crouch like gargoyles. And between them, arms folded, stands a figure you recognise from the masquerade — the cambion. Sorn's lieutenant.
>
> He has traded his mask for a breastplate of dark iron, and a scimitar hangs at his hip, its blade shimmering with barely contained heat. He smiles — the same charming, predatory smile from the ballroom.
>
> "I was wondering which route you would choose. Sorn wagered the front gate. I had my money on the sewers." He draws the scimitar, and flames lick along its edge. "Either way, you stop here."

**Encounter:** 1 cambion [CAMBION1] (CR 5) + 2 bearded devils [BEARDEDDEVIL1] [BEARDEDDEVIL2] (CR 3 each). Base XP 3,200, adjusted x2 for multiple enemies = 6,400. Hard threshold for 4 level-10 characters is 7,600, so this lands just under Hard. A challenging fight but not overwhelming.

**Cambion's behaviour:** The cambion from the masquerade in Quest 8. He is arrogant, theatrical, and dangerous. He opens with Fiery Charm (DC 14 Wisdom save or be charmed for 1 day) targeting the party member he finds most interesting — ideally someone he interacted with at the masquerade. He then uses his Flame Tongue scimitar in melee, dealing an additional 2d6 fire damage on each hit. At half HP, he attempts to fly out of melee range (30 ft fly speed) and use Fire Ray (ranged spell attack, +7 to hit, 3d6 fire damage) from above.

**Bearded devil behaviour:** The bearded devils fight as bodyguards, positioning themselves between the cambion and the party's melee fighters. Their glaive attacks have 10-foot reach, and their Beard attack inflicts the infernal wound effect (1d10 damage at the start of each turn until a DC 12 Medicine check or magical healing stops it). They do not flee.

**If the party has Sorn's seal ring (from the locked cabinet, if obtained earlier by a previous party visit):** The bearded devils hesitate for one round, confused by the ring's authority. This round of inaction is a significant advantage — the party effectively gets a free round against the cambion alone.

**When the corridor is cleared:** The war room doors are unlocked. The cambion was the lock.

Connected to:

- A5: The war room, through the double doors.

```yaml
npcs:
  - id: CAMBION1
    name: Varekh
    type: Cambion
    description: Sorn's cambion lieutenant — half-fiend, half-mortal, entirely smug. The party encountered him at the masquerade in Quest 8, where he wore a demon mask and charmed his way through the crowd. Now unmasked, his infernal heritage is plain — copper skin, small curved horns, and eyes like burning coals. He wears a breastplate of dark iron and carries a Flame Tongue scimitar. He is Sorn's enforcer, bodyguard, and occasional assassin. He considers this fight entertainment.
    abilityScores:
      str: 18
      dex: 14
      con: 16
      int: 14
      wis: 12
      cha: 16
    ac: 19
    maxHp: 82
    speed: 30
    skills:
      - deception
      - intimidation
      - perception
  - id: BEARDEDDEVIL1
    type: Bearded Devil
    description: A squat, muscular fiend with a wiry beard of writhing tendrils and a serrated glaive. It serves as Varekh's bodyguard and obeys without question.
  - id: BEARDEDDEVIL2
    type: Bearded Devil
    description: A squat, muscular fiend identical to BEARDEDDEVIL1, positioned on the opposite side of the corridor. It mirrors its partner's movements with practiced coordination.
```

## A5. The War Room

The war room is a large chamber dominated by a central table covered in maps, documents, and a detailed scale model of Ashenmere. This is Sorn's operational headquarters — where he coordinated the council takeover, managed his devil allies, and planned the final phase of the portal ritual.

> The double doors swing open onto a room that smells of ink, sealing wax, and brimstone. A massive oak table fills the centre, its surface buried under maps, letters, and a scale model of the city rendered in painted wood and clay. Coloured pins mark locations across the model — red for Citadel forces, black for devil positions, blue for known resistance cells. A slate board on the wall lists names, dates, and numbers in Sorn's precise handwriting. Several names have been crossed out.

**Examining the war room — the core intelligence:**

- **The battle plans (automatic, no check needed):** A set of tactical documents detail Sorn's defence strategy. The Citadel garrison was 60 guards (knights and men-at-arms), now reduced to roughly 30 by the resistance assault outside. Twelve devils of various types are stationed throughout the building. And below the Citadel, in the ritual chamber, the portal to the Nine Hells is one hour from becoming permanent. After that, devils can cross freely and in unlimited numbers.
- **The roster:** A list of every devil currently in Ashenmere — their type, location, and assigned task. This gives the party foreknowledge of what they will face in Quests 20 through 22.
- **The timeline:** Sorn's handwritten notes calculate the portal's stabilisation. The ritual began at sundown. It will become permanent one hour after the party enters the war room. This is the campaign's ticking clock.

**The locked cabinet:** Against the north wall, a heavy iron cabinet is secured with a complex lock. DC 17 Thieves' Tools to pick, or DC 20 Strength to force (alerts anyone on the floor). Knock opens it automatically.

**Cabinet contents:**

- 4 *Potions of Superior Healing* (8d4+8 HP each)
- 2 *Potions of Fire Resistance* (resistance to fire damage for 1 hour)
- 1 *Scroll of Globe of Invulnerability* (6th level)

These supplies were Sorn's personal emergency cache — intended for his own escape, not for his subordinates. The Potions of Fire Resistance are particularly valuable for the battles ahead, where devils deal fire damage constantly.

**Short rest opportunity:** The war room is defensible — resistance fighters hold the corridor outside, and the heavy oak doors can be barred from within. The party can take a short rest here while reviewing the intelligence. This is the last safe rest before the finale.

Connected to:

- A4: Back to the second-floor landing.
- A6: The courtyard, where the horned devil breaches the wall.
- Deeper into the Citadel: Stairs down to the inner sanctum (Quest 20 and beyond).

## A6. The Devil's Breach

As the party secures the war room, the ground shakes. A deafening crash echoes from below — something has smashed through the Citadel's outer courtyard wall. Dust rains from the ceiling. Maren's voice crackles through the sending stone:

> "Something just came through the east wall. Something big. It's tearing through our people. We need you — now!"

The party descends to the courtyard — a wide, flagstoned space between the Citadel's inner keep and the outer wall. A section of the east wall has been demolished, rubble scattered across the courtyard. Standing in the breach is a horned devil — twelve feet tall, wings spread, a barbed tail lashing behind it. Three resistance fighters lie motionless at its feet. Others are falling back in disarray.

> The courtyard is chaos. Dust and rubble choke the air. Through the breach in the east wall, you see the thing that made it — a fiend the size of a siege engine, its body armoured in plates of dark red chitin, two massive horns curving forward from its skull like battering rams. Wings like torn leather spread behind it. It holds a resistance fighter in one clawed hand, examines them with contempt, and hurls them aside like a broken doll. Then it turns its burning eyes toward you.

**Encounter:** 1 horned devil [HORNED_DEVIL] (CR 11). Base XP 7,200, adjusted x1 = 7,200. **Hard** for a party of 4 at level 10 (Deadly threshold 11,200). The horned devil is a serious threat but manageable for a rested party — which is why the short rest in the war room matters.

**Horned devil behaviour:** It targets the strongest-looking combatant first, using its Hurl Flame (ranged spell attack, +7 to hit, 4d6 fire damage) on approach and then closing to melee with its Fork (+10 to hit, 2d8+6 piercing) and Tail (+10 to hit, 2d10+6 piercing plus Infernal Wound). At half HP, it takes flight (60 ft) and uses Hurl Flame from the air, forcing the party to use ranged attacks or find a way to ground it.

**Resistance fighters:** Four resistance fighters [RESIST_A1-4] are still standing in the courtyard, fighting from behind rubble. They cannot damage the devil meaningfully but serve as distractions — each round, 1d2 of them make attacks that the devil ignores, drawing no mechanical effect but adding to the chaos of the scene. If the party takes more than 5 rounds to defeat the devil, one resistance fighter is killed each round thereafter.

**Terrain:** The courtyard is 60 feet across. Rubble from the collapsed wall creates difficult terrain in a 20-foot radius around the breach. The rubble piles provide half cover. A balcony overlooking the courtyard (15 feet up, accessible from the second floor) provides three-quarters cover for ranged attackers.

**When the horned devil falls:** It collapses with a thunderous crash, its body dissolving into black ichor and sulphurous smoke. The resistance fighters cheer — ragged, exhausted, but alive.

**Loot:**

- An *Infernal Fork* drops from the devil's dissolving form — a +2 trident wreathed in fading hellfire. Deals an additional 1d6 fire damage on each hit.
- A *Devil's Eye Gem* — a smouldering ruby pried from the devil's brow. Worth 500 gp, or the bearer can cast *See Invisibility* once per long rest.
- A chunk of *Infernal Iron* — rare crafting material, warm to the touch, useful for forging weapons or armour effective against fiends.
- 150 gp in Calishite gold coins, scattered from a pouch the devil was carrying.

**The Forgotten Armoury:** The devil's breach tore open a sealed room behind the eastern wall — a forgotten armoury, bricked up and lost to time. A DC 15 Perception check while examining the rubble reveals it.

- *Shield of the Faithful* — a +2 shield engraved with a sunburst motif. Once per long rest, the wielder can cast *Shield of Faith* on themselves as a bonus action (no concentration required, lasts 1 minute).
- 6 silvered crossbow bolts — effective against the devils the party will face in the remaining quests, bypassing their resistance to nonmagical weapon damage.

**Aftermath:** With the courtyard secured and the horned devil destroyed, the way down to the ritual chamber is clear. The resistance holds the outer Citadel. Everything below belongs to Sorn.

> Maren limps across the courtyard toward you, blood on her face, her short sword notched and dull. She looks at the smoking crater where the devil fell, then at you. "That's what's coming through the portal. More of those." She grips your arm. "End this. Whatever it takes."

Connected to:

- A5: Back to the war room.
- Deeper into the Citadel: Stairs down to the ritual chamber (Quest 20).

```yaml
npcs:
  - id: HORNED_DEVIL
    type: Horned Devil
    description: A towering fiend of dark red chitin and muscle, twelve feet tall with massive forward-curving horns and leathery wings. It reeks of brimstone and radiates palpable malice. It was the first major devil to cross through the partially stabilised portal — a vanguard sent to break the resistance's siege. It fights with brutal efficiency, combining ranged hellfire with devastating melee strikes.
    ac: 18
    maxHp: 178
    speed: 20
    flySpeed: 60
  - id: RESIST_A1
    type: Guard
    description: A resistance fighter behind rubble, bloodied but still fighting.
  - id: RESIST_A2
    type: Guard
    description: A resistance fighter with a crossbow, firing from behind a collapsed pillar.
  - id: RESIST_A3
    type: Guard
    description: A resistance fighter dragging a wounded comrade behind cover.
  - id: RESIST_A4
    type: Guard
    description: A resistance fighter with a spear, shouting encouragement to the others.
```

---

## Hidden Find: Sorn's Quarters

Accessible only through the servant's passage route (A2). The staircase from the guardroom passes through Sorn's private chambers. A DC 18 Investigation check notices a concealed door in the staircase wall — a sliding panel that opens into a richly appointed bedroom.

> The panel slides open to reveal a room of unexpected luxury. A four-poster bed with silk curtains. A writing desk of dark wood, its surface clean and orderly. A wardrobe of fine clothes — all in muted, tasteful colours. And on the wall above the desk, a large portrait in an ornate gilt frame: a figure in flowing robes, features obscured by shadow, but the eyes — the eyes are vivid, painted with unnatural skill. They seem to follow you. A small brass plate on the frame reads: *Mahavan*.

**The portrait of Mahavan:** This is a painted image of the archdevil behind Sorn's pact — the true power behind the portal. The portrait radiates faint conjuration magic (DC 13 Arcana to detect). It serves as a sympathetic link between the material plane and the Nine Hells, subtly strengthening the portal's connection.

**Destroying the portrait:** If the party destroys the portrait (it has AC 10, 5 HP, and is vulnerable to radiant damage), the sympathetic link is severed. In the finale (Quest 22), all devils summoned through the portal act 1 round slower on their first turn — they do not act in the first round of combat. This is a significant tactical advantage that the party may not realise until the moment arrives.

**Other treasures in the room:**

- A velvet pouch in the writing desk containing 2,000 gp worth of assorted gemstones (rubies, sapphires, and black opals).
- A *Manual of Bodily Health* in the bedside drawer — Sorn was saving it for after the portal was permanent.
- A *Portable Hole* folded neatly in the wardrobe, tucked inside a coat pocket.

---

## After the Devil's Breach

With the horned devil destroyed, the courtyard secured, and the war room intelligence in hand, the party knows the stakes: less than one hour before the portal becomes permanent. The resistance holds the outer Citadel. Everything below — the ritual chambers, the portal, and Sorn himself — awaits.

The ground continues to tremble. Red light pulses from the stairwell leading down. The portal is growing stronger.

This leads directly into Quest 20.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| Battle plans, roster, and timeline | War room (automatic) | Core intelligence for Quests 19-22 |
| 4 *Potions of Superior Healing* | War room locked cabinet (DC 17) | 8d4+8 HP each |
| 2 *Potions of Fire Resistance* | War room locked cabinet (DC 17) | 1 hour duration; critical for later fights |
| *Scroll of Globe of Invulnerability* | War room locked cabinet (DC 17) | 6th-level spell |
| *Flame Tongue Scimitar* | Cambion Varekh (loot) | +2d6 fire damage, bonus action to ignite |
| 200 gp | Cambion Varekh (loot) | Coin |
| Sorn's seal ring | Cambion Varekh (loot) | DC 12 Deception to command Citadel guards |
| +1 Plate Armour | Captain Harsk (loot, front gate only) | AC 19 |
| *Greatsword of Sharpness* | Captain Harsk (loot, front gate only) | Critical hits sever limbs |
| 2,000 gp in gemstones | Sorn's quarters (DC 18 Investigation, servant's passage only) | Hidden find |
| *Manual of Bodily Health* | Sorn's quarters (DC 18 Investigation, servant's passage only) | Hidden find; +2 Constitution |
| *Portable Hole* | Sorn's quarters (DC 18 Investigation, servant's passage only) | Hidden find |
| Mahavan portrait | Sorn's quarters (DC 18 Investigation, servant's passage only) | Destroying it = devils 1 round slower in finale |
| *Infernal Fork* (+2 trident, +1d6 fire) | Horned devil (A6 loot) | Requires attunement |
| *Devil's Eye Gem* (500 gp or *See Invisibility* 1/long rest) | Horned devil (A6 loot) | |
| Infernal Iron chunk | Horned devil (A6 loot) | Rare crafting material |
| 150 gp in Calishite gold | Horned devil (A6 loot) | Coin |
| *Shield of the Faithful* (+2 shield) | Forgotten armoury (A6, DC 15 Perception) | *Shield of Faith* 1/long rest as bonus action |
| 6 silvered crossbow bolts | Forgotten armoury (A6, DC 15 Perception) | Bypass devil damage resistances |

## Quest Connections

- **From Quest 7:** The sewer route (A3) connects directly to the undercity tunnels the party explored, using the same junction where they first discovered Sorn's underground network.
- **From Quest 8:** Calla's floor plan of the Citadel (obtained during the masquerade infiltration) marks the servant's passage entrance and layout. Without it, finding the entrance requires a DC 18 Perception check. The cambion Varekh appeared at the masquerade and may be recognised.
- **From Quest 15:** Allied forces recruited during the political arc engage the Citadel's front gate guards, reducing the party's combat burden on the front gate route from Far Deadly to Deadly.
- **From Quest 16:** Brenn's sewer intelligence identifies the specific storm drain connecting to the Citadel basement, making the sewer route viable.
- **From Quest 17:** The dismantling of the Citadel's protective wards makes this assault possible. Without Quest 17, the resistance could not breach the building.
- **To Quest 20:** The war room intelligence reveals the path to the ritual chamber below. The horned devil encounter (A6) demonstrates the urgency — these are the creatures that will pour through the portal if it becomes permanent.
- **To Quest 21:** The roster and timeline inform the party's approach to the inner sanctum.
- **To Quest 22:** Destroying the Mahavan portrait in Sorn's quarters provides a tactical advantage in the finale.
