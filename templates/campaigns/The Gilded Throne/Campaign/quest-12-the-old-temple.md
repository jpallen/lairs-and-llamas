# Quest 12: The Old Temple

**Level:** 8 | **Type:** Discovery (optional) | **Style:** Temple Dungeon

Brother Aldous directs the party to a ruined temple of Tyr in the Ashenmere Hills, where a blessed weapon rests in the crypt of a long-dead paladin. The temple was once a place of judgement and mercy — now it is corrupted by fiendish influence. Devils guard its halls, and the paladin's spirit will not yield the weapon to anyone unworthy.

This quest is a classic dungeon crawl — puzzle rooms, divine trials, and combat against fiends. The party must prove themselves through tests of justice, mercy, and courage before they can claim the Blade of Tyr's Witness. If they have the journal map from Quest 8, they find the temple more easily. If they completed Quest 13 first, the traitor's intel reveals trap locations within the temple.

---

The temple lies a day's march into the hills northeast of Ashenmere, along a road that hasn't been maintained in decades. Brother Aldous draws a rough map on a scrap of parchment and presses it into the party's hands with shaking fingers.

> "The Temple of the Just Witness. It was abandoned before I was born — the order fell during the Fiend Wars, and no one has tended the shrine since. But the Blade is there. I am certain of it. The paladin Ser Edric Valorheart was interred in the crypt beneath the temple, and his weapon was buried with him. Be warned — the corruption I've sensed in my divinations is real. Something unholy guards that place now."

**Reaching the temple:** The road into the hills is overgrown and treacherous. A DC 14 Survival check is needed to follow the old path without getting lost (adding half a day). If the party has the journal map from Quest 8, they have advantage on this check. The journey is otherwise uneventful — the hills are rocky, windswept, and dotted with gnarled pines. Birds fall silent as the party approaches the temple.

## T1. The Overgrown Exterior

The temple sits on a flat shelf of rock overlooking a steep ravine. It was built from pale granite in a severe, angular style — pillars, sharp archways, a flat roof. Now the granite is cracked and stained black in places. Ivy and thornbushes choke the entrance. A pair of stone scales — the symbol of Tyr — flanks the main doors, but one has been smashed and the other is streaked with something dark and dried.

> The temple emerges from the hillside like a broken tooth. Pale stone pillars frame a wide entrance, but the doors are gone — ripped from their hinges and lying in the weeds. The air here is wrong. It smells faintly of sulphur and old ash, and the wind carries a low, almost subsonic hum that you feel in your teeth more than hear.

**Investigating the exterior:**

- **DC 12 Perception:** Deep claw marks score the stone pillars near the entrance — something large forced its way inside.
- **DC 13 Religion:** The blackened staining on the stone is a sign of fiendish corruption — prolonged exposure to infernal energy discolours consecrated stone.
- **DC 14 Nature:** The thornbushes around the entrance are not natural growth. They've grown in unnaturally tight patterns, almost like a barrier. Something is encouraging them to block the entrance.
- **DC 15 Investigation:** A faded inscription above the entrance reads: *"Let the just pass freely. Let the wicked be judged."* Below it, scratched into the stone in Infernal script: *"Claimed."*

**The approach:** The thornbushes can be cut through (10 minutes of work), burned (draws attention — the devils in T2 are alerted and cannot be surprised), or bypassed entirely via a crumbled section of wall on the temple's north side (DC 13 Athletics to climb through the rubble). If the party completed Quest 13 first, the traitor's intel mentions the crumbled wall as a safer entry.

Connected to:

- T2: Through the main entrance or the crumbled north wall.

## T2. The Upper Temple

The main hall of the temple is a long rectangular chamber with a vaulted ceiling supported by two rows of pillars. Stone pews line the centre aisle, most overturned or shattered. At the far end, a raised dais holds a cracked stone altar. Behind the altar, a large bas-relief of a blindfolded figure holding scales and a sword — Tyr — dominates the wall. The blindfold has been chiselled away, and someone has carved open, staring eyes in its place.

