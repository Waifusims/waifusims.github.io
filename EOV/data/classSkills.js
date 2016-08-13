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
				details: "Raises attack power when a sword is equipped.<br>Normal attacks with a sword become Stab attacks.",
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
				details: "This turn, if the designated target is hit by a Fire or Stab attack, follow up with a STR-based Fire attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "This turn, if the designated target is hit by an Ice or Stab attack, follow up with a STR-based Ice attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "This turn, if the designated target is hit by a Volt or Stab attack, follow up with a STR-based Volt attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "For one turn, increases the Fencer's evasion and chance to be targeted.<br>The Fencer takes 2.5x damage from all sources while Predict is active.<br>Each time the Fencer dodges an attack, their evasion and chance to be targeted are decreased.",
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
				details: "Each time a Chain skill activates, the Chain skill's damage on that turn increases.<br>The maximum bonus is 99%.",
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
				details: "When an enemy is killed with a Chain skill, the Fencer will attack another enemy with melee STR-based damage of the same element.<br>The activation has +10 base accuracy at all levels.",
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
				details: "Performs a STR-based stab attack to one target.<br>This attack has a chance to inflict the blind ailment.<br>Has a 120% speed modifier and +25 base accuracy at all levels.",
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
				details: "When an attack is dodged, the Fencer has a chance to counter-attack the source of the attack.<br>Every time the Fencer counters, the chance to counter again on that turn decreases by 40%.",
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
				details: "Raises attack power when a sword is equipped.<br>Normal attacks with a sword become Stab attacks.",
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
				details: "This turn, if the designated target is hit by a Fire or Stab attack, follow up with a STR-based Fire attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "This turn, if the designated target is hit by an Ice or Stab attack, follow up with a STR-based Ice attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "This turn, if the designated target is hit by a Volt or Stab attack, follow up with a STR-based Volt attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "For one turn, increases the Fencer's evasion and chance to be targeted.<br>The Fencer takes 2.5x damage from all sources while Predict is active.<br>Each time the Fencer dodges an attack, their evasion and chance to be targeted are decreased.",
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
				details: "Each time a Chain skill activates, the Chain skill's damage on that turn increases.<br>The maximum bonus is 99%.",
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
				details: "When an enemy is killed with a Chain skill, the Fencer will attack another enemy with melee STR-based damage of the same element.<br>The activation has +10 base accuracy at all levels.",
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
				details: "Performs a STR-based stab attack to one target.<br>This attack has a chance to inflict the blind ailment.<br>Has a 120% speed modifier and +25 base accuracy at all levels.",
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
				details: "When an attack is dodged, the Fencer has a chance to counter-attack the source of the attack.<br>Every time the Fencer counters, the chance to counter again on that turn decreases by 40%.",
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
				details: "When the Fencer is attacked, their chance to be targeted and their defense increase.<br>If the Fencer fails to dodge the attack, Ray of Light's effects are reset.",
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
				details: "Reduces the accuracy of one row of enemies for a set amount of turns.<br>Has a 90% speed modifier at all levels.",
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
				details: "Deals melee STR-based stab damage to one target.<br>For the rest of the turn, the Fencer's chance of beign targeted and evasion will be increased.<br>Has a 500% speed modifier and +20 base accuracy at all levels.",
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
				details: "Increases the Fencer's evasion based on the number of empty equipment slots.<br>The format of evasion bonuses is: 1 empty slot, 2 empty slots, 3 empty slots, no equipment.",
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
				details: "On this turn, when the fencer dodges an attack, all other party members in their row will counter-attack the source of the attack.<br>The damage is based on the party members' stats, not the Fencer's.<br>Has a 300% speed modifier at all levels.",
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
				details: "Increases all party members' evasion for one turn.<br>Each time a party member dodges, the bonus provided by Divine Wind is reduced.<br>Has a 150% speed modifier at all levels.",
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
				details: "Deals melee STR-based stab+volt damage to one enemy.<br>Damage starts at 100%, and is multiplied by a damage bonus times the number of times the Fencer has dodged.<br>Has a 75% speed modifier and +10 base accuracy at all levels.",
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
				details: "Raises attack power when a sword is equipped.<br>Normal attacks with a sword become Stab attacks.",
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
				details: "This turn, if the designated target is hit by a Fire or Stab attack, follow up with a STR-based Fire attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "This turn, if the designated target is hit by an Ice or Stab attack, follow up with a STR-based Ice attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "This turn, if the designated target is hit by a Volt or Stab attack, follow up with a STR-based Volt attack.<br>The chance of a Chain activating starts at 100%, and decreases with each activation.",
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
				details: "For one turn, increases the Fencer's evasion and chance to be targeted.<br>The Fencer takes 2.5x damage from all sources while Predict is active.<br>Each time the Fencer dodges an attack, their evasion and chance to be targeted are decreased.",
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
				details: "Each time a Chain skill activates, the Chain skill's damage on that turn increases.<br>The maximum bonus is 99%.",
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
				details: "When an enemy is killed with a Chain skill, the Fencer will attack another enemy with melee STR-based damage of the same element.<br>The activation has +10 base accuracy at all levels.",
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
				details: "Performs a STR-based stab attack to one target.<br>This attack has a chance to inflict the blind ailment.<br>Has a 120% speed modifier and +25 base accuracy at all levels.",
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
				details: "When an attack is dodged, the Fencer has a chance to counter-attack the source of the attack.<br>Every time the Fencer counters, the chance to counter again on that turn decreases by 40%.",
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
				details: "Passively gives normal attacks a chance to add an extra cut attack.<br>The extra attack has the same damage as a normal attack.",
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
				details: "Targets one enemy.<br>For one turn, if that enemy becomes afflicted with an ailment, bind, or stun, the Fencer will attack.<br>Has no base accuracy modifier at all levels.",
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
				details: "Deals melee STR-based Stab damage to random targets.<br>Can hit the same target multiple times.<br>Has no speed modifier and -5 base accuracy at all levels.",
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
				details: "On the next turn, Chain skills will target all enemies.<br>Also increases the maximum number of activations.<br>Has no speed modifier at all levels.",
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
				details: "For a set amount of turns, both the chance of Chain skills activating and their damage are increased.<br>Note: Currently, which values correspond to the damage boost, and which coorespond to the chance are guesswork, since they both scale in standard ways.<br>Has no speed modifier at all levels.",
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
				details: "Deals melee STR-based stab damage to one target.<br>The damage starts at 100%, and is increased by the bonus damage times the number of times the Fencer attacked last turn.<br>There is a maximum of 9 stacks of bonus damage.<br>Has an 80% speed modifier and +10 base accuracy at all levels.",
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
				details: "Creates a bunker that draws enemy attacks.<br>The bunker has 10 HP at all levels.<br>Has a 125% speed modifier at all levels.",
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
				details: "Deals ranged bash damage to all enemies.<br>Reduces hit targets' physical attack for a set amount of turns.<br/>Has an 80% speed modifier and no base accuracy modifier at all levels.",
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
				details: "Increases all party members' physical defense for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
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
				details: "Creates a bunker that draws enemy attacks.<br>The bunker has 10 HP at all levels.<br>Has a 125% speed modifier at all levels.",
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
				details: "Deals ranged bash damage to all enemies.<br>Reduces hit targets' physical attack for a set amount of turns.<br/>Has an 80% speed modifier and no base accuracy modifier at all levels.",
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
				details: "Increases all party members' physical defense for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
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
				details: "Reduces cut/stab/bash damage to one row for one turn.<br>If a party member under the effect of Recovery Guard has binds, there is a chance the binds will be removed.",
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
				details: "Reduces cut/stab/bash damage to one row for one turn.<br>If Counter Guard is activated by enemy damage, the Dragoon will counter with a ranged stab attack to the source of damage.<br>The chance for countering starts at 100%, and from levels 1-9, will be reduced with each counter.<br>Level 10 will always counter.",
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
				details: "The Dragoon takes all damage for one party member for one turn.<br>Reduces damage taken by the Dragoon while in effect.",
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
				details: "Deals ranged cut damage to one row of enemies.<br>Has a 60% speed modifier and 75 base accuracy at all levels.",
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
				details: "The Dragoon takes all damage for the party for one turn.<br>Reduces damage taken by the Dragoon while in effect.<br>The protection chance starts at 100%.<br>Every time Full Guard activates, the chance of it activating again goes down.",
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
				details: "Reduces cut/stab/bash damage to one row for one turn.<br>Party members under the effect of Soul Guard have a chance to survive fatal damage.",
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
				details: "Creates a bunker that draws enemy attacks.<br>The bunker has 10 HP at all levels.<br>Has a 125% speed modifier at all levels.",
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
				details: "Deals ranged bash damage to all enemies.<br>Reduces hit targets' physical attack for a set amount of turns.<br/>Has an 80% speed modifier and no base accuracy modifier at all levels.",
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
				details: "Increases all party members' physical defense for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
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
				details: "Deals ranged bash damage to one enemy at the start of the turn.<br>Has +20 base accuracy at all levels.",
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
				details: "Deals ranged bash damage to one enemy.<br>Attempts to inflict curse on the target.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
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
				details: "Deals ranged bash damage to one enemy.<br>Attempts to inflict sleep on the target.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
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
				details: "Creates a pillbox that can take hits.<br>The pillbox will counter whoever attacks it.<br>The pillbox has 10 HP at all levels.<br>Has no speed modifier at all levels.",
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
				details: "Increases the damage, accuracy, and speed of the artillery skill used on the next turn.<br>Has no speed modifier at all levels.",
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
				details: "One turn after casting, deals ranged bash+fire damage to one enemy.<br>Damage is multiplied by 2x if both the Dragoon and their target are in the front row, 1.5x if the Dragoon is in the back row and the target is in the front and vice versa, and 1x if both the Dragoon and their target are in the back row.<br>Cannot be recasted until it has gone off.<br>Initial prepration has a 90% speed modifier, actual hit has a 1000% speed modifier.<br>Actual hit has no base accuracy modifier.",
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
			GauntletMastery:
			{
				name_en: "Gauntlet Mastery",
				name_jp: "拳甲マスタリー",
				details: "Increases physical attack when equipped with gauntlets.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			Flicker:
			{
				name_en: "Flicker",
				name_jp: "フリッカー",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their head.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:1}
			},
			ArmBreak:
			{
				name_en: "Arm Break",
				name_jp: "アームブレイク",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their arms.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			LiverBlow:
			{
				name_en: "Liver Blow",
				name_jp: "リバーブロー",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their legs.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:3}
			},
			RushingBlood:
			{
				name_en: "Rushing Blood",
				name_jp: "血の暴走",
				details: "Every time the Cestus' HP decreases, they have a chance of attacking a random enemy with their current weapon.<br>The damage modifier of the attack is 100%, and is capped at 5 attacks per turn.<br>The attacks do not count as normal attacks (They can't crit).<br>Has a +5 accuracy modifier at all levels.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			ThunderGodFist:
			{
				name_en: "Thunder God Fist",
				name_jp: "雷神拳",
				details: "Deals STR-based melee bash + volt damage to one target.<br>If the target does not die, the Cestus takes recoil damage.<br>Has a 130% speed modifier and an accuracy modifier of +10 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:5}
			},
			PhysicalAttackBoost:
			{
				name_en: "Physical Attack Boost",
				name_jp: "物理攻撃ブースト",
				details: "Passively increases cut/stab/bash damage.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			OneTwo:
			{
				name_en: "One-Two",
				name_jp: "ワンツー",
				details: "Deals STR-based melee bash damage to one target. Has a chance to follow up with all binding skills the Cestus knows (Flicker, Arm Break, or Liver Blow) on unbound parts.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {Flicker:3,ArmBreak:3,LiverBlow:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			GivingitEverything:
			{
				name_en: "Giving it Everything",
				name_jp: "粉骨砕身",
				details: "Places a buff on an ally that boosts the amount of physical damage they deal for 4 turns, but causes them to lose a portion of their current HP every time they act (This means that the HP loss from this buff cannot kill them no matter what).<br>The initial cast does not cause the target to lose HP.<br>Has a 40% speed modifier at all levels.",
				dep: {RushingBlood:1},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			DemonFist:
			{
				name_en: "Demon Fist",
				name_jp: "鬼人拳",
				details: "The Cestus spends a portion of their maximum HP to deal STR-based melee bash damage to 1 target that splashes to adjacent enemies.<br>Has an 80% speed modifier and no accuracy modifier at all levels.",
				dep: {ThunderGodFist:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			}
		},
		specA:
		{
			GauntletMastery:
			{
				name_en: "Gauntlet Mastery",
				name_jp: "拳甲マスタリー",
				details: "Increases physical attack when equipped with gauntlets.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			Flicker:
			{
				name_en: "Flicker",
				name_jp: "フリッカー",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their head.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:1}
			},
			ArmBreak:
			{
				name_en: "Arm Break",
				name_jp: "アームブレイク",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their arms.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			LiverBlow:
			{
				name_en: "Liver Blow",
				name_jp: "リバーブロー",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their legs.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:3}
			},
			RushingBlood:
			{
				name_en: "Rushing Blood",
				name_jp: "血の暴走",
				details: "Every time the Cestus' HP decreases, they have a chance of attacking a random enemy with their current weapon.<br>The damage modifier of the attack is 100%, and is capped at 5 attacks per turn.<br>The attacks do not count as normal attacks (They can't crit).<br>Has a +5 accuracy modifier at all levels.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			ThunderGodFist:
			{
				name_en: "Thunder God Fist",
				name_jp: "雷神拳",
				details: "Deals STR-based melee bash + volt damage to one target.<br>If the target does not die, the Cestus takes recoil damage.<br>Has a 130% speed modifier and an accuracy modifier of +10 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:5}
			},
			PhysicalAttackBoost:
			{
				name_en: "Physical Attack Boost",
				name_jp: "物理攻撃ブースト",
				details: "Passively increases cut/stab/bash damage.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			OneTwo:
			{
				name_en: "One-Two",
				name_jp: "ワンツー",
				details: "Deals STR-based melee bash damage to one target. Has a chance to follow up with all binding skills the Cestus knows (Flicker, Arm Break, or Liver Blow) on unbound parts.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {Flicker:3,ArmBreak:3,LiverBlow:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			GivingitEverything:
			{
				name_en: "Giving it Everything",
				name_jp: "粉骨砕身",
				details: "Places a buff on an ally that boosts the amount of physical damage they deal for 4 turns, but causes them to lose a portion of their current HP every time they act (This means that the HP loss from this buff cannot kill them no matter what).<br>The initial cast does not cause the target to lose HP.<br>Has a 40% speed modifier at all levels.",
				dep: {RushingBlood:1},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			DemonFist:
			{
				name_en: "Demon Fist",
				name_jp: "鬼人拳",
				details: "The Cestus spends a portion of their maximum HP to deal STR-based melee bash damage to 1 target that splashes to adjacent enemies.<br>Has an 80% speed modifier and no accuracy modifier at all levels.",
				dep: {ThunderGodFist:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			DoublePunch:
			{
				name_en: "Double Punch",
				name_jp: "ダブルパンチ",
				details: "If a binding skill fails to inflict a bind, there is a chance for that skill to activate again.<br>Will not activate if the target already has the specified body part bound.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:0}
			},
			Corkscrew:
			{
				name_en: "Corkscrew",
				name_jp: "コークスクリュー",
				details: "Deals STR-based melee bash damage to one target and has a chance to inflict paralysis.<br>Has a 90% speed modifier and an accuracy modifier of -5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:1}
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
				coords: {x:2, y:3}
			},
			CrossCounter:
			{
				name_en: "Cross Counter",
				name_jp: "クロスカウンター",
				details: "When an ally on the same row takes physical damage, the Cestus counters with a STR-based melee attack that attempts to bind the body part used to attack. Only activates once per turn.<br>Has a 1500% speed modifier and an accuracy modifier of +50 at all levels.",
				dep: {GivingitEverything:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:4}
			},
			Interval:
			{
				name_en: "Interval",
				name_jp: "インターバル",
				details: "Dispels all ailments and binds on the Cestus and increases their attack power for the next turn.<br>Does not work if you don't have any binds/ailments.<br>Will not increase the damage output of Union skills.<br>The charge lasts until the end of the next turn (This means that the charge will not get used up on the very next attack).<br>Has a 200% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:5}
			},
			ArmBlock:
			{
				name_en: "Arm Block",
				name_jp: "アームブロック",
				details: "Raises ailment and bind resistance for allies in the same row as the Cestus for a set number of turns (This buff may follow EO4's Dancer buff rules).<br/>Has a speed modifier of 70% at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:6}
			},
			ConstraintAttackBoost:
			{
				name_en: "Constraint Attack Boost",
				name_jp: "抑制攻撃ブースト",
				details: "Increases the chance of inflicting ailments and binds.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:0}
			},
			LeadBlow:
			{
				name_en: "Lead Blow",
				name_jp: "リードブロー",
				details: "Deals STR-based melee bash damage to one enemy.<br>If they have any binds or ailments, follow up with any skills that inflict those binds (Flicker, Arm Break, or Liver Blow).<br>For ailments, Corkscrew will be used, no matter what ailment the target has.<br>Has a 90% speed modifier and no accuracy modifier at all levels.",
				dep: {Corkscrew:2,OneTwo:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:1.5}
			},
			RushOut:
			{
				name_en: "Rush Out",
				name_jp: "ラッシュアウト",
				details: "Attacks one enemy with STR-based melee bash damage multiple times.<br>The number of attacks is equal to the number of times the Cestus attacked on the previous turn. Maximum number of hits is 9.<br>Any Union skills that got cast does not count toward the hit total.<br>Has an 80% speed modifier and an accuracy modifier of -10 at all levels.",
				dep: {SpeedBoost:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:3}
			},
			Clinch:
			{
				name_en: "Clinch",
				name_jp: "クリンチ",
				details: "Chance to bind the head, arms, and legs of the Cestus and one enemy.<br>Attempts to bind the enemy before binding the Cestus.<br>Has an 80% speed modifier at all levels.",
				dep: {Interval:3,ArmBlock:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:5.5}
			}
		},
		specB:
		{
			GauntletMastery:
			{
				name_en: "Gauntlet Mastery",
				name_jp: "拳甲マスタリー",
				details: "Increases physical attack when equipped with gauntlets.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			Flicker:
			{
				name_en: "Flicker",
				name_jp: "フリッカー",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their head.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:1}
			},
			ArmBreak:
			{
				name_en: "Arm Break",
				name_jp: "アームブレイク",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their arms.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			LiverBlow:
			{
				name_en: "Liver Blow",
				name_jp: "リバーブロー",
				details: "Deals STR-based melee bash damage to one target and has a chance to bind their legs.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:3}
			},
			RushingBlood:
			{
				name_en: "Rushing Blood",
				name_jp: "血の暴走",
				details: "Every time the Cestus' HP decreases, they have a chance of attacking a random enemy with their current weapon.<br>The damage modifier of the attack is 100%, and is capped at 5 attacks per turn.<br>The attacks do not count as normal attacks (They can't crit.)<br>Has a +5 accuracy modifier at all levels.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			ThunderGodFist:
			{
				name_en: "Thunder God Fist",
				name_jp: "雷神拳",
				details: "Deals STR-based melee bash + volt damage to one target.<br>If the target does not die, the Cestus takes recoil damage.<br>Has a 130% speed modifier and an accuracy modifier of +10 at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:5}
			},
			PhysicalAttackBoost:
			{
				name_en: "Physical Attack Boost",
				name_jp: "物理攻撃ブースト",
				details: "Passively increases cut/stab/bash damage.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			OneTwo:
			{
				name_en: "One-Two",
				name_jp: "ワンツー",
				details: "Deals STR-based melee bash damage to one target. Has a chance to follow up with all binding skills the Cestus knows (Flicker, Arm Break, or Liver Blow) on unbound parts.<br>Has a 90% speed modifier and an accuracy modifier of +5 at all levels.",
				dep: {Flicker:3,ArmBreak:3,LiverBlow:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			GivingitEverything:
			{
				name_en: "Giving it Everything",
				name_jp: "粉骨砕身",
				details: "Places a buff on an ally that boosts the amount of physical damage they deal for 4 turns, but causes them to lose a portion of their current HP every time they act. (This means that the HP loss from this buff cannot kill them no matter what.)<br>The initial cast does not cause the target to lose HP.<br>Has a 40% speed modifier at all levels.",
				dep: {RushingBlood:1},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			DemonFist:
			{
				name_en: "Demon Fist",
				name_jp: "鬼人拳",
				details: "The Cestus spends a portion of their maximum HP to deal STR-based melee bash damage to 1 target that splashes to adjacent enemies.<br>Has an 80% speed modifier and no accuracy modifier at all levels.",
				dep: {ThunderGodFist:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			Grit:
			{
				name_en: "Grit",
				name_jp: "不屈",
				details: "Increases the Cestus' damage output when their HP is below a certain percentage.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:0}
			},
			VajraStance:
			{
				name_en: "Vajra Stance",
				name_jp: "金剛の構え",
				details: "Raises physical defense for allies in the same row as the Cestus for a set number of turns (This buff may follow EO4's Dancer buff rules).<br>Has a speed modifier of 70% at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:1}
			},
			SoulSmash:
			{
				name_en: "Soul Smash",
				name_jp: "魂砕き",
				details: "Deals STR-based melee bash damage to all enemies, and heals the Cestus for a portion of the damage they dealt.<br>Has an 80% speed modifier and an accuracy modifier of -5 at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:2}
			},
			GiantKiller:
			{
				name_en: "Giant Killer",
				name_jp: "大物殺し",
				details: "Deals STR-based melee bash damage to one enemy.<br>Deals even more damage as long as the target has at least 1% more remaining HP% than the Cestus' current HP pool.<br>Has a 150% speed modifier and no accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:3}
			},
			BackFromtheDead:
			{
				name_en: "Back From the Dead",
				name_jp: "黄泉返し",
				details: "Deals STR-based melee bash damage to one enemy.<br>Deals more damage the less HP the entire party has. How this works is that each % of HP missing is added onto a 1x multiplier (dead party members do not count for this), up to a maximum of a 5.95x multiplier (each party member has only 1% HP remaining).<br>Has a 20% speed modifier and an accuracy modifier of +50 at all levels.",
				dep: {GivingitEverything:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:4}
			},
			DemonGodFist:
			{
				name_en: "Demon God Fist",
				name_jp: "鬼神拳",
				details: "The Cestus spends a portion of their maximum HP to deal STR-based melee bash damage to 1 target.<br>Has an 80% speed modifier and no accuracy modifier at all levels.",
				dep: {DemonFist:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:5}
			},
			ConstraintDefenseBoost:
			{
				name_en: "Constraint Defense Boost",
				name_jp: "抑制防御ブースト",
				details: "Increases defense against ailments and binds.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:6}
			},
			HPBoost:
			{
				name_en: "HP Boost",
				name_jp: "ＨＰブースト",
				details: "Increases the Cestus' maximum HP.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:0}
			},
			OugiRengokusatsu:
			{
				name_en: "Ougi Rengokusatsu",
				name_jp: "奥義 煉獄殺",
				details: "When cast, places the Cestus under the Endure status (not a buff, lasts one turn), which lets them survive a fatal blow and increases the amount of damage they deal on the next turn when the Endure activates.<br>The damage boost will not affect Union skills.<br>Has a 200% speed modifier at all levels.",
				dep: {VajraStance:5,SoulSmash:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:1.5}
			},
			OugiTenchihaten:
			{
				name_en: "Ougi Tenchihaten",
				name_jp: "奥義 天地破天",
				details: "When cast, this lets the Cestus deal even more damage on the next turn the more HP they recover on the previous turn (Not a buff, lasts one turn).<br>The damage boost will not affect Union skills.<br>Has a 200% speed modifier at all levels.<br>NOTE: How much HP recovery is needed to reach the max damage boost is currently unknown at this time.",
				dep: {GiantKiller:3,BackFromtheDead:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:3.5}
			}
		}
	},
	reaper:
	{
		base:
		{
			ScytheMastery: 
			{
				name_en: "Scythe Mastery",
				name_jp: "鎌マスタリー",
				details: "Raises physical attack power when a scythe is equipped.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			MiasmaWeapon: 
			{
				name_en: "Miasma Weapon",
				name_jp: "瘴気の兵装",
				details: "Sacrifices a percentage of the Reaper's maximum (or current?) HP to apply the Miasma Weapon buff to the Reaper for 4 turns, which enables certain skills to have additional effects and increases all action speed (including normal attacks).<br>Has a 30% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			FrailMiasma: 
			{
				name_en: "Frail Miasma",
				name_jp: "繊弱の瘴気",
				details: "Lowers all enemies' physical and elemental attack for a set amount of turns.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			ScytheofNumbStasis: 
			{
				name_en: "Scythe of Numb Stasis",
				name_jp: "痺止の鎌",
				details: "Deals STR based melee cut damage to one row.<br>If Miasma Weapon is active, has a chance to inflict paralysis.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:5}
			},
			GatherSouls: 
			{
				name_en: "Gather Souls",
				name_jp: "魂寄せ",
				details: "Increases the encounter rate and increases the amount of exp gained from battles for a set number of steps.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			PreemptiveWeapon: 
			{
				name_en: "Preemptive Weapon",
				name_jp: "先制兵装",
				details: "Gives a chance to use Miasma Weapon immediately at the start of battle.<br>Does not activate if someone already used this.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:1}
			},
			EndlessShroud: 
			{
				name_en: "Endless Shroud",
				name_jp: "終わりなき衣",
				details: "Chance to apply Miasma Weapon when using a debuff skill.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			DeathsJudgment: 
			{
				name_en: "Death's Judgment",
				name_jp: "死の審判",
				details: "If Miasma Weapon is active, the Reaper has a chance to put an enemy to sleep every time they lose HP.<br>The sleep has a base infliction rate of 100% at all levels.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:3}
			},
			FeebleMiasma: 
			{
				name_en: "Feeble Miasma",
				name_jp: "虚弱の瘴気",
				details: "Increases the chance of inflicting ailments and binds on all enemies for a set amount of turns.",
				dep: {FrailMiasma:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			ScytheofExorcism: 
			{
				name_en: "Scythe of Exorcism",
				name_jp: "呪禁の鎌",
				details: "Deals STR based melee cut damage to one row.<br>If Miasma Weapon is active, has a chance to inflict curse.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {ScytheofNumbStasis:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			}
		},
		specA:
		{
			ScytheMastery: 
			{
				name_en: "Scythe Mastery",
				name_jp: "鎌マスタリー",
				details: "Raises physical attack power when a scythe is equipped.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			MiasmaWeapon: 
			{
				name_en: "Miasma Weapon",
				name_jp: "瘴気の兵装",
				details: "Sacrifices a percentage of the Reaper's maximum (or current?) HP to apply the Miasma Weapon buff to the Reaper for 4 turns, which enables certain skills to have additional effects and increases all action speed (including normal attacks).<br>Has a 30% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			FrailMiasma: 
			{
				name_en: "Frail Miasma",
				name_jp: "繊弱の瘴気",
				details: "Lowers all enemies' physical and elemental attack for a set amount of turns.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			ScytheofNumbStasis: 
			{
				name_en: "Scythe of Numb Stasis",
				name_jp: "痺止の鎌",
				details: "Deals STR based melee cut damage to one row.<br>If Miasma Weapon is active, has a chance to inflict paralysis.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:5}
			},
			GatherSouls: 
			{
				name_en: "Gather Souls",
				name_jp: "魂寄せ",
				details: "Increases the encounter rate and increases the amount of exp gained from battles for a set number of steps.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			PreemptiveWeapon: 
			{
				name_en: "Preemptive Weapon",
				name_jp: "先制兵装",
				details: "Gives a chance to use Miasma Weapon immediately at the start of battle.<br>Does not activate if someone already used this.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:1}
			},
			EndlessShroud: 
			{
				name_en: "Endless Shroud",
				name_jp: "終わりなき衣",
				details: "Chance to apply Miasma Weapon when using a debuff skill.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			DeathsJudgment: 
			{
				name_en: "Death's Judgment",
				name_jp: "死の審判",
				details: "If Miasma Weapon is active, the Reaper has a chance to put an enemy to sleep every time they lose HP.<br>The sleep has a base infliction rate of 100% at all levels.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:3}
			},
			FeebleMiasma: 
			{
				name_en: "Feeble Miasma",
				name_jp: "虚弱の瘴気",
				details: "Increases the chance of inflicting ailments and binds on all enemies for a set amount of turns.",
				dep: {FrailMiasma:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			ScytheofExorcism: 
			{
				name_en: "Scythe of Exorcism",
				name_jp: "呪禁の鎌",
				details: "Deals STR based melee cut damage to one row.<br>If Miasma Weapon is active, has a chance to inflict curse.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {ScytheofNumbStasis:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			BlackBlade: 
			{
				name_en: "Black Blade",
				name_jp: "黒き刃",
				details: "If Miasma Weapon is active, the Reaper's attack power increases every time they inflict an ailment.<br>Lasts until the Reaper dies, or until the battle ends.<br>Affects all damage types.",
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
				details: "Increases the Reaper's maximum TP.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:1}
			},
			FreshBloodSlash: 
			{
				name_en: "Fresh Blood Slash",
				name_jp: "鮮血の斬撃",
				details: "This skill can only be used when Miasma Weapon is active.<br>The Reaper sacrifices a portion of their maximum maximum (or current?) HP to deal 2 to 4 STR based melee cut attacks to random enemies.<br>Has a 50% speed modifier and -10 accuracy modifier at all levels.",
				dep: {DeathsJudgment:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:2.5}
			},
			GreateScytheofColdAsh: 
			{
				name_en: "Great Scythe of Cold Ash",
				name_jp: "冷灰の大鎌",
				details: "Deals STR based melee cut + ice damage to one row.<br>Deals a follow-up attack on enemies that have ailments.<br>The follow-up attack deals double damage.<br>Has a 75% speed modifier and no base accuracy modifier at all levels.",
				dep: {DeathsJudgment:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:3.5}
			},
			ScytheofCruelPoison: 
			{
				name_en: "Scythe of Cruel Poison",
				name_jp: "惨毒の鎌",
				details: "Deals STR based melee cut damage to one row.<br>If the Reaper has Miasma Weapon active, it has a chance to inflict poison.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {ScytheofExorcism:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:4.5}
			},
			ScytheofWickedChaos: 
			{
				name_en: "Scythe of Wicked Chaos",
				name_jp: "禍乱の鎌",
				details: "Deals STR based melee cut damage to one row.<br>If the Reaper has Miasma Weapon active, it has a chance to inflict panic.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {ScytheofExorcism:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:5.5}
			},
			BlackShroud: 
			{
				name_en: "Black Shroud",
				name_jp: "黒き衣",
				details: "If Miasma Weapon is active, the Reaper's defense increases every time they inflict an ailment.<br>Lasts until the Reaper dies, or until the battle ends. Affects all damage types.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:0}
			},
			ConstraintAttackBoost: 
			{
				name_en: "Constraint Attack Boost",
				name_jp: "抑制攻撃ブースト",
				details: "Increases the chance of inflicting ailments and binds.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:1}
			},
			ShroudofReality: 
			{
				name_en: "Shroud of Reality",
				name_jp: "空蝉の衣",
				details: "This skill can only be used when Miasma Weapon is active.<br>Dispels the Miasma Weapon buff from the Reaper and hides them from the battle for the current turn, and puts a scapegoat in their place.<br>If the scapegoat is still alive at the end of the turn, the Reaper will reenter battle and deal STR based melee cut damage to one enemy.<br>If the scapegoat dies, the Reaper reenters the battle immediately without attacking.<br>Has an +50 accuracy modifier at all levels.<br>The initial cast has a variable speed modifier, while the actual attack has a 1% speed modifier at all levels.",
				dep: {FreshBloodSlash:3,GreateScytheofColdAsh:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:3}
			},
			ScytheofDeath: 
			{
				name_en: "Scythe of Death",
				name_jp: "死の鎌",
				details: "Deals STR based melee cut damage to one enemy and has a chance to inflict instant death.<br>If the target is asleep, the damage and instant death chance rises.<br>Has a 20% speed modifier and -10 accuracy modifier at all levels.<br>NOTE: The data does not include the damage multiplier from attacking a sleeping enemy (which is usually 1.5x in the other EO games). Also, it is possible that the damage and success rate multipliers may be flipped.",
				dep: {ScytheofCruelPoison:3,ScytheofWickedChaos:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:5}
			}
		},
		specB:
		{
			ScytheMastery: 
			{
				name_en: "Scythe Mastery",
				name_jp: "鎌マスタリー",
				details: "Raises physical attack power when a scythe is equipped.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			MiasmaWeapon: 
			{
				name_en: "Miasma Weapon",
				name_jp: "瘴気の兵装",
				details: "Sacrifices a percentage of the Reaper's maximum (or current?) HP to apply the Miasma Weapon buff to the Reaper for 4 turns, which enables certain skills to have additional effects and increases all action speed (including normal attacks).<br>Has a 30% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:2}
			},
			FrailMiasma: 
			{
				name_en: "Frail Miasma",
				name_jp: "繊弱の瘴気",
				details: "Lowers all enemies' physical and elemental attack for a set amount of turns.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			ScytheofNumbStasis: 
			{
				name_en: "Scythe of Numb Stasis",
				name_jp: "痺止の鎌",
				details: "Deals STR based melee cut damage to one row.<br>If Miasma Weapon is active, has a chance to inflict paralysis.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:5}
			},
			GatherSouls: 
			{
				name_en: "Gather Souls",
				name_jp: "魂寄せ",
				details: "Increases the encounter rate and increases the amount of exp gained from battles for a set number of steps.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:0}
			},
			PreemptiveWeapon: 
			{
				name_en: "Preemptive Weapon",
				name_jp: "先制兵装",
				details: "Gives a chance to use Miasma Weapon immediately at the start of battle.<br>Does not activate if someone already used this.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:1}
			},
			EndlessShroud: 
			{
				name_en: "Endless Shroud",
				name_jp: "終わりなき衣",
				details: "Chance to apply Miasma Weapon when using a debuff skill.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			DeathsJudgment: 
			{
				name_en: "Death's Judgment",
				name_jp: "死の審判",
				details: "If Miasma Weapon is active, the Reaper has a chance to put an enemy to sleep every time they lose HP.<br>The sleep has a base infliction rate of 100% at all levels.",
				dep: {MiasmaWeapon:2},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:3}
			},
			FeebleMiasma: 
			{
				name_en: "Feeble Miasma",
				name_jp: "虚弱の瘴気",
				details: "Increases the chance of inflicting ailments and binds on all enemies for a set amount of turns.",
				dep: {FrailMiasma:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			ScytheofExorcism: 
			{
				name_en: "Scythe of Exorcism",
				name_jp: "呪禁の鎌",
				details: "Deals STR based melee cut damage to one row.<br>If Miasma Weapon is active, has a chance to inflict curse.<br>Has a 60% speed modifier and no base accuracy modifier at all levels.",
				dep: {ScytheofNumbStasis:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			AbsorbVitality: 
			{
				name_en: "Absorb Vitality",
				name_jp: "生気吸収",
				details: "When the Reaper debuffs an enemy, the reaper is healed.<br>The heal can bring the Reaper's HP above the Reaper's maximum HP pool, but any extra HP will go away at the end of the turn.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:0}
			},
			MagicDefenseBoost: 
			{
				name_en: "Magic Defense Boost",
				name_jp: "魔法防御ブースト",
				details: "Passively increases defense against magic attacks.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:1}
			},
			DeathResistance: 
			{
				name_en: "Death Resistance",
				name_jp: "死の耐性",
				details: "Gives the Reaper a chance to nullify the effects of debuffs and ailments enemies attempt to apply to them.",
				dep: {EndlessShroud:5},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:2}
			},
			BrittleMiasma: 
			{
				name_en: "Brittle Miasma",
				name_jp: "削弱の瘴気",
				details: "Lowers all enemies' physical and elemental defense for a set amount of turns.<br>Has an 85% speed modifier at all levels.",
				dep: {FeebleMiasma:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:3.5}
			},
			DimMiasma: 
			{
				name_en: "Dim Miasma",
				name_jp: "闇弱の瘴気",
				details: "Lowers all enemies' accuracy for a set amount of turns.<br>Has an 85% speed modifier at all levels.",
				dep: {FeebleMiasma:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:4.5}
			},
			HPBoost: 
			{
				name_en: "HP Boost",
				name_jp: "ＨＰブースト",
				details: "Increases the Reaper's maximum HP.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:0}
			},
			BloodofAtonement: 
			{
				name_en: "Blood of Atonement",
				name_jp: "贖いの血",
				details: "This skill can only be used when Miasma Weapon is active.<br>Dispels Miasma Weapon to heal all allies HP, with a chance of dispelling all ailments on the party as well.<br>Has an 85% speed modifier at all levels.",
				dep: {DeathResistance:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:1.5}
			},
			WallofMiasma: 
			{
				name_en: "Wall of Miasma",
				name_jp: "瘴気の防壁",
				details: "This skill can only be used when Miasma Weapon is active.<br>Dispels Miasma Weapon to give all allies a chance to defend against ailments and binds for the current turn.<br>Activates at the start of the turn.",
				dep: {DeathResistance:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:2.5}
			},
			ScytheofTransience: 
			{
				name_en: "Scythe of Transience",
				name_jp: "泡沫の鎌",
				details: "Removes all debuffs from one enemy and attacks them with STR based melee cut attacks.<br>The number of times they attack is equal to the number of debuffs that have been removed (Maximum of 3).<br>Only deals 100% damage if the enemy has no debuffs.<br>The debuffs are purged before dealing damage.<br>Has a 75% speed modifier and cannot miss at all levels.",
				dep: {BrittleMiasma:5,DimMiasma:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:3.5}
			},
			SoulTransfer: 
			{
				name_en: "Soul Transfer",
				name_jp: "魂転移",
				details: "Dispels all debuffs from one enemy, and gives allies a chance to revive if they happen to die on the same turn.<br>Has no effect if there are no debuffs to purge.<br>Activates at the start of the turn.",
				dep: {BrittleMiasma:5,DimMiasma:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:4.5}
			}
		}
	},
	warlock:
	{
		base:
		{
			MagiMastery: 
			{
				name_en: "Magi Mastery",
				name_jp: "マギマスタリー",
				details: "Increases the damage of the Warlock's Magi skills.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			Amplifier: 
			{
				name_en: "Amplifier",
				name_jp: "アンプリファー",
				details: "Increases one row's magic attack for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			Levitation: 
			{
				name_en: "Levitation",
				name_jp: "レビテーション",
				details: "For a set number of steps, negates damage taken from damage tiles, and increases the chance of preemptive attacks.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:6}
			},
			HighSpeedIncantation: 
			{
				name_en: "High Speed Incantation",
				name_jp: "高速詠唱",
				details: "Enables the use of Incantation skills without using a turn, but increases the skill used's TP cost.<br>WARNING: This is a permanent passive, and once learned, it cannot be turned off!",
				dep: {MagiMastery:5},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 5,
				coords: {x:1, y:0}
			},
			Fireball: 
			{
				name_en: "Fireball",
				name_jp: "ファイアボール",
				details: "Deals ranged INT-based fire damage to one enemy, with splash damage.<br>Has a 70% speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:1}
			},
			IcicleLance:
			{
				name_en: "Icicle Lance",
				name_jp: "アイシクルランス",
				details: "Deals ranged INT-based ice damage to one enemy, with piercing effect.<br>Has no speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			Lightning: 
			{
				name_en: "Lighning",
				name_jp: "ライトニング",
				details: "Deals ranged INT-based volt damage to one row of enemies.<br>Has a 130% speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:3}
			},
			MagicShield: 
			{
				name_en: "Magic Shield",
				name_jp: "マジックシールド",
				details: "Reduces magic damage to the party for one turn.<br>Has a 500% speed modifier at all levels.",
				dep: {Amplifier:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			IncantationCompressionForm: 
			{
				name_en: "Incantation: Compression Form",
				name_jp: "詠唱：圧縮術式",
				details: "Next turn, the Warlock's Magi skills will only hit a single target, but their power is increased.<br>Has a 60% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			Invisible: 
			{
				name_en: "Invisible",
				name_jp: "インビジブル",
				details: "Reduces the encounter rate for a set number of steps.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			}
		},
		specA:
		{
			MagiMastery: 
			{
				name_en: "Magi Mastery",
				name_jp: "マギマスタリー",
				details: "Increases the damage of the Warlock's Magi skills.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			Amplifier: 
			{
				name_en: "Amplifier",
				name_jp: "アンプリファー",
				details: "Increases one row's magic attack for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			Levitation: 
			{
				name_en: "Levitation",
				name_jp: "レビテーション",
				details: "For a set number of steps, negates damage taken from damage tiles, and increases the chance of preemptive attacks.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:6}
			},
			HighSpeedIncantation: 
			{
				name_en: "High Speed Incantation",
				name_jp: "高速詠唱",
				details: "Enables the use of Incantation skills without using a turn, but increases the skill used's TP cost.<br>WARNING: This is a permanent passive, and once learned, it cannot be turned off!",
				dep: {MagiMastery:5},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 5,
				coords: {x:1, y:0}
			},
			Fireball: 
			{
				name_en: "Fireball",
				name_jp: "ファイアボール",
				details: "Deals ranged INT-based fire damage to one enemy, with splash damage.<br>Has a 70% speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:1}
			},
			IcicleLance:
			{
				name_en: "Icicle Lance",
				name_jp: "アイシクルランス",
				details: "Deals ranged INT-based ice damage to one enemy, with piercing effect.<br>Has no speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			Lightning: 
			{
				name_en: "Lighning",
				name_jp: "ライトニング",
				details: "Deals ranged INT-based volt damage to one row of enemies.<br>Has a 130% speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:3}
			},
			MagicShield: 
			{
				name_en: "Magic Shield",
				name_jp: "マジックシールド",
				details: "Reduces magic damage to the party for one turn.<br>Has a 500% speed modifier at all levels.",
				dep: {Amplifier:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			IncantationCompressionForm: 
			{
				name_en: "Incantation: Compression Form",
				name_jp: "詠唱：圧縮術式",
				details: "Next turn, the Warlock's Magi skills will only hit a single target, but their power is increased.<br>Has a 60% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			Invisible: 
			{
				name_en: "Invisible",
				name_jp: "インビジブル",
				details: "Reduces the encounter rate for a set number of steps.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			},
			ReserveMagic: 
			{
				name_en: "Reserve Magic",
				name_jp: "リザーブマジック",
				details: "If the Magi skill used on this turn is of a different element from the last one used, it gains the element of the last one used and has its damage increased.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:0}
			},
			Windstorm: 
			{
				name_en: "Windstorm",
				name_jp: "ウィンドストーム",
				details: "Deals ranged INT-based cut damage to all enemies.<br>Attempts to inflict arm bind on hit targets.<br>Has no speed modifier and 130 base accuracy at all levels.",
				dep: {Fireball:3,IcicleLance:3,Lightning:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:1}
			},
			EarthSpike: 
			{
				name_en: "Earth Spike",
				name_jp: "アーススパイク",
				details: "Deals ranged INT-based stab damage to all enemies.<br>Reduces hit targets' magic attack for 3 turns.<br>Has no speed modifier and 130 base accuracy at all levels.",
				dep: {Fireball:3,IcicleLance:3,Lightning:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:2}
			},
			Rockfall: 
			{
				name_en: "Rockfall",
				name_jp: "ロックフォール",
				details: "Deals ranged INT-based bash damage to all enemies.<br>Attempts to stun hit targets.<br>Has a 150% speed modifier and 130 base accuracy.",
				dep: {Fireball:3,IcicleLance:3,Lightning:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:3}
			},
			AntiMagic: 
			{
				name_en: "Anti-Magic",
				name_jp: "アンチマジック",
				details: "Passively gives a chance for the Warlock to nullify magic attacks on their row.",
				dep: {MagicShield:3},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:4}
			},
			IncantationMultistrikeForm: 
			{
				name_en: "Incantation: Multistrike Form",
				name_jp: "詠唱：多段術式",
				details: "On the next turn, Magi skills will become random-target that hits 2-6 times.<br>Each hit is a percentage of the skill's original damage.<br>Can hit the same target multiple times.<br>Has a 60% speed modifier at all levels.",
				dep: {IncantationCompressionForm:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:5}
			},
			MagicDefenseBoost: 
			{
				name_en: "Magic Defense Boost",
				name_jp: "魔法防御ブースト",
				details: "Passively increases defense against magic attacks.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y:6}
			},
			TPBoost: 
			{
				name_en: "TP Boost",
				name_jp: "ＴＰブースト",
				details: "Increases the Warlock's maximum TP.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:0}
			},
			Alter: 
			{
				name_en: "Alter",
				name_jp: "アルター",
				details: "Three turns after casting, deals ranged INT-based bash damage to all enemies.<br>Attempts to inflict petrification on hit targets.<br>Initial cast has a 90% speed modifier.<br>Actual hit has an 80% speed modifier and 200 base accuracy.",
				dep: {Windstorm:5,EarthSpike:5,Rockfall:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y:2}
			},
			LifeDrain: 
			{
				name_en: "Life Drain",
				name_jp: "ライフドレイン",
				details: "When the Warlock hits an enemy's weakness, the Union gauge is increased.",
				dep: {AntiMagic:3},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 5,
				coords: {x:3, y:4}
			}
		},
		specB:
		{
			MagiMastery: 
			{
				name_en: "Magi Mastery",
				name_jp: "マギマスタリー",
				details: "Increases the damage of the Warlock's Magi skills.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:0}
			},
			Amplifier: 
			{
				name_en: "Amplifier",
				name_jp: "アンプリファー",
				details: "Increases one row's magic attack for a set amount of turns.<br>Has an 80% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:4}
			},
			Levitation: 
			{
				name_en: "Levitation",
				name_jp: "レビテーション",
				details: "For a set number of steps, negates damage taken from damage tiles, and increases the chance of preemptive attacks.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y:6}
			},
			HighSpeedIncantation: 
			{
				name_en: "High Speed Incantation",
				name_jp: "高速詠唱",
				details: "Enables the use of Incantation skills without using a turn, but increases the skill used's TP cost.<br>WARNING: This is a permanent passive, and once learned, it cannot be turned off!",
				dep: {MagiMastery:5},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 5,
				coords: {x:1, y:0}
			},
			Fireball: 
			{
				name_en: "Fireball",
				name_jp: "ファイアボール",
				details: "Deals ranged INT-based fire damage to one enemy, with splash damage.<br>Has a 70% speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:1}
			},
			IcicleLance:
			{
				name_en: "Icicle Lance",
				name_jp: "アイシクルランス",
				details: "Deals ranged INT-based ice damage to one enemy, with piercing effect.<br>Has no speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:2}
			},
			Lightning: 
			{
				name_en: "Lighning",
				name_jp: "ライトニング",
				details: "Deals ranged INT-based volt damage to one row of enemies.<br>Has a 130% speed modifier and 130 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:3}
			},
			MagicShield: 
			{
				name_en: "Magic Shield",
				name_jp: "マジックシールド",
				details: "Reduces magic damage to the party for one turn.<br>Has a 500% speed modifier at all levels.",
				dep: {Amplifier:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:4}
			},
			IncantationCompressionForm: 
			{
				name_en: "Incantation: Compression Form",
				name_jp: "詠唱：圧縮術式",
				details: "Next turn, the Warlock's Magi skills will only hit a single target, but their power is increased.<br>Has a 60% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:5}
			},
			Invisible: 
			{
				name_en: "Invisible",
				name_jp: "インビジブル",
				details: "Reduces the encounter rate for a set number of steps.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y:6}
			},
			CommonMagic: 
			{
				name_en: "Common Magic",
				name_jp: "コモンマジック",
				details: "If another party member used an INT-based skill before the Warlock, the Warlock's damage is increased.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			Explode: 
			{
				name_en: "Explode",
				name_jp: "エクスプロード",
				details: "Deals ranged INT-based fire/ice/volt damage to all enemies.<br>Has an 80% speed modifier and 150 base accuracy at all levels.",
				dep: {Fireball:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			IceStream: 
			{
				name_en: "Ice Stream",
				name_jp: "アイスストリーム",
				details: "Deals ranged INT-based fire/ice/volt damage to all enemies.<br>Has an 80% speed modifier and 150 base accuracy at all levels.",
				dep: {IcicleLance:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2}
			},
			ThunderBreak: 
			{
				name_en: "Thunder Break",
				name_jp: "サンダーブレイク",
				details: "Deals ranged INT-based fire/ice/volt damage to all enemies.<br>Has an 80% speed modifier and 150 base accuracy at all levels.",
				dep: {Lightning:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3}
			},
			MagicWeapon: 
			{
				name_en: "Magic Weapon",
				name_jp: "マジックウェポン",
				details: "Deals melee INT-based damage to one target.<br>The element's based on the user's weapon.<br>Has no speed modifier at all levels.",
				dep: {MagicShield:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 4}
			},
			IncantationReductionForm:
			{
				name_en: "Incantation: Reduction Form",
				name_jp: "詠唱：減縮術式",
				details: "On the next turn, Magi skills will have both reduced damage and TP cost.<br>Has a 60% speed modifier at all levels.",
				dep: {IncantationCompressionForm:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5}
			},
			ConstraintDefenseBoost: 
			{
				name_en: "Constraint Defense Boost",
				name_jp: "抑制防御ブースト",
				details: "Increases defense against ailments and binds.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 6}
			},
			MagicAttackBoost: 
			{
				name_en: "Magic Attack Boost",
				name_jp: "魔法攻撃ブースト",
				details: "Passively increases magic damage.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			MagicLeak: 
			{
				name_en: "Magic Leak",
				name_jp: "マジックリーク",
				details: "For a set amount of turns, when using TP, a percentage of the used TP will be restored to one random party member.<br>Has no speed modifier at all levels.",
				dep: {Explode:3,IceStream:3,ThunderBreak:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 1.5}
			},
			CostCut: 
			{
				name_en: "Cost Cut",
				name_jp: "コストカット",
				details: "Gives a chance to not expend TP when using a skill.",
				dep: {Explode:3,IceStream:3,ThunderBreak:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 2.5}
			}
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