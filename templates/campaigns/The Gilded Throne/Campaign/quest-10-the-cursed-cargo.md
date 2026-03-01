# Quest 10: The Cursed Cargo

**Level:** 7 | **Type:** Story | **Style:** Ship Assault

The party intercepts a merchant vessel carrying Sorn's most dangerous consignment yet — cursed weapons and armour forged with infernal bindings, intended to arm his growing militia. The ship is crewed by charmed sailors and guarded by devils bound to protect the cargo. Chained in the brig below decks is Brother Aldous, an aging cleric of Tyr who was captured after discovering Sorn's true nature. Rescuing Aldous changes everything — he reveals that Councillor Sorn is not human at all, but a rakshasa wearing a stolen identity.

This quest is the campaign's pivotal revelation. The party has been chasing a corrupt politician; now they learn they are hunting a fiend.

---

The harbour is quiet tonight. A cold wind comes off the river, carrying the smell of salt and rotting weed. Through the mist, you can make out the silhouette of a two-masted merchant vessel riding at anchor beyond the harbour mouth — too far out for a ship expecting to dock at dawn, too close for one just passing through. Her running lanterns are dark. She is waiting for something.

## A1. The Harbour Approach (Planning Phase)

The party has advance notice of the ship's arrival — either from the intercepted letters at the masquerade (Q8), from the delivery schedule in the poisoned quill (Q9), or from Brokka's harbour contacts. They have time to plan their approach.

> The ship is *The Wyrmtide*, a broad-beamed coastal trader flying Calishite colours. She's anchored three hundred yards beyond the harbour breakwater. Through a spyglass, you can count a dozen figures on deck — sailors moving with the slow, mechanical rhythm of men who aren't quite themselves. Two shapes crouch in the rigging, too still and too large to be human. A faint red glow pulses from the cargo hold below.

**Gathering information:** Brokka [BROKKA_Q10] can provide the following if consulted:

- The ship registered under the name *Wyrmtide*, captained by one Harlan Dregg. Her manifest claims Calishite textiles and spice.
- She was not expected. No berth was reserved, no harbour fees paid in advance. She arrived two days ago and has been sitting at anchor since.
- A dinghy rowed ashore last night. Brokka's people saw two figures disembark and head toward the Merchants' Quarter, but lost them in the fog.

**Approach options:** The party has several ways to reach and board the ship.

- **Hired rowboat (stealth):** Brokka can arrange a quiet boat. Approach at night from the seaward side. Group Stealth check DC 13 to reach the hull undetected. On failure, the spined devils in the rigging spot the boat at 60 feet and open fire.
- **Harbour inspectors (deception):** Pose as harbour officials demanding a customs inspection. Requires a DC 14 Deception check from the lead speaker when hailing the ship. On success, the charmed sailors lower a rope ladder and the party boards unchallenged — the devils remain hidden in the rigging and hold until the deception is broken or the party reaches the cargo hold. On failure, the first mate raises the alarm immediately.
- **Direct assault (combat):** Commandeer a harbour patrol boat and ram alongside. No subtlety. The entire ship is alerted. The party must fight from the waterline up.
- **Underwater approach:** A character who can breathe underwater or hold their breath long enough (DC 12 Constitution check for 3 minutes of swimming) can reach the hull and climb the anchor chain. DC 13 Athletics to climb. Arrives on the forecastle, behind most of the crew.
- **Fly or dimension door:** At level 7, magical approaches are possible. The ship's deck is an open-air space with no magical wards — Sorn's agents relied on the devils and isolation for security.

**Timing matters:** At night, the charmed sailors are at half alertness (disadvantage on Perception). During the day, the ship looks like an ordinary merchant vessel and the devils are hidden below decks, but the sailors are fully alert and the harbour is busy with witnesses.

Connected to:

- A2: The ship's main deck.
- A3: The rigging above.
- A5: The brig below, if the party finds a way to enter from the waterline.

```yaml
npcs:
  - id: BROKKA_Q10
    name: Brokka Ironjaw
    type: Half-Orc Veteran
    description: The Dockmasters' Guild harbourmaster. By this point in the campaign she trusts the party implicitly. She provides a rowboat, spyglass, and tide schedules without hesitation. She will not join the boarding herself — "My job is the docks. Yours is whatever's on that ship." — but she positions dock workers along the wharf to intercept anyone who tries to flee ashore.
```

