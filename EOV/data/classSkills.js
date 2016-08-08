var classSkills =
{
	fencer:
	{
		base:
		{
			RapierMastery:
			{
				name_en: "Rapier Mastery",
				name_jp: "突剣マスタリー",
				details: "Raises attack power when a sword is equipped. Normal attacks with a sword become Stab attacks.",
				dep: {},
				active: false,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			ChainFire:
			{
				name_en: "Chain Fire",
				name_jp: "チェインファイア",
				details: "This turn, if the designated target is hit by a Fire or Stab attack, follow up with a STR-based Fire attack. The chance of a Chain activating starts at 100%, and decreases with each activation.",
				dep: {},
				active: true,
				level: 0,
				max: 10,
				coords: {x:0, y:1}
			},
			ChainIce:
			{
				name_en: "Chain Ice",
				name_jp: "チェインフリーズ",
				details: "This turn, if the designated target is hit by an Ice or Stab attack, follow up with a STR-based Ice attack. The chance of a Chain activating starts at 100%, and decreases with each activation.",
				dep: {},
				active: true,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			ChainVolt:
			{
				name_en: "Chain Volt",
				name_jp: "チェインショック",
				details: "This turn, if the designated target is hit by a Volt or Stab attack, follow up with a STR-based Volt attack. The chance of a Chain activating starts at 100%, and decreases with each activation.",
				dep: {},
				active: true,
				level: 0,
				max: 10,
				coords: {x:0, y:3}
			},
			Predict:
			{
				name_en: "Predict",
				name_jp: "プレディクト",
				details: "For one turn, increases the Fencer's evasion and chance to be targeted. The Fencer takes 2.5x damage from all sources while Predict is active. Each time the Fencer dodges an attack, their evasion and chance to be targeted are decreased.",
				dep: {},
				active: true,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			ChainBoost:
			{
				name_en: "Chain Boost",
				name_jp: "チェインブースト",
				details: "Each time a Chain skill activates, the Chain skill's damage on that turn increases. The maximum bonus is 99%.",
				dep: {ChainFire:2, ChainIce:2, ChainVolt:2},
				active: false,
				level: 0,
				max: 10,
				coords: {x:1, y:1.5}
			},
			ChainBurst:
			{
				name_en: "Chain Burst",
				name_jp: "チェインバースト",
				details: "When an enemy is killed with a Chain skill, the Fencer will attack another enemy with melee STR-based damage of the same element. The activation has +10 base accuracy at all levels.",
				dep: {ChainFire:2, ChainIce:2, ChainVolt:2},
				active: false,
				level: 0,
				max: 10,
				coords: {x:1, y:2.5}
			},
			WindCurtain:
			{
				name_en: "Wind Curtain",
				name_jp: "ウィンドカーテン",
				details: "For a set amount of turns, make a row of allies avoid a physical attack, only once.",
				dep: {Predict:3},
				active: true,
				level: 0,
				max: 5,
				coords: {x:1, y:4}
			},
			VisionThrust:
			{
				name_en: "Vision Thrust",
				name_jp: "ビジョンスラスト",
				details: "Performs a STR-based stab attack to one target. This attack has a chance to inflict the blind ailment. Has a 120% speed modifier and +25 base accuracy at all levels.",
				dep: {},
				active: true,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			Sylphid:
			{
				name_en: "Sylphid",
				name_jp: "シルフィード",
				details: "When an attack is dodged, the Fencer has a chance to counter-attack the source of the attack. Every time the Fencer counters, the chance to counter again on that turn decreases by 40%.",
				dep: {},
				active: false,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			}
		},
		specA:
		{

		},
		specB:
		{

		}	
	},
	dragoon: 
	{

	},
	cestus:
	{

	},
	reaper:
	{

	},
	warlock:
	{

	},
	necromancer:
	{

	},
	hound:
	{

	},
	masurao:
	{

	},
	shaman:
	{

	},
	herbalist:
	{
		
	}
}