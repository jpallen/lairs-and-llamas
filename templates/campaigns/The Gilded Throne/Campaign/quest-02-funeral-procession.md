# Quest 2: The Funeral Procession

**Level:** 2 | **Type:** Story | **Style:** Street chase/Combat

During Guildmaster Thera Loomwright's public funeral, a gang of thugs attacks the procession, targeting Thera's grieving daughter Maren. The party must protect the mourners and pursue the attackers through the city streets. The encounter splits into two phases — a sudden ambush at the procession, and a running chase through Ashenmere's narrow lanes that ends in a cornered fight with the gang's leader.

This quest introduces Maren Loomwright as an ally and patron, gives the party its first glimpse of Brother Aldous, and deepens the mystery around Thera's death.

---

The funeral procession for Guildmaster Thera Loomwright winds through the streets of Ashenmere under a grey sky. Dozens of mourners walk behind a flower-draped bier carried by four guildsmen. Black banners hang from the shopfronts along the route. Maren Loomwright, Thera's daughter, walks at the head of the procession in a dark dress, her jaw set and her eyes red. An aging cleric in white and blue robes — Brother Aldous — walks beside the bier, murmuring prayers. The crowd lining the street is respectful, heads bowed, hats removed. The only sounds are the shuffling of feet, the low chanting, and the distant toll of the temple bell.

## A1. The Procession Route — Guild Street

A wide avenue lined with guild halls and merchant offices. Black bunting hangs from the upper windows. The procession moves slowly south along Guild Street toward the Temple of Tyr in the Old Quarter. Mourners fill the street — guild members in their formal sashes, merchants, dock workers, and common folk. The party is among them, invited by Brokka Ironjaw after the events at the docks.

> The procession stretches the length of the block. Brokka Ironjaw walks near the front, her expression hard. She nods to you as you fall in among the mourners. Ahead, Maren Loomwright steadies herself against the arm of a guild elder. The bier passes — a simple oak casket draped in white linen and yellow wildflowers. The old cleric beside it — Brother Aldous — pauses his prayer long enough to look out over the crowd with tired, knowing eyes. Then he turns back to the bier and resumes his murmured rites.

**Brother Aldous:** The party catches only a brief glimpse of the aging cleric. He is thin, grey-haired, wearing faded vestments of Tyr — blue and white with a balanced scale embroidered on the chest. He does not interact with the party during the procession. He is focused entirely on the funeral rites. If a character tries to approach him now, a guild elder gently waves them off: "Please — let him finish the blessing."

**Brokka's introduction:** If the party is here because of Brokka, she says quietly: "Thera was the best of us. Someone should be watching the crowd — funerals draw vultures." She gestures vaguely at the rooftops. This is both flavour and a hint — a DC 14 Perception check at this point spots a figure on a rooftop two buildings ahead, watching the procession through a spyglass. The figure ducks out of sight if spotted. (This is the spotter — see A3 and "Hidden Find" in Rewards.)

**The crowd:** A mix of genuine mourners and curious onlookers. Several city watch guards are posted at intersections, but they are spread thin. A DC 12 Perception check notices three rough-looking figures [THUG1] [THUG2] [THUG3] in the crowd ahead, near the mouth of Chandler's Lane — they are watching Maren, not the bier.

Connected to:

- A2: Chandler's Lane, where the ambush occurs, branches east off Guild Street just ahead.
- A3: The rooftops along the route, where the spotter is posted.

```yaml
npcs:
  - id: MAREN
    name: Maren Loomwright
    type: Human Noble
    description: A young woman in her mid-twenties with dark hair pulled back sharply and her mother's sharp cheekbones. She wears a plain black dress and no jewellery. Her eyes are red from crying but her expression is fierce — grief and fury in equal measure. She is Thera Loomwright's only daughter and has inherited her mother's seat on the Weavers' Guild council, though she has no political experience. She carries herself with a dignity that dares anyone to test her.
    abilityScores:
      str: 10
      dex: 12
      con: 11
      int: 14
      wis: 13
      cha: 15
    ac: 12
    maxHp: 9
    speed: 30
    skills:
      - persuasion
      - insight
      - history
  - id: ALDOUS
    name: Brother Aldous
    type: Human Priest
    description: An aging cleric of Tyr with thin grey hair, deep-set eyes, and hands that tremble slightly as he performs the funeral rites. He wears faded blue-and-white vestments and carries a wooden holy symbol of a balanced scale. His voice is quiet but carries a calm authority. He has served the small Temple of Tyr in the Old Quarter for over thirty years.
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
      - medicine
      - religion
      - insight
```

## A2. The Ambush — Chandler's Lane