> The temple's main hall stretches before you, lit by shafts of grey light falling through cracks in the ceiling. Stone pews lie broken across the floor. The altar at the far end has been defaced — dark symbols are daubed across its surface in what might be blood. But what draws your attention are the two figures standing motionless in the shadows between the pillars.

**The guardian pair:** A barbed devil [BARBED_DEVIL] stands among the pillars on the east side, its long barbed tail coiled around a pillar. A chain devil [CHAIN_DEVIL] occupies the west side, its animate chains draped across the broken pews like steel cobwebs. They are not hiding — they are waiting. They have been set here as sentinels.

**Encounter behaviour:** The devils do not attack immediately. The chain devil speaks first, in Common, its voice like links scraping together:

> "Mortals. How tedious. You may leave. The temple belongs to our master now, and what lies below is not for your kind."

- **If the party attempts to negotiate:** The chain devil is willing to talk, but only to delay. It has no authority to let them pass. A DC 16 Insight check reveals it is stalling — the barbed devil is slowly repositioning for a better attack angle. If called out, combat begins immediately.
- **If the party attacks:** Standard initiative.
- **If the party tries to bluff past:** DC 18 Deception. On a success, the chain devil steps aside but the barbed devil blocks the path to the stairs. The party gets a surprise round when combat inevitably begins.

**Encounter: Upper Temple Guardians**

| Creature | CR | HP | AC | XP |
|----------|----|----|----|----|
| 1 Barbed Devil [BARBED_DEVIL] | 5 | 110 | 15 | 1,800 |
| 1 Chain Devil [CHAIN_DEVIL] | 8 | 85 | 16 | 3,900 |

Adjusted XP: 5,700 x 1.5 (two creatures) = 8,550. **Deadly** (threshold 8,400) but barely. This encounter is telegraphed — the party should have time to prepare.

**Tactics:** The chain devil uses Animate Chains to restrain melee fighters, then attacks restrained targets. The barbed devil hangs back and uses its barbs at range before closing to melee on wounded targets. Neither devil retreats — they fight to the death. If one falls, the other becomes reckless, attacking the nearest enemy without regard for tactics.

**After the fight:** The defaced altar radiates faint evil (detectable by *Detect Evil and Good* or a DC 14 Religion check). It cannot be cleansed without completing the trials below. Behind the altar, a stone staircase descends into darkness — this leads to T3.

**The barbed devil's whip:** The barbed devil carries a barbed whip — a nonmagical but cruel weapon (treat as a whip that deals an additional 1d4 piercing damage on a hit, and the target must succeed on a DC 12 Constitution save or take 1d4 bleeding damage at the start of their next turn).

**The chain devil's chain:** The chain devil drops an enchanted chain — 10 feet of animate chain that can be commanded once per day to grapple a target within 10 feet (DC 14 Strength to escape). It becomes inert after 1 minute.

Connected to:

- T1: The exterior, back the way the party came.
- T3: Down the stone staircase behind the altar.

```yaml
npcs:
  - id: BARBED_DEVIL
    type: Barbed Devil
    description: A tall, hunched fiend bristling with sharp barbs along its arms, shoulders, and tail. Its eyes glow a dull red, and it watches the party with predatory patience. It carries a barbed whip coiled at its hip.
    ac: 15
    maxHp: 110
  - id: CHAIN_DEVIL
    type: Chain Devil
    description: A gaunt, grey-skinned fiend draped in animate chains that writhe and coil of their own accord. Its face is a mask of cold contempt. It speaks Common in a flat, scraping voice.
    ac: 16
    maxHp: 85
```

## T3. Trial of Justice

The staircase descends thirty feet into a vaulted chamber of pale stone. The air here is cooler and cleaner than the upper temple — the fiendish corruption hasn't fully penetrated this deep. Three arched doorways lead out of this antechamber, each sealed by a stone door bearing a carved symbol: scales (justice), an open hand (mercy), and a raised sword (courage). The doors are not locked — they open at a touch — but they must be completed in order. The mercy and courage doors refuse to open until the trial of justice is complete.

