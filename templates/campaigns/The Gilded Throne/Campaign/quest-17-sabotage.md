# Quest 17: Sabotage

**Level:** 9 | **Type:** Story | **Style:** Triple mini-encounter (ticking clock)

The Council Citadel is shielded by three ward stones hidden across Ashenmere, each maintained by one of Sorn's lieutenants. The party has finally gathered enough intelligence to locate all three — from the traitor's confession, the captured veterans' interrogation, and the meditation vision. Now they must destroy every ward stone in a single night, before dawn triggers the stones' renewal cycle and alerts the Citadel's defenders.

This quest is a race against the clock. Three locations, three completely different challenges, one night to complete them all. The party must choose their order carefully — time spent in one location is time lost for the others.

---

Dusk settles over Ashenmere. The sky is bruised purple and orange above the rooftops, and the streets are emptying as lanterns flicker to life in tavern windows. You have gathered in your safehouse with a map of the city spread across the table, three locations marked in red ink. Tonight, the ward stones fall — or the siege never begins.

## A1. The Briefing

The party's safehouse — a shuttered chandler's shop in the Dyers' Quarter with boarded windows and a heavy bar on the door. A map of Ashenmere is pinned to the wall, annotated with intelligence gathered over the previous weeks. Three ward stone locations are circled in red.

> The Ward Stone Shard recovered from the veterans pulses faintly in its leather pouch, a low thrum you can feel in your teeth. It grows warmer when pointed toward any of the three locations — confirmation that the intelligence is good.

**The three targets:**

1. **The Flooded Sewer** — Beneath the Tannery District. A brute-force problem. Something large and foul is guarding the stone in a half-submerged chamber.
2. **The Bell Tower** — The abandoned Solemnite chapel in the Old Quarter. Warded and trapped. Patrols have been seen entering and leaving at regular intervals.
3. **The Grand Theatre** — The Velvet Curtain playhouse in the Merchant Quarter. A performance is scheduled tonight. The ward stone is hidden somewhere inside, protected by something more subtle than muscle.

**The clock:** The party has roughly 6 hours of darkness — from full dark (about 8 bells) until dawn (about 2 bells morning). Travel between locations takes approximately 30-45 minutes through the night streets. Between targets, the travel time is enough for a short rest if the party walks rather than runs — each short rest taken costs 15 minutes from the clock, reducing the margin for error but potentially saving the party from fighting exhausted.

**Planning considerations the party might raise:**

- **Order of approach:** The sewer is the most physically demanding — going there last risks fighting exhausted. The theatre performance ends at midnight — if they arrive after, the crowd disperses and the social cover disappears. The bell tower patrols follow a pattern that doesn't change. DM should let players reason through this without forcing an order.
- **Splitting the party:** Possible but dangerous. Each location is designed for a full party. Splitting means faster completion but higher risk at each site.
- **The Ward Stone Shard:** It can be used once to suppress a ward stone's defences for 1 minute, making destruction easier. The party must choose which stone to use it on.

**DM note on pacing:** Each location should take roughly 30-60 minutes of real play time. Between locations, narrate the travel briefly — describe the empty streets, distant watch patrols, the creeping tension of the ticking clock. After each ward stone is destroyed, describe a faint tremor felt across the city and a distant sound like cracking glass. Sorn's forces will not react until all three are down or dawn arrives — the ward stones mask each other's status.

Connected to:

- A2: The Flooded Sewer, beneath the Tannery District.
- A3: The Bell Tower, in the Old Quarter.
- A4: The Grand Theatre, in the Merchant Quarter.

---

## A2. The Flooded Sewer

A brick-vaulted tunnel beneath the Tannery District, originally part of the city's storm drainage. The passage slopes downward for several hundred feet before opening into a wide, partially collapsed chamber where three drainage channels converge. The ward stone sits on a raised stone platform at the centre of the chamber — the only surface above the waterline.

> The stench hits you before the water does. The tunnel descends into black, stagnant water that rises to your knees, then your waists, as the passage levels out. Your light catches the ceiling — green slime and mineral deposits crusting the ancient brickwork. Ahead, the tunnel opens into a vaulted chamber, and you can see a faint violet glow pulsing from something at its centre. Then you hear the breathing — deep, wet, rasping breaths echoing off the stone. Something very large is standing in the water between you and the light.

