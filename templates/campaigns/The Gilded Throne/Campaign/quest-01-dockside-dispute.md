# Quest 1: The Dockside Dispute

**Level:** 1 | **Type:** Story | **Style:** Combat/Social

The party arrives in Ashenmere and immediately witnesses a confrontation on the docks. Hired thugs attack Brokka Ironjaw, the Dockmasters' Guild harbourmaster, during a dispute over a falsified cargo manifest. A broken crate reveals smuggled alchemical supplies marked with an unfamiliar sigil — the first breadcrumb pointing to Sorn's hidden network.

This quest introduces the dock district, two guild leaders, and the city's political tensions within the first hour of play.

---

You were travelling along the river road toward Ashenmere when the city came into view — a sprawl of timber and stone climbing the banks of the River Ashen, with a busy harbour at its feet. Merchant vessels line the wharves, and the air smells of tar, fish, and woodsmoke. As you approach the docks, you hear raised voices. A crowd has gathered around a stack of cargo crates near the main wharf.

## A1. The Main Wharf

A broad stone wharf stretches along the riverbank, crowded with crates, barrels, and coils of rope. Merchant vessels are moored at regular intervals. A group of dock workers in leather aprons are refusing to unload a cargo barge, arms crossed, while a thin man in a clerk's coat waves a sheaf of papers at them.

> "The manifest is in order! These goods are paid for and expected. You have no right to hold this shipment!"

At the centre of the dispute stands Brokka Ironjaw [BROKKA] — a broad-shouldered half-orc woman with a shaved head and a docker's hook hanging from her belt. She jabs a finger at the manifest.

> "This manifest says Thornwall Silks. I can smell alchemicals through the crating, and the weight's wrong. You're not unloading anything until I see what's really inside."

The clerk, Fenwick [FENWICK], is a nervous Merchants' Guild functionary who genuinely believes the papers are legitimate. He is not involved in the smuggling — his manifest was swapped by a doppelganger without his knowledge.

Two dock workers [DOCKER1] [DOCKER2] stand behind Brokka, loyal but unarmed. A small crowd of onlookers has gathered, including fishmongers, sailors, and a few street vendors. The atmosphere is tense but not yet violent.

The party arrives at the edge of this scene. They can observe, approach, or intervene however they choose.

**If the party approaches Brokka:** She glances at them, sizes them up, and says: "You lot look like you can handle yourselves. Stick around — I've got a feeling this is about to get ugly." She nods toward the crowd, where four rough-looking figures [BANDIT1] [BANDIT2] [BANDIT3] [BANDIT4] are pushing through toward her.

**If the party approaches the clerk:** Fenwick is flustered and grateful for any support. "Thank the gods — someone reasonable. Tell this woman the Merchants' Guild doesn't forge manifests!" He shows the papers freely. A DC 12 Investigation check reveals the manifest seal is genuine Merchants' Guild wax, but the handwriting doesn't match the signature — it was copied, not written by the signatory.

**If the party does nothing:** After 2 rounds of escalating argument, the bandits attack anyway.

Connected to:

- A2: The crowd scatters toward the harbour street to the south.
- A3: The cargo barge is moored at the edge of the wharf to the east.

```yaml
npcs:
  - id: BROKKA
    name: Brokka Ironjaw
    type: Half-Orc Veteran
    description: A broad-shouldered half-orc woman with a shaved head, a docker's hook at her belt, and a voice that carries across the entire harbour. She is the Guildmaster of the Dockmasters' Guild — pragmatic, loyal, and not remotely afraid of a fight. She wears a battered leather vest over a stained linen shirt.
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
  - id: FENWICK
    name: Fenwick Grayle
    type: Human Commoner
    description: A thin, nervous man in a clerk's coat with ink-stained fingers and spectacles perched on his nose. He works for the Merchants' Guild and genuinely believes the manifest is legitimate. He has no combat ability and will flee if violence breaks out.
  - id: DOCKER1
    type: Commoner
    description: A stocky human dock worker in a leather apron. Loyal to Brokka but unarmed.
  - id: DOCKER2
    type: Commoner
    description: A wiry halfling dock worker with calloused hands. Loyal to Brokka but unarmed.
```

