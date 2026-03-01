# Quest 4: Guild Trials

**Level:** 4 | **Type:** Discovery (optional) | **Style:** Social/Skill challenge

To gain standing in Ashenmere, the party is invited to compete in the Guild Trials — a public contest of skill sponsored by the five houses. Events include a combat tourney, a riddle challenge, a rooftop race, and a negotiation contest. Vaelith Sorn presides as guest of honour and is publicly charming. All five guild leaders are present and can be spoken to. The Valiant Company — a rival adventuring party — compete as friendly opponents and recur throughout the campaign.

This quest introduces the party to Ashenmere's power brokers in a low-stakes social setting and plants the first evidence of Sorn's enchantment network.

---

The Guild Trials are held on the first day of the Midsummer Market — Ashenmere's annual trade festival. A sprawling fairground has been erected in the Merchants' Quarter, between the Goldsmiths' Guild hall and the Grand Theatre. Coloured banners bearing the sigils of all five guilds hang from every lamppost. The smell of roasted meat and spiced wine fills the air. Crowds press against roped-off arenas, cheering and placing wagers. At the centre of it all, a raised pavilion draped in cloth-of-gold — and seated there, smiling like a king, is a man you have never met but whose name you have heard in every tavern in the city: Vaelith Sorn.

## A1. The Festival Grounds

A broad square in the Merchants' Quarter has been transformed into a fairground. Roped-off arenas mark the four trial events. Food stalls, ale tents, and wagering booths line the edges. A raised wooden pavilion at the north end seats the five guild leaders and their guest of honour. Hundreds of citizens mill about, drinking, arguing, and cheering.

> Coloured banners snap in the breeze — blue for the Dockmasters, gold for the Goldsmiths, green for the Weavers, brown for the Tanners, and crimson for the Merchants. A crier stands on a barrel near the registration table, bellowing: "All comers welcome! Teams of four to six! Register with the clerk and prove your worth before the Council of Guilds!"

The registration clerk [CLERK] is a harried young woman with ink on her face and a long scroll. She takes the party's names, assigns them a colour (whatever they choose), and hands them a token — a wooden disc stamped with the guild seal of the Goldsmiths, this year's sponsors.

**If the party looks toward the pavilion:** The five guild leaders are seated in a row. Brokka Ironjaw [BROKKA] sits at the far left, arms crossed, looking bored. Harsk Copperkettle [HARSK] nurses a tankard beside her. Maren Loomwright [MAREN] sits stiffly, watching the crowd. Lady Isara Thornwall [THORNWALL] fans herself and makes polite conversation with Selene Auris [SELENE], who sits at the centre, glittering in gold jewellery. A sixth chair — larger, set slightly apart — is occupied by Vaelith Sorn [SORN], who is laughing at something Selene just said.

**If the party approaches the pavilion before the trials:** A pair of city watch guards [GUARD1] [GUARD2] politely redirect them. "The guild leaders will be available during the feast after the trials. Best of luck to you." Brokka, however, catches the party's eye and gives a curt nod. If the party completed Q1, she calls out: "That's them — the ones who helped me on the docks. Put your coin on them, Harsk."

**If the party looks for other competitors:** Three other teams are registered. Two are forgettable — local tradesmen and off-duty guards who are outmatched and exist for flavour. The third team is the Valiant Company [DREN] [SYLVA] [WICK] [PATCHES], who are stretching, bickering, and drawing curious looks from the crowd.

**Meeting the Valiant Company:** Dren is doing push-ups. Sylva is scanning the rooftops with quiet focus. Wick is clutching a stack of notes and muttering to himself. Patches is juggling three apples she definitely stole from a vendor.

> A broad-shouldered human man in polished half-plate stands up from his push-ups, spots your group, and grins. "Well, well. Fresh meat. Name's Dren. These are my associates." He gestures grandly. The elf woman doesn't look up. The gnome drops his notes. The tiefling catches an apple behind her back without looking. "Don't worry," Dren says, cracking his knuckles. "We'll go easy on you. Probably."

Dren is cocky but genuinely friendly. He treats the trials as sport, not war. The Valiant Company are experienced adventurers (level 5) who are in Ashenmere on a job they are vague about. They are happy to chat, trade banter, and share a drink.

- **DC 10 Insight on Dren:** His confidence is genuine — he's good and he knows it — but there's no malice in it.
- **DC 12 Persuasion or DC 10 with a shared drink:** Dren reveals they are investigating "some kind of magical disturbance" in the city. He doesn't know the details — Wick handles the arcane side.
- **DC 12 Persuasion on Wick (or any Arcana-related conversation):** Wick nervously admits he has been detecting a low-level background magical resonance across the city. "It's not natural. It's... it's Infernal. Like someone opened a crack between here and somewhere very bad and left it open." He offers to share his notes with the party after the trials if they seem trustworthy — see "Wick's Notes" below.