## A2. The Main Deck

The deck of the *Wyrmtide* is a broad, weathered expanse of tarred planking. Coils of rope, lashed barrels, and stacked crates provide partial cover. A companionway amidships leads below decks. The helm is raised at the stern, and the forecastle juts out over the bow. The air smells wrong — beneath the salt and tar, there is something acrid and sulphurous.

> As you set foot on the deck, you see the sailors more clearly. Their eyes are glazed and distant, their movements unnervingly synchronised. One turns to look at you with an expression of blank, pleasant calm — the smile of someone who hasn't slept in three days but doesn't know it. None of them reach for weapons. None of them call out. They simply continue working, hauling ropes and scrubbing decking that is already clean.

Eight charmed sailors [SAILOR1-8] crew the deck. They are ordinary people — fishermen and merchant sailors pressed into service by magical compulsion. They are not hostile unless attacked or unless a devil commands them to fight.

**If the party boarded by deception:** The first mate, Kaspar [KASPAR], approaches. He is charmed but retains more of his personality than the other sailors — he speaks in halting, confused sentences, as though reciting lines he barely remembers.

> "Welcome... aboard. The captain is... below. You will want to speak with the captain." He blinks slowly, as if trying to remember something important. "The captain is below."

**If the party boarded by stealth:** They arrive on deck unnoticed. The sailors continue their tasks. The party can move freely for 1d4+1 rounds before a sailor spots them. A DC 12 Stealth check extends this by another round per success.

**If the party boarded by force:** All eight sailors turn to face the party with the same blank smile. The spined devils in the rigging screech an alarm (see A3). Combat begins immediately.

**Subduing the sailors:** The sailors fight as bandits (CR 1/8) if commanded by the devils or if attacked. They use belaying pins (clubs) and grapple. They can be knocked unconscious with non-lethal damage. A DC 14 Persuasion or DC 12 Intimidation check, spoken loudly enough for a group to hear, causes 1d4 sailors to hesitate for 1 round, unsure of their orders. *Dispel Magic* (DC 13) or *Remove Curse* on an individual sailor breaks the charm instantly — the freed sailor collapses, disoriented and terrified, and will not fight. Breaking the charm on one sailor in view of others does not free them, but causes visible distress — they clutch their heads and moan.

**The companionway:** A steep wooden stairway amidships leads below decks to the cargo hold (A4) and the brig (A5). The hatch is closed but not locked.

Connected to:

- A1: Over the side, back to the water.
- A3: The rigging above.
- A4: The cargo hold below, via the companionway.
- A5: The brig, further below.
- A6: The captain's cabin at the stern.

```yaml
npcs:
  - id: SAILOR1
    type: Bandit
    description: A charmed sailor. Glazed eyes, mechanical movements. Fights only if commanded by a devil or attacked. Can be subdued non-lethally.
  - id: SAILOR2
    type: Bandit
    description: A charmed sailor.
  - id: SAILOR3
    type: Bandit
    description: A charmed sailor.
  - id: SAILOR4
    type: Bandit
    description: A charmed sailor.
  - id: SAILOR5
    type: Bandit
    description: A charmed sailor.
  - id: SAILOR6
    type: Bandit
    description: A charmed sailor.
  - id: SAILOR7
    type: Bandit
    description: A charmed sailor.
  - id: SAILOR8
    type: Bandit
    description: A charmed sailor.
  - id: KASPAR
    name: Kaspar Holt
    type: Human Bandit Captain
    description: The first mate of the Wyrmtide. A weathered man in his forties with sun-darkened skin and salt-crusted hair. He is charmed but fights it — his sentences are halting, his expression strained, as though the real Kaspar is trying to surface through the compulsion. He was a legitimate merchant sailor before Sorn's agents seized his ship. If freed from the charm, he is angry, capable, and deeply grateful.
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
      - perception
      - intimidation
```

## A3. The Rigging

