# Quest 7: The Disappeared

**Level:** 5 | **Type:** Story | **Style:** Stealth dungeon crawl

Maren Loomwright's resistance contacts are vanishing — snatched from safehouses and dead drops across the city. When her most trusted informant goes silent, Maren personally accompanies the party into Ashenmere's undercity — a maze of old foundations, collapsed basements, and forgotten crypts beneath the streets — to find a secret prison run by Sorn's loyalists. The goal is to free the prisoners, not clear every room. Maren provides invaluable local knowledge but is no fighter, and keeping her alive adds constant tension to every encounter.

---

The safehouse is a cramped room above a chandler's shop in the Tanners' Quarter. Maren Loomwright paces behind a table covered in hand-drawn maps and scraps of coded notes. Her face is drawn, and she hasn't slept.

> "Six people in two weeks. Six. Dellan was supposed to check in yesterday — he's never late. Not once in three years." She smooths a map flat with both hands. "I found something. A grocer on Cinder Lane saw city watch dragging a hooded figure through a cellar door at midnight. A cellar that's supposed to be bricked up." She looks up at you. "I know the undercity. I grew up crawling through those tunnels. But I can't do this alone."

## A1. The Undercity Entrance

A narrow alley off Cinder Lane, hemmed in by the windowless backs of tenement buildings. Rubbish and broken crates are piled against the walls. At the far end, a set of stone steps descends to a heavy iron door set into the foundations — old construction, predating the buildings above by centuries. The door has been recently oiled. Fresh bootprints mark the dust on the steps.

> The alley stinks of rotting vegetables and damp stone. At the far end, half-hidden behind a stack of mouldering crates, stone steps lead down into darkness. The iron door at the bottom is ancient — but the hinges gleam with fresh oil, and the lock is new.

Maren [MAREN] leads the party here. She kneels beside the steps and runs her fingers along the wall.

> "These foundations are pre-Ashenmere. The old city was built on top of something older — temples, crypts, who knows. Half the undercity is collapsed, but some of it connects. I used to play down here as a child. It's different now."

**The door:**

