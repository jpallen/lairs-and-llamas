# Quest 3: Trouble at the Tannery

**Level:** 3 | **Type:** Discovery (optional) | **Style:** Investigation/Dungeon

Workers in the Tanners' Quarter are falling ill with a strange malady — blistered skin, bloody coughs, and a metallic taste that won't fade. Guildmaster Harsk Copperkettle personally seeks out the party and asks them to investigate. He's desperate and doesn't trust the city watch, whom he suspects are on someone's payroll. The trail leads from the poisoned water supply through an abandoned building to a hidden alchemical laboratory beneath the streets, where dark experiments have been producing toxic runoff. When the party returns to the surface, a "helpful" local healer reveals herself as something far worse.

This quest rewards thorough investigation, connects directly to the smuggling operation uncovered in Quest 1, and introduces the first of Sorn's doppelganger agents.

---

You've been in Ashenmere long enough to learn the smell of each district. The Tanners' Quarter reeks of lye and curing hides on a good day — but today something is different. A bitter, chemical tang hangs in the air, and the streets are quieter than they should be. A dwarf in a stained leather apron is waiting for you near the district gate, wringing his hands. He spots you and hurries over, his boots squelching in the gutter.

## A1. The Tanners' Quarter — Copperkettle's Plea

A wide, muddy street lined with tanning vats, drying racks, and low timber workshops. Half the shops are shuttered. A few workers sit on doorsteps, pale and listless, with rags pressed to their mouths. The smell of chemicals is sharper here — acrid, like burnt metal.

> "You're the ones from the docks, aren't you? The ones who helped Brokka." The dwarf wipes his hands on his apron and looks up at you with bloodshot eyes. "I'm Harsk Copperkettle. I run the Tanners' Guild — what's left of it. My people are sick. Fourteen workers in the last ten days, and it's getting worse. The healers say it's something in the water, but nobody can tell me *what*."

Harsk [HARSK] is an elderly dwarf with a braided grey beard, deep worry lines, and the cautious manner of someone who has survived decades of guild politics. He is plainly frightened, though he tries to hide it behind gruff professionalism.

**What Harsk knows:**

- The sickness started roughly two weeks ago. Symptoms include blistered skin on the hands and forearms, a persistent bloody cough, nausea, and a metallic taste.
- Only workers who use water from the Tanners' Quarter well are affected. Workers who bring water from home or drink from the tavern barrel are fine.
- The city watch investigated for one day, declared it "bad groundwater," and left. Harsk is furious about this.
- He's heard rumours that an abandoned building on Vat Street — a former dyer's workshop — has had strange lights in the windows at night. He hasn't investigated because "I'm a tanner, not an adventurer."

**If the party asks about Warehouse 14:** Harsk frowns. "That old place? It's been empty for months. It's two streets over from the abandoned dyer's workshop. Why?" He doesn't know the warehouse is connected, but he can give directions.

**DC 12 Medicine check (examining the sick workers):** The symptoms are consistent with prolonged exposure to alchemical heavy metals — arsenic, lead, or something similar dissolved in the water supply. This is not natural contamination; the concentration is too high and too sudden.

**DC 14 Investigation check (examining the well):** The well water has a faint greenish tint visible only when held up to the light in a glass container. The contamination is entering the well from below — through the groundwater, not from the surface.

**DC 15 Survival or Nature check:** A character who examines the ground near the well notices a faint chemical stain in the soil, trailing east along the gutter toward Vat Street. The runoff is seeping through the ground from a source to the east.

Connected to:

- A2: Following the contamination trail east leads to Vat Street.
- A3: The abandoned dyer's workshop is visible from the street — a sagging two-storey timber building with boarded windows.

