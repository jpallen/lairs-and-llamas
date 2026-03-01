# Quest 9: The Poisoned Quill

**Level:** 6 | **Type:** Reactive (can be failed) | **Style:** Noir investigation

Vara Inkwell, journalist at the Ashenmere Broadsheet, has been printing pamphlets exposing Sorn's corruption. She has been framed for murder using forged evidence and enchanted witnesses. The party must prove her innocence before her trial at dawn — a single night to interrogate witnesses, search crime scenes, break enchantment spells, decipher coded messages, and present their evidence to a magistrate.

This quest is a ticking-clock investigation. The party has roughly eight hours of in-game time (dusk to dawn) to gather enough evidence to acquit Vara. Heavy puzzle and deduction, with combat encounters triggered by investigation progress rather than location.

---

The evening bell has just rung across Ashenmere when a breathless halfling boy finds you. He shoves a scrap of paper into your hands — a note scrawled in hasty ink: *"Vara Inkwell arrested for murder. Trial at dawn. She didn't do it. Come to the courthouse — ask for Darnell."* The boy runs before you can question him. Across the rooftops, the last light of the sun is fading. You have one night.

## Timeline of Events

The investigation unfolds across the night. These events occur whether the party is present or not:

- **Dusk (Hour 0):** Vara is arrested and taken to the courthouse cells. News spreads through the city.
- **First bell (Hour 2):** The assassin arrives in Ashenmere and begins surveilling the courthouse.
- **Second bell (Hour 4):** If the party has exposed at least one doppelganger, the assassin moves to silence Vara. If not, the assassin waits.
- **Third bell (Hour 6):** Magistrate Aldren arrives at the courthouse to prepare for the trial. He can be spoken to from this point onward.
- **Dawn (Hour 8):** The trial begins. Whatever evidence the party has gathered, they must present it now.

The DM should track time loosely. Each major location visit (investigation, interrogation, search) takes roughly 1 hour. Travel between locations takes 15-30 minutes. The party can visit 5-6 locations before dawn if they move efficiently.

## A1. The Courthouse and Jail

A squat stone building near the council quarter, built to look authoritative rather than grand. Iron-barred windows line the ground floor. Two city watchmen stand at the main entrance, lanterns casting pools of orange light across the steps. A smaller side door leads to the holding cells below.

> The courthouse smells of old paper and lamp oil. A clerk at the front desk looks up as you enter, his expression shifting from bored to wary. "Courthouse is closed. Trial's at dawn. No visitors to the cells — magistrate's orders."

**Darnell** [DARNELL] is a young human court clerk who slipped the note to the party. He can be found near the side entrance if the party asks around (DC 10 Investigation to find him loitering, or DC 12 Persuasion to get the front clerk to fetch him).

**If the party speaks to Darnell:** He is nervous but determined. He has worked the courthouse for three years and knows Vara — she brought him food when he was ill last winter. He is certain she is innocent.

> "They brought her in two hours ago. Three witnesses say they saw her stab a man named Corren Hale in the alley behind the Broadsheet office. But I was there this afternoon — I saw Vara leave the office at the fourth bell. She went to the printer's. She wasn't anywhere near that alley."

Darnell can provide:

- **The victim's name:** Corren Hale, a clerk in the Merchants' Guild — no known enemies, no connection to Vara.
- **The three witnesses:** Maren Took (fishmonger), Edric Sable (lamplighter), and Nessa Vane (seamstress). All three gave statements within an hour of the murder.
- **Access to Vara's cell:** Darnell can sneak the party to the cells via the side entrance if they come after the second bell, when the night watch changes. Before that, they need DC 15 Stealth or DC 14 Deception to get past the guards.

**Visiting Vara in her cell:** The cells are damp and cold. Vara is in the last cell on the left — a small halfling woman sitting cross-legged on the stone bench, utterly composed despite the circumstances.

> A halfling woman looks up at you with sharp dark eyes. Her ink-stained fingers are laced together, and despite the chains on her wrists, she manages to look like she's the one conducting an interview. "About time someone with sense showed up. I didn't kill anyone. But whoever framed me did their homework."

**Vara's information:**

- She left the Broadsheet office at the fourth bell and went to the printer's shop to collect pamphlets. She returned at the sixth bell and found the watch waiting for her.
- She has never met Corren Hale. She does not know why he was chosen as the victim.
- She suspects Sorn's people — her latest pamphlet named three of his shell companies. "I must have hit a nerve."
- She mentions that her office was broken into two days ago. Nothing seemed to be taken, but her notes were disturbed. She suspects someone copied her handwriting.