Connected to:

- A2: The combat tourney arena to the east.
- A3: The riddle challenge tent to the south.
- A4: The rooftops above the Merchants' Quarter to the west.
- A5: The negotiation stage to the north, near the pavilion.
- A6: The feast hall inside the Goldsmiths' Guild, after the trials.

```yaml
npcs:
  - id: SORN
    name: Vaelith Sorn
    type: Rakshasa (disguised as Human Noble)
    description: A tall, strikingly handsome man in his late forties with silver-streaked dark hair, a perfectly trimmed beard, and pale amber eyes. He wears a deep crimson coat with gold embroidery and a signet ring bearing a coiled serpent. His smile never quite reaches his eyes. He radiates effortless authority and charm. In truth, he is a rakshasa — a fiend of ancient cunning — but his disguise is flawless.
    abilityScores:
      str: 14
      dex: 16
      con: 18
      int: 13
      wis: 16
      cha: 20
    ac: 16
    maxHp: 110
    speed: 40
    skills:
      - deception
      - insight
      - persuasion
      - intimidation
  - id: SELENE
    name: Selene Auris
    type: Human Noble
    description: A striking woman in her mid-thirties with honey-blonde hair pinned beneath a gold circlet. She wears a gown of white silk with gold thread at the hems and an ostentatious amount of jewellery — all of it real. As Guildmaster of the Goldsmiths' Guild, she is wealthy, ambitious, and politically shrewd. She sees Sorn as a useful partner and genuinely believes his reforms benefit her guild. She is not charmed or blackmailed — her alliance with Sorn is purely strategic.
    abilityScores:
      str: 10
      dex: 12
      con: 11
      int: 14
      wis: 13
      cha: 16
    ac: 11
    maxHp: 9
    speed: 30
    skills:
      - persuasion
      - insight
      - deception
  - id: DREN
    name: Dren
    type: Human Fighter (Level 5)
    description: A broad-shouldered human man in his late twenties with a square jaw, short brown hair, and an easy grin. He wears polished half-plate and carries a longsword with a well-worn grip. Cocky, competitive, and genuinely friendly — he treats adventuring as a sport and the party as worthy opponents, not enemies.
    abilityScores:
      str: 17
      dex: 13
      con: 15
      int: 10
      wis: 11
      cha: 14
    ac: 18
    maxHp: 44
    speed: 30
    skills:
      - athletics
      - intimidation
  - id: SYLVA
    name: Sylva
    type: Elf Ranger (Level 5)
    description: A lean wood elf woman with close-cropped auburn hair and sharp green eyes that never stop moving. She speaks little and observes everything. She wears weathered leather armour and carries a longbow of obvious quality. Calm, professional, and quietly dangerous.
    abilityScores:
      str: 12
      dex: 18
      con: 13
      int: 13
      wis: 16
      cha: 10
    ac: 15
    maxHp: 38
    speed: 35
    skills:
      - perception
      - stealth
      - survival
      - nature
  - id: WICK
    name: Wick
    type: Gnome Wizard (Level 5)
    description: A small, fidgety forest gnome with wild copper hair, spectacles held together with wire, and ink stains on every finger. He carries an overstuffed satchel of notes and a wand he keeps dropping. Nervous and easily flustered, but genuinely brilliant — his detection of the city's Infernal resonance is remarkable magical scholarship.
    abilityScores:
      str: 8
      dex: 14
      con: 12
      int: 18
      wis: 13
      cha: 10
    ac: 12
    maxHp: 27
    speed: 25
    skills:
      - arcana
      - investigation
      - history
  - id: PATCHES
    name: Patches
    type: Tiefling Rogue (Level 5)
    description: A wiry tiefling woman with dark red skin, short curved horns, and a crooked grin that suggests she is always laughing at a joke no one else has heard. She wears a patchwork leather coat covered in mismatched buttons and buckles — hence the name. Irreverent, quick-fingered, and surprisingly loyal to her companions.
    abilityScores:
      str: 10
      dex: 18
      con: 12
      int: 14
      wis: 11
      cha: 15
    ac: 15
    maxHp: 33
    speed: 30
    skills:
      - stealth
      - sleight of hand
      - acrobatics
      - deception
  - id: CLERK
    type: Human Commoner
    description: A young woman with ink on her face and a harried expression. She runs the registration table with brisk efficiency.
```

