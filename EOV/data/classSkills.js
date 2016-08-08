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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			}
		},
		specA:
		{
			RapierMastery:
			{
				name_en: "Rapier Mastery",
				name_jp: "突剣マスタリー",
				details: "Raises attack power when a sword is equipped. Normal attacks with a sword become Stab attacks.",
				dep: {},
				active: false,
				level: 0,
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			},
			RayofLight:
			{
				name_en: "Ray of Light",
				name_jp: "レイオブライト",
				details: "When the Fencer is attacked, their chance to be targeted and their defense increase. If the Fencer fails to dodge the attack, Ray of Light's effects are reset.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:0}
			},
			BewitchingSwordDance:
			{
				name_en: "Bewitching Sword Dance",
				name_jp: "幻惑の剣舞",
				details: "Reduces the accuracy of one row of enemies for a set amount of turns. Has a 90% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:1.5}
			},
			PreemptiveCurtain:
			{
				name_en: "Preemptive Curtain",
				name_jp: "先制カーテン",
				details: "Gives a chance to automatically use Wind Curtain on the row the Fencer is in at the start of battle.",
				dep: {WindCurtain:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 5,
				coords: {x:2, y:4}
			},
			SharpThrust:
			{
				name_en: "Sharp Thrust",
				name_jp: "シャープスラスト",
				details: "Deals melee STR-based stab damage to one target. For the rest of the turn, the Fencer's chance of beign targeted and evasion will be increased. Has a 500% speed modifier and +20 base accuracy at all levels.",
				dep: {VisionThrust:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:5}
			},
			CounterBoost:
			{
				name_en: "Counter Boost",
				name_jp: "カウンタブースト",
				details: "Gives a chance to add extra attacks when Sylphid activates.",
				dep: {Sylphid:5},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:6}
			},
			Unburdened:
			{
				name_en: "Unburdened",
				name_jp: "持たざる者",
				details: "Increases the Fencer's evasion based on the number of empty equipment slots. The format of evasion bonuses is: 1 empty slot, 2 empty slots, 3 empty slots, no equipment.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:0}
			},
			PileOn:
			{
				name_en: "Pile On",
				name_jp: "誘い込み",
				details: "On this turn, when the fencer dodges an attack, all other party members in their row will counter-attack the source of the attack. The damage is based on the party members' stats, not the Fencer's. Has a 300% speed modifier at all levels.",
				dep: {BewitchingSwordDance:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:1}
			},
			AvoidAccel:
			{
				name_en: "Avoid Accel",
				name_jp: "アボイドアクセラ",
				details: "Each time the Fencer dodges an attack, the Union gauge increases.",
				dep: {BewitchingSwordDance:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 5,
				coords: {x:3, y:2}
			},
			DivineWind:
			{
				name_en: "Divine Wind",
				name_jp: "ディバインガスト",
				details: "Increases all party members' evasion for one turn. Each time a party member dodges, the bonus provided by Divine Wind is reduced. Has a 150% speed modifier at all levels.",
				dep: {PreemptiveCurtain:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:4}
			},
			RevengeThrust:
			{
				name_en: "Revenge Thrust",
				name_jp: "リベンジスラスト",
				details: "Deals melee STR-based stab+volt damage to one enemy. Damage starts at 100%, and is multiplied by a damage bonus times the number of times the Fencer has dodged. Has a 75% speed modifier and +10 base accuracy at all levels.",
				dep: {SharpThrust:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:5}
			}
		},
		specB:
		{
			RapierMastery:
			{
				name_en: "Rapier Mastery",
				name_jp: "突剣マスタリー",
				details: "Raises attack power when a sword is equipped. Normal attacks with a sword become Stab attacks.",
				dep: {},
				active: false,
				level: 0,
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
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
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			},
			SpeedofSoundBlade:
			{
				name_en: "Speed of Sound Blade",
				name_jp: "音速剣",
				details: "Passively gives normal attacks a chance to add an extra cut attack. The extra attack has the same damage as a normal attack.",
				dep: {RapierMastery:3},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:0}
			},
			ChainKiller:
			{
				name_en: "Chain Killer",
				name_jp: "チェインキラー",
				details: "Targets one enemy. For one turn, if that enemy becomes afflicted with an ailment, bind, or stun, the Fencer will attack. Has no base accuracy modifier at all levels.",
				dep: {ChainBoost:3, ChainBurst:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:2}
			},
			SylphScreen:
			{
				name_en: "Sylph Screen",
				name_jp: "シルフスクリーン",
				details: "Each time the Fencer attacks or uses an attack skill, their evasion and defense increase for that turn.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:4}
			},
			RandomStab:
			{
				name_en: "Random Stab",
				name_jp: "乱れ突き",
				details: "Deals melee STR-based Stab damage to random targets. Can hit the same target multiple times. Has no speed modifier and -5 base accuracy at all levels.",
				dep: {VisionThrust:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:5}
			},
			SpeedBoost:
			{
				name_en: "Speed Boost",
				name_jp: "素早さブースト",
				details: "Increases speed, accuracy, and evasion.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:6}
			},
			PhysicalAttackBoost:
			{
				name_en: "Physical Attack Boost",
				name_jp: "物理攻撃ブースト",
				details: "Passively increases cut/stab/bash damage.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:0}
			},
			ChainAll:
			{
				name_en: "Chain All",
				name_jp: "チェインオール",
				details: "On the next turn, Chain skills will target all enemies. Also increases the maximum number of activations. Has no speed modifier at all levels.",
				dep: {ChainKiller:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 5,
				coords: {x:3, y:1}
			},
			ChainPlus:
			{
				name_en: "Chain Plus",
				name_jp: "チェインプラス",
				details: "For a set amount of turns, both the chance of Chain skills activating and their damage are increased. Note: Currently, which values correspond to the damage boost, and which coorespond to the chance are guesswork, since they both scale in standard ways. Has no speed modifier at all levels.",
				dep: {ChainKiller:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:2}
			},
			ChainDouble:
			{
				name_en: "Chain Double",
				name_jp: "チェインダブル",
				details: "Gives a chance for Chain skills to activate twice.",
				dep: {ChainKiller:5},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:3}
			},
			Resonance:
			{
				name_en: "Resonance",
				name_jp: "レゾナンス",
				details: "Deals melee STR-based stab damage to one target. The damage starts at 100%, and is increased by the bonus damage times the number of times the Fencer attacked last turn. There is a maximum of 9 stacks of bonus damage. Has an 80% speed modifier and +10 base accuracy at all levels.",
				dep: {RandomStab:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:5}
			},
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