# Intro

Your adventuring party was making its way along the well-traveled road to Cyndervale when a thin column of smoke caught your attention, rising from the forest a few hundred yards off the main trail.

Who is in your party?

# DM Guide

A band of orcs have taken up temporary residence in an abandoned dwarf mine. They roam the nearby countryside looking for food and people to steal from. A halfling caravan with a family of grandparents, parents, and children camped for the night close to their lair. The orcs attacked the halflings and kidnapped the wife and grandparents, planning to eat them later as fresh meat.

The orcs are overseen by an orc war chief who resides in the old dwarven throne room with his two pet dire wolves at his feet.

The orcs have been prevented from delving too far into the mine due to an ogre residing in the lower layer. The orcs can be persuaded to release the captive halflings if you kill the ogre for them.

You were traveling along the road to Cyndervale when you noticed some smoke a few hundred yards off the trail. You went to investigate and have come across a clearing with a few halfling wagons in it. One of the wagons is on fire, and two orcs are rummaging through another wagon. There are no halflings in sight. You are standing in the undergrowth on the edge of the clearing. The orcs have not spotted you.

## A1. Halfling Camp

A few halfling wagons are arranged in a campsite in the middle of a clearing. In between the wagons is a cook fire and some washing hanging up.

One of the wagons is burned out and smoldering, and two orcs are rummaging through another wagon. The orcs [ORC1] [ORC2] are distracted and will not spot the players until they get close or draw attention to themselves. The orcs will attack the players as soon as they spot them.

The players begin hidden in the undergrowth on the edge of a clearing, observing the scene from hiding.

Milo Fairfoot [MILO], a frightened middle-aged halfling man with tufty grey hair and a kind face, is hiding nearby with his two small children, Lila [LILA] and Tobin [TOBIN]. The players will discover Milo is they enter the woods on the far side of the clearing.

When the orcs are defeated, Milo emerges from the bushes with his children. Milo explains that their camp was attacked by a band of orcs and that his wife and parents were taken away. He managed to run away with his children and hide in the bushes. He points out a trail that the orcs took and begs you to go looking for his family.

Connected to:

- A2: A disguised trail in the undergrowth around the clearing, revealed after Milo points it out, or with a DC10 perception check if the players search around the outside of clearing.

```yaml
npcs:
  - id: ORC1
    type: Orc
    status: Dead
  - id: ORC2
    type: Orc
    status: Dead
  - id: MILO
    name: Milo Fairfoot
    type: Halfling
    description: A frightened middle-aged halfling man with tufty grey hair and a kind face. He is the father of two small children and is desperate to rescue his wife and parents who were taken by orcs.
  - id: LILA
    name: Lila Fairfoot
    type: Halfling Child
    description: A young halfling girl with curly brown hair and bright eyes. She is Milo's daughter and loves to help her mother cook. She is currently frightened but trying to be brave for her younger brother.
    abilityScores:
      str: 6
      dex: 14
      con: 10
      int: 11
      wis: 9
      cha: 15
    ac: 10
    maxHp: 2
    speed: 20
    skills:
      - stealth
      - deception
      - sleightOfHand
  - id: TOBIN
    name: Tobin Fairfoot
    type: Halfling Child
    description: A small halfling boy with sandy hair and freckles. He is Milo's youngest child, about 5 years old. He clings tightly to his sister and father, occasionally sniffling but trying not to cry.
```

## A2. Outside Orc Lair

The trail from the clearing leads to a hillside with a large ornate stone entrance carved into it. It is covered in moss and ivy and looks disused. Two wolves, one gray [WOLF1] and one brown [WOLF2], are chained to posts outside.

The party can befriend the wolves with an animal handling skill check (DC 15). If they try to pass without befriending them, the wolves will attack. If a fight breaks out, an orc will run out of the tunnel to investigate and attack the party.

Connected to:

- A1: A trail back to the clearing.
- A3: A large stone entrance in the hillside.

```yaml
npcs:
  - id: WOLF1
    type: Wolf
    status: Befriended by Brynn, traveling with party (grey wolf)
  - id: WOLF2
    type: Wolf
    status: Befriended by Brynn, traveling with party (brown wolf)
```

## A3. Entrance Tunnel

A tunnel leading downward into the ground, with well-presented stone blockwork lining the walls and dwarven script carved in some of them. Torches line the walls, providing light.

An orc [ORC3] is sleeping in the tunnel unless previously alerted. If disturbed, he will attack the party.

