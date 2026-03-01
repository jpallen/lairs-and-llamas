# Quest 8: Masquerade at Thornwall Manor

**Level:** 6 | **Type:** Discovery (optional) | **Style:** Heist/Social Infiltration

The party infiltrates a lavish masquerade ball at Lady Thornwall's estate, where Vaelith Sorn is courting her political support. Their goal: steal correspondence from Sorn's private meeting room that proves he is blackmailing council members. Maren provides forged invitations and a contact inside the manor — a servant named Calla who has seen things she cannot unsay.

This quest rewards cunning over force. Disguises, deception, lockpicking, and social manoeuvring are the tools of the evening. Combat is a failure state — if the party is detected and violence breaks out, the mission is blown. Multiple approaches exist: charm the guards, pick the locks, create a distraction, or find the servant's passage behind the walls.

---

The invitations are printed on heavy cream stock, edged with gold leaf. Maren slides them across the table at the safehouse.

> "Lady Thornwall hosts a masquerade ball at her estate tonight. Sorn will be there — he always is. He keeps a private meeting room on the upper floor where he conducts his real business. I need you to get into that room and bring me whatever you find. Letters. Contracts. Anything with names on it."

She pauses, her expression hard.

> "One more thing. Do not confront Sorn. Do not fight anyone. If the guards draw steel, the night is over and we get nothing. You are guests. Smile, dance, drink the wine, and steal his secrets."

## A1. The Manor Entrance and Ballroom

Thornwall Manor sits atop a low hill in the Noble Quarter, its facade of pale stone and dark timber lit by dozens of hanging lanterns. A long gravel drive leads to the main doors, where liveried servants check invitations and two guards in polished breastplates flank the entrance. Beyond the doors, the grand ballroom is already alive with music, laughter, and the rustle of silk.

> The ballroom is magnificent. Crystal chandeliers throw warm light across a marble floor crowded with masked dancers. A string quartet plays from a raised platform. Long tables are laden with roast pheasant, honeyed fruits, and towers of pastry. Everywhere you look, the masks of Ashenmere's elite glitter — feathered, jewelled, grotesque, beautiful. The air is thick with perfume and ambition.