The *Wyrmtide's* rigging is a web of ropes, ratlines, and yardarms stretching forty feet above the deck. Two spined devils [SPINE_DEVIL1] [SPINE_DEVIL2] perch in the rigging, one on each mast, disguised among the furled sails. From above, they have clear lines of fire to every part of the deck and the surrounding water.

> Something shifts in the rigging above you — a shape too angular to be a man, clinging to the yardarm with clawed feet. A second shape uncurls from the crow's nest on the foremast. They are hunched, spiny creatures with membranous wings folded tight against their backs, their bodies bristling with long bone-white spines. Their eyes glow a dull, infernal red.

**Spined devil behaviour:** The devils attack only when the alarm is raised — by a sailor spotting intruders, by combat breaking out on deck, or when anyone attempts to enter the cargo hold. They fight from the rigging, using their spine attack (ranged, 20/60 ft, +5 to hit, 1d4+3 piercing plus 1d6 fire) and only descend to melee if both are below half HP or if the party climbs to meet them.

**Climbing the rigging:** DC 12 Athletics to climb. The rigging provides three-quarters cover to anyone in it. Combat in the rigging is fought at disadvantage for melee attacks unless the attacker also succeeds on a DC 10 Acrobatics check to keep their balance.

**Cutting the rigging:** A character can cut the ropes supporting a devil's position. AC 11, 10 HP for a section. If the section is cut, the devil must make a DC 13 Dexterity save or fall 40 feet to the deck (4d6 bludgeoning). Devils have Devil's Sight and darkvision 120 ft — darkness does not hinder them.

Connected to:

- A2: The deck below.

```yaml
npcs:
  - id: SPINE_DEVIL1
    name: Spined Devil
    type: Spined Devil
    description: A hunched, spiny fiend with membranous wings and bone-white spines protruding from its shoulders and back. It clings to the yardarm of the mainmast, nearly invisible among the furled sails. Its eyes burn with dim red light. It fights from range, raining spines on the deck below, and only descends when forced.
  - id: SPINE_DEVIL2
    name: Spined Devil
    type: Spined Devil
    description: A second spined devil perched in the crow's nest of the foremast. It coordinates with its partner — if one fires, the other fires at the same target next round to concentrate damage.
```

## A4. The Cargo Hold

A steep stairway leads down from the main deck into the belly of the ship. The cargo hold is a low-ceilinged space crammed with crates, barrels, and canvas-wrapped bundles. The air is thick, hot, and sulphurous. A faint red glow emanates from several of the crates — pulsing slowly, like a heartbeat.

> The hold reeks of brimstone. Crates are stacked floor to ceiling, and every one of them is stamped with the same sigil — a coiled serpent eating its own tail, pressed in dark red wax. The red glow comes from deep within the largest crates, bleeding through gaps in the wood. Standing in the centre of the hold, between the rows of cargo, is a hulking figure — seven feet tall, corded with muscle, its beard writhing with a life of its own. It holds a glaive that flickers with pale fire, and it watches the stairs with the patience of something that has been waiting for you.

The bearded devil [BEARDED_DEVIL] guards the cargo. It does not speak, does not negotiate, and does not leave the hold. Its orders are to kill anyone who enters without speaking the passphrase (which the party does not know — the passphrase is "The throne remembers" in Infernal).

**Bearded devil behaviour:** It attacks immediately when anyone descends into the hold. It fights in the narrow space between the crates, using its glaive (reach 10 ft) to control the stairway. It has advantage on the first round if the party does not have a light source (the red glow is dim light, insufficient for humans). It uses its beard attack on anyone who closes to 5 feet.

**The cursed cargo:** The crates contain cursed weapons and armour — swords, axes, shields, and chain shirts infused with infernal energy. There are enough arms to equip forty soldiers. All items radiate faint evocation and necromancy magic under *Detect Magic*.

- **DC 13 Arcana:** The items are bound with a fiendish curse. Anyone who attunes to a cursed weapon deals +1d4 necrotic damage on a hit but takes 1d4 necrotic damage themselves each dawn. The curse cannot be removed by *Remove Curse* alone — it requires a 5th-level spell slot and a successful DC 15 spellcasting ability check as part of a long rest to purify one item.
- **DC 15 Arcana:** The curse is designed to create dependency. After three dawns of wearing cursed armour or wielding a cursed weapon, the bearer must succeed on a DC 14 Wisdom save to voluntarily remove the item. This is how Sorn planned to control his militia.
- **DC 17 Religion:** The infernal bindings are consistent with rakshasa craftsmanship — fiends who specialise in domination and false identity. This is an early confirmation of what Brother Aldous reveals in A5.

