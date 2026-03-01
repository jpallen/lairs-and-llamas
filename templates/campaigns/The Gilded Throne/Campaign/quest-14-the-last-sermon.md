# Quest 14: The Last Sermon

**Level:** 8 | **Type:** Discovery (optional) | **Style:** Defence/Social

Brother Aldous, rescued from captivity in the Tanners' Quarter, has called a public sermon in the Old Quarter square. He intends to denounce Sorn as a fiend before the people of Ashenmere — naming him openly and calling for the city to resist. Sorn's agents have been ordered to silence him before he finishes. The party must protect Aldous while he delivers the sermon over 10 rounds, fending off waves of attackers from multiple directions as the crowd panics around them.

This quest is a tower defence encounter. The challenge is not raw difficulty but positional management — enemies arrive from different directions at staggered intervals, and the party must hold a perimeter around a stationary NPC while civilians flood the area. If Aldous completes the sermon, the Church of Tyr is reinvigorated and he consecrates a backup blessed weapon. If he is killed or the sermon is disrupted, a key ally and divine resource are lost permanently.

---

Word has spread through the Old Quarter that Brother Aldous will speak at noon in the square before the Chapel of Tyr. By the time you arrive, a crowd of perhaps sixty civilians has gathered — merchants, labourers, families, beggars. The chapel doors stand open behind a makeshift wooden platform where Aldous waits, clutching a holy symbol of Tyr in both hands. His face is bruised and gaunt from his captivity, but his eyes are steady.

## A1. The Old Quarter Square

A broad cobblestone square surrounded by two- and three-storey timber-framed buildings. The Chapel of Tyr sits on the north side, its doors open. A low wooden platform has been erected in front of the chapel steps — three feet high, wide enough for one person. Market stalls line the east and west edges of the square, now abandoned as the crowd gathers. A dry fountain stands in the centre of the square, its stone basin cracked and filled with dead leaves.

The crowd fills most of the square, leaving narrow paths along the building fronts. Four streets feed into the square — north (behind the chapel), south (the main approach from the harbour district), east (a narrow lane between a bakery and a chandler's shop), and west (a wider street leading toward the Tanners' Quarter).

Brother Aldous [ALDOUS] stands on the platform. He is pale but resolute. When he sees the party, he nods.

> "Thank you for coming. I know what I'm about to do — and I know what it will cost. But these people deserve the truth. Sorn is no man. He is a fiend wearing a man's face, and if no one speaks it aloud, this city will fall without ever knowing why."

He pauses, looking out over the crowd.

> "I need ten minutes. That's all. Ten minutes to say what must be said and to consecrate the weapon. Will you keep me alive for ten minutes?"

**If the party agrees:** Aldous steps to the front of the platform and begins speaking. The sermon starts at initiative count 0 of round 1.

**If the party asks about the weapon:** Aldous produces a simple cloth-wrapped bundle — a weapon frame without a blade. "The Church can bless any piercing weapon the faithful bring. If you have one, I can consecrate it during the prayer. It won't be as strong as what the cathedral could have provided, but it will burn a fiend's flesh all the same."

