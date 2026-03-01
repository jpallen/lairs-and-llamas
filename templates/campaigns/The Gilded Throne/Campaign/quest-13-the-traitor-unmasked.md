# Quest 13: The Traitor Unmasked

**Level:** 8 | **Type:** Reactive (cannot be avoided) | **Style:** Social deduction/Paranoia

A trusted resistance member is secretly a greater doppelganger feeding intelligence to Sorn. After a safehouse is raided and three resistance operatives are killed, the party must identify the traitor from among their closest allies before Sorn dismantles the resistance entirely.

This quest is built around social deduction and paranoia. The party investigates their own allies — comparing stories, testing for shapechangers, setting traps with false information, and watching for inconsistencies. It ends with a confrontation when the traitor attempts to assassinate Maren.

---

You are called to an emergency meeting at the Broken Compass, a cramped wine cellar beneath a chandler's shop that serves as the resistance's backup gathering point. The usual safehouse — the Candlemaker's on Sable Street — was raided two hours ago. City watch, backed by Sorn's enforcers, kicked in the doors at dawn. Three resistance members are dead. The cache of weapons and documents is seized. Everyone who survived is here, and the room is thick with fear and suspicion.

Maren stands at the head of a scarred oak table, her jaw tight. She looks exhausted.

> "They knew. They knew the safehouse, the watch schedule, the location of the weapons cache. Someone in this room told them."

## A1. The Broken Compass (Emergency Meeting)

A low-ceilinged wine cellar beneath a chandler's shop on Mill Lane. Barrels line the walls. A single oil lamp hangs from a beam, throwing unsteady shadows. The air smells of tallow and old wine. A narrow staircase leads up to the shop, and a bricked-over tunnel in the far wall connects to the old sewer network — the emergency exit.

Eight resistance members are present, seated or standing around the table. They are frightened, angry, and pointing fingers at each other. The party knows all of them.

**The suspects:**

1. **Tomas Greave** [TOMAS] — A former city watchman who defected to the resistance six months ago. Quiet, competent, always volunteers for dangerous runs. He was the one who established the Sable Street safehouse. Some members think it's suspicious that he wasn't there during the raid.
2. **Delia Ashworth** [DELIA] — A Merchants' Guild clerk who has been funnelling supply routes to the resistance. Nervous by nature, but her information has always been accurate. She arrived at the Broken Compass fifteen minutes before anyone else.
3. **Rook** [ROOK] — A street-smart halfling who runs messages between resistance cells. Brash, irreverent, fiercely loyal. He was at the safehouse during the raid and barely escaped through the sewers — he has a crossbow bolt wound in his shoulder to prove it.
4. **Callan Wight** [CALLAN] — A former sailor and the resistance's quartermaster, responsible for weapons and supplies. He has been with the resistance since the beginning. He is the greater doppelganger.

Callan Wight was replaced by the greater doppelganger three weeks ago. The real Callan is dead — his body is hidden in a collapsed section of the old sewer tunnels beneath the Tanners' Quarter. The doppelganger has been reading thoughts to maintain Callan's mannerisms perfectly. It passed along the safehouse location, the watch schedule, and the weapons cache using a system of coded chalk marks on a specific wall in the Merchants' Quarter — different symbols convey different messages (a circle means "intelligence ready for pickup," a triangle means "target confirmed," a cross means "abort"). Sorn's handler checks the wall daily and leaves coded responses.

> Maren addresses the room: "No one leaves this cellar until we figure out how this happened. I've trusted every one of you with my life. Now I need you to prove I wasn't wrong."

**If the party suggests testing for shapechangers immediately:** This is smart, and Maren agrees. However, the doppelganger is prepared — see "Testing for Shapechangers" below.

**If the party wants to investigate the raided safehouse first:** Maren nods. "Go. But take someone with you — I want eyes on everyone." She suggests the party pick one of the suspects to accompany them. This is an opportunity to observe the suspect's behaviour at the crime scene.

**If the party wants to question each suspect individually:** Maren clears a small storeroom off the main cellar for private interrogations. See "Interrogating the Suspects" below.

Connected to:

- A2: The raided safehouse on Sable Street, accessible through the streets or the sewer tunnels.
- A3: The chalk wall in the Merchants' Quarter, where the doppelganger leaves coded messages.
- A5: This cellar is also where the assassination attempt takes place.

