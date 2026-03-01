# Quest 21: The Pretender's Court

**Level:** 11 | **Type:** Story | **Style:** Roleplay/Psychological warfare

Sorn has transformed the throne room of the Council Citadel into a mockery of a royal court. He sits on a gilded throne he commissioned for himself, surrounded by charmed courtiers, dominated NPCs, and two rakshasa spawn disguised as advisors. He knows the party is coming. He has been waiting. He offers them a final bargain — not because he expects them to accept, but because he cannot resist the theatre of it. He addresses each party member individually, speaking to their deepest fears and desires with unsettling accuracy. He knows their past failures, their private doubts, their unspoken wants.

This quest is almost entirely roleplay. The combat — when it comes — is secondary to the psychological confrontation with Sorn. The DM should give Sorn room to talk, to perform, to try to break the party's resolve before a single blade is drawn.

---

The staircase opens into the throne room, and the heat of the ritual chamber gives way to something worse — normalcy. The room is lit by chandelier, furnished with silk hangings, and scented with perfume. A long carpet of deep crimson runs from the staircase to a raised dais at the far end, where a gilded throne stands on a platform of polished marble. The throne is grotesque — gold leaf over iron, shaped like a coiled serpent with its mouth forming the seat back, ruby eyes glinting in the candlelight. Courtiers line both sides of the carpet, standing in perfect stillness. They are dressed in finery. They do not blink.

## A1. The Throne Room

The throne room is 80 feet long and 40 feet wide, with a 30-foot vaulted ceiling. Pillars line both sides, and silk banners bearing Sorn's serpent sigil hang between them. The gilded throne sits on a raised dais at the far end, three steps up from the main floor. Sorn is seated on the throne, legs crossed, one clawed hand resting on the armrest. He is in his human guise — handsome, dark-haired, immaculately dressed in a burgundy doublet with gold thread.

> The man on the throne watches you with the calm of someone who has been expecting guests. He does not stand. He does not reach for a weapon. He smiles — a warm, generous smile that does not reach his eyes. "Ah. There you are. I was beginning to think you'd gotten lost in the cellar."

**The courtiers:** Twenty men and women stand along the carpet in two rows, dressed in silks and velvets. They are charmed citizens — merchants, minor nobles, guild functionaries. They are not combatants. Their eyes are glassy and unfocused, and they sway slightly, like sleepers standing upright. A DC 13 Wisdom (Insight) check recognises the signs of magical domination. They will not attack unless Sorn commands it, and even then, they are commoners — a single hit drops any of them. The party should recognise that killing charmed civilians is not the answer. Non-lethal takedowns (grapple, Sleep spell, knocking unconscious) are the intended approach.

**The two advisors:** Flanking the throne are two figures [SPAWN1] [SPAWN2] in court robes — a tall, olive-skinned man and a statuesque woman with silver hair. They appear human. They are rakshasa spawn — lesser fiends created by Sorn from mortal souls, shaped in his image. They stand with their hands folded, expressions pleasant and blank. A DC 15 Wisdom (Insight) check notices something wrong — their smiles are identical to Sorn's, and their hands are positioned palms-outward, the reverse of natural posture. A DC 17 Intelligence (Arcana) check identifies them as fiendish in nature.

**Sorn's demeanour:** He is relaxed, theatrical, and utterly in control of himself. He speaks as though this is a social call, not the endgame of a war. He is performing — for the party, for his courtiers, for himself. His vanity demands that he savour this moment. He will not attack first. He wants to talk.

Connected to:

- The staircase: Back down to the ritual chamber (Quest 20).
- A2: The dais and throne at the far end.
- A3: The antechamber behind the throne.

