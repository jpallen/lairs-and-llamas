# Quest 6: Warehouse Wars

**Level:** 5 | **Type:** Discovery (optional) | **Style:** Faction combat (morally grey)

Sorn's new trade regulations are squeezing the Dockmasters' Guild — tariffs on river goods have tripled, inspections are constant, and legitimate cargo sits rotting on barges while paperwork crawls through the Merchants' Guild bureaucracy. Brokka Ironjaw asks the party to protect a contraband shipment — not smuggled goods, but legal cargo moved outside Sorn's tariff system because there is no other way to keep the docks running. The Merchants' Guild sends enforcers to intercept. Lady Thornwall has quietly approved the enforcement action under Sorn's pressure, though she takes no pleasure in it. Both sides have legitimate grievances. The party must pick a side, broker peace, or expose the truth: Sorn wrote the regulations specifically to provoke this conflict.

This quest forces a faction choice with lasting consequences. There is no clean answer.

---

Night has fallen over the docks. The river is black and still, reflecting the harbour lanterns in broken lines. Brokka meets you at a fish-smoking shed near Pier Seven, her voice low. The smell of tar and brine hangs in the cold air.

> "I'm not going to dress this up. I've got a barge coming in at midnight — grain, salt pork, lamp oil, rope. Nothing illegal. Nothing dangerous. But under Sorn's new tariff schedule, my people can't afford to move it through the Merchants' Guild anymore. Three weeks of inspections, forty percent duty. My dock workers haven't been paid in a fortnight."

She leans against the shed wall, arms crossed.

> "I need you at Warehouse Nine when the barge docks. Help my people unload and secure the goods before anyone shows up to stop us. I'm not asking you to fight. I'm asking you to stand there and make sure nobody starts one."

She pauses, then adds more quietly:

> "I know how this looks. But Sorn wrote those regulations to break us, and everyone on this waterfront knows it."

## A1. Warehouse Nine Approach

A narrow lane between stacked timber yards leads to Warehouse Nine at the end of Pier Seven. The warehouse is a large, sagging timber building with a loading dock that extends out over the water. Two dock workers [DOCKER1] [DOCKER2] wait by the warehouse doors with a hand-cart, stamping their feet against the cold. A single lantern hangs from a hook above the loading dock entrance, casting a circle of yellow light. Beyond it, the harbour is dark.

> The lane is quiet — too quiet for a working dock at this hour. The usual night traffic of fishermen and late haulers is absent. The only sounds are the creak of moored boats and the distant clang of a buoy bell. Crates are stacked head-high on both sides of the lane, creating blind corners and narrow choke points. A cargo crane looms overhead, its arm swung out over the water, a heavy net of barrels dangling from its hook.

**Surveying the area:** A DC 12 Perception check notices that the timber stacks have been recently rearranged — someone has created clear sight lines from the rooftops of the adjacent chandlery and rope-walk. A DC 14 Investigation check finds boot prints on the chandlery's external ladder — someone climbed up within the last hour.

**If the party scouts the rooftops:** They find nothing — the Merchants' Guild enforcers have not yet arrived. But the vantage points are obvious ambush positions. A DC 13 Survival or Investigation check identifies three strong defensive positions: the crane platform (15 feet up, half cover), the chandlery roof (20 feet up, three-quarter cover), and a gap between two timber stacks (ground level, full cover from the south).

**The dock workers:** Rila [DOCKER1] is a tough, weathered woman in her fifties who has worked these docks for thirty years. She is angry and frightened in equal measure. Josper [DOCKER2] is younger, broad-shouldered, and clearly nervous — he keeps looking over his shoulder toward the lane. Neither is armed beyond belt knives.

> Rila spits into the harbour. "Brokka says you're here to keep the peace. Good. Because I've heard the Merchants are sending muscle tonight, and I'm too old and too tired to get my teeth knocked in over a load of salt pork."

**If the party asks about the enforcers:** Rila has heard rumours — "professionals, not guild clerks" — but doesn't know numbers or timing. Josper heard from a friend at the Rusty Nail that the Merchants' Guild hired veterans, not thugs. A DC 11 Insight check on Josper reveals he is genuinely scared and considering leaving.