**Hidden find — Vara's coded message:** A DC 13 Investigation check of Vara's cell reveals a loose stone beneath the bench. Behind it, Vara has hidden a scrap of parchment covered in a personal cipher. A DC 14 Intelligence check decodes it — the message names three Sorn agents embedded in Ashenmere's institutions: one in the city watch, one in the Merchants' Guild, and one in the Council Citadel's clerical staff. This information is critical for identifying the traitor in Quest 13.

Vara will tell the party about the hidden message if asked whether she has anything else that might help: "Under the bench. Loose stone. I hid it when they weren't looking. It's coded — my own cipher. The key is the first letter of every headline in last week's Broadsheet."

Connected to:

- A2: The crime scene is two streets south, behind the Broadsheet office.
- A3: The Broadsheet office is adjacent.
- A5: The courtroom is upstairs (accessible only at dawn for the trial).

```yaml
npcs:
  - id: DARNELL
    name: Darnell Swick
    type: Human Commoner
    description: A young human court clerk with a mop of brown hair and nervous hands. He is in his early twenties, earnest and idealistic, and he has a quiet crush on Vara that he would never admit. He is not a fighter — he is terrified of Sorn's people — but his loyalty to Vara outweighs his fear.
  - id: VARA
    name: Vara Inkwell
    type: Halfling Commoner
    description: A sharp-tongued halfling woman in her late thirties with ink-stained fingers, cropped dark hair, and eyes that miss nothing. She runs the Ashenmere Broadsheet — the city's only independent press — from a cramped office near the docks. She is fearless, defiant even in chains, and has been printing pamphlets exposing Sorn's corruption for months. She speaks quickly and precisely, like someone who measures every word before committing it to paper.
    abilityScores:
      str: 8
      dex: 14
      con: 12
      int: 16
      wis: 15
      cha: 14
    ac: 12
    maxHp: 18
    speed: 25
    skills:
      - investigation
      - insight
      - persuasion
      - deception
```

## A2. The Crime Scene

A narrow alley behind the Broadsheet office, barely wide enough for two people to walk abreast. The cobblestones are dark with drying blood. A chalk outline marks where the body was found. The city watch has roped off the entrance but left no one on guard — they consider the case closed.

> The alley stinks of old fish and copper. A dark stain spreads across the cobblestones near a stack of broken crates. Chalk lines trace the shape of a body — a man, fallen face-down, arms splayed. A single lantern hangs from a hook on the wall, still lit, casting long shadows down the alley's length.

**Investigating the crime scene:**

- **DC 10 Investigation:** The blood pattern is consistent with a single stabbing wound to the chest. The body fell forward — meaning the victim was facing his attacker.
- **DC 12 Investigation:** There are no defensive wounds described in the watch report pinned to the alley wall. Corren Hale did not fight back — unusual for a man who was supposedly attacked by a stranger.
- **DC 13 Investigation:** A set of footprints in the grime leads away from the body toward the back of the alley — not toward the Broadsheet office door, which is the direction the witnesses claim Vara fled. The footprints are human-sized, not halfling-sized.
- **DC 14 Investigation:** A faint residue of arcane energy lingers on the chalk outline. A DC 13 Arcana check identifies it as the remnant of a *Charm Person* spell — cast on the victim, not the attacker. Corren Hale was charmed to come to this alley willingly.
- **DC 16 Investigation:** Hidden behind a drainpipe, a small glass vial containing two drops of a dark liquid. A DC 13 Nature or Arcana check identifies it as *Assassin's Blood* poison (ingested, DC 10 Constitution save or 1d12 poison damage and poisoned condition). The same poison is found on the assassin later — connecting the two.

**The murder weapon:** The watch report states that a bloodied letter opener engraved with Vara's initials was found at the scene. This is the forged evidence. A DC 14 Investigation check of the weapon (if the party obtains it from the courthouse evidence room, requiring Darnell's help or DC 15 Sleight of Hand) reveals that the blood on the blade is smeared in a way consistent with it being dipped, not stabbed. The blade was planted.

Connected to:

- A1: The courthouse is two streets north.
- A3: The Broadsheet office back door opens into this alley.

## A3. The Ashenmere Broadsheet Office