**Animated armour:** During the fight with the bearded devil, on initiative count 10 of round 2, one suit of cursed chain mail tears free of its crate and animates [ANIMATED_ARMOUR]. It attacks the nearest creature indiscriminately — the curse activating in response to the violence. It has no intelligence and no allegiance. It fights until destroyed.

**The glaive:** The bearded devil's glaive is of infernal make — dark iron with Infernal script etched along the blade. It functions as a mundane glaive that deals an additional 1d4 fire damage on a hit. It is not cursed. It radiates faint evocation magic.

**Cargo value:** The cursed weapons and armour have a total market value of approximately 500 gp if sold to someone willing to buy cursed goods. They can be purified at a rate of one item per long rest with a 5th-level spell slot and a DC 15 spellcasting ability check. A purified item becomes a standard, non-magical version of itself.

Connected to:

- A2: The main deck above, via the companionway.
- A5: A narrow passage at the aft end of the hold leads to the brig.

```yaml
npcs:
  - id: BEARDED_DEVIL
    name: Bearded Devil
    type: Bearded Devil
    description: A seven-foot fiend with a muscular frame, clawed hands, and a writhing beard of wire-like tendrils. It wears no armour and carries a glaive of dark iron that flickers with pale fire. It stands in the centre of the cargo hold with the stillness of a creature that does not need to breathe, its eyes fixed on the entrance. It serves Sorn's contract and will not leave the hold for any reason.
  - id: ANIMATED_ARMOUR
    name: Animated Armour
    type: Animated Armor
    description: A suit of cursed chain mail that tears itself free of its crate during combat. It moves with jerky, puppet-like motions, assembling itself mid-fight — first the torso, then the gauntlets, then a helmet that snaps into place with a metallic clang. It has no intelligence and attacks the nearest creature. Infernal runes glow along the links of its chain.
```

## A5. The Brig

A narrow passage at the aft end of the cargo hold leads to a small compartment with iron-barred cells on either side. The air is slightly cooler here, away from the cursed cargo. One cell is empty. The other holds a man.

> In the dim light filtering through the deck planking above, you see an old man sitting cross-legged on the floor of an iron cell. His robes are torn and filthy, his face is bruised, and his wrists are raw from shackles. But his back is straight, and his eyes — pale blue, clear, undimmed — meet yours without flinching. A silver holy symbol has been torn from his neck; the broken chain still hangs there. He looks at you for a long moment, and then he speaks.
>
> "You're not with them. I can see it." He exhales slowly. "Thank Tyr. I didn't think anyone was coming."

Brother Aldous [ALDOUS] is an aging cleric of Tyr — tall, gaunt, with close-cropped grey hair and the bearing of a man who has spent decades in service to a god of justice. He has been beaten but not broken. His captors questioned him about what he knew and who he had told. He told them nothing.

**Freeing Aldous:** The cell door is locked. DC 14 Thieves' Tools to pick. Alternatively, the key is on a hook inside the captain's cabin (A6). The lock can be broken with a DC 18 Strength check or by dealing 15 damage to it (AC 19, immune to poison and psychic).

**Aldous's condition:** He is at 12 HP out of his maximum 40. He has no spell slots remaining. He can walk but not fight. If healed to at least 20 HP, he can cast *Bless* once (he recovers this single slot through prayer and gratitude). He will not leave the ship until the party is ready — "I've waited this long. A few more minutes won't kill me."

**The revelation — Aldous's story:** When freed and in a safe moment (even a brief lull in combat), Aldous tells the party what he knows. This should be played as a significant narrative beat.