```yaml
npcs:
  - id: TOMAS
    name: Tomas Greave
    type: Human Veteran
    description: A lean, weathered man in his forties with close-cropped grey hair and a scar across his left cheekbone. Former city watchman who defected to the resistance. Quiet and competent — speaks only when he has something useful to say. He carries a longsword and wears a chain shirt under his coat. He was not at the safehouse during the raid because he was running a supply pickup on the north side of the city.
    abilityScores:
      str: 16
      dex: 13
      con: 14
      int: 10
      wis: 12
      cha: 9
    ac: 16
    maxHp: 58
    speed: 30
    skills:
      - athletics
      - perception
      - survival
  - id: DELIA
    name: Delia Ashworth
    type: Human Commoner
    description: A thin woman in her thirties with ink-stained fingers and dark circles under her eyes. She wears a clerk's dress and keeps her hair pinned back tightly. Nervous and fidgety, but sharp — she has a head for numbers and logistics. She arrived early because she received a warning from a contact in the Merchants' Guild that "something was happening at Sable Street."
  - id: ROOK
    name: Rook
    type: Halfling Spy
    description: A wiry halfling with a crooked nose, a quick grin, and a fresh crossbow bolt wound in his left shoulder, hastily bandaged. He runs messages between resistance cells and knows every alley, rooftop, and sewer tunnel in Ashenmere. He was at the safehouse when the raid started and escaped through a drainage grate. He is angry and frightened in equal measure.
    abilityScores:
      str: 10
      dex: 16
      con: 12
      int: 13
      wis: 14
      cha: 14
    ac: 14
    maxHp: 27
    speed: 25
    skills:
      - stealth
      - perception
      - deception
      - persuasion
  - id: CALLAN
    name: Callan Wight (Greater Doppelganger)
    type: Greater Doppelganger (Custom)
    description: Appears as a broad-chested man in his fifties with a salt-and-pepper beard, calloused hands, and a sailor's rolling gait. Wears a heavy wool coat and leather gloves. The real Callan was gruff, generous, and told long stories about his sailing days. The doppelganger replicates this perfectly using Read Thoughts. It maintains calm confidence during questioning, deflects suspicion toward Tomas, and subtly pushes for the group to stop investigating and "focus on striking back at Sorn." It carries a concealed dagger and the Circlet of Blasting hidden inside its coat.
    abilityScores:
      str: 16
      dex: 14
      con: 16
      int: 13
      wis: 14
      cha: 16
    ac: 16
    maxHp: 90
    speed: 30
    skills:
      - deception
      - insight
      - stealth
    traits:
      - "Shapechanger: Can polymorph into any Small or Medium humanoid, or back to true form. Stats same in each form. Reverts on death."
      - "Ambusher: Advantage on attack rolls against surprised creatures."
      - "Surprise Attack: If hits a surprised creature on first turn, extra 3d6 damage."
      - "Read Thoughts: At will. DC 14 Wisdom save to detect. Range 60 ft. Duration: 1 minute concentration."
      - "Immune to charmed condition."
    actions:
      - "Multiattack: Two slam attacks."
      - "Slam: +7 to hit, reach 5 ft, 2d6+4 bludgeoning."
    cr: 5
    xp: 1800
```

## A2. The Raided Safehouse (Sable Street)

A narrow three-storey building wedged between a cobbler's shop and a boarded-up tannery on Sable Street. The front door has been kicked off its hinges. Inside, the place is wrecked — overturned furniture, smashed crockery, blood on the floor. The city watch has already come and gone, but the building is unguarded. A faded chalk mark on the doorframe — the resistance's "safe" symbol — has been circled in red by someone.

> The safehouse is a ruin. Tables are overturned, a bookshelf has been pulled from the wall, and there are three dark bloodstains on the floor where resistance members fell. The weapons cache — a false panel behind the hearth — stands open and empty. Whoever did this knew exactly where to look.

**Investigating the scene:**