**The chamber:** Roughly 40 feet across, circular, with a domed ceiling 20 feet overhead. Three tunnels feed into it — the party enters from the north. The water is waist-deep throughout (difficult terrain for Medium creatures), except for the central platform (10 feet across, 2 feet above the waterline) where the ward stone sits. The ward stone is a rough-cut amethyst the size of a fist, embedded in the platform and glowing with a steady violet pulse.

**Environmental hazards:**

- **Difficult terrain:** The waist-deep water makes the entire chamber difficult terrain except the central platform. Swimming is required for Small creatures.
- **Toxic fumes:** Gases seep from cracks in the sewer walls. At the start of each creature's turn, it must make a DC 12 Constitution saving throw or be poisoned until the start of its next turn. Creatures that don't need to breathe or that have sealed their nose and mouth (a cloth soaked in clean water — DC 10 Survival to prepare in advance) have advantage on this save.
- **Limited visibility:** The only light is the ward stone's violet glow, which provides dim light in a 20-foot radius. Beyond that, darkness.

**The guardian:** A Hezrou demon [HEZROU1] stands in the water between the entrance tunnel and the central platform. It was bound here by Sorn's warlocks to guard the stone and has been trapped in this chamber for weeks, growing increasingly agitated. It attacks anything that enters the chamber.

**Combat notes:**

- The Hezrou's Stench ability stacks unpleasantly with the toxic fumes — creatures within 10 feet of the Hezrou have disadvantage on the Constitution save against the fumes.
- The Hezrou uses the water to its advantage, attempting to grapple and drag creatures under the surface. A grappled creature dragged underwater begins suffocating.
- The central platform is the only solid ground. If a character reaches it, the Hezrou attempts to knock them off with its attacks.
- The Hezrou does not pursue creatures that flee the chamber. Its binding prevents it from leaving. If the party retreats and re-enters, it is waiting in the same position.

**Destroying the ward stone:** The amethyst has AC 17, 30 HP, and is immune to poison and psychic damage. It can also be destroyed with *Dispel Magic* (DC 15) or by using the Ward Stone Shard (automatic success, 1 use). When destroyed, it shatters with a flash of violet light, and the Hezrou's binding breaks — the demon immediately teleports away, returning to the Abyss. If the Hezrou is killed before the stone is destroyed, the stone can be shattered at leisure.

**Tactical note:** A clever party might try to reach the platform and destroy the stone without killing the Hezrou — if they can survive long enough. Breaking the stone banishes the demon instantly, ending the fight. This rewards creative tactics over brute force, even in a brute-force encounter.

Connected to:

- A1: Back to the surface and the night streets.

```yaml
npcs:
  - id: HEZROU1
    name: Sewer Guardian
    type: Hezrou
    description: A massive, toad-like demon standing chest-deep in the filthy water. Its mottled grey-green hide is covered in oozing sores, and its wide mouth is lined with jagged teeth. It reeks of decay and bile — a stench that mingles with the sewer gases into something nearly unbearable. It has been bound here for weeks and is furious.
    ac: 16
    maxHp: 136
    speed: 30
    skills:
      - athletics
    notes: Immune to poison. Resistant to cold, fire, lightning; bludgeoning/piercing/slashing from nonmagical attacks. Stench aura 10 ft (DC 14 Con or poisoned until start of next turn).
```

---

## A3. The Bell Tower

The abandoned Chapel of the Solemnite Order in the Old Quarter — a narrow stone building with a square bell tower rising sixty feet above the surrounding rooftops. The chapel has been sealed for years, its windows boarded, its doors chained. Sorn's forces have repurposed it as a ward stone site, installing mechanical traps and alarm glyphs throughout the interior and posting two chain devil sentries on a rotating patrol.

> The chapel is dark and silent, its peaked roof sagging in the middle. The bell tower rises above it like a broken finger against the night sky. No light shows from the windows, but as you watch from the alley across the street, you see a brief orange glow pass behind the boards on the third floor — something moving inside, carrying a light source.

**DM note:** This location is designed as a stealth and puzzle challenge. The two chain devils are CR 8 each — fighting both simultaneously at this stage of the night would be a Deadly encounter (7,800 x 1.5 = 11,700 adjusted XP) and would drain resources the party needs for the remaining locations. **The devils CAN be avoided entirely.** The DM should make this clear through environmental storytelling — let the party observe the patrol pattern, notice the narrow timing windows, and understand that combat here is an option but a costly one. The ward stone is at the top of the tower. The goal is to reach it and destroy it, not to clear the building.

**Exterior:** The chapel has three potential entry points:

- **Front door:** Heavy oak, chained shut. DC 15 Strength to break or DC 14 Thieves' Tools to pick. Loud either way — the chain devils investigate within 2 rounds.
- **Side window (ground floor):** Boarded but rotten. DC 12 Strength to pry open quietly, or DC 10 with a crowbar. No alarm glyph on this window — an oversight.
- **Roof access:** A DC 14 Athletics check to climb the exterior stone wall to the chapel roof, then entry through a damaged section of roofing. This bypasses the ground floor entirely.

**Interior — Ground Floor (Chapel Nave):**

A dusty, abandoned chapel. Pews have been pushed against the walls. Two alarm glyphs are inscribed on the floor — one at the front door, one at the base of the stairwell leading up. A DC 13 Perception check spots each glyph (they glow faintly in the dark). A DC 14 Arcana check identifies them as *Glyph of Warding* set to cast *Alarm* (audible, 300-foot range). They can be dispelled (*Dispel Magic* DC 13) or carefully stepped over (DC 13 Acrobatics).

**Interior — Second Floor (Living Quarters):**

A narrow corridor with two small rooms — formerly monks' cells, now containing bedrolls and provisions for the chain devil sentries. A mechanical pressure plate [TRAP1] is set in the corridor floor (DC 14 Investigation to spot, DC 13 Thieves' Tools to disarm). If triggered, a crossbow bolt fires from a concealed slot (attack +8, 1d10+4 piercing damage) and the noise alerts the chain devils.

**Interior — Third Floor (Bell Mechanism):**

