#!/usr/bin/env python3
"""Roll D&D dice from command line arguments."""

import argparse
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
    parser = argparse.ArgumentParser(description="Roll D&D dice")
    parser.add_argument("dice", nargs="+", help="Dice specs (e.g. 2d10 1d20)")
    parser.add_argument("-d", "--desc", help="Description for the roll (e.g. \"Pip's Initiative\")")
    args = parser.parse_args()

    prefix = f"{args.desc} | " if args.desc else ""

    total = 0
    for die_str in args.dice:
        try:
            count, sides = parse_die(die_str)
            rolls = roll_dice(count, sides)
            roll_total = sum(rolls)
            total += roll_total
            rolls_str = ", ".join(str(r) for r in rolls)
            print(f"{prefix}{die_str}: [{rolls_str}] = {roll_total}")
        except ValueError as e:
            print(f"Error: {e}", file=sys.stderr)
            sys.exit(1)

    if len(args.dice) > 1:
        print(f"{prefix}Total: {total}")


if __name__ == "__main__":
    main()
