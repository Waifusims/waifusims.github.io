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
			details: "Participants Required: 2<br>Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters' levels.<br>The Union Gauges of the participants other than the initiator are left at 40% after use.<br>Has an accuracy modifier of +10.<br><br>Threshold 1: 150% damage per hit. 300% total damage<br>Threshold 2: 275% damage per hit. 550% total damage<br>Threshold 3: 400% damage per hit. 800% total damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:0}
		},
		FullSpeedEscape:
		{
			name_en: "Full Speed Escape",
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
			name_en: "Magic Heal",
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
			name_en: "Light of Blessing",
			name_jp: "祝福の光",
			details: "Participants Required: 1<br>All allies recover 15% to 30% of their max HP.<br>Heal scales with levels.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:2}
		},
		GraceoftheEarth:
		{
			name_en: "Grace of the Earth",
			name_jp: "大地の恩寵",
			details: "Whenever the character uses a basic skill in combat, they have a small chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
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
			name_en: "Woodland Search Skills",
			name_jp: "樹海探索術",
			details: "Enables the party to initiate certain Adventure Episodes and gain items from those.<br>Also increases the user's AGI.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:3}
		},
		BasicResuscitation:
		{
			name_en: "Basic Resuscitation",
			name_jp: "簡易蘇生",
			details: "Participants Required: 2<br>Revives one dead party member.<br>Unknown if the amount healed scales with the characters' levels.<br>Listing the data just in case.<br><br>Threshold 1: 1% healing power<br>Threshold 2: 11% healing power<br>Threshold 3: 21% healing power<br>Threshold 4: 31% healing power<br>Threshold 5: 90% healing power<br>Threshold 6: 110% healing power<br>Threshold 7: 130% healing power<br>Threshold 8: 150% healing power<br>Threshold 9: 170% healing power<br>Threshold 10: 270% healing power",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:4}
		},
		OrganizationalSkills:
		{
			name_en: "Organizational Skills",
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
			name_en: "Woodland Gathering Skills",
			name_jp: "樹海採集術",
			details: "Enables the party to get additional materials from gathering, chopping, and mining points.<br>Exact data unknown.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:5}
		},
		AnimalHusbandry:
		{
			name_en: "Animal Husbandry",
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
			name_en: "Martial Arts",
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
			name_en: "Serving Power",
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
			name_en: "Armor Mastery",
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
			details: "Participants Required: 4<br>Doubles the success rate of skills that inflict petrify, curse, sleep, panic, paralyze, poison, blind, head bind, arm bind, and leg bind for the current turn.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:2}
		},
		BodyImprovement:
		{
			name_en: "Body Improvement",
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
			name_en: "Athletic Training",
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
			name_en: "Self Study",
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
			name_en: "Indomitable Spirit",
			name_jp: "不屈の闘志",
			details: "Participants Required: 5<br>Nullifies all binds and ailments the enemy tries to inflict, and gives the party a chance to 50% survive any fatal blows, leaving them with 10% of their max HP.<br>(Or it could be a 10% chance to survive, leaving them with 50% of their max HP. Or the chance to survive scales with levels, from 10% to 50%.)",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:4}
		},
		EarthsFavor:
		{
			name_en: "Earth's Favor",
			name_jp: "大地の寵愛",
			details: "Whenever the character uses a master skill in combat, they have a small chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
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
			details: "Drop rate is increased by +10% for every party member that has this skill.<br>Also increases the user's INT.",
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
			details: "Participants Required: 2<br>Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters' levels.<br>The Union Gauges of the participants other than the initiator are left at 40% after use.<br>Has an accuracy modifier of +10.<br><br>Threshold 1: 150% damage per hit. 300% total damage<br>Threshold 2: 275% damage per hit. 550% total damage<br>Threshold 3: 400% damage per hit. 800% total damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:0}
		},
		FullSpeedEscape:
		{
			name_en: "Full Speed Escape",
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
			name_en: "Magic Heal",
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
			name_en: "Grace of the Moon",
			name_jp: "月の恩寵",
			details: "Whenever the character uses a basic skill in combat, they have a small chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:2}
		},
		Chopping:
		{
			name_en: "Chopping",
			name_jp: "伐採",
			details: "Enables the party to get additional materials from chopping points.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:3}
		},
		SenseMana:
		{
			name_en: "Sense Mana",
			name_jp: "魔力感知",
			details: "Enables the party to initiate certain Adventure Episodes.<br>Also increases the user's INT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:3}
		},
		ParadigmShift:
		{
			name_en: "Paradigm Shift",
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
			details: "Drop rate is increased by +10% for every party member that has this skill.<br>Also increases the user's INT.",
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
			details: "Allows the character to see through darkness, enabling certain Adventure Episodes.<br>Also increases the user's accuracy by +30.",
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
			name_en: "Curse Magic",
			name_jp: "カースマジック",
			details: "Participants Required: 3<br>For the current turn, whenever anyone deals Fire, Ice, or Volt damage, they have a chance of inflicting a random ailment to their targets.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:0}
		},
		BestowMana:
		{
			name_en: "Bestow Mana",
			name_jp: "魔力付与",
			details: "Increases the damage of attack items by 30%.<br>Also increases the user's INT.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:0}
		},
		ServingPower:
		{
			name_en: "Serving Power",
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
			name_en: "Barrier of Selflessness",
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
			name_en: "Triple Magic",
			name_jp: "トリプルマジック",
			details: "Participants Required: 4<br>Deals ranged INT-based Fire+Ice+Volt damage to all enemies 3 times.<br>Damage scales with the characters' levels.<br>The Union Gauges of the participants otehr than the initiator are left at 40% after use.<br>Has a base accuracy of 110.<br><br>Threshold 1: 100% damage per hit, total 300% damage<br>Threshold 2: 150% damage per hit, total 450% damage<br>Threshold 3: 200% damage per hit, total 600% damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:2}
		},
		BodyImprovement:
		{
			name_en: "Body Improvement",
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
			name_en: "Athletic Training",
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
			name_en: "Self Study",
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
			details: "Participants Required: 5<br>Deals ranged INT-based Almighty damage to all enemies, and has a 150% chance to inflict head bind, arm bind, and leg bind.<br>The damage scales with the user's level, the infliction rate does not.<br>The Union Gauges of the participants other than the initiator are left at 40% after use.<br>Has a base accuracy of 110.<br><br>Threshold 1: 100% damage<br>Threshold 2: 200% damage<br>Threshold 3: 300% damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:4}
		},
		MoonsFavor:
		{
			name_en: "Moon's Favor",
			name_jp: "月の寵愛",
			details: "Whenever the character uses a master skill in combat, they have a small chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:4}
		},
		AnimalHusbandry:
		{
			name_en: "Animal Husbandry",
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
			name_en: "Concentration",
			name_jp: "集中",
			details: "Chance to nullify sleep when enemies attempt to inflict it on the user.<br>The nullification chance scales with the user's level.<br><br>Threshold 1: 15% chance<br>Threshold 2: 20% chance<br>Threshold 3: 40% chance",
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
			details: "Participants Required: 2<br>Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters' levels.<br>The Union Gauges of the participants other than the initiator are left at 40% after use.<br>Has an accuracy modifier of +10.<br><br>Threshold 1: 150% damage per hit. 300% total damage<br>Threshold 2: 275% damage per hit. 550% total damage<br>Threshold 3: 400% damage per hit. 800% total damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:0}
		},
		FullSpeedEscape:
		{
			name_en: "Full Speed Escape",
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
			name_en: "Magic Heal",
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
			name_en: "Giant Swing",
			name_jp: "大振り",
			details: "Participants Required: 1<br>User attacks all enemies with the equipped weapon.<br>Deals STR-based damage.<br>Attack range depends on the equipped weapon.<br>Damage scales with the characters' levels.<br>The Union Gauges of the participants other than the initiator are left at 40% after use.<br><br>Threshold 1: 100% damage<br>Threshold 2: 175% damage<br>Threshold 3: 250% damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:2}
		},
		GraceoftheBattlefield:
		{
			name_en: "Grace of the Battlefield",
			name_jp: "戦塵の恩寵",
			details: "Whenever the character uses a basic skill in combat, they have a small chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:2}
		},
		HuntingSkills:
		{
			name_en: "Hunting Skills",
			name_jp: "狩猟術",
			details: "Enables the party to initiate certain Adventure Episodes and acquire edible animals in the woodlands.<br>Also increases the user's STR.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:3}
		},
		Mining:
		{
			name_en: "Mining",
			name_jp: "採掘",
			details: "Enables the party to get additional materials from mining points.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:3}
		},
		BondofSpirit:
		{
			name_en: "Bond of Spirit",
			name_jp: "気魄の楔",
			details: "Participants Required: 3<br>For the current turn, whenever anyone deals Cut, Bash, or Stab damage, they have a chance of inflicting a random ailment to their targets.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:4}
		},
		Acrobatics:
		{
			name_en: "Acrobatics",
			name_jp: "軽業",
			details: "Enables the user to respond with agility to deal with crises, enabling certain Adventure Episodes.<br>Also increases the user's evasion by +30.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:4}
		},
		Vigilance:
		{
			name_en: "Vigilance",
			name_jp: "警戒",
			details: "Preemptive attack rate increases by +30% for every character with this skill.<br>Also increases the user's WIS.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:0, y:5}
		},
		FeatsofStrength:
		{
			name_en: "Feats of Strength",
			name_jp: "力技",
			details: "Can move or carry things in the woodlands.<br>Also increases the user's STR.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 5,
			max: 1,
			coords: {x:1, y:5}
		},
		AttackHeal:
		{
			name_en: "Attack Heal",
			name_jp: "アタックヒール",
			details: "Participants Required: 3<br>For the current turn, all party members heal 30% of their max HP every time the initiator deals damage.",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:2, y:0}
		},
		WoodlandSearchSkills:
		{
			name_en: "Woodland Search Skills",
			name_jp: "樹海探索術",
			details: "Enables the party to initiate certain Adventure Episodes and gain items from those.<br>Also increases the user's AGI.",
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
			name_en: "Mind's Eye",
			name_jp: "心眼",
			details: "Chance to nullify blind when enemies attempt to inflict it on the user.<br>The nullification chance scales with the user's level.<br><br>Threshold 1: 15% chance<br>Threshold 2: 40% chance",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:1}
		},
		TripleAttack:
		{
			name_en: "Triple Attack",
			name_jp: "トリプルアタック",
			details: "Participants Required: 4<br>Deals ranged STR-based Cut+Bash+Stab damage to one enemy. Damage scales with the characters levels.<br>The Union Gauges of the participants other than the initiator are left at 40% after use.<br>Has a base accuracy of 110.<br><br>Thershold 1: 200% damage<br>Threshold 2: 325% damage<br>Threshold 3: 450% damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 15,
			max: 1,
			coords: {x:2, y:2}
		},
		BodyImprovement:
		{
			name_en: "Body Improvement",
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
			name_en: "Athletic Training",
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
			name_en: "Self Study",
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
			name_en: "Simultaneous Attack",
			name_jp: "一斉攻撃",
			details: "Participants Required: 5<br>Participants deal STR-based damage to all enemies with their equipped weapons 5 times.<br>Each attack has a 200% chance to inflict stun.<br>Damage scales with the characters levels.<br>Has an accuracy modifier of +10<br><br>Threshold 1: 100% damage, 500% total damage<br>Threshold 2: 110% damage, 550% total damage<br>Threshold 3: 120% damage, 600% total damage<br>Threshold 4: 130% damage, 650% total damage<br>Threshold 5: 140% damage, 700% total damage<br>Threshold 6: 150% damage, 750% total damage<br>Threshold 7: 160% damage, 800% total damage<br>Threshold 8: 170% damage, 850% total damage<br>Threshold 9: 180% damage, 900% total damage<br>Threshold 10: 190% damage, 950% total damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:2, y:4}
		},
		BattlefieldsFavor:
		{
			name_en: "Battlefield's Favor",
			name_jp: "戦塵の寵愛",
			details: "Whenever the character uses a master skill in combat, they have a small chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:4}
		},
		ArmorMastery:
		{
			name_en: "Armor Mastery",
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
			name_en: "Organizational Skills",
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
			details: "Participants Required: 2<br>Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters' levels.<br>The Union Gauges of the participants other than the initiator are left at 40% after use.<br>Has an accuracy modifier of +10.<br><br>Threshold 1: 150% damage per hit. 300% total damage<br>Threshold 2: 275% damage per hit. 550% total damage<br>Threshold 3: 400% damage per hit. 800% total damage",
			dep: {},
			active: true,
			level: 0,
			reqLevel: 0,
			max: 0,
			coords: {x:1, y:0}
		},
		FullSpeedEscape:
		{
			name_en: "Full Speed Escape",
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
			name_en: "Magic Heal",
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
			name_en: "Defense Order",
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
			name_en: "Grace of the Wind",
			name_jp: "風の恩寵",
			details: "Whenever the character uses a basic skill in combat, they have a small chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:1, y:2}
		},
		Gathering:
		{
			name_en: "Gathering",
			name_jp: "採取",
			details: "Enables the party to get additional materials from gathering points.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 0,
			max: 1,
			coords: {x:0, y:3}
		},
		AnimalHusbandry:
		{
			name_en: "Animal Husbandry",
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
			name_en: "Fast as Lightning",
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
			name_en: "Serving Power",
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
			name_en: "Medicinal Plant Knowledge",
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
			name_en: "Taboo Method",
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
			name_en: "Organizational Skills",
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
			name_en: "Barrier of Selflessness",
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
			name_en: "Acrobatics",
			name_jp: "軽業",
			details: "Enables the user to respond with agility to deal with crises, enabling certain Adventure Episodes<br>Also increases the user's evasion by +30.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 10,
			max: 1,
			coords: {x:3, y:1}
		},
		BowlofHygieia:
		{
			name_en: "Bowl of Hygieia",
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
			name_en: "Body Improvement",
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
			name_en: "Athletic Training",
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
			name_en: "Self Study",
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
			name_en: "Aegis Sheild",
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
			name_en: "Wind's Favor",
			name_jp: "風の寵愛",
			details: "Whenever the character uses a master skill in combat, they have a small chance to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
			dep: {},
			active: false,
			level: 0,
			reqLevel: 20,
			max: 1,
			coords: {x:3, y:4}
		},
		Haggling:
		{
			name_en: "Haggling",
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