```yaml
npcs:
  - id: SPAWN1
    name: Lord Cassian
    type: Rakshasa Spawn (custom)
    description: A tall, olive-skinned man in elaborate court robes, with dark hair swept back and a thin-lipped smile that never wavers. His hands are positioned palms-outward — the reversed hands of a rakshasa. He speaks with quiet deference to Sorn but watches the party with predatory attention. He is disguised using Disguise Self and will maintain the illusion until combat begins.
    abilityScores:
      str: 14
      dex: 16
      con: 14
      int: 13
      wis: 12
      cha: 16
    ac: 15
    maxHp: 75
    speed: 30
    skills:
      - deception
      - insight
      - perception
    traits:
      - "Immune to spells of 3rd level or lower"
      - "Disguise Self and Detect Thoughts at will"
      - "Two claw attacks: +6 to hit, 2d6+4 slashing"
  - id: SPAWN2
    name: Lady Veraine
    type: Rakshasa Spawn (custom)
    description: A statuesque woman with silver hair and pale grey eyes, dressed in a gown of midnight blue. Her expression is serene, almost maternal. Like Cassian, her hands are reversed — palms outward. She is the more dangerous of the two spawn, preferring to use Detect Thoughts to feed Sorn information about the party's emotional state during the confrontation.
    abilityScores:
      str: 14
      dex: 16
      con: 14
      int: 13
      wis: 12
      cha: 16
    ac: 15
    maxHp: 75
    speed: 30
    skills:
      - deception
      - insight
      - perception
    traits:
      - "Immune to spells of 3rd level or lower"
      - "Disguise Self and Detect Thoughts at will"
      - "Two claw attacks: +6 to hit, 2d6+4 slashing"
```

## A2. Sorn's Bargain

Sorn does not attack. He offers the party a seat — literally. Chairs are arranged before the dais, as though for an audience with a king.

> "Sit. Please. You've earned that much." He gestures to the chairs with an open hand — the wrong hand, palm facing outward, fingers curling inward. "I know why you're here. I know what you think you know. And I know what you're afraid of. So before we do anything we can't undo — let me make you an offer."

**Sorn's offer is simple:** Leave Ashenmere. Take whatever you want — gold, magic items, titles in another city. He will even release the charmed citizens. All he asks is that the party walks away and does not return.

> "I am going to rule this city. That is not a threat — it is a fact, like gravity or the tides. You can fight it, and some of you will die, and I will rule anyway. Or you can take what I'm offering and go somewhere warm and safe and spend the rest of your short lives pretending you made the right choice."

He pauses, and his smile sharpens.

> "But before you answer — let me show you how well I know you."

**Sorn addresses each party member individually.** The DM should customise these speeches based on the party's actual history, but the following framework applies to each character. Sorn has been watching them through spies, imps, doppelgangers, and Detect Thoughts cast by his spawn. He knows their secrets.

### Addressing the Party

**For each character, Sorn does the following:**

1. He names something the character wants — something real, something they have never spoken aloud. He offers it sincerely.
2. He names something the character fears — a failure, a loss, a doubt. He presents it as inevitable if they continue.
3. He names something the character has done wrong — a past mistake, a moment of cowardice or cruelty. He forgives it, magnanimously, as though he has the right.

**Example speeches (adapt to actual party members):**

**To a fighter or martial character:**

> "You fight because it is the only language you trust. Words betray. Steel does not. But you know — don't you? — that steel is not enough here. You have faced things in this city that cannot be cut. And you will face worse before the night is out." He leans forward. "I can give you what you actually want. Not gold — you don't care about gold. Purpose. A city that needs protecting, with a ruler who values strength above politics. Stay. Serve me. I will never lie to you — I will never need to."

**To a spellcaster:**

> "You have spent your life chasing knowledge, and every answer has only opened new questions. I can end that. I have lived for centuries. I have walked the planes. I know things that would take you three lifetimes to discover on your own." He tilts his head. "But that is not what frightens you, is it? What frightens you is that your magic might not be enough. That when the moment comes, you will reach for power and find nothing. I have seen it happen. I have caused it to happen. To better mages than you."

**To a rogue or charisma-based character:**

> "You understand me better than your friends do. You know what it is to wear a mask — to smile when you want to scream, to say what people need to hear instead of what is true. We are alike, you and I. The difference is that I have stopped pretending that honesty is a virtue." He spreads his hands. "I am offering you a seat at my table. Not as a servant — as an equal. Think about what you could do with the resources of an entire city behind you."

