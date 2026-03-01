# Quest 16: Sorn's Retribution

**Level:** 9 | **Type:** Reactive | **Style:** Defensive Siege

Sorn sends a coordinated strike team to destroy the resistance headquarters and assassinate Maren. The attack comes at night in three waves — veterans breach the front, barbed devils descend from the roof, and an assassin infiltrates during the chaos to reach Maren. The party chooses how to fortify the safehouse beforehand. Allied resistance fighters hold secondary positions but can be overwhelmed without support.

This quest is a direct response to the party's alliance-building in Quest 15 (or any overt defiance of Sorn). It cannot be avoided — Sorn has decided the resistance must be crushed before it gains enough strength to challenge him.

---

The safehouse has been busy since nightfall. Maren is bent over a table in the war room, marking positions on a city map with charcoal. Resistance fighters move through the corridors carrying crates of supplies. There's an energy in the air — something between hope and exhaustion.

Then one of the rooftop lookouts scrambles down the ladder, white-faced.

> "Movement on the south street. A lot of it. Armed. They're not city watch — I saw plate armour and red cloaks. They're coming this way."

Maren looks up from the map. Her jaw sets.

> "So. He's done talking."

She turns to the party.

> "We've got minutes, not hours. Whatever we're going to do, we do it now."

## Preparation Phase

Before the assault begins, the party has **10 minutes** of in-game time to prepare. Maren and the resistance fighters follow the party's instructions. This phase is freeform — the party should describe what they want to do, and the DM adjudicates.

The safehouse is a three-storey stone building, formerly a textile warehouse in the Weavers' District. It has:

- **Front entrance:** Heavy wooden double doors on the ground floor, facing the street. A short corridor leads to the main hall.
- **Rear entrance:** A single reinforced door opening onto a narrow alley. Can be barred from inside.
- **Roof access:** A trapdoor in the ceiling of the third floor leads to a flat roof with a low parapet. The roof is accessible from neighbouring buildings via a 10-foot gap.
- **Windows:** Narrow windows on all three floors, shuttered but not fortified. Ground-floor windows are 5 feet above street level.
- **Interior:** Ground floor: main hall and storage. Second floor: war room and sleeping quarters. Third floor: Maren's office and the roof access.

**Available resources:**

- **8 resistance fighters** [FIGHTER1-8] (use Guard stats). Maren assigns them wherever the party directs. They fight bravely but are outmatched by veterans.
- **Furniture and supplies:** Tables, chairs, crates, barrels of water, rope, lumber, nails, a blacksmith's toolkit.
- **Alchemical supplies:** 4 flasks of oil, 2 vials of *Alchemist's Fire* (if the party doesn't have their own).
- **Maren** [MAREN] stays in the second-floor war room unless the party moves her. She is not a combatant — protecting her is the objective.

**Example preparations** (the party may come up with others):