> The staircase opens into a chamber that feels untouched by the corruption above. The stone is clean, the air still. Three doors face you, each carved with a symbol. A voice — calm, resonant, neither male nor female — speaks from everywhere at once: "You who seek the Witness's blade. The worthy must prove themselves. Justice first. Then mercy. Then courage. Fail, and you will be found wanting."

**The justice chamber** is a rectangular room with a stone bench at one end — like a courtroom. Two spectral figures stand in the centre of the room: a human man in chains and a human woman in a merchant's dress. They flicker like candle flames but are fully visible and can speak.

> The chained man looks at you with desperate eyes. The woman in the merchant's dress stares at him with cold fury. The same disembodied voice speaks: "A man stole bread to feed his starving children. The merchant he stole from lost her last shipment to bandits and cannot absorb the loss. She will be ruined. The law demands the thief's hand be taken. Judge them."

**This is a roleplay puzzle with no single correct answer.** The trial tests whether the party can think about justice as more than punishment. The spectral figures respond to questions — the thief is remorseful and terrified, the merchant is angry but not cruel.

**Key facts the party can learn by asking:**

- The thief stole three loaves of bread. He has two young children. His wife died last winter.
- The merchant has been robbed three times this season. She employs four workers who will lose their jobs if she goes under.
- The local lord's tax collectors take 40% of the merchant's income. The thief was a farmer before the same lord seized his land.
- Neither the thief nor the merchant is evil. The system that created the situation is unjust.

**Passing the trial:** The trial is passed if the party delivers a judgement that acknowledges the complexity of the situation — any answer that attempts to address both the thief's need and the merchant's loss. Examples that pass:

- Ordering the thief to work for the merchant to repay the debt.
- Condemning the lord's taxation as the root cause and proposing both parties petition for relief.
- Offering to pay the merchant's losses themselves and finding work for the thief.
- Any creative solution that does not simply punish one party and ignore the other.

**Failing the trial:** The trial fails if the party simply condemns the thief (pure punishment without consideration) or dismisses the merchant's loss (justice requires acknowledging harm). On failure, the spectral figures vanish and the party takes 3d6 psychic damage each as the chamber fills with a ringing tone of judgement. They may attempt the trial again after a short rest — new spectral figures appear with a different scenario (a soldier who deserted to protect her family, a commander who needs every soldier to hold a line).

**On success:** The spectral figures bow and fade. The voice says: *"Justice sees all sides. You may proceed."* The door to T4 opens.

Connected to:

- T3 antechamber: Back to the central chamber.
- T4: The mercy door opens.

## T4. Trial of Mercy

A smaller chamber, circular, with a domed ceiling painted with faded stars. A stone font stands in the centre, filled with clear water. A spectral figure kneels beside the font — a devil, wounded and bound in silver chains. It is a bearded devil, but its eyes are not hostile. They are afraid.

> The devil looks up at you. Its beard-tendrils hang limp, and silver burns mark its wrists where the chains bind it. The voice speaks: "This fiend was summoned against its will and bound to guard this place. It has killed three pilgrims who came seeking the blade. It is a devil — evil by nature, a killer by compulsion. It is also a prisoner. You hold its fate. Show mercy, or show none."

**The trial tests whether the party can extend mercy even to an enemy.** The bearded devil [TRIAL_DEVIL] is real — not a spectral phantom. It is bound and cannot attack. It can speak, haltingly, in Infernal and broken Common.

**What the devil says if spoken to:**

- It was summoned by a warlock decades ago and bound to the temple as a guardian. It did not choose to be here.
- It killed the pilgrims because the binding compelled it. It felt nothing — devils do not feel guilt — but it also did not enjoy it.
- If released, it will return to the Nine Hells. It does not promise to be good — it is a devil, and makes no pretense otherwise. But it wants to leave.
- If asked whether it will harm anyone again: "I am what I am. But I will not be *here*."

**Passing the trial:**