The bell mechanism room. The original bronze bell has been removed — its frame now holds a second ward stone, a smoky quartz sphere the size of a grapefruit, suspended in a cradle of iron chains. The chains are connected to a mechanical alarm — pulling the stone from the cradle without disarming the mechanism (DC 15 Thieves' Tools) rings the bell frame like a gong, audible across the Old Quarter.

**The chain devil patrol:** Two chain devils [CHAIN_DEVIL1] [CHAIN_DEVIL2] patrol the building on a predictable route — ground floor to second floor to third floor and back, taking approximately 5 minutes per circuit. They are never on the same floor at the same time. A patient party that observes for 10 minutes can determine the pattern. The timing windows are tight but sufficient — a character has roughly 2 minutes on each floor before a devil arrives.

**If combat occurs:** The chain devils fight together if possible, using their chains to grapple and drag characters down stairwells. The narrow interior spaces (5-foot-wide corridors, 10-foot-square rooms) heavily favour the devils' reach and grapple tactics. This fight is winnable but expensive in resources.

**Destroying the ward stone:** The smoky quartz has AC 15, 25 HP, and is immune to poison and psychic damage. *Dispel Magic* (DC 15) or the Ward Stone Shard works. If removed from the cradle without disarming the mechanism, the stone can still be destroyed — but the alarm means the party has about 3 minutes before a Citadel response patrol arrives in the Old Quarter.

**Hidden find:** At the top of the bell tower, above the mechanism room, a narrow ladder leads to the open belfry. A DC 14 Perception check while up there reveals that the bell tower has a direct sightline to the Council Citadel's eastern wall — and scratched into the stone railing are notes in Infernal script. A DC 12 Intelligence (Arcana or Religion) check translates them: they are observations of the Citadel's guard rotations, blind spots, and structural weaknesses. **This grants the party advantage on their first tactical decision during the siege in Quest 18** — whether that's choosing an approach route, timing an assault, or identifying a weak point in the defences.

Connected to:

- A1: Back to the night streets.

```yaml
npcs:
  - id: CHAIN_DEVIL1
    name: Sentry (Chain Devil)
    type: Chain Devil
    description: A gaunt, humanoid figure wrapped in animated chains that writhe and lash of their own accord. Its face is a mask of cold malice, and its eyes burn with dim orange light. It moves through the chapel with mechanical precision, following a patrol route it has walked hundreds of times.
    ac: 16
    maxHp: 85
    speed: 30
    skills:
      - perception
    notes: Immune to fire, poison. Resistant to bludgeoning/piercing/slashing from nonmagical attacks. Chain attack reach 10 ft, can grapple and restrain.
  - id: CHAIN_DEVIL2
    name: Sentry (Chain Devil)
    type: Chain Devil
    description: Identical to its partner — a chain-wrapped devil with burning eyes and a methodical patrol pattern. The two never occupy the same floor simultaneously, maintaining overlapping coverage of the building.
    ac: 16
    maxHp: 85
    speed: 30
    skills:
      - perception
    notes: Immune to fire, poison. Resistant to bludgeoning/piercing/slashing from nonmagical attacks. Chain attack reach 10 ft, can grapple and restrain.
```

---

## A4. The Grand Theatre

The Velvet Curtain — Ashenmere's finest playhouse, a three-storey timber-and-stone building in the Merchant Quarter with a painted facade and gilded window frames. Tonight, a sold-out performance of *The Tyrant's Crown* (a historical drama about a fictional king — or so the audience believes) is in full swing. The theatre is packed with Ashenmere's wealthy elite. The ward stone is hidden somewhere on the stage, and its guardian is already in the audience.

> The Velvet Curtain blazes with candlelight, its doors thrown open to the warm evening air. Well-dressed merchants, minor nobles, and guild officers stream inside, laughing and exchanging gossip. A playbill posted by the entrance announces tonight's performance: *The Tyrant's Crown — A Tragedy in Five Acts.* From inside, you hear the murmur of a settling audience and the first notes of a string quartet tuning up. Nothing about this place looks dangerous. That should worry you.

**DM note:** This encounter is a social and infiltration challenge. The combat threat here is trivial — the Succubus is CR 4 and would be destroyed in a round by a level 9 party. The real danger is the situation: a theatre full of charmed nobles who will panic if the charm breaks suddenly, a ward stone that must be extracted without causing a scene, and a demon who is playing a social game, not a combat one. Violence is the easy answer and the worst outcome.

**The theatre layout:**

- **Lobby:** Marble-tiled entrance hall with a coat check, a refreshment table, and two ushers [USHER1] [USHER2] checking invitations. The party needs to get inside — by invitation, deception, bribery, or stealth.
- **Auditorium:** A semicircular hall with tiered seating for 200. The stage is at the far end, elevated 4 feet, with heavy velvet curtains and painted backdrops. The audience is seated and the performance is beginning.
- **Stage:** Currently occupied by the actors performing the play. The ward stone — a polished obsidian orb — is disguised as a prop crown worn by the actor playing the Tyrant King. It sits on a velvet cushion on a prop throne at centre stage, used in Act III and Act V.
- **Backstage:** Dressing rooms, a prop storage area, and a stage door leading to the alley behind the theatre.

**Madame Voss:** The Succubus [SUCCUBUS1] is attending the performance in the guise of Madame Lysara Voss — a striking, dark-haired woman in a crimson gown, seated in a private box overlooking the stage. She has charmed six prominent nobles [NOBLE1-6] in the audience, who sit in the first two rows and respond to her subtle gestures and whispered suggestions. The charmed nobles believe Madame Voss is a visiting dignitary from a southern city and are utterly devoted to her comfort and wishes.

**The charm situation:** The six charmed nobles are under the Succubus's Charm ability (not the *Charm Person* spell — this is a fiend ability). If the Succubus is killed or forcibly revealed, all charms break simultaneously. The nobles will be confused, frightened, and angry — several will scream, the audience will panic, and the resulting stampede in a crowded theatre could injure or kill civilians. Additionally, the commotion alerts Citadel patrols. **The party should understand this risk before acting.**

**Getting inside:**

- **Invitation:** A DC 14 Deception check to bluff past the ushers with a fabricated name. Advantage if the party is well-dressed or accompanied by a known noble.
- **Bribery:** The ushers accept 10 gp each without question. They are underpaid.
- **Backstage:** The stage door in the alley is unlocked during performances. A DC 12 Stealth check to slip in without being noticed by stagehands.
- **Balcony:** A DC 13 Athletics check to climb to the second-floor balcony and enter through an open window.

**Identifying the ward stone:** The obsidian orb on stage radiates faint magic detectable by *Detect Magic* or similar abilities. A DC 13 Arcana check while observing the stage identifies it as a ward stone disguised as a theatrical prop. The Ward Stone Shard grows warm when pointed toward the stage, confirming the location.

**Identifying the Succubus:** Madame Voss does not register as a fiend to casual observation. *Detect Magic* reveals enchantment magic around her and the charmed nobles. *Detect Evil and Good* identifies her as a fiend. A DC 16 Insight check notices that the charmed nobles' behaviour is unnaturally synchronised — they laugh at the same moments, shift in their seats at the same time, and their eyes occasionally flicker toward the private box.

**Approaches to the ward stone:**

- **Swap the prop:** Replace the obsidian orb with a similar-looking object during a scene change. DC 14 Sleight of Hand while backstage, or DC 16 during a performance scene (actors and audience are watching the stage). If successful, the stone is obtained without anyone noticing.
- **Wait for intermission:** The play has an intermission between Acts III and IV. Props are moved backstage. A character positioned backstage can grab the orb during the transition — DC 12 Sleight of Hand, as the stagehands are busy and distracted.
- **Magical retrieval:** *Mage Hand*, *Telekinesis*, or similar spells can lift the orb from its cushion during a scene where it is unattended on the throne. The audience is focused on the actors downstage. DC 13 Stealth check (for the casting) to avoid drawing attention.

**Dealing with Madame Voss:**

- **Avoid her entirely:** If the party extracts the ward stone without alerting the Succubus, they can leave without confrontation. The Succubus's orders are to guard the stone — once it's gone, she has no reason to remain and will quietly slip away.
- **Social confrontation:** A character who identifies the Succubus can approach her in the private box during intermission. She is intelligent and pragmatic. If the party makes it clear they know what she is and that the other ward stones are already falling, she considers her position. A DC 15 Persuasion check convinces her to release the charms willingly and leave Ashenmere — she is a contracted agent, not a zealot, and she has no interest in dying for Sorn's cause. On a failure, she smiles and says she'll "think about it" — then attempts to slip away with the stone.
- **Combat:** If it comes to a fight, the Succubus is easily defeated (CR 4 against a level 9 party). But killing her in the theatre breaks all charms simultaneously. Luring her outside (DC 14 Deception or Persuasion to suggest a private conversation in the alley) allows combat without the civilian panic.

**If the charms break publicly:** Pandemonium. The six nobles are disoriented and frightened. The audience panics. A stampede toward the exits causes 2d6 bludgeoning damage to anyone in the crowd (DC 13 Dexterity save for half). More importantly, the noise and chaos alert a Citadel patrol — the party has 5 minutes to extract the ward stone and leave before soldiers arrive.

**The freed nobles:** If the charms are broken without panic (either through the Succubus releasing them willingly or through careful manipulation), the nobles are confused but grateful once they understand what happened. Among them is **Lord Harlan Belin** [LORD_BELIN] — see "Side Opportunity" below.

Connected to:

- A1: Back to the night streets.

```yaml
npcs:
  - id: SUCCUBUS1
    name: Madame Lysara Voss
    type: Succubus
    description: In her disguise, she appears as a strikingly beautiful human woman in her thirties with dark hair piled in an elaborate coiffure, wearing a crimson silk gown and a jewelled mask on a stick. She carries herself with effortless authority and speaks with a faint southern accent. Her smile never quite reaches her eyes. She wears a Circlet of Charm beneath her hair and a jewelled mask worth 200 gp.
    ac: 15
    maxHp: 66
    speed: 30
    skills:
      - deception
      - insight
      - perception
      - persuasion
      - stealth
    notes: Immune to fire. Resistant to cold, lightning, poison; bludgeoning/piercing/slashing from nonmagical attacks. Shapechanger. Telepathic Bond. Charm (not a spell — fiend ability, DC 15 Wis save). Draining Kiss.
  - id: USHER1
    type: Commoner
    description: A young man in a threadbare but clean uniform, trying to look more important than he is.
  - id: USHER2
    type: Commoner
    description: An older woman with a severe bun and reading spectacles, checking names against a guest list.
  - id: NOBLE1
    type: Noble
    description: Charmed noble — a portly merchant in a velvet doublet, laughing too loudly at nothing.
  - id: NOBLE2
    type: Noble
    description: Charmed noble — a thin woman in pearls, staring at the private box with glassy adoration.
  - id: NOBLE3
    type: Noble
    description: Charmed noble — a young man in military dress, sitting unnaturally still.
  - id: NOBLE4
    type: Noble
    description: Charmed noble — an elderly guild officer, nodding along to unheard instructions.
  - id: NOBLE5
    type: Noble
    description: Charmed noble — a sharp-eyed woman who would normally never be this docile.
  - id: NOBLE6
    type: Noble
    description: Charmed noble — a broad-shouldered man with a lord's signet ring, smiling vacantly.
  - id: LORD_BELIN
    name: Lord Harlan Belin
    type: Noble
    description: A broad-shouldered man in his fifties with a soldier's bearing beneath his noble finery. He wears a signet ring bearing the Belin family crest — a tower and crossed swords. He is one of the charmed nobles (NOBLE6). Once freed, his confusion quickly gives way to cold fury. He is a former military commander and a man of considerable resources.
    abilityScores:
      str: 14
      dex: 11
      con: 13
      int: 12
      wis: 14
      cha: 15
    ac: 15
    maxHp: 45
    speed: 30
    skills:
      - history
      - insight
      - persuasion
```

---

## Dawn

When the third ward stone is destroyed, the effect is immediate and unmistakable.

> The ground shudders. A sound like shattering crystal rolls across the city — not from any one direction, but from everywhere at once, as if the air itself is breaking. For a moment, a web of violet light flickers across the sky above the Council Citadel, tracing the outline of a dome that was never visible before. Then it splinters, fractures, and dissolves into nothing. The ward is down. Across the city, dogs begin to howl. Lights appear in windows. Somewhere in the direction of the Citadel, an alarm bell begins to ring — frantic, urgent, too late. The eastern sky is turning pale grey. Dawn is coming, and with it, the siege.

The party has until dawn to rest, resupply, and prepare. The next quest begins at first light.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 3 Infernal Energy Shards | Quest reward (ward stone destruction) | Each casts *Dispel Magic* at 5th level, one use each |
| Demon Ichor Vial | Hezrou (loot) | Apply to weapon: +2d6 acid damage on next hit, single use |
| 100 gp in corroded coin | Hezrou (loot) | Ancient coinage from the sewer |
| 60 gp | Chain Devil 1 (if fought) | Loot |
| 60 gp | Chain Devil 2 (if fought) | Loot |
| Devil's Chain | Chain Devils (if fought) | 15 ft chain weapon, 1d8 bludgeoning, reach |
| Circlet of Charm | Succubus (loot) | 3 charges of *Charm Person* at 3rd level, regains 1d3 charges at dawn |
| Jewelled mask | Succubus (loot) | Worth 200 gp |
| Citadel weak points | Bell Tower belfry (DC 14 Perception) | Hidden find; advantage on first tactical decision in Q18 |
| +1 Longbow | Lord Belin's armoury (side opportunity) | Reward for freeing nobles |
| Shield of Missile Attraction | Lord Belin's armoury (side opportunity) | CURSED — let party attempt to identify (DC 15 Arcana reveals curse) |
| 500 gp | Lord Belin (side opportunity) | War chest contribution |
| 12 soldiers pledged to siege | Lord Belin (side opportunity) | Military support for Q18 |

## Side Opportunity: Lord Belin's Gratitude

If the charmed nobles are freed without panic, Lord Belin seeks out the party before dawn. He is a former military commander who retired from active service after the last border war, and he is furious at having been manipulated by a fiend.

> "I have been a soldier, a commander, and a lord of this city for thirty years. And I sat in that theatre like a trained dog, smiling at a demon's whims." He grips the edge of the table until his knuckles whiten. "Tell me what you need. I have an armoury, I have coin, and I have men who still answer when I call."

Lord Belin opens his personal armoury to the party and offers the following:

- **+1 Longbow** — a fine composite bow with silver inlay, crafted for the border wars.
- **Shield of Missile Attraction** — a polished steel shield engraved with a bullseye motif. It is **cursed**. A DC 15 Arcana check (or *Identify* spell) reveals the curse — the shield imposes disadvantage on saving throws against ranged attacks and causes ranged attack rolls against the wielder to have advantage. If the party does not identify the curse, Lord Belin is unaware of it — he acquired it in a lot of war salvage and never used it. The DM should give the party a fair chance to discover the curse before anyone attunes.
- **500 gp** — drawn from his personal war chest, no questions asked.
- **12 soldiers** — Lord Belin pledges a dozen veterans from his household guard to join the siege force in Quest 18. They are well-equipped and disciplined, and Belin will command them personally.

## Quest Connections

- **From Quest 12:** The meditation vision at the Solemnite shrine showed the ward stone locations as points of violet light on a mental map of the city — this is how the party first learned of their existence.
- **From Quest 13:** The traitor's confession included detailed intelligence on the ward stone network, confirming the locations and revealing that the stones must all fall within a single night to prevent the renewal cycle.
- **From Quest 16:** Captured veterans revealed the specific guardians at each location. The recovered Ward Stone Shard can be used to suppress one ward stone's defences.
- **To Quest 18:** With the wards down, the Council Citadel is exposed. The siege begins at dawn. If the party found the Citadel weak points in the bell tower, they have advantage on their first tactical decision. If Lord Belin was freed, his soldiers join the siege force.