> "I was investigating the Thornwall accounts. Old church records — tithes, donations, land deeds. Sorn's family history didn't add up. Names that should have been there weren't. Dates that contradicted each other. I thought it was simple fraud." He pauses. "It's not fraud."
>
> "Councillor Sorn is not human. He is a rakshasa — a fiend that wears mortal faces like masks. I don't know how long he has been in Ashenmere, but the real Sorn Thornwall has been dead for years. The thing wearing his face killed him and took his place."
>
> "I confronted him. Alone. That was foolish." He touches the bruise on his jaw. "He didn't even bother to deny it. He laughed. And then his hands — his hands were wrong. The palms faced the wrong way."

**What Aldous knows:**

- **DC 10 (no check, freely given):** Sorn is a rakshasa. He is immune to spells of 6th level or lower. Mundane weapons cannot kill him permanently — he reforms on the Nine Hells within a century. Only a piercing weapon blessed by a deity can destroy him for good.
- **DC 10 (no check, freely given):** Aldous knows of an old temple to Tyr in the hills north of the city — abandoned decades ago, but the consecration may still hold. A blessed weapon might be found there, or the altar could be used to bless one. This leads directly to Quest 12.
- **DC 13 Religion (Aldous assists, granting advantage):** Rakshasas are master manipulators. They can cast *Detect Thoughts* at will, are immune to most divination, and can use *Disguise Self* at will. In their true form, their hands are reversed — palms where the backs should be.
- **DC 15 Insight:** Aldous is holding something back. If pressed gently (DC 13 Persuasion), he admits: "He told me he has been in Ashenmere for eleven years. Eleven years wearing a dead man's face. Everything the council has done in that time — every vote, every tax, every law — was shaped by a fiend." The weight of this visibly shakes him.

**Failsafe — doppelganger warning:** If the party has not yet encountered doppelgangers (skipped Q3 and Q5), Aldous warns them directly once freed:

> "There is something else you must know. Sorn employs shapechangers — creatures that wear the faces of the people you trust. I saw one on this very ship, wearing the captain's face before they killed him. Test your allies. Trust no one whose behaviour has changed."

This ensures even a minimal-path party knows about doppelgangers before Q13.

**Failsafe — backup blessed weapon:** Among the cursed cargo, one weapon stands apart — a silver-chased short sword whose infernal bindings are weaker than the rest, as though the original consecration partially resisted the corruption. Brother Aldous can purify it on the spot with 1 hour of prayer (no spell slot required — the weapon is already fighting the curse). The purified weapon functions as a +1 short sword that deals an additional 1d4 radiant damage to fiends. This provides a backup blessed weapon even if Q12 and Q14 are both skipped.

**Aldous's blessing:** Once safely off the ship, Aldous kneels and prays. He places his hand on the forehead of each willing party member.

> "Tyr's eye is upon you. You have shown courage where others turned away. Carry his protection into the dark days ahead."

Each party member receives the **Blessing of Tyr**: 10 temporary hit points that refresh on a long rest. This blessing lasts for the duration of Act III.

He also gives the party his **Holy Symbol of Tyr** — a silver gauntlet on a broken chain, recovered from the captain's cabin or from Aldous's own neck if the chain is repaired. It is worth 50 gp and grants advantage on Religion checks made to identify or resist fiends.

Connected to:

- A4: The cargo hold forward.

```yaml
npcs:
  - id: ALDOUS
    name: Brother Aldous
    type: Human Cleric (Tyr)
    description: An aging cleric of Tyr — tall, gaunt, with close-cropped grey hair, pale blue eyes, and the quiet authority of a man who has stared down evil and refused to blink. His robes are torn, his wrists raw from shackles, and his face bruised from interrogation. Despite his condition, his voice is steady and his faith is unshaken. He has served Tyr for over forty years and has never once wavered. He carries no weapon — his strength is in his conviction.
    abilityScores:
      str: 10
      dex: 10
      con: 12
      int: 14
      wis: 18
      cha: 15
    ac: 10
    maxHp: 40
    speed: 30
    skills:
      - religion
      - insight
      - medicine
      - history
```

## A6. The Captain's Cabin

The stern cabin of the *Wyrmtide* is behind a heavy oak door. The door is locked — DC 13 Thieves' Tools, or DC 15 Strength to force. The key is on Kaspar's belt, though he may not be aware of it while charmed.

