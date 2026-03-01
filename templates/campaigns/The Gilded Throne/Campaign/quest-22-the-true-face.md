# Quest 22: The True Face

**Level:** 11 | **Type:** Story | **Style:** Multi-phase boss battle

The final confrontation with Vaelith Sorn. His human disguise is gone, and what stands before the party is a rakshasa — a tiger that walks like a man, ancient and furious and afraid. He is enhanced by the residual energy of the portal below, stronger than a rakshasa should be: higher AC, more hit points, legendary actions, lair actions, and immunity to spells of 6th level or lower. The party's single 6th-level spell slot — if they have one — is the only magic that can bypass his defences directly. Everything else must be steel, faith, and nerve.

This is a three-phase boss fight. Each phase changes Sorn's behaviour, abilities, and the environment. The fight should feel like a story — the deceiver unmasked, the tyrant unleashed, and the fall of a creature that could not accept its own insignificance.

---

The man is gone. What stands on the dais is something else — eight feet tall, wrapped in orange-and-black striped fur, with the head of a tiger and the body of a man. His hands are reversed, palms facing outward, tipped with claws that gleam like polished bone. He wears no armour — he does not need it. His eyes are gold, slitted, and burning with a fury that has been building for decades. The gilded throne behind him looks cheap and small next to what he has become.

> "You wanted the truth." His voice is a growl wrapped in silk. "Here it is."

## Sorn's Enhanced Statistics

Vaelith Sorn is a rakshasa enhanced by the residual energy of the half-collapsed portal below the throne room. His statistics exceed those of a standard rakshasa.

```yaml
npcs:
  - id: SORN
    name: Vaelith Sorn
    type: Enhanced Rakshasa
    description: A massive rakshasa — a tiger-headed fiend standing eight feet tall, wrapped in orange-and-black striped fur. His reversed hands end in curved claws, and his gold eyes burn with ancient intelligence and bottomless vanity. He wears a burgundy doublet that has torn at the seams as his true form expanded, hanging in tatters from his shoulders. The gilded crown he placed on his own head sits askew between his feline ears, a ridiculous detail he has not noticed and would be enraged to learn about.
    abilityScores:
      str: 14
      dex: 18
      con: 18
      int: 16
      wis: 16
      cha: 20
    ac: 16
    maxHp: 200
    speed: 40
    skills:
      - deception
      - insight
      - perception
      - persuasion
    traits:
      - "Immune to spells of 6th level or lower (enhanced by portal energy)"
      - "Immune to bludgeoning, piercing, and slashing from nonmagical attacks"
      - "Vulnerable to piercing damage from a weapon wielded by a good-aligned creature while blessed (the Blade of Tyr's Witness bypasses all immunities and resistances)"
      - "Detect Thoughts at will"
      - "3 Legendary Actions per round"
      - "Lair Actions on initiative count 20 (Phase 2 and 3 only)"
    legendaryActions:
      - name: Claw
        cost: 1
        description: "Sorn makes one claw attack (+9 to hit, 2d6+4 slashing plus 2d6 psychic)."
      - name: Move
        cost: 1
        description: "Sorn moves up to half his speed without provoking opportunity attacks."
      - name: Cast Spell
        cost: 2
        description: "Sorn casts Disguise Self or Detect Thoughts."
      - name: Summon Devil
        cost: 3
        description: "Sorn draws a bearded devil through the weakened portal. It appears within 30 feet of him and acts on initiative count 10. Maximum 3 bearded devils on the field at any time."
```

## Phase 1: The Deceiver (200-101 HP)

Sorn fights with his full abilities in this phase. He is calculating, tactical, and cruel. He does not rage — he plays. He wants the party to feel outmatched.

> He moves like smoke — fluid, unhurried, as though the fight is already over and he is simply waiting for you to realise it. Every claw strike is precise. Every step is deliberate. He is not fighting you. He is demonstrating what you cannot beat.

**Behaviour:**