**Preparing defences:** The party has roughly 30 minutes before the barge arrives and the enforcers show up. They can barricade the lane, position themselves on the rooftops, rig the cargo crane, or set other preparations. Reward creative thinking — this environment is designed for it.

Connected to:

- A2: The loading dock at the end of the pier, where the barge will moor.
- A3: The lane opens south toward the main harbour road, where the enforcers will approach.

```yaml
npcs:
  - id: DOCKER1
    name: Rila
    type: Human Commoner
    description: A tough, weathered woman in her fifties with sun-darkened skin and hands like leather. She has worked the Ashenmere docks for thirty years and is Brokka's most trusted loader. She is angry about the tariffs and not afraid to say so, but she is not a fighter.
  - id: DOCKER2
    name: Josper
    type: Human Commoner
    description: A broad-shouldered young man with a nervous disposition. He took this job because it paid well and Brokka treats her people fairly. He is visibly frightened and will flee if combat turns deadly.
```

## A2. The Loading Dock

The loading dock is a broad timber platform extending fifteen feet over the water. A set of double doors opens into the warehouse interior. The cargo crane's arm reaches out over the dock, and the dangling net of barrels can be swung or dropped. Mooring cleats line the dock edge. The water below is dark and about eight feet deep — cold, murky, and full of harbour debris.

> At midnight, a flat-bottomed river barge slides out of the darkness and bumps against the dock. A bargeman in a hooded oilskin tosses a rope to Rila, who catches it without a word and loops it around a cleat. The barge is loaded with crates — unmarked, neatly stacked, covered in oiled canvas.

**The bargeman:** Kessler [KESSLER] is a wiry, silent man who makes his living moving cargo up and down the river. He is not loyal to anyone — he takes jobs and keeps his mouth shut. He will not fight under any circumstances. If violence breaks out, he cuts the mooring line and poles the barge out into the river, returning only when the dock is clear.

**Unloading:** Moving the cargo from the barge into the warehouse takes 20 minutes with four people working, or 10 minutes with six. The party can help or stand watch. The enforcers arrive after approximately 10 minutes of unloading — halfway done, with crates stacked on the dock and in the lane.

**Environmental hazards on the dock:**

- **The cargo crane:** The net of barrels can be released as an action (DC 12 Strength check to pull the release pin, or cut the rope). It drops in a 10-foot area — creatures in the area make a DC 13 Dexterity save or take 2d6 bludgeoning damage and are knocked prone. The barrels then scatter, creating difficult terrain.
- **The water:** A creature pushed off the dock falls 5 feet into 8 feet of cold harbour water. Swimming requires a DC 10 Athletics check (DC 14 in armour). Climbing back onto the dock requires a DC 12 Athletics check and costs half movement.
- **Mooring ropes:** Can be used to trip (contested Athletics check) or swing across gaps. A creature that fails the contested check is pulled prone.
- **Stacked crates:** Can be toppled as an action (DC 13 Strength check). A 10-foot line of crates falls — creatures in the line make a DC 12 Dexterity save or take 1d6 bludgeoning damage and are restrained until they use an action to free themselves (DC 12 Strength).

Connected to:

- A1: The lane back toward the harbour road.
- A3: The enforcers approach from the south end of the lane.
- A4: The warehouse interior, through the loading dock doors.

```yaml
npcs:
  - id: KESSLER
    name: Kessler
    type: Human Commoner
    description: A wiry, silent bargeman in a hooded oilskin coat. He makes his living moving cargo on the river and has no interest in politics, fights, or questions. If violence breaks out, he cuts the mooring line and leaves.
```

## A3. The Confrontation

Ten minutes into the unloading, the Merchants' Guild enforcers arrive from the south end of the lane. They do not attack immediately — their leader, Captain Vashti [VASHTI], calls out from the shadows before stepping into the lantern light. She is here to confiscate the cargo, not to kill anyone. But she has orders, and she will carry them out.

> A woman's voice rings out from the darkness at the far end of the lane. "That's far enough. Step away from the cargo." Five figures emerge from between the timber stacks — two in chain mail with longswords drawn, three more in leather with clubs. The woman in front is tall, dark-haired, with a captain's badge pinned to her breastplate. She holds up a rolled parchment.

