# Quest 11: Civil Unrest

**Level:** 7 | **Type:** Reactive | **Style:** Large-scale urban combat

Sorn declares martial law after staging a "terrorist attack" on the Council Citadel — a firebomb detonated at the gates, blamed on the resistance. City guards clash with guild militias in the streets. The party must navigate the chaos, protecting civilians, rallying resistance fighters, and preventing Sorn's forces from seizing the last independent guild hall. Maren is on the front lines, and the party cannot be everywhere at once.

This quest forces a tactical deployment decision — two districts are under simultaneous assault, and the party can only defend one. The other is handled by NPC allies, with consequences that carry forward.

---

Dawn breaks over Ashenmere to the sound of a distant explosion. A plume of black smoke rises from the Council Citadel. Within the hour, broadsheets appear on every street corner — printed by Sorn's loyalists, not the Ashenmere Broadsheet — declaring that "resistance terrorists" attacked the Citadel with alchemical explosives. By mid-morning, Sorn has declared martial law. Armed city watch patrols flood the streets, and any citizen found outside after sundown will be arrested.

The explosion was staged. Sorn's agents set the charge themselves.

## A1. The Streets in Chaos

The party is woken — or found — by a breathless resistance runner named Pell [PELL], a teenage girl with soot on her face and a bloody scrape across one arm.

> "It's all gone wrong. Sorn's declared martial law — the watch is everywhere. Maren's at the barricades in the Weavers' District, trying to hold the line. She sent me to find you. There are two attacks coming, and we can't stop both."

Pell delivers the tactical situation:

- **The Guild Hall** — Sorn's forces are moving on the Dockmasters' Guild hall, the last independent guild headquarters in the city. Brokka Ironjaw [BROKKA] is inside with a handful of loyal dockers. If the guild hall falls, Sorn controls all five guild seats and can pass any law he wants.
- **The Market District** — A squad of Sorn's enforcers is sweeping through the central market, smashing stalls and arresting anyone who resists. Civilians are trapped. The resistance has fighters nearby but no one to lead them.

Maren [MAREN] needs the party to choose one. She and her fighters will handle the other — but they are spread thin, and their chances are worse without the party.

> "I'm not going to lie to you. Wherever you go, people will live. Wherever you don't, people will die. I need you to choose."

**If the party asks for more detail:**

- **Guild Hall:** Brokka reports (via a dock runner) that she's seen "something that isn't human" among the attackers. The assault force includes soldiers and at least one creature that shrugs off crossbow bolts. This is the barbed devil.
- **Market District:** Refugees from the market describe a hulking man in gladiatorial armour cutting through the watch deserters who tried to protect them. He has berserkers with him — frenzied fighters in mismatched armour who attack anything that moves.

**If the party tries to split up:** Maren shakes her head. "No. I've seen what Sorn's people can do. You go in half-strength, you come out dead. Pick one. Together."

**If the party delays more than 10 minutes:** Another runner arrives — one of the locations has been overrun. The party can only reach the other in time. If they refuse to choose, Maren chooses for them: the Guild Hall, because losing Brokka's council seat is politically fatal.

**Vara's legacy:** If Vara Inkwell was saved in Q9, the streets are full of sympathetic civilians who help the party move through checkpoints. Reduce any Stealth or Deception DCs to navigate the streets by 3, and no civilian mobs interfere. If Vara was not saved, the broadsheets have poisoned public opinion — civilians throw refuse, block doorways, and shout for the watch. One hostile crowd (6 commoners) confronts the party at a street corner, requiring a DC 14 Persuasion or Intimidation check to disperse without violence. On a failure, the commoners raise an alarm that brings a patrol of 4 guards, who must be fought or evaded.

**Aldous's followers:** If Brother Aldous was rescued in Q10, his followers defend the temple district independently, freeing up resistance fighters. This means whichever location the party does NOT choose has better NPC support — Maren's force gains a +2 bonus to determining the NPC outcome (see "Aftermath").

**Getting to the chosen location:** The streets are barricaded and patrolled. The party must navigate through the chaos. This is a single group check:

- **DC 13 Stealth** — Move through alleys and side streets to avoid patrols.
- **DC 12 Persuasion or Deception** — Talk past a checkpoint manned by conflicted guards.
- **DC 14 Athletics** — Climb over barricades and sprint across open ground under crossbow fire.