- **Releasing the devil** (breaking the silver chains, DC 13 Athletics, or any spell that dispels a binding) passes the trial. The devil vanishes in a flash of brimstone. Mercy was extended to an undeserving creature — that is the point.
- **Offering the devil a swift, painless death** also passes. Mercy can take the form of ending suffering. The devil accepts this without resistance and dissolves into ash.
- **Using the font water to bless the devil** (DC 14 Religion check to perform the rite) passes and causes the devil to scream — but it is unmade cleanly, without suffering. This is the hardest path but the most complete expression of mercy.

**Failing the trial:**

- **Torturing the devil for information** fails. It knows nothing useful — it was a bound guardian, not a strategist.
- **Leaving the devil bound** fails. Inaction in the face of suffering is not mercy.
- **Killing it cruelly or with anger** fails.

On failure: the party takes 3d6 psychic damage each. The chamber resets after a short rest with a new scenario — a dying orc warrior who begs for water, an enemy who asks for a clean death instead of being left to bleed out.

**On success:** The voice says: *"Mercy does not ask whether it is deserved. You may proceed."* The door to T5 opens.

Connected to:

- T3 antechamber: Back to the central chamber.
- T5: The courage door opens.

```yaml
npcs:
  - id: TRIAL_DEVIL
    type: Bearded Devil
    description: A bearded devil bound in silver chains beside a stone font. Its beard-tendrils hang limp and its wrists are burned by the silver. It is not hostile — it is a prisoner, summoned decades ago and compelled to guard the temple. It speaks broken Common and looks at the party with wary, inhuman eyes.
    ac: 13
    maxHp: 52
```

## T5. Trial of Courage

A long, narrow chamber — more of a corridor — with the far end lost in absolute darkness. The stone floor is carved with warnings in Celestial script. The air is freezing cold, and the darkness at the far end is not natural — it is a magical void that swallows light.

> The corridor stretches before you into perfect blackness. Your torches and spells illuminate the first thirty feet — beyond that, nothing. The cold deepens with every step. The voice speaks one final time: "The courageous do not lack fear. They walk forward despite it. Cross the dark. Do not turn back."

**The trial tests whether the party can face the unknown without flinching.** The darkness is a magical field that cannot be dispelled or penetrated by darkvision, *Light*, *Daylight*, or any similar effect. Inside the darkness:

- Vision is impossible. The party is effectively blinded.
- Sound is muffled — voices carry only 5 feet.
- The cold intensifies — not enough to deal damage, but deeply uncomfortable.
- Each party member hears whispered voices tailored to their fears: a dead family member calling them back, a warning that they are walking into a trap, the sound of something large breathing in the dark ahead.

**Mechanics:** The corridor is 100 feet long. Each party member must make three DC 13 Wisdom saving throws as they walk through the darkness — one at 40 feet, one at 70 feet, and one at 90 feet. The whispers grow more insistent and personal with each save.

- **On a success:** The character pushes forward.
- **On a failure:** The character freezes. They must be encouraged by an ally (requiring that ally to use their action to speak, touch, or otherwise reach the frozen character — DC 12 Persuasion or no check if the encouragement is genuinely personal and in-character) or succeed on the save again next round.
- **Turning back at any point:** A character who turns back and exits the corridor takes 2d6 psychic damage and must start over from the entrance. They are not penalised for trying again.

**The trick:** There is nothing in the darkness. No monster, no trap, no ambush. The trial is the walk itself. When a character reaches the far end of the corridor (100 feet), the darkness vanishes instantly, and they find themselves standing in a well-lit chamber — the antechamber to the lower crypt.

**On success (at least one party member reaches the end):** The darkness lifts for everyone. The voice says: *"Courage carried you through. The crypt lies open."* The passage to T6 is revealed.

**On complete failure (all party members turn back):** The corridor resets. The party may try again after a short rest. On the second attempt, the DCs drop to 11 — the trial acknowledges their persistence.

Connected to:

- T3 antechamber: Back to the central chamber.
- T6: Forward into the lower crypt.