- **DC 14 Dexterity (Thieves' Tools):** Pick the new lock. On failure, the lock jams — it can be forced with a DC 16 Strength check, but the noise alerts the guards in A3 (they move to investigate in 3 rounds).
- **DC 12 Intelligence (Investigation):** The lock is city watch standard issue — the same model used on watch station armouries. This confirms official involvement.
- **Maren's knowledge:** If asked, Maren knows an alternate route — a collapsed drainage culvert 50 feet east that connects to the same tunnel network, bypassing the door entirely. This route requires squeezing through rubble (DC 10 Acrobatics) and adds 10 minutes, but avoids the lock and any noise.

**If the party enters quietly:** They descend into the undercity tunnels without alerting anyone. Proceed to A2.

**If the party makes noise (failed Strength check, loud entry):** The guards in A3 are on alert when the party arrives. They have set a simple ambush — one behind a pillar, one behind an overturned cart.

Connected to:

- A2: The tunnels beyond the door lead deeper into the undercity.
- The Tanners' Quarter (Quest 3): Cinder Lane is two streets from Warehouse 14.

```yaml
npcs:
  - id: MAREN
    name: Maren Loomwright
    type: Human Commoner
    description: A wiry woman in her forties with sharp eyes, calloused hands, and ink-stained fingers. She wears a dark wool cloak over practical clothing and keeps a small knife at her belt — more tool than weapon. She is the quiet heart of Ashenmere's growing resistance against Sorn's council, running a network of informants from the back rooms of guild halls and taverns. She is not a fighter. In combat she hides, runs, or tries to talk her way out. Her value is knowledge — she knows every tunnel, shortcut, and bolt-hole in the undercity.
    abilityScores:
      str: 8
      dex: 12
      con: 10
      int: 15
      wis: 14
      cha: 13
    ac: 11
    maxHp: 10
    speed: 30
    skills:
      - history
      - insight
      - stealth
      - persuasion
```

## A2. The Undercity Tunnels

A network of low-ceilinged passages carved from dark stone, reinforced in places with timber beams that have long since rotted. The air is cold and damp. Old foundations jut from the walls — the bones of buildings that stood here centuries ago. The tunnel floor is uneven, littered with broken masonry and pools of standing water.

> The tunnel stretches ahead, barely five feet wide. Your torchlight catches the edges of old doorways bricked up long ago, and the ceiling is low enough that anyone over six feet has to duck. Water drips somewhere ahead. The air smells of wet stone and something faintly chemical — like lamp oil left too long in a closed room.

Maren moves confidently through the tunnels, pointing out landmarks — a carved lintel here, a collapsed staircase there.

> "The undercity runs under most of the Old Quarter. Parts of it flood in spring. Parts of it have... things living in them. Stay close and stay quiet."

**Navigation:** Maren knows the route. Without her, navigating the undercity requires a DC 15 Wisdom (Survival) check every 30 minutes or the party becomes lost, adding 1d4 x 10 minutes to travel time.

**Trapped corridor (halfway point):**

The tunnel narrows and passes through what was once a stone archway. Maren stops and holds up a hand.

> "Wait. This wasn't here before." She points to a thin wire stretched across the passage at shin height, almost invisible in the dim light.

- **DC 14 Wisdom (Perception):** Notice the tripwire before Maren points it out. Characters with a passive Perception of 14 or higher spot it automatically.
- **The trap:** The tripwire triggers a crossbow bolt from a concealed slot in the wall. +6 to hit, 1d10+2 piercing damage. A DC 13 Dexterity (Thieves' Tools) check disarms it. On failure, it fires at the character attempting to disarm.
- **DC 12 Intelligence (Investigation) after finding the tripwire:** A second trap — a pressure plate 10 feet past the wire triggers a falling stone block from the ceiling. DC 14 Dexterity saving throw or take 2d10 bludgeoning damage. The pressure plate can be stepped over once identified.

**Maren's warning:** "They've trapped the approaches. That means they're guarding something they don't want found."

**Stealth through the tunnels:** If the party is moving quietly (group Stealth check, DC 12), they can reach A3 undetected. Maren rolls her own Stealth (+2) separately — if she fails but the party succeeds, she knocks a loose stone and the party has 1 round to react before the guards in A3 hear it.

Connected to:

- A1: Back to the undercity entrance.
- A3: The guard post ahead, where the tunnels widen.

## A3. The Guard Post

The tunnels open into a wider chamber — an old basement or cellar, roughly 30 feet across, with a vaulted stone ceiling. Timber supports have been added recently. A makeshift guard post has been set up here: a wooden table with a lantern, two stools, a rack of weapons, and a barrel of water. Two city watch guards [GUARD1] [GUARD2] are stationed here.

> The tunnel opens into a low-ceilinged chamber lit by a single hooded lantern. Two figures in city watch tabards sit at a rough table, playing cards. Their halberds lean against the wall behind them, within arm's reach. A heavy wooden door on the far wall is barred from this side.

**If the party is undetected:**

- The guards are relaxed and inattentive. Their passive Perception is 11.
- A DC 12 group Stealth check allows the party to approach within 10 feet without being noticed.
- **Surprise options:** The party can ambush the guards, sneak past them through a side passage (DC 14 Stealth, requires Maren's guidance — she knows about a crawlspace behind the eastern wall), or try to bluff their way through.

**If the party was detected (noise from A1 or A2):**

- The guards are alert, halberds in hand, watching the tunnel entrance. No surprise possible.
- One guard calls out: "Who's there? Identify yourself. This area is restricted by order of the city watch."

**Social approaches:**

- **DC 14 Charisma (Deception):** "We're the relief watch" or similar bluff. The guards are suspicious — they weren't told about a shift change — but a good lie with supporting detail (correct watch terminology, mention of a commander's name) works.
- **DC 16 Charisma (Intimidation):** Threaten the guards into standing down. They are loyal to their commander but not fanatics — if clearly outmatched, they surrender.
- **DC 12 Charisma (Persuasion) if the party has the writ of authority from the knight commander (found later, only on replay):** The guards defer immediately.

**Combat:** The guards fight defensively, calling for reinforcements. After 2 rounds of combat, one guard attempts to flee deeper into the tunnels to warn A5. If both guards are defeated in 2 rounds or fewer, no alarm is raised.

**Maren's behaviour during combat:** She hides behind the nearest cover and stays down. If a guard spots her, she tries to talk: "You know me, Harlen. You know this is wrong." This has no mechanical effect but may give the DM a roleplay moment — the guard hesitates for half a round before his training overrides his conscience.

**Loot:** The weapon rack holds 2 halberds, 2 shortswords, and a heavy crossbow with 20 bolts. The table has a duty roster showing guard rotations — 4-hour shifts, 6 guards total, suggesting 4 more guards deeper in.

Connected to:

- A2: The tunnels behind.
- A4: The barred door leads to the prison corridor.
- Side passage: A crawlspace behind the eastern wall (DC 14 Stealth) bypasses this room entirely and connects to A4.

```yaml
npcs:
  - id: GUARD1
    name: Harlen
    type: Guard
    description: A middle-aged city watch guard with a weathered face and a bad knee. He's been on the watch for twenty years and knows this duty is wrong, but he has a family and the commander made it clear what happens to guards who ask questions.
  - id: GUARD2
    type: Guard
    description: A younger guard with a nervous habit of cracking his knuckles. He's new to this posting and clearly uncomfortable underground.
```

## A4. The Prison Corridor

A long, straight passage lined with heavy doors on both sides — six cells in total, three on each side. The doors are reinforced timber with iron bands and small barred windows at eye height. The corridor is lit by a single torch in a wall sconce at the far end. The air is stale and smells of unwashed bodies and damp straw.

> The corridor stretches thirty feet ahead, dimly lit by a guttering torch at the far end. Iron-banded doors line both walls — six of them, shut tight. From behind one, you hear a faint cough. From another, the sound of someone quietly weeping.

**The cells:**

- **Cell 1 (left):** Empty. The straw bedding is fresh — someone was here recently and has been moved.
- **Cell 2 (left):** Dellan [DELLAN], Maren's missing informant. A gaunt man in his thirties, badly bruised, one eye swollen shut. He is conscious but weak. When he sees Maren through the bars, he whispers: "Maren — gods, you came. They took Seriss upstairs two hours ago. I heard her screaming."
- **Cell 3 (left):** A halfling named Twig [TWIG], a locksmith who was arrested for "sedition" — she refused to make copies of guild hall keys for the watch commander. She is bruised but in better shape than the others. She is alert, angry, and immediately useful.
- **Cell 4 (right):** Two prisoners — a council aide named Pettar [PETTAR] and a dockworker. Both are malnourished and terrified. Pettar has information (see "Plot Hooks" below).
- **Cell 5 (right):** Empty. Blood on the floor, recently cleaned.
- **Cell 6 (right):** A prisoner who has been here the longest — a woman named Seriss [SERISS], recently returned from interrogation. She is semi-conscious, mumbling incoherently. Among her mutterings: "the tiger that walks like a man... it smiled at me... it knew my name..."

**Opening the cells:**

- **DC 13 Dexterity (Thieves' Tools):** Pick the locks. Twig (Cell 3) can pick locks from inside if given tools — she has improvised a lockpick from a bent nail but needs a tension wrench. Any piece of thin metal will do.
- **DC 18 Strength:** Force a door open. This is loud and alerts guards in A5 if they haven't already been dealt with.
- **Keys:** The guards in A3 have keys to Cells 1-4. The warden in A6 has keys to all cells.

**Maren's reaction:** When she sees Dellan, she goes to him immediately, holding his hand through the bars. This is a vulnerable moment — she is distracted and not watching for danger. If the party hasn't cleared A5, this is when guards from the next room might hear movement and investigate.

> Maren presses her face to the bars. "Dellan. Dellan, I'm here. We're getting you out." She turns to you with fury in her eyes. "All of them. We're getting all of them out."

**Two guards [GUARD3] [GUARD4] patrol this corridor**, checking cells every 20 minutes. If the party arrived stealthily, they encounter the patrol on a d6 roll of 1-2 (check once when entering the corridor). The guards walk in from A5, lantern in hand, and can be surprised if the party hears them coming (DC 12 Perception to hear boots on stone 30 seconds before arrival).

Connected to:

- A3: Back to the guard post.
- A5: The corridor continues to the knight commander's station.
- A6: The warden's office is beyond A5.

```yaml
npcs:
  - id: DELLAN
    name: Dellan Marsh
    type: Human Commoner
    description: A gaunt man in his thirties with hollow cheeks and one eye swollen shut. He was Maren's most reliable informant — a clerk in the Harbourmaster's office who passed shipping records to the resistance. He has been beaten repeatedly but hasn't broken. He can walk but not run.
  - id: TWIG
    name: Twig
    type: Halfling Commoner
    description: A wiry halfling woman with cropped brown hair, quick hands, and an expression of concentrated fury. She is a locksmith by trade, arrested for refusing to copy guild hall keys for the city watch. She is resourceful, brave, and immediately willing to help. She carries no weapons but can improvise — give her thieves' tools and she's worth more than a sword.
    abilityScores:
      str: 8
      dex: 16
      con: 12
      int: 14
      wis: 11
      cha: 10
    ac: 13
    maxHp: 9
    speed: 25
    skills:
      - sleight of hand
      - stealth
      - thieves' tools (expertise)
  - id: PETTAR
    name: Pettar Vane
    type: Human Commoner
    description: A pale, thin man in a torn clerk's coat. He was an aide in the Council Citadel until he overheard something he shouldn't have. He is terrified and grateful in equal measure. He speaks in a rapid whisper, eyes darting to every shadow.
  - id: SERISS
    name: Seriss
    type: Human Commoner
    description: A woman in her fifties with grey-streaked hair and a distant, glassy stare. She has been imprisoned the longest and interrogated repeatedly. She drifts in and out of lucidity, muttering fragments that don't always make sense — but some of what she says is horrifyingly accurate.
  - id: GUARD3
    type: Guard
    description: A city watch guard on corridor patrol. Carries a lantern and shortsword.
  - id: GUARD4
    type: Guard
    description: A city watch guard on corridor patrol. Carries a lantern and halberd.
```

## A5. The Knight Commander's Station

A larger chamber at the end of the prison corridor, furnished as a command post. A heavy oak desk dominates the room, covered in papers, a half-eaten meal, and a wine bottle. A weapon rack holds swords and crossbows. A brazier in the corner provides warmth and casts flickering shadows. The knight commander [COMMANDER] is here with two guards [GUARD5] [GUARD6].

> The corridor opens into a wider room lit by a brazier and two oil lamps. A heavyset man in polished chain mail sits behind a desk, reading a document by lamplight. A longsword with an unusually bright blade rests across the desk within easy reach. Two guards flank the far door, standing at attention.

**The knight commander — Captain Aldren Voss** — is a veteran soldier who has sold his loyalty to Sorn in exchange for power and coin. He is not stupid, not cruel for cruelty's sake, but utterly pragmatic. He views the prisoners as political necessities — tools to maintain order. He does not know about the intellect devourer in the warden.

**If the party is undetected:**

- A DC 14 group Stealth check allows the party to observe the room from the corridor without being noticed. The commander is absorbed in his paperwork.
- The party can attempt to bypass this room entirely — a narrow service passage on the left wall (DC 15 Perception to notice, or Maren points it out) leads directly to A6, bypassing the commander. It requires squeezing (DC 12 Acrobatics) and cannot be used while wearing heavy armour without removing it first.

**Social approaches:**

- **DC 16 Charisma (Deception):** Pose as agents sent by Sorn's network. The commander is suspicious but not expecting intruders — a convincing story about "new orders from above" might work. Mentioning Sorn by name adds advantage to the check if the party has learned his identity.
- **DC 18 Charisma (Intimidation):** The commander is not easily frightened, but if the party demonstrates overwhelming force or mentions specific details about his operation that they shouldn't know, he wavers.

**Combat:** The commander fights intelligently. He flips the desk for half-cover, draws his +1 longsword, and orders one guard to hold the door while the other flanks. If reduced to half HP, he attempts to flee through A6 to warn the warden. If both guards fall, he surrenders — he's a pragmatist, not a martyr.

**If the commander surrenders:** He provides information in exchange for his life:
- He confirms the prison was established on orders from "someone on the council" — he deals with intermediaries and has never met Sorn directly.
- He knows the warden has been "acting strange" for the past week — "talking to himself, forgetting things, staring at walls." He attributes this to stress but hasn't investigated.
- He has a writ of authority bearing Sorn's seal in his desk (see Loot).

**Loot:**

- +1 longsword (on the commander's person)
- Chain mail (on the commander's person)
- 50 gp in a lockbox in the desk (DC 12 Thieves' Tools or the commander's key)
- Writ of authority bearing Sorn's seal — a document authorising the "special holding facility" signed with a council seal. A DC 13 Charisma (Deception) check while carrying this writ allows the bearer to bluff past city watch patrols for the rest of the campaign.

Connected to:

- A4: The prison corridor behind.
- A6: The warden's office through the far door.
- Service passage: Narrow bypass to A6 (DC 15 Perception to find, DC 12 Acrobatics to squeeze through).

```yaml
npcs:
  - id: COMMANDER
    name: Captain Aldren Voss
    type: Knight
    description: A heavyset man in his fifties with a grey-streaked beard, cold eyes, and the bearing of a career soldier. He wears polished chain mail and keeps a +1 longsword within arm's reach at all times. He is efficient, pragmatic, and loyal to whoever pays best — currently Sorn, through intermediaries. He does not enjoy cruelty but does not lose sleep over it either.
    abilityScores:
      str: 16
      dex: 11
      con: 14
      int: 11
      wis: 13
      cha: 14
    ac: 18
    maxHp: 52
    speed: 30
    skills:
      - athletics
      - perception
      - intimidation
  - id: GUARD5
    type: Guard
    description: A stocky city watch guard with a shield bearing a defaced city crest — the old emblem partially painted over with a new design.
  - id: GUARD6
    type: Guard
    description: A tall, silent city watch guard who follows orders without question. Carries a heavy crossbow in addition to a shortsword.
```

## A6. The Warden's Office

A small, cluttered room that serves as both office and living quarters. A cot in the corner, a desk piled with prisoner records, a shelf of keys, and a locked iron strongbox beneath the desk. The warden [WARDEN] sits at the desk, staring at the wall.

> The room beyond is cramped and poorly lit. A figure sits at a desk with their back to the door, utterly still. They don't react to the door opening. The desk is covered in papers, and a ring of heavy iron keys hangs from a hook on the wall. The air in here is wrong — there's a faint smell like hot metal, and the single candle on the desk gutters as if in a draft, though there is no wind.

**The Warden — Joren Kelp** — appears to be a middle-aged man in watch uniform. He is, in fact, the host body for an intellect devourer [DEVOURER] that replaced his brain approximately one week ago. The real Joren is dead. The intellect devourer is using his body to oversee the prison and report to its masters — this is the first evidence of Sorn's alien allies.

**Initial behaviour:** The warden turns slowly when addressed. His movements are slightly wrong — a half-second delay, eyes that track too smoothly, speech that is grammatically correct but tonally flat.

> The figure turns. His face is slack, his eyes unfocused, and when he speaks his voice has a strange, even quality — like someone reciting from memory. "Visiting hours are over. You should not be here."

**Recognition checks:**

- **DC 13 Wisdom (Insight):** Something is deeply wrong with this person. His emotional responses don't match his words. He smiles when there's nothing to smile about.
- **DC 15 Intelligence (Arcana):** The faint metallic smell and the candle's behaviour suggest the presence of something psionic — an aberration of some kind.
- **DC 17 Intelligence (Arcana or Religion):** This matches descriptions of intellect devourer possession — a creature that consumes the brain and puppets the body. The creature is inside the warden's skull.

**Combat:** If threatened or exposed, the intellect devourer abandons subtlety. The warden's body attacks with a shortsword while the devourer uses *Devour Intellect* (DC 12 Intelligence saving throw or take 2d10 psychic damage; if this reduces Intelligence to 0, the creature can consume the brain — but since the target isn't incapacitated, this is mainly a damage threat in combat). After the body drops to 0 HP, the intellect devourer emerges — a brain-shaped creature on four legs — and attempts to flee through a drain grate in the floor.

**If the devourer is killed or captured:** Its presence confirms something far worse than political corruption is at work. Maren stares at the creature's body in horror: "That's not... that's not human. What is Sorn involved with?"

**If the devourer escapes:** It vanishes into the undercity. Its masters learn that the prison has been compromised — this increases the difficulty of future stealth missions but has no immediate mechanical effect.

**Loot:**

- Potion of Greater Healing (in the warden's desk)
- Keys to all prison cells (on the wall hook)

**The hidden drawer (DC 16 Intelligence [Investigation]):** The warden's desk has a concealed compartment beneath the bottom drawer, opened by pressing a hidden catch. Inside is a Bag of Holding containing:

- 180 gp in mixed coinage
- Wand of Magic Detection (7 charges, regains 1d6+1 charges at dawn)
- A brass compass that does not point north — its needle always points toward the Council Citadel. A DC 14 Arcana check reveals it is attuned to a specific magical signature — a ward stone of considerable power. (This compass becomes important in Quest 17, where the party must locate and disable Sorn's ward stones.)

Connected to:

- A5: The knight commander's station.
- Drain grate: Leads deeper into the undercity — too small for Medium creatures to follow without magic.

```yaml
npcs:
  - id: WARDEN
    name: Joren Kelp (host body)
    type: Guard
    description: A middle-aged man in a rumpled watch uniform, sitting unnaturally still. His eyes are glassy and his movements have a mechanical quality — slight delays, too-smooth head turns, expressions that arrive a beat too late. He is the host body for an intellect devourer that consumed his brain one week ago. The real Joren Kelp is dead.
    ac: 16
    maxHp: 22
  - id: DEVOURER
    name: Intellect Devourer
    type: Intellect Devourer
    description: A Tiny aberration that resembles a brain with four stumpy legs. It has been hiding inside the warden's skull, using his body to oversee the prison. It serves masters allied with Sorn — the first concrete evidence that Sorn's conspiracy extends beyond mortal politics. It is cunning and will attempt to flee rather than fight to the death.
    ac: 12
    maxHp: 21
    speed: 40
```

---

## After the Prison

With the prisoners freed and the warden dealt with, the party must escort Maren and the rescued prisoners back through the undercity to safety. Maren knows a different route out — longer but avoiding the guard post.

> Maren counts heads, her lips moving silently. "Six. Six out of... there were more. Some were moved before we got here." She looks at Dellan, who shakes his head slowly. "We got who we could, Maren." She nods once, hard. "Then let's go. Quickly."

**The escape:** The return journey is largely unarmed — the remaining guards (if any survived) are scattered and leaderless. A single DC 11 group Stealth check gets the group out safely. On a failure, the party encounters 2 fleeing guards who surrender immediately — they want no part of whatever killed their warden.

**Twig's offer:** Once safely above ground, Twig pulls the party aside.

> "I owe you my life. I mean that. I'm the best locksmith in Ashenmere — ask anyone." She produces a bent nail and flips it between her fingers like a coin trick. "You need a lock opened, a door bypassed, a mechanism understood — you come find me. I work out of a shop on Millhook Street, second floor, knock three times."

Twig offers:

- To pick any lock in the city for the party, no questions asked.
- To teach Thieves' Tools proficiency to one party member (requires 10 downtime days of training with Twig).
- A secret: she once did work inside the Council Citadel and knows a service entrance in the Citadel's eastern wall — a disused coal chute that connects to the lower kitchens. (This becomes important in Quest 18.)

**Pettar's confession:** The council aide, Pettar, approaches the party nervously once they reach the surface.

> "I need to tell someone. Before they took me, I was working late in the council archives. Councillor Sorn's office door was open — just a crack. I heard him speaking. The language was... it wasn't Common, it wasn't Elvish, it wasn't anything I've ever heard. It was harsh, guttural — like rocks grinding together." He swallows hard. "I looked it up later. I think it was Infernal."

A DC 12 Intelligence (Religion or Arcana) check confirms that the description matches Infernal — the language of devils.

**Seriss's mutterings:** The traumatised prisoner, Seriss, is helped along by two other prisoners. She drifts in and out of awareness. At one point she grabs a party member's arm and speaks with sudden clarity:

> "The tiger that walks like a man. It came to my cell. It wore a merchant's face but it moved like a cat. It asked me questions about the guild leaders — who they trust, who they fear. And it smiled. It smiled with too many teeth."

A DC 14 Intelligence (Arcana) check suggests this description matches a rakshasa — a fiend that can disguise itself as a humanoid. This foreshadows the reveal in Quest 10.

**Maren's gratitude:** After the prisoners are settled in various safehouses, Maren finds the party.

> "What you did tonight — that changes things. We've been hiding, whispering, passing notes. That's over." She reaches into her cloak and produces two smooth stones, each small enough to fit in a palm, carved with matching runes. "Sending Stones. I've had them for years — saved them for when I needed allies I could trust completely. I think that's now." She presses one stone into your hand. "If you need me, speak into it. I'll hear you. And if I need you..." She lets the sentence hang.

Maren also provides the party with guard patrol intelligence gathered by her network — patrol routes, shift changes, and blind spots throughout the undercity. **For the rest of the campaign, the party has advantage on Dexterity (Stealth) checks made in the undercity.**

> "This isn't over. Sorn has a prison under our feet and a creature from the hells wearing a dead man's face. I'm done being careful. The resistance needs to become something louder."

Connected to:

- A1: The undercity entrance, now a known access point.
- Twig's shop on Millhook Street: Available for future visits.

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
| Guard patrol intelligence (advantage on Stealth in undercity) | Maren (quest reward) | Ongoing benefit, rest of campaign |
| Sending Stones (pair) | Maren (quest reward) | Contact Maren at any time |
| +1 longsword | Knight Commander (loot) | On his person |
| Chain mail | Knight Commander (loot) | On his person |
| 50 gp | Knight Commander (loot) | Lockbox in desk |
| Writ of authority with Sorn's seal | Knight Commander (loot) | DC 13 Deception to bluff past guards |
| *Potion of Greater Healing* | Warden's desk (loot) | Standard |
| Bag of Holding | Warden's desk (DC 16 Investigation) | Hidden drawer |
| 180 gp | Inside Bag of Holding (DC 16 Investigation) | Hidden find |
| Wand of Magic Detection (7 charges) | Inside Bag of Holding (DC 16 Investigation) | Hidden find; regains 1d6+1 at dawn |
| Brass compass (points to Council Citadel) | Inside Bag of Holding (DC 16 Investigation) | Hidden find; attuned to ward stone, foreshadows Q17 |
| Twig's services (lockpicking, training, Citadel entrance) | Rescued prisoner (side opportunity) | Thieves' Tools proficiency training (10 downtime days); secret Citadel entrance (Q18) |
| Pettar's intelligence (Sorn speaks Infernal) | Rescued prisoner (plot hook) | Confirms fiendish connection |

## Quest Connections

- **From Quest 3:** The undercity entrance on Cinder Lane is near the Tanners' Quarter, two streets from Warehouse 14. Characters who explored the area during Quest 3 recognise the neighbourhood and may have noticed the cellar door before.
- **To Quest 10:** Seriss's description of "the tiger that walks like a man" — a creature that wore a merchant's face, moved like a cat, and smiled with too many teeth — foreshadows the rakshasa reveal. If the party made the DC 14 Arcana check, they already suspect a shapeshifting fiend is operating in Ashenmere.
- **To Quest 17:** The brass compass found in the warden's hidden drawer always points toward the Council Citadel, attuned to a ward stone. This becomes critical when the party must locate and disable Sorn's ward stones to breach his defences.
- **To Quest 18:** Twig knows a secret entrance to the Council Citadel — a disused coal chute on the eastern wall connecting to the lower kitchens. The undercity tunnels also connect to the Citadel's sewer system, providing a second infiltration route.
