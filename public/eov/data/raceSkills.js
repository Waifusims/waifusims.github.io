var raceSkills =
{
	earthrun:
	{
		Analyze:
		{
			name_en: "Analyze",
			name_jp: "アナライズ",
			details: "Participants Required: 1<br>Temporarily register a single monster's data.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:0, y:0}
		},
		DoubleAttack:
		{
			name_en: "Double Attack",
			name_jp: "ダブルアタック",
			details: "Participants Required: 2<br>Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters' levels.<br>Has an accuracy modifier of +10.<br>Damage scales from 150% to 400%, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:0}
		},
		FullSpeedEscape:
		{
			name_en: "Full Retreat",
			name_jp: "全力逃走",
			details: "Participants Required: 3<br>100% chance of escaping from battle when used.<br>Sends the party back to the start of the floor. Only works if the battle can even be escaped from.<br>Usable even if the initiator's legs are bound.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:0, y:1}
		},
		MagicHeal:
		{
			name_en: "Mana Heal",
			name_jp: "マジックヒール",
			details: "Participants Required: 4<br>Restores the party's TP.<br>TP restoration is equal to 3% of max TP + 6.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:1}
		},
		LightofBlessing:
		{
			name_en: "Blessing",
			name_jp: "祝福の光",
			details: "Participants Required: 1<br>All allies recover 15% or 30% of their max HP.<br>Heals 15% if user is below level 50, 30% otherwise.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:2}
		},
		GraceoftheEarth:
		{
			name_en: "Gaia's Grace",
			name_jp: "大地の恩寵",
			details: "Whenever the character uses a base skill in combat, they have 30% chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:2}
		},
		Fishing:
		{
			name_en: "Fishing",
			name_jp: "フィッシング",
			details: "Enables the party to catch fish at fishing spots.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:3}
		},
		WoodlandSearchSkills:
		{
			name_en: "Forage Skills",
			name_jp: "樹海探索術",
			details: "Alters certain Adventure Episodes and gain items from food spots.<br>Also increases the user's AGI.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:3}
		},
		BasicResuscitation:
		{
			name_en: "Resusciate",
			name_jp: "簡易蘇生",
			details: "Participants Required: 2<br>Revives one dead party member.<br>HP restored based on the iniator's level.<br>Listing of data:<br><br>Level 1-10: 1 HP restored.<br>Level 11-20: 11 HP restored.<br>Level 21-30: 21 HP restored.<br>Level 31-40: 31 HP restored.<br>Level 41-50: 90 HP restored.<br>Level 51-60: 110 HP restored.<br>Level 61-70: 130 HP restored.<br>Level 71-80: 150 HP restored.<br>Level 81-90: 170 HP restored.<br>Level 91-99: 270 HP restored.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:4}
		},
		OrganizationalSkills:
		{
			name_en: "Sorting Skill",
			name_jp: "整頓術",
			details: "Max item capacity increases by 5 for each character with this skill.<br>Also increases the user's VIT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:4}
		},
		WoodlandGatheringSkills:
		{
			name_en: "Gathering Skill",
			name_jp: "樹海採集術",
			details: "Enables the party to get additional materials from take, chop, and mine points.<br>Exact data unknown.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:5}
		},
		AnimalHusbandry:
		{
			name_en: "Animal Care",
			name_jp: "飼育術",
			details: "Enables the party to raise livestock acquired from events.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:5}
		},
		TriShield:
		{
			name_en: "Tri-Shield",
			name_jp: "トライシールド",
			details: "Participants Required: 3<br>Nullifies the first 3 enemy attacks on the current turn.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:0}
		},
		MartialArts:
		{
			name_en: "Nimble Arts",
			name_jp: "体術",
			details: "Increases the user's resistance to all binds by 10%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:0}
		},
		ServingPower:
		{
			name_en: "Resilience",
			name_jp: "セービングパワー",
			details: "Increases the user's resistance to petrify, curse, sleep, panic, paralyze, poison, and blind by 10%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:1}
		},
		ArmorMastery:
		{
			name_en: "Bulwark",
			name_jp: "重装マスタリー",
			details: "Increases the user's resistance to Cut, Bash, and Stab attacks by 5%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:1}
		},
		BlackMist:
		{
			name_en: "Black Mist",
			name_jp: "黒霧",
			details: "Participants Required: 4<br>Doubles the success rate of player skills that inflict ailment and binds for the current turn.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:2}
		},
		BodyImprovement:
		{
			name_en: "Bodybuilding",
			name_jp: "肉体強化",
			details: "Increases the user's STR and VIT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:3, y:2}
		},
		AthleticTraining:
		{
			name_en: "Cardio",
			name_jp: "走力鍛錬",
			details: "Increases the user's AGI and LUC.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:3}
		},
		SelfStudy:
		{
			name_en: "Talent",
			name_jp: "自学自習",
			details: "Increases the user's INT and WIS.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:3, y:3}
		},
		IndomitableSpirit:
		{
			name_en: "Determination",
			name_jp: "不屈の闘志",
			details: "Participants Required: 5<br>Nullifies all binds and ailments the enemy tries to inflict, and gives the party a chance to 50% survive any fatal blows at 1 HP.<br>The endure chance is reduced by 10% for each time it activates.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:4}
		},
		EarthsFavor:
		{
			name_en: "Gaia's Gift",
			name_jp: "大地の寵愛",
			details: "Whenever the character uses a master skill in combat, they have a 30% chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:4}
		},
		Anatomy:
		{
			name_en: "Anatomy",
			name_jp: "解剖学",
			details: "Drop rate is increased by 0.1x for every party member that has this skill.<br>Also increases the user's INT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:5}
		},
		Gourmet:
		{
			name_en: "Gourmet",
			name_jp: "グルメ",
			details: "Doubles the HP and TP recovery from food used on the party members that know this skill.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:5}
		}
	},
	lunaria:
	{
		Analyze:
		{
			name_en: "Analyze",
			name_jp: "アナライズ",
			details: "Participants Required: 1<br>Temporarily register a single monster's data.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:0, y:0}
		},
		DoubleAttack:
		{
			name_en: "Double Attack",
			name_jp: "ダブルアタック",
			details: "Participants Required: 2<br>Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters' levels.<br>Has an accuracy modifier of +10.<br>Damage scales from 150% to 400%, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:0}
		},
		FullSpeedEscape:
		{
			name_en: "Full Retreat",
			name_jp: "全力逃走",
			details: "Participants Required: 3<br>100% chance of escaping from battle when used.<br>Sends the party back to the start of the floor. Only works if the battle can even be escaped from.<br>Usable even if the initiator's legs are bound.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:0, y:1}
		},
		MagicHeal:
		{
			name_en: "Mana Heal",
			name_jp: "マジックヒール",
			details: "Participants Required: 4<br>Restores the party's TP.<br>TP restoration is equal to 3% of max TP + 6.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:1}
		},
		Enchant:
		{
			name_en: "Enchant",
			name_jp: "エンチャント",
			details: "Participants Required: 1<br>Adds fire, ice, and volt elements to all allies' weapons for this turn.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:2}
		},
		GraceoftheMoon:
		{
			name_en: "Lunar Grace",
			name_jp: "月の恩寵",
			details: "Whenever the character uses a basic skill in combat, they have a 30% chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:2}
		},
		Chopping:
		{
			name_en: "Chop",
			name_jp: "伐採",
			details: "Enables the party to get additional materials from chop points.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:3}
		},
		SenseMana:
		{
			name_en: "Detect Mana",
			name_jp: "魔力感知",
			details: "Alters certain Adventure Episodes.<br>Also increases the user's INT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:3}
		},
		ParadigmShift:
		{
			name_en: "Game Changer",
			name_jp: "パラダイムシフト",
			details: "Participants Required: 2<br>Has a 50% chance of transferring all of an ally's ailments and binds (petrify, curse, sleep, panic, paralyze, poison, blind, head bind, arm bind, and leg bind) to an enemy.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:4}
		},
		Anatomy:
		{
			name_en: "Anatomy",
			name_jp: "解剖学",
			details: "Drop rate is increased by 0.1x for every party member that has this skill.<br>Also increases the user's INT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:4}
		},
		NightVision:
		{
			name_en: "Night Vision",
			name_jp: "ナイトビジョン",
			details: "Allows the character to see through darkness, altering certain Adventure Episodes.<br>Also increases the user's accuracy by +30.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:5}
		},
		Gourmet:
		{
			name_en: "Gourmet",
			name_jp: "グルメ",
			details: "Doubles the HP and TP recovery from food used on the party members that know this skill.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:5}
		},
		CurseMagic:
		{
			name_en: "Hex",
			name_jp: "カースマジック",
			details: "Participants Required: 3<br>For the current turn, whenever anyone deals Fire, Ice, or Volt damage, they have a 45% base chance of inflicting a random ailment to their targets.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:0}
		},
		BestowMana:
		{
			name_en: "Imbue",
			name_jp: "魔力付与",
			details: "Increases the damage of attack items by 30%.<br>Also increases the user's LUC.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:0}
		},
		ServingPower:
		{
			name_en: "Resilience",
			name_jp: "セービングパワー",
			details: "Increases the user's resistance to petrify, curse, sleep, panic, paralyze, poison, and blind by 10%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:1}
		},
		BarrierofSelflessness:
		{
			name_en: "Anatta Barrier",
			name_jp: "無我の結界",
			details: "Increases the user's resistance to Fire, Ice, and Volt attacks by 5%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:1}
		},
		TripleMagic:
		{
			name_en: "Tri-Magic",
			name_jp: "トリプルマジック",
			details: "Participants Required: 4<br>Deals 3 instances of ranged INT-based damage to all enemies, with the element being Fire, Ice, then Volt, in that order.<br>Damage scales from 100% to 200% per hit, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:2}
		},
		BodyImprovement:
		{
			name_en: "Bodybuilding",
			name_jp: "肉体強化",
			details: "Increases the user's STR and VIT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:3, y:2}
		},
		AthleticTraining:
		{
			name_en: "Cardio",
			name_jp: "走力鍛錬",
			details: "Increases the user's AGI and LUC.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:3}
		},
		SelfStudy:
		{
			name_en: "Talent",
			name_jp: "自学自習",
			details: "Increases the user's INT and WIS.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:3, y:3}
		},
		ChainBlast:
		{
			name_en: "Chain Blast",
			name_jp: "チェーンブラスト",
			details: "Participants Required: 5<br>Deals ranged INT-based Almighty damage to all enemies, and has a 150% chance to inflict head bind, arm bind, and leg bind.<br>Damage scales from 100% to 300%, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:4}
		},
		MoonsFavor:
		{
			name_en: "Lunar Gift",
			name_jp: "月の寵愛",
			details: "Whenever the character uses a master skill in combat, they have a 30% chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:4}
		},
		AnimalHusbandry:
		{
			name_en: "Animal Care",
			name_jp: "飼育術",
			details: "Enables the party to raise livestock acquired from events.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:5}
		},
		Concentration:
		{
			name_en: "Focus",
			name_jp: "集中",
			details: "Chance to nullify sleep when enemies attempt to inflict it on the user.<br>The nullification chance scales from 15% to 40%, based on the user's level.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:5}
		}
	},
	therian:
	{
		Analyze:
		{
			name_en: "Analyze",
			name_jp: "アナライズ",
			details: "Participants Required: 1<br>Temporarily register a single monster's data.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:0, y:0}
		},
		DoubleAttack:
		{
			name_en: "Double Attack",
			name_jp: "ダブルアタック",
			details: "Participants Required: 2<br>Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters' levels.<br>Has an accuracy modifier of +10.<br>Damage scales from 150% to 400%, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:0}
		},
		FullSpeedEscape:
		{
			name_en: "Full Retreat",
			name_jp: "全力逃走",
			details: "Participants Required: 3<br>100% chance of escaping from battle when used.<br>Sends the party back to the start of the floor. Only works if the battle can even be escaped from.<br>Usable even if the initiator's legs are bound.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:0, y:1}
		},
		MagicHeal:
		{
			name_en: "Mana Heal",
			name_jp: "マジックヒール",
			details: "Participants Required: 4<br>Restores the party's TP.<br>TP restoration is equal to 3% of max TP + 6.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:1}
		},
		GiantSwing:
		{
			name_en: "Wide Swing",
			name_jp: "大振り",
			details: "Participants Required: 1<br>User attacks all enemies with the equipped weapon.<br>Deals STR-based damage.<br>Attack range depends on the equipped weapon.<br>Damage scales from 100% to 250%, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:2}
		},
		GraceoftheBattlefield:
		{
			name_en: "Ares' Grace",
			name_jp: "戦塵の恩寵",
			details: "Whenever the character uses a basic skill in combat, they have a 30% chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:2}
		},
		HuntingSkills:
		{
			name_en: "Hunting Skill",
			name_jp: "狩猟術",
			details: "Alters certain Adventure Episodes and acquire edible animals in the woodlands.<br>Also increases the user's STR.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:3}
		},
		Mining:
		{
			name_en: "Mine",
			name_jp: "採掘",
			details: "Enables the party to get additional materials from mine points.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:3}
		},
		BondofSpirit:
		{
			name_en: "Binding Force",
			name_jp: "気魄の楔",
			details: "Participants Required: 3<br>For the current turn, whenever a party member deals Cut, Bash, or Stab damage, they have a chance to inflict a random bind upon their target.<br>These binds have a 45% base chance to succeed.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:4}
		},
		Acrobatics:
		{
			name_en: "Reflexes",
			name_jp: "軽業",
			details: "Enables the user to respond with agility to deal with crises, altering certain Adventure Episodes.<br>Also increases the user's evasion by 3%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:4}
		},
		Vigilance:
		{
			name_en: "Precaution",
			name_jp: "警戒",
			details: "Preemptive attack rate increases by 3% for every character with this skill.<br>Also increases the user's WIS.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:5}
		},
		FeatsofStrength:
		{
			name_en: "Brute Strength",
			name_jp: "力技",
			details: "Can move or carry things in the woodlands, altering certain Adventure Episodes.<br>Also increases the user's STR.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:5}
		},
		AttackHeal:
		{
			name_en: "Life Drain",
			name_jp: "アタックヒール",
			details: "Participants Required: 3<br>For the current turn, all party members heal 30% of their max HP when they deals damage.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:0}
		},
		WoodlandSearchSkills:
		{
			name_en: "Forage Skill",
			name_jp: "樹海探索術",
			details: "Alters certain Adventure Episodes and gain items from food spots.<br>Also increases the user's AGI.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:0}
		},
		Fishing:
		{
			name_en: "Fishing",
			name_jp: "フィッシング",
			details: "Enables the party to catch fish at fishing spots.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:1}
		},
		MindsEye:
		{
			name_en: "Third Eye",
			name_jp: "心眼",
			details: "Chance to nullify blind when enemies attempt to inflict it on the user.<br>Nullification chance scales from 15% to 40%, based on the initiator's level.<br>Also increases the user's AGI.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:1}
		},
		TripleAttack:
		{
			name_en: "Tri-Attack",
			name_jp: "トリプルアタック",
			details: "Participants Required: 4<br>Deals 3 instances of ranged damage to one enemy, with the element being Cut, Stab, then Bash, in that order.<br>Damage scales from 200% to 450% per hit, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:2}
		},
		BodyImprovement:
		{
			name_en: "Bodybuilding",
			name_jp: "肉体強化",
			details: "Increases the user's STR and VIT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:3, y:2}
		},
		AthleticTraining:
		{
			name_en: "Cardio",
			name_jp: "走力鍛錬",
			details: "Increases the user's AGI and LUC.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:3}
		},
		SelfStudy:
		{
			name_en: "Talent",
			name_jp: "自学自習",
			details: "Increases the user's INT and WIS.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:3, y:3}
		},
		SimultaneousAttack:
		{
			name_en: "All-Out Attack",
			name_jp: "一斉攻撃",
			details: "Participants Required: 5<br>Every party member attacks one enemy with their equipped weapons.<br>Each attack has a 200% chance to inflict stun.<br>Damage scales from 100% to 190% per hit, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:4}
		},
		BattlefieldsFavor:
		{
			name_en: "Ares' Gift",
			name_jp: "戦塵の寵愛",
			details: "Whenever the character uses a master skill in combat, they have a 30% chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:4}
		},
		ArmorMastery:
		{
			name_en: "Bulwark",
			name_jp: "重装マスタリー",
			details: "Increases the user's resistance to Cut, Bash, and Stab attacks by 5%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:5}
		},
		OrganizationalSkills:
		{
			name_en: "Sorting Skill",
			name_jp: "整頓術",
			details: "Max item capacity increases by 5 for each character with this skill.<br>Also increases the user's VIT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:5}
		}
	},
	brownie:
	{
		Analyze:
		{
			name_en: "Analyze",
			name_jp: "アナライズ",
			details: "Participants Required: 1<br>Temporarily register a single monster's data.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:0, y:0}
		},
		DoubleAttack:
		{
			name_en: "Double Attack",
			name_jp: "ダブルアタック",
			details: "Participants Required: 2<br>Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters' levels.<br>Has an accuracy modifier of +10.<br>Damage scales from 150% to 400%, based on the initiator's level.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:0}
		},
		FullSpeedEscape:
		{
			name_en: "Full Retreat",
			name_jp: "全力逃走",
			details: "Participants Required: 3<br>100% chance of escaping from battle when used.<br>Sends the party back to the start of the floor. Only works if the battle can even be escaped from.<br>Usable even if the initiator's legs are bound.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:0, y:1}
		},
		MagicHeal:
		{
			name_en: "Mana Heal",
			name_jp: "マジックヒール",
			details: "Participants Required: 4<br>Restores the party's TP.<br>TP restoration is equal to 3% of max TP + 6.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:1}
		},
		DefenseOrder:
		{
			name_en: "Guard Order",
			name_jp: "守備の号令",
			details: "Participants Required: 2<br>Reduces the damage that all allies take by 50% for the current turn.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:2}
		},
		GraceoftheWind:
		{
			name_en: "Zephyr's Grace",
			name_jp: "風の恩寵",
			details: "Whenever the character uses a basic skill in combat, they have a 30% chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:2}
		},
		Gathering:
		{
			name_en: "Take",
			name_jp: "採取",
			details: "Enables the party to get additional materials from take points.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:3}
		},
		AnimalHusbandry:
		{
			name_en: "Animal Care",
			name_jp: "飼育術",
			details: "Enables the party to raise livestock acquired from events.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:3}
		},
		FastasLightning:
		{
			name_en: "Superspeed",
			name_jp: "電光石火",
			details: "Participants Required: 3<br>Gives the party priority for the current turn.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:4}
		},
		ServingPower:
		{
			name_en: "Resilience",
			name_jp: "セービングパワー",
			details: "Increases the user's resistance to petrify, curse, sleep, panic, paralyze, poison, and blind by 10%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:4}
		},
		Fishing:
		{
			name_en: "Fishing",
			name_jp: "フィッシング",
			details: "Enables the party to catch fish at fishing spots.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:5}
		},
		MedicinalPlantKnowledge:
		{
			name_en: "Herbology",
			name_jp: "薬草学",
			details: "Increases healing done by recovery items in battle by 50%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:5}
		},
		TabooMethod:
		{
			name_en: "Forbidden Rite",
			name_jp: "禁忌の法",
			details: "Participants Required: 3<br>Buffs and debuffs on everyone (both allies and enemies) are forced to last for one more turn.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:0}
		},
		OrganizationalSkills:
		{
			name_en: "Sorting Skill",
			name_jp: "整頓術",
			details: "Max item capacity increases by 5 for each character with this skill.<br>Also increases the user's VIT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:0}
		},
		BarrierofSelflessness:
		{
			name_en: "Anatta Barrier",
			name_jp: "無我の結界",
			details: "Increases the user's resistance to Fire, Ice, and Volt attacks by 5%.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:1}
		},
		Acrobatics:
		{
			name_en: "Reflexes",
			name_jp: "軽業",
			details: "Enables the user to respond with agility to deal with crises, altering certain Adventure Episodes<br>Also increases the user's evasion by +30.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:1}
		},
		BowlofHygieia:
		{
			name_en: "Hygieia's Bowl",
			name_jp: "ヒギエイアの杯",
			details: "Participants Required: 4<br>Fully heals the party, dispels all ailments and binds, and revives any dead party members.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:2}
		},
		BodyImprovement:
		{
			name_en: "Bodybuilding",
			name_jp: "肉体強化",
			details: "Increases the user's STR and VIT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:3, y:2}
		},
		AthleticTraining:
		{
			name_en: "Cardio",
			name_jp: "走力鍛錬",
			details: "Increases the user's AGI and LUC.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:3}
		},
		SelfStudy:
		{
			name_en: "Talent",
			name_jp: "自学自習",
			details: "Increases the user's INT and WIS.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:3, y:3}
		},
		AegisShield:
		{
			name_en: "Aegis Shield",
			name_jp: "イージスの盾",
			details: "Participants Required: 5<br>Nullifies all attacks directed at allies this turn.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:4}
		},
		WindsFavor:
		{
			name_en: "Zephyr's Gift",
			name_jp: "風の寵愛",
			details: "Whenever the character uses a master skill in combat, they have a 30% chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:4}
		},
		Haggling:
		{
			name_en: "Haggle",
			name_jp: "値切り",
			details: "Lowers the shop's prices by 5%.<br>This effect does not stack with any other characters that know this skill.<br>Also increases the user's WIS.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:5}
		},
		Gourmet:
		{
			name_en: "Gourmet",
			name_jp: "グルメ",
			details: "Doubles the HP and TP recovery from food used on the party members that know this skill.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:5}
		}
	}
}