- Sorn creates 3 illusory duplicates of himself at the start of this phase (similar to Mirror Image, but each duplicate can move independently and appears to attack). A DC 16 Intelligence (Investigation) check as an action identifies the real Sorn — the duplicates do not cast shadows, and their claws pass through objects rather than striking them. Attacking a duplicate dispels it on a hit.
- He targets the character carrying the blessed blade first. He knows what it is. He will attempt to disarm (contested Athletics/Acrobatics, Sorn at +4) or destroy it (the blade has AC 19 and 30 HP — it is a holy relic, but Sorn is desperate).
- He uses Dominate Person (DC 18 Wisdom save) on the party's strongest melee combatant, turning them against their allies. The domination requires Sorn's concentration — if he takes damage, the target can repeat the save.
- He uses Detect Thoughts constantly, reading the party's tactical intentions. He reacts to plans before they are executed. The DM should have Sorn counter the party's strategies — stepping out of flanking positions, targeting the healer before a heal goes off, moving away from a character about to use a special ability.

**Legendary actions (Phase 1):**

- **Claw (1 action):** Makes one claw attack.
- **Move (1 action):** Moves up to 20 feet without provoking opportunity attacks.
- **Cast Spell (2 actions):** Casts Disguise Self (briefly assuming the form of a party member or ally to cause confusion) or Detect Thoughts.

**Illusory duplicates:** Three copies of Sorn appear around the room, moving and attacking independently. Each appears identical to the real Sorn.

- Duplicates have AC 16 but only 1 HP — any hit dispels them.
- Duplicates make claw attacks at +9, but the attacks deal no damage — they pass through the target. A character who is "hit" by a duplicate and takes no damage realises that copy is false.
- DC 16 Investigation (action) identifies the real Sorn by his shadow, his weight on the floor (the duplicates leave no footprints in dust or blood), or the faint shimmer at their edges.

**Transition to Phase 2:** When Sorn drops below 101 HP, he staggers. For the first time, he looks surprised.

> Blood — dark, almost black — runs from a wound on his flank. He stares at it as though he has never bled before. Perhaps he hasn't, in a very long time. Then his expression shifts. Surprise becomes rage. The remaining illusions shatter like glass, and the temperature in the room drops ten degrees.

## Phase 2: The Tyrant (100-51 HP)

Sorn abandons subtlety. He draws on the residual energy of the weakened portal below, and power floods into him — raw, unstable, and furious. He gains flight (60 ft), drops all illusions, and fights with savage intensity. His attacks become wilder, harder, faster. He stops being clever and starts being terrifying.

> He rises from the floor, black-feathered wings — no, not wings, shadows — erupting from his back and spreading wide. The room shakes. Cracks race across the marble floor, and hellish light bleeds up through them from the chamber below. His eyes are no longer gold. They are red. And he is screaming.

> "MAHAVAN CAST ME OUT! The courts of Hell rejected me! But I built THIS — " He sweeps a clawed hand across the throne room. "I built a kingdom from NOTHING, and you — you insignificant, mewling, mortal INSECTS — you think you can take it from me?"

**Behaviour:**

- Sorn flies, staying 15-20 feet above the floor and diving to attack before retreating upward. Melee characters must ready actions, use ranged attacks, or find ways to ground him.
- He drops all pretence of sophistication. His attacks are savage — he rakes with both claws, bites, and uses his tail to sweep characters off their feet.
- He fixates on whoever has dealt him the most damage, ignoring tactical logic in favour of revenge. This is a weakness the party can exploit — a character who deliberately provokes him can draw his attacks away from more vulnerable party members.
- He speaks about Mahavan constantly — ranting about the injustice of his exile, the weakness of the other rakshasas, his right to rule. This is not theatre. He is losing control.