> The captain's cabin is surprisingly well-appointed for a merchant vessel. A heavy desk is bolted to the floor, covered in nautical charts and shipping manifests. A hammock hangs in the corner, neatly made. A locked sea chest sits beneath the desk. The cabin smells of pipe tobacco and, faintly, of something burnt — like the aftermath of a fire that consumed something it shouldn't have.

**Captain Dregg:** The captain is not aboard. His personal effects suggest he left the ship recently — the hammock is cold, the pipe on the desk has been knocked over and not righted. A DC 13 Investigation check reveals a splatter of dried blood on the underside of the desk, hastily wiped. Captain Dregg was killed by the bearded devil when he began to resist the charm. His body was dumped overboard.

**The desk:** The charts and manifests on the desk confirm the ship's route — from Ul-Razzam in Calimshan, up the Sword Coast, and along the river to Ashenmere. The manifests are falsified (Calishite textiles), but a DC 12 Investigation check finds a second set of papers hidden in a false bottom of a desk drawer — the real cargo manifest, listing "armaments (special commission)" and "one prisoner (clerical, alive)."

**The brig key:** A heavy iron key hangs on a hook beside the door. It opens the brig cell in A5.

**The locked sea chest:** DC 16 Thieves' Tools to open. Trapped — a DC 14 Investigation check detects a needle trap in the lock. If triggered, the opener takes 1d4 piercing damage and must make a DC 13 Constitution save or be poisoned for 1 hour.

Contents of the sea chest:

- A **Cloak of Elvenkind** — folded neatly, clearly set aside rather than part of the cargo. This was payment for the captain, now unclaimed.
- **250 gp in Calishite trade bars** — stamped with the seal of a Calishite trading house. The same trade bars found in small quantities throughout the campaign.
- A **nautical chart from Ul-Razzam** — showing the coastal route with three ports circled in red ink and dates written beside them. Two dates have already passed. One is three weeks from now. This is evidence of ongoing shipments.
- A **cargo manifest** listing two additional shipments scheduled for the next two months, including quantities and types of cursed arms. The manifest is signed with the serpent sigil — the same sigil from Quest 1.
- **Aldous's Holy Symbol of Tyr** — a silver gauntlet pendant. It was taken from Aldous during his capture. Returning it to him means a great deal. "You found it. I thought they'd melted it down." He clutches it tightly.

Connected to:

- A2: The main deck.

---

## After the Assault

When the devils are slain, the cursed cargo secured, and Brother Aldous freed, the party has a moment to take stock. The charmed sailors — those still conscious — begin to stir as the fiendish influence fades. The charm breaks within an hour of the last devil's death, leaving the sailors confused, frightened, and desperately grateful.

### Kaspar's Reaction

If freed from the charm (either by *Dispel Magic*, *Remove Curse*, or the natural fading after the devils die), Kaspar is the first to recover. He sits on a coil of rope, head in his hands, and then stands with cold fury in his eyes.

> "They took my ship. Killed the captain. Made us into puppets." He spits over the side. "I've sailed these waters for twenty years. The *Wyrmtide* was an honest ship. I want to make this right."

**Recruiting Kaspar:** If the party asks for Kaspar's help or mentions the possibility of a siege or harbour action, he volunteers without hesitation. A DC 10 Persuasion check (or no check at all, if the party treated the sailors well and freed them without violence) secures his commitment to blockade the harbour when the time comes (Q18). He knows the harbour currents, the shipping lanes, and every captain who owes him a favour.

- **DC 13 Persuasion:** Kaspar also pledges to recruit three other merchant captains sympathetic to the cause — enough to seal the harbour mouth entirely.
- **If the party subdued sailors non-lethally:** Kaspar's loyalty is absolute. He swears on the memory of Captain Dregg. No check needed for any of the above.

### Brother Aldous's Farewell (for now)

Aldous does not linger on the ship. Once ashore, he asks to be taken somewhere safe — the Dockmasters' bunkhouse, a temple, or wherever the party considers secure. He needs rest, prayer, and time to prepare for what comes next.

> "What I've told you tonight changes everything. Sorn has had eleven years to dig his claws into this city. Uprooting him will take more than a sword — it will take proof, allies, and something that can kill a fiend for good." He looks toward the hills north of the city. "The old temple of Tyr. That's where you need to go next. I'll tell you everything I know when you're ready."