## A2. The Combat Tourney

A circular arena marked by a low wooden fence, with sand scattered over the cobblestones. Padded weapons — longswords, maces, quarterstaffs, and shields — are racked at the entrance. A referee [REFEREE] in a Goldsmiths' tabard explains the rules. The crowd presses three deep against the fence, cheering and heckling.

> "Rules are simple!" the referee barks. "Non-lethal weapons only. No magic that causes direct harm — shields and buffs are permitted. Fight until your opponent yields or the referee calls it. First team to win two of three bouts takes the round. Killing your opponent is grounds for disqualification and arrest."

The tourney is three bouts, each a one-on-one fight between a party member and a Valiant Company member. (The other registered teams are eliminated in earlier rounds offscreen.) The party chooses which member fights each bout; the Valiant Company fields Dren first, Patches second, and Sylva third.

**Bout 1 — Dren (Fighter):** Dren fights with a padded longsword and shield. He is straightforward and aggressive — Battle Master manoeuvres, shove attacks, and lots of shouting encouragement at his own team. He fights to win but plays clean.

- **Dren's stats for this bout:** AC 16 (padded shield), HP 25 (non-lethal threshold — he yields at 0). Attack: +6 to hit, 1d6+4 bludgeoning. He uses Riposte and Trip Attack (DC 14 STR save).
- **Alternative approach:** A DC 14 Athletics check to grapple and pin Dren forces a contested Athletics check each round. Dren has +5 Athletics.

**Bout 2 — Patches (Rogue):** Patches fights with two padded short swords. She is slippery, acrobatic, and fights dirty within the rules — feints, disarms, and playing to the crowd.

- **Patches's stats for this bout:** AC 15, HP 20 (non-lethal threshold). Attack: +7 to hit, 1d4+4 bludgeoning, Sneak Attack 2d6 if she has advantage. She uses Cunning Action to Disengage or Hide behind the crowd noise.
- **Alternative approach:** A DC 13 Insight check at the start of the bout reveals Patches always feints left before striking right. This grants advantage on the next attack against her.

**Bout 3 — Sylva (Ranger):** Sylva fights with a padded quarterstaff, calm and precise. She is the most dangerous of the three — patient, observant, and she waits for her opponent to overcommit.

- **Sylva's stats for this bout:** AC 15, HP 22 (non-lethal threshold). Attack: +5 to hit, 1d6+3 bludgeoning. She uses her reaction to impose disadvantage on one attack per round (Hunter's Instinct).
- **Alternative approach:** A DC 14 Perception check notices Sylva favours her left side — she has an old injury in her right shoulder. Targeting that side grants advantage on one attack.

**Scoring:** The party needs to win 2 of 3 bouts to win the tourney event. Winning all 3 earns additional respect from the crowd and an approving nod from Brokka.

**Regardless of outcome:** The Valiant Company are gracious in victory and defeat alike. Dren claps the winning fighter on the shoulder; Patches pretends to cry dramatically if she loses; Sylva offers a silent nod of respect.

**Sorn's reaction:** From the pavilion, Sorn watches with polite disinterest. If the party wins, he claps slowly. If any party member shows exceptional martial skill, he murmurs something to Selene and she nods — he is assessing threats.

Connected to:

- A1: The festival grounds.

```yaml
npcs:
  - id: REFEREE
    type: Human Commoner
    description: A stocky man in a Goldsmiths' Guild tabard with a booming voice and a whistle on a chain around his neck.
```

## A3. The Riddle Challenge

A large open-sided tent hung with lanterns and filled with rows of benches. A raised stage at the front holds a podium and a silver bell. The riddle master [RIDDLEMASTER] is an elderly halfling woman in academic robes who clearly enjoys this far too much.

> "Welcome, welcome to the Trial of Wits!" The halfling woman adjusts her spectacles and beams at the crowd. "Three riddles. First team to ring the bell with the correct answer scores a point. Best of three wins. And no — Detect Thoughts is not permitted. I will know."

The riddle challenge pits the party against the Valiant Company (represented primarily by Wick, who is surprisingly formidable at riddles).

**Riddle 1:**

> "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. I have roads, but no travellers. What am I?"

Answer: **A map.** The party can answer by roleplay or by making a DC 12 Intelligence check. Wick answers in 2 rounds if the party hasn't answered by then.

**Riddle 2:**

> "The more you take, the more you leave behind. What are they?"