A cramped ground-floor shop with a hand-operated printing press, stacks of paper, and shelves overflowing with notebooks, broadsheets, and reference materials. The front window is dark. The door is locked (DC 12 Thieves' Tools, or Darnell has a spare key Vara gave him).

> Ink and paper — the smell hits you the moment the door opens. The Broadsheet office is organised chaos: stacks of pamphlets on every surface, a heavy iron printing press dominating the back wall, and a desk buried under notebooks, quills, and reference sheets. A half-finished broadsheet sits in the press, its headline reading: "SORN SHELL COMPANIES EXPOSED — THREE FRONTS IDENTIFIED."

**Investigating the office:**

- **DC 10 Investigation:** The office was searched — someone went through Vara's desk drawers and left them slightly ajar. Papers are out of order.
- **DC 12 Investigation:** Vara's personal notebook is missing from its usual place (Darnell knows she kept it in the top-left drawer). The intruder took it — likely to forge her handwriting.
- **DC 13 Investigation:** A faint magical aura lingers on the desk surface. A DC 12 Arcana check identifies it as residual *Detect Thoughts* — someone used divination magic here to read Vara's notes.
- **DC 14 Investigation:** Beneath a loose floorboard under the printing press, Vara's backup files — copies of every pamphlet she has printed, along with her source notes. These include a letter from an anonymous informant inside the Council Citadel warning her that "they know about the pamphlets" and advising her to flee. The letter is dated two days before the murder. This proves Vara knew she was in danger — making it less likely she would commit a murder that would obviously be traced to her.
- **DC 15 Investigation:** A tiny scrap of paper wedged between the press rollers. It is a fragment of a forged letter in Vara's handwriting — the forger tested their work here on Vara's own press. The handwriting is close but a DC 12 Intelligence check reveals the letter spacing is slightly too uniform — it was traced, not written freely. This is powerful evidence for the trial.

Connected to:

- A2: The alley crime scene is directly behind the office.
- A1: The courthouse is two streets north.

## A4. Witness Locations

The three witnesses live and work in different parts of the dock quarter. The party must visit them individually — they are not together. Two of the three witnesses are doppelgangers; one is an enchanted civilian.

### A4a. Maren Took — Fish Market (Doppelganger)

A stall in the night fish market near the harbour. "Maren" is gutting fish by lantern-light when the party arrives.

> A heavyset woman in a stained apron looks up from her work, a gutting knife in one hand and a mackerel in the other. "Saw what I saw. The halfling woman came out of the alley with blood on her hands. I told the watch and I'll tell the magistrate the same."

**"Maren" is a doppelganger** [DOPPEL1] posing as the real Maren Took (who is bound and gagged in a storage cellar beneath the fish market — DC 14 Perception to hear muffled thumping from below).

- **DC 15 Insight:** Something about Maren's story feels rehearsed — she gives the exact same account in the exact same words if asked to repeat it, with no natural variation.
- **DC 13 Persuasion:** "Maren" adds a detail that contradicts the watch report — she says Vara was wearing a red cloak, but the watch report describes Vara's clothes as grey. If confronted, she stumbles.
- **Heartstone from Q5:** If a party member possesses the Heartstone obtained in Quest 5, it grows warm in the presence of the doppelganger, confirming the creature's true nature. The hag's intel about shapechangers from Q5 also applies — a character who learned to identify shapechangers has advantage on Insight checks against doppelgangers.
- **If exposed:** The doppelganger fights only if cornered with no escape route. It attempts to flee, dropping its disguise. If defeated or captured, it carries a **charm amulet** (see Rewards) and 30 gp. If questioned (DC 13 Intimidation), it admits it was hired to give false testimony but does not know who hired it — instructions were delivered via dead drop.

**The real Maren Took:** Found in the storage cellar (DC 14 Perception to hear her, DC 12 Thieves' Tools or DC 15 Strength to force the cellar hatch). She was grabbed two days ago and has been kept alive on bread and water. She saw nothing — she was taken before the murder happened. Her testimony that she was kidnapped is valuable evidence for the trial.

Connected to:

- A4b: Edric Sable's location is across the dock quarter.
- A4c: Nessa Vane's location is in the residential streets nearby.
- A1: The courthouse.

```yaml
npcs:
  - id: DOPPEL1
    name: '"Maren Took"'
    type: Doppelganger
    description: A doppelganger posing as a heavyset human fishmonger. In its true form, it is a pale, featureless humanoid with grey skin and blank white eyes. It carries a charm amulet hidden under its apron — a small bronze disc inscribed with a sigil that glows faintly when touched.
    ac: 14
    maxHp: 52
    speed: 30
    skills:
      - deception
      - insight
  - id: MAREN_REAL
    name: Maren Took
    type: Human Commoner
    description: The real Maren Took — a heavyset woman with weathered hands and a no-nonsense attitude. She has been bound and gagged in a cellar for two days and is frightened, angry, and desperate to tell someone what happened to her.
```

### A4b. Edric Sable — Lamplighter's Route (Enchanted Witness)

Edric Sable is an elderly human lamplighter making his rounds along the harbour wall. He genuinely believes he saw Vara commit the murder — because he has been enchanted.

> An old man on a stepladder lights a harbour lamp with a long taper. He climbs down stiffly and regards you with watery blue eyes. "Aye, I saw her. Little halfling woman, came out of that alley covered in blood. Terrible thing. I reported it straight away."

**Edric is not a doppelganger** — he is a real person under the effects of a modified *Modify Memory* spell (cast at 5th level to alter 24 hours of memory).

- **DC 14 Insight:** Edric's account is emotionally genuine — he really believes what he's saying — but the details are oddly specific. He describes the exact angle of the knife, the exact number of bloodstains on Vara's clothes, the exact words she said. No genuine eyewitness remembers with that precision.
- **DC 13 Arcana (or Detect Magic):** A faint enchantment aura clings to Edric's mind. A DC 14 Arcana check identifies it as *Modify Memory*.
- **Breaking the enchantment:** A *Dispel Magic* (DC 15) or *Greater Restoration* spell removes the false memory. Without these spells, a DC 16 Persuasion check made while presenting contradictory evidence (the human-sized footprints, the wrong direction of flight, the planted weapon) can cause Edric to doubt his memory enough that he agrees not to testify. He cannot un-remember what he thinks he saw, but he admits it "doesn't add up."
- **If the enchantment is broken:** Edric remembers nothing of the evening of the murder. He was walking his usual route and the next thing he knew, it was an hour later and he was giving a statement to the watch. He is horrified to learn his memory was tampered with. His testimony about the enchantment is powerful evidence for the trial.

Connected to:

- A4a: Maren's fish market.
- A4c: Nessa Vane's location.
- A1: The courthouse.

```yaml
npcs:
  - id: EDRIC
    name: Edric Sable
    type: Human Commoner
    description: An elderly human lamplighter with watery blue eyes, a stooped posture, and a long taper tucked under his arm. He has worked the harbour wall lamps for thirty years and is a familiar, trusted figure in the dock quarter. He is currently under the effects of a Modify Memory spell and genuinely believes he witnessed a murder.
```

### A4c. Nessa Vane — Boarding House (Doppelganger)

"Nessa Vane" is staying in a small boarding house on Chandler's Row. The party must knock on the door; the landlady directs them upstairs to room 4.

> A thin woman with dark hair answers the door, a shawl pulled tight around her shoulders. She peers at you suspiciously. "I already told the watch everything. What more do you want?"

**"Nessa" is a doppelganger** [DOPPEL2]. The real Nessa Vane is a seamstress who left Ashenmere three weeks ago to visit family in a neighbouring town — the doppelganger assumed her identity while she was away.

- **DC 14 Insight:** "Nessa" is evasive about details of her life in Ashenmere — she deflects personal questions and steers the conversation back to the murder.
- **DC 12 Investigation (of the room):** The room is sparse and impersonal — no sewing materials, no personal effects, nothing to suggest a seamstress lives here. The real Nessa would have fabric scraps, needles, and thread everywhere.
- **DC 13 Persuasion (asking the landlady):** The landlady mentions that "Nessa" paid three weeks' rent in advance with gold coins — unusual, since Nessa usually pays weekly in silver.
- **Heartstone from Q5:** Functions the same as in A4a — the stone grows warm, confirming the shapechanger.
- **If exposed:** The doppelganger attempts to flee through the window and across the rooftops. If pursued, use a simple chase: DC 13 Athletics or Acrobatics to keep up, DC 14 Perception to track it across the rooftops. If caught or defeated, it carries a **charm amulet** and 30 gp. If questioned (DC 14 Intimidation), it reveals it was given the identity by "a man with a silver tongue" at the Rusty Nail tavern — it never saw the man's face.

Connected to:

- A4a: Maren's fish market.
- A4b: Edric's lamplighter route.
- A1: The courthouse.

```yaml
npcs:
  - id: DOPPEL2
    name: '"Nessa Vane"'
    type: Doppelganger
    description: A doppelganger posing as a thin human seamstress. It is less composed than the first doppelganger and more prone to nervousness when pressed. It carries a charm amulet hidden in a pocket — identical to the one carried by DOPPEL1.
    ac: 14
    maxHp: 52
    speed: 30
    skills:
      - deception
      - insight
```

## A5. The Assassin

A professional killer [ASSASSIN] sent to silence Vara if the party's investigation gets too close to the truth. The assassin targets Vara, not the party. This encounter is triggered by the party's progress, not by location.

**Trigger:** The assassin strikes when the party has exposed at least one doppelganger or broken Edric's enchantment. If the party has not achieved either by the second bell (Hour 4), the assassin waits until the third bell before acting regardless.

**DC 15 Perception** (passive or active) to spot the assassin before the strike. A party member keeping watch at the courthouse, or who specifically states they are watching for threats to Vara, makes this check with advantage.

> A shadow detaches from the courthouse wall — a figure in dark leather, moving with practiced silence toward the barred cell window. Moonlight catches the edge of a blade. The figure is reaching through the bars.

**The assassin's plan:** Slip *Assassin's Blood* poison into Vara's water jug through the cell window, then retreat. If spotted, the assassin switches to a direct attack through the bars with a poisoned rapier.

**Combat:** The assassin fights for no more than 2 rounds. If the party engages, the assassin prioritises escape — disengaging, using smoke bombs (bonus action, 10-foot radius heavily obscured area), and fleeing across rooftops. The assassin does not pursue the party or seek revenge.

**If the assassin succeeds:** Vara is poisoned and falls unconscious. She can be stabilised with a DC 10 Medicine check or any healing magic, but she is weakened for the trial (disadvantage on Charisma checks during testimony). If no one checks on Vara before dawn, she dies — and the quest fails.

**If the assassin is stopped or captured:**

- The assassin carries a **+1 rapier** with an Infernal inscription along the blade (DC 13 Arcana or Religion to read: "By contract bound"), a dose of **Assassin's Blood** poison, and 50 gp.
- **DC 14 Intimidation:** The assassin admits the contract came through a guild contact in another city. Payment was left at a dead drop — they never met the client.
- **DC 16 Insight:** The assassin is not loyal to anyone. They are a professional who took a job. They have no interest in dying for a client they've never met and will trade information for their freedom.
- **DC 16 Intimidation or Persuasion (if the assassin is willing to talk):** The contract specified "the halfling journalist" and was accompanied by a floor plan of the courthouse cells. Someone on the inside provided that floor plan.

Connected to:

- A1: The courthouse and cells.

```yaml
npcs:
  - id: ASSASSIN
    name: The Assassin
    type: Assassin
    description: A lean figure in dark leather armour with a face hidden behind a cloth mask. They move with the fluid economy of someone who has killed professionally for years. They carry a finely made rapier with Infernal script etched along the blade and several vials of poison in a bandolier across their chest. They are not cruel — they are efficient.
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
      - acrobatics
      - deception
      - perception
      - stealth
```

## A6. The Magistrate

Magistrate Aldren [ALDREN] arrives at the courthouse at the third bell (Hour 6) to prepare for the trial. He can be spoken to in his chambers — a wood-panelled room on the upper floor.

> A man in his fifties sits behind a desk stacked with legal documents, rubbing his temples. He wears a magistrate's chain of office over a rumpled shirt. When he sees you, his expression shifts from exhaustion to guarded interest. "You're here about the Inkwell case. Sit down."

**Aldren is not an enemy.** He is a career magistrate who has served Ashenmere for twenty years. He is torn between his duty to uphold the law and his growing suspicion that the case against Vara is fabricated.

- **DC 12 Insight:** Aldren is afraid. Not of the party — of something larger. He keeps glancing at the door as if expecting someone to walk in.
- **DC 13 Persuasion:** Aldren admits he finds the case suspicious. "Three witnesses who all came forward within an hour? A murder weapon conveniently engraved with the suspect's initials? It's too neat. But I can't throw out a case on a feeling."
- **DC 14 Persuasion (with evidence):** If the party presents any concrete evidence (doppelganger exposure, enchantment proof, forged handwriting, planted weapon analysis), Aldren is visibly relieved. "Give me something I can stand on in court, and I will use it."
- **Charm amulets from Q4:** If the party presents charm amulets collected during Quest 4, Aldren recognises them — he has seen similar amulets mentioned in confiscated evidence reports. Three or more charm amulets are enough to convince him that an organised conspiracy is behind the frame-up.
- **Side opportunity:** If the party earns Aldren's trust (DC 15 Persuasion, or by presenting overwhelming evidence), he makes a private offer after the trial: "There are arrest warrants sitting on my desk. Warrants for people I believe are being targeted because they oppose Sorn. I could lose those warrants. Paperwork goes missing all the time." If accepted, Aldren quietly destroys warrants targeting resistance members — a significant political advantage in later quests.

Connected to:

- A1: The courthouse below.
- A5: The courtroom (trial scene).

```yaml
npcs:
  - id: ALDREN
    name: Magistrate Aldren
    type: Human Noble
    description: A man in his fifties with greying hair, a square jaw, and the tired eyes of someone who has been losing sleep. He wears the magistrate's chain of office — a heavy bronze chain with the seal of Ashenmere — over clothes that suggest he dressed in a hurry. He is honest, cautious, and quietly horrified by what Ashenmere is becoming under Sorn's influence.
    abilityScores:
      str: 10
      dex: 11
      con: 12
      int: 15
      wis: 16
      cha: 14
    ac: 11
    maxHp: 22
    speed: 30
    skills:
      - insight
      - persuasion
      - history
```

## A7. The Trial

At dawn, the trial convenes in the courthouse's upper courtroom. Magistrate Aldren presides. The gallery is packed — dock workers, merchants, and Sorn's people all watching. Vara is brought up from the cells in chains.

> The courtroom is a long, low-ceilinged chamber with wooden benches on either side and a raised magistrate's bench at the far end. Morning light slants through narrow windows. Vara Inkwell stands in the dock, her chin raised, her expression defiant. The gallery murmurs. Magistrate Aldren strikes his gavel once. "This court is in session. The city of Ashenmere versus Vara Inkwell, on the charge of murder. Let us hear the evidence."

**The trial is a social encounter.** The party presents evidence; the prosecution (a Sorn-aligned advocate named Selwick [SELWICK]) presents the witnesses and the murder weapon.

**Prosecution's case:** Selwick calls the remaining witnesses (any doppelgangers not yet exposed, and Edric if his enchantment was not broken). He presents the engraved letter opener. He argues motive: Vara is a known agitator with a grudge against the establishment.

**Defence:** The party can present any evidence they have gathered. Each piece of evidence requires a check to present effectively:

| Evidence | Check | DC | Effect |
|----------|-------|----|--------|
| Human-sized footprints (not halfling) | Persuasion or Investigation | 12 | Raises doubt about Vara's guilt |
| Planted murder weapon (dipped, not stabbed) | Persuasion | 13 | Seriously undermines prosecution |
| Doppelganger exposed (either one) | Persuasion | 10 | Devastating — witness credibility collapses |
| Real Maren Took's testimony | None | — | Automatic success — kidnapped witness proves conspiracy |
| Edric's broken enchantment | Persuasion | 11 | Proves magical tampering with witnesses |
| Forged handwriting fragment | Intelligence or Persuasion | 13 | Proves the letter opener was planted |
| Charm amulets (3+) | Persuasion | 12 | Proves organised conspiracy |
| Stolen correspondence from Q8 | Persuasion | 12 | Additional evidence of Sorn's operations |
| Anonymous informant's warning letter | Persuasion | 13 | Shows Vara knew she was a target, not a killer |
| Assassin's floor plan of cells | Persuasion | 11 | Proves inside conspiracy to silence Vara |
| Assassination attempt testimony | Persuasion | 10 | Proves someone wants Vara dead, not punished |

**Scoring:** The party needs **3 successful evidence presentations** to secure acquittal. If they achieve **5 or more**, Aldren not only acquits Vara but publicly denounces the case as a conspiracy, boosting resistance morale.

**Selwick's counter-arguments:** After each piece of evidence, Selwick attempts to discredit it. The party can counter his arguments with additional checks (DC 13 Persuasion or DC 14 Insight to catch him in a logical contradiction). Selwick is competent but not brilliant — he is a hired advocate, not a true believer.

**If the party presents fewer than 3 pieces of evidence:** Aldren has no choice but to convict. He sentences Vara to execution at noon. See "Vara Lost" below.

Connected to:

- A1: The courthouse below.
- A6: Aldren's chambers.

```yaml
npcs:
  - id: SELWICK
    name: Advocate Selwick
    type: Human Commoner
    description: A thin man in a pressed black coat with a reedy voice and a sheaf of legal documents. He is a competent advocate hired to prosecute the case. He is not loyal to Sorn — he is loyal to whoever pays him — but he has been paid very well to ensure a conviction. He argues by the book and does not resort to theatrics.
```

---

## Wrap-Up

### Vara Saved

If the party secures Vara's acquittal, she is released immediately. She finds the party outside the courthouse as the morning crowds disperse.

> Vara Inkwell steps into the morning light, rubbing her wrists where the manacles were. She takes a deep breath, then turns to you with a grin that is equal parts relief and fury. "I owe you my life. And I pay my debts." She reaches into her coat and produces a battered hat — soft felt, unremarkable. "Saved my skin more times than I can count. You'll get more use out of it than I will, now that half the city knows my face."

Vara gives the party a **Hat of Disguise** and pledges the Ashenmere Broadsheet to the resistance cause. Her pamphlets will continue — and now she has a personal grudge.

**Ongoing effects:**
- Vara's broadsheets erode Sorn's public support. Civilian NPCs in later quests are more sympathetic to the party.
- The Broadsheet becomes a communication network for the resistance.
- Vara herself becomes a recurring ally — she has contacts, sources, and the ability to shape public opinion.

### Vara Lost

If the party fails to gather enough evidence, or if the assassin kills Vara before the trial, the quest fails.

**If convicted:** Vara is executed at noon. The Broadsheet is shuttered. Sorn's people seize the printing press.

**If assassinated:** Vara is found dead in her cell. The trial is cancelled. Sorn's people spread the story that she was guilty and took her own life.

**Ongoing effects:**
- Civilians in Quest 11 are hostile — they blame the resistance for Vara's death or believe Sorn's version of events.
- Quest 16 features hostile civilians during Sorn's Retribution, making an already difficult quest harder.
- The party loses the Broadsheet as a communication tool for the resistance.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| Hat of Disguise | Vara (quest reward) | Given if Vara is saved |
| Broadsheet pledged to resistance | Vara (quest reward) | Ongoing narrative benefit |
| +1 rapier (Infernal inscription) | Assassin | Loot; inscription reads "By contract bound" |
| Assassin's Blood poison (1 dose) | Assassin | Loot |
| 50 gp | Assassin | Loot |
| 30 gp | Doppelganger 1 | Loot |
| 30 gp | Doppelganger 2 | Loot |
| Charm amulet | Doppelganger 1 | Evidence; collecting 3+ convinces sceptical NPCs |
| Charm amulet | Doppelganger 2 | Evidence; collecting 3+ convinces sceptical NPCs |
| Vara's coded message | Vara's cell (DC 13 Investigation, DC 14 Intelligence) | Hidden find; names 3 Sorn agents, helps Q13 |
| Magistrate's offer to destroy warrants | Aldren (DC 15 Persuasion) | Side opportunity; resistance advantage |

## Quest Connections

- **From Quest 4:** Charm amulets collected in Q4 are critical evidence. Presenting three or more to Magistrate Aldren proves an organised conspiracy and strengthens the defence.
- **From Quest 5:** The Heartstone obtained from the hag detects doppelgangers, making A4a and A4c significantly easier. The hag's intel about shapechangers grants advantage on Insight checks against the doppelganger witnesses.
- **From Quest 8:** Stolen correspondence from Thornwall Manor provides additional evidence for Vara's defence, connecting Sorn's operations to the frame-up.
- **To Quest 11:** Vara's fate directly affects civilian attitudes during the civil unrest. If saved, civilians are sympathetic. If lost, civilians are hostile and blame the resistance.
- **To Quest 13:** Vara's coded message — hidden in her cell — names three Sorn agents in Ashenmere's institutions. This information is critical for identifying the traitor.
- **To Quest 16:** If Vara was lost, hostile civilians during Sorn's Retribution make an already difficult quest significantly harder. If Vara was saved, the Broadsheet rallies civilian support.
