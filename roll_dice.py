#!/usr/bin/env python3
"""Roll D&D dice from command line arguments."""

import random
import re
import sys


def parse_die(die_str):
    """Parse a die string like '2d10' into (count, sides)."""
    match = re.match(r'^(\d+)d(\d+)$', die_str.lower())
    if not match:
        raise ValueError(f"Invalid die format: {die_str}")
    return int(match.group(1)), int(match.group(2))


def roll_dice(count, sides):
    """Roll count dice with given sides, return list of results."""
    return [random.randint(1, sides) for _ in range(count)]


def main():
    if len(sys.argv) < 2:
        print("Usage: roll_dice.py <dice> [<dice> ...]")
        print("Example: roll_dice.py 2d10 1d20 4d6")
        sys.exit(1)

    total = 0
    for die_str in sys.argv[1:]:
        try:
            count, sides = parse_die(die_str)
            rolls = roll_dice(count, sides)
            roll_total = sum(rolls)
            total += roll_total
            rolls_str = ", ".join(str(r) for r in rolls)
            print(f"{die_str}: [{rolls_str}] = {roll_total}")
        except ValueError as e:
            print(f"Error: {e}", file=sys.stderr)
            sys.exit(1)

    if len(sys.argv) > 2:
        print(f"Total: {total}")


if __name__ == "__main__":
    main()