## A2. The Ambush

When the bandits attack (either provoked or after 2 rounds of the dispute), they emerge from the crowd simultaneously. Two target Brokka directly, while the other two move to cut off anyone who tries to help her.

> Four rough-looking figures shove through the crowd, drawing short swords. One of them shouts, "The half-orc! Get the half-orc!" Brokka snarls and yanks the docker's hook from her belt.

**The fight:** 4 bandits [BANDIT1-4] attack. Their orders are to kill Brokka and flee. They fight recklessly and don't care about collateral damage.

**Brokka's behaviour:** She engages 2 bandits directly (BANDIT1 and BANDIT2), fighting competently with her docker's hook (treat as a handaxe). She can handle these two on her own — she takes damage but doesn't go down unless the party ignores her entirely. This means the party effectively fights BANDIT3 and BANDIT4.

**Docker behaviour:** DOCKER1 and DOCKER2 grab whatever's to hand (a belaying pin and a crate lid) and try to protect Fenwick, who is cowering behind a stack of barrels. They are non-combatants and will be knocked out in one hit if targeted.

**The spy:** After 1 round of combat, a figure in a hooded cloak [SPY1] darts out from behind the cargo barge. They are not joining the fight — they are trying to grab something from the broken crate (see A3) and flee south along the harbour street. A DC 13 Perception check notices the spy during the chaos. If no one notices, Brokka spots them after round 2 and shouts: "Someone's at the crates! Don't let them run!"

The spy has a 1-round head start if unnoticed. If the party pursues, see A4.

**When the bandits are defeated or flee:** Any surviving bandit surrenders at half HP or lower. They know almost nothing — they were hired at a tavern called the Rusty Nail by a man they'd never met, paid 5 gp each in foreign coin. They don't know who ordered the attack.

Connected to:

- A1: The main wharf around them.
- A3: The cargo barge at the edge of the wharf.
- A4: The harbour street to the south, if pursuing the spy.

```yaml
npcs:
  - id: BANDIT1
    type: Bandit
  - id: BANDIT2
    type: Bandit
  - id: BANDIT3
    type: Bandit
  - id: BANDIT4
    type: Bandit
  - id: SPY1
    type: Spy
    description: A lean figure in a hooded grey cloak with quick, darting eyes. They move with professional precision — clearly trained, not a street thug. They carry a short sword and a hand crossbow concealed under the cloak. Their orders are to retrieve evidence from the broken crate and flee. They do not fight unless cornered.
```

## A3. The Cargo Barge

A flat-bottomed river barge moored at the end of the wharf. It carries a dozen large crates stamped with the Merchants' Guild seal. One of the crates has been cracked open during the commotion — either by the fight spilling into the cargo, or by the spy attempting to retrieve its contents.

> The broken crate has spilled its contents across the deck of the barge. Instead of the silk bolts the manifest describes, the crate contains glass vials packed in straw, clay jars sealed with wax, and bundles of dried herbs. Everything is marked with a sigil you don't recognise — a coiled serpent eating its own tail, stamped in dark red ink.

**Investigating the cargo:**