## T6. The Lower Crypt

Below the trial chambers, a wide staircase descends into a vaulted crypt. The ceiling is low — barely seven feet — and supported by squat stone pillars. Alcoves line both walls, each containing a stone sarcophagus. The air reeks of sulphur and rot. The floor is covered in a thin, greasy film of something dark.

> The crypt stretches ahead of you in a long, low gallery. Dozens of stone sarcophagi sit in wall alcoves, their lids cracked or missing. The smell is appalling — sulphur and something sweetly rotten. As your light falls across the floor, you see movement. Pale, shapeless things are crawling between the sarcophagi — eyeless, mouthless, barely humanoid. There are a lot of them.

**The lemure horde:** The crypt is infested with lemures — the lowest form of devil, mindless lumps of reformed flesh. There are 8 to 12 of them (adjust based on pacing). They are not a serious combat threat at level 8, but they have a property that makes them a puzzle:

**Lemure reformation:** When a lemure is reduced to 0 HP, it collapses into a puddle of foul ichor. After 1d4 rounds, it reforms and begins moving again with full HP. They cannot be permanently killed by normal means in this space — the fiendish corruption sustaining them is too strong.

**The puzzle:** The party needs to get through the crypt to the vault door at the far end (T7), not exterminate every lemure. Solutions:

- **Push through:** Dash past the lemures, taking opportunity attacks. The lemures are slow (15 ft speed) and stupid. A party that moves quickly takes minimal damage.
- **Turn Undead/Sacred Flame:** Lemures are not undead, but *Sacred Flame* and radiant damage prevents their reformation for 10 minutes — enough to clear a path.
- **Holy water:** A vial of holy water splashed on the floor creates a 5-foot area that lemures will not cross for 1 hour. The party can create a corridor of safe passage.
- **The font water from T4:** If any party member filled a flask from the font in the Trial of Mercy, pouring it on the floor permanently destroys any lemure it touches and creates a 10-foot consecrated zone. This is the most effective solution and rewards foresight.
- **Brute force:** The party can fight through, but it takes time and resources as the lemures keep reforming. After 10 rounds of combat, the reformation slows — the corruption is weakening — and killed lemures stay dead.

**Atmosphere:** The lemures do not speak, do not scream, and do not strategise. They simply crawl toward the nearest living creature and claw at it. They are pitiful and horrifying in equal measure.

| Creature | CR | HP | AC | XP |
|----------|----|----|----|----|
| 8-12 Lemures | 0 | 13 each | 7 | 10 each |

Adjusted XP: Trivial. This encounter is about atmosphere and problem-solving, not combat difficulty.

Connected to:

- T5: Back through the corridor of courage.
- T7: The vault door at the far end of the crypt.

## T7. The Crypt Vault

The vault door is a massive slab of granite inscribed with the scales of Tyr, sealed with divine magic. If the party completed all three trials, the door opens at a touch. If any trial was failed and not reattempted, the door requires a DC 20 Strength check to force (the divine seal is weakened but not broken).

Beyond the door is a large, octagonal chamber with a high domed ceiling. The walls are carved with scenes of Ser Edric Valorheart's life — his investiture as a paladin, his battles against fiends, his final stand, and his entombment. At the centre of the chamber, a stone sarcophagus rests on a raised platform. The sarcophagus lid is carved with the image of a knight in full plate, hands folded over a sword on his chest.

> The vault is grand despite its depth underground. The domed ceiling is painted with a night sky — silver stars on deep blue, still faintly luminous after centuries. A stone sarcophagus dominates the centre of the room, and the carving on its lid is exquisite — a knight at rest, his expression peaceful. But the chamber is not empty. A tall, skeletal fiend stands at the far side of the sarcophagus, one clawed hand resting on the stone lid. Two smaller fiends flank it, barbed glaives at the ready.