- **DC 12 Investigation:** The attackers entered through the front and back simultaneously — this was coordinated, not a chance discovery. Boot prints suggest at least eight city watch plus two others in lighter footwear (Sorn's enforcers).
- **DC 14 Investigation:** The weapons cache behind the hearth was opened cleanly — no prying, no guesswork. Whoever directed the raid knew the exact location of the hidden panel and how to open it. Only resistance members knew this.
- **DC 15 Perception:** A faint trail of damp footprints leads from the back door into the alley, then toward the Merchants' Quarter to the east. These are fresher than the raid — someone came back after the watch left. The footprints are from heavy boots, consistent with Callan's size.
- **DC 13 Investigation:** Near the back door, a torn scrap of parchment is caught under a broken chair leg. It reads, in a hasty hand: "Cache behind hearth, watch change at fourth bell, three inside overnight." This is the intelligence that was passed to Sorn's people. The handwriting does not match any of the suspects — the doppelganger wrote it in its own hand, not Callan's.
- **DC 16 Arcana:** A faint residual aura of divination magic lingers near the hearth — consistent with a Read Thoughts effect used within the last few days. This is from the doppelganger reading the real Callan's memories of the safehouse layout before killing him.

**If a suspect accompanies the party:** Watch their reaction to the scene. Tomas is grim and methodical — he checks sight lines and catalogues what's missing. Delia is visibly shaken and nearly sick at the bloodstains. Rook is angry and kicks furniture. "Callan" expresses appropriate grief but subtly steers the party away from the back door and the Merchants' Quarter direction. A DC 14 Insight check notices Callan's redirection.

**If the party asks Callan about the weapons cache:** He explains the mechanism perfectly — because the doppelganger read the real Callan's mind before killing him. But a DC 15 Insight check notices he describes the mechanism slightly differently from how resistance members who helped build it would describe it — he uses the correct details but in the wrong order, as if recalling a memory rather than a habit.

Connected to:

- A1: Back to the Broken Compass.
- A3: The chalk wall in the Merchants' Quarter, following the damp footprints.
- Sewer access via the back alley (leads to A4).

## A3. The Chalk Wall (Merchants' Quarter)

A stretch of wall along the back of a cooper's workshop in the Merchants' Quarter, facing a narrow alley that connects to the main thoroughfare. The doppelganger has been leaving coded chalk marks here every few days — circles, triangles, crosses, and occasionally short sequences of dots and lines that convey more complex messages. Sorn's handler checks the wall daily and leaves coded responses in a different colour of chalk.

> The alley is unremarkable — barrel staves stacked against one wall, a puddle of grey water, the smell of sawdust and oak. But the far wall is covered in faint chalk marks, some fresh, some half-washed by rain. Most look like idle graffiti or children's scribbles. Some are not.

**Finding the chalk wall:**

- **If the party followed the footprints from A2:** The trail leads toward the Merchants' Quarter. A DC 12 Survival check tracks the route to this alley. A DC 13 Investigation check notices the chalk marks are not random — they follow a pattern, with fresh marks in a consistent position.
- **If the party is searching without the footprints:** A DC 16 Investigation check while canvassing the Merchants' Quarter, or a DC 14 Perception check if they know to look for Sorn's communication methods (from Vara's coded message — see Quest Connections).
- **If the party has Vara's coded message from Q9:** The message names three of Sorn's known communication methods. Coded chalk marks are listed. No check needed — they find the wall after a few hours of searching.

**Deciphering the chalk marks:**

- **DC 14 Investigation:** The marks form a cipher. A circle means "intelligence ready for pickup." A triangle means "target confirmed." A cross means "abort." Dot sequences encode names and locations.
- **DC 16 Intelligence (or DC 13 with Thieves' Cant or similar):** The most recent sequence translates to: "Safehouse cleared. Watching M. Crown move ready." ("M." is Maren. "Crown move" refers to the planned assassination.)
- **Scraping away older marks (DC 12 Investigation):** Beneath the current layer, partially erased marks show weeks of communication — the doppelganger has been using this wall since shortly after replacing Callan.

**Hidden cache:** Behind a loose brick near the base of the wall (DC 14 Investigation to find):

- A small oilskin pouch containing a silver coin stamped with Sorn's personal sigil — a gate flanked by chains. This is the doppelganger's payment token, exchanged for gold at a location the doppelganger doesn't know.
- A small vial of *Oil of Taggit* (ingested poison, DC 13 Constitution save or fall unconscious for 24 hours). This was intended for Maren's wine.
- A scrap of parchment with the cipher key — a simple substitution chart matching chalk symbols to letters and common phrases.

**Watching the wall:** If the party stakes out the alley instead of disturbing it, a hooded figure [HANDLER1] arrives at dusk to check the marks and leave a response in red chalk. This is one of Sorn's low-level handlers — a human thug who knows nothing except the chalk wall location and the name of the tavern where he reports (the Gilt Lily, a high-end establishment in the Noble Quarter). If confronted, he fights briefly and then flees. If caught and interrogated (DC 13 Intimidation), he reveals he reports to "a man with a silver ring at the Gilt Lily" — he doesn't know the man's name or role.

**The cipher key:** If the party recovers the cipher key from the hidden cache, they can decode all of the doppelganger's previous communications. This reveals the full scope of the intelligence leak — which safehouses were compromised, which resistance members were being watched, and the timeline of the "crown move" assassination plan.

Connected to:

- A1: Back to the Broken Compass.
- A2: Back to the raided safehouse.
- A4: The sewers near the real Callan's body — the doppelganger's route from the Broken Compass passes through the sewer tunnels, and the cipher key's hiding spot is along the same path.

```yaml
npcs:
  - id: HANDLER1
    name: Sorn's Handler
    type: Thug
    description: A heavyset man in a hooded cloak with a docker's cap pulled low. He moves with the practised casualness of someone who has done this many times. He carries a mace and a shortsword. He knows nothing of value beyond the chalk wall location and the Gilt Lily delivery point.
```

## A4. The Sewers (Callan's Body)

The old sewer tunnels beneath the Tanners' Quarter are partially collapsed and largely abandoned. If the party has reason to search here — following a lead, tracking the doppelganger's movements, or simply being thorough — they can find the real Callan Wight's body.

> The tunnel narrows and the ceiling sags. Broken masonry and mud choke the passage. Beyond a collapsed section that requires crawling through on hands and knees, a small chamber opens up — an old junction room where three tunnels once met. Two are caved in. The third leads back toward the harbour.

**Finding Callan's body:**

- The party must have a reason to search the sewers. Likely triggers: following the doppelganger's movements, a DC 16 Survival check to track boot prints from the safehouse back alley into the sewer entrance, or using *Locate Object* on something Callan was known to carry (his silver flask, his sailing knife).
- **DC 14 Perception:** In the junction room, a mound of loose rubble against the far wall looks deliberately placed. Beneath it is the body of the real Callan Wight — dead approximately three weeks, killed by a single stab wound to the base of the skull. His silver flask and sailing knife are still on his body. The doppelganger took his coat, his gloves, and his key ring.
- **DC 12 Medicine:** Callan has been dead for roughly three weeks — consistent with the timeline of the doppelganger's infiltration.
- **DC 14 Arcana:** Faint traces of transmutation magic cling to the body — residue from the doppelganger's shapeshifting.

**This is definitive proof.** If the party finds Callan's body, they know beyond doubt that the Callan at the Broken Compass is an impostor. They can plan accordingly.

Connected to:

- A2: Back to the safehouse via the alley sewer entrance.
- A1: Via the sewer network to the Broken Compass area.

## Interrogating the Suspects

The party can question each suspect privately. The following are each suspect's responses to likely questions, along with checks to assess them.

### Tomas Greave

Tomas is calm and direct. He answers every question without hesitation.

- **Where were you during the raid?** "North side. Supply pickup from the Wheelwrights' Quarter — new crossbow bolts from Edda's shop. She can confirm." (True. Edda confirms if asked.)
- **Why weren't you at the safehouse?** "I was scheduled for the pickup. Callan arranged the roster." (True. Callan's roster — written by the doppelganger — put Tomas on the north side deliberately, to frame him as a suspect.)
- **Who knew the weapons cache location?** "Everyone at this table. Maren, myself, Callan, Delia, and Rook. That's it."
- **DC 12 Insight:** Tomas is telling the truth and is genuinely angry. He suspects Delia because she arrived early, but he's wrong.
- **If accused directly:** He doesn't get defensive. He lays his weapons on the table and says, "Search me. Test me. I've got nothing to hide." He submits to any test without complaint.

### Delia Ashworth

Delia is visibly nervous, which makes her look guilty even though she isn't.

- **Why did you arrive early?** "My contact in the Merchants' Guild — Prester — sent me a message at dawn. He said there was city watch movement toward Sable Street. I came straight here to warn everyone." (True. Prester can confirm if the party tracks him down — DC 13 Investigation to find him at the Guild Hall.)
- **How did Prester know about the raid?** "He works in the permits office. He saw the watch commander requisition a battering ram for Sable Street. He didn't know why — he just knew it was bad." (True.)
- **DC 12 Insight:** Delia is terrified of being accused. She is telling the truth.
- **If accused directly:** She starts crying and insists she would never betray the resistance. She offers to let the party search her home, read her correspondence, anything.

### Rook

Rook is angry, in pain from his wound, and not interested in being polite.

- **What happened during the raid?** "They came through the front and back at the same time. Fourth bell, on the dot. I was in the cellar sorting messages. I heard the door go and bolted through the drainage grate. Took a crossbow bolt in the shoulder on the way out." (True.)
- **Did you see who was killed?** "Henner, Mags, and Old Pol. They were upstairs. Didn't have a chance." (True. He is grieving.)
- **DC 12 Insight:** Rook is telling the truth. He's furious and wants to find the traitor more than anyone.
- **DC 14 Medicine (examining his wound):** The crossbow bolt wound is genuine, recent, and consistent with his story. It entered from behind and slightly above — consistent with being shot while crawling through a low grate.
- **If accused directly:** He explodes. "I nearly DIED in there! You want to accuse me? Fine — take a look at this!" He tears his bandage off to show the wound. He won't cooperate further until someone apologises.

### Callan Wight (the Doppelganger)

The doppelganger is the most composed suspect. It plays Callan perfectly — gruff, avuncular, slightly impatient with the process but cooperative. It uses Read Thoughts constantly to anticipate questions and tailor its answers.

- **Where were you during the raid?** "Home. Asleep. I'm an old man — I don't keep late hours anymore. I got the message about the Compass and came straight here." (Plausible but unverifiable — Callan lived alone.)
- **Who else knew the weapons cache?** "Same as Tomas said. Five of us." It shrugs. "I built the damn thing. You think I'd give it up?"
- **DC 14 Insight (standard):** Callan seems honest. The doppelganger's Deception is very high and it is actively reading the questioner's thoughts to adjust its responses.
- **DC 18 Insight:** Something is slightly off. Callan's mannerisms are perfect, but there is a quality of performance to them — as if he is remembering how to be Callan rather than simply being him. This doesn't prove anything, but it's unsettling.
- **DC 16 Insight (only if the party asks about specific personal memories):** If someone asks Callan about a shared experience — a specific night at a tavern, a particular conversation — the doppelganger's answer is accurate in detail but lacks emotional depth. It describes what happened without conveying how it felt. A character who knew the real Callan well would notice.
- **If accused directly:** It performs outrage convincingly. "After everything I've done for this resistance? I buried friends for this cause. You're wasting time pointing fingers at me while Sorn tears us apart." It pushes hard for the group to stop investigating and take action instead.

## Testing for Shapechangers

The party may attempt various methods to detect the doppelganger. The doppelganger is prepared for most of them.

- **Detect Magic:** The doppelganger's shapeshifting is innate, not magical. *Detect Magic* does not reveal it. However, if cast near the doppelganger, a DC 14 Arcana check notes that Read Thoughts (which it uses constantly) is a magical effect — the caster detects a faint divination aura centred on Callan. The doppelganger immediately stops using Read Thoughts if it realises it's been detected, but this costs it the ability to anticipate questions.
- **Moonbeam:** Forces a Constitution save (DC equals the caster's spell save DC). On a failed save, the doppelganger reverts to its true form. The doppelganger knows this and will attempt to excuse itself from the room if someone prepares this spell. A DC 13 Insight check notices Callan becoming visibly uncomfortable when the spell is mentioned.
- **Zone of Truth:** The doppelganger is immune to the charmed condition, which means Zone of Truth has no effect on it. However, the caster knows when a creature succeeds on the save. If Callan "succeeds" on every casting while others fail at least once, this is suspicious.
- **Truesight / See Invisibility:** Truesight reveals the doppelganger's true form immediately. See Invisibility does not.
- **Physical tests (cutting, blood):** The doppelganger bleeds red like a human. Its blood, skin, and reactions to pain are indistinguishable from a real person.
- **Previous doppelganger experience (Q3/Q5):** If the party encountered doppelgangers in Quest 3 or Quest 5, they may recall specific tells — the faint shimmer when a doppelganger is concentrating on maintaining a form, or the way they blink slightly too often. A DC 14 Perception check (DC 12 if the party specifically mentions looking for these tells) notices Callan exhibiting the same behaviour.

## A5. Setting the Trap

If the party suspects Callan (or even if they aren't sure and want to test multiple suspects), they can set a trap using false information. Maren supports this approach.

> Maren nods slowly. "Feed them something specific. Something only the traitor would act on. Then we watch."

**The false information trap:** The party creates a piece of bait — a fabricated detail about resistance operations — and shares it with one suspect at a time. If the information reaches Sorn's people, the suspect who received it is the traitor.

Suggested approaches:

- **False safehouse location:** Tell each suspect a different "new safehouse" address. Watch each location to see which one gets raided or scouted. This takes 1-2 days but is conclusive.
- **False supply run:** Tell Callan (or whoever they suspect) about a fictional weapons delivery at a specific time and place. If Sorn's enforcers show up, the traitor is confirmed. This can be resolved in a single evening.
- **Marked information:** Give each suspect a slightly different version of a "resistance plan" with unique details. When the information appears as chalk marks on the wall (if the party is watching it), the version identifies the traitor.

**If the party watches the chalk wall after feeding false info to Callan:** Within 6 hours, the doppelganger slips away from wherever it is, travels to the Merchants' Quarter by a circuitous route, and marks the false information on the wall in coded chalk. A party member watching the alley (DC 12 Stealth to remain hidden, contested by the doppelganger's +4 Perception) catches it in the act.

**If the doppelganger realises it's being tested:** It accelerates its plan. Rather than waiting for the optimal moment, it moves to assassinate Maren immediately — see A6.

Connected to:

- A3: The chalk wall in the Merchants' Quarter.
- A6: The assassination attempt.

## A6. The Assassination Attempt

The doppelganger's secondary mission — after intelligence gathering — is to assassinate Maren when signalled. If the doppelganger is exposed, suspects it's being trapped, or receives a signal from Sorn's people, it strikes.

**Trigger conditions (any one):**

- The party directly accuses Callan with evidence.
- The false information trap catches the doppelganger at the chalk wall.
- The party finds the real Callan's body in the sewers.
- 48 hours pass without resolution (Sorn signals the assassination).

> The attack comes suddenly. Callan's face ripples — his features blur and shift, the skin turning grey and featureless for a heartbeat before snapping back into an approximation of his face that is almost right but not quite. He lunges at Maren, a dagger appearing in his hand, his eyes flat and black.

**The confrontation — Phase 1: The Doppelganger**

The doppelganger attacks Maren first. If it has surprise (because it hasn't been accused yet and the 48-hour timer triggered), it gets Surprise Attack (3d6 extra damage) on its first hit. If the party has already accused it or set a trap, there is no surprise.

Maren has AC 13 and 45 HP. If the doppelganger gets surprise and both slam attacks hit, Maren takes an average of 30 damage — badly hurt but alive. If no one intervenes within 1 round, the doppelganger finishes her off.

**Doppelganger tactics:**

- Round 1: Attack Maren with both slams. If Maren is not dead, use movement to stay adjacent.
- Round 2: If Maren is still alive, finish her. If Maren is protected, switch to the nearest party member and fight defensively.
- It does not flee. It fights to the death.

**Two invisible imps** [IMP1] [IMP2] are perched on the ceiling beams of the Broken Compass. They have been observing the resistance meetings for weeks. When combat begins, they turn visible for one round to cast *Suggestion* on the nearest party member ("Drop your weapon and step back — this isn't your fight"), then turn invisible again and flee through the sewer exit. Their mission is to report to Sorn.

- **DC 16 Perception** to notice the imps before they flee.
- If a party member blocks the sewer exit, the imps fight (reluctantly) for 1 round, then use their stingers and disengage.
- If both imps escape, Sorn knows the doppelganger failed and accelerates his plans. If at least one imp is killed or captured, the party buys extra time.

**Adjusted difficulty — Phase 1:** Greater doppelganger (1,800 XP) x1 multiplier = 1,800 XP. Easy-Medium for level 8. The imps (200 XP each) are not intended as a real combat threat — they flee.

**Phase 2: The Assassin (2 rounds later)**

Two rounds after combat begins, the cellar door at the top of the stairs slams open. A hired assassin [ASSASSIN1] descends — a lean, pale figure in black leather with a shortsword in each hand. This is the doppelganger's backup, stationed in the chandler's shop above, triggered by the sounds of fighting.

> The cellar door crashes open. A figure in black drops down the stairs — fast, fluid, already moving. Twin shortswords glint in the lamplight. A professional.

**Assassin tactics:**

- The assassin targets whichever party member is closest to the stairs, attempting to isolate and kill one target quickly.
- It uses Assassinate on the first round if any target is surprised (unlikely at this point, but possible if a party member is focused entirely on the doppelganger with their back to the stairs).
- If reduced to half HP, the assassin attempts to flee up the stairs and into the streets.

**Adjusted difficulty — Phase 2:** Assassin (3,900 XP) x1 multiplier = 3,900 XP. Medium-Hard for level 8. This is a separate phase from the doppelganger fight.

**Protecting Maren:** If the party keeps Maren alive, she is shaken but resolute. She thanks the party and immediately begins planning the resistance's next move. If Maren dies, the resistance fractures — several cells go dark, and Q18 becomes significantly harder as the party must rebuild the organisation themselves.

Connected to:

- A1: This takes place in the Broken Compass.
- A7: Aftermath and rewards.

```yaml
npcs:
  - id: IMP1
    type: Imp
    description: A tiny fiend perched invisibly on a ceiling beam. Red-skinned, bat-winged, with a barbed tail. Its orders are to observe and flee to report to Sorn.
  - id: IMP2
    type: Imp
    description: A second invisible imp, identical in appearance and orders to IMP1. Positioned on the opposite beam.
  - id: ASSASSIN1
    name: Varek
    type: Assassin
    description: A lean, pale man in close-fitting black leather armour with a hood pulled low over sharp features. He wields twin shortswords and moves with unsettling fluidity. A professional killer hired through Sorn's network — he has no loyalty to anyone and will flee if the job becomes untenable. A faint smell of brimstone clings to his cloak.
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
    traits:
      - "Assassinate: Advantage on attack rolls against creatures that haven't taken a turn. Hits against surprised creatures are critical hits."
      - "Evasion: On Dex save, half damage on fail, no damage on success."
      - "Sneak Attack (5d6): Once per turn when advantage or ally adjacent."
    actions:
      - "Multiattack: Two shortsword attacks."
      - "Shortsword: +6 to hit, reach 5 ft, 1d6+3 piercing plus 7d6 poison (DC 15 Con save for half)."
    cr: 8
    xp: 3900
```

---

## After the Fight

When both threats are neutralised, the Broken Compass falls quiet except for heavy breathing and the drip of blood on stone. The other resistance members — Tomas, Delia, Rook — stare at the grey, featureless corpse that was pretending to be their friend.

Maren leans against the wall, pressing a hand to her wounds if she was hit. Her voice is steady.

> "Three weeks. It wore his face for three weeks, and none of us knew." She looks at the party. "If you hadn't been here — if you hadn't pushed — I'd be dead and the resistance would be finished."

### Searching the Doppelganger

The doppelganger's body reverts to its true form in death — a grey, hairless humanoid with blank features and elongated limbs. On its person:

- **Circlet of Blasting** — a thin band of hammered copper set with a red glass gem. 3 charges, regains charges at dawn. Expend 1 charge to cast *Scorching Ray* (3 rays, +5 to hit, 2d6 fire each).
- **80 gp** in mixed coin — Calishite and local.
- **A journal** written in Deep Speech. The script is cramped and alien. Most party members cannot read it.
  - **DC 16 Intelligence check to translate** (advantage if the character speaks Abyssal, Infernal, or Primordial, as Deep Speech shares structural elements with fiendish languages).
  - The journal contains the doppelganger's private observations: notes on each resistance member's habits, fears, and weaknesses. But two entries are critical:
    - *"Sorn grows careless. He trusts the ritual will succeed, but his attention wanders. The wards on the Citadel are maintained by habit, not vigilance."* (Confirms Sorn is overconfident — benefits Q18.)
    - *"Portal anchors weakest at cardinal points. Northern anchor especially unstable — the binding rune has degraded. If the resistance knew this, they could collapse the framework from outside."* (Directly benefits Q20 — the party learns where the summoning portal is most vulnerable.)

### Searching the Assassin

If the assassin was killed:

- **Cloak of Displacement** — a dark, shimmering cloak that causes the wearer's image to shift and flicker. While wearing it, creatures have disadvantage on attack rolls against you. If you take damage, the property ceases to function until the start of your next turn.
- **Poisoner's kit** (used, partially depleted).
- **30 gp.**

**If the assassin escaped:** It drops the **Hellhound Cloak** during its flight — a rough black cloak lined with fur that radiates faint warmth. The wearer can cast *Hellish Rebuke* once per day (2d10 fire, DC 13 Dex save for half) as a reaction and gains resistance to fire damage. The party can find it on the stairs or in the street outside.

**Tracking the assassin's cache:** If the assassin escaped, a DC 15 Survival check tracks its route through the streets to a rented room above a tanner's shop in the Tanners' Quarter. Inside:

- **400 gp** in a locked chest (DC 14 Thieves' Tools to open).
- **Potion of Invisibility.**
- **Poisoner's kit** (new, fully stocked).
- A note: "Payment on completion. Leave confirmation at the Gilt Lily. — V." (The "V" refers to a mid-level agent of Sorn's, not Sorn himself.)

### The Traitor's Intel

Whether from the doppelganger's journal, from interrogating it before it attacked (if the party managed to force a confession), or from Maren's subsequent debrief with the surviving resistance members, the following intelligence emerges:

- **Citadel layout:** The doppelganger had been briefed on the Council Citadel's interior — guard rotations, ward placements, and the location of Sorn's private chambers. Maren documents everything the party can recall. This directly reduces the difficulty of Q18 (the Citadel assault).
- **Summoning ritual confirmation:** The doppelganger's journal confirms that Sorn is preparing a summoning ritual inside the Citadel. The specific nature of the ritual is unclear, but the portal anchor information points to Q20.
- **Ward stone connection:** Among the doppelganger's notes is a reference to "ward stones at the boundary markers — recharged monthly by the acolytes." This is information about the defensive wards surrounding the Citadel, useful for Q17.

### Maren's Response

Maren calls a full assembly of all surviving resistance members the following day. She is shaken but decisive.

> "We were compromised. We lost three people, a safehouse, and our weapons cache. But we also learned something — Sorn is afraid enough of us to send a shapechanger to tear us apart from the inside. That means we're hurting him."

She offers the party full access to the resistance armoury — the backup stockpile hidden in the cellar of a sympathetic brewer on the east side of the city.

Connected to:

- A1: The Broken Compass.
- The resistance armoury (brewer's cellar, east side).

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 200 gp | Maren (quest reward) | Paid from resistance funds |
| Full resistance armoury access | Maren (quest reward) | Ongoing benefit |
| 4 *Potions of Greater Healing* | Resistance armoury | Quest reward |
| *Scroll of Dispel Magic* | Resistance armoury | Quest reward |
| *Scroll of Remove Curse* | Resistance armoury | Quest reward |
| *Circlet of Blasting* (3 charges) | Doppelganger's person | Loot |
| 80 gp | Doppelganger's person | Loot |
| *Cloak of Displacement* | Assassin's person (if killed) | Loot |
| *Hellhound Cloak* | Assassin (if escaped) | Dropped during flight; Hellish Rebuke 1/day, fire resistance |
| Doppelganger's journal (Deep Speech) | Doppelganger's person (DC 16 Intelligence) | Hidden find; portal anchor weak points (Q20), Sorn's carelessness |
| Assassin's cache | DC 15 Survival tracking | 400 gp, Potion of Invisibility, poisoner's kit |
| Citadel layout and guard rotations | Traitor's intel | Makes Q18 Citadel assault easier |
| Ward stone information | Doppelganger's notes | Benefits Q17 |

## Quest Connections

- **From Quest 3/Quest 5:** Previous doppelganger encounters give the party specific tells to look for — DC on Perception checks to notice shapechanger behaviour drops from 14 to 12.
- **From Quest 9:** Vara's coded message names Sorn's known communication methods, including coded chalk marks. The party can find the chalk wall without a check.
- **To Quest 17:** The doppelganger's notes reference ward stones at the Citadel boundary markers — their recharge schedule and the acolytes who maintain them.
- **To Quest 18:** The Citadel layout, guard rotations, and ward placements revealed by the traitor's intelligence make the assault significantly easier. If Maren survives, she personally coordinates the resistance's support during the assault.
- **To Quest 20:** The doppelganger's journal reveals that the portal anchors are weakest at the cardinal points, with the northern anchor especially unstable. This is the key to collapsing Sorn's summoning framework.