As the procession passes the mouth of Chandler's Lane — a narrow side street crowded with candle shops and soap-makers — three thugs burst from the crowd and charge directly toward Maren. The attack is sudden, brutal, and clearly targeted.

> A woman screams. Three men shove through the mourners, drawing clubs and short swords. One of them bellows, "The Loomwright girl! Grab her!" They crash into the procession like a wave, knocking mourners aside. The bier lurches — the guild bearers stumble — and suddenly the street is chaos. Maren stumbles backward, eyes wide, as the nearest thug reaches for her arm.

**Phase 1: Protect the Procession.** 3 thugs [THUG1] [THUG2] [THUG3] attack. Their goal is to seize Maren and drag her into Chandler's Lane. They are not trying to kill her — their orders are to "make an example" of her, which means a public beating. They will attack anyone who gets in their way.

**Round-by-round:**

- **Round 1:** The thugs push through the crowd toward Maren. THUG1 tries to grab Maren (contested Athletics vs. her Athletics or Acrobatics). THUG2 and THUG3 attack anyone who intervenes. Mourners scatter in all directions, screaming.
- **Round 2:** If THUG1 has Maren, he drags her toward the alley. If not, all three thugs attack the party. Brokka wades in from behind and engages THUG3, grappling him to the ground — she takes him out of the fight within 2 rounds.
- **Round 3+:** The thugs fight until one is downed, then the surviving thugs break and run east down Chandler's Lane. If all three are downed, skip to "After the Fight."

**Brokka's behaviour:** She joins the fight at the start of round 2, targeting THUG3. She effectively removes THUG3 from the encounter, meaning the party fights THUG1 and THUG2 directly.

**Maren's behaviour:** She is not a combatant. She will dodge, duck behind the party, and use the Help action if a character is adjacent to her. If grabbed, she fights back with a DC 10 Athletics check each round to break free. She does not panic — she is terrified but refuses to scream or beg.

**City watch:** Two guards arrive at the end of round 3. They are too late to help with the fight but will secure the scene and tend to injured mourners.

**Brother Aldous:** When the attack begins, Aldous shields the bier with his body and casts *Shield of Faith* on the nearest mourner. He does not enter combat. After the fight, he tends to the wounded with *Cure Wounds* and then quietly withdraws toward the Temple of Tyr.

**If the thugs flee:** They run east down Chandler's Lane toward Coppersmith Row. A chase begins — see A3.

Connected to:

- A1: Guild Street behind the party.
- A3: Chandler's Lane to the east — the chase route.

```yaml
npcs:
  - id: THUG1
    type: Thug
    description: A heavyset man with a broken nose and a short sword. He is the one who goes for Maren directly.
  - id: THUG2
    type: Thug
    description: A lean, scarred man with a club and a mean grin. He targets whoever gets between THUG1 and Maren.
  - id: THUG3
    type: Thug
    description: A broad-shouldered thug with a short sword and a leather jerkin. He is grabbed by Brokka in round 2 and effectively removed from the fight.
```

## A3. The Chase — Chandler's Lane to Coppersmith Row

When the surviving thugs flee, they run east through Chandler's Lane — a narrow street barely wide enough for a cart, lined with shuttered shop fronts and hanging signboards. They are heading toward their leader, the bandit captain, who is waiting with one more thug at the far end of Coppersmith Row.

> The thugs bolt down the alley, knocking over a rack of tallow candles and shoving a soap-maker's cart into your path. Chandler's Lane is narrow and cluttered — barrels, crates, and washing lines overhead. Ahead, the lane opens into Coppersmith Row, a wider street of metalworkers' shops. You can hear the thugs' boots pounding on the cobblestones.

**Chase mechanics:** Run this as a skill challenge. The fleeing thugs need 3 successes to reach the bandit captain with enough lead to set up an ambush. The party needs 3 successes to catch them before they reach Coppersmith Row. Each round, one party member can attempt a check. The obstacles are specific to the chaos of the disrupted funeral:

- **Obstacle — the panicking mourners:** DC 13 Persuasion to part the crowd ("Move! City watch business!") OR DC 14 Athletics to shove through. Shoving damages the party's reputation with bystanders — witnesses remember, and word reaches the guild halls. (Future Persuasion checks with Ashenmere commoners are at disadvantage for 1 week.)
- **Obstacle — the toppled bier:** The funeral bier has fallen, blocking the lane with the casket and scattered flowers. DC 12 Acrobatics to vault it, or DC 10 Athletics to shove it aside — but shoving desecrates the funeral, and witnesses remember. Brother Aldous hears of it, and the party must explain themselves at the temple.
- **Obstacle — a child in the path:** A child has stumbled into the lane ahead of the fleeing thugs. DC 12 Athletics to grab the child and pull them clear. On failure, the thugs use the child as a momentary shield — ranged attacks have disadvantage for 1 round.
- **Any ranged attack (AC 13):** A hit trips a fleeing thug (counts as one party success). Non-lethal damage is possible.