Answer: **Footsteps.** DC 13 Intelligence check, or DC 11 Wisdom (Insight) to reason through it. Wick struggles with this one — Patches shouts the answer for him in 3 rounds.

**Riddle 3:**

> "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?"

Answer: **An echo.** DC 14 Intelligence check, or DC 12 Intelligence (Nature) if reasoned through natural phenomena. Wick and the party answer simultaneously if neither has answered by round 3 — the riddle master calls for a tiebreaker.

**Tiebreaker (if needed):**

> "What can run but never walks, has a mouth but never talks, has a head but never weeps, has a bed but never sleeps?"

Answer: **A river.** DC 13 Intelligence check. Wick fumbles his notes and drops them, giving the party a 1-round advantage.

**Scoring:** Best of 3 (or 4 if tiebreaker is needed). Players can collaborate — one player makes the check but others can use the Help action (granting advantage) if they describe how they're working through the riddle together.

**Creative approaches:** If a player uses a spell like Guidance or Enhance Ability, allow it — the riddle master said no Detect Thoughts, not no magic. She raises an eyebrow but allows it. "Clever. I approve."

**Regardless of outcome:** Wick approaches the party afterward, deeply impressed or eager to discuss the riddles further. This is the natural opening for his conversation about the Infernal resonance (see A1).

Connected to:

- A1: The festival grounds.

```yaml
npcs:
  - id: RIDDLEMASTER
    name: Penna Quill
    type: Halfling Sage
    description: An elderly halfling woman in academic robes with half-moon spectacles, a silver bell, and an encyclopaedic knowledge of riddles, puzzles, and trick questions. She has been running the riddle challenge for twenty-three years and considers it the highlight of her annual calendar.
```

## A4. The Rooftop Race

The most spectacular event of the Guild Trials. A course has been marked across the rooftops of the Merchants' Quarter — from the Goldsmiths' Guild hall to the clock tower at the far end of the district. Coloured flags mark the route. The crowd watches from the streets below, craning their necks upward.

> A wiry man with a megaphone stands on a balcony overlooking the starting line — a narrow plank bridge between two buildings. "Runners! The course is marked with flags — follow them across the rooftops to the clock tower. First to ring the bell at the top wins. No flying magic. No teleportation. Everything else is fair game. On my signal — GO!"