**Lair actions (initiative count 20, Sorn's choice of one):**

- **Hellfire eruption:** Cracks in the floor vent fire from the ritual chamber below. A 15-foot-radius circle at a point Sorn can see within 60 feet erupts with hellfire. Each creature in the area must make a DC 16 Dexterity saving throw, taking 3d6 fire damage on a failure, or half on a success.
- **Fiendish tremor:** The floor shakes violently. Each creature standing on the floor must make a DC 15 Strength saving throw or be knocked prone. Flying creatures are unaffected.
- **Charming pulse:** A wave of psychic energy pulses outward from the throne. Each creature within 30 feet of the throne must make a DC 16 Wisdom saving throw or be charmed by Sorn until the end of their next turn. A charmed creature cannot attack Sorn and regards him as a trusted ally. Creatures that have already saved against this effect in the last minute are immune.

**Legendary actions (Phase 2):** Same as Phase 1, but Sorn uses Summon Devil more aggressively. He pulls bearded devils through the weakened portal — one per legendary action expenditure (costs 3), to a maximum of 3 on the field at any time. The bearded devils act on initiative count 10 and attack the nearest party member.

**Bearded devil behaviour:** They are disoriented from being yanked through a collapsing portal. They fight aggressively but without coordination — they do not flank, do not focus fire, and do not protect Sorn. They are a distraction, not a strategy.

```yaml
npcs:
  - id: BEARDED_DEVIL
    type: Bearded Devil
    description: A squat, muscular fiend with a serpentine beard of writhing tendrils and a serrated glaive. It appears dazed and furious, pulled through the weakened portal against its will. It attacks whatever is closest.
```

**Transition to Phase 3:** When Sorn drops below 51 HP, the portal in the chamber below reacts to his weakening. The floor cracks open, and a howling vortex of Infernal energy erupts upward through the throne room. The gilded throne is torn from the dais and sucked downward, crumpling like tin foil.

> The floor splits open with a sound like the world breaking. Orange-red light floods upward, and wind — hot, reeking of sulphur — roars through the room. The gilded throne tears free from its bolts and tumbles into the crack, folding in on itself as it falls. Sorn lands hard, his wings — his shadows — guttering. He is bleeding from a dozen wounds. He is afraid. For the first time in centuries, he is afraid.

## Phase 3: The Fall (50-0 HP)

The portal below is collapsing in earnest. The throne room is coming apart — chunks of marble and stone slide toward the growing crack in the floor. Infernal energy howls upward, pulling everything toward the rift. Sorn is weakened, grounded, and desperate.

**Environmental hazard — the collapsing portal:** At the start of each round, every creature in the throne room must make a DC 13 Strength saving throw or be pulled 10 feet toward the rift in the centre of the floor. The rift is 15 feet wide and descends into the ritual chamber, where the remains of the portal blaze. Falling into the rift deals 4d6 fire damage and deposits the character in the ritual chamber 30 feet below (3d6 falling damage, halved with a DC 15 Dexterity save). Climbing back up requires 2 rounds of movement and a DC 14 Athletics check.

**Sorn's behaviour:** He is grounded — no more flight. His legendary actions are reduced to 2 per round. He does not summon devils. He fights with everything he has left, but he is visibly weakening. His fur is matted with dark blood, his breathing is ragged, and his eyes are wide with a fear he has never experienced before.

> He backs away from you, claws raised, bleeding. The arrogance is gone. The theatre is gone. What remains is an animal, cornered and snarling. "You think killing me ends this? I will come back. Rakshasas do not die — we return. And when I do, I will find everyone you have ever loved, and I will — "

**The killing blow:** Sorn must be killed with a blessed weapon — specifically, a weapon wielded by a good-aligned creature and blessed through divine means (the Blade of Tyr's Witness from Quest 12, or a weapon consecrated by Brother Aldous in Quest 14). A killing blow from any other weapon reduces Sorn to 1 HP but does not kill him — he regenerates 10 HP at the start of his next turn and keeps fighting. The DM should make this clear the first time it happens.

> Your weapon bites deep, and Sorn staggers — but the wound closes. Dark flesh knits together, and he laughs, though the laugh is wet and broken. "I told you. I told you I cannot be killed. Not by you. Not by anything you have."

**If the party has the Blade of Tyr's Witness:** The blessed weapon cuts through Sorn's defences completely. When the killing blow lands, the blade blazes with white-gold light. Sorn does not regenerate. He does not laugh.

> The blade burns white. Where it strikes, Sorn's flesh does not close — it blackens, crumbles, turns to ash. He screams — not in pain but in disbelief. He stares at the wound, then at you, and for one instant his expression is almost human. Almost. Then the light consumes him.

**If Aldous is present and the Blade was lost:** Brother Aldous can consecrate an alternative weapon as a last resort. This requires 1 full round (Aldous uses his action and bonus action, and must not be interrupted). He holds the weapon, prays to Tyr, and the weapon glows faintly. The consecration lasts for 1 minute — long enough for one fight. The DM should make this a tense moment: Aldous is vulnerable during the consecration, and the party must protect him for a full round while the portal is pulling everyone toward the rift.

> Aldous grabs the weapon with both hands, drops to his knees, and prays. His voice is calm — impossibly calm for a man kneeling on a crumbling floor above a portal to Hell. Light builds around the weapon. Sorn sees it and lunges. "NO! Not again — I will NOT — "

**If the party uses the banishment conduit (from Quest 20):** If the portal is still partially open and the party discovered the banishment conduit option, a DC 20 combined Arcana + Athletics check can force Sorn through the rift and back to the Nine Hells. This does not kill him — he will eventually return — but it removes him from the Material Plane for years or decades, long enough for Ashenmere to recover. This is the failsafe for parties who lost the Blade and Aldous.

**Sorn's final words (if slain with blessed weapon):**

> He falls to his knees. The ash is spreading up his body, consuming him. His gold eyes are fading. He looks past you — at the ruined throne room, the broken throne, the city he built and lost. "It was mine," he whispers. "It was all mine."

> Then he is gone. A pile of dark ash, a tattered burgundy doublet, and a crooked golden crown on the cracked marble floor.

**Sorn's final words (if banished):**

> He claws at the floor as the rift pulls him in, gouging furrows in the marble. His eyes lock onto yours with a hatred that will outlast empires. "I will remember you. I will remember your names. And I will come back." Then the rift swallows him, and the portal collapses with a thunderclap that shakes the Citadel to its foundations.

## After the Battle

The portal closes. The rift in the throne room floor seals — slowly, reluctantly, as though reality itself is exhausted. The howling wind dies. The hellish light fades. The throne room is a ruin — cracked floor, shattered pillars, torn silk hangings — but it is quiet. The air smells of ash and old stone, and through the broken windows, the first grey light of dawn is visible over Ashenmere.

> The silence is enormous. After hours of fire and screaming and the roar of the portal, the silence feels like a physical thing — heavy, soft, and desperately welcome. Somewhere outside, a bird is singing. It is the most beautiful sound you have ever heard.

**The charm unravels:** With Sorn's death (or banishment), every charmed and dominated creature in Ashenmere is freed simultaneously. In the throne room, any surviving courtiers collapse, weeping and confused. Across the city, citizens who have been under Sorn's influence for months or years suddenly snap free — city guards drop their weapons, council functionaries stagger and retch, and the charmed officials who upheld Sorn's regime look around with the bewildered horror of people waking from a nightmare.

**The allies arrive:** Within minutes, the party's allies reach the throne room. The DM should bring back every NPC the party has cultivated over the campaign — this is the payoff for twenty-one quests of relationship-building.

- **Brokka Ironjaw** surveys the ruined throne room and kicks a piece of the broken throne across the floor. "Good riddance to bad furniture."
- **Maren Loomwright** stands in the doorway, tears streaming down her face, looking at the ash that was Sorn. "My mother can rest now."
- **Brother Aldous** (if present) kneels and prays over the spot where Sorn fell, consecrating the ground. "Tyr's justice is done. The rest is mercy — and mercy is harder."
- **Vara Inkwell** (if alive) is already taking notes. "I'm going to need a bigger broadsheet."
- **The Valiant Company** (if recruited) arrive battered but grinning. Dren claps the nearest party member on the shoulder. "Not bad. Not bad at all."

**The city:** Ashenmere is damaged but not destroyed. The siege has left scars — buildings burned, streets barricaded, people frightened. But the devils are gone, the charm is broken, and the Council of Guilds can begin to rebuild. What shape that rebuilding takes depends on the party's choices throughout the campaign.

Connected to:

- The epilogue (below).

---

## The Gilded Throne

The physical throne — Sorn's gaudy monument to his own ego — was destroyed when the rift tore it from the dais. But the enchantment lingers. Among the wreckage, the party finds a single piece of the throne intact — the serpent's head that formed the seat back, with its ruby eyes still glinting. This is the Gilded Throne as a magical artefact.

**The Gilded Throne** (Wondrous Item, Legendary, Cursed)

A fist-sized golden serpent's head with ruby eyes, weighing 10 pounds. It radiates strong enchantment magic. Worth 5,000 gp to a collector, but any creature that touches it must make a DC 18 Wisdom saving throw or become convinced that they should rule Ashenmere — that the city needs them, that they are the only one who can govern justly, that the throne is rightfully theirs. This conviction is absolute and persists until removed by Remove Curse cast at 7th level or higher. A cursed creature becomes increasingly authoritarian, paranoid, and controlling — the same path Sorn walked. The curse is Sorn's final joke: the throne corrupts whoever claims it, ensuring that Ashenmere's next ruler is just as monstrous as the last.

A character who succeeds on the save recognises the curse for what it is. The artefact can be safely handled with gloves or wrapped in cloth — direct skin contact triggers the save.

## Epilogue

The DM should narrate a brief epilogue tailored to the party's actions throughout the campaign. The following elements should be addressed:

**Ashenmere's governance:** With the Council of Guilds in disarray, the city needs new leadership. Who steps forward depends on who survived and who the party supported. Maren Loomwright, Brokka Ironjaw, Harsk Copperkettle, Lady Thornwall, and Selene Auris are all candidates — each with different visions for the city's future. If the party endorses a candidate, that carries significant weight. If they do not, the council fractures into factionalism, and the city's recovery is slower.

**The Church of Tyr:** If Brother Aldous survived and the party supported the church, the temple in the Old Quarter is restored and expanded. Aldous becomes a respected voice in city affairs — not a ruler, but a moral compass. If Aldous died, the church struggles, and the temple eventually closes.

**Vara Inkwell:** If alive, she publishes a forty-page account of the entire campaign — "The True Face: How Ashenmere Was Saved." It becomes the definitive record. She names the party members as heroes. She does not exaggerate.

**The Valiant Company:** If recruited and surviving, they establish themselves as Ashenmere's permanent adventuring company, protecting the city and the surrounding region. Dren raises a glass to the party at every opportunity. Wick writes them letters.

**The blessed blade:** If the Blade of Tyr's Witness was used to slay Sorn, it dims after the killing blow. The divine fire within it fades — its purpose is fulfilled. It remains a +1 longsword, but it is no longer a holy relic. Brother Aldous, if alive, accepts this with grace: "The blade did what it was made to do. That is enough."

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| The Gilded Throne (artefact) | Quest reward | Wondrous item, legendary, CURSED — DC 18 Wis or believe you should rule Ashenmere. Remove Curse at 7th level to lift. Worth 5,000 gp. |
| Gilded Armour (+2 studded leather) | Sorn's body | AC 14 + Dex, fire resistance, advantage on Deception checks. Requires attunement. |
| 3,000 gp | Sorn's body | Mixed coins and gems, found in the ash |
| Rod of Pact Keeper +2 | Sorn's body | Requires attunement by a warlock |
| Stone of Good Luck | Sorn's body | +1 to ability checks and saving throws. Requires attunement. |
| Sealed letter from Mahavan | Sorn's body | Written in Infernal; reveals Sorn's history and Mahavan's plans |
| Planar Compass | DC 18 Arcana at collapsed portal (hidden find) | Detects planar rifts within 1 mile. Requires attunement. |
| Sorn's journal | DC 18 Arcana at collapsed portal (hidden find) | Names 3 other rakshasas operating in Sword Coast cities — campaign sequel hook |
| Crooked golden crown | Throne room wreckage | Worth 250 gp, non-magical, slightly melted |

## Quest Connections

- **From Quest 21:** Sorn drops his disguise at the end of the pretender's court confrontation. The transition into this quest is immediate — no rest, no preparation. Whatever resources the party has left from Quests 18-21 are what they fight with.
- **From Quest 12:** The Blade of Tyr's Witness is the intended means of slaying Sorn. If the party completed the Old Temple, they have the weapon they need.
- **From Quest 14:** Brother Aldous can consecrate an alternative weapon if the Blade was lost. If the party completed The Last Sermon, Aldous is present and capable.
- **From Quest 20:** The banishment conduit provides a third option for parties who lost both the Blade and Aldous. The weakened portal can force Sorn back to the Nine Hells.
- **From Quest 15:** Allied factions recruited during The Outlander Alliance determine which NPCs arrive for the epilogue and how quickly Ashenmere recovers.
- **Campaign sequel hook:** Sorn's journal names three other rakshasas embedded in Sword Coast cities — Baldur's Gate, Waterdeep, and Neverwinter. Mahavan's letter suggests these agents are part of a larger plan. The Planar Compass can detect the rifts they are creating. The story of The Gilded Throne is over, but the war against Mahavan's network has only begun.