> "I am Captain Vashti of the Merchants' Guild Enforcement Office. I hold a writ of seizure signed by Lady Thornwall and authorised under the Trade Regulation Act. That cargo is being moved in violation of the tariff schedule. Stand aside, and no one gets hurt."

**Captain Vashti** is not a villain. She is a professional enforcer who believes in the rule of law — even bad law. She takes no pleasure in this and will say so if pressed. She has a family, she needs her job, and she was told this operation was legitimate. She does not know that Sorn wrote the regulations to provoke exactly this confrontation.

**The veterans** [VETERAN1] [VETERAN2] are experienced fighters who follow Vashti's orders. They are disciplined — they will not attack first, but they will not back down either. They fight to subdue, not to kill, unless the party escalates to lethal force.

**The thugs** [THUG1] [THUG2] [THUG3] are hired muscle with less discipline. They are more likely to escalate, shove dock workers, and make threats. They are not evil — they are poor people taking paid work.

**The spy** [SPY2] hangs back at the rear of the group, dressed as a sixth enforcer but not part of Vashti's team. This is one of Sorn's agents, planted to observe and report. The spy's priority is to ensure the conflict happens — if diplomacy seems likely to succeed, the spy acts to sabotage it (see "The Spy's Sabotage" below). A DC 15 Perception check notices that the spy does not wear a Merchants' Guild badge and does not respond to Vashti's commands with the same familiarity as the others.

**Diplomacy:** Vashti can be reasoned with — she is following orders, not pursuing a vendetta. The following approaches are available:

- **DC 14 Persuasion:** Convince Vashti to inspect the cargo and confirm it contains nothing illegal — just basic supplies. She agrees reluctantly. This does not resolve the legal issue (it is still a tariff violation), but it shifts her attitude from hostile to uncertain.
- **DC 16 Persuasion (after showing the cargo is legal):** Convince Vashti that enforcing this particular regulation is doing Sorn's work for him — crushing the docks to consolidate power. She is troubled but needs more than words. If the party has evidence of Sorn's manipulation from earlier quests (the coded notebook from Q1, the dossier from Q3, charm amulets from Q4), reduce the DC to 13.
- **DC 13 Insight on Vashti:** She is uncomfortable with this assignment. She was told the shipment contained contraband — she is surprised and unsettled to find it is grain and rope.
- **DC 18 Persuasion (to broker a full peace):** Convince Vashti and Brokka (who arrives if diplomacy continues past 3 rounds — see below) to jointly refuse Sorn's regulations and bring the issue to the full Council. This is the best outcome but the hardest to achieve. Evidence of Sorn's manipulation reduces the DC to 15.

**Brokka's arrival:** If the confrontation lasts more than 3 rounds without violence, Brokka [BROKKA] arrives with two more dock workers. She is armed with her docker's hook and ready to fight, but she would rather not. If the party is attempting diplomacy, she supports them — grudgingly. If the party is fighting for her, she joins the battle.

> Brokka strides out of the darkness, her docker's hook in hand. She plants herself between her workers and the enforcers. "Vashti. I know you. You're not a bad woman. So why are you out here in the dark, threatening my people over a load of rope and salt pork?"

**The spy's sabotage:** If diplomacy is succeeding — if the party has shifted Vashti's attitude or is close to brokering peace — the spy [SPY2] acts to provoke violence. The spy throws a knife at one of the dock workers from behind the enforcers, making it look like a thug attacked first. A DC 14 Perception check identifies the true source of the throw. If the party exposes the spy, this dramatically shifts the situation — Vashti realises the confrontation was engineered, and the enforcers stand down. If the spy is not exposed, combat begins.

**If combat begins:** See "The Dock Fight" below.

Connected to:

- A1: The lane leads back to the timber yards.
- A2: The loading dock behind the party.
- A4: Retreat into the warehouse is possible.