```yaml
npcs:
  - id: HARSK
    name: Harsk Copperkettle
    type: Dwarf Commoner
    description: An elderly dwarf with a braided grey beard stained yellow from decades of working with tanning chemicals. He wears a heavy leather apron over a patched wool shirt and carries a ring of guild keys at his belt. His hands are calloused and scarred. He is the Guildmaster of the Tanners' Guild — cautious, suspicious of outsiders, and deeply protective of his workers. He speaks bluntly and doesn't waste words.
    abilityScores:
      str: 12
      dex: 10
      con: 14
      int: 13
      wis: 15
      cha: 10
    ac: 10
    maxHp: 9
    speed: 25
    skills:
      - insight
      - perception
  - id: SICKWORKER1
    name: Marta
    type: Human Commoner
    description: A gaunt woman in her thirties with blistered hands wrapped in linen bandages. She coughs frequently into a bloodstained rag. She has been sick for eight days and is too weak to work.
  - id: SICKWORKER2
    name: Old Jasper
    type: Human Commoner
    description: An elderly man sitting on a stool outside a shuttered tannery, breathing in shallow, rattling gasps. His forearms are covered in chemical burns. He's been sick the longest — nearly two weeks.
```

## A2. Vat Street — Tracing the Source

A narrow street running east from the main thoroughfare, lined with disused vat-houses and storage sheds. The chemical smell is strongest here. Most of the buildings are abandoned or used for storage. At the far end of the street stands a sagging two-storey timber building — a former dyer's workshop with its sign long since rotted away.

> The gutter along Vat Street carries a thin trickle of greenish liquid. It's easy to miss in the mud, but once you spot it, you can follow the trail. The trickle grows stronger as you move east, seeping out from beneath the foundation of the old dyer's workshop at the end of the street.

**Investigating the street:**

- **DC 10 Perception:** The greenish runoff is clearly coming from beneath the abandoned building's foundation. Cracks in the stonework at ground level are stained with the same chemical residue.
- **DC 13 Investigation:** Fresh boot prints in the mud near the building's side door — someone has been coming and going recently, despite the building appearing abandoned. The prints suggest one person, wearing fine-soled boots (not a labourer's footwear).
- **DC 14 Perception:** A character watching the building for a few minutes notices a faint, flickering glow through a gap in the boarded ground-floor windows — not candlelight, but something with a greenish tint.

**Asking locals:** A street vendor named Coll [COLL] sells roasted chestnuts from a cart at the corner. He's noticed the strange lights at night and heard "thumping and clanking" from inside the building after dark. He also mentions that a local healer named Sera has been tending to the sick workers — "Kind woman. She set up a little clinic in the old sailmaker's shop around the corner. Been doing good work." (Sera is the doppelganger — see A5.)

Connected to:

- A1: Back west to the main Tanners' Quarter street.
- A3: The abandoned dyer's workshop is at the end of the street.

```yaml
npcs:
  - id: COLL
    name: Coll
    type: Human Commoner
    description: A cheerful, round-faced man who sells roasted chestnuts from a battered cart. He knows the comings and goings of Vat Street and is happy to talk to anyone who buys a bag of chestnuts (1 cp).
```

## A3. The Abandoned Dyer's Workshop — Ground Floor

A two-storey timber building in poor repair. The front door is nailed shut, but the side door (facing the alley) has a functional lock hidden behind a plank of wood made to look nailed in place.

> The building smells of mildew and old dye. The ground floor is a single large room — cracked stone vats line the walls, draped in dusty cloth. Broken shelving, rotting barrels, and heaps of mouldering fabric fill the space. Rats scatter as you enter. Everything looks abandoned, but the dust on the floor has been disturbed — a path of scuffed footprints leads from the side door to a heavy stone vat in the northwest corner.

**The side door:**

- **DC 12 Investigation (examining the boarded door):** The nails on one plank are loose — the plank lifts away to reveal a lock beneath.
- **DC 14 Thieves' Tools:** Picks the lock. Alternatively, DC 16 Strength to force it (makes noise — see below).
- **Forcing entry loudly:** The animated armour in A4 activates immediately and moves to the base of the stairs, waiting to attack whoever descends.

**Searching the ground floor:**

- **DC 10 Investigation (the stone vat):** The vat in the northwest corner has been moved recently — scratch marks on the floor. It slides aside to reveal a narrow stone staircase descending into darkness.
- **DC 13 Perception:** A faint hum of magical energy rises from the staircase, and the chemical smell is much stronger here.

**Trap — the stairs:**