In the south wall, a broken secret door leads to a looted storage area. There is nothing of value left.

A hidden secret door is in the north wall of the tunnel. Players can discover it with a DC 15 perception check.

Connected to:

- A2: The end of the tunnel to the outside to the west.
- A3-1: A secret door in the north wall (if discovered).
- A4: The tunnel descends downward to the east to a large open wooden double door.

```yaml
npcs:
  - id: ORC3
    type: Orc
    status: Dead (killed outside entrance)
```

## A3-1. Secret Passage

A 10 ft by 10 ft tunnel, with a gelatinous cube [GC1] lurking at the far end. It starts oozing towards the players when they enter.

The party discovered the secret door, spotted the cube, and sealed the door shut without engaging. The cube is still alive inside.

```yaml
npcs:
  - id: GC1
    type: Gelatinous Cube
    status: Alive (sealed behind secret door, encountered but not fought)
```

Connected to:

- A3: An uncovered secret door.
- A3-2: An unlocked door at the far end of the tunnel behind the gelatinous cube.

## A3-2. Treasure Room

A small room piled high with gold and gems. It is a shame there is nothing for the party to spend money on in this game.

Connected to:

- A3-1: A door.

## A4. Hallway

An expansive cavern with ornate stone pillars in two rows down each side.

Connected to:

- A3: A large set of open double doors to the west.
- A5: A large set of open double doors to the east.
- A7: A barricaded but openable door to the south, covered in Orc script reading "Ogre, beware" (can be deciphered with DC 15 arcana check).
- A8: A smaller open door to the north.

## A5. Throne Room

A large room with a wooden dining table running down the middle. A throne sits on a dais at the back of the room. The orc war chief [OWC1] lounges on the throne, picking his teeth with a dagger. Two dire wolves [WOLF3] [WOLF4] crouch in front of him, calm but focused on the party.

The war chief will not immediately attack. He is not afraid of the party because he trusts his dire wolves to defend him. They are fiercely loyal and cannot be befriended. He taunts the party, suggesting they have come to be his next meal.

If asked about the halflings, the war chief suggests that the party kill the ogre in the level below in return for his favor. He expects them to die in the attempt. If they succeed he will still be reluctant, but a DC 15 persuasion or intimidation check can convince him to release the halflings once the party has dealt with the ogre.

```yaml
npcs:
  - id: OWC1
    type: Orc War Chief
  - id: WOLF3
    type: Wolf
  - id: WOLF4
    type: Wolf
```

Connected to:

- A4: A large set of open wooden double doors to the west.
- A6: A small doorway in the side of the room to the north.

## A6. Kitchen

The captured halflings are bound in a room that has been turned into a makeshift kitchen. An orc cook with an apron and a huge cleaver chops a carcass on a large wooden table. He will attack when the players enter.

The halflings:

- Esmie [ESMIE], a bright-eyed middle-aged halfling woman with dark brown curly hair, is feisty and not afraid of the orcs.
- Bella [BELLA], an elderly halfling woman with white curly hair.
- Corrin [CORRIN], an elderly halfling man with barely any hair.

Connected to:

- A5: A door to the south.
- A8: A door to the west.

```yaml
npcs:
  - id: ESMIE
    name: Esmie
    type: Halfling
  - id: BELLA
    name: Bella
    type: Halfling
  - id: CORRIN
    name: Corrin
    type: Halfling
```

## A7. Ogre's Lair

A rough cavern. An ogre [OGRE] emerges from the shadows and attacks as soon as the players step in.

Connected to:

- A4: A door that has been unbarricaded by the party.

```yaml
npcs:
  - id: OGRE
    type: Ogre
```

## A8. Dormitory

A plain room with crude beds on the floor. Three orcs are milling around and will attack the players when they enter.

Connected to:

- A4: An open door to the south.
- A6: An open door to the east with cooking smells.
- A9: An open door to the north with quiet groaning coming from behind it.

## A9. Chained Elf

An elf bard [ELF] is chained up in a room, pale and bruised. The orcs came across her while she was traveling alone and kidnapped her. They seem to have mostly forgotten about her although occasionally they will toss her some left over food.

The players can free the elf by picking the lock (DC 10 sleight of hand) or breaking the shackles (DC 15 strength check). If freed, the elf will stick around with the party since she is afraid of going off on her own.

Connected to:

- A8: A door to the south.

```yaml
npcs:
  - id: ELF
    name: Aelindra
    type: Elf Bard
```