```yaml
npcs:
  - id: VASHTI
    name: Captain Vashti Alren
    type: Human Veteran
    description: A tall, dark-haired woman in a well-maintained breastplate with a captain's badge. She carries a longsword and shield. Her face is weathered and serious — she has done this work for years and takes no joy in it. She is professional, fair, and increasingly uneasy about the orders she has been given. She has a wife and a young son in the Merchants' Quarter.
    abilityScores:
      str: 16
      dex: 13
      con: 14
      int: 10
      wis: 12
      cha: 11
    ac: 17
    maxHp: 58
    speed: 30
    skills:
      - athletics
      - perception
      - intimidation
  - id: VETERAN1
    name: Sergeant Donal
    type: Human Veteran
    description: A stocky man with a shaved head and a broken nose. He follows Vashti's orders without question. Carries a longsword and shield.
    ac: 17
    maxHp: 58
    speed: 30
  - id: VETERAN2
    name: Torv
    type: Human Veteran
    description: A rangy woman with short-cropped red hair and a scar across her chin. Quiet and competent. Carries a longsword and shield.
    ac: 17
    maxHp: 58
    speed: 30
  - id: THUG1
    type: Thug
    description: A heavyset man in leather armour with a club. Hired muscle — doing this for the pay.
  - id: THUG2
    type: Thug
    description: A wiry woman with a mace and a mean look. Not cruel, just broke.
  - id: THUG3
    type: Thug
    description: A young man barely out of his teens, gripping a club too tightly. He clearly does not want to be here.
  - id: SPY2
    name: Delvin
    type: Spy
    description: A lean, sharp-eyed man dressed to blend in with the enforcers but lacking a Merchants' Guild badge. He is one of Sorn's agents, planted to observe and ensure the conflict happens. He carries a short sword and hand crossbow concealed under his cloak, along with a coded ledger and an Amulet of Proof Against Detection and Location around his neck (tucked under his shirt). If exposed, he fights to escape rather than to win.
    abilityScores:
      str: 10
      dex: 15
      con: 10
      int: 12
      wis: 14
      cha: 14
    ac: 12
    maxHp: 27
    speed: 30
    skills:
      - deception
      - insight
      - perception
      - persuasion
      - sleight of hand
      - stealth
```

## The Dock Fight

If combat breaks out, use the following encounter. The fight takes place across areas A1, A2, and A3 — the lane, the loading dock, and the spaces between timber stacks. Lantern light is dim, casting long shadows. The water is five feet below the dock edge.

**Encounter:** 2 veterans (Vashti and Veteran1 or Veteran2, depending on which side the party chose), 3 thugs, and 1 spy. Adjusted difficulty: 3,700 XP (Hard for a level 5 party of four).

**Vashti's tactics:** She engages the strongest-looking opponent and fights defensively, calling for surrender each round. She does not pursue fleeing enemies. If reduced below 20 HP, she orders the enforcers to fall back.

**Veteran tactics:** They fight in formation, covering each other's flanks. They use the timber stacks for cover and try to control the lane.

**Thug tactics:** Less disciplined. THUG3 breaks and flees if any other thug goes down. THUG1 and THUG2 fight until reduced below half HP, then surrender.

**Spy tactics:** Delvin [SPY2] hangs back, using his hand crossbow from cover. If the fight turns against the enforcers, he tries to slip away in the chaos. If the fight turns against the party, he moves to observe and record. His priority is information, not combat. If cornered, he fights with his short sword but uses Cunning Action to Disengage and flee at the first opportunity.

**The merrow:** If combat continues for more than 5 rounds, a merrow [MERROW1] surfaces from the harbour, drawn by the noise and blood. It is not allied with either side — it is a territorial predator that attacks the nearest creature on the dock edge. It uses its harpoon to drag targets into the water. The merrow adds environmental chaos to a prolonged fight and encourages the party to end the conflict quickly.

> Something breaks the surface of the harbour with a wet, heavy sound. A scaled arm reaches up and hooks clawed fingers over the dock edge. A second arm follows, dragging a massive, barnacle-crusted body out of the black water. Yellow eyes fix on the nearest figure, and a mouth full of needle teeth opens in a hiss.

**Nonlethal combat:** If the party chooses to fight nonlethally, they can declare nonlethal damage as normal. If the enforcers are all knocked unconscious rather than killed, this significantly affects the aftermath — Vashti can still be reasoned with, and the Merchants' Guild does not seek retribution.

Connected to:

- A4: Retreat into the warehouse if the fight goes badly.