At the entrance, a steward [STEWARD] checks invitations against a guest list. The forged invitations Maren provided are good — a DC 10 Deception check gets the party through without issue. On a failure, the steward frowns and calls over a guard to ask a few questions; a DC 13 Deception or Persuasion check talks past this. A second failure means the party is turned away from the front door and must find another way in (see A5 — the Servant's Passage).

**Inside the ballroom:** The party must blend in. Each character should describe their mask and outfit. While in the ballroom, the party can mingle, gather information, and identify key figures.

**Mingling checks:** Any character who spends time socialising can attempt the following:

- **DC 12 Persuasion:** A tipsy noble mentions that Lady Thornwall has been "out of sorts" for months — she barely socialises at her own party. "She used to be the life of these things. Now she just drifts."
- **DC 13 Insight:** Watching the crowd, the character notices that Sorn [SORN] is always surrounded by at least three nobles who defer to him visibly. They laugh too quickly at his jokes. They are afraid.
- **DC 14 Perception:** Two of the serving staff are not behaving like servants. They move through the room without trays, watching the guests with sharp, roaming eyes. These are Sorn's plainclothes guards [GUARD3] [GUARD4] — not the uniformed ones at the door.
- **DC 15 Arcana (or Detect Magic):** A faint shimmer near the ceiling — two invisible imps [IMP1] [IMP2] cling to the chandelier chains, scanning the room. They are Sorn's surveillance. If a character casts Detect Magic, the imps register as fiendish. The imps do not attack — they report to Sorn telepathically if they see anything suspicious.

**Vaelith Sorn** [SORN] is present in the ballroom, moving through the crowd with easy charm. He wears a mask of polished silver shaped like a smiling fox. He is gracious, witty, and utterly dangerous. If approached, he is delighted to make new acquaintances. He asks pointed questions about the party's business in Ashenmere, their patrons, and their interests. A DC 15 Insight check reveals that beneath the charm, he is probing — cataloguing the party for future use.

**If the party confronts Sorn directly:** He denies everything with amused disbelief. "Blackmail? My dear friend, I am a patron of the arts and a humble servant of the council. You must be confusing me with someone far more interesting." He signals his guards and has the party escorted out. The quest ends in failure — no evidence is recovered.

Connected to:

- A2: The gardens are accessible through glass doors on the south side of the ballroom.
- A3: The upstairs corridor is reached by a grand staircase on the east side, guarded by two uniformed guards.
- A5: The servant's passage entrance is hidden behind a tapestry on the north wall (DC 16 Perception to notice, or Calla can point it out).

```yaml
npcs:
  - id: SORN
    name: Vaelith Sorn
    type: Rakshasa
    description: A tall, elegant man with dark hair swept back and a silver fox mask. He moves through the ballroom like he owns it — and in a sense, he does. His suit is immaculate charcoal silk with a blood-red cravat. His hands are always gloved. He radiates effortless authority and warmth, and every word he speaks is carefully chosen. He does not fight tonight under any circumstances — his cover is worth more than any single confrontation.
    abilityScores:
      str: 14
      dex: 17
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
  - id: STEWARD
    name: Harlan
    type: Human Commoner
    description: A thin, fastidious man in a high-collared coat who takes his role as head steward with deadly seriousness. He checks invitations with the precision of a customs inspector. He is not in Sorn's employ — he is Lady Thornwall's household staff and takes pride in doing his job correctly.
  - id: GUARD1
    type: Guard
    description: A uniformed manor guard in a polished breastplate bearing the Thornwall crest — a silver thorn on a black field. Professional and attentive.
  - id: GUARD2
    type: Guard
    description: A uniformed manor guard, partner to GUARD1. Stands at the main entrance.
  - id: GUARD3
    type: Spy
    description: A plainclothes guard posing as a guest. Lean build, dark mask, no tray. Moves through the crowd watching for trouble. Works for Sorn, not Lady Thornwall.
  - id: GUARD4
    type: Spy
    description: A plainclothes guard posing as a guest. Stocky, floral mask, positioned near the staircase. Works for Sorn, not Lady Thornwall.
  - id: IMP1
    type: Imp
    description: An invisible imp clinging to a chandelier chain. Serves as Sorn's surveillance, telepathically reporting anything suspicious. Does not attack unless Sorn commands it.
  - id: IMP2
    type: Imp
    description: An invisible imp perched on a wall sconce near the staircase. Same role as IMP1.
```

## A2. The Gardens

A walled garden behind the manor, accessible through glass doors in the south wall of the ballroom. Gravel paths wind between sculpted hedges, rose beds, and a stone fountain shaped like a leaping stag. Paper lanterns hang from iron poles, casting pools of warm light. Several guests have drifted outside for fresh air, private conversation, or assignation.

> The night air is cool and carries the scent of roses and cut grass. The garden is quieter than the ballroom — a few masked figures murmur on stone benches, and somewhere nearby a woman laughs softly. Beyond the hedges, the manor's east wing rises three storeys high. You can see lit windows on the upper floor — including one with the curtains drawn tight.

The curtained window belongs to Sorn's private meeting room (A4). A character can reach it by climbing the east wall of the manor.

**Climbing the wall:** The stonework is old and offers good handholds. DC 13 Athletics to climb. The window is latched from inside — DC 14 Thieves' Tools to open it quietly, or DC 16 Strength to force it (but this is loud and alerts the guards inside the upstairs corridor within 1 round).

**Garden encounters:**

- **Lady Thornwall** [THORNWALL] is sitting alone on a bench near the fountain, away from the other guests. She wears a mask of white porcelain that covers her entire face. She is drinking wine and staring at nothing. If approached with sympathy, see "Turning Lady Thornwall" below.
- **DC 12 Perception:** A servant [CALLA] is collecting empty glasses near the hedge wall. She glances at the party and then deliberately drops a glass near the garden gate — a signal. If a character goes to help her pick it up, she whispers: "Meet me in the kitchen passage. North wall of the ballroom. Behind the stag tapestry." This is the entrance to A5.

**Turning Lady Thornwall:** Lady Thornwall is terrified, isolated, and desperate. She attends her own party because Sorn requires it — she is a prop in his performance. If a character approaches her gently and without aggression, she responds to kindness. She will not speak openly in the garden — too many ears.

- **DC 13 Persuasion:** She admits she is unhappy. "This was supposed to be my home. Now it feels like a cage."
- **DC 15 Persuasion (or DC 13 if the party mentions the note from Q6):** She tells the party to come to her private chambers later — "The third door on the left, upstairs. Knock twice, then once." See A6.
- **If the party shows her evidence of Sorn's blackmail (from A4):** She breaks down. She will cooperate fully — see "Turning Lady Thornwall" in the wrap-up section.

Connected to:

- A1: Back through the glass doors to the ballroom.
- A4: The lit window above can be reached by climbing the east wall.

```yaml
npcs:
  - id: THORNWALL
    name: Lady Isara Thornwall
    type: Human Noble
    description: A tall woman in a gown of midnight blue, wearing a white porcelain mask that hides her expression entirely. She moves with the practised grace of someone raised in court, but there is something brittle about her — a tension in her shoulders, a tendency to flinch at sudden sounds. Her late husband, Lord Edric Thornwall, died two years ago. Since then, Sorn has systematically taken control of her estate, her finances, and her political influence. She is terrified of him but has not given up hope entirely.
    abilityScores:
      str: 8
      dex: 12
      con: 10
      int: 14
      wis: 13
      cha: 16
    ac: 11
    maxHp: 9
    speed: 30
    skills:
      - history
      - insight
      - persuasion
  - id: CALLA
    name: Calla
    type: Human Commoner
    description: A young woman in servant's livery with dark hair pinned under a white cap. She has watchful brown eyes and moves with quiet efficiency. She has worked in Thornwall Manor for three years and has seen Sorn's agents come and go at all hours. She is frightened but resolute — she wants to help because she is loyal to Lady Thornwall, not to whoever has taken over the house. She knows the servant's passages intimately.
```

## A3. The Upstairs Corridor

The grand staircase from the ballroom leads to a wide, carpeted corridor on the upper floor. Portraits of the Thornwall family line the walls. The corridor has five doors: Lady Thornwall's chambers (A6), a guest suite, a library, Sorn's private meeting room (A4), and a side room where the cambion waits.

> The corridor is quieter than the ballroom below. Thick carpet muffles your footsteps. Portraits of stern-faced nobles stare down from the walls — the Thornwall lineage, going back generations. Two guards stand at the far end of the corridor, near a heavy oak door. The door bears a brass plate that reads "Private."

Two uniformed guards [GUARD5] [GUARD6] stand outside Sorn's meeting room (A4). They are alert and under orders to admit no one except Sorn himself.

**Getting past the guards:**

- **DC 14 Deception:** Claim to be a guest who was told to deliver a message to the room. The guards are suspicious but may let a single character approach the door.
- **DC 15 Persuasion:** Convince them Lady Thornwall sent you to retrieve something from the room. Works better if a character has spoken to Lady Thornwall and can describe her accurately.
- **DC 16 Deception (with disguise kit or Disguise Self):** Impersonate one of Sorn's known associates. The guards step aside without question.
- **Distraction:** If a character creates a disturbance elsewhere — a fight in the ballroom, a fire in the kitchen, a guest collapsing dramatically — the guards leave their post to investigate. This requires coordination and a DC 12 Performance or Deception check from the distraction-maker. The guards are gone for 3 rounds before returning with reinforcements.
- **Stealth:** A character can attempt to sneak past while the guards are distracted (DC 14 Stealth). The servant's passage (A5) bypasses the guards entirely.

**The side room:** The second door on the right is unlocked and appears to be a reading room. Inside, Kaelrath the cambion [KAELRATH] sits in an armchair, reading. He looks like a handsome man in a dark suit — his fiendish nature is hidden by an Alter Self spell. He is Sorn's bodyguard and is here in case of trouble.

- **DC 15 Perception (or Detect Magic):** Something is wrong about the man in the side room. His shadow doesn't match his posture. His eyes catch the light like a cat's.
- **If a character enters the side room:** Kaelrath looks up with a pleasant smile. "Lost, are we? The party is downstairs." He does not attack unless the party is hostile or he is ordered to by Sorn. If combat begins here, see "Combat — Failure State" below.

Connected to:

- A1: The grand staircase descends to the ballroom.
- A4: Sorn's private meeting room is the door at the end, guarded.
- A5: The servant's passage runs behind the walls, with an exit point in this corridor.
- A6: Lady Thornwall's private chambers are the third door on the left.

```yaml
npcs:
  - id: GUARD5
    type: Guard
    description: A uniformed manor guard stationed outside Sorn's meeting room. Alert, professional, and under strict orders.
  - id: GUARD6
    type: Guard
    description: Partner to GUARD5. Slightly more talkative but no less vigilant.
  - id: KAELRATH
    name: Kaelrath
    type: Cambion
    description: A fiendishly handsome figure in a dark, well-tailored suit. He appears human thanks to Alter Self — dark hair, angular features, an easy smile that doesn't reach his eyes. In his true form, he has small curved horns, bat-like wings folded against his back, and skin the colour of dark bronze. He carries a scimitar concealed beneath his jacket. He is utterly loyal to Sorn and will fight to the death to protect him — but tonight, he waits unless called.
    abilityScores:
      str: 18
      dex: 18
      con: 16
      int: 14
      wis: 12
      cha: 16
    ac: 19
    maxHp: 82
    speed: 30
    skills:
      - deception
      - intimidation
      - perception
      - stealth
```

## A4. Sorn's Private Meeting Room

A richly appointed study behind the heavy oak door. Bookshelves line the walls, a fireplace crackles in the corner, and a large mahogany desk dominates the centre of the room. The curtains on the east window are drawn tight. This is where Sorn conducts business that cannot be spoken of in the council chamber.

> The room smells of leather, ink, and old smoke. A mahogany desk is covered with neat stacks of correspondence, a crystal decanter of brandy, and a brass letter opener. The bookshelves hold legal texts, trade ledgers, and a few volumes in languages you don't recognise. A fire burns low in the grate. Above the mantelpiece hangs a painting of Ashenmere at sunset — but something about the perspective is wrong, as though the painter were looking down from a great height.

**Searching the desk:**

- **No check required:** The top of the desk holds routine correspondence — trade agreements, party invitations, council meeting minutes. All boring and legitimate. This is the surface Sorn wants people to see.
- **DC 14 Investigation:** A hidden drawer in the desk, released by pressing a carved rosette on the front panel. Inside: three sealed letters and a leather portfolio.
- **DC 18 Thieves' Tools:** A locked compartment beneath the hidden drawer. Contains: 300 gp in assorted coin, a *Scroll of Counterspell*, and an infernal contract written on vellum that is warm to the touch.

**The sealed letters:** The three letters are addressed to council members by name. Each contains detailed instructions — how to vote on upcoming resolutions, what to say in public, and explicit threats of exposure if they disobey. One letter references "the shipment from Ul-Razzam" and instructs the recipient to ensure harbourmaster inspections are suspended for the duration. This connects directly to Quest 10.

**The infernal contract:** Written in Infernal (DC 14 Intelligence to read, or comprehend languages). It is a binding agreement between "the agent known as Sorn" and a fiendish patron. The contract names three council members as "bound servants" and describes the terms of their coercion — debts, scandals, and crimes that Sorn holds over them. The contract is signed in blood. This is the most damning evidence the party can recover.

**The painting:** A DC 15 Perception check notices that the painting of Ashenmere includes a building that doesn't exist in the current city — a tower on the north hill. A DC 14 History check identifies it as the old Temple of Tyr, destroyed decades ago but rumoured to still have foundations beneath the overgrowth. This connects to Quest 12.

**The bookshelves:** A DC 13 Investigation check reveals one book is hollowed out. Inside is a small journal in Sorn's handwriting containing shorthand notes on every major figure in Ashenmere — strengths, weaknesses, leverage points. Lady Thornwall's entry reads: *"Grief. Isolation. Total compliance achieved. Maintain pressure."*

**If the imps detected the party:** Sorn arrives at the room 3 rounds after the imps report. He does not enter alone — he brings Kaelrath and two guards. He does not fight. He stands in the doorway, smiles, and says: "How disappointing. I had hoped you were simply lost." He has the party escorted out of the manor. If the party has already taken the letters, Sorn sends agents to recover them — this becomes a complication in future quests but does not prevent the party from using the evidence.

Connected to:

- A3: The upstairs corridor, through the oak door.
- A5: The servant's passage has an exit behind a false panel near the bookshelf (DC 16 Perception, or Calla can show the party).
- A2: The east window overlooks the garden.

## A5. The Servant's Passage

A narrow, unlit passage running behind the walls of the manor, used by servants to move between rooms without disturbing guests. The passage is cramped, dusty, and dark — barely wide enough for one person to walk without turning sideways. It connects the kitchen (ground floor) to several rooms on the upper floor, including Sorn's meeting room and Lady Thornwall's chambers.

> The passage is pitch dark. The walls are rough plaster, and the floor is bare wood that creaks underfoot. Cobwebs brush your face. You can hear the muffled sound of the string quartet through the walls, and the distant clink of glasses. The passage branches — left toward the upper floor, right toward the kitchens.

**Entering the passage:** The main entrance is behind a tapestry depicting a stag hunt on the north wall of the ballroom (A1). DC 16 Perception to notice it independently, or Calla can point it out. A kitchen entrance also exists but is busy with servants — DC 14 Stealth to enter unseen.

**Navigation:** The passage is unlit. Characters without darkvision need a light source, which is visible through cracks in the walls. A hooded lantern or Dancing Lights at low intensity works; a torch does not (too bright, too much smoke). Moving through the passage without light requires DC 12 Stealth to avoid stumbling into walls and making noise.

**The passage branches:**

- **Left and up:** A narrow staircase leads to the upper floor. Exits behind a false panel into Sorn's meeting room (A4) and into Lady Thornwall's chambers (A6).
- **Right:** Leads to the kitchen, then to an exterior door into the gardens (A2).

**The hidden find:** A DC 17 Perception check in the upper section of the passage reveals a loose panel in the wall. Behind it is a small alcove containing a dusty wooden chest — Lord Edric Thornwall's personal effects, hidden here by a servant after his death to keep them from Sorn's people. The chest contains:

- A *Mithral Chain Shirt* — lightweight and gleaming, still in excellent condition.
- A *Quiver of Ehlonna* — currently empty but functional.
- A leather journal in Lord Thornwall's handwriting. Most of it is personal — reflections on his marriage, his duties, his faith. But the final pages contain a rough hand-drawn map showing a path through the northern hills to the ruins of the Temple of Tyr, with notes on landmarks and hazards. A character using this map has advantage on Survival checks to navigate to the temple (Quest 12).

**Calla's knowledge:** If Calla is with the party in the passage, she can guide them silently (no Stealth checks needed for navigation) and point out the exits. She also offers a partial floor plan of the Council Citadel — drawn from memory based on a delivery she made there six months ago. The floor plan is rough but accurate for the ground floor and main corridors. This is useful for Quest 18.

Connected to:

- A1: The tapestry entrance in the ballroom.
- A2: The exterior door to the gardens.
- A4: The false panel into Sorn's meeting room.
- A6: An exit near Lady Thornwall's chambers.

```yaml
npcs:
  - id: CALLA
    name: Calla
    type: Human Commoner
    description: A young woman in servant's livery with dark hair pinned under a white cap. She has watchful brown eyes and moves with quiet efficiency. She has worked in Thornwall Manor for three years and has seen Sorn's agents come and go at all hours. She is frightened but resolute — she wants to help because she is loyal to Lady Thornwall, not to whoever has taken over the house. She knows the servant's passages intimately.
```

## A6. Lady Thornwall's Private Chambers

A large, well-appointed bedroom on the upper floor. The room is lit by candles, not the harsh gas lamps used elsewhere in the manor. A vanity, a four-poster bed, a writing desk, and a window overlooking the gardens. The room feels like the only space in the manor that still belongs to Lady Thornwall — personal, quiet, and sad.

> The room is warm and softly lit. A candle burns on the vanity beside a silver brush and a small portrait in a locket — a man with kind eyes and a short beard. The bed is neatly made but the pillows are dented, as though someone has been sitting there rather than sleeping. A half-written letter sits on the desk, the ink still wet.

**If the party was invited by Lady Thornwall (from A2):** She arrives a few minutes after them, locking the door behind her. She removes her porcelain mask, revealing a drawn, pale face and dark circles under her eyes.

> "You should not be here. But I have run out of people I can trust, and I am running out of time."

Lady Thornwall explains:

- Sorn has controlled her estate since her husband's death. He holds debts, forged documents, and threats over her. She signed things she should not have signed.
- She knows Sorn is not what he seems — "His hands are wrong. He always wears gloves. And sometimes, when he thinks no one is watching, he speaks in a language I have never heard."
- She wants to be free of him but is terrified. She has seen what happens to people who oppose Sorn — they disappear, or they are found dead, or they simply change their minds overnight.
- She does not know the details of the infernal contract but suspects something "unholy" binds the council members to Sorn.

**If the party shows her the blackmail letters (from A4):** She is horrified but resolute. "Then it must end. Tell me what you need from me." She becomes an active ally — see the wrap-up section.

**If the party has not yet searched Sorn's room:** Lady Thornwall can describe the layout of A4, including the location of the hidden drawer (she has seen Sorn open it). This removes the need for the DC 14 Investigation check to find it.

**The half-written letter:** It is addressed to "Maren" — Lady Thornwall has been trying to reach the resistance but has been too afraid to send it. The letter describes Sorn's control over the council in vague terms. If the party takes it to Maren, it corroborates the blackmail evidence.

Connected to:

- A3: The upstairs corridor, through the bedroom door.
- A5: The servant's passage, through a panel behind the wardrobe.

---

## Combat — Failure State

If the party is detected and violence breaks out, combat is a consequence, not a reward. The goal shifts immediately from "steal evidence" to "escape the manor."

**Triggered by:** Attacking a guard, being caught in Sorn's room by Sorn himself, or any loud confrontation on the upper floor.

**Combatants:** The 2 invisible imps [IMP1] [IMP2] drop invisibility and attack. Kaelrath [KAELRATH] emerges from the side room and engages the nearest threat. The uniformed guards [GUARD5] [GUARD6] draw swords and block the corridor. The plainclothes guards [GUARD3] [GUARD4] move to cover the staircase.

**Adjusted difficulty:** 2 imps (CR 1 each, 400 XP each) + 1 cambion (CR 5, 1,800 XP) = base 2,600 XP. Adjusted for 3 monsters: x2 multiplier = 5,200 adjusted XP. This is a Hard encounter for a level 6 party (threshold 3,600).

**Sorn's behaviour:** He does not fight. He watches from a safe distance with an expression of mild disappointment. If addressed, he says: "How unfortunate. I had such hopes for you." He signals Kaelrath and the guards, then withdraws. He will not risk his cover by revealing his true nature.

**Escape routes:**

- **The servant's passage (A5):** The fastest and safest exit. Leads to the gardens or the kitchen.
- **The garden window (A4):** Jump or climb down. DC 13 Acrobatics to land safely; failure means 2d6 bludgeoning damage.
- **The grand staircase (A3):** Directly through the guards. Requires fighting or a DC 15 group Stealth check in the chaos.

**If the party escapes with the evidence:** The quest is a partial success — they have the letters but their cover is blown. Sorn knows someone is working against him. Future interactions with Sorn's agents become more dangerous.

**If the party escapes without the evidence:** The quest fails. The blackmail evidence is moved, and this opportunity does not recur.

---

## Wrap-Up

### If the Party Succeeds (Evidence Retrieved)

Maren receives the correspondence with grim satisfaction.

> "Three of five council seats. He controls three of five. No wonder nothing we do gains traction — the votes are decided before the chamber doors open."

The infernal contract is deeply disturbing to the resistance. Maren asks the party to keep it safe — it will be critical evidence when the time comes to expose Sorn publicly.

### Turning Lady Thornwall

If the party showed Lady Thornwall the evidence and treated her with compassion, she becomes an ally. This requires:

1. Speaking to her in the garden (A2) or her chambers (A6) without hostility.
2. Showing her the blackmail letters or infernal contract from A4.
3. Promising to protect her from Sorn's retaliation.

If turned, Lady Thornwall provides:

- Her public support when the time comes — she is still a respected figure in Ashenmere's nobility.
- The *Amulet of Protection from Evil and Good* — a family heirloom she kept hidden from Sorn. "My husband wore this. He would have wanted it used against something like Sorn."
- Information about Sorn's habits, his meeting schedule, and which council members visit the manor.

### If the Quest Is Skipped

The party does not obtain the blackmail evidence. Lady Thornwall remains under Sorn's control and cannot be turned into an ally. The council remains compromised, and the resistance has no proof of Sorn's hold over the political structure of Ashenmere.

### Calla's Floor Plan

If the party spoke with Calla in the servant's passage or the gardens, she provides a hand-drawn floor plan of the Council Citadel's ground floor. It is rough but includes guard positions, main corridors, and the location of the records hall. This is useful in Quest 18 — the Citadel assault.

Connected to:

- A1: The party can return to the ballroom to exit normally if undetected.
- A2: The garden provides a quiet exit.
- A5: The servant's passage exits to the gardens or the kitchen.

---

## Rewards Summary

| Reward | Source | Notes |
|--------|--------|-------|
| 200 gp | Maren (quest reward) | Paid by the resistance upon delivery of evidence |
| *Amulet of Protection from Evil and Good* | Lady Thornwall (if turned) | Family heirloom; requires turning Lady Thornwall |
| 300 gp | Sorn's desk (DC 18 Thieves' Tools) | Locked compartment |
| *Scroll of Counterspell* | Sorn's desk (DC 18 Thieves' Tools) | Locked compartment |
| Infernal contract naming bound officials | Sorn's desk (DC 18 Thieves' Tools) | Key plot evidence |
| Blackmail letters (3) | Sorn's desk (DC 14 Investigation) | Hidden drawer; name council members, reference Ul-Razzam |
| *+1 Scimitar* | Kaelrath (if combat triggered) | Cambion loot |
| *Ruby of the War Mage* | Kaelrath (if combat triggered) | Cambion loot |
| *Mithral Chain Shirt* | Servant's passage (DC 17 Perception) | Hidden find; Lord Thornwall's gear |
| *Quiver of Ehlonna* | Servant's passage (DC 17 Perception) | Hidden find; Lord Thornwall's gear |
| Journal with map to Temple of Tyr | Servant's passage (DC 17 Perception) | Hidden find; advantage on Survival checks to reach Q12 |
| Partial Citadel floor plan | Calla (side opportunity) | Useful for Q18; requires speaking with Calla |
| Sorn's shorthand journal | Bookshelves (DC 13 Investigation) | Intelligence on Ashenmere's major figures |
| Lady Thornwall's unsent letter to Maren | A6 writing desk | Corroborates blackmail evidence |

## Quest Connections

- **From Quest 3:** The blackmail dossier recovered in Q3 names Thornwall as one of Sorn's targets, establishing the party's reason to investigate the manor.
- **From Quest 5:** The hag mentions "the woman in the great house who weeps at night" — a reference to Lady Thornwall's isolation and grief under Sorn's control.
- **From Quest 6:** Lady Thornwall's note, found in Q6, hints at her desire to speak with someone she can trust — foreshadowing her willingness to be turned.
- **To Quest 10:** The sealed letters reference "the shipment from Ul-Razzam" and instructions to suspend harbourmaster inspections — a direct lead to the cursed cargo arriving by ship.
- **To Quest 12:** Lord Thornwall's journal in the servant's passage contains a hand-drawn map to the ruins of the Temple of Tyr, granting advantage on Survival checks to navigate there.
- **To Quest 18:** Calla's partial floor plan of the Council Citadel provides tactical information for the Citadel assault — guard positions, corridors, and the records hall.
