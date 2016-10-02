var raceSkills = 
{
	earthrun:
	{
		Analyze:
		{
			name_en: "Analyze",
			name_jp: "アナライズ",
			details: "Temporarily register a single monster's data.<br><br>Participants Required: 1",
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
			details: "Participants attack an enemy with their weapons twice.<br>Deals STR-based damage.<br>Damage type properties take any buffs from oils into account.<br>The skill has a melee range, meaning that even if the initiator has a ranged weapon, they cannot target the enemy's back row, if they are in the back row themselves.<br>Damage scales with the characters levels.<br>Exact thresholds for the scaling are currently unknown.<br>The Union Gauges of the participants (Not the initiator) are left at 40% after use.<br><br>Has an accuracy modifier of +10.<br><br>Threshold 1: 150% damage per hit. 300% total damage<br>Threshold 2: 275% damage per hit. 550% total damage<br>Threshold 3: 400% damage per hit. 800% total damage<br><br>Participants Required: 2",
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
			details: "100% chance of escaping from battle when used.<br>Sends the party back to the start of the floor. Only works if the battle can even be escaped from.<br>Usable even if the initiator's legs are bound.<br><br>Participants Required: 3",
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
			details: "Restores the party's TP.<br>TP restoration is equal to 3% of max TP + 6.<br><br>Participants Required: 4",
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
			details: "All allies recover 15% to 30% of their max HP.<br>Heal scales with levels.<br><br>Participants Required: 1",
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
			details: "Whenever the character uses a basic skill in combat, they have a small chance (exact chance currently unknown) to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
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
			details: "Enables the party to initiate certain adventure episodes and gain items from those.<br>Also increases the user's AGI by 3 from levels 1 to 10.",
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
			details: "Revives one dead party member.<br>Unknown if the amount healed scales with the characters levels.<br>Listing the data just in case.<br><br>Threshold 1: 1% healing power<br>Threshold 2: 11% healing power<br>Threshold 3: 21% healing power<br>Threshold 4: 31% healing power<br>Threshold 5: 90% healing power<br>Threshold 6: 110% healing power<br>Threshold 7: 130% healing power<br>Threshold 8: 150% healing power<br>Threshold 9: 170% healing power<br>Threshold 10: 270% healing power<br><br>Participants Required: 2",
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
			details: "Max item capacity increases by 5 for each character with this skill.<br>Also increases the user's VIT by 3 from levels 1 to 10.",
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
			details: "Nullifies the first 3 enemy attacks on the current turn.<br><br>Participants Required: 3",
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
			details: "Doubles the success rate of skills that inflict petrify, curse, sleep, panic, paralyze, poison, blind, head bind, arm bind, and leg bind for the current turn.<br><br>Participants Required: 4",
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
			details: "Increases the user's STR and VIT by 3 from levels 1 to 10.",
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
			details: "Increases the user's AGI and LUC by 3 from levels 1 to 10.",
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
			details: "Increases the user's INT and WIS by 3 from levels 1 to 10.",
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
			details: "Nullifies all binds and ailments the enemy tries to inflict, and gives the party a chance to 50% survive any fatal blows, leaving them with 10% of their max HP.<br>(Or it could be a 10% chance to survive, leaving them with 50% of their max HP. Or the chance to survive scales with levels, from 10% to 50%.)<br><br>Participants Required: 5",
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
			details: "Whenever the character uses a master skill in combat, they have a small chance (exact chance currently unknown) to recover some TP.<br>TP restoration is equal to (TP cost of skill used / 5) + 1.",
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
			details: "Drop rate is increased by +10% for every party member that has this skill.<br>Also increases the user's INT by 3 from levels 1 to 10.",
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

	},
	therian:
	{

	},
	brownie:
	{

	}
}