If the group check fails, the party arrives at their chosen location 1 round late — the fight has already started and the enemies have taken advantageous positions.

Connected to:

- A2: The Dockmasters' Guild Hall, to the east along the harbour road.
- A3: The Market District, south through the Merchants' Quarter.

```yaml
npcs:
  - id: PELL
    name: Pell
    type: Human Commoner
    description: A wiry teenage girl with close-cropped dark hair, soot-streaked cheeks, and a bloody scrape on her left arm. She is a resistance runner — fast, brave, and terrified. She wears a leather jerkin two sizes too large and carries a belt knife she has never used in anger.
  - id: MAREN
    name: Maren Loomwright
    type: Human Noble
    description: Young woman with her mother's sharp jaw and fierce dark eyes. She wears a battered leather cuirass over practical clothes, her hair tied back. A rapier hangs at her hip. She commands the resistance with an authority that belies her age, but the strain is showing — dark circles under her eyes, a tremor in her hands that she hides by clenching her fists.
    abilityScores:
      str: 10
      dex: 15
      con: 12
      int: 14
      wis: 13
      cha: 16
    ac: 15
    maxHp: 32
    speed: 30
    skills:
      - persuasion
      - insight
      - deception
```

## A2. The Dockmasters' Guild Hall

A squat, stone-walled building at the edge of the harbour, built like a customs house and reinforced with iron shutters. The Dockmasters' Guild hall has survived river floods and dock fires for a century. Today it faces something worse.

> The guild hall's iron shutters are dented and scorched. Two dock workers lie motionless near the front entrance — not dead, but badly burned. Inside, you can hear Brokka Ironjaw bellowing orders. Through the shattered main window, you see the attackers: a tall knight in black-and-gold tabard directing the assault, a scarred veteran kicking in the side door — and behind them, something that shouldn't be here. A hunched, muscular figure covered in barbs and spines, its skin the colour of old blood. It smells of sulphur, and where it steps, the cobblestones crack from heat.

**The scene:** Brokka [BROKKA] and six dock workers [DOCKER1-6] are barricaded inside. The attackers are breaching from two sides — the front entrance and the side door. The barbed devil [BARBED_DEVIL] is ripping through the iron shutters with its claws.

**The enemies:**

- **1 Barbed Devil** [BARBED_DEVIL] (CR 5) — The primary threat. It tears through barricades and ignores the dock workers, focused on reaching Brokka. Its barbed hide injures anyone who strikes it in melee (1d10 piercing on a hit with a melee attack). It can hurl flame (ranged attack, 10 ft. radius, DC 12 Dex save, 3d6 fire) once per round.
- **1 Veteran** [VETERAN1] (CR 3) — A scarred, professional soldier in Sorn's service. He fights efficiently and without mercy. He targets the strongest-looking party member to keep them off the devil.
- **1 Knight** [KNIGHT1] (CR 3) — Commands the assault. Wears a black-and-gold tabard with Sorn's seal. He is engaged by resistance fighters when the party arrives.

**Resistance support:** When the party arrives, 4 resistance fighters [RESIST1-4] charge in from the harbour road behind them. They engage the knight, keeping him occupied for the duration of the fight. The party faces the barbed devil and the veteran directly.

**Effective encounter:** Barbed devil (1,800 XP) + veteran (700 XP) = 2,500 base XP x1.5 (2 creatures) = 3,750 adjusted XP. **Hard** for a party of 4 at level 7.

**Brokka's behaviour:** She fights from inside the guild hall, using a heavy crossbow from the upper windows when possible. If the barbed devil breaches the building, she switches to her docker's hook (treat as a battleaxe) and fights alongside the party. She has 38 HP and can take hits, but she is not reckless — she fights defensively to protect her people.

**Terrain:** The guild hall's exterior is a 40 ft. by 30 ft. cobblestone yard, cluttered with overturned carts, barrels, and crates. These provide half cover. The side door opens onto a narrow alley (5 ft. wide) — fighting here is cramped, advantage on attacks against the veteran if the party corners him, but the barbed devil's barbed hide is more dangerous in close quarters.