One party member runs the race against Patches (who is the Valiant Company's best runner). The other competitors from the lesser teams are present but fall behind quickly and are flavour only.

**The race is a skill challenge.** The party member and Patches each accumulate successes. First to 5 successes wins. Each round, the runner describes their action and makes an appropriate check:

- **Acrobatics (DC 13):** Leap between rooftops, balance on narrow ledges, roll through a gap.
- **Athletics (DC 13):** Sprint across a flat rooftop, vault a chimney, haul yourself up a wall.
- **Perception (DC 14):** Spot a shortcut — a loose shutter, an open window, a cable between buildings. Grants advantage on the next check.
- **Stealth (DC 14):** Cut through an attic unseen to emerge ahead of your opponent.
- **Acrobatics or Athletics (DC 10):** Recover from a failed check on the previous round without losing ground.

**Patches's rolls:** She averages a +7 on Acrobatics and succeeds on roughly 3 out of every 4 checks. The DM should roll for her each round to keep the race dynamic and unpredictable.

**Hazards (one per round, DM's choice):**

- **Round 2 — Loose tiles:** DC 12 Dexterity save or slide backward (lose 1 success).
- **Round 3 — Laundry line:** DC 11 Acrobatics to duck under or DC 13 Athletics to barrel through. Failure costs a round but no lost success.
- **Round 4 — Startled pigeons:** DC 10 Wisdom save or be blinded for the round (disadvantage on next check).

**The hidden alcove (DC 15 Perception):** During the race, a runner who succeeds on a DC 15 Perception check notices something unusual — a hidden alcove in the side of a chimney stack, concealed behind a loose brick. Inside is a small obsidian mirror, oval, about the size of a hand, set in a tarnished silver frame. It is cool to the touch and faintly hums.

- **DC 15 Arcana:** The mirror is a one-way scrying focus. Someone has been using it to observe the Merchants' Quarter from this vantage point. It is worth 150 gp to an arcane collector.
- **DC 18 Arcana:** The enchantment is old but recently reactivated. The scrying target was set to observe the Goldsmiths' Guild hall — someone has been watching Selene Auris.

The mirror is not connected to Sorn directly, but it is one of several surveillance tools his network uses. If the party mentions it to Wick, he is fascinated and alarmed — it corroborates his theory about widespread magical activity in the city.

**Stopping to investigate costs the race** unless the runner has a significant lead (3+ successes ahead of Patches). Otherwise, investigating the alcove takes one round and Patches gains a free success.

**Regardless of outcome:** Patches is breathless and grinning at the finish. If she wins: "Better luck next time, slowpoke." If she loses: "All right, all right, you're fast. I'll give you that. Buy me a drink and I'll forgive you."

Connected to:

- A1: The festival grounds (below).
- The clock tower: The finish line.

## A5. The Negotiation Contest

A raised wooden stage near the pavilion, set up like a courtroom. Two chairs face each other across a small table. The crowd gathers to watch what is essentially a public debate — two negotiators are given a scenario and must argue their position. A panel of three judges scores each round.

> Selene Auris herself steps forward to explain the rules. "Each team sends one representative. You will be given a scenario — a trade dispute, a contract negotiation, a diplomatic incident. You must argue your position. The judges will score you on persuasiveness, creativity, and composure. Three rounds. Highest total score wins." She smiles, cool and appraising. "Words are the sharpest weapons in Ashenmere. Show us yours."

The party's negotiator faces Dren in the first round (he is surprisingly decent), Sylva in the second (calm and precise), and — as a twist — a late entrant in the third round: a smooth-talking merchant named Cassius Vane [CASSIUS], who was not part of the Valiant Company but registered independently.

**Round 1 — The Trade Dispute:**

> "A merchant ship arrives carrying a cargo of healing potions during a plague. The captain demands triple the normal price. You represent the city. Convince the captain to lower the price — or justify paying it."

- **DC 13 Persuasion:** A solid argument for a fair price.
- **DC 15 Persuasion:** A compelling argument that also addresses the captain's costs and risks.
- **Alternative — DC 13 Intimidation:** Threaten trade sanctions. Works, but the judges dock points for crudeness (counts as a success but no bonus).
- **Alternative — DC 12 Insight then DC 11 Persuasion:** Read Dren's argument first, then counter it directly. Effective combination.

**Round 2 — The Diplomatic Incident:**

> "Two allied cities share a river. One has dammed the river upstream, reducing flow to the other. You represent the downstream city. Resolve the dispute without war."

- **DC 14 Persuasion:** A reasonable compromise — shared water rights, seasonal agreements.
- **DC 12 Deception:** Bluff about military strength to gain leverage. The judges look impressed but Sylva sees through it — contested Insight (+6) vs the player's Deception.
- **Alternative — DC 13 History or Nature:** Cite a historical precedent or ecological argument. Grants advantage on the Persuasion check.

**Round 3 — The Contract Negotiation:**

> "A powerful noble offers your adventuring company a lucrative contract — but the terms include a clause granting the noble ownership of anything you discover. Negotiate better terms."

Cassius Vane is the opponent here. He is slick, well-dressed, and unnervingly good at this.

- **DC 15 Persuasion:** Match Cassius's silver tongue with a strong counter-argument.
- **DC 14 Insight:** Detect that Cassius is using rehearsed arguments — he's been coached. This grants advantage on the next Persuasion check.
- **DC 16 Perception or DC 14 Arcana:** Notice that Cassius is wearing a small amulet beneath his collar that pulses faintly when he speaks. He is being magically enhanced.

**The Cheater:** Cassius Vane is cheating. He wears a charm amulet [CHARM_AMULET] hidden beneath his shirt that casts a subtle *Charm Person* effect on the judges — not full domination, just a gentle nudge that makes them favour his arguments. This is the quest's key plot moment.

**Detecting the cheating:**

- **DC 16 Perception:** Notice the amulet glowing beneath his collar when he makes a particularly persuasive point.
- **DC 14 Arcana:** Detect the faint enchantment aura around Cassius and the judges.
- **DC 13 Insight:** Something is off about the judges — they nod along with Cassius's arguments even when those arguments are weak.
- **If Wick is watching (and the party befriended him):** Wick notices independently after round 3 and tugs on the nearest party member's sleeve. "That man — there's enchantment magic on him. On the judges too. Someone's cheating."

**Calling out the cheater:** If the party raises the alarm — either to the referee, the judges, or publicly — the following happens:

1. The judges are checked by Penna Quill (the riddle master, who knows *Detect Magic*). She confirms enchantment magic.
2. Cassius is searched. The charm amulet is confiscated.
3. Cassius panics. He claims he found the amulet and didn't know what it did. A DC 14 Insight check reveals he is lying — he knew exactly what he was doing but won't say who gave it to him.
4. **DC 16 Intimidation or DC 18 Persuasion:** Cassius admits a "patron" gave him the amulet and told him to win the negotiation contest at all costs. He never met the patron face-to-face — the amulet was delivered to his room at the Silver Stag inn by a raven carrying a small leather pouch. Inside was the amulet and a note sealed in black wax with no sigil: *"Win, and greater opportunities will follow."* The use of an animal messenger suggests the patron has access to magic — another tool in Sorn's toolkit alongside dead drops and intermediaries.
5. Cassius is disqualified. The party wins the negotiation event by default (or by merit, if they were already ahead).

**The charm amulet:** This is a critical piece of evidence. A small silver disc on a chain, engraved with fine runes.

- **DC 14 Arcana:** The amulet radiates enchantment magic. It enhances the wearer's persuasiveness and subtly charms those nearby.
- **DC 18 Arcana:** The runes are Infernal. This is not standard arcane craftsmanship — it was made by or for a fiend. This is critical evidence that connects to Vara Inkwell's defence in Q9.

**If the party does not detect the cheating:** Cassius wins round 3, and the negotiation event is a draw or loss for the party. The amulet is not discovered during the trials. However, Wick mentions the enchantment to the party during the feast (A6), and the party can investigate afterward — Cassius is still at the Silver Stag inn for one more day before he flees the city.

**Sorn's reaction to the cheating revelation:** He stands, applauds slowly, and addresses the crowd from the pavilion.

> "How disappointing. The Guild Trials are a celebration of honest merit. I will personally ensure this matter is investigated." He turns to the party with a warm, approving smile. "And my thanks to these sharp-eyed competitors for their vigilance. Ashenmere needs more citizens like you."

A DC 15 Insight check detects the faintest flicker of annoyance behind the smile. Sorn did not expect the amulet to be found. He recovers instantly.

Connected to:

- A1: The festival grounds.
- A6: The feast, after the trials conclude.

```yaml
npcs:
  - id: CASSIUS
    name: Cassius Vane
    type: Human Noble
    description: A handsome man in his thirties with oiled dark hair, a neatly trimmed goatee, and an expensive blue velvet doublet. He smiles too easily and speaks too smoothly. He is a minor merchant's son with ambitions far above his station — ambitions that led him to accept a mysterious patron's offer of magical assistance. He wears a charm amulet hidden beneath his collar.
    abilityScores:
      str: 10
      dex: 12
      con: 10
      int: 13
      wis: 9
      cha: 16
    ac: 11
    maxHp: 9
    speed: 30
    skills:
      - persuasion
      - deception
  - id: CHARM_AMULET
    name: Charm Amulet
    type: Wondrous Item (uncommon)
    description: A small silver disc on a fine chain, engraved with delicate runes that pulse faintly when the wearer speaks. It radiates enchantment magic. When worn, it enhances the wearer's persuasiveness and subtly charms humanoids within 10 feet, inclining them to agree with the wearer. The runes are Infernal in origin — a DC 18 Arcana check identifies them as fiendish craftsmanship. This is the same type of amulet Sorn uses throughout his network of influence.
```

## A6. The Feast

After the four trials conclude, the crowd moves inside the Goldsmiths' Guild hall for a feast. Long tables groan with roasted meats, fresh bread, candied fruits, and casks of Ashenmere gold ale. The five guild leaders mingle with competitors and citizens. This is the party's chance to speak with anyone they haven't spoken to yet.

> The Goldsmiths' Guild hall is a grand chamber of polished marble and gold leaf, lit by a hundred candles in iron chandeliers. Long tables fill the floor, laden with food and drink. The guild leaders have descended from their pavilion and move among the crowd — some more willingly than others. Brokka is at the ale cask. Harsk is sitting quietly with a plate of cheese. Maren is talking to a group of weavers. Lady Thornwall is holding court near the fireplace. Selene Auris stands beside Vaelith Sorn, who is surrounded by admirers.

**Speaking with Brokka:** She is blunt and pleased (if the party completed Q1) or curious (if they haven't). She congratulates them on their performance and offers practical advice.

> "Not bad out there. You've got grit. Listen — Ashenmere rewards people who make themselves useful. Keep showing up, keep earning trust, and doors'll open." She lowers her voice. "And keep your eyes open around Sorn. I don't trust a man who smiles that much."

If the party won the combat tourney, Brokka presents them with a gift: a *Potion of Water Breathing*. "Might come in handy. The river's deeper than it looks."

**Speaking with Harsk:** The elderly dwarf is cautious and noncommittal, but polite. He congratulates the party if they performed well.

> "Hmm. Competent. That's rare enough in this city." He takes a slow bite of cheese. "I've been on this council forty years. I've seen ambitious men come and go. Sorn's the latest. He might last; he might not." He shrugs. "I'll wait and see."

If the party won the riddle challenge: Harsk is more impressed than expected. He presents a gift — a masterwork leather belt with a brass buckle shaped like a hammer. "For the clever one. Brains matter more than blades in this city." (Worth 25 gp.)

**Speaking with Maren:** She is reserved but warms quickly if the party has allied with her in Q2.

> "You did well today. People noticed." She glances toward Sorn. "He noticed too. Be careful."

She has no gift but offers information: "The Trials used to be an honest contest. This year, Sorn insisted on presiding. He's making everything in this city about himself."

**Speaking with Lady Thornwall:** She is polite, distant, and visibly uncomfortable if the conversation turns to Sorn.

> "A lovely event, isn't it? Selene has outdone herself." Her smile tightens when Sorn's name is mentioned. "Councillor Sorn has been a... transformative addition to our council. Ashenmere is fortunate."

A DC 14 Insight check detects that she is deeply unhappy — her praise of Sorn sounds rehearsed and hollow.

**Speaking with Selene Auris:** She is gracious, sharp, and genuinely charming. She congratulates the party warmly — especially if they won the negotiation contest.

> "Impressive. You have a talent for persuasion — a valuable commodity in this city." She offers a handshake. Her grip is firm. "I am always looking for capable associates. If you find yourselves in need of work, the Goldsmiths' Guild door is open."

If the party won the overall trials, Selene presents a gift: a gold-inlaid compass in a velvet-lined box. "For champions who know which direction they're heading." (Worth 75 gp. The compass is mundane but finely crafted.)

**Selene and Sorn:** At some point during the feast, the party witnesses Selene and Sorn sharing a private toast near the fireplace. Selene raises her glass to him; he touches his glass to hers with a smile. They appear to be genuine allies — comfortable, mutually respectful, even fond of each other.

> Selene lifts her goblet toward Sorn. "To another successful Trials. And to the prosperity of Ashenmere." Sorn clinks his glass against hers. "To prosperity," he echoes, with a smile that could melt gold. "And to those wise enough to recognise it."

A DC 14 Insight check on this exchange: Selene is sincere. She genuinely admires Sorn and believes their alliance benefits her guild. Sorn's warmth is calculated — he values Selene as a political asset, not a friend.

**Speaking with Vaelith Sorn:** If the party approaches him directly, Sorn is courteous, charming, and subtly dismissive. He treats them as minor figures — interesting for their performance today, but not important.

> "Ah — the competitors. Well done today. Ashenmere thrives when its citizens push themselves to excel." He studies the party with pale amber eyes. "Tell me — what brings you to our city? Adventurers usually pass through. Few stay."

He listens to their answer with polite interest. If the party mentions the docks (Q1), the funeral (Q2), or any investigation, he raises an eyebrow.

> "Civic-minded adventurers. How refreshing." A pause. "Do be careful, though. Ashenmere's politics are... labyrinthine. It would be a shame if well-meaning outsiders stumbled into something they didn't understand."

- **DC 16 Insight:** This is a veiled warning. Sorn is measuring them — not threatening, not yet, but making clear he is aware of them.
- **DC 18 Insight:** Behind the charm, there is something cold. Not anger — contempt. Sorn does not consider the party a threat. He considers them beneath notice.

Sorn does not linger. He excuses himself gracefully after a minute of conversation and returns to the crowd.

Connected to:

- A1: The festival grounds (outside).
- The Goldsmiths' Guild: The party can return here later for further dealings with Selene.

---

## After the Trials

The Guild Trials conclude at sundown. The crowd disperses. Results are announced from the pavilion — the team with the most event victories is declared the Guild Champion.

**If the party won the overall trials (2 or more events):** Selene Auris drapes the **Guild Champion's Medallion** around the neck of the party's designated leader. The crowd cheers. Sorn applauds politely. Brokka whistles.

> Selene places a heavy gold medallion on a crimson ribbon around your neck. The medallion bears the sigils of all five guilds arranged in a circle. "The Guild Champion's Medallion," she announces to the crowd. "Worn by those who have proven their worth before the Council of Guilds. May it open doors for you — as it was meant to."

**If the party tied or lost:** The Valiant Company win and Dren accepts the medallion with exaggerated humility. However, the party's strong showing still earns respect — Brokka, Harsk, and Selene each still offer their individual gifts if the party won those specific events.

### Wick's Notes

After the trials, if the party befriended Wick (through conversation in A1, the riddle challenge in A3, or any Arcana-related interaction), he seeks them out privately.

> The gnome wizard pulls you aside near the ale cask, glancing around nervously. "Listen — I wasn't going to say anything, but you seem like the sort who'd take this seriously." He pulls a battered notebook from his satchel. "I've been detecting a background magical resonance all across the city. Low-level, persistent, and definitely Infernal. It's like someone threaded enchantment magic through the foundations of Ashenmere." He pushes his spectacles up his nose. "I don't know what it is, but it's not natural, and it scares me."

Wick offers to copy his notes for the party. His notes contain:

- Detailed arcane readings from twelve locations across Ashenmere, mapping the resonance.
- Analysis identifying the magic as Infernal in origin — specifically linked to enchantment and divination schools.
- A theory that the resonance is being generated by multiple small sources (like amulets or focus objects) rather than one large one.

**Mechanical benefit:** A character carrying Wick's notes gains **advantage on Arcana checks to detect Sorn's magic** throughout Act II. This applies to detecting charm amulets, scrying devices, enchanted agents, and the background Infernal resonance itself.

Wick also says: "We're leaving Ashenmere in a few days. We've got work up north. But if you ever need us — Dren will come running. He likes a good fight." This plants the seed for recruiting the Valiant Company in Q15.

### The Charm Amulet

If the party recovered the charm amulet from Cassius (A5), they now possess a critical piece of evidence. The amulet should be examined carefully:

- **DC 14 Arcana (already known from A5):** Enchantment magic. Enhances persuasion and charms those nearby.
- **DC 18 Arcana (already known from A5):** Infernal runes. Fiendish craftsmanship.
- **If shown to Wick:** He confirms the amulet matches the Infernal resonance signature he has been detecting. "This is one of them. One of the sources. There are more — maybe dozens — scattered through the city."
- **If shown to Brokka:** She is alarmed. "Enchantment magic? In the Guild Trials? Someone's playing a dangerous game."
- **If shown to Maren:** Her eyes narrow. "Keep it safe. If this is part of something larger, we'll need proof."

The amulet becomes critical evidence in Q9, where it helps prove that Vara Inkwell was framed using the same type of enchantment magic.

Connected to:

- A1: The festival grounds.
- The Goldsmiths' Guild: Selene's domain, available for future visits.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| Guild Champion's Medallion | Selene (quest reward, if party wins overall) | Gold, worth 100 gp; grants advantage on Persuasion checks with guild members |
| *Potion of Water Breathing* | Brokka (gift, if party won combat tourney) | Brokka's personal gift |
| Masterwork leather belt | Harsk (gift, if party won riddle challenge) | Worth 25 gp |
| Gold-inlaid compass | Selene (gift, if party won negotiation contest) | Worth 75 gp; mundane but finely crafted |
| Charm amulet | Cassius Vane (confiscated) | Enchantment magic; DC 18 Arcana reveals Infernal runes; critical evidence for Q9 |
| Obsidian scrying mirror | Hidden alcove during rooftop race (DC 15 Perception) | Worth 150 gp; DC 15 Arcana identifies as one-way scrying focus |
| Wick's arcane notes | Wick (gift, if befriended) | Advantage on Arcana checks to detect Sorn's magic throughout Act II |
| Contacts with all five guild leaders | Social interactions at the feast | Relationship-building; no mechanical reward |

## Quest Connections

- **From Quest 1/Quest 2:** Brokka or Maren suggest entering the Guild Trials. If the party completed Q1, Brokka publicly vouches for them at the registration, and her gift is offered without hesitation.
- **To Quest 5:** Wick's arcane notes on the Infernal resonance provide advantage on Arcana checks to detect Sorn's magic, including the night hag's enchantments in the Silent Ward.
- **To Quest 9:** The charm amulet is critical evidence for Vara Inkwell's defence. It proves that enchantment magic of Infernal origin is being used in Ashenmere — the same magic used to frame Vara. Without it, the party must find alternative proof (harder DCs).
- **To Quest 15:** The Valiant Company can be recruited as allies for the final assault. If the party befriended them here, Dren agrees immediately. If the party never met them (quest skipped), recruiting requires a DC 16 Persuasion check and a favour.
- **If skipped:** The party never meets the Valiant Company or Selene Auris in a social setting. Recruiting either later requires harder Persuasion checks (DC 16+ instead of DC 10-12). Wick's notes are unavailable, removing the Arcana advantage in Act II. The charm amulet is never discovered during the trials — it must be found through other means in Q9 (harder investigation).