**To a cleric or paladin:**

> "Your god sent you here to stop me. Or perhaps your god sent you here to fail — have you considered that? Faith is a beautiful thing, but it is also a leash. You pray for guidance and hear silence. You pray for strength and receive doubt. I do not doubt. I do not pray. And I am winning." He pauses. "The souls in my brazier — you freed them. A kind act. But there are thousands more where they came from, and your god did nothing to save them. Ask yourself who has done more for this city — your absent deity, or me?"

**Mechanical effect:** After Sorn's speech to each character, that character must make a DC 16 Wisdom saving throw. On a failure, the character is shaken — they have disadvantage on their next attack roll or ability check against Sorn. This is not magical charm — it is psychological. Characters who are immune to the frightened condition have advantage on this save. Characters who have a strong personal reason to resist (the DM should ask the player to state it) also have advantage.

**Sorn's reaction to defiance:** If a character refuses his offer with conviction, Sorn does not grow angry. He looks disappointed — genuinely, painfully disappointed. This is not an act. He wanted them to accept. His vanity craved their submission.

> "How tedious. I offered you mercy, and you chose martyrdom. Very well."

**Sorn's reaction to hesitation:** If a character hesitates or seems tempted, Sorn presses harder. He leans forward, drops his voice, and speaks as though they are the only two people in the room. The DM should make this moment feel intimate and uncomfortable.

**Sorn's reaction to a clever response:** If a character turns Sorn's words against him — pointing out his exile from Mahavan, his need for mortal approval, his fear of irrelevance — he reacts with a flash of genuine fury before composing himself. A DC 14 Charisma (Persuasion or Intimidation) check that references Mahavan or Sorn's exile causes him to lose composure for a moment. His human disguise flickers — the party glimpses striped fur, reversed hands, feline eyes — before he reasserts control.

> His jaw tightens. For an instant — just an instant — you see something behind the mask. Then the smile returns, harder than before. "You know nothing about Mahavan. Nothing."

This is valuable information. Any character who witnesses the flicker and succeeds on a DC 13 Intelligence (Arcana or Religion) check confirms that Sorn is disguising his true form — and that the disguise is an act of will, not a spell. It can be broken.

Connected to:

- A1: The throne room around them.
- A3: When negotiations collapse, combat begins.

## A3. When Words Fail

Combat begins when the party rejects Sorn's offer — or when Sorn decides the performance has run its course. He stands from the throne slowly, straightening his doublet.

> "I gave you a chance. Remember that." He turns to his two advisors. "Remove them."

**The spawn attack first.** Lord Cassian and Lady Veraine drop their disguises — their skin ripples, and their hands twist into clawed appendages. Their eyes become feline, and tiger-like patterns streak across their skin before the disguises reassert partially. They are not full rakshasas, but they are unmistakably fiendish.

**The charmed courtiers:** Sorn commands them to attack — but they are commoners, confused and terrified beneath the charm. They stumble forward, swinging fists or grabbing at the party with clumsy hands. They deal no meaningful damage (1d4-1 bludgeoning at best). The party must decide how to handle them:

- **Non-lethal attacks:** Knocking a courtier unconscious frees them from the charm after 1 minute. They wake confused and frightened but unharmed.
- **Sleep spell:** Affects courtiers normally (they have commoner HP). Sleeping courtiers are freed from the charm.
- **Dispel Magic:** Automatically breaks the charm on one courtier. They collapse, sobbing.
- **Killing a courtier:** Sorn laughs. "Ah — there it is. The heroes, killing the people they came to save." This is a psychological attack, not a mechanical one. The DM should make it clear that killing charmed civilians has moral weight.

**Sorn during the spawn fight:** He does not join combat immediately. He watches from the dais, offering commentary.

> "Cassian, mind the rug — it was imported." ... "Veraine, the short one is faster than they look. Adjust." ... "Oh, well struck. I felt that from here."

This is infuriating by design. Sorn is treating the fight as entertainment. He is also using this time to cast Detect Thoughts on the party, reading their tactical intentions.