**When the barbed devil falls:** It dissolves into a pool of acrid black ichor and sulphurous smoke. It drops a longsword that blazes with orange flame — a *Flame Tongue longsword* (see Rewards). The veteran, seeing the devil destroyed, attempts to flee. If caught, he surrenders and can be interrogated.

**If the veteran is interrogated:**

- **DC 12 Intimidation:** He confirms Sorn ordered the attack. The devil was summoned "from below" — the veteran doesn't know the details, only that Sorn has been bringing "things like that" into the city for weeks.
- **DC 14 Persuasion:** He reveals that the Market District attack is a diversionary sweep — the guild hall was always the primary target. Sorn wants Brokka dead or captured.

Connected to:

- A1: The streets outside.
- A4: Aftermath, when the fight ends.

```yaml
npcs:
  - id: BROKKA
    name: Brokka Ironjaw
    type: Half-Orc Veteran
    description: A broad-shouldered half-orc woman with a shaved head, a docker's hook at her belt, and blood on her knuckles. She is fighting to defend the building she has run for twenty years. Her leather vest is singed and her left arm is wrapped in a hasty bandage. She is furious and unafraid.
    abilityScores:
      str: 16
      dex: 13
      con: 14
      int: 10
      wis: 11
      cha: 14
    ac: 14
    maxHp: 38
    speed: 30
    skills:
      - athletics
      - intimidation
      - perception
  - id: BARBED_DEVIL
    type: Barbed Devil
    description: A hulking fiend covered in sharp barbs and spines, its skin the colour of dried blood. It reeks of sulphur and radiates heat. Its eyes are small, cruel, and intelligent. It moves with predatory purpose, ignoring lesser targets to reach Brokka.
  - id: VETERAN1
    type: Veteran
    description: A scarred human soldier with a shaved head and a missing ear. He wears practical half-plate under a dark tabard and fights with a longsword and shield. Professional, efficient, and loyal to Sorn — but not fanatical. He will surrender if the devil falls.
  - id: KNIGHT1
    type: Knight
    description: A tall human in polished half-plate and a black-and-gold tabard bearing Sorn's seal. He commands the assault with crisp military precision. He is engaged by resistance fighters and does not directly fight the party unless they intervene.
  - id: RESIST1
    type: Guard
    description: A resistance fighter in civilian clothes with a short sword and wooden shield.
  - id: RESIST2
    type: Guard
    description: A resistance fighter in civilian clothes with a short sword and wooden shield.
  - id: RESIST3
    type: Guard
    description: A resistance fighter in civilian clothes with a spear and leather armour.
  - id: RESIST4
    type: Guard
    description: A resistance fighter in civilian clothes with a hand crossbow and a knife.
  - id: DOCKER1
    type: Commoner
    description: A dock worker barricaded inside the guild hall. Armed with a belaying pin.
  - id: DOCKER2
    type: Commoner
    description: A dock worker barricaded inside the guild hall. Armed with a boat hook.
  - id: DOCKER3
    type: Commoner
    description: A dock worker barricaded inside the guild hall. Armed with a crate lid as a shield.
  - id: DOCKER4
    type: Commoner
    description: A dock worker barricaded inside the guild hall. Wounded, tending to others.
  - id: DOCKER5
    type: Commoner
    description: A dock worker barricaded inside the guild hall. Armed with a hand axe.
  - id: DOCKER6
    type: Commoner
    description: A dock worker barricaded inside the guild hall. Loading crossbow bolts for Brokka.
```

## A3. The Market District

The central market of Ashenmere is a broad, open square lined with timber-framed shops and canvas-roofed stalls. Normally bustling with merchants, it is now a killing ground. Overturned stalls burn. Civilians cower behind rubble. A squad of Sorn's enforcers — led by a gladiator in arena armour — is systematically destroying every stall and beating anyone who doesn't flee fast enough.

> The market square is on fire. Overturned stalls have been kicked into piles and set alight. Smoke drifts across the cobblestones. A dozen civilians huddle behind the stone fountain at the centre, too afraid to run. At the far end of the square, a massive man in studded leather and a gladiator's helm smashes a merchant's stall to kindling with a two-handed swing of his spear. Three wild-eyed fighters in mismatched armour follow behind him, axes in hand, attacking anything that moves.