- **DC 10 Intelligence (Nature or Arcana):** The supplies are alchemical reagents — acids, binding agents, and catalysts used in potion-making or chemical experimentation. Not illegal on their own, but not what the manifest claims.
- **DC 13 Intelligence (Investigation):** The red sigil doesn't match any known guild, trade house, or merchant company operating in Ashenmere. It's not local.
- **DC 14 Intelligence (Investigation):** A hidden compartment in the base of the broken crate contains a silver signet ring bearing the same serpent sigil. The ring is finely made — worth 50 gp to a collector, but clearly meant as an identification token, not jewellery. (This sigil recurs throughout the campaign — on the cursed cargo in Quest 10, on documents in Quest 8, and on Sorn's personal correspondence.)
- **DC 14 Intelligence (Arcana):** Some of the reagents are unusual. One jar contains powdered bone mixed with sulphur — a component used in fiendish summoning rituals, though this requires very specific knowledge to recognise. A character with a background in occult studies or who has dealt with fiends before would know this.

**The alchemist's fire:** Among the supplies are 6 intact vials of *Alchemist's Fire*. The party can take these.

**The spy's target:** The spy was trying to retrieve the signet ring and a small leather-bound notebook tucked beneath the straw. If the spy escaped (see A4), the notebook is gone. If the spy was stopped, the notebook is still here. The notebook contains a coded message — see "The Coded Message" below.

**Other crates:** The remaining crates on the barge contain legitimate goods — silk bolts, spices, and lamp oil. The smuggled crate was slipped into the shipment, replacing one of the genuine crates.

Connected to:

- A1: The main wharf.

## A4. Harbour Street Chase

If the spy flees, they run south along the harbour street — a narrow, crowded lane of fish stalls, rope shops, and chandlers. The spy is fast and knows the city.

> The cloaked figure darts through the crowd, weaving between fish stalls and startled merchants. They knock over a cart of apples, sending fruit rolling across the cobblestones, and duck into a narrow alley between two warehouses.

**Chase mechanics:** Run this as a skill challenge. The spy needs 3 successes to escape. The party needs 3 successes to catch them. Each round, one party member can attempt a check:

- **Athletics (DC 13):** Sprint through the crowd, vaulting obstacles.
- **Acrobatics (DC 13):** Nimbly dodge through the crowd without slowing.
- **Perception (DC 14):** Spot which alley the spy turned into before they disappear.
- **Intimidation (DC 12):** Shout at the crowd to clear a path. Works once.
- **Any ranged attack (AC 15):** A hit doesn't kill the spy but forces them to stumble (counts as a success for the party). Non-lethal damage is possible.

**Creative solutions:** If a player suggests something inventive — cutting through a building, using magic to slow the spy, throwing a net — adjudicate it as a DC 12-14 check of the appropriate ability.

**If the spy escapes:** They vanish into the city. The notebook is lost, but the signet ring (if found in A3) remains. The spy will not reappear in this quest.

**If the spy is caught:** They fight only as a last resort. If cornered with no escape, they draw a short sword and hand crossbow. A caught spy can be interrogated — see "Interrogating the Spy" below.

Connected to:

- A1/A2: Back to the main wharf.

---

## After the Fight

When combat is resolved, Brokka wipes blood off her docker's hook and addresses the party directly.

> "Well. You didn't have to step in, but you did. I won't forget that." She looks at the broken crate and its strange contents. "Someone went to a lot of trouble to sneak this into my harbour. I want to know who, and I want to know why."

Brokka is direct and grateful. She offers the party:

- **25 gp** for their help, paid immediately from a lockbox in the harbourmaster's office.
- **Free lodging** at the Dockmasters' bunkhouse — a simple but clean dormitory above the harbour office — for as long as they're in the city.
- **Work.** "Ashenmere's got problems. If you're looking to earn coin and do some good, come find me. I could use people I can trust."

She also introduces herself properly: *"Brokka Ironjaw. I run the Dockmasters' Guild. These docks are mine, and someone just used them to smuggle gods-know-what into my city."*

### Fenwick's Reaction

The clerk, Fenwick, is shaken. He examines the smuggled goods with genuine shock.

> "I don't understand. The manifest was filed through the proper channels. I processed it myself. The seal is real — I checked it against the registry."

A DC 12 Insight check confirms Fenwick is telling the truth — he had no idea the manifest was falsified. This is the first hint that someone inside the Merchants' Guild (or posing as someone inside) is facilitating the smuggling. Fenwick can provide:

- The name of the merchant who filed the shipment: **Aldric Voss** (a real merchant who will deny any involvement — his identity was stolen by a doppelganger).
- The warehouse where the cargo was supposed to be delivered: **Warehouse 14, Tanners' Quarter**. (This connects to Quest 3 — the warehouse is near the abandoned building hiding the alchemical lab.)

### Interrogating the Spy

If captured, the spy gives their name as **Lira** (false — their real name is irrelevant). They are professional and composed, answering questions with half-truths.

- **DC 13 Intimidation or Persuasion:** Lira admits she was sent to retrieve the ring and the notebook before anyone could examine them. She was hired through a dead drop — she's never met her employer.
- **DC 15 Intimidation:** Lira reveals the dead drop location — a loose brick behind the Rusty Nail tavern in the Old Quarter. If the party checks, they find it empty but with a faint scent of perfume (the same perfume found on the bandit captain's letter in Quest 2).
- **DC 18 Insight:** Lira is more afraid than she's letting on. She glances involuntarily toward the Council Citadel when asked about her employer. She won't name Sorn — she doesn't know his name — but she knows the orders come from "someone in the council."

Lira can be turned over to the city watch or released. If turned over, she is found dead in her cell the next morning — officially a suicide, actually silenced by one of Sorn's agents. If released, she disappears from the city.

### The Coded Message

The notebook (if recovered) contains a list of dates, locations, and quantities written in a simple substitution cipher. A DC 13 Intelligence check deciphers it — it's a delivery schedule for smuggled alchemical supplies, listing:

- **Three past deliveries** to Warehouse 14 in the Tanners' Quarter (connecting to Quest 3).
- **Two future deliveries** scheduled over the next month, arriving by river barge.
- A note at the bottom in different handwriting: *"Ensure the next batch includes the Calishite reagents. The master's preparations require them."*

The word "master" is never explained. If the party shows the notebook to Brokka, she is deeply concerned — this suggests a well-organised operation, not a one-off smuggling run.

### The Dock Worker's Tip

After the fight, a dock worker named **Torben** [TORBEN] approaches the party if they're lingering on the wharf. He's a stocky, sunburned man who was loading cargo nearby and saw everything.

> "Hey — I wasn't going to say nothing, but you lot seem like the sort who'd want to know. A crate just like that one? Same markings and everything? Got delivered to a place in the Tanners' Quarter about a week ago. I was on the crew that carted it over."

- **DC 12 Persuasion:** Torben gives the address — it's Warehouse 14, the same location mentioned in the coded message.
- **DC 10 Persuasion (if the party helped Brokka):** Torben volunteers the information freely, no check needed. "Anyone who stands up for the boss is good in my book."

This gives the party a direct lead into Quest 3 if they choose to follow it.

Connected to:

- A1: The main wharf.
- The Dockmasters' bunkhouse: Free lodging, available any time.

```yaml
npcs:
  - id: TORBEN
    name: Torben
    type: Human Commoner
    description: A stocky, sunburned dock worker with a thick neck and honest eyes. He's been working the Ashenmere docks for fifteen years and is quietly loyal to Brokka. He saw the smuggled crate being delivered to the Tanners' Quarter last week.
```

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 25 gp | Brokka (quest reward) | Paid immediately |
| Free lodging at the Dockmasters' bunkhouse | Brokka (quest reward) | Ongoing benefit |
| *Potion of Healing* | Spy's person | Loot |
| 15 gp in Calishite coin | Spy's person | Loot; the foreign coin recurs |
| Coded notebook | Spy's person / broken crate | If recovered; delivery schedules |
| 6 vials of *Alchemist's Fire* | Broken crate | Loot |
| Silver signet ring (serpent sigil) | Broken crate (DC 14 Investigation) | Hidden find; evidence, worth 50 gp |
| Address of Warehouse 14 | Torben / coded notebook | Lead into Quest 3 |
| Dead drop location (Rusty Nail) | Spy interrogation (DC 15) | Connects to Quest 2 perfume clue |

## Quest Connections

- **To Quest 2:** Brokka mentions the funeral of Guildmaster Thera Loomwright and invites the party to attend. The Calishite coin found on the spy and bandits here recurs on the attackers in Quest 2.
- **To Quest 3:** The dock worker Torben and the coded notebook both point to Warehouse 14 in the Tanners' Quarter — the same area where Quest 3 takes place. The smuggled alchemical supplies are being used in the hidden lab beneath the abandoned building.
- **To Quest 8:** The silver signet ring's serpent sigil appears on documents in Sorn's private study at Thornwall Manor.
- **To Quest 10:** The same sigil is stamped on the cursed cargo arriving by ship. If the party kept the ring, they can match it immediately.
