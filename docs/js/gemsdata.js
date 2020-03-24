let gemsDataGlobalArray = [
  {
    "id": 1,
    "kingdom": { "name": "Adana", "star_level": 6, "kingdom_level": 10, "cards": 21, "bonus": "Armor" },
    "class": { "name": "Mechanist", "level": 40, "troop": "Mech" },
    "weapons": { "count": 7, "leveled": 0, "delve": "no", "doom": "yes" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 2,
    "kingdom": { "name": "Blackhawk", "star_level": 8, "kingdom_level": 10, "cards": 20, "bonus": "Attack" },
    "class": { "name": "Corsair", "level": 65, "troop": "Rogue" },
    "weapons": { "count": 5, "leveled": 2, "delve": "no", "doom": "no" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 3,
    "kingdom": { "name": "Blighted Lands", "star_level": 6, "kingdom_level": 10, "cards": 19, "bonus": "Magic" },
    "class": { "name": "Diabolist", "level": 40, "troop": "Daemon" },
    "weapons": { "count": 5, "leveled": 0, "delve": "no", "doom": "no" },
    "pets": { "count": 1, "highest": 5 }
  },
  {
    "id": 4,
    "kingdom": { "name": "Bright Forest", "star_level": 9, "kingdom_level": 12, "cards": 19, "bonus": "Health" },
    "delve": { "name": "Sunken Fleet", "level": 160, "faction": 160, "horde": 100, "mana": "Blue & Red" },
    "class": { "name": "Hierophant", "level": 42, "troop": "Fey" },
    "weapons": { "count": 8, "leveled": 4, "delve": "no", "doom": "no" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 5,
    "kingdom": { "name": "Broken Spire", "star_level": 6, "kingdom_level": 10, "cards": 22, "bonus": "Health" },
    "class": { "name": "Warlord", "level": 40, "troop": "Giant" },
    "weapons": { "count": 9, "leveled": 2, "delve": "no", "doom": "yes" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 6,
    "kingdom": { "name": "Darkstone", "star_level": 10, "kingdom_level": 14, "cards": 26, "bonus": "Magic" },
    "delve": { "name": "All-Seeing Eye", "level": 230, "faction": 160, "horde": 122, "mana": "Blue & Green" },
    "class": { "name": "Plaguelord", "level": 81, "troop": "Human" },
    "weapons": { "count": 6, "leveled": 3, "delve": "yes", "doom": "no" },
    "pets": { "count": 1, "highest": 1 }
  },
  {
    "id": 7,
    "kingdom": { "name": "Dhrak-Zum", "star_level": 6, "kingdom_level": 10, "cards": 14, "bonus": "Attack" },
    "class": { "name": "Slayer", "level": 42, "troop": "Dwarf" },
    "weapons": { "count": 8, "leveled": 1, "delve": "no", "doom": "yes" },
    "pets": { "count": 1, "highest": 1 }
  },
  {
    "id": 8,
    "kingdom": { "name": "Divinion Fields", "star_level": 10, "kingdom_level": 12, "cards": 22, "bonus": "Health" },
    "delve": { "name": "Wild Court", "level": 190, "faction": 170, "horde": 100, "mana": "Green & Red" },
    "class": { "name": "Oracle", "level": 40, "troop": "Centaur" },
    "weapons": { "count": 8, "leveled": 2, "delve": "yes", "doom": "yes" },
    "pets": { "count": 2, "highest": 1 }
  },
  {
    "id": 9,
    "kingdom": { "name": "Dragon's Claw", "star_level": 8, "kingdom_level": 12, "cards": 18, "bonus": "Armor" },
    "class": { "name": "Dragonguard", "level": 100, "troop": "Dragon" },
    "weapons": { "count": 5, "leveled": 3, "delve": "no", "doom": "no" },
    "pets": { "count": 4, "highest": 5 }
  },
  {
    "id": 10,
    "kingdom": { "name": "Drifting Sands", "star_level": 8, "kingdom_level": 12, "cards": 22, "bonus": "Armor" },
    "class": { "name": "Dervish", "level": 43, "troop": "Monster" },
    "weapons": { "count": 9, "leveled": 5, "delve": "no", "doom": "yes" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 11,
    "kingdom": { "name": "Forest of Thorns", "star_level": 8, "kingdom_level": 12, "cards": 23, "bonus": "Attack" },
    "delve": { "name": "Primal Rift", "level": 140, "faction": 100, "horde": 100, "mana": "Green & Purple" },
    "class": { "name": "Archer", "level": 70, "troop": "Elf" },
    "weapons": { "count": 8, "leveled": 3, "delve": "yes", "doom": "no" },
    "pets": { "count": 2, "highest": 1 }
  },
  {
    "id": 12,
    "kingdom": { "name": "Ghulvania", "star_level": 6, "kingdom_level": 10, "cards": 23, "bonus": "Health" },
    "class": { "name": "Deathknight", "level": 41, "troop": "Undead" },
    "weapons": { "count": 6, "leveled": 0, "delve": "no", "doom": "yes" },
    "pets": { "count": 3, "highest": 15 }
  },
  {
    "id": 13,
    "kingdom": { "name": "Glacial Peaks", "star_level": 10, "kingdom_level": 12, "cards": 24, "bonus": "Armor" },
    "delve": { "name": "Mirrored Halls", "level": 240, "faction": 160, "horde": 100, "mana": "Blue & Yellow" },
    "class": { "name": "Frostmage", "level": 70, "troop": "Fey" },
    "weapons": { "count": 6, "leveled": 2, "delve": "yes", "doom": "no" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 14,
    "kingdom": { "name": "Grosh-Nak", "star_level": 6, "kingdom_level": 12, "cards": 22, "bonus": "Armor" },
    "class": { "name": "Barbarian", "level": 42, "troop": "Orc" },
    "weapons": { "count": 10, "leveled": 4, "delve": "no", "doom": "yes" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 15,
    "kingdom": { "name": "Karakoth", "star_level": 6, "kingdom_level": 10, "cards": 20, "bonus": "Magic" },
    "class": { "name": "Sorcerer", "level": 40, "troop": "Daemon" },
    "weapons": { "count": 7, "leveled": 2, "delve": "no", "doom": "no" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 16,
    "kingdom": { "name": "Khaziel", "star_level": 6, "kingdom_level": 10, "cards": 20, "bonus": "Health" },
    "class": { "name": "Runepriest", "level": 100, "troop": "Dwarf" },
    "weapons": { "count": 6, "leveled": 1, "delve": "no", "doom": "no" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 17,
    "kingdom": { "name": "Khetar", "star_level": 10, "kingdom_level": 12, "cards": 25, "bonus": "Armor" },
    "delve": { "name": "Fang Moor", "level": 180, "faction": 150, "horde": 122, "mana": "Blue & Red" },
    "class": { "name": "Necromancer", "level": 40, "troop": "Undead" },
    "weapons": { "count": 7, "leveled": 2, "delve": "yes", "doom": "yes" },
    "pets": { "count": 1, "highest": 5 }
  },
  {
    "id": 18,
    "kingdom": { "name": "Leonis Empire", "star_level": 9, "kingdom_level": 12, "cards": 20, "bonus": "Armor" },
    "delve": { "name": "City of Thieves", "level": 190, "faction": 130, "horde": 111, "mana": "Blue & Purple" },
    "class": { "name": "Warpriest", "level": 40, "troop": "Human" },
    "weapons": { "count": 9, "leveled": 3, "delve": "yes", "doom": "no" },
    "pets": { "count": 1, "highest": 5 }
  },
  {
    "id": 19,
    "kingdom": { "name": "Maugrim Woods", "star_level": 6, "kingdom_level": 10, "cards": 19, "bonus": "Health" },
    "class": { "name": "Warden", "level": 76, "troop": "Beast" },
    "weapons": { "count": 7, "leveled": 3, "delve": "no", "doom": "yes" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 20,
    "kingdom": { "name": "Merlantis", "star_level": 9, "kingdom_level": 12, "cards": 20, "bonus": "Health" },
    "delve": { "name": "Sea of Sorrow", "level": 160, "faction": 100, "horde": 100, "mana": "Blue & Brown" },
    "class": { "name": "Tidecaller", "level": 44, "troop": "Merfolk" },
    "weapons": { "count": 7, "leveled": 4, "delve": "no", "doom": "no" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 21,
    "kingdom": { "name": "Mist of Scales", "star_level": 9, "kingdom_level": 14, "cards": 24, "bonus": "Armor" },
    "delve": { "name": "Dark Pits", "level": 200, "faction": 140, "horde": 100, "mana": "Green & Brown" },
    "class": { "name": "Assassin", "level": 49, "troop": "Naga" },
    "weapons": { "count": 7, "leveled": 2, "delve": "yes", "doom": "no" },
    "pets": { "count": 1, "highest": 5 }
  },
  {
    "id": 22,
    "kingdom": { "name": "Pan's Vale", "star_level": 8, "kingdom_level": 12, "cards": 23, "bonus": "Health" },
    "delve": { "name": "The Warrens", "level": 160, "faction": 160, "horde": 100, "mana": "Green/Yellow" },
    "class": { "name": "Bard", "level": 66, "troop": "Wildfolk" },
    "weapons": { "count": 6, "leveled": 2, "delve": "yes", "doom": "no" },
    "pets": { "count": 1, "highest": 5 }
  },
  {
    "id": 23,
    "kingdom": { "name": "Pridelands", "star_level": 6, "kingdom_level": 12, "cards": 22, "bonus": "Attack" },
    "class": { "name": "Sunspear", "level": 50, "troop": "Raksha" },
    "weapons": { "count": 8, "leveled": 3, "delve": "no", "doom": "no" },
    "pets": { "count": 1, "highest": 5 }
  },
  {
    "id": 24,
    "kingdom": { "name": "Shentang", "star_level": 8, "kingdom_level": 12, "cards": 20, "bonus": "Health" },
    "delve": { "name": "Lyrasza's Lair", "level": 220, "faction": 100, "horde": 112, "mana": "Yellow & Purple" },
    "class": { "name": "Monk", "level": 40, "troop": "Elf" },
    "weapons": { "count": 9, "leveled": 2, "delve": "yes", "doom": "yes" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 25,
    "kingdom": { "name": "Silverglade", "star_level": 8, "kingdom_level": 12, "cards": 19, "bonus": "Magic" },
    "delve": { "name": "Silver Necropolis", "level": 190, "faction": 150, "horde": 100, "mana": "Purple & Brown" },
    "class": { "name": "Archmagus", "level": 40, "troop": "Mystic" },
    "weapons": { "count": 6, "leveled": 5, "delve": "yes", "doom": "no" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 26,
    "kingdom": { "name": "Sin of Maraj", "star_level": 6, "kingdom_level": 10, "cards": 12, "bonus": "Attack" },
    "weapons": { "count": 6, "leveled": 4, "delve": "no", "doom": "yes" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 27,
    "kingdom": { "name": "Stormheim", "star_level": 8, "kingdom_level": 12, "cards": 24, "bonus": "Health" },
    "delve": { "name": "Frostfire Keep", "level": 280, "faction": 200, "horde": 100, "mana": "Blue & Yellow" },
    "class": { "name": "Titan", "level": 100, "troop": "Giant" },
    "weapons": { "count": 6, "leveled": 2, "delve": "yes", "doom": "no" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 28,
    "kingdom": { "name": "Suncrest", "star_level": 9, "kingdom_level": 12, "cards": 22, "bonus": "Attack" },
    "delve": { "name": "Stonesong Eyrie", "level": 180, "faction": 180, "horde": 100, "mana": "Yellow & Brown" },
    "class": { "name": "Stormcaller", "level": 40, "troop": "Stryx" },
    "weapons": { "count": 6, "leveled": 3, "delve": "yes", "doom": "no" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 29,
    "kingdom": { "name": "Sword's Edge", "star_level": 8, "kingdom_level": 12, "cards": 24, "bonus": "Armor" },
    "delve": { "name": "Crypt Keepers", "level": 140, "faction": 100, "horde": 100, "mana": "Red & Purple" },
    "class": { "name": "Knight", "level": 41, "troop": "Knight" },
    "weapons": { "count": 6, "leveled": 2, "delve": "yes", "doom": "no" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 30,
    "kingdom": { "name": "Urskaya", "star_level": 8, "kingdom_level": 14, "cards": 21, "bonus": "Health" },
    "delve": { "name": "Werewoods", "level": 260, "faction": 150, "horde": 122, "mana": "Green & Red" },
    "class": { "name": "Sentinel", "level": 89, "troop": "Urska" },
    "weapons": { "count": 8, "leveled": 3, "delve": "yes", "doom": "no" },
    "pets": { "count": 3, "highest": 5 }
  },
  {
    "id": 31,
    "kingdom": { "name": "Whitehelm", "star_level": 9, "kingdom_level": 12, "cards": 23, "bonus": "Armor" },
    "delve": { "name": "Hall of Guardians", "level": 160, "faction": 160, "horde": 100, "mana": "Yellow & Brown" },
    "class": { "name": "Priest", "level": 41, "troop": "Divine" },
    "weapons": { "count": 7, "leveled": 3, "delve": "yes", "doom": "yes" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 32,
    "kingdom": { "name": "Wild Plains", "star_level": 8, "kingdom_level": 12, "cards": 23, "bonus": "Attack" },
    "class": { "name": "Shaman", "level": 44, "troop": "Tauros" },
    "weapons": { "count": 7, "leveled": 2, "delve": "no", "doom": "no" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 33,
    "kingdom": { "name": "Zaejin", "star_level": 10, "kingdom_level": 10, "cards": 24, "bonus": "Health" },
    "delve": { "name": "Amanithrax", "level": 150, "faction": 100, "horde": 111, "mana": "Green & Brown" },
    "class": { "name": "Thief", "level": 54, "troop": "Goblin" },
    "weapons": { "count": 3, "leveled": 3, "delve": "yes", "doom": "no" },
    "pets": { "count": 2, "highest": 5 }
  },
  {
    "id": 34,
    "kingdom": { "name": "Zhul'Kari", "star_level": 8, "kingdom_level": 15, "cards": 20, "bonus": "Magic" },
    "class": { "name": "Orbweaver", "level": 43, "troop": "Elf" },
    "weapons": { "count": 7, "leveled": 2, "delve": "no", "doom": "no" },
    "pets": { "count": 2, "highest": 10 }
  }
]