```yaml
npcs:
  - id: MERROW1
    type: Merrow
    description: A massive, amphibious creature encrusted with barnacles and trailing strands of river weed. It stinks of rotting fish and brine. It is not intelligent enough to take sides — it attacks whatever is closest to the water's edge. It retreats below the surface if reduced to half HP.
    ac: 13
    maxHp: 45
    speed: 10
    swimSpeed: 40
```

## A4. The Warehouse Interior

Warehouse Nine is a cavernous timber building filled with stacked crates, coils of rope, and the smell of old grain. A loft runs along the back wall, accessible by a wooden ladder. The loading dock doors open onto the pier. A smaller door at the rear leads to an alley behind the building.

> The warehouse is dark and cluttered. Dust motes hang in the air where lantern light cuts through gaps in the timber walls. Crates are stacked to the ceiling in uneven rows, creating narrow corridors and blind corners. A wooden loft with a low railing runs along the far wall, piled with canvas tarps and rope. The air smells of old grain, damp wood, and something faintly chemical — like turpentine.

**Searching the warehouse (during or after the confrontation):**

- **DC 12 Perception:** The chemical smell is strongest near the back wall, below the loft.
- **DC 15 Investigation:** A section of the back wall does not match the rest — the timber is newer, the nails are brighter, and the boards are fitted too tightly. This is a false wall.
- **DC 13 Strength or DC 12 Thieves' Tools:** The false wall can be pried open or its hidden latch found. Behind it is a narrow room — Sorn's hidden armoury.

**The hidden armoury:** A room roughly ten feet by twenty, stacked with military supplies: 2 suits of chain mail, 6 shortswords, a rack of crossbow bolts, and a locked iron chest. The weapons are unmarked — no guild seals, no maker's marks. They are clearly meant to be untraceable.