**Creative solutions:** If a player suggests cutting through a building, using magic to block the alley, or anything inventive — adjudicate it as a DC 12-14 check of the appropriate ability.

**If the party wins the chase (3 successes first):** They catch the fleeing thugs before they reach Coppersmith Row. The thugs surrender immediately — without their captain, they have no fight left. The party can then approach Coppersmith Row on their own terms (see A4).

**If the thugs win the chase (3 successes first):** The thugs reach the bandit captain and warn him. When the party arrives at Coppersmith Row (A4), the captain and his remaining thug are ready — they get a surprise round.

**The rooftop spotter:** Along the chase route, the rooftops on the south side of Chandler's Lane hold a spotter's nest. A DC 15 Perception check during the chase (or afterwards, if the party searches) reveals a small platform hidden behind a chimney stack with a canvas tarp, a spyglass (worth 100 gp), and a hand-drawn map of Maren's daily movements — where she walks, where she shops, what time she visits the guild hall. Someone has been watching her for weeks. There is no one here now — the spotter fled when the ambush began.

Connected to:

- A2: Chandler's Lane behind the party.
- A4: Coppersmith Row at the end of the chase.

## A4. The Cornered Fight — Coppersmith Row

Coppersmith Row is a short, dead-end street that terminates at the base of the old city wall. Metalworkers' shops line both sides, their forges cold and shuttered for the funeral. At the far end, a bandit captain and one remaining thug stand with their backs to a locked gate in the city wall. They have nowhere to run.

> The alley opens into a short, quiet street. Hammered copper signs hang above dark shop fronts. At the far end, the city wall rises — old grey stone, thirty feet high, with a rusted iron gate chained shut. A man in a studded leather coat stands in front of the gate, a fine dagger in one hand and a short sword in the other. Beside him, one last thug shifts nervously, club raised. The man in the coat looks at you without surprise. "So. They sent heroes." He spits. "Doesn't matter. The message has been delivered."

**Phase 2: The Bandit Captain.** 1 bandit captain [CAPTAIN] and 1 thug [THUG4]. The captain fights confidently — he is a professional, not a street tough. He uses Multiattack (two weapon attacks per turn) and positions himself to use the thug as a screen.

**The captain's behaviour:** He fights to the death. He knows too much about his employer to risk being taken alive — or rather, he believes his employer will have him killed if he's captured, so he might as well die fighting. If reduced to half HP, he snarls: "You think this ends here? There's bigger things moving in this city than you can imagine." He fights more recklessly after this point, taking the Attack action every round with no regard for defence.

**THUG4's behaviour:** The remaining thug is terrified. He fights while the captain is standing, but if the captain drops to 0 HP, THUG4 immediately throws down his weapon and surrenders. "I give up! I give up! I don't even know what this is about!"

**Terrain:** The street is narrow (15 feet wide) and 60 feet long. The locked gate behind the captain cannot be opened without the key (which no one present has) or a DC 18 Strength check. The shop fronts on either side have heavy wooden shutters (AC 15, 10 HP) that can be broken open, but the shops are empty — the metalworkers are at the funeral.

**If the party captures the captain alive:** This is possible but requires subduing him — he does not surrender. If knocked to 0 HP with a non-lethal blow, he can be stabilised and interrogated. See "Interrogating the Captain" below.

Connected to:

- A3: Chandler's Lane behind the party.

```yaml
npcs:
  - id: CAPTAIN
    name: Bandit Captain
    type: Bandit Captain
    description: A hard-faced man in his thirties with a close-cropped beard, a scar across his left cheek, and cold, professional eyes. He wears a studded leather coat over a dark shirt and carries a fine dagger in one hand and a short sword in the other. His coin purse is heavy with Calishite gold, and he carries a sealed letter in his coat pocket. He moves like a soldier — trained, disciplined, and unafraid.
    abilityScores:
      str: 15
      dex: 16
      con: 14
      int: 14
      wis: 11
      cha: 14
    ac: 15
    maxHp: 65
    speed: 30
    skills:
      - athletics
      - deception
  - id: THUG4
    type: Thug
    description: A nervous young man with a club and a leather cap. He is clearly out of his depth and will surrender the moment the captain falls.
```

---

## After the Fight