- **DC 14 Perception or Investigation (examining the staircase):** The third step from the bottom is a pressure plate. Stepping on it triggers a spray of alchemical acid from a nozzle hidden in the wall.
- **If triggered:** DC 13 Dexterity saving throw. On a failure, the creature takes 2d6 acid damage. On a success, half damage. The trap resets after 1 minute.
- **Disarming:** DC 13 Thieves' Tools to disable the nozzle, or the step can simply be avoided once spotted.

Connected to:

- A2: Vat Street, through the side door.
- A4: The hidden laboratory, down the stairs.

## A4. The Hidden Laboratory

A low-ceilinged stone cellar that has been converted into a functional alchemical laboratory. The air is thick with chemical fumes, and a greenish haze hangs at knee level. Workbenches line the walls, covered in glassware, burners, and racks of labelled vials. A large copper still dominates the centre of the room, connected by tubes to a drainage channel cut into the floor — the source of the toxic runoff contaminating the well.

> The stairs open into a cellar far larger than the building above. Stone walls glistening with moisture surround a fully equipped alchemical laboratory. Glass retorts bubble over low flames. A copper still the size of a wine barrel hisses and drips green liquid into a channel cut into the floor, which disappears into the foundation wall — toward the Tanners' Quarter well. A suit of plate armour stands motionless in an alcove near the far wall, and two figures in stained aprons slump over a workbench, swaying slightly. They don't appear to be breathing.

**The guardians:** The laboratory is protected by 1 animated armour [ARMOUR1] and 2 alchemy-warped zombies [ZOMBIE1] [ZOMBIE2]. The animated armour stands in an alcove and activates when any creature enters the room (or when alerted by noise from above). The zombies are hunched over workbenches — they look like dead workers until they move.

**Combat notes:**

- The animated armour attacks the nearest creature and fights until destroyed. It guards the room methodically, positioning itself between intruders and the workbenches.
- The zombies are slow and clumsy but resilient. Their skin is discoloured green-grey from alchemical exposure. They attack with slam attacks and do not coordinate — they simply lurch toward the nearest living creature.
- **Hazard — chemical fumes:** The green haze at knee level is mildly toxic. Any creature that starts its turn prone in the laboratory must make a DC 11 Constitution saving throw or be poisoned until the end of its next turn.
- **Environmental option:** A character can use an action to knock over the copper still (DC 12 Strength check), spilling boiling alchemical liquid across a 10-foot area. Any creature in the area takes 2d4 acid damage (DC 12 Dexterity save for half). This also destroys the still and stops the contamination.

**After combat — investigating the lab:**