- **The chest (DC 16 Thieves' Tools to pick, or DC 18 Strength to force):** Contains 200 gp in mixed coin, a *Scroll of See Invisibility*, and a folded letter bearing Sorn's personal seal (the serpent sigil from Q1). The letter instructs an unnamed agent to "distribute arms to the loyalist cells before the council vote. The Dockmasters will resist. Ensure they have cause to."
- **DC 14 Intelligence (Investigation) on the letter:** The handwriting matches the coded notebook from Q1 (if the party has it for comparison). This is direct evidence that Sorn is arming a private militia and deliberately provoking guild conflict.

**The loft:** Contains nothing of value — old tarps, coiled rope, and a nest where a dock cat sleeps. However, it provides three-quarter cover and a good vantage point over the warehouse floor, useful if combat spills inside.

**The rear door:** Leads to a narrow alley that connects to the harbour road. This is the spy's preferred escape route if combat goes badly.

Connected to:

- A2: The loading dock.
- The harbour road via the rear alley.

---

## After the Confrontation

The aftermath depends entirely on how the party handled the situation.

### If the Party Fought for the Dockmasters

The enforcers are defeated, driven off, or captured. The cargo is secured. Brokka arrives (if she hasn't already) and surveys the scene.

> Brokka looks at the unconscious enforcers — or the bodies, depending on how the fight went — and exhales slowly. "This is going to have consequences. The Merchants' Guild won't let this go." She turns to you. "But my people eat tomorrow because of what you did tonight. That matters."

Brokka provides the party with:

- **100 gp** from the Dockmasters' Guild emergency fund.
- A *Cloak of the Manta Ray*, retrieved from the harbourmaster's lockbox. "A smuggler left it as collateral years ago. Never came back for it. You'll get more use out of it than I will."
- **Use of a river skiff** — a small, fast boat kept at Pier Three, available whenever the party needs it. "It's not much, but it'll get you up or down the river without anyone asking questions."

**Consequences:** The Merchants' Guild formally protests the attack on their enforcers. Lady Thornwall sends a terse message to the resistance via Maren: *"Your new friends have made my position considerably more difficult."* Lady Thornwall becomes harder to recruit in Q8 (increase social DCs by 2). Brokka's dock workers, however, rally — she begins organising a militia that will be available as allies in Q15 and Q16.

### If the Party Sided with the Merchants or Brokered Peace

If the party convinced Vashti to stand down, exposed the spy, or negotiated a resolution, the cargo is either returned or released under a temporary agreement. No blood was shed — or at least no one died.

> Vashti rolls up her writ and tucks it into her belt. "I don't know what's going on in this city anymore. But I know when I'm being played." She looks at the spy's body — or the empty space where the spy fled. "I'll report to Lady Thornwall that the situation was resolved without incident. What she does with that is her business."

If the spy was exposed:

> Vashti stares at the knife embedded in the dock post — the one meant for the dock worker. "Someone wanted this to turn ugly. That wasn't my order." She looks at the party. "Find out who sent that one. When you do, tell Lady Thornwall. She should know her enforcement actions are being rigged."

**Lady Thornwall's response:** Within two days, a messenger delivers a small wooden box to the party's lodgings. Inside: a *Periapt of Wound Closure*, a pouch containing 150 gp, and a handwritten note on cream-coloured paper.

> *"You showed restraint where others would not have. I am watching. When the Guild Trials are forgotten and the tariffs are old news, come to Thornwall Manor. There are things I wish to discuss that cannot be written down."*

The note is unsigned but bears the Thornwall family seal. This is an early path to Q8 — Lady Thornwall is signalling that she wants help escaping Sorn's grip.

**Consequences:** Brokka is disappointed but not hostile. She feels the party chose politics over loyalty. Subsequent Persuasion checks with Brokka require DC 14 instead of the usual DC 10 until the party demonstrates commitment to the resistance through action (completing Q7 or Q9 resets this). The Merchants' Guild is grateful, and Lady Thornwall is easier to recruit in Q8 (reduce social DCs by 2).

### If the Party Exposed Sorn's Involvement

If the party found the hidden armoury and the letter bearing Sorn's seal, or identified the spy and connected him to the council, they can present this evidence to both sides.

> Brokka reads the letter twice, her jaw tightening. "Arms. He's stockpiling arms in my warehouses and using my own tariff complaints as cover." She sets the letter down carefully, as if it might bite her. "Sorn wanted this fight. He wanted us bleeding each other while he built his private army."

> Vashti reads it next. She says nothing for a long time. Then: "I need to speak to Lady Thornwall. Alone, and soon."

This is the best possible outcome. Both Brokka and Vashti leave with the understanding that they were manipulated. Brokka's militia begins organising, and Lady Thornwall's path to becoming an ally opens early. The party receives rewards from both sides — Brokka's 100 gp and the Cloak of the Manta Ray, plus Lady Thornwall's 150 gp, Periapt of Wound Closure, and the invitation note. The river skiff is also made available.

### Interrogating the Spy

If the spy Delvin is captured alive, he can be questioned. He is more composed than the spy in Q1 — a professional, not a hired runner.

- **DC 13 Intimidation or Persuasion:** Delvin admits he was planted among the enforcers to ensure the confrontation turned violent. He was told to "make sure the docks burn, one way or another." He was hired through a chain of intermediaries and has never met his employer directly.
- **DC 15 Investigation (on his person):** The coded ledger in his coat contains names and dates — a record of Sorn's agents placed inside both guilds. A DC 14 Intelligence check deciphers enough to identify three other agents (this information is useful in Q13, reducing the DC to identify the traitor by 2).
- **DC 16 Intimidation:** Delvin reveals that the hidden armoury was only one of several. "There are caches all over the city. The docks, the Tanners' Quarter, the Old Quarter. Enough weapons to arm two hundred men." He does not know the other locations.
- **DC 13 Insight:** Delvin is genuinely afraid — not of the party, but of his employer. He knows that captured agents do not survive long in Ashenmere's cells (referencing the spy Lira from Q1, if the party turned her over to the watch).

If Delvin is turned over to the city watch, his cell is found empty within 48 hours — the lock picked from outside, a city watch tabard missing from the guardroom. A corrupt guard on Sorn's payroll broke him out. Delvin reappears briefly in Q13 as one of the suspects the party can rule out — he has been spotted fleeing the city along the north road. If released, he flees the city immediately.

### The Dock Worker's Connection

After the confrontation is resolved, a dock worker named **Pilar** [PILAR] approaches the party. She is a lean, sharp-eyed woman who has been watching from the shadows of a nearby warehouse.

> "You handled that well. Or badly. Depends on who you ask." She leans against a crate and picks at a splinter. "Listen — I know people in the Old Quarter who can get things. Potions, mostly. The kind that make you hard to see. If you're planning on making more trouble for the people who deserve it, you'll want their help."

Pilar connects the party to a black market contact in the Old Quarter who sells *Potions of Invisibility* at 150 gp each. This is a side opportunity — not a quest, just a resource available for future use. The potions are genuine and non-cursed.

- **DC 12 Persuasion:** Pilar also mentions that she has seen "strange deliveries" going into the Council Citadel at night — covered wagons escorted by guards who don't wear city watch uniforms. She doesn't know what they carry.
- **DC 10 Persuasion (if the party helped the dock workers):** No check needed — Pilar volunteers the information freely.

Connected to:

- A1: The main lane and timber yards.
- The Dockmasters' bunkhouse: If the party has lodging from Q1.

```yaml
npcs:
  - id: PILAR
    name: Pilar
    type: Human Commoner
    description: A lean, sharp-eyed dock worker in her thirties with close-cropped dark hair and calloused hands. She has connections to the Old Quarter's black market and a pragmatic approach to legality. She is not a criminal — she is a working woman who has learned that the law does not always serve the people it claims to protect.
```

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| *Cloak of the Manta Ray* | Brokka (Dockmaster reward) | Requires siding with Dockmasters or exposing Sorn |
| 100 gp | Brokka (Dockmaster reward) | Requires siding with Dockmasters or exposing Sorn |
| Use of a river skiff | Brokka (Dockmaster reward) | Ongoing benefit; useful for Q10 ship assault |
| *Periapt of Wound Closure* | Lady Thornwall (Merchant/peace reward) | Requires siding with Merchants, brokering peace, or exposing Sorn |
| 150 gp | Lady Thornwall (Merchant/peace reward) | Requires siding with Merchants, brokering peace, or exposing Sorn |
| Invitation to Thornwall Manor | Lady Thornwall (Merchant/peace reward) | Early path to Q8 |
| *Amulet of Proof Against Detection and Location* | Spy Delvin's person | Loot |
| 45 gp | Spy Delvin's person | Loot |
| Coded ledger | Spy Delvin's person | Identifies Sorn's agents; useful for Q13 |
| 20 gp each | Veterans' persons (x2) | Loot |
| *Potion of Healing* (x2) | Veterans' persons (x2) | Loot |
| *Scroll of See Invisibility* | Hidden armoury chest (DC 16 lock) | Useful against Q8 invisible imps |
| 200 gp | Hidden armoury chest (DC 16 lock) | Hidden find |
| Sorn's sealed letter | Hidden armoury chest | Evidence of Sorn arming a private militia |
| 2 chain mail, 6 shortswords | Hidden armoury (DC 15 Investigation) | Untraceable weapons |
| *Potions of Invisibility* (150 gp each) | Pilar's black market contact | Side opportunity; ongoing resource |

## Quest Connections

- **From Quest 1:** Brokka asks the party directly, calling in the goodwill established at the docks. Dock workers from Q1 mention that the tariff situation has worsened since the party arrived. Rila references Torben by name — "He told me you were the ones who helped Brokka at the wharf."
- **To Quest 8:** Lady Thornwall's invitation note provides an early path to the Masquerade at Thornwall Manor. If the party earned her trust here, social DCs at the masquerade are reduced. The *Scroll of See Invisibility* found in the hidden armoury is useful against the invisible imps guarding Sorn's private study at the manor.
- **To Quest 10:** The river skiff provided by Brokka is useful for the ship assault — it allows the party to approach the cursed cargo vessel from an unexpected angle.
- **To Quest 13:** The coded ledger from the spy Delvin contains names of Sorn's agents, reducing the DC to identify the traitor in the resistance.
- **To Quest 15:** The consequences of the party's choice here determine which allies are available for the Outlander Alliance. Siding with Brokka means the Dockmasters' militia joins the resistance early but the Merchants' Guild is hostile and Lady Thornwall harder to recruit. Siding with the Merchants or brokering peace means Lady Thornwall is easier to turn but Brokka must be won back through demonstrated loyalty. If this quest is skipped entirely, the guild conflict escalates without the party's intervention — Brokka is weakened, and the Dockmasters are less useful as allies in Act IV.