**The scene:** The gladiator [GLADIATOR1] is leading 3 berserkers [BERSERKER1-3] in a sweep of the market. They are not specifically targeting anyone — their orders are to cause maximum destruction and terror, forcing the population into submission. Civilians [CIVILIAN1-6] are trapped in the square.

**The enemies:**

- **1 Gladiator** [GLADIATOR1] (CR 5) — A professional arena fighter recruited from outside Ashenmere. He fights for coin, not loyalty. He wears studded leather armour over a bare chest and wields a spear and shield. He is disciplined and dangerous — he fights to kill, targeting the strongest opponent first.
- **3 Berserkers** [BERSERKER1-3] (CR 2 each) — Frenzied fighters in mismatched armour. They attack recklessly (advantage on attacks, attacks against them have advantage). They have high damage output (1d12+3 greataxe) but low AC (13) and no tactical awareness. Glass cannons.
- **12 Conscripted City Watch** [CONSCRIPT1-12] (Guard stat block, CR 1/8 each) — Reluctant guards pressed into service by Captain Roth's orders. They form a loose cordon around the market square, blocking escape routes and half-heartedly engaging anyone who tries to break through. They fight reluctantly — any guard reduced below half HP (6 HP or fewer) throws down their weapon and surrenders. A DC 13 Intimidation or Persuasion check (usable as an action) causes 1d4 guards to break ranks and flee each round. The encounter becomes about crowd control and breaking morale rather than pure damage — the guards are individually weak and break easily, but their numbers create the feel of a genuine mass battle.

**Effective encounter:** Gladiator (1,800 XP) + 3 berserkers (450 XP each) + 12 guards (25 XP each) = 3,450 base XP. The guards' low CR and easy surrender conditions keep the effective difficulty at **Hard-Deadly** for a party of 4 at level 7. The guards primarily serve as crowd-control obstacles rather than lethal threats — the real danger remains the gladiator and berserkers.

**Civilians:** 6 civilians are hiding behind the central fountain. If the party does not engage within 2 rounds, one berserker breaks off to attack them. The civilians are commoners with 4 HP each. Protecting them is a secondary objective — saving at least 4 of 6 earns the party a reputation bonus in the aftermath.

**Terrain:** The market square is 60 ft. by 60 ft. Overturned stalls provide half cover throughout. Two burning stall piles create difficult terrain and deal 1d6 fire damage to anyone who starts their turn within 5 ft. The stone fountain at the centre provides three-quarters cover and is large enough for a character to stand on (5 ft. elevation).

**Tactical notes:** The berserkers are reckless — they charge the nearest target. The gladiator is smart — he uses Shield Bash to knock prone, then attacks with advantage. If two berserkers fall, the gladiator makes a fighting retreat toward the east side of the square, where a second patrol is supposed to be waiting. The patrol never arrives (they were intercepted by resistance fighters).

**When the gladiator falls:** He collapses with a grunt, not a speech. He carries a +1 shield and wears a Belt of Hill Giant Strength (Str 21) under his armour — see Rewards. His belt pouch contains 30 gp in mixed coin and a folded note with his contract: "Clear the market. Leave no opposition standing. Payment on completion. — V.S." The initials are Vaelith Sorn's.

Connected to:

- A1: The streets outside.
- A4: Aftermath, when the fight ends.