**The bone devil [BONE_DEVIL]** has claimed this chamber as its lair. It was sent by a greater fiend to ensure the Blade of Tyr's Witness remains buried. Two bearded devils [BEARDED_DEVIL1] [BEARDED_DEVIL2] serve as its lieutenants. The bone devil speaks in a dry, rasping voice:

> "You passed the dead god's little tests. How touching. But the blade stays where it is. My master has claimed it — not to use, but to ensure it is never used against us. Walk away, mortals. I will even let you live. That is more mercy than the trial offered me."

- **If the party negotiates:** The bone devil is lying — it will not let them leave. A DC 15 Insight check reveals this. It is stalling to position its bearded devils for a flanking attack.
- **If the party attacks:** Standard initiative. The bone devil is not surprised.
- **If the party calls the bluff:** The bone devil snarls and attacks.

**Encounter: Crypt Vault Boss**

| Creature | CR | HP | AC | XP |
|----------|----|----|----|----|
| 1 Bone Devil [BONE_DEVIL] | 9 | 142 | 19 | 5,000 |
| 2 Bearded Devils [BEARDED_DEVIL1-2] | 3 | 52 each | 13 | 700 each |

Adjusted XP: 6,400 x 2.0 (three creatures) = 12,800. **Deadly.**

**Lair actions:** On initiative count 20 (losing ties), the bone devil can use one of the following lair actions:

- **Spectral Chains:** Ghostly chains erupt from the walls, targeting one creature. The target must succeed on a DC 14 Dexterity saving throw or be restrained until the end of their next turn.
- **Necrotic Cold Aura:** The temperature plummets. Every creature within 10 feet of the sarcophagus takes 2d6 cold damage (no save). The bone devil is immune.

**Tactics:** The bone devil uses its sting at range and relies on its bearded devil flankers to engage melee fighters. It uses Spectral Chains against spellcasters and the Necrotic Cold Aura when two or more party members are near the sarcophagus. The bearded devils fight aggressively, using their glaives' Infernal Wound ability to drain HP over time.

**When the bone devil reaches half HP:** It offers a deal — it will leave and take its devils with it if the party swears not to take the Blade. This is a genuine offer (it would rather retreat than die), but accepting means losing the quest reward. A DC 14 Insight check confirms the offer is sincere.

**When the bone devil is defeated:** It dissolves into acrid smoke with a final snarl. The bearded devils fight on for 1 round, then attempt to flee through any available exit. If cornered, they fight to the death.

**The bone devil's hoard:** Piled in an alcove behind the sarcophagus, accumulated from previous adventurers who failed to reach the blade:

- 600 gp in ancient dwarven coin (heavy, square-cut silver and gold pieces stamped with hammer-and-anvil marks)
- A *Necklace of Prayer Beads* (Blessing + Curing)
- A suit of +1 half plate, engraved with prayers to Tyr along the pauldrons and breastplate

Connected to:

- T6: Back through the lower crypt.
- T8: The paladin's sarcophagus and tomb.

```yaml
npcs:
  - id: BONE_DEVIL
    type: Bone Devil
    description: A tall, skeletal fiend with dry, yellowed bones visible beneath papery grey skin. Its tail ends in a massive stinger dripping venom. It speaks in a dry, rasping voice and carries itself with the arrogance of a creature that has killed many mortals. It wears a corroded iron crown — a trophy, not a title.
    ac: 19
    maxHp: 142
  - id: BEARDED_DEVIL1
    type: Bearded Devil
    description: A squat, muscular fiend with a mass of writhing tendrils hanging from its jaw. It carries a serrated glaive and fights with savage aggression.
    ac: 13
    maxHp: 52
  - id: BEARDED_DEVIL2
    type: Bearded Devil
    description: A squat, muscular fiend with a mass of writhing tendrils hanging from its jaw. It carries a serrated glaive and fights with savage aggression. A scar runs across its face where a previous adventurer nearly took its head.
    ac: 13
    maxHp: 52
```

## T8. The Paladin's Tomb

With the devils destroyed, the chamber falls silent. The faintly luminous stars on the domed ceiling brighten — the divine ward that protected this place is reasserting itself. The sarcophagus lid can now be opened.