**If the party tries to dissuade him:** A DC 18 Persuasion check convinces Aldous to delay one day — but the attack still comes (Sorn's agents are already in position), and without the sermon the crowd does not rally. This is strictly worse for the party.

**Preparation time:** The party has 5 minutes before the sermon begins to position themselves. They can scout the surrounding streets, set up on rooftops, position among the crowd, or take any other precautions. Encourage creative preparation — this is the most tactically important phase.

Connected to:

- A2: The rooftops overlooking the square to the east and west.
- A3: The surrounding streets feeding into the square from all four directions.
- A4: The platform and chapel steps where Aldous stands.

```yaml
npcs:
  - id: ALDOUS
    name: Brother Aldous
    type: Human Priest
    description: A lean, middle-aged man with close-cropped grey hair, hollow cheeks, and the lingering marks of captivity — bruises on his wrists, a half-healed cut above his left eye. He wears a simple brown robe with a battered iron holy symbol of Tyr around his neck. His voice is hoarse but carries conviction. He will not stop the sermon willingly once begun.
    abilityScores:
      str: 10
      dex: 10
      con: 12
      int: 13
      wis: 16
      cha: 14
    ac: 13
    maxHp: 27
    speed: 30
    skills:
      - religion
      - persuasion
      - insight
    notes: Aldous has Shield of Faith prepared and will cast it on himself at the start of the sermon (AC 15). He concentrates on this for the duration. He has Healing Word (bonus action) and will use it once on himself if reduced below 10 HP, but will not cast offensive spells — his action every round is the sermon itself.
```

## A2. The Rooftops

The buildings flanking the square are two to three storeys tall with sloped tile roofs. Access is possible via external ladders on the east and west sides (DC 10 Athletics to climb), interior staircases through the buildings, or magical means.

> The rooftops offer a commanding view of the square below. Clay tiles slope gently toward the eaves, and chimney stacks provide partial cover. From up here you can see every street approach and the full extent of the crowd.

**Positioning:** A character on the rooftops has half cover behind chimney stacks and a clear line of sight to the platform, the square, and all four street entrances. Movement across rooftops requires no check on flat sections, but jumping between buildings (10-foot gap) requires a DC 12 Athletics or Acrobatics check. Failure means the character lands in the alley below, taking 2d6 falling damage.

**Wave 2 arrives here.** In round 4, two veterans [VET1] [VET2] appear on the eastern and western rooftops respectively, having climbed up from the far side of the buildings. If no party member is on the rooftops, they have clear shots at Aldous with heavy crossbows.

Connected to:

- A1: The square below (15 feet down on the east and west sides).
- A3: The surrounding streets visible from above.
- A4: The platform is 60 feet from the nearest rooftop edge — within heavy crossbow range.

## A3. The Surrounding Streets

Four streets feed into the square. Each is 15 feet wide, flanked by buildings, and currently clogged with civilians either arriving late or fleeing the growing commotion.

**South street (main approach):** The widest street, paved with cobblestones. Market carts are parked along both sides, creating natural chokepoints. Wave 1 arrives from here.

**East lane:** A narrow passage between a bakery and a chandler's shop. Barely 10 feet wide. One character can block it entirely. Civilians fleeing east create difficult terrain for 2 rounds after panic begins.

**West street:** A wider street leading toward the Tanners' Quarter. A broken cart has been left in the middle of the road (placed deliberately by Sorn's agents — DC 14 Perception to notice it was positioned, not abandoned). Wave 3's cambion arrives from this direction.

**North passage (behind the chapel):** A narrow alley running behind the Chapel of Tyr. The chapel's rear door is locked (DC 15 Thieves' Tools or DC 20 Strength to force). If the party secures this, it remains safe throughout the encounter.

**Crowd behaviour:** When combat begins in round 1, the crowd panics. For the first 2 rounds, fleeing civilians fill the south and east streets, creating difficult terrain in those areas. By round 3, most civilians have fled. By round 5, the square is mostly clear except for a handful of cowering bystanders near the fountain.

Connected to:

- A1: All four streets connect to the square.

## A4. The Platform and Chapel Steps

The wooden platform stands three feet above the square, backed by the chapel steps. Aldous stands at the front edge, visible to the crowd. The chapel doors are open behind him — the interior is empty, with wooden pews, a stone altar, and stained glass windows depicting Tyr's scales.

> Brother Aldous raises his hands and his voice cuts through the noise of the crowd. "People of Ashenmere! I have seen the face behind the mask. The man who sits in the Citadel, who calls himself your protector — he is no man at all. He is a thing of the lower planes, and I will prove it before Tyr's own altar!"

**The sermon:** Aldous delivers the sermon over 10 rounds. He does not move, does not take cover, and does not stop speaking unless reduced to 0 HP or physically dragged from the platform (which requires a contested Strength check against his DC 10, but he uses his action to resist, making it DC 14 with divine stubbornness).

**Sermon progress tracker:**

| Round | Sermon Content | Mechanical Effect |
|-------|---------------|-------------------|
| 1-3 | Aldous names Sorn and describes his fiendish nature | Crowd murmurs, some flee |
| 4-6 | Aldous recounts evidence — the disappearances, the cursed cargo, the dead | Crowd begins to believe; DC 12 Intimidation from enemies to cause further panic has disadvantage |
| 7-9 | Aldous calls on Tyr for judgment and begins the consecration prayer | Faint golden light surrounds the platform; fiends within 30 feet have disadvantage on attacks |
| 10 | Aldous completes the sermon and consecration | See "Sermon Completed" below |

**If Aldous reaches 0 HP:** He collapses. The sermon is incomplete. The crowd scatters in despair. The consecration fails. See "Sermon Disrupted" below.

Connected to:

- A1: The platform is at the north edge of the square.
- The chapel interior can serve as a fallback position if Aldous is moved inside.

---

## The Waves

This encounter plays out over 10 rounds. All enemies have a single objective: kill Brother Aldous. They will attack whoever is between them and the platform, but given the choice, they always prioritise reaching Aldous.

### Wave 1: The Thugs (Round 1)

As Aldous speaks his first words, four thugs [THUG1] [THUG2] [THUG3] [THUG4] push through the crowd from the south street. They are street muscle — hired blades with no loyalty to Sorn beyond coin. They fight aggressively but break easily.

> Four heavyset figures shove through the scattering crowd from the south, cudgels and short swords drawn. One of them bellows, "Shut the priest up! Now!"

**Tactics:** The thugs charge directly toward the platform in a group. They are not tactical — they do not flank, do not take cover, and do not coordinate. They simply try to reach Aldous by the most direct path. If two or more thugs are downed, the survivors attempt to flee on their next turn.

**Adjusted difficulty:** 400 XP x2 (group multiplier) = 800 XP. Trivial for a level 8 party. This wave exists to draw the party south and establish positions before the real threats arrive.

```yaml
npcs:
  - id: THUG1
    type: Thug
    description: A broad man with a broken nose and a short sword. Hired muscle from the harbour district.
  - id: THUG2
    type: Thug
    description: A scarred woman with a cudgel and a mean look. She has a stone of far speech in her belt pouch — see Hidden Find.
  - id: THUG3
    type: Thug
  - id: THUG4
    type: Thug
```

### Wave 2: The Veterans (Round 4)

Three rounds after the thugs attack, two veterans [VET1] [VET2] appear on the rooftops — one east, one west. They are professional soldiers in Sorn's personal employ, equipped with heavy crossbows and longswords. They have been in position since before the sermon began, waiting for the signal.

> A crossbow bolt slams into the wooden platform inches from Aldous's feet. On the rooftops above the square, two armoured figures rise from behind chimney stacks, reloading with practised speed.

**Tactics:** The veterans use their first round to fire heavy crossbows at Aldous from the rooftops (60 feet, no disadvantage, half cover from chimney stacks gives them AC 19). On subsequent rounds, they continue firing if unengaged. If a party member reaches the rooftops, they switch to longswords and fight defensively, using the terrain to maintain distance. They do not flee — they are disciplined and will fight to the death.

**If no party member is on the rooftops:** The veterans have uncontested shots at Aldous. Two heavy crossbow attacks per round against AC 15 (Shield of Faith). Aldous has 27 HP. Without intervention, the veterans will kill him in 2-3 rounds.

**Adjusted difficulty:** 1,400 XP x1.5 (positional advantage) = 2,100 XP. Easy-Medium. The real danger is their elevation and clear line of fire, not their raw combat power.

```yaml
npcs:
  - id: VET1
    name: Rooftop Sniper (East)
    type: Veteran
    description: A grim-faced woman in chain mail with a heavy crossbow and longsword. She wears no insignia but carries 25 gp and a Potion of Healing. Professional, silent, and precise.
  - id: VET2
    name: Rooftop Sniper (West)
    type: Veteran
    description: A stocky man in chain mail with a heavy crossbow and longsword. Identical equipment to VET1. He carries 25 gp and a Potion of Healing.
```

### Wave 3: The Cambion (Round 7)

Sorn has sent one of his own — a cambion [CAMBION1] — to ensure the job is done. The cambion arrives from the west street in round 7, striding through the now-empty square with unhurried confidence. It is here to kill Aldous personally and make an example of him.

> The air turns cold. From the west street, a figure walks into the square with measured, deliberate steps. It looks human at first — a tall man in a dark coat with a longsword at his hip — but as it steps into the light, its skin shimmers with an oily, reddish sheen, and its eyes are solid black. It speaks a single word in a voice that resonates in your chest: **"Enough."**

**Tactics:** The cambion is arrogant and powerful. On round 7, it uses Fire Ray (120 ft) twice targeting Aldous from the west street entrance. On round 8, it closes to melee range, drawing its +1 longsword and engaging whoever stands between it and the platform. It uses Fiendish Charm on the strongest-looking melee combatant (DC 15 Wisdom save) to turn them against their allies. If reduced below 20 HP, it attempts to fly (30 ft) directly to the platform to strike Aldous in melee, ignoring the party.