```yaml
npcs:
  - id: GLADIATOR1
    type: Gladiator
    description: A massive, broad-chested man in studded leather armour and a crested gladiatorial helm. He fights with a spear and shield, moving with the economy of someone who has killed for a living audience. He is not from Ashenmere — hired muscle, brought in for this operation specifically. He has no loyalty to Sorn beyond his contract.
  - id: BERSERKER1
    type: Berserker
    description: A wild-eyed human in mismatched armour — a chain shirt over one arm, a leather pauldron on the other. He swings a greataxe with reckless abandon, screaming as he fights. He attacks the nearest target without regard for tactics or self-preservation.
  - id: BERSERKER2
    type: Berserker
    description: A scarred half-orc woman in battered hide armour, wielding a greataxe. She fights with the same frenzied intensity as the others — teeth bared, eyes wide, no discipline.
  - id: BERSERKER3
    type: Berserker
    description: A lean, tattooed human man with wild hair and a notched greataxe. He laughs as he fights, swinging at anything that moves — stalls, barrels, people. He is the most likely to break off and attack civilians.
  - id: CONSCRIPT1-12
    type: Guard (x12)
    description: Conscripted city watch guards in standard-issue tabards, forming a loose cordon around the market square. Most are visibly uncomfortable — some are pale, others avoid eye contact with civilians. They carry spears and shields but fight without conviction. Any guard reduced below half HP surrenders immediately. They can be broken with a DC 13 Intimidation or Persuasion check (1d4 flee per success). These are ordinary citizens in uniform, not Sorn's fanatics.
  - id: CIVILIAN1
    type: Commoner
    description: A middle-aged woman clutching a child, hiding behind the fountain.
  - id: CIVILIAN2
    type: Commoner
    description: An elderly man with a merchant's apron, bleeding from a cut on his forehead.
  - id: CIVILIAN3
    type: Commoner
    description: A young man who was selling fish when the attack began. He is armed with a gutting knife and looks ready to fight.
  - id: CIVILIAN4
    type: Commoner
    description: A dwarf woman in a smith's apron, sheltering two children who are not hers.
  - id: CIVILIAN5
    type: Commoner
    description: A halfling man curled into a ball, hands over his ears.
  - id: CIVILIAN6
    type: Commoner
    description: A teenage boy trying to drag a wounded friend behind the fountain.
```

## A4. Aftermath

When the fight at the party's chosen location ends, the smoke begins to settle across Ashenmere. Resistance runners bring reports from the other front.

**If the party chose the Guild Hall (A2):**

> Brokka leans against the guild hall's scorched doorframe, breathing hard. "That thing — that devil. In my guild hall." She spits. "Sorn's not even pretending anymore."

The guild hall is battered but standing. Brokka's council seat is secure. She opens her personal vault — a heavy iron box bolted to the floor of her office — and presents the party with their reward.

The Market District was defended by Maren and resistance fighters. Roll a d20 to determine the NPC outcome:

- **1-8:** The market was overrun. The gladiator escaped. 3 civilians were killed. Maren is wounded but alive. The party hears about the devastation secondhand — burnt stalls, broken bodies, a crowd that blames the resistance for failing to protect them. Public opinion shifts against the resistance unless the party intervenes.
- **9-15:** The market was held, but at cost. 2 resistance fighters were killed and Maren took a serious wound (she is stable but needs rest). The gladiator was driven off but not killed. Salvage from the fight: 100 gp worth of recovered goods returned to grateful merchants.
- **16-20:** The market was held decisively. Maren rallied the merchants and civilians to fight alongside the resistance. No civilian casualties. Maren is bruised but standing. The gladiator was killed — Maren took his shield as a trophy.