- **Barricade doors (no check):** Reduces the door to half cover and forces attackers to spend 1 round breaking through (or DC 15 Strength to force open).
- **Set oil traps at entrances (DC 12 Dexterity with tinker's tools or thieves' tools):** A trip-wire ignites oil when the door is breached. 2d6 fire damage to creatures in a 10-foot area (DEX 13 half).
- **Nail shutters closed (no check):** Ground-floor windows become difficult terrain to climb through and grant three-quarters cover.
- **Position fighters on the second floor with crossbows (no check):** Fighters gain advantage on ranged attacks against enemies in the main hall below.
- **Rig the roof trapdoor with an alarm (DC 10 with tinker's tools, or any alarm spell):** Provides 1 round of warning before Wave 2.
- **Caltrops in the front corridor (no check if the party has caltrops):** Creatures moving through the corridor take 1d4 piercing and their speed is reduced to 0 for the round (DC 15 DEX to avoid).
- **Move Maren to a hidden room (no check):** The storage room on the ground floor has a false wall (DC 18 Investigation to find from outside). Hiding Maren here forces the assassin in Wave 3 to search for her, buying time.
- **Collapse the gap between rooftops (DC 14 Athletics or mason's tools):** Prevents roof access from neighbouring buildings. If the party doesn't do this, Wave 2 has an easier entry.

Any creative preparation the party suggests should be encouraged. Award advantage, extra damage, or tactical benefits as appropriate. The goal is to reward planning — parties that prepare well should feel the difference.

```yaml
npcs:
  - id: MAREN
    name: Maren Loomwright
    type: Human Noble
    description: A young woman with dark hair pulled back in a severe knot, wearing a plain wool coat over leather armour she clearly isn't used to. She is the leader of the resistance and the daughter of the murdered Guildmaster Thera. Her eyes are fierce but shadowed with exhaustion. She carries a short sword she barely knows how to use — her weapons are conviction and strategy, not steel.
    abilityScores:
      str: 10
      dex: 12
      con: 11
      int: 14
      wis: 13
      cha: 16
    ac: 13
    maxHp: 22
    speed: 30
    skills:
      - persuasion
      - insight
      - history
  - id: FIGHTER1
    type: Guard
    description: Resistance fighter. A wiry woman with a crossbow and a grim expression.
  - id: FIGHTER2
    type: Guard
    description: Resistance fighter. A broad-shouldered man with a shortsword and a dented shield.
  - id: FIGHTER3
    type: Guard
    description: Resistance fighter. A young half-elf with a longbow and shaking hands.
  - id: FIGHTER4
    type: Guard
    description: Resistance fighter. A scarred dwarf with a warhammer and quiet confidence.
  - id: FIGHTER5
    type: Guard
    description: Resistance fighter. A tall woman with a spear and a set jaw.
  - id: FIGHTER6
    type: Guard
    description: Resistance fighter. A former dockworker with a handaxe and a leather apron he never took off.
  - id: FIGHTER7
    type: Guard
    description: Resistance fighter. A middle-aged man with spectacles and a crossbow — a clerk who learned to fight.
  - id: FIGHTER8
    type: Guard
    description: Resistance fighter. A teenage boy with a shortsword who insists he's old enough to be here.
```

## B1. The Front Entrance — Wave 1

**Trigger:** 10 minutes after the lookout's warning (or immediately if the party took no preparation time).

The veterans approach from the south street in a tight formation, shields up, moving with professional discipline. They are not thugs — they are trained soldiers in Sorn's pay, wearing half plate under red cloaks.

> The front doors shudder. Once. Twice. On the third blow, they splinter inward — or slam against whatever barricade you've placed. Four armoured figures pour through the breach, shields locked, swords drawn. The lead veteran barks an order: "Secure the ground floor. Kill anyone who resists. The woman is upstairs."

**The fight:** 4 veterans [VET1-4] breach the front entrance and push toward the stairs. Their objective is to reach the second floor and kill Maren. They fight in pairs, covering each other — they are disciplined and will not break formation unless separated.

**Adjusted XP:** Base 2,800 (700 each), encounter multiplier x2 = 5,600 adjusted. **Hard** (threshold 6,400 for 4 level-9 characters).

**Veteran tactics:**

- VET1 and VET2 form the vanguard. They push through the front corridor, engaging the nearest enemies. They use their Multiattack aggressively and Shield Wall (each grants +2 AC to the other when within 5 feet).
- VET3 and VET4 follow 1 round behind, clearing any resistance fighters from flanking positions. If the party has set traps, these two trigger them.
- If the barricade holds, the veterans spend 1 round breaking through (or VET1 attempts DC 15 Strength). During this round, the party and positioned fighters can attack freely.
- If the party set an oil trap, the first two veterans take 2d6 fire damage. They push through regardless — they are professionals.
- The veterans do not pursue fleeing resistance fighters. Their target is the stairs.

**Resistance fighter behaviour:** Any fighters positioned on the ground floor engage the veterans but are outclassed. A resistance fighter paired against a veteran alone goes down in 2 rounds. Fighters positioned on the second floor with crossbows can harass the veterans from above (the stairwell is open).

**If a veteran reaches Maren:** They attack immediately. Maren has 22 HP and AC 13 — she goes down in one round of veteran Multiattack.

**Between waves:** After Wave 1 is resolved, the party has **3 rounds** (approximately 18 seconds) of quiet. Distant sounds from the roof — scraping, the beat of heavy wings — can be heard with a DC 10 Perception check. Any alarm rigged on the roof trapdoor triggers at the start of the next round.

Connected to:

- Preparation Phase: The corridor and main hall.
- B2: The rooftop above.
- B3: The second and third floors.

```yaml
npcs:
  - id: VET1
    name: Strike Leader Harsk
    type: Veteran
    description: A heavyset human man in well-maintained half plate under a red cloak. A deep scar runs from his left temple to his jaw. He moves with the confidence of a career soldier. He carries a longsword and shield stamped with Sorn's personal mark — a coiled serpent.
    loot:
      - 30 gp
      - Potion of Healing
      - Ward Stone Shard (DC 15 Investigation to find — see Hidden Find)
  - id: VET2
    type: Veteran
    description: A lean human woman with cropped grey hair and cold eyes. She wears half plate and carries a longsword and shield.
    loot:
      - 30 gp
      - Potion of Healing
  - id: VET3
    type: Veteran
    description: A stocky dwarf with a braided beard and a grim expression. Half plate, longsword, and shield.
    loot:
      - 30 gp
      - Potion of Healing
  - id: VET4
    type: Veteran
    description: A young human man with nervous eyes who fights with mechanical precision — trained but not experienced. Half plate, longsword, and shield.
    loot:
      - 30 gp
      - Potion of Healing
```

## B2. The Rooftop — Wave 2

**Trigger:** 3 rounds after Wave 1 ends.

Two barbed devils descend from the night sky onto the safehouse roof. If the party collapsed the gap between rooftops, the devils land directly on the safehouse roof and must enter through the trapdoor. If the gap is intact, one devil crosses from the neighbouring building while the other drops onto the roof from above.

> A shadow passes across the moon. Then another. Two shapes land on the roof with a crack of stone and a scrape of iron. Through the trapdoor — or through a shattered window — you hear a sound like a forge breathing: the low, wet rasp of something inhuman.

**The fight:** 2 barbed devils [DEVIL1] [DEVIL2] attack from the roof. Their objective is to cause chaos and draw the party upward while the assassin (Wave 3) infiltrates below.

**Adjusted XP:** Base 3,600 (1,800 each), encounter multiplier x1.5 = 5,400 adjusted. **Hard** (threshold 6,400).

**Barbed devil tactics:**

- If the roof trapdoor is unguarded, they rip it open and drop into the third floor. If it's barricaded, they spend 1 round tearing through it (barbed devils have 18 Strength).
- They prioritise spellcasters and anyone blocking the stairs. Their Hurl Flame ranged attack (150 ft, 3d6 fire) is used to set fires and create chaos — they target barricades, oil stores, and wooden furniture.
- Their Barbed Hide (grappling a barbed devil deals 1d10 piercing) punishes melee fighters who get too close.
- They fight to the death. Devils don't surrender.
- If the party left resistance fighters on the third floor, the devils kill them in 1-2 rounds before descending.

**Fire hazard:** If the devils use Hurl Flame on wooden barricades or furniture, there is a 50% chance the fire spreads. A spreading fire fills a 10-foot area with smoke (lightly obscured) after 1 round, and the area becomes dangerous terrain (1d6 fire damage per round) after 2 rounds. The fire can be doused with a barrel of water or a *Create Water* spell.

**The distraction:** The devils are loud, terrifying, and destructive — by design. While the party deals with them, the assassin slips in from the rear entrance. If the party splits to cover both threats, the encounter becomes significantly harder. If the party focuses entirely on the devils and ignores the ground floor, the assassin reaches Maren unopposed.

Connected to:

- B1: The ground floor below.
- B3: The assassin enters during this wave.

```yaml
npcs:
  - id: DEVIL1
    type: Barbed Devil
    description: A nine-foot humanoid bristling with iron-hard barbs. Its skin is a dark, mottled red, and its eyes burn with hellfire. It reeks of sulphur and hot metal. When it moves, the barbs scrape against each other with a sound like sharpening knives.
    loot:
      - 5 infernal barbs (caltrops — 2d4 piercing + 1d4 fire damage)
  - id: DEVIL2
    type: Barbed Devil
    description: Slightly smaller than its companion, with barbs that glow faintly orange as if freshly forged. One of its horns is broken — a wound from a previous battle. It fights with savage, methodical precision.
    loot:
      - 5 infernal barbs (caltrops — 2d4 piercing + 1d4 fire damage)
```

## B3. The Interior — Wave 3

**Trigger:** 1 round after Wave 2 begins.

While the barbed devils assault the roof, the assassin enters through the rear alley door. If the party barricaded the rear entrance, the assassin picks the lock (Thieves' Tools +7) or finds another entry — a ground-floor window, a vent, or a gap created by the combat damage. The assassin is patient and silent.

> Nothing announces the assassin's arrival. No crash of doors, no battle cry. Just a shadow that shouldn't be there — a flicker of movement at the edge of the lantern light, and then silence again.

**The fight:** 1 assassin [ASSASSIN1] infiltrates the safehouse with a single objective: kill Maren Loomwright.

**Adjusted XP:** Base 3,900, encounter multiplier x1 = 3,900 adjusted. **Medium** (threshold 3,400) — but the party is likely depleted from Waves 1 and 2. The assassin's Assassinate feature makes the first strike devastating.

**Assassin tactics:**

- The assassin uses Stealth (+9) to move through the safehouse unseen. They avoid combat with anyone who isn't their target. If a resistance fighter spots them, they kill the fighter silently (Assassinate: automatic critical on surprised targets) and continue.
- They know the safehouse layout — Sorn provided intelligence. They move directly toward where they expect Maren to be (the second-floor war room). If the party moved Maren to the hidden room, the assassin checks the war room first, finds it empty, and begins searching. This costs them 2 rounds.
- The assassin's *Dagger of Venom* is coated before entry. Their first strike against Maren deals 4d6 + 3 piercing (Sneak Attack + Assassinate critical) plus DC 15 Constitution save or 2d10 poison damage and the poisoned condition for 1 minute. Against Maren's 22 HP, this is almost certainly lethal.
- If discovered before reaching Maren, the assassin fights the nearest threat. They are dangerous — 78 HP, multiattack, and Evasion — but they are alone and can be overwhelmed.
- If reduced to half HP with no path to Maren, the assassin attempts to flee through the nearest exit. They drop a smoke bomb (heavily obscured, 20-foot radius, lasts 1 round) and run.

**Detecting the assassin:** The party can detect the assassin before they reach Maren:

- **DC 19 Perception (passive or active):** A party member hears or sees the assassin moving through the safehouse. The assassin's Stealth is +9; they roll against the party's passive Perception.
- **Alarm spells or rigged alarms on the rear door:** Automatically detect the assassin's entry point.
- **A resistance fighter on the ground floor:** If the party posted guards at the rear entrance, the guard may spot the assassin (Guards have passive Perception 12 vs. the assassin's Stealth). If the guard fails, the assassin kills them silently. If the guard succeeds, they shout a warning before being attacked.
- **If Maren is hidden:** The assassin searching for Maren makes noise — opening doors, overturning furniture. DC 14 Perception detects this.

**If Maren goes down:** Maren makes death saving throws as normal. A resistance fighter or party member can stabilise or heal her. If she dies, the quest is a partial failure — the safehouse is defended, but the resistance loses its leader. The consequences are severe: morale collapses, and the assault on the Citadel (Quest 18) is significantly harder without her coordination.

**If Maren survives:** She is shaken but resolute. The assassination attempt hardens her resolve. She will not hide again.

Connected to:

- B1: The ground floor, where the assassin enters.
- B2: The roof assault happens simultaneously.

```yaml
npcs:
  - id: ASSASSIN1
    name: Vel
    type: Assassin
    description: A slight figure in dark leather, face hidden behind a featureless black mask. They move like smoke — no wasted motion, no sound. Their leather armour is lined with felt to muffle movement, and their boots leave no print. They carry two shortswords, a hand crossbow with poisoned bolts, and a curved dagger that glistens with venom. Professional. Impersonal. Deadly.
    abilityScores:
      str: 11
      dex: 16
      con: 14
      int: 13
      wis: 11
      cha: 10
    ac: 15
    maxHp: 78
    speed: 30
    skills:
      - stealth
      - deception
      - perception
      - acrobatics
    loot:
      - Dagger of Venom (DC 15 Con save, 2d10 poison + poisoned 1 minute, 1/day)
      - 150 gp
      - Map of resistance safehouses with Sorn's annotations (priority targets circled in red ink)
```

---

## After the Assault

When the last attacker falls or flees, the safehouse is battered but standing. Smoke drifts through broken windows. Furniture is splintered. Blood streaks the corridors. The resistance fighters who survived are slumped against walls, catching their breath. Someone is crying quietly on the second floor.

Maren (if she survived) emerges from wherever the party placed her. She surveys the damage without flinching.

> "He sent soldiers. He sent devils. He sent a killer for me specifically." She picks up a fallen veteran's red cloak and drops it. "Good. It means he's afraid."

She turns to the party.

> "We can't stay here. He'll send more. But before we move — search these bodies. Sorn wouldn't send professionals without giving them intelligence. Whatever they're carrying, I want to see it."

### Searching the Bodies

The veterans carry standard military gear, coin, and potions (see loot per NPC). In addition:

**The safehouse map:** The assassin carries a leather case containing a detailed map of every known resistance safehouse in Ashenmere. Sorn has annotated it in his own hand — elegant script in dark red ink. Three locations are circled and marked "priority targets." One is this safehouse. The other two are safehouses the party hasn't visited yet. The map also reveals Sorn's intelligence-gathering priorities: guild meeting points, supply routes, and the names of resistance contacts (some of whom the party knows).

This map is devastating — it means Sorn knows far more than the resistance thought. But it also reveals what Sorn considers important. Maren studies it and notes: "He's marked the supply routes but not the sewers. He doesn't know about our underground passages." This confirms the sewer route remains viable for Quest 18.

### The Ward Stone Shard

A DC 15 Investigation check on Strike Leader Harsk's body (VET1) reveals a small, rough-cut stone shard sewn into a hidden pocket in his cloak lining. The shard is warm to the touch and pulses with a faint amber light — irregular, like a heartbeat.

- **DC 13 Arcana:** The shard radiates abjuration magic. It's not a complete item — it's a fragment of something larger.
- **DC 16 Arcana:** The shard resonates with the same energy as the ward stones protecting the Council Citadel. When held and concentrated on, it tugs gently toward the Citadel — like a compass needle pointing north. It's a fragment of a ward stone, and it wants to be whole again.
- **DC 18 Arcana:** The shard could be used to locate individual ward stones within the Citadel. Whoever carries it will feel it pulse more intensely as they approach a ward stone — effectively a dowsing rod for Sorn's magical defences.

If the party recovers the shard, Quest 17 (finding and disabling the ward stones) becomes significantly easier — the shard eliminates the need to search blindly and grants advantage on checks to locate the stones.

### Interrogating Captured Veterans

If any veterans survived and were captured (veterans surrender at quarter HP or lower if isolated from allies), they can be interrogated:

- **DC 12 Intimidation or Persuasion:** The veteran confirms they were hired through a Citadel intermediary. They've never met Sorn directly. They were told the resistance is a "terrorist cell" planning to overthrow the council.
- **DC 14 Intimidation:** The veteran reveals the assault was planned for weeks. Sorn's people had the safehouse under surveillance. The veteran knows the Citadel has been fortified — "ward stones" protect the building, and even the city watch isn't allowed past the inner gates anymore.
- **DC 16 Intimidation:** The veteran admits they saw something that shook them — one of the Citadel guards had "eyes like a cat" and spoke in a language that made the veteran's skin crawl. They don't know what it means, but they know something is deeply wrong inside the Citadel. They describe the approximate locations of ward stones they passed when entering the Citadel for briefings.

This intelligence directly sets up Quest 17.

### Brenn's Revelation

Among the resistance fighters who helped defend the safehouse is **Brenn** [BRENN] — a stocky woman with short-cropped hair and a soldier's bearing. She fought with disciplined precision during the assault, markedly better than the other resistance fighters. After the fight, she approaches the party quietly.

> "I need to tell you something. I should've said it sooner, but I wasn't sure I could trust anyone." She glances at Maren, then back. "I was a Citadel guard. Two years. I left when things started changing — when the new councillor brought in his own people and the old guard started disappearing."

Brenn knows the Citadel's layout from her service. More importantly:

> "There's a sewer grating on the north side, below the kitchens. When I was on duty, we reported it as a security risk three times. Rusted through, barely held together. Nobody ever fixed it — Sorn's people don't care about the old infrastructure, just the fancy ward stones and the devils at the gate."

Brenn can sketch the grating's location and the sewer route leading to it. This opens the **sewer infiltration route** for Quest 18 — the party can enter the Citadel through the sewers without needing the undercity knowledge from Quest 7.

- **DC 10 Persuasion (or no check, if the party defended her during the assault):** Brenn also reveals the guard rotation patterns she remembers. They may have changed, but the shift schedule — 4 hours on, 4 off — likely hasn't. This grants advantage on the first Stealth check when using the sewer route in Quest 18.

**If the party asks Brenn to join the assault (Quest 18):** She agrees without hesitation. "I've been waiting for someone to ask." She can serve as a guide through the sewer route, granting advantage on navigation checks and providing warnings about guard positions.

Connected to:

- B1: The ground floor and main hall.
- The safehouse map and Ward Stone Shard are found here.
- Brenn's revelation happens here.

```yaml
npcs:
  - id: BRENN
    name: Brenn
    type: Human Veteran
    description: A stocky woman in her thirties with short-cropped brown hair and a soldier's posture. She wears mismatched leather armour and carries a longsword with a well-worn grip. Her eyes are steady and watchful — she moves like someone trained to guard doorways and watch corners. A faded Citadel insignia is still visible on her belt buckle, scratched but not removed.
    abilityScores:
      str: 16
      dex: 13
      con: 14
      int: 10
      wis: 12
      cha: 10
    ac: 14
    maxHp: 58
    speed: 30
    skills:
      - athletics
      - perception
      - survival
```

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| *Helm of Telepathy* | Maren (quest reward) | *Detect Thoughts* at will, *Suggestion* 1/day |
| 120 gp (30 gp x4) | Veterans (loot) | Carried individually |
| 4 *Potions of Healing* | Veterans (loot) | One per veteran |
| 10 infernal barbs | Barbed devils (loot) | Caltrops: 2d4 piercing + 1d4 fire damage |
| *Dagger of Venom* | Assassin (loot) | DC 15 Con save, 2d10 poison + poisoned 1 min, 1/day |
| 150 gp | Assassin (loot) | On the assassin's person |
| Map of resistance safehouses | Assassin (loot) | Sorn's annotations reveal his intelligence priorities |
| Ward Stone Shard | VET1 — Strike Leader Harsk (DC 15 Investigation) | Hidden find; acts as compass toward ward stones |
| Sewer route intelligence | Brenn (side opportunity) | Opens sewer infiltration route for Q18 without Q7 |

## Quest Connections

- **Triggered by:** Alliance-building (Q15) or being too public on Sorn's escalation track. This quest cannot be avoided once triggered.
- **To Quest 17:** Captured veterans reveal the existence of ward stones protecting the Citadel. The Ward Stone Shard (if recovered) acts as a dowsing rod, making Q17 significantly easier.
- **To Quest 18:** Brenn's intelligence opens the sewer infiltration route into the Citadel without needing Q7's undercity knowledge. The safehouse map reveals Sorn's intelligence gaps — he doesn't know about the sewer passages, confirming the route is viable.
- **To Quest 15 (retroactive):** Allies recruited in Q15 may provide additional resistance fighters for the defence, increasing the safehouse's garrison beyond the base 8 guards.
- **To Quest 13 (retroactive):** If the traitor was unmasked in Q13, the party may have anticipated Sorn's surveillance. If Q13 was not completed, the assault is harder — Sorn has better intelligence on the safehouse layout.