**The consecration effect:** If Aldous has reached round 7 of the sermon, the golden light from the platform gives fiends within 30 feet disadvantage on attack rolls. This meaningfully blunts the cambion's effectiveness if the party can keep it close.

**Adjusted difficulty:** 1,800 XP x1 = 1,800 XP. Easy-Medium in isolation, but the party has already spent resources on Waves 1 and 2, and may be split across positions.

**Cumulative encounter difficulty:** 3,600 XP total across all waves. Manageable but taxing. The real challenge is positional — a party that clusters together will be outflanked; a party that spreads too thin will be overwhelmed.

```yaml
npcs:
  - id: CAMBION1
    name: Sorn's Cambion
    type: Cambion
    description: A tall, lean figure in a dark leather coat with a faintly reddish tint to its skin and solid black eyes. It carries a +1 longsword and moves with predatory grace. It speaks Common and Infernal, and addresses Aldous by name — it knows exactly who it has been sent to kill. It carries 100 gp and a folded parchment bearing Sorn's written kill order for Aldous, sealed with the serpent sigil.
    notes: The cambion has a +1 longsword (lootable), 100 gp, and Sorn's written kill order. The kill order is written in Sorn's own hand and explicitly names Aldous — it is direct evidence of Sorn ordering an assassination on holy ground.
```

---

## Crowd Behaviour

The crowd is a significant factor in this encounter. Sixty civilians are present at the start, and their behaviour changes as events unfold.

**Rounds 1-2:** Panic. Civilians scream and flee in all directions. The south and east streets become difficult terrain as people clog the exits. Any area effect that hits civilians kills 1d4 commoners and turns the crowd hostile to the party — Aldous will condemn the party from the platform, and the sermon's moral authority is undermined.

**Rounds 3-4:** The square begins to clear. Difficult terrain in streets ends. A handful of bystanders cower near the fountain or press against building walls.

**Rounds 5-6:** Most civilians have fled. A few brave souls remain, watching from doorways and alleys.

**Rounds 7-9:** The cambion's arrival causes a second wave of panic among any remaining bystanders. However, if the sermon has reached round 7 and the golden light is visible, 2d6 civilians stand their ground — they have been moved by Aldous's words.

**Round 10 (if Aldous completes the sermon):** The remaining civilians cheer. Those who stood their ground pick up improvised weapons (clubs, chair legs, cobblestones) and form a loose perimeter around the platform. They are mechanically useless in combat but narratively powerful — the people of Ashenmere have chosen a side.

---

## After the Encounter

### Sermon Completed

If Aldous survives all 10 rounds, read the following:

> Aldous's voice rises to a crescendo, cracked and raw. "By the judgment of Tyr, by the scales that weigh every soul — I name this creature Sorn, fiend of the lower planes, and I call upon the Maimed God to mark him!" Golden light blazes from the platform. The holy symbol in Aldous's hands burns white-hot for a single instant, and you feel a pulse of divine energy wash over the square like a warm wind. Then it fades, and Aldous staggers, catching himself on the platform's edge. He holds up the weapon you gave him — and it glows faintly, a clean radiant light that hums with purpose.

> "It is done," he says quietly. "Not as strong as a cathedral's blessing — but it will burn him."

**The blessed weapon:** The party chooses one piercing weapon to receive the blessing. It gains the blessed property and deals an additional 1d6 radiant damage against fiends. This serves as a backup for the primary blessed weapon — a failsafe in case the original is lost or destroyed.

**Aldous's condition:** He is exhausted. The sermon and consecration have drained him. He needs a full day of rest before he can cast spells again. He retreats into the Chapel of Tyr and begins organising the faithful — from this point forward, the Church of Tyr is an active ally in the campaign.

**Church support:** The Church provides the party with:
- 4 *Potions of Greater Healing* (4d4+4 each)
- 1 *Scroll of Greater Restoration*

### Sermon Disrupted

If Aldous is reduced to 0 HP or physically removed from the platform before round 10:

> Aldous crumples. The golden light gutters and dies. The crowd — what's left of it — lets out a collective gasp, then silence. A woman near the fountain begins to weep. The chapel doors swing shut in the wind, and the sound echoes across the empty square like a coffin lid closing.

The consecration fails. No blessed weapon. No church support. No divine ally. The Church of Tyr in Ashenmere is broken — its last outspoken priest silenced. If Aldous is dead (failed death saves), the loss is permanent. If stabilised, he survives but is shattered — he will not attempt another public act against Sorn.