- **DC 10 Investigation (the drainage channel):** The runoff from the still flows through the channel, through the foundation, and into the groundwater that feeds the Tanners' Quarter well. Smashing the still or blocking the channel stops the contamination.
- **DC 12 Investigation (the workbenches):** The lab has been producing concentrated alchemical toxins — not poisons meant for direct use, but industrial-scale contaminants. Notes on the bench describe the process in clinical detail. This was deliberate pollution, not an accident.
- **DC 13 Investigation (the notes):** Among the scattered papers is a list of city officials with notes beside their names — debts, affairs, criminal connections, embarrassing secrets. This is a blackmail dossier. Names include several merchants, two city watch captains, and **Lady Thornwall** (marked with a star and the note: "leverage sufficient — proceed when ready").
- **DC 14 Arcana (the vials):** Three of the intact vials on the shelves are *Potions of Healing*. A herbalism kit sits beside them, along with 40 gp worth of assorted alchemical ingredients (acids, reagents, dried herbs).
- **DC 14 Investigation (the notes, continued):** The handwriting on several of the lab notes matches the handwriting in the coded notebook from Quest 1 — the same person wrote both. A note in the margin reads: *"Ensure the master's preparations proceed on schedule. The tannery district serves its purpose — the contamination keeps the watch focused on public health, not on us."*
- **DC 16 Investigation (the floor):** A concealed floor safe is hidden beneath a flagstone under one of the workbenches. The flagstone has been recently mortared but not well — scraping away the mortar reveals a heavy iron box set into the floor. It is locked (DC 15 Thieves' Tools to open, or DC 18 Strength to pry loose).

**The floor safe contains:**

- 120 gp in mixed coin
- A *Scroll of Lesser Restoration*
- A leather-bound journal detailing poison recipes, experimental notes, and delivery schedules. The journal's handwriting matches the coded notebook found on the spy in Quest 1 — this is the same operative, or at least the same organisation. A note in the journal reads: *"Ensure the paladin's tomb remains sealed. The master does not wish that complication revisited."*

**The serpent sigil:** A DC 10 Perception check (no check needed if the party recovered the sigil in Quest 1) notices the same coiled-serpent sigil stamped on several of the lab's supply crates. This confirms the lab is connected to the smuggling operation.

**Stopping the contamination:** Destroying the copper still, blocking the drainage channel, or both. Harsk will need to arrange for the well to be flushed — the party can suggest this when they report back. The workers will begin recovering within a few days once the source is eliminated.

Connected to:

- A3: Up the stairs to the ground floor.

```yaml
npcs:
  - id: ARMOUR1
    type: Animated Armor
    description: A suit of splint armour standing in a stone alcove. It is motionless until activated — then it moves with eerie, mechanical precision, drawing a longsword from a rack on the wall. The armour is in good condition and can be salvaged after the fight.
  - id: ZOMBIE1
    type: Zombie
    description: A human figure in a stained leather apron, hunched over a workbench. Its skin is discoloured green-grey from prolonged alchemical exposure, and its eyes are cloudy and unfocused. It was once a tannery worker — whether it was killed and raised or transformed by the experiments is unclear.
  - id: ZOMBIE2
    type: Zombie
    description: A second alchemically warped figure, shorter and stockier, slumped against a shelf of vials. Its hands are fused to a glass retort it was holding when it turned. It drops the retort and lurches forward when combat begins.
```

## A5. The Surface Confrontation — Sera the Healer

When the party returns to the surface after clearing the lab, they find a woman waiting for them on Vat Street. She introduces herself as Sera [SERA], a travelling healer who has been tending to the sick workers. She is warm, concerned, and asks the party what they found below.

> As you step back out into the grey daylight of Vat Street, a woman in a simple blue cloak is waiting near the door. She has kind eyes and an easy smile, and she's carrying a healer's satchel over one shoulder. "Oh, thank the gods. I saw you go in there and I was worried. I'm Sera — I've been treating the sick workers in the quarter. Did you find the source? Is it over?"

**Sera is a doppelganger** [DOPPELGANGER1] — one of Sorn's agents, tasked with observing the party and reporting on their investigation. She has been posing as a healer for approximately a week, genuinely treating the sick workers (to maintain her cover) while monitoring anyone who investigates the lab.

**Sera's behaviour:** She is friendly, helpful, and asks probing questions:

- "What was down there? Did you find anything... unusual?" (Fishing for information about the dossier.)
- "Those poor workers in the aprons — they were missing from the quarter. I feared the worst." (Gauging the party's reaction to the zombies.)
- "I should tell Guildmaster Copperkettle the good news. Shall I fetch him?" (Trying to leave to report to Sorn.)

**Detecting the doppelganger:**

- **DC 15 Insight:** Sera's questions are oddly specific. She seems less interested in the contamination and more interested in what documents or evidence the party recovered.
- **DC 16 Insight:** Something is subtly wrong about Sera's mannerisms. She mirrors the body language of whoever she's speaking to — a social trick, but she does it too perfectly, as though she's reading their posture and reflecting it back.
- **DC 13 Arcana or Religion:** A character who specifically examines Sera with magical senses (e.g., *Detect Magic*, *Divine Sense*) notices something anomalous. *Detect Magic* reveals a faint aura of transmutation. *Divine Sense* does not detect fiend or undead, but the character gets an uneasy feeling — Sera does not register as anything recognisable.
- **The Ring of Mind Shielding:** If a character casts *Detect Thoughts* or similar, Sera's mind is shielded — she is wearing a *Ring of Mind Shielding* on a chain around her neck, concealed under her cloak.

**If the party is suspicious but doesn't act:** Sera makes an excuse and tries to leave. "I should check on my patients. I'll find you later." If allowed to leave, she vanishes from Ashenmere. The doppelganger encounter is lost, but the party may recognise the pattern later (Quest 5, Quest 13).

**If the party confronts Sera or prevents her from leaving:**

> Sera's expression flickers — just for an instant, the kind smile falters and something cold and calculating shows through. Then she sighs. "Clever. I suppose it was too much to hope you'd be as stupid as the watch."

> Her features ripple and shift. The blue cloak, the healer's satchel, the kind eyes — all of it melts away, replaced by a grey-skinned, featureless figure with blank white eyes. The doppelganger drops into a fighting stance.

**Combat — the doppelganger:**

- The doppelganger fights intelligently. On its first turn, it uses Read Thoughts on the party member who seems most dangerous, then targets that character with Ambush attacks.
- If reduced to half HP, it attempts to flee — shifting its form to match a random bystander (a street vendor, a dock worker, a child) and running into the crowd on the main street.
- **Pursuit:** If the party chases, run a quick skill challenge: DC 14 Perception to spot which "person" in the crowd is the doppelganger (it can't perfectly replicate clothing while running). DC 13 Athletics or Acrobatics to close the distance. Two successes before two failures catches it.
- If the doppelganger escapes, it reports to Sorn and is encountered again in Quest 5 or Quest 13. If killed, another of Sorn's agents takes its place.

**If the doppelganger is killed:** Its form reverts to its true grey-skinned appearance. It carries the *Ring of Mind Shielding* and a small pouch containing 15 gp and a folded note: *"Observe the investigators. Report what they recover from the laboratory. Do not engage unless compromised. — S."*

**If the doppelganger is captured alive:** It is arrogant and unhelpful. It knows it works for someone powerful but has never met Sorn in person — orders come through dead drops and intermediaries. It refers to its employer only as "my patron." A DC 18 Intimidation check forces it to admit: "There are more of us than you think. My patron has eyes everywhere." It will not say more.

Connected to:

- A1: Harsk Copperkettle is waiting for the party's report at the Tanners' Guild hall.
- A2: Vat Street, where the confrontation occurs.

```yaml
npcs:
  - id: SERA
    name: Sera
    type: Doppelganger
    description: In her assumed form, Sera appears as a human woman in her late twenties with warm brown eyes, auburn hair tied back in a practical braid, and a kind, open face. She wears a simple blue travelling cloak and carries a healer's satchel stocked with genuine medicines. In her true form, she is a grey-skinned, hairless humanoid with blank white eyes and malleable features. She is calm, calculating, and utterly without loyalty to anyone but herself and her employer.
    abilityScores:
      str: 11
      dex: 18
      con: 14
      int: 11
      wis: 12
      cha: 14
    ac: 14
    maxHp: 52
    speed: 30
    skills:
      - deception
      - insight
      - stealth
```

---

## After the Investigation

When the party reports back to Harsk Copperkettle — either at the Tanners' Guild hall or on the street — he listens to their account in grim silence.

> Harsk stares at the ground for a long moment after you finish. His hands are clenched at his sides. "Someone built a gods-damned poison factory under my district. My people — my *workers* — were being used as... what, a distraction? A cover?" He looks up, and his eyes are hard. "You've done more in a day than the city watch did in a week. I won't forget this."

**Harsk's reaction to the doppelganger (if revealed):** He is visibly shaken.

> "A shapechanger? Here? In my quarter, treating my people?" He rubs his face with both hands. "How do you fight something that can be anyone? How do you trust..." He trails off, then squares his shoulders. "You've earned more than coin today. You've earned my trust — and in this city, that's worth more than gold."

**Harsk's reaction if the party shows him the blackmail dossier:** He reads the names slowly, his face going pale.

> "These are powerful people. Merchants, watch captains... Lady Thornwall herself." He hands the dossier back with shaking hands. "Someone is collecting leverage on half the city. This is bigger than a poisoned well. You need to be careful who you show this to."

### The Merchant's Offer

The blackmail dossier names a wealthy jeweller called **Torvin** [TORVIN] who has been paying protection money to avoid having his financial indiscretions exposed. If the party visits Torvin at his shop in the Merchants' Quarter, he is initially terrified — then desperately grateful when he learns the party has the dossier.

> "You have the file? My file?" Torvin's hands tremble as he pours himself a glass of wine. "I've been paying that blackmailer for three months. Fifty gold a month to keep my name clean. If you destroy my page — burn it, shred it, I don't care — I'll give you something far more valuable than coin."

Torvin offers the party a *Pearl of Power* — a small, iridescent pearl set in a silver clasp — in exchange for destroying his page from the dossier. He is honest about the deal and will hand over the pearl immediately upon seeing his file destroyed.

**DC 12 Insight:** Torvin is genuine. He is a vain man who made foolish financial decisions, not a criminal. He's terrified of public ruin.

```yaml
npcs:
  - id: TORVIN
    name: Torvin
    type: Human Commoner
    description: A plump, well-dressed man in his fifties with rings on every finger and a thin moustache waxed to points. He runs the finest jewellery shop in the Merchants' Quarter and is deeply in debt due to his gambling habits. He is vain, anxious, and not nearly as wealthy as he appears.
```

### Reporting to Harsk — Payment

Harsk pays the party from the Tanners' Guild treasury and provides a gift from the guild stores.

> "Seventy-five gold — it's what the guild can afford, and it's not enough. Take these as well." He sets a leather roll of finely made tools on the table. "Masterwork artisan's tools. Best the Tanners' Quarter produces. And from now on, any shop in this district will give you a fair price. I'll see to it personally."

Connected to:

- A1: The Tanners' Quarter.
- Torvin's shop: In the Merchants' Quarter, accessible any time.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 75 gp | Harsk Copperkettle (quest reward) | Paid from Tanners' Guild treasury |
| Masterwork artisan's tools (worth 50 gp) | Harsk Copperkettle (quest reward) | Gift from the Tanners' Guild |
| 10% discount at Tanners' Quarter shops | Harsk Copperkettle (quest reward) | Ongoing benefit |
| 3 *Potions of Healing* | Lab workbench (DC 14 Arcana) | Loot |
| Herbalism Kit | Lab workbench (DC 14 Arcana) | Loot |
| 40 gp in alchemical ingredients | Lab workbench (DC 14 Arcana) | Loot |
| Splint armour (good condition) | Animated armour (after defeat) | Loot |
| *Ring of Mind Shielding* | Doppelganger's person | Loot; only if doppelganger is defeated |
| Blackmail dossier | Lab notes (DC 13 Investigation) | Evidence; names city officials and Lady Thornwall |
| 120 gp | Floor safe (DC 16 Investigation, DC 15 Thieves' Tools) | Hidden find |
| *Scroll of Lesser Restoration* | Floor safe | Hidden find |
| Poison recipe journal | Floor safe | Evidence; handwriting matches Q1 spy's notebook |
| *Pearl of Power* | Torvin the jeweller (side opportunity) | Reward for destroying his dossier page |

## Quest Connections

- **From Quest 1:** The dock worker Torben and the coded notebook both pointed to Warehouse 14 in the Tanners' Quarter. The coiled-serpent sigil from Quest 1's smuggled goods appears stamped on supply crates in the hidden laboratory. The handwriting in the lab journal and floor safe notes matches the coded notebook recovered from the spy.
- **To Quest 5:** The doppelganger posing as Sera is the first hint of Sorn's shapechanger network. If the party unmasked or killed the doppelganger here, they have valuable experience recognising the signs — Insight checks to detect future doppelgangers are made with advantage.
- **To Quest 8:** The blackmail dossier names Lady Thornwall as a target, marked with a star and the note "leverage sufficient — proceed when ready." This foreshadows the political crisis at Thornwall Manor.
- **To Quest 12:** The poison recipe journal in the floor safe contains the note: *"Ensure the paladin's tomb remains sealed."* This is the first reference to the sealed tomb and its significance to Sorn's plans.
- **To Quest 13:** The party's first doppelganger encounter — whether successful or not — provides context for later shapechanger encounters. If the party developed methods to detect the doppelganger (specific Insight cues, magical detection), those methods remain effective.
- **If skipped:** The party misses the blackmail dossier and the doppelganger reveal. Harsk Copperkettle remains neutral toward the party and cannot be recruited as an ally in Act IV. The sick workers eventually recover on their own once the lab's supplies run out, but Sorn's operation suffers no setback.