**When the spawn are defeated:** Sorn stops smiling. He stands, and the temperature in the room drops. His human disguise begins to crack — tiger stripes bleeding through human skin, his fingers elongating into claws.

> "Enough games." His voice has changed. It is deeper, layered, as though two voices are speaking at once — one human, one something else entirely. "You want to see what I am? Fine."

He drops the disguise. See Quest 22.

Connected to:

- Quest 22: The True Face — Sorn reveals his rakshasa form.

## The Antechamber

Behind the throne, a heavy velvet curtain conceals a small antechamber — Sorn's private room within the Citadel. A character who breaks away from the confrontation and investigates (or who searches after combat) finds the following:

> A small room, richly furnished — a writing desk, a bookshelf, a chaise longue upholstered in red silk. The desk is covered in correspondence, all in Sorn's elegant hand. A hidden compartment is built into the back of the throne — a small iron box, warded with a glyph.

**DC 16 Intelligence (Investigation) check to find the hidden compartment.** The glyph is a simple alarm — it does not deal damage, but it alerts Sorn that the compartment has been opened. Inside:

- **An incomplete Contingency Scroll:** The spell was never finished. The scroll contains the first half of a Contingency spell, written in Sorn's hand, that would have teleported him to a safehouse in Baldur's Gate if his HP dropped below 20. The contingency was never activated because the scroll is incomplete — Sorn ran out of time. This is a relief: he has no escape plan.
- **Potion of Invulnerability:** Resistance to all damage for 1 minute. A single dose in a crystal vial sealed with gold wax. This is an extremely powerful consumable — the party should save it for Quest 22.
- **500 gp in gemstones:** Three rubies (150 gp each) and a sapphire (50 gp), loose in a velvet pouch.
- **A letter from Mahavan:** Written in Infernal on black paper in silver ink. A DC 14 Intelligence (Arcana or Religion) check translates it. The letter is a rejection — Mahavan dismisses Sorn as "a failure and a fool" and warns him never to return to the Nine Hells. The letter is decades old, creased from repeated reading. Sorn has kept it all this time. It is the wound that drives everything he does.

Connected to:

- A1: The throne room.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| Claw of the Rakshasa (dagger) | Spawn 1 loot | 1d6 piercing, magical, worth 200 gp |
| Claw of the Rakshasa (dagger) | Spawn 2 loot | 1d6 piercing, magical, worth 200 gp |
| Charm amulet | Spawn 1 loot | Evidence of Sorn's charm network |
| Charm amulet | Spawn 2 loot | Evidence of Sorn's charm network |
| Incomplete Contingency Scroll | Hidden compartment (DC 16 Investigation) | Confirms Sorn has no escape plan |
| *Potion of Invulnerability* | Hidden compartment (DC 16 Investigation) | Resistance to all damage, 1 minute |
| 500 gp in gemstones | Hidden compartment (DC 16 Investigation) | 3 rubies (150 gp each) + 1 sapphire (50 gp) |
| Letter from Mahavan | Hidden compartment (DC 16 Investigation) | Sorn's backstory; potential leverage in Q22 |

## Quest Connections

- **From Quest 20:** The party ascends from the ritual chamber after disrupting the anchors. Sorn knows the ritual has failed — this informs his desperation beneath the performance.
- **From Quest 13:** Intelligence from the traitor's documents gave the party foreknowledge of Sorn's court — the charmed courtiers, the spawn advisors. Without this intel, the spawn's disguises are harder to see through (Insight DC increases to 18).
- **From Quest 7:** If the party rescued prisoners in The Disappeared, they may recognise some of the charmed courtiers as former missing persons — adding emotional weight to the non-lethal requirement.
- **To Quest 22:** When Sorn drops his disguise, the final battle begins immediately. The transition is seamless — no rest, no respite.
- **From Quest 5/8:** Knowledge of Sorn's vanity and his need for approval (gleaned from the Silent Ward investigation or the masquerade letters) gives the party ammunition for the psychological confrontation. Characters who reference specific evidence have advantage on the DC 16 Wisdom save against Sorn's speeches.