When combat is resolved, the immediate aftermath unfolds at Coppersmith Row. Maren Loomwright arrives minutes later, escorted by Brokka and two city watch guards. She is shaken but composed.

> Maren stops at the edge of Coppersmith Row and looks at the fallen captain, then at you. Her hands are trembling, but her voice is steady. "They came for me. At my mother's funeral." She pauses. "Who sent them?"

**Maren's reaction:** She is grateful, furious, and frightened in equal measure. She does not cry. She studies the captain's face, the Calishite coin, the sealed letter. Then she looks at the party and makes a decision.

> "My mother built the Weavers' Guild from nothing. She sat on the Council of Guilds for twelve years. And now someone sends thugs to beat her daughter in the street during her funeral." She straightens. "I have her council seat now. I don't know what I'm doing — I'm a weaver, not a politician. But I know I need people I can trust." She looks at each of you in turn. "I can pay. And I can give you something more useful than coin."

Maren offers the party:

- **50 gp** for saving her life.
- **Her mother's Cloak of Protection** (+1 AC and saving throws) — a family heirloom. She removes it from a satchel she carries and holds it out. "My mother wore this for twenty years. She'd want it used against whoever did this to her. Take it."

### The Captain's Belongings

Searching the bandit captain reveals:

- A **+1 dagger** — finely made, with a leather-wrapped grip and no maker's mark.
- **30 gp in Calishite coin** — the same rare foreign currency found on the bandits in Quest 1. The coins are heavy gold crescents stamped with a sun and a sailing ship.
- A **sealed letter** on expensive parchment. The seal is plain — no sigil or crest. The parchment carries a faint perfume — floral, expensive, distinctive. The letter reads:

> *Make an example of the Loomwright girl. The funeral procession offers the ideal opportunity — public, visible, unmistakable. She must learn that her mother's seat carries consequences. Do not kill her. A beating will suffice. Destroy this letter when read.*

The letter is unsigned. A DC 13 Investigation check notes the parchment quality — this is not street-level correspondence. The writer is wealthy. A DC 15 Investigation check identifies the perfume as Calishite rosewater, an expensive import. (This same scent is found at Thornwall Manor in Quest 8.)

### Interrogating the Captain

If captured alive (subdued with non-lethal damage), the captain is sullen and uncooperative, but fear loosens his tongue.

- **DC 12 Intimidation:** He admits his gang was hired through a dead drop — a sealed envelope left at the Rusty Nail tavern with half the payment up front and instructions. He has never met the person who hired them.
- **DC 14 Intimidation:** He reveals his gang has been camped in an abandoned mill outside the city walls, along the east road. He gives the location. (Raiding the mill yields 80 gp, a cask of Calishite wine worth 25 gp, and a Scroll of Detect Magic.)
- **DC 16 Insight:** The captain is more afraid of his employer than he is of the party. He believes — correctly — that he will be killed if he talks. If confronted with this, he says: "You don't understand what you're dealing with. There are people in this city who can reach anyone, anywhere. Even in a cell."

If turned over to the city watch, the captain is found dead in his cell two days later — a "seizure," according to the watch. If the party investigates, a DC 14 Medicine check reveals poison. Someone silenced him.

### Interrogating the Thugs

Any surviving thugs (including THUG4) know very little.

- They were hired at the Rusty Nail by the captain. They don't know his real name — he called himself "Graves."
- They were paid 10 gp each, in Calishite coin. They thought it was just a street job — rough up a merchant's daughter, send a message. They didn't know about any guild politics.
- If asked about the Calishite coin: "Yeah, funny money, isn't it? Captain always had it. Said he had a patron with foreign connections."

### Maren's Confidence

After the immediate crisis, if the party spends a few minutes talking with Maren, she confides something she has told no one else.

> She glances around to make sure no one else is listening, then lowers her voice. "I don't believe my mother died of a fever. She was strong — stronger than anyone I know. Three weeks ago she was fine. Then she got sick overnight and was dead within a day." She shakes her head. "The healers said it was natural. I don't believe it."

- A DC 10 Insight check confirms she is being completely honest. She genuinely suspects foul play but has no evidence.
- If the party mentions fiendish magic, alchemy, or poison, Maren's eyes widen. "You know something. Tell me — please."
- Maren also mentions: "There have been strange goings-on in the Tanners' Quarter lately. People hearing noises at night, odd smells. My mother was asking questions about it before she died. I don't know if it's connected, but..." She trails off. (This connects directly to Quest 3.)

### Visiting Brother Aldous

If the party visits the Temple of Tyr in the Old Quarter after the funeral, they find Brother Aldous alone, tidying the small chapel. He is subdued and thoughtful.