Add +2 to this roll if Brother Aldous was rescued in Q10 (his followers reinforced Maren's position).

**If the party chose the Market District (A3):**

> The last berserker falls and the market goes quiet except for the crackle of burning stalls and the sound of someone crying. The civilians behind the fountain stare at you with wide, shocked eyes. The woman holding the child whispers, "Thank you."

The market is secured. Grateful merchants offer the party whatever they can spare.

The Guild Hall was defended by Maren and resistance fighters. Roll a d20 to determine the NPC outcome:

- **1-8:** The guild hall was breached. Brokka fought to the last — she is alive but badly hurt (she lost her right hand to the barbed devil and is in critical condition). The devil was eventually driven off, not destroyed. Brokka's council seat is technically intact, but she cannot attend sessions. The resistance must find another way to maintain the vote.
- **9-15:** The guild hall held, but barely. 3 dock workers were killed and Brokka took serious burns. The barbed devil was destroyed but the knight escaped. Brokka is recovering and furious.
- **16-20:** The guild hall held. Maren and the resistance overwhelmed the attackers. The barbed devil was destroyed by concentrated crossbow fire and Brokka's fury. No dock workers died. Brokka is bloodied but triumphant.

Add +2 to this roll if Brother Aldous was rescued in Q10.

### The Wounded Guard

Regardless of which location the party chose, a wounded city guard stumbles out of a side alley as the party moves through the aftermath. He is bleeding from a sword cut across his ribs and his watch tabard is torn. His name is Darvon [DARVON].

> "Wait — don't. I'm not with them. I'm not — I couldn't. He told us to fire on civilians. Captain Roth gave the order, straight from Sorn. Fire on civilians." He drops his sword. "I won't. I can't do that."

Darvon is a 12-year veteran of the city watch who joined to protect people, not oppress them. When Captain Roth ordered the watch to fire crossbows into a crowd of fleeing civilians near the Old Quarter, Darvon refused, was attacked by his own squad, and fled.

- **DC 10 Insight:** Darvon is telling the truth. He is genuinely horrified.
- **DC 12 Persuasion:** He opens up further — he has been uncomfortable with Sorn's orders for months but was too afraid to defect. Today broke him.
- **No check needed:** Darvon volunteers the following, unprompted:
  - He knows the city watch rotation schedules for the next month. He has them memorised because he wrote them.
  - He has a **master key** to the gate towers — the four corner towers of the city wall that control entry and exit. These are heavily guarded in normal times, but during the siege (Q18), this key could bypass a major obstacle.
  - He knows that Captain Roth answers directly to Sorn and meets him privately in the Citadel every evening at dusk.

**Darvon's value:** He is a significant intelligence asset for Q18 (The Siege of the Citadel). His watch rotations reveal patrol gaps, and his master key provides access to the gate towers — a potential infiltration route. If the party treats him well, he joins the resistance and serves as a military advisor.

**If the party mistrusts him:** A DC 15 Insight check confirms there is no deception — he is not a plant. If the party turns him away, he is found dead the next day, killed by Sorn's agents. His key and knowledge are lost.

### The Sending Stone

After the fighting, whether at the Guild Hall or the Market District, a DC 14 Investigation check of the battlefield reveals a dead agent of Sorn's — a plainclothes operative who was killed in the crossfire. The body carries:

- A **sending stone** — one of a paired set. The other is in the Council Citadel. Once per day, a creature holding the stone can cast *Sending* to communicate with the holder of the paired stone. A DC 16 Arcana check reveals how to use it to eavesdrop on a single message per day sent through the paired stone — essentially intercepting Citadel communications.
- A sealed letter with Sorn's personal seal, ordering: *"Ensure the guild hall falls. The half-orc is expendable but the seat must be vacated. Burn the charter if you must."*
- 15 gp in Calishite coin.

### Sorn's Mask Slips

This is the quest's pivotal moment. As the party moves through the streets after the battle — or during the fight itself, if the DM prefers a more dramatic reveal — they witness Sorn.

> Through the haze of smoke, you see him. Vaelith Sorn stands on the steps of the Council Citadel, flanked by armoured guards, addressing a crowd of terrified citizens. His voice carries across the square, smooth and commanding: "This violence is the work of those who would tear our city apart. I will restore order. I will protect you."

> Then something happens. A gust of wind catches a burning ember, and for a heartbeat — less than a heartbeat — Sorn's face flickers. The handsome human features ripple like a reflection in disturbed water, and beneath them you see something else: a face covered in short, tawny fur. A broad, flat nose. Eyes with vertical pupils, the colour of molten copper. Tiger-like features, alien and ancient. Then the illusion snaps back into place, and Sorn is himself again — smiling, reassuring, perfectly composed.

> No one in the crowd seems to have noticed. But you did.

**If any party member has a passive Perception of 14 or higher:** They also notice that Sorn's hands, clasped behind his back, are wrong — the fingers bend backwards at the second knuckle, and the nails are curved like claws. This detail corrects itself a moment later.

**What this means:** Sorn's *Disguise Self* is normally flawless, but the stress of maintaining martial law, commanding multiple fiendish agents, and sustaining the summoning preparations in the Citadel is straining his concentration. His disguise will slip more frequently from this point forward. If the party already learned Sorn's true nature from Brother Aldous in Q10, this is confirmation — and evidence that others could see. If they did not rescue Aldous, this is the first time they see Sorn's true face.

**Rallying the resistance:** The party now knows — or has confirmed — that Sorn is not human. Maren, when told, is shaken but resolute:

> "A fiend. Ruling our city." She takes a long breath. "Then we kill a fiend. What do we need?"

This opens the door to Q12 (The Old Temple — finding the Blade of Tyr's Witness), Q13 (The Traitor Unmasked — rooting out Sorn's spy in the resistance), and Q14 (The Last Sermon — Brother Aldous's public denouncement and consecration of a backup weapon).

**Failsafe — ward stone intelligence:** If the party has not found any ward stone intelligence (skipped Q7 and Q12), add the following: During the chaos, a dying Sorn loyalist drops a partially burned map showing three locations in the city marked with ward stone symbols — a sewer entrance near the harbour, the bell tower of the Grand Theatre, and a mark in the Old Quarter. The map is charred and incomplete, but DC 12 Investigation confirms the symbols match Infernal warding glyphs. This ensures the party has Q17 intel even on the minimum path.

Connected to:

- A1: The streets.
- The resistance safehouse: Maren leads the party to a new safehouse in the Weavers' District (the old one was compromised).

```yaml
npcs:
  - id: DARVON
    name: Darvon
    type: Human Guard
    description: A broad-shouldered man in his thirties with a square jaw, short brown hair, and honest brown eyes. He wears a torn city watch tabard over chain mail, both stained with his own blood. A sword cut across his ribs has been crudely bandaged with a strip of his cloak. He carries a longsword and a heavy ring of keys on his belt. He looks exhausted, frightened, and deeply ashamed.
    abilityScores:
      str: 14
      dex: 12
      con: 13
      int: 10
      wis: 12
      cha: 10
    ac: 16
    maxHp: 22
    speed: 30
    skills:
      - athletics
      - perception
```

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 300 gp | Brokka (quest reward, Guild Hall) | Paid from Brokka's vault |
| Ring of Resistance (fire) | Brokka (quest reward, Guild Hall) | From Brokka's vault |
| 200 gp + 150 gp salvage | Grateful merchants (quest reward, Market) | Paid by rescued merchants |
| Potion of Heroism | Grateful merchants (quest reward, Market) | Gift from an apothecary |
| *Flame Tongue* longsword | Barbed devil (loot, Guild Hall) | Requires attunement; 2d6 fire damage |
| +1 Shield | Gladiator (loot, Market) | |
| Belt of Hill Giant Strength | Gladiator (loot, Market) | Requires attunement; sets Str to 21 |
| Sending stone (paired with Citadel) | Dead Sorn agent (DC 14 Investigation) | Hidden find; eavesdrop once/day (DC 16 Arcana) |
| Sealed letter with Sorn's orders | Dead Sorn agent (DC 14 Investigation) | Evidence of Sorn ordering the attack |
| 15 gp in Calishite coin | Dead Sorn agent | Recurring foreign currency |
| Watch rotation schedules | Darvon (defecting guard) | Side opportunity; useful Q18 |
| Master key to gate towers | Darvon (defecting guard) | Side opportunity; useful Q18 |
| Captain Roth's meeting schedule | Darvon (defecting guard) | Sorn meets Roth at dusk daily in the Citadel |

## Quest Connections

- **From Quest 9:** If Vara Inkwell was saved, civilian attitudes are sympathetic — reduced DCs navigating the streets, no hostile crowd encounters. If Vara was executed, civilians are hostile, potentially alerting patrols or blocking the party.
- **From Quest 10:** If Brother Aldous was rescued, his followers defend the temple district, providing a +2 bonus to the NPC outcome roll for whichever location the party does not choose. Aldous's confirmation of Sorn's nature means the party already knows what the flickering disguise reveals.
- **To Quest 12:** Knowing Sorn is a rakshasa (or confirming it) opens the path to the Old Temple, where the Blade of Tyr's Witness can permanently slay him. If the party recovered the Thornwall Manor journal in Q8, it contains a map to the temple.
- **To Quest 13:** The resistance expands after this quest, but Sorn has planted a doppelganger agent among the new recruits. The traitor is identified and confronted in Q13.
- **To Quest 14:** Brother Aldous, emboldened by the resistance's survival, announces a public sermon denouncing Sorn. The party must defend him during the sermon in Q14.
- **To Quest 18:** Darvon's watch rotations and master key to the gate towers provide a significant tactical advantage during the siege of the Council Citadel. If Darvon was turned away or killed, this intelligence is unavailable.
