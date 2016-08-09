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
		base:
		{
			ShieldMastery:
			{
				name_en: "Shield Mastery",
				name_jp: "盾マスタリー",
				details: "Reduces physical damage taken when equipped with a shield.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			LineGuard:
			{
				name_en: "Line Guard",
				name_jp: "ラインガード",
				details: "Reduces physical damage taken to one row for one turn.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:1}
			},
			MaterialGuard:
			{
				name_en: "Material Guard",
				name_jp: "マテリアルガード",
				details: "Reduces magical damage taken by all allies this turn.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			HealingGuard:
			{
				name_en: "Healing Guard",
				name_jp: "ヒーリングガード",
				details: "Reduces physical damage taken by the Dragoon this turn, and recovers a fixed amount plus a percentage of the Dragoon's maximum HP when damage is taken.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:3}
			},
			Bunker:
			{
				name_en: "Bunker",
				name_jp: "バンカー",
				details: "Creates a bunker that draws enemy attacks. The bunker has 10 HP at all levels. Has a 125% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:6}
			},
			ArtilleryMastery:
			{
				name_en: "Artillery Mastery",
				name_jp: "重砲マスタリー",
				details: "Increases physical attack when equipped with artillery.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			GunMount:
			{
				name_en: "Gun Mount",
				name_jp: "ガンマウント",
				details: "Preserves the effect of last turn's guard skill while making a ranged Bash attack to 1 enemy.",
				dep: {LineGuard:2, MaterialGuard:2, HealingGuard:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			BarrageWall:
			{
				name_en: "Barrage Wall",
				name_jp: "バラージウォール",
				details: "Deals ranged bash damage to all enemies. Reduces hit targets' physical attack for a set amount of turns.<br/>Has an 80% speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			DragonsRoar:
			{
				name_en: "Dragon's Roar",
				name_jp: "竜の咆哮",
				details: "Increases one party member's defense and chance of being targeted for a set amount of turns.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			DefensivePosition:
			{
				name_en: "Defensive Position",
				name_jp: "防衛陣地",
				details: "Increases all party members' physical defense for a set amount of turns. Has an 80% speed modifier at all levels.",
				dep: {Bunker:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			}
		},
		specA:
		{
			ShieldMastery:
			{
				name_en: "Shield Mastery",
				name_jp: "盾マスタリー",
				details: "Reduces physical damage taken when equipped with a shield.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			LineGuard:
			{
				name_en: "Line Guard",
				name_jp: "ラインガード",
				details: "Reduces physical damage taken to one row for one turn.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:1}
			},
			MaterialGuard:
			{
				name_en: "Material Guard",
				name_jp: "マテリアルガード",
				details: "Reduces magical damage taken by all allies this turn.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			HealingGuard:
			{
				name_en: "Healing Guard",
				name_jp: "ヒーリングガード",
				details: "Reduces physical damage taken by the Dragoon this turn, and recovers a fixed amount plus a percentage of the Dragoon's maximum HP when damage is taken.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:3}
			},
			Bunker:
			{
				name_en: "Bunker",
				name_jp: "バンカー",
				details: "Creates a bunker that draws enemy attacks. The bunker has 10 HP at all levels. Has a 125% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:6}
			},
			ArtilleryMastery:
			{
				name_en: "Artillery Mastery",
				name_jp: "重砲マスタリー",
				details: "Increases physical attack when equipped with artillery.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			GunMount:
			{
				name_en: "Gun Mount",
				name_jp: "ガンマウント",
				details: "Preserves the effect of last turn's guard skill while making a ranged Bash attack to 1 enemy.",
				dep: {LineGuard:2, MaterialGuard:2, HealingGuard:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			BarrageWall:
			{
				name_en: "Barrage Wall",
				name_jp: "バラージウォール",
				details: "Deals ranged bash damage to all enemies. Reduces hit targets' physical attack for a set amount of turns.<br/>Has an 80% speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			DragonsRoar:
			{
				name_en: "Dragon's Roar",
				name_jp: "竜の咆哮",
				details: "Increases one party member's defense and chance of being targeted for a set amount of turns.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			DefensivePosition:
			{
				name_en: "Defensive Position",
				name_jp: "防衛陣地",
				details: "Increases all party members' physical defense for a set amount of turns. Has an 80% speed modifier at all levels.",
				dep: {Bunker:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			},
			HPBoost:
			{
				name_en: "HP Boost",
				name_jp: "ＨＰブースト",
				details: "Increases the Dragoon's maximum HP.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:2, y:0}
			},
			RecoveryGuard:
			{
				name_en: "Recovery Guard",
				name_jp: "リカバリーガード",
				details: "Reduces cut/stab/bash damage to one row for one turn. If a party member under the effect of Recovery Guard has binds, there is a chance the binds will be removed.",
				dep: {GunMount:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:2, y:1}
			},
			CounterGuard:
			{
				name_en: "Counter Guard",
				name_jp: "カウンターガード",
				details: "Reduces cut/stab/bash damage to one row for one turn. If Counter Guard is activated by enemy damage, the Dragoon will counter with a ranged stab attack to the source of damage. The chance for countering starts at 100%, and from levels 1-9, will be reduced with each counter. Level 10 will always counter.",
				dep: {GunMount:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:2, y:2}
			},
			DivideGuard:
			{
				name_en: "Divide Guard",
				name_jp: "ディバイドガード",
				details: "The Dragoon takes all damage for one party member for one turn. Reduces damage taken by the Dragoon while in effect.",
				dep: {GunMount:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:2, y:3}
			},
			ShieldThrow:
			{
				name_en: "Shield Throw",
				name_jp: "シールドスロー",
				details: "Deals ranged cut damage to one row of enemies. Has a 60% speed modifier and 75 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:2, y:4}
			},
			PreemptiveRoar:
			{
				name_en: "Preemptive Roar",
				name_jp: "先制咆哮",
				details: "Gives a chance for the Dragoon to use Dragon's Roar on themself immediately at the start of battle.",
				dep: {DragonsRoar:3},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 5,
				coords: {x:2, y:5}
			},
			PreemptiveBunker:
			{
				name_en: "Preemptive Bunker",
				name_jp: "先制バンカー",
				details: "Gives a chance to use Bunker immediately at the start of battle.",
				dep: {DefensivePosition:3},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 5,
				coords: {x:2, y:6}
			},
			FullGuard:
			{
				name_en: "Full Guard",
				name_jp: "フルガード",
				details: "The Dragoon takes all damage for the party for one turn. Reduces damage taken by the Dragoon while in effect. The protection chance starts at 100%. Every time Full Guard activates, the chance of it activating again goes down.",
				dep: {RecoveryGuard:3,CounterGuard:3,DivideGuard:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:3, y:1.5}
			},
			SoulGuard:
			{
				name_en: "Soul Guard",
				name_jp: "ソウルガード",
				details: "Reduces cut/stab/bash damage to one row for one turn. Party members under the effect of Soul Guard have a chance to survive fatal damage.",
				dep: {RecoveryGuard:3,CounterGuard:3,DivideGuard:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:3, y:2.5}
			},
			DragonForce:
			{
				name_en: "Dragon Force",
				name_jp: "竜圧",
				details: "Gives a chance to nullify attacks on party members in the row that the Dragoon is not in.",
				dep: {PreemptiveRoar:3},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:5}
			}
		},
		specB:
		{
			ShieldMastery:
			{
				name_en: "Shield Mastery",
				name_jp: "盾マスタリー",
				details: "Reduces physical damage taken when equipped with a shield.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			LineGuard:
			{
				name_en: "Line Guard",
				name_jp: "ラインガード",
				details: "Reduces physical damage taken to one row for one turn.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:1}
			},
			MaterialGuard:
			{
				name_en: "Material Guard",
				name_jp: "マテリアルガード",
				details: "Reduces magical damage taken by all allies this turn.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			HealingGuard:
			{
				name_en: "Healing Guard",
				name_jp: "ヒーリングガード",
				details: "Reduces physical damage taken by the Dragoon this turn, and recovers a fixed amount plus a percentage of the Dragoon's maximum HP when damage is taken.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:3}
			},
			Bunker:
			{
				name_en: "Bunker",
				name_jp: "バンカー",
				details: "Creates a bunker that draws enemy attacks. The bunker has 10 HP at all levels. Has a 125% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:6}
			},
			ArtilleryMastery:
			{
				name_en: "Artillery Mastery",
				name_jp: "重砲マスタリー",
				details: "Increases physical attack when equipped with artillery.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			GunMount:
			{
				name_en: "Gun Mount",
				name_jp: "ガンマウント",
				details: "Preserves the effect of last turn's guard skill while making a ranged Bash attack to 1 enemy.",
				dep: {LineGuard:2, MaterialGuard:2, HealingGuard:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			BarrageWall:
			{
				name_en: "Barrage Wall",
				name_jp: "バラージウォール",
				details: "Deals ranged bash damage to all enemies. Reduces hit targets' physical attack for a set amount of turns.<br/>Has an 80% speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			DragonsRoar:
			{
				name_en: "Dragon's Roar",
				name_jp: "竜の咆哮",
				details: "Increases one party member's defense and chance of being targeted for a set amount of turns.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			DefensivePosition:
			{
				name_en: "Defensive Position",
				name_jp: "防衛陣地",
				details: "Increases all party members' physical defense for a set amount of turns. Has an 80% speed modifier at all levels.",
				dep: {Bunker:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			},
			GunRevenge: 
			{
				name_en: "Gun Revenge",
				name_jp: "ガンリベンジ",
				details: "Increases the damage of artillery skills after either activating a Guard skill, or when the Bunker (possibly Pillbox too?) is attacked.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:0}
			},
			TPBoost: 
			{
				name_en: "TP Boost",
				name_jp: "ＴＰブースト",
				details: "Increases the Dragoon's maximum TP.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:1}
			},
			RapidCannon: 
			{
				name_en: "Rapid Cannon",
				name_jp: "ラピッドカノン",
				details: "Deals ranged bash damage to one enemy at the start of the turn. Has +20 base accuracy at all levels.",
				dep: {BarrageWall:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:3}
			},
			CurseCannon: 
			{
				name_en: "Curse Cannon",
				name_jp: "カースカノン",
				details: "Deals ranged bash damage to one enemy. Attempts to inflict curse on the target. Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {BarrageWall:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:4}
			},
			HypnoCannon: 
			{
				name_en: "Hypno Cannon",
				name_jp: "ヒュプノカノン",
				details: "Deals ranged bash damage to one enemy. Attempts to inflict sleep on the target. Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {BarrageWall:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:5}
			},
			Pillbox: 
			{
				name_en: "Pillbox",
				name_jp: "トーチカ",
				details: "Creates a pillbox that can take hits. The pillbox will counter whoever attacks it. The pillbox has 10 HP at all levels. Has no speed modifier at all levels.",
				dep: {DefensivePosition:3},
				active: true,
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
			BombardmentPrep: 
			{
				name_en: "Bombardment Prep",
				name_jp: "砲撃準備",
				details: "Increases the damage, accuracy, and speed of the artillery skill used on the next turn. Has no speed modifier at all levels.",
				dep: {TPBoost:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:1}
			},
			BusterCannon: 
			{
				name_en: "Buster Cannon",
				name_jp: "バスターカノン",
				details: "One turn after casting, deals ranged bash+fire damage to one enemy. Damage is multiplied by 2x if both the Dragoon and their target are in the front row, 1.5x if the Dragoon is in the back row and the target is in the front and vice versa, and 1x if both the Dragoon and their target are in the back row. Cannot be recasted until it has gone off. Initial prepration has a 90% speed modifier, actual hit has a 1000% speed modifier. Actual hit has no base accuracy modifier.",
				dep: {RapidCannon:3,CurseCannon:3,HypnoCannon:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:4}
			},
			GunSupport: 
			{
				name_en: "Gun Support",
				name_jp: "ガンサポート",
				details: "Gives a chance to automatically use Pillbox when the Dragoon reduces damage dealt to them, or negates an attack.",
				dep: {Pillbox:3},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:6}
			}
		}
	},
	cestus:
	{
		base:
		{

		},
		specA:
		{

		},
		specB:
		{
			
		}
	},
	reaper:
	{
		base:
		{

		},
		specA:
		{

		},
		specB:
		{
			
		}
	},
	warlock:
	{
		base:
		{

		},
		specA:
		{

		},
		specB:
		{
			
		}
	},
	necromancer:
	{
		base:
		{

		},
		specA:
		{

		},
		specB:
		{
			
		}
	},
	hound:
	{
		base:
		{

		},
		specA:
		{

		},
		specB:
		{
			
		}
	},
	masurao:
	{
		base:
		{

		},
		specA:
		{

		},
		specB:
		{
			
		}
	},
	shaman:
	{
		base:
		{

		},
		specA:
		{

		},
		specB:
		{
			
		}
	},
	herbalist:
	{
		base:
		{

		},
		specA:
		{

		},
		specB:
		{
			
		}
	}
}