### Looting the Enemies

**Cambion:** +1 longsword, 100 gp, Sorn's written kill order for Aldous (sealed with the serpent sigil — direct evidence of Sorn ordering assassination on holy ground).

**Veterans (each):** 25 gp, *Potion of Healing*.

**Thugs:** Standard thug equipment. THUG2 carries a hidden find — see below.

### Hidden Find: The Stone of Far Speech

**DC 14 Investigation (searching the thugs' bodies):** THUG2 carries a smooth grey stone the size of a walnut, warm to the touch. It does not radiate magic to casual observation.

**DC 15 Arcana (to identify):** The stone is a *stone of far speech* — one half of a paired set. When held and spoken to, it transmits the speaker's voice to the paired stone, and vice versa. The paired stone is in the Council Citadel, in a room used by Sorn's agents.

This is a significant intelligence asset. In Act IV, the party can use the stone to feed Sorn false information — fake troop movements, invented betrayals, or misleading reports about the party's location and intentions. The DM should track what information the party transmits and have Sorn react accordingly.

### Side Opportunity: Grundar the Smith

After the sermon (completed or not), a retired dwarf smith named Grundar [GRUNDAR] approaches the party. He watched the fight from his shop window on the west side of the square and was impressed.

> A barrel-chested dwarf with a white beard and soot-stained hands steps out of a workshop doorway, wiping his palms on a leather apron. "Name's Grundar. I haven't lifted a hammer in five years, but after watching that? I'll make an exception." He looks at your weapons with a craftsman's eye. "Bring me any weapon. I'll reforge it proper. No charge. One day's work."

**Grundar's offer:**
- He will reforge any standard weapon to **+1** for free. Takes 1 day.
- If the party has cursed weapons recovered from Quest 10, Grundar recognises the fiendish craftsmanship and offers to purify and reforge them to **+2**. This takes 2 days and requires the curse to be broken first (*Remove Curse* or the church's *Scroll of Greater Restoration*).
- Grundar will only do this once per weapon. He is retired and this is a personal favour, not a standing service.

```yaml
npcs:
  - id: GRUNDAR
    name: Grundar Ironbrow
    type: Dwarf Commoner (retired weaponsmith)
    description: A barrel-chested dwarf with a white beard, soot-stained hands, and the powerful forearms of a lifelong smith. He retired five years ago after his eyesight began to fail, but his hands are still steady and his craft is still sharp. He lives above his shuttered workshop on the west side of the Old Quarter square.
```

Connected to:

- A1: The square, after the encounter is resolved.
- The Chapel of Tyr: Aldous retreats here if he survives.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| Blessed piercing weapon (+1d6 radiant vs fiends) | Aldous (sermon completed) | Party chooses the weapon; backup for primary blessed weapon |
| 4 *Potions of Greater Healing* | Church of Tyr (sermon completed) | 4d4+4 healing each |
| *Scroll of Greater Restoration* | Church of Tyr (sermon completed) | Single use |
| +1 longsword | Cambion loot | Standard +1 weapon |
| 100 gp | Cambion loot | Carried on person |
| Sorn's written kill order | Cambion loot | Direct evidence; sealed with serpent sigil |
| 25 gp + *Potion of Healing* | Veteran loot (x2) | 50 gp total, 2 potions |
| Stone of far speech | THUG2 (DC 14 Investigation) | Hidden find; paired to stone in Citadel |
| Free weapon reforge to +1 | Grundar (side opportunity) | 1 day; cursed weapons from Q10 can become +2 (2 days) |

## Quest Connections

- **From Quest 10:** Brother Aldous must be rescued from captivity before this quest can occur. If Aldous died in Quest 10, this quest is unavailable.
- **From Quest 11:** The civil unrest and public fear following Quest 11 motivates Aldous to act publicly rather than work in secret. Without Quest 11, Aldous would not risk a public sermon.
- **To Quest 22:** The backup blessed weapon serves as a failsafe — if the primary blessed weapon is lost or destroyed before the finale, the party still has a means to harm Sorn.
- **To Act IV:** The stone of far speech (if found and identified) allows the party to feed false information directly to Sorn's agents in the Citadel, creating opportunities for misdirection and ambush throughout Act IV.
- **If skipped:** No backup blessed weapon. No divine support from the Church of Tyr in the finale. No stone of far speech for intelligence operations. Grundar's reforging offer is also lost.