> The Temple of Tyr is a modest stone building in the Old Quarter — a single room with wooden pews, a stone altar, and a faded tapestry of the Maimed God behind it. Brother Aldous is sweeping the floor. He looks up as you enter and sets the broom aside. "I wondered if you might come."

Aldous is cautious but honest. He speaks slowly and deliberately.

- **Without prompting:** "I performed the last rites for Guildmaster Thera. She was a good woman. The city is poorer for her passing." He pauses. "The attack on her daughter today was... troubling."
- **DC 10 Persuasion (or simply asking directly):** Aldous admits he sensed something during the funeral rites. "When I blessed the body, I felt... a wrongness. A faint trace of something I have not encountered in many years." He meets the party's eyes. "Fiendish magic. Very faint — almost gone. But it was there. I cannot be certain it was the cause of her death, but..." He shakes his head. "I am an old man. Perhaps my senses are failing."
- **DC 13 Insight:** Aldous is not uncertain at all. He is almost sure fiendish magic was involved in Thera's death, but he is afraid — not for himself, but of what the implications mean for the city. He does not want to cause a panic by making accusations he cannot prove.
- **If the party mentions the Calishite coin, the perfumed letter, or the serpent sigil (from Quest 1):** Aldous's expression darkens. "You are uncovering something dangerous. Be careful. Whoever is behind this has resources, patience, and no regard for innocent life." He offers to identify any magical items the party has found, free of charge.

Aldous will not join the party or leave his temple. He offers healing (*Cure Wounds*, *Lesser Restoration*) to the party at no cost, and says they are welcome at the temple any time.

Connected to:

- A1: Guild Street, the procession route.
- The Temple of Tyr in the Old Quarter: Where Brother Aldous can be found.
- The abandoned mill outside the city walls: If the captain reveals the location.

```yaml
npcs:
  - id: MAREN
    name: Maren Loomwright
    type: Human Noble
    description: A young woman in her mid-twenties with dark hair pulled back sharply and her mother's sharp cheekbones. She wears a plain black dress and no jewellery. Her eyes are red from crying but her expression is fierce — grief and fury in equal measure. She is Thera Loomwright's only daughter and has inherited her mother's seat on the Weavers' Guild council, though she has no political experience.
  - id: ALDOUS
    name: Brother Aldous
    type: Human Priest
    description: An aging cleric of Tyr with thin grey hair, deep-set eyes, and hands that tremble slightly. He wears faded blue-and-white vestments and carries a wooden holy symbol of a balanced scale. He has served the small Temple of Tyr in the Old Quarter for over thirty years. He is kind, cautious, and deeply troubled by what he sensed during Thera's funeral rites.
```

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 50 gp | Maren (quest reward) | Paid immediately |
| *Cloak of Protection* (+1 AC and saves) | Maren (quest reward) | Family heirloom; attunement required |
| +1 dagger | Bandit captain (loot) | No maker's mark |
| 30 gp in Calishite coin | Bandit captain (loot) | Same foreign currency as Q1 |
| Sealed letter (perfumed parchment) | Bandit captain (loot) | Evidence; connects to Thornwall Manor (Q8) |
| Spyglass (worth 100 gp) | Spotter's nest (DC 15 Perception) | Hidden find; on rooftop along chase route |
| Hand-drawn map of Maren's movements | Spotter's nest (DC 15 Perception) | Hidden find; evidence of surveillance |
| 80 gp | Abandoned mill (captain interrogation DC 14) | Side opportunity |
| Cask of Calishite wine (worth 25 gp) | Abandoned mill (captain interrogation DC 14) | Side opportunity |
| *Scroll of Detect Magic* | Abandoned mill (captain interrogation DC 14) | Side opportunity |
| Healing and identification services | Brother Aldous | Ongoing benefit; free of charge |

## Quest Connections

- **From Quest 1:** Brokka Ironjaw invited the party to attend the funeral. The Calishite coin found on the bandit captain matches the foreign currency found on the spy and bandits in Quest 1, establishing a pattern.
- **To Quest 3:** Maren mentions strange goings-on in the Tanners' Quarter — noises at night, odd smells — and notes that her mother was asking questions about it before she died. This leads directly into the investigation of the hidden alchemical lab.
- **To Quest 8:** The perfumed letter carried by the bandit captain is written on expensive parchment with Calishite rosewater — the same distinctive scent found at Thornwall Manor. If the party keeps the letter, they can match the perfume immediately when they investigate the manor.
- **To Quest 10:** Brother Aldous becomes a critical plot resource later in the campaign. His detection of fiendish magic on Thera's body is the first concrete evidence of Sorn's methods, and his knowledge of fiendish lore will prove essential.