Aldous becomes a recurring ally for the remainder of the campaign. He will feature prominently in Quest 14 (The Last Sermon), where his testimony before the guilds and people of Ashenmere is central to turning the city against Sorn.

### Brokka's Reaction

If the party reports to Brokka with evidence of the cursed cargo, she is grim but unsurprised.

> "Cursed weapons. Devils on a ship in my harbour. And Sorn's sigil on every crate." She pours two cups of rough spirits and pushes one across the table. "I always knew that man was rotten. Didn't think he was literally a monster."

Brokka takes charge of securing the *Wyrmtide* and its cargo. She posts armed dock workers on the ship and refuses to let the cursed arms leave the harbour. If the party wants to purify the weapons, she provides space and time. If they want to destroy them, she helps arrange a bonfire on the beach — though she warns that burning cursed items may have consequences.

Connected to:

- A1: The harbour.
- The Dockmasters' bunkhouse: Where Aldous can rest safely.

```yaml
npcs:
  - id: KASPAR_FREED
    name: Kaspar Holt (freed)
    type: Human Bandit Captain
    description: With the charm broken, Kaspar is a different man — sharp-eyed, competent, and burning with quiet rage. He is a veteran merchant sailor who knows every current in the harbour and every captain on the river. He wants justice for his murdered captain and his enslaved crew. If recruited, he becomes a reliable ally for the harbour blockade in Q18, bringing knowledge, contacts, and three ships.
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
      - perception
      - intimidation
```

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| Blessing of Tyr (10 temp HP, refreshes on long rest) | Brother Aldous (quest reward) | Lasts for Act III |
| Holy Symbol of Tyr (silver, 50 gp) | Captain's cabin sea chest / Aldous | Advantage on Religion checks vs fiends |
| Glaive of infernal make (+1d4 fire) | Bearded devil | Loot; mundane, not cursed |
| Spined devil spines (1d4+1, range 20/60) | Spined devils | Improvised weapons; limited supply |
| Cloak of Elvenkind | Captain's cabin sea chest (DC 16 Thieves' Tools) | Hidden find |
| 250 gp in Calishite trade bars | Captain's cabin sea chest (DC 16 Thieves' Tools) | Hidden find; same trade bars as earlier quests |
| Nautical chart from Ul-Razzam | Captain's cabin sea chest (DC 16 Thieves' Tools) | Evidence of ongoing shipments |
| Cargo manifest (two more shipments) | Captain's cabin sea chest (DC 16 Thieves' Tools) | Evidence; signed with serpent sigil |
| 500 gp cursed weapons (total value) | Cargo hold | Can be purified one per long rest with 5th-level spell |
| Kaspar as harbour blockade ally | Kaspar (recruited) | Side opportunity; connects to Q18 |
| +1 short sword (+1d4 radiant vs fiends) | Cursed cargo (Aldous purifies) | Failsafe blessed weapon; 1 hour prayer |
| Rakshasa revelation | Brother Aldous | Major plot advancement |

## Quest Connections

- **From Quest 1:** The serpent sigil stamped on the cursed cargo crates matches the sigil found on the smuggled alchemical supplies at the docks. If the party kept the silver signet ring from Quest 1, they can confirm the match immediately.
- **From Quest 8:** The intercepted letters at the masquerade mentioned "the shipment from Ul-Razzam" — this is that shipment. The nautical chart in the sea chest confirms the Calishite origin referenced in Sorn's private correspondence.
- **To Quest 12:** Brother Aldous reveals the location of the old Temple of Tyr in the hills north of the city. The temple may hold a blessed weapon capable of permanently killing Sorn, or its altar could be used to bless one. This is the party's next critical objective.
- **To Quest 14:** Brother Aldous becomes central to the Last Sermon — his firsthand testimony of Sorn's true nature, delivered before the assembled guilds and citizens, is what finally turns Ashenmere against the rakshasa. His rescue here makes that moment possible.
- **To Quest 18:** First mate Kaspar, if recruited, blockades the harbour during the siege with his ship and up to three allied merchant vessels. His knowledge of harbour currents and shipping lanes makes the blockade far more effective than a military operation alone.