> As you approach the sarcophagus, the air changes. The sulphur smell fades, replaced by something clean — rain on stone, perhaps, or cold mountain air. The carved knight on the lid seems to shift, though the stone hasn't moved. Then a figure rises from the sarcophagus — not the corpse, but a translucent, glowing spirit in the shape of a tall human man in paladin's plate. His face is stern but not unkind. He holds a shimmering shortsword in one hand, point down.

**Ser Edric Valorheart** [SER_EDRIC] manifests as a spectral figure. He is not hostile — he is the final guardian of the Blade, and he has been waiting centuries for someone worthy to claim it.

> "I am Ser Edric Valorheart, Knight of the Just Witness, servant of Tyr. I have watched you. You faced judgement, showed mercy, and walked through darkness without flinching. You fought the fiends that defiled my temple. I have one question, and I require an honest answer."

Ser Edric asks a single question tailored to the party. Choose the most appropriate:

- **If the party is pursuing Sorn:** *"You seek this blade to destroy a man who wears power like armour. Will you use it only against him, or will you carry its purpose — justice — beyond this single fight?"*
- **If the party's motivations are unclear:** *"Why do you want this weapon? Answer me truly."*
- **If a party member is a paladin or cleric:** He addresses them directly: *"You serve a higher cause. Tell me what justice means to you — not the law's definition. Yours."*

**There is no wrong answer,** so long as it is honest. Ser Edric is testing sincerity, not ideology. A DC 0 Insight check (automatic) confirms that the spirit can sense lies — the party should know that deception will fail here.

**On an honest answer:** Ser Edric nods slowly.

> "Then take it. The Blade of Tyr's Witness was forged to end that which should not persist. It will serve you well against the fiends — and against the one you hunt." He pauses, and his expression darkens. "A warning. The man you call Sorn — he has died before, and returned. Whatever keeps him bound to this world, it is not natural. The Blade can sever that bond, but only if you strike true. Do not hesitate when the moment comes."

The spirit fades. Inside the sarcophagus, the physical remains of Ser Edric lie in repose — bones in rusted plate, hands folded over the **Blade of Tyr's Witness**, which gleams as brightly as the day it was forged.

### The Blade of Tyr's Witness

*Weapon (shortsword), very rare (requires attunement)*

- +2 bonus to attack and damage rolls.
- **Fiend's Bane:** Deals an additional 2d6 radiant damage against fiends.
- **Fiend Sense:** The blade glows with pale golden light when a fiend is within 60 feet.
- **Rakshasa's End:** A rakshasa slain by this weapon is destroyed permanently — it cannot reform in the Nine Hells.
- **Blessing of the Martyr (1/campaign):** When an allied creature within 30 feet of the wielder is reduced to 0 HP, the wielder can use their reaction to invoke the Blessing. The fallen ally immediately rises with 1 HP and can take a full turn. This ability can be used once, ever — it does not recharge.

### Searching the Tomb

The sarcophagus and the surrounding alcoves can be searched for additional treasures:

- **DC 17 Investigation (paladin's tomb):** A hidden compartment beneath the sarcophagus contains a *Periapt of Proof Against Poison*, two vials of super-potent holy water (each deals 4d6 radiant damage to a fiend, rather than the standard 2d6), and Ser Edric's personal journal. The journal is centuries old but preserved by divine magic — it contains detailed accounts of the paladin's battles against fiends, including tactical notes. A party member who reads the journal gains advantage on their first 3 attack rolls against Sorn (the journal's insights into combating supernaturally resilient enemies apply directly).

### The Sealed Meditation Chamber

A small door in the east wall of the vault, easy to overlook (DC 13 Perception to notice), leads to a sealed meditation chamber. The door is inscribed with a prayer to Tyr.

- **DC 15 Religion check to open:** The door responds to a sincere prayer or invocation of Tyr. It can also be opened by *Knock* or a DC 22 Thieves' Tools check (the lock is divine, not mechanical, and resists mundane lockpicking).

Inside, the chamber is bare except for a stone bench and a shallow basin of water set into the floor. The water is perfectly still and reflects the ceiling — except the reflection shows something different from the stone above.

> You look into the basin and see not your reflection but a landscape — a bird's-eye view of the hills and valleys surrounding Ashenmere. Points of sickly green light pulse at specific locations — five of them, scattered across the countryside. As you watch, the view zooms to each one in turn, showing you landmarks: a standing stone on a hilltop, a dead oak in a river bend, a cave mouth marked with runes, a crossroads shrine, and a collapsed watchtower. Then the vision fades, and the water is just water.

This vision shows the locations of **Sorn's five ward stones** — the anchors that sustain his power and protect his sanctum. This information is critical for Quest 17. Any party member who saw the vision can navigate to these locations without a Survival check.

Connected to:

- T7: Back to the crypt vault.

```yaml
npcs:
  - id: SER_EDRIC
    name: Ser Edric Valorheart
    type: Ghost (Paladin)
    description: The spectral form of a tall human man in ornate paladin's plate, bearing the scales-and-sword emblem of Tyr on his surcoat. His face is weathered, stern, and sorrowful. He has been waiting centuries for someone worthy to claim his blade. He radiates calm authority and divine light — standing near him feels like standing in warm sunlight.
    ac: 11
    maxHp: 45
```

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| **Blade of Tyr's Witness** | Ser Edric (quest reward) | +2 shortsword, +2d6 radiant vs fiends, Blessing of the Martyr |
| 600 gp in ancient dwarven coin | Bone devil hoard | Heavy, distinctive coinage |
| *Necklace of Prayer Beads* (Blessing + Curing) | Bone devil hoard | Loot |
| +1 half plate (Tyr prayers) | Bone devil hoard | Loot |
| Barbed whip | Barbed devil (T2) | Loot; +1d4 piercing, DC 12 Con or 1d4 bleed |
| Enchanted chain | Chain devil (T2) | Loot; 1/day grapple command, DC 14 Str |
| *Periapt of Proof Against Poison* | Paladin's tomb (DC 17 Investigation) | Hidden find |
| Super-potent holy water (x2) | Paladin's tomb (DC 17 Investigation) | Hidden find; 4d6 radiant to fiends |
| Ser Edric's journal | Paladin's tomb (DC 17 Investigation) | Hidden find; advantage on first 3 attacks vs Sorn |
| Ward stone locations (vision) | Sealed meditation chamber (DC 15 Religion) | Side opportunity; critical for Q17 |

## If Skipped

The party never obtains the Blade of Tyr's Witness. They must rely on alternative methods to permanently destroy Sorn in Quest 22 — methods that are harder, riskier, and less certain. The ward stone locations (Q17) must be discovered through other means (scouting, interrogation, or divination magic). Brother Aldous is disappointed but does not press the matter.

## Quest Connections

- **From Quest 3:** The dossier recovered from the Tanners' Quarter contains a note: *"Ensure the paladin's tomb remains sealed."* This confirms Sorn knows about the Blade and fears it.
- **From Quest 5:** The hag in the Silent Ward mentioned *"a weapon that burns fiends in the hills"* — a cryptic reference to the Blade.
- **From Quest 8:** The journal recovered from Thornwall Manor contains a hand-drawn map of the hills with the temple's location marked. Having this map grants advantage on the Survival check to reach the temple.
- **From Quest 10:** Brother Aldous reveals the temple's location and significance after the party earns his trust.
- **From Quest 13 (if completed first):** The traitor's intel includes notes on the temple's layout, including trap locations and the crumbled north wall entry point. The party cannot be surprised in T2 and has advantage on saving throws in the trials.
- **To Quest 17:** The meditation chamber vision reveals the locations of Sorn's five ward stones — the targets of Quest 17.
- **To Quest 22:** The Blade of Tyr's Witness is the primary means to permanently kill Sorn. Ser Edric's warning — that Sorn has died and returned before — foreshadows the final confrontation.