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
				details: "Deals ranged bash damage to all enemies.<br>Reduces hit targets' physical attack for a set amount of turns.<br>Has an 80% speed modifier and no base accuracy modifier at all levels.",
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
				details: "Deals ranged bash damage to all enemies.<br>Reduces hit targets' physical attack for a set amount of turns.<br>Has an 80% speed modifier and no base accuracy modifier at all levels.",
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
				details: "Deals ranged bash damage to all enemies.<br>Reduces hit targets' physical attack for a set amount of turns.<br>Has an 80% speed modifier and no base accuracy modifier at all levels.",
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
				details: "Raises ailment and bind resistance for allies in the same row as the Cestus for a set number of turns (This buff may follow EO4's Dancer buff rules).<br>Has a speed modifier of 70% at all levels.",
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
			GhostMastery: 
			{
				name_en: "Ghost Mastery",
				name_jp: "死霊マスタリー",
				details: "Increases ghost damage and disable infliction chance.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			GhostSummoning: 
			{
				name_en: "Ghost Summoning",
				name_jp: "死霊召喚",
				details: "Consumes 15% of the Necromancer's (most likely current) HP to summon a ghost with a static HP bonus.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			MoaningSpirits: 
			{
				name_en: "Moaning Spirits",
				name_jp: "死霊の呻き",
				details: "Destroys one ghost. Reduces all enemies' physical/magical defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			SoulFood: 
			{
				name_en: "Soul Food",
				name_jp: "魂の糧",
				details: "Destroys one ghost. Increases all allies' magical defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			GravekeepingKnowledge: 
			{
				name_en: "Gravekeeping Knowledge",
				name_jp: "墓守の心得",
				details: "Chance to summon a ghost when the Necromancer hasn't taken damage for one turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			ThePriceofLife: 
			{
				name_en: "The Price of Life",
				name_jp: "生の代償",
				details: "Destroys one ghost. Restores all party members' HP.<br>Has an 80% speed modifier.",
				dep: {GhostSummoning:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			MercilessWall: 
			{
				name_en: "Merciless Wall",
				name_jp: "無慈悲な盾",
				details: "Targets one ghost. That ghost will take damage for the entire party for one turn.",
				dep: {MoaningSpirits:2,SoulFood:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2.5}
			},
			GhostReincarnation: 
			{
				name_en: "Ghost Reincarnation",
				name_jp: "死霊転生",
				details: "Gives a chance to summon a ghost whenever a ghost is destroyed in battle.<br>NOTE ABOUT GHOST SUMMON CHANCES: Internally, ghost summon chances are represented as three-digit numbers, ie. Ghost Reincarnation's lv1 value is 150 internally. While it is likely that these numbers are plugged into some unknown function, for the sake of simplicity, I will just divide internal numbers by 10, as that gives numbers that seem sensible for chances.",
				dep: {GravekeepingKnowledge:3},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			PoisonBomb: 
			{
				name_en: "Poison Bomb",
				name_jp: "毒爆弾",
				details: "Destroys one ghost. Attempts to inflict poison on all enemies.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			FireBomb: 
			{
				name_en: "Fire Bomb",
				name_jp: "炎爆弾",
				details: "Destroys one ghost. Deals ranged fire damage to all enemies.<br>Has no speed modifier at all levels and 150 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 6}
			}
		},
		specA:
		{
			GhostMastery: 
			{
				name_en: "Ghost Mastery",
				name_jp: "死霊マスタリー",
				details: "Increases ghost damage and disable infliction chance.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			GhostSummoning: 
			{
				name_en: "Ghost Summoning",
				name_jp: "死霊召喚",
				details: "Consumes 15% of the Necromancer's (most likely current) HP to summon a ghost with a static HP bonus.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			MoaningSpirits: 
			{
				name_en: "Moaning Spirits",
				name_jp: "死霊の呻き",
				details: "Destroys one ghost. Reduces all enemies' physical/magical defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			SoulFood: 
			{
				name_en: "Soul Food",
				name_jp: "魂の糧",
				details: "Destroys one ghost. Increases all allies' magical defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			GravekeepingKnowledge: 
			{
				name_en: "Gravekeeping Knowledge",
				name_jp: "墓守の心得",
				details: "Chance to summon a ghost when the Necromancer hasn't taken damage for one turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			ThePriceofLife: 
			{
				name_en: "The Price of Life",
				name_jp: "生の代償",
				details: "Destroys one ghost. Restores all party members' HP.<br>Has an 80% speed modifier.",
				dep: {GhostSummoning:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			MercilessWall: 
			{
				name_en: "Merciless Wall",
				name_jp: "無慈悲な盾",
				details: "Targets one ghost. That ghost will take damage for the entire party for one turn.",
				dep: {MoaningSpirits:2,SoulFood:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2.5}
			},
			GhostReincarnation: 
			{
				name_en: "Ghost Reincarnation",
				name_jp: "死霊転生",
				details: "Gives a chance to summon a ghost whenever a ghost is destroyed in battle.<br>NOTE ABOUT GHOST SUMMON CHANCES: Internally, ghost summon chances are represented as three-digit numbers, ie. Ghost Reincarnation's lv1 value is 150 internally. While it is likely that these numbers are plugged into some unknown function, for the sake of simplicity, I will just divide internal numbers by 10, as that gives numbers that seem sensible for chances.",
				dep: {GravekeepingKnowledge:3},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			PoisonBomb: 
			{
				name_en: "Poison Bomb",
				name_jp: "毒爆弾",
				details: "Destroys one ghost. Attempts to inflict poison on all enemies.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			FireBomb: 
			{
				name_en: "Fire Bomb",
				name_jp: "炎爆弾",
				details: "Destroys one ghost. Deals ranged fire damage to all enemies.<br>Has no speed modifier at all levels and 150 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 6}
			},
			GhostSecretArts: 
			{
				name_en: "Ghost Secret Arts",
				name_jp: "死霊の秘術",
				details: "Gives a chance to summon a ghost when any party members, dogs, hawks, or enemies die.<br>Does not activate on Bunkers, Pillboxes, or other ghosts.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			CurseTransfer: 
			{
				name_en: "Curse Transfer",
				name_jp: "呪詛移し",
				details: "If a ghost is alive when the Necromancer takes fatal damage, there is a chance that both the ghost will be destroyed and the Necromancer will survive and have some HP restored.",
				dep: {ThePriceofLife:5},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			OpenGrave: 
			{
				name_en: "Open Grave",
				name_jp: "墓穴",
				details: "For one turn, ghosts will counterattack any enemy that hits a selected ally.<brr>The chance to counter starts at 100%, and is decreased by 9% for every counter.<br>Counterattacks attempt to inflict paralysis.<br/>Has a 300% speed modifier at all levels.<br>Counterattacks have 120 base accuracy.",
				dep: {MercilessWall:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2.5}
			},
			ConstraintAttackBoost: 
			{
				name_en: "Constraint Attack Boost",
				name_jp: "抑制攻撃ブースト",
				details: ">Increases the chance of inflicting ailments and binds.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3.5}
			},
			CurseBomb: 
			{
				name_en: "Curse Bomb",
				name_jp: "呪い爆弾",
				details: "Destroys one ghost.<br>Attempts to inflict curse on all enemies.<br/>Has no speed modifier at all levels.",
				dep: {PoisonBomb:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5}
			},
			IceBomb: 
			{
				name_en: "Ice Bomb",
				name_jp: "氷爆弾",
				details: "Destroys one ghost.<br>Deals ranged ice damage to all enemies.<br/>Has no speed modifier and 150 base accuracy at all levels.",
				dep: {FireBomb:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 6}
			},
			HPBoost: 
			{
				name_en: "HP Boost",
				name_jp: "ＨＰブースト",
				details: "Increases the Necromancer's maximum HP.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			SoulTrade: 
			{
				name_en: "Soul Trade",
				name_jp: "ソウルトレード",
				details: "Destroys one ghost.<br>Attempts to revive all dead party members.<br>Revived party members will be healed.<br/>Has no speed modifier at all levels.",
				dep: {CurseTransfer:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 1}
			},
			GhostDance: 
			{
				name_en: "Ghost Dance",
				name_jp: "死霊乱舞",
				details: "On the turn used, all ghosts will attack three times, with damage modifiers.",
				dep: {OpenGrave:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 2.5}
			},
			GravestoneBinding: 
			{
				name_en: "Gravestone Binding",
				name_jp: "石塔絞り",
				details: "Destroys all ghosts.<br>Attempts to petrify one enemy.<br>The petrification chance is increased based on the number of ghosts destroyed.<br/>Has no speed modifier at all levels.",
				dep: {CurseBomb:3,FireBomb:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5.5}
			}
		},
		specB:
		{
			GhostMastery: 
			{
				name_en: "Ghost Mastery",
				name_jp: "死霊マスタリー",
				details: "Increases ghost damage and disable infliction chance.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			GhostSummoning: 
			{
				name_en: "Ghost Summoning",
				name_jp: "死霊召喚",
				details: "Consumes 15% of the Necromancer's (most likely current) HP to summon a ghost with a static HP bonus.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			MoaningSpirits: 
			{
				name_en: "Moaning Spirits",
				name_jp: "死霊の呻き",
				details: "Destroys one ghost. Reduces all enemies' physical/magical defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			SoulFood: 
			{
				name_en: "Soul Food",
				name_jp: "魂の糧",
				details: "Destroys one ghost. Increases all allies' magical defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			GravekeepingKnowledge: 
			{
				name_en: "Gravekeeping Knowledge",
				name_jp: "墓守の心得",
				details: "Chance to summon a ghost when the Necromancer hasn't taken damage for one turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			ThePriceofLife: 
			{
				name_en: "The Price of Life",
				name_jp: "生の代償",
				details: "Destroys one ghost. Restores all party members' HP.<br>Has an 80% speed modifier.",
				dep: {GhostSummoning:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			MercilessWall: 
			{
				name_en: "Merciless Wall",
				name_jp: "無慈悲な盾",
				details: "Targets one ghost. That ghost will take damage for the entire party for one turn.",
				dep: {MoaningSpirits:2,SoulFood:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2.5}
			},
			GhostReincarnation: 
			{
				name_en: "Ghost Reincarnation",
				name_jp: "死霊転生",
				details: "Gives a chance to summon a ghost whenever a ghost is destroyed in battle.<br>NOTE ABOUT GHOST SUMMON CHANCES: Internally, ghost summon chances are represented as three-digit numbers, ie. Ghost Reincarnation's lv1 value is 150 internally. While it is likely that these numbers are plugged into some unknown function, for the sake of simplicity, I will just divide internal numbers by 10, as that gives numbers that seem sensible for chances.",
				dep: {GravekeepingKnowledge:3},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			PoisonBomb: 
			{
				name_en: "Poison Bomb",
				name_jp: "毒爆弾",
				details: "Destroys one ghost. Attempts to inflict poison on all enemies.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			FireBomb: 
			{
				name_en: "Fire Bomb",
				name_jp: "炎爆弾",
				details: "Destroys one ghost. Deals ranged fire damage to all enemies.<br>Has no speed modifier at all levels and 150 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 6}
			},
			TheBeckoningofHades: 
			{
				name_en: "The Beckoning of Hades",
				name_jp: "黄泉の手招き",
				details: "Gives a chance to summon a ghost at the end of a turn if the Necromancer's HP is below a certain threshold.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			PreemptiveGhostSummoning: 
			{
				name_en: "Preemptive Ghost Summoning",
				name_jp: "先制死霊召喚",
				details: "Gives a chance to use Ghost Summoning at the start of battle.",
				dep: {ThePriceofLife:3},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			EquivalentExchange: 
			{
				name_en: "Equivalent Exchange",
				name_jp: "等価交換",
				details: "Destroys one ghost.<br>Deals a percentage of the HP it had before dying to one enemy.<br/>Has an 80% speed modifier and 150 base accuracy at all levels.",
				dep: {MercilessWall:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2.5}
			},
			Sacrifice: 
			{
				name_en: "Sacrifice",
				name_jp: "生贄",
				details: "Destroys one ghost.<br>Increases the Necromancer's damage until the end of the next turn.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3.5}
			},
			MagicAttackBoost: 
			{
				name_en: "Magic Attack Boost",
				name_jp: "魔法攻撃ブースト",
				details: "Passively increases magic damage.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 4.5}
			},
			TheGatesofHell: 
			{
				name_en: "The Gates of Hell",
				name_jp: "地獄門",
				details: "Deals ranged bash damage to one enemy.<br>Summons a ghost with HP equal to damage dealt.<br/>Has an 80% speed modifier and 150 base accuracy at all levels.",
				dep: {PoisonBomb:5,FireBomb:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5.5}
			},
			TPBoost: 
			{
				name_en: "TP Boost",
				name_jp: "ＴＰブースト",
				details: "Increases the Necromancer's maximum TP.",
				dep: {},
				active: false,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			GhostExplosion: 
			{
				name_en: "Ghost Explosion",
				name_jp: "死霊大爆発",
				details: "Destroys all ghosts.<br>Deals ranged bash+fire damage to all enemies. Damage is based on the number of ghosts destroyed.<br/>Has no speed modifier and 150 base accuracy at all levels.",
				dep: {EquivalentExchange:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 2.5}
			},
			NegativeEnergy: 
			{
				name_en: "Negative Energy",
				name_jp: "負の力",
				details: "Deals ranged almighty damage to one enemy.<br>The damage has 150% added to it for every party member killed, enemy killed, and ghost killed before use.<br>There is no cap on how many times Negative Energy can have its damage increased.<br/>Has a -100% speed modifier.<br>Does not check for accuracy.",
				dep: {Sacrifice:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 3.5}
			},
			ZombiePowder: 
			{
				name_en: "Zombie Powder",
				name_jp: "ゾンビパウダー",
				details: "Attempts to instantly kill one enemy.<br>If the instant death is successful, summons one ghost.<br/>Has a 50% speed modifier at all levels.",
				dep: {TheGatesofHell:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5.5}
			}
		}
	},
	hound:
	{
		base:
		{
			BowMastery: 
			{
				name_en: "Bow Mastery",
				name_jp: "弓マスタリー",
				details: "Increases damage dealt with bows.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			HawkWhistle: 
			{
				name_en: "Hawk Whistle",
				name_jp: "鷹笛",
				details: "Summons a Hawk. The Hawk's base stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a level-dependent factor.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1.5}
			},
			DogWhistle: 
			{
				name_en: "Dog Whistle",
				name_jp: "犬笛",
				details: "Summons a Hound. The Hound's base stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a level-dependent factor.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3.5}
			},
			Brushing: 
			{
				name_en: "Brushing",
				name_jp: "ブラッシング",
				details: "Restores the Hound or Hawk's HP at the end of every turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			AnimalTherapy: 
			{
				name_en: "Animal Therapy",
				name_jp: "獣の癒し",
				details: "When a Hound/Hawk is present, recovers HP to all allies at the end of a turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 0}
			},
			HawkArrow: 
			{
				name_en: "Hawk Arrow",
				name_jp: "ホークアロー",
				details: "Deals ranged stab damage to one enemy.<br>After that, the Hawk will target the enemies adjacent to the target with a ranged cut attack.<br>Has a 75% speed modifier and no base accuracy modifier at all levels.<br>The hawk's attack has 99 base accuracy.",
				dep: {HawkWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			FlashofBothWings: 
			{
				name_en: "Flash of Both Wings",
				name_jp: "双翼閃",
				details: "Deals ranged stab damage to one enemy.<br>After that, the Hawk will attack the target's row with a ranged cut attack.<br>Has a 200% speed modifier and no base accuracy modifier at all levels.<br>The hawk's attack has 99 base accuracy.",
				dep: {HawkWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			AidCommand: 
			{
				name_en: "Aid Command",
				name_jp: "救護指示",
				details: "Commands the Hound to heal one ally.<br>The heal is a static amount plus a percentage of the target's max HP.<br>The command has an 85% speed modifier, the heal has no speed modifier.",
				dep: {DogWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			HunterShot: 
			{
				name_en: "Hunter Shot",
				name_jp: "ハンターショット",
				details: "Deals ranged stab damage to one target.<br>After using Hunter Shot, the Hound will perform a follow-up attack, which has a chance of inflicting arm and leg bind.<br>Hunter Shot itself has a 75% speed modifier and no base accuracy modifier.",
				dep: {DogWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			TargetArrow: 
			{
				name_en: "Target Arrow",
				name_jp: "ターゲットアロー",
				details: "Deals ranged stab damage to one target.<br>Lowers the target's physical defense for a set amount of turns.<br>The Hound's active Hound or Hawk will target the enemy that has the Target Arrow debuff while it's active.<br>Has no speed modifier and +20 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			}
		},
		specA:
		{
			BowMastery: 
			{
				name_en: "Bow Mastery",
				name_jp: "弓マスタリー",
				details: "Increases damage dealt with bows.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			HawkWhistle: 
			{
				name_en: "Hawk Whistle",
				name_jp: "鷹笛",
				details: "Summons a Hawk. The Hawk's base stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a level-dependent factor.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1.5}
			},
			DogWhistle: 
			{
				name_en: "Dog Whistle",
				name_jp: "犬笛",
				details: "Summons a Hound. The Hound's base stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a level-dependent factor.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3.5}
			},
			Brushing: 
			{
				name_en: "Brushing",
				name_jp: "ブラッシング",
				details: "Restores the Hound or Hawk's HP at the end of every turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			AnimalTherapy: 
			{
				name_en: "Animal Therapy",
				name_jp: "獣の癒し",
				details: "When a Hound/Hawk is present, recovers HP to all allies at the end of a turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 0}
			},
			HawkArrow: 
			{
				name_en: "Hawk Arrow",
				name_jp: "ホークアロー",
				details: "Deals ranged stab damage to one enemy.<br>After that, the Hawk will target the enemies adjacent to the target with a ranged cut attack.<br>Has a 75% speed modifier and no base accuracy modifier at all levels.<br>The hawk's attack has 99 base accuracy.",
				dep: {HawkWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			FlashofBothWings: 
			{
				name_en: "Flash of Both Wings",
				name_jp: "双翼閃",
				details: "Deals ranged stab damage to one enemy.<br>After that, the Hawk will attack the target's row with a ranged cut attack.<br>Has a 200% speed modifier and no base accuracy modifier at all levels.<br>The hawk's attack has 99 base accuracy.",
				dep: {HawkWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			AidCommand: 
			{
				name_en: "Aid Command",
				name_jp: "救護指示",
				details: "Commands the Hound to heal one ally.<br>The heal is a static amount plus a percentage of the target's max HP.<br>The command has an 85% speed modifier, the heal has no speed modifier.",
				dep: {DogWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			HunterShot: 
			{
				name_en: "Hunter Shot",
				name_jp: "ハンターショット",
				details: "Deals ranged stab damage to one target.<br>After using Hunter Shot, the Hound will perform a follow-up attack, which has a chance of inflicting arm and leg bind.<br>Hunter Shot itself has a 75% speed modifier and no base accuracy modifier.",
				dep: {DogWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			TargetArrow: 
			{
				name_en: "Target Arrow",
				name_jp: "ターゲットアロー",
				details: "Deals ranged stab damage to one target.<br>Lowers the target's physical defense for a set amount of turns.<br>The Hound's active Hound or Hawk will target the enemy that has the Target Arrow debuff while it's active.<br>Has no speed modifier and +20 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			SkyPatrol: 
			{
				name_en: "Sky Patrol",
				name_jp: "高度巡回",
				details: "When a Hawk is summoned, while walking in the field, there's an unknown chance of finding food.<br>The data block for this skill is completely empty -- specific numbers cannot be found.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			FlyingTalonStrike: 
			{
				name_en: "Flying Talon Strike",
				name_jp: "飛来爪撃",
				details: "Commands the Hawk to attack one target with a ranged cut attack.<br>Attempts to inflict head bind on the target.<br/>Has no speed modifier at all levels.<br>The Hawk's attack has 120 base accuracy.",
				dep: {HawkArrow:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			IcePeck: 
			{
				name_en: "Ice Peck",
				name_jp: "氷嘴撃",
				details: "Deals ranged stab damage to all enemies.<br>After that, the Hawk will attack all enemies with ranged ice damage.<br/>Has a 70% speed modifier and -10 base accuracy at all levels.<br>The hawk attack has 95 base accuracy.",
				dep: {FlashofBothWings:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2}
			},
			PhysicalAttackBoost: 
			{
				name_en: "Physical Attack Boost",
				name_jp: "物理攻撃ブースト",
				details: "Passively increases cut/stab/bash damage.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3}
			},
			SpeedBoost: 
			{
				name_en: "Speed Boost",
				name_jp: "素早さブースト",
				details: "Increases speed, evasion, and accuracy.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 4}
			},
			PowerShot: 
			{
				name_en: "Power Shot",
				name_jp: "パワーショット",
				details: "Deals ranged stab damage to one enemy in the front row, and one in the back row.<br/>Has a 90% speed modifier and no base accuracy modifier at all levels.",
				dep: {TargetArrow:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5}
			},
			ScatterFeathers: 
			{
				name_en: "Scatter Feathers",
				name_jp: "舞い散る羽",
				details: "Commands the Hawk to attempt to inflict blind on one row of enemies.<br/>Has a 120% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 6}
			},
			FinishingArrow: 
			{
				name_en: "Finishing Arrow",
				name_jp: "仕留めの一矢",
				details: "When an enemy's HP falls below a certain HP threshold, the Hound will attack with their equipped weapon.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			SkyDive: 
			{
				name_en: "Sky Dive",
				name_jp: "スカイダイブ",
				details: "Commands the Hawk to, three turns later, deal ranged cut damage to one target.<br>Attempts to inflict head bind on the target.<br>While the Hawk is in the air, other Hawk skills cannot be used.<br/>Both the initial command and actual hit have no speed modifier.<br>The actual hit has 130 base accuracy.",
				dep: {FlyingTalonStrike:5,IcePeck:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 1.5}
			},
			MillionShot: 
			{
				name_en: "Million Shot",
				name_jp: "ミリオンショット",
				details: "On the turn after casting, deals multiple, very inaccurate, instances of ranged stab damage to random enemies.<br>Can hit the same target 4 times at most.<br/>Has no speed modifier and -50 base accuracy at all levels.",
				dep: {PowerShot:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5}
			}
		},
		specB:
		{
			BowMastery: 
			{
				name_en: "Bow Mastery",
				name_jp: "弓マスタリー",
				details: "Increases damage dealt with bows.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			HawkWhistle: 
			{
				name_en: "Hawk Whistle",
				name_jp: "鷹笛",
				details: "Summons a Hawk. The Hawk's base stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a level-dependent factor.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1.5}
			},
			DogWhistle: 
			{
				name_en: "Dog Whistle",
				name_jp: "犬笛",
				details: "Summons a Hound. The Hound's base stats (HP, STR, INT, VIT, WIS, AGI, LUC) are multiplied by a level-dependent factor.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3.5}
			},
			Brushing: 
			{
				name_en: "Brushing",
				name_jp: "ブラッシング",
				details: "Restores the Hound or Hawk's HP at the end of every turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			AnimalTherapy: 
			{
				name_en: "Animal Therapy",
				name_jp: "獣の癒し",
				details: "When a Hound/Hawk is present, recovers HP to all allies at the end of a turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 0}
			},
			HawkArrow: 
			{
				name_en: "Hawk Arrow",
				name_jp: "ホークアロー",
				details: "Deals ranged stab damage to one enemy.<br>After that, the Hawk will target the enemies adjacent to the target with a ranged cut attack.<br>Has a 75% speed modifier and no base accuracy modifier at all levels.<br>The hawk's attack has 99 base accuracy.",
				dep: {HawkWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			FlashofBothWings: 
			{
				name_en: "Flash of Both Wings",
				name_jp: "双翼閃",
				details: "Deals ranged stab damage to one enemy.<br>After that, the Hawk will attack the target's row with a ranged cut attack.<br>Has a 200% speed modifier and no base accuracy modifier at all levels.<br>The hawk's attack has 99 base accuracy.",
				dep: {HawkWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			AidCommand: 
			{
				name_en: "Aid Command",
				name_jp: "救護指示",
				details: "Commands the Hound to heal one ally.<br>The heal is a static amount plus a percentage of the target's max HP.<br>The command has an 85% speed modifier, the heal has no speed modifier.",
				dep: {DogWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			HunterShot: 
			{
				name_en: "Hunter Shot",
				name_jp: "ハンターショット",
				details: "Deals ranged stab damage to one target.<br>After using Hunter Shot, the Hound will perform a follow-up attack, which has a chance of inflicting arm and leg bind.<br>Hunter Shot itself has a 75% speed modifier and no base accuracy modifier.",
				dep: {DogWhistle:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			TargetArrow: 
			{
				name_en: "Target Arrow",
				name_jp: "ターゲットアロー",
				details: "Deals ranged stab damage to one target.<br>Lowers the target's physical defense for a set amount of turns.<br>The Hound's active Hound or Hawk will target the enemy that has the Target Arrow debuff while it's active.<br>Has no speed modifier and +20 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			GroundPatrol: 
			{
				name_en: "Ground Patrol",
				name_jp: "地表巡回",
				details: "When a Hound is summoned, while walking in the field, there's an unknown chance of finding materials.<br>The data block for this skill is completely empty -- specific numbers cannot be found.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			ConstraintAttackBoost: 
			{
				name_en: "Constraint Attack Boost",
				name_jp: "抑制攻撃ブースト",
				details: "Increases the chance of inflicting ailments and binds.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			MenacingHowl: 
			{
				name_en: "Menacing Howl",
				name_jp: "威嚇の咆哮",
				details: "Commands the summoned Hound to attempt to inflict panic on all enemies.<br/>Has a 75% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2}
			},
			DefenseCommand: 
			{
				name_en: "Defense Command",
				name_jp: "防衛指示",
				details: "Commands the summoned Hound to take all damage for one party member. At the end of the turn, the target's HP is restored.",
				dep: {AidCommand:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3}
			},
			FootPierce: 
			{
				name_en: "Foot Pierce",
				name_jp: "足甲貫き",
				details: "Deals ranged stab damage to one row.<br>Attempts to inflict leg bind on hit targets.<br>After that, the summoned Hound will deal melee bash damage to any enemies that are afflicted with leg binds.<br/>Has no speed modifier and no base accuracy modifier at all levels. The summoned Hound's follow-up attack has 99 base accuracy.",
				dep: {HunterShot:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 4}
			},
			DropShot: 
			{
				name_en: "Drop Shot",
				name_jp: "ドロップショット",
				details: "Deals increased damage (2.5 multiplier?) to targets in the back row.<br/>Has no speed modifier and no base accuracy modifier at all levels.",
				dep: {TargetArrow:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5}
			},
			HealingBoost: 
			{
				name_en: "Healing Boost",
				name_jp: "回復ブースト",
				details: "Increases the amount of static healing and % max HP healing from Hounds.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			TPBoost: 
			{
				name_en: "TP Boost",
				name_jp: "ＴＰブースト",
				details: "Increases the Hound's maximum TP.",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 1}
			},
			MedicalLick: 
			{
				name_en: "Medical Lick",
				name_jp: "メディカルリック",
				details: "The summoned Hound will heal random party members.<br>Each party member can be healed a maximum of 2 times.<br/>Has a 50% speed modifier.",
				dep: {DefenseCommand:5,FootPierce:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 3.5}
			},
			StunShot: 
			{
				name_en: "Stun Shot",
				name_jp: "スタンショット",
				details: "Deals ranged stab damage to one target.<br>After that, the summoned Hound will attempt to stun the target.<br/>Has a 200% speed modifier and no base accuracy modifier at all levels.",
				dep: {DropShot:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5}
			}
		}
	},
	masurao:
	{
		base:
		{
			KatanaMastery: 
			{
				name_en: "Katana Mastery",
				name_jp: "刀マスタリー",
				details: "Increases damage dealt with katanas.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			PeerlessDemon: 
			{
				name_en: "Peerless Demon",
				name_jp: "鬼無双",
				details: "Increases damage dealt based on how many hits the attack has.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			TotheDeath: 
			{
				name_en: "To the Death",
				name_jp: "果し合い",
				details: "Increases the Masauro's damage when hitting the same target as last turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			ArmorPenetrate: 
			{
				name_en: "Armor Penetrate",
				name_jp: "鎧通し",
				details: "Deals melee stab damage to one enemy.<br>Reduces the target's physical defense for 4 turns.<br>Has a 75% speed modifier and +5 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			VacuumBlade: 
			{
				name_en: "Vacuum Blade",
				name_jp: "空刃",
				details: "Deals ranged cut damage to one enemy.<br>Has no speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			NewChallenger: 
			{
				name_en: "New Challenger",
				name_jp: "新たな強敵",
				details: "Immediately begins a battle.<br>Increases the chance of encountering rare breeds.<br>Upon ending one battle, there is an unknown chance of fighting a consecutive one.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			FlyingSparrow: 
			{
				name_en: "Flying Sparrow",
				name_jp: "飛燕",
				details: "Deals melee cut damage to one enemy.<br>After the enemy has taken their action, hits again.<br>Has a 500% speed modifier and +10 base accuracy at all levels.",
				dep: {TotheDeath:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			MistSlice: 
			{
				name_en: "Mist Slice",
				name_jp: "霞斬り",
				details: "Deals melee cut damage to one enemy.<br>Attempts to inflict sleep on the target.<br>Has no base accuracy modifier at all levels.",
				dep: {ArmorPenetrate:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			Kamaitachi: 
			{
				name_en: "Kamaitachi",
				name_jp: "鎌鼬",
				details: "Deals several instances of melee cut damage to random targets.<br>Can hit the same target once at most.<br>Has an 85% speed modifier and no base accuracy modifier at all levels.",
				dep: {VacuumBlade:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			AdvantageousPosition: 
			{
				name_en: "Advantageous Position",
				name_jp: "地の利",
				details: "Increases the Masauro and allies in their same row's physical attack for a set amount of turns.<br>Has a 60% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			}
		},
		specA:
		{
			KatanaMastery: 
			{
				name_en: "Katana Mastery",
				name_jp: "刀マスタリー",
				details: "Increases damage dealt with katanas.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			PeerlessDemon: 
			{
				name_en: "Peerless Demon",
				name_jp: "鬼無双",
				details: "Increases damage dealt based on how many hits the attack has.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			TotheDeath: 
			{
				name_en: "To the Death",
				name_jp: "果し合い",
				details: "Increases the Masauro's damage when hitting the same target as last turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			ArmorPenetrate: 
			{
				name_en: "Armor Penetrate",
				name_jp: "鎧通し",
				details: "Deals melee stab damage to one enemy.<br>Reduces the target's physical defense for 4 turns.<br>Has a 75% speed modifier and +5 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			VacuumBlade: 
			{
				name_en: "Vacuum Blade",
				name_jp: "空刃",
				details: "Deals ranged cut damage to one enemy.<br>Has no speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			NewChallenger: 
			{
				name_en: "New Challenger",
				name_jp: "新たな強敵",
				details: "Immediately begins a battle.<br>Increases the chance of encountering rare breeds.<br>Upon ending one battle, there is an unknown chance of fighting a consecutive one.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			FlyingSparrow: 
			{
				name_en: "Flying Sparrow",
				name_jp: "飛燕",
				details: "Deals melee cut damage to one enemy.<br>After the enemy has taken their action, hits again.<br>Has a 500% speed modifier and +10 base accuracy at all levels.",
				dep: {TotheDeath:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			MistSlice: 
			{
				name_en: "Mist Slice",
				name_jp: "霞斬り",
				details: "Deals melee cut damage to one enemy.<br>Attempts to inflict sleep on the target.<br>Has no base accuracy modifier at all levels.",
				dep: {ArmorPenetrate:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			Kamaitachi: 
			{
				name_en: "Kamaitachi",
				name_jp: "鎌鼬",
				details: "Deals several instances of melee cut damage to random targets.<br>Can hit the same target once at most.<br>Has an 85% speed modifier and no base accuracy modifier at all levels.",
				dep: {VacuumBlade:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			AdvantageousPosition: 
			{
				name_en: "Advantageous Position",
				name_jp: "地の利",
				details: "Increases the Masauro and allies in their same row's physical attack for a set amount of turns.<br>Has a 60% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			MultiSwordTechnique: 
			{
				name_en: "Multi-Sword Technique",
				name_jp: "多刀術",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			HPBoost: 
			{
				name_en: "HP Boost",
				name_jp: "ＨＰブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			CrossingtheSanzu: 
			{
				name_en: "Crossing the Sanzu",
				name_jp: "三途渡し",
				details: "",
				dep: {FlyingSparrow:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2}
			},
			FourGods: 
			{
				name_en: "Four Gods",
				name_jp: "四神",
				details: "",
				dep: {Kamaitachi:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3.5}
			},
			LayeredBlossoms: 
			{
				name_en: "Layered Blossoms",
				name_jp: "八重の華",
				details: "",
				dep: {Kamaitachi:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 4.5}
			},
			PhysicalAttackBoost: 
			{
				name_en: "Physical Attack Boost",
				name_jp: "物理攻撃ブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5.5}
			},
			BrinkofDeathResuscitation: 
			{
				name_en: "Brink of Death Resuscitation",
				name_jp: "仮死再生",
				details: "",
				dep: {HPBoost:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 1}
			},
			Reflower: 
			{
				name_en: "Reflower",
				name_jp: "返り咲き",
				details: "",
				dep: {CrossingtheSanzu:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 2}
			},
			Hyakkaryouran: 
			{
				name_en: "Hyakkaryouran",
				name_jp: "百華繚乱",
				details: "",
				dep: {FourGods:3,LayeredBlossoms:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 4}
			},
			Tenryuuransei: 
			{
				name_en: "Tenryuuransei",
				name_jp: "天流乱星",
				details: "",
				dep: {PhysicalAttackBoost:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5.5}
			}
		},
		specB:
		{
			KatanaMastery: 
			{
				name_en: "Katana Mastery",
				name_jp: "刀マスタリー",
				details: "Increases damage dealt with katanas.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			PeerlessDemon: 
			{
				name_en: "Peerless Demon",
				name_jp: "鬼無双",
				details: "Increases damage dealt based on how many hits the attack has.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			TotheDeath: 
			{
				name_en: "To the Death",
				name_jp: "果し合い",
				details: "Increases the Masauro's damage when hitting the same target as last turn.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			ArmorPenetrate: 
			{
				name_en: "Armor Penetrate",
				name_jp: "鎧通し",
				details: "Deals melee stab damage to one enemy.<br>Reduces the target's physical defense for 4 turns.<br>Has a 75% speed modifier and +5 base accuracy at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			VacuumBlade: 
			{
				name_en: "Vacuum Blade",
				name_jp: "空刃",
				details: "Deals ranged cut damage to one enemy.<br>Has no speed modifier and no base accuracy modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			NewChallenger: 
			{
				name_en: "New Challenger",
				name_jp: "新たな強敵",
				details: "Immediately begins a battle.<br>Increases the chance of encountering rare breeds.<br>Upon ending one battle, there is an unknown chance of fighting a consecutive one.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			FlyingSparrow: 
			{
				name_en: "Flying Sparrow",
				name_jp: "飛燕",
				details: "Deals melee cut damage to one enemy.<br>After the enemy has taken their action, hits again.<br>Has a 500% speed modifier and +10 base accuracy at all levels.",
				dep: {TotheDeath:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			MistSlice: 
			{
				name_en: "Mist Slice",
				name_jp: "霞斬り",
				details: "Deals melee cut damage to one enemy.<br>Attempts to inflict sleep on the target.<br>Has no base accuracy modifier at all levels.",
				dep: {ArmorPenetrate:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			Kamaitachi: 
			{
				name_en: "Kamaitachi",
				name_jp: "鎌鼬",
				details: "Deals several instances of melee cut damage to random targets.<br>Can hit the same target once at most.<br>Has an 85% speed modifier and no base accuracy modifier at all levels.",
				dep: {VacuumBlade:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}
			},
			AdvantageousPosition: 
			{
				name_en: "Advantageous Position",
				name_jp: "地の利",
				details: "Increases the Masauro and allies in their same row's physical attack for a set amount of turns.<br>Has a 60% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			SwordGod: 
			{
				name_en: "Sword God",
				name_jp: "剣神",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			TPBoost: 
			{
				name_en: "TP Boost",
				name_jp: "ＴＰブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1.5}
			},
			LegSweep: 
			{
				name_en: "Leg Sweep",
				name_jp: "裾払い",
				details: "",
				dep: {MistSlice:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3}
			},
			SwordsVigor: 
			{
				name_en: "Sword's Vigor",
				name_jp: "剣の気迫",
				details: "",
				dep: {AdvantageousPosition:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5}
			},
			SpeedBoost: 
			{
				name_en: "Speed Boost",
				name_jp: "素早さブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			ThunderSlash: 
			{
				name_en: "Thunder Slash",
				name_jp: "雷切",
				details: "",
				dep: {TPBoost:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 1}
			},
			Suigetsu: 
			{
				name_en: "Suigetsu",
				name_jp: "水月",
				details: "",
				dep: {TPBoost:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 2}
			},
			HelmDivide: 
			{
				name_en: "Helm Divide",
				name_jp: "兜割り",
				details: "",
				dep: {LegSweep:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 3}
			},
			ThreeStageStrike: 
			{
				name_en: "Three Stage Strike",
				name_jp: "三段討ち",
				details: "",
				dep: {SwordsVigor:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 4.5}
			},
			Sange: 
			{
				name_en: "Sange",
				name_jp: "散華",
				details: "",
				dep: {SwordsVigor:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5.5}
			}
		}
	},
	shaman:
	{
		base:
		{
			PrayerMastery: 
			{
				name_en: "Prayer Mastery",
				name_jp: "祈祷マスタリー",
				details: "Increases the speed of Prayer skills. Reduces the TP cost of Prayer skills.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			PrayerEradication: 
			{
				name_en: "Prayer: Eradication",
				name_jp: "祈祷：討滅",
				details: "Increases all party members' attack for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			PrayerGuardian: 
			{
				name_en: "Prayer: Guardian",
				name_jp: "祈祷：鎮守",
				details: "Increase all party members' defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			PrayerBullseye: 
			{
				name_en: "Prayer: Bullseye",
				name_jp: "祈祷：適中",
				details: "Increases all party members' accuracy for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			PrayerBlaze: 
			{
				name_en: "Prayer: Blaze",
				name_jp: "祈祷：焔",
				details: "Increases all party members' resistance to fire for a set number of turns.<br>Also adds fire element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			PrayerColdRain: 
			{
				name_en: "Prayer: Cold Rain",
				name_jp: "祈祷：氷雨",
				details: "Increases all party members' resistance to ice for a set number of turns.<br>Also adds ice element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			PrayerPurpleLightning: 
			{
				name_en: "Prayer: Purple Lightning",
				name_jp: "祈祷：紫電",
				details: "Increases all party members' resistance to volt for a set number of turns.<br>Also adds volt element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 6}
			},
			Gospel: 
			{
				name_en: "Gospel",
				name_jp: "福音",
				details: "Party members that receive buffs from the Shaman will have their HP restored.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 0}
			},
			BlessingofHeaven: 
			{
				name_en: "Blessing of Heaven",
				name_jp: "天恵",
				details: "Dispels one buff/debuff on one party member.<br>Restores the target's HP and increases their speed by 1.5x for the turn.<br>The heal amount is doubled if both a buff and debuff are dispelled.<br>Has a 2000% speed modifier at all levels.",
				dep: {PrayerEradication:2,PrayerGuardian:2,PrayerBullseye:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			OracleDance: 
			{
				name_en: "Oracle: Dance",
				name_jp: "神託：乱舞",
				details: "Cancels Prayer: Blaze/Cold Rain/Purple Lightning on the Shaman.<br>Deals ranged damage of the element to all enemies.<br>Reduces hit targets' resistance to the element for a set number of turns.<br>Has a 200% speed modifier and 150 base accuracy at all levels.",
				dep: {PrayerBlaze:3,PrayerColdRain:3,PrayerPurpleLightning:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			}
		},
		specA:
		{
			PrayerMastery: 
			{
				name_en: "Prayer Mastery",
				name_jp: "祈祷マスタリー",
				details: "Increases the speed of Prayer skills. Reduces the TP cost of Prayer skills.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			PrayerEradication: 
			{
				name_en: "Prayer: Eradication",
				name_jp: "祈祷：討滅",
				details: "Increases all party members' attack for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			PrayerGuardian: 
			{
				name_en: "Prayer: Guardian",
				name_jp: "祈祷：鎮守",
				details: "Increase all party members' defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			PrayerBullseye: 
			{
				name_en: "Prayer: Bullseye",
				name_jp: "祈祷：適中",
				details: "Increases all party members' accuracy for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			PrayerBlaze: 
			{
				name_en: "Prayer: Blaze",
				name_jp: "祈祷：焔",
				details: "Increases all party members' resistance to fire for a set number of turns.<br>Also adds fire element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			PrayerColdRain: 
			{
				name_en: "Prayer: Cold Rain",
				name_jp: "祈祷：氷雨",
				details: "Increases all party members' resistance to ice for a set number of turns.<br>Also adds ice element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			PrayerPurpleLightning: 
			{
				name_en: "Prayer: Purple Lightning",
				name_jp: "祈祷：紫電",
				details: "Increases all party members' resistance to volt for a set number of turns.<br>Also adds volt element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 6}
			},
			Gospel: 
			{
				name_en: "Gospel",
				name_jp: "福音",
				details: "Party members that receive buffs from the Shaman will have their HP restored.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 0}
			},
			BlessingofHeaven: 
			{
				name_en: "Blessing of Heaven",
				name_jp: "天恵",
				details: "Dispels one buff/debuff on one party member.<br>Restores the target's HP and increases their speed by 1.5x for the turn.<br>The heal amount is doubled if both a buff and debuff are dispelled.<br>Has a 2000% speed modifier at all levels.",
				dep: {PrayerEradication:2,PrayerGuardian:2,PrayerBullseye:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			OracleDance: 
			{
				name_en: "Oracle: Dance",
				name_jp: "神託：乱舞",
				details: "Cancels Prayer: Blaze/Cold Rain/Purple Lightning on the Shaman.<br>Deals ranged damage of the element to all enemies.<br>Reduces hit targets' resistance to the element for a set number of turns.<br>Has a 200% speed modifier and 150 base accuracy at all levels.",
				dep: {PrayerBlaze:3,PrayerColdRain:3,PrayerPurpleLightning:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			MemoriesofaPreviousLife: 
			{
				name_en: "Memories of a Previous Life",
				name_jp: "前世の記憶",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			PrayerfortheSoul: 
			{
				name_en: "Prayer for the Soul",
				name_jp: "魂の祈り",
				details: "",
				dep: {BlessingofHeaven:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1.5}
			},
			ProtectionoftheOfferings: 
			{
				name_en: "Protection of the Offerings",
				name_jp: "神供の加護",
				details: "",
				dep: {BlessingofHeaven:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2.5}
			},
			MagicAttackBoost: 
			{
				name_en: "Magic Attack Boost",
				name_jp: "魔法攻撃ブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3.5}
			},
			OracleThreeRuns: 
			{
				name_en: "Oracle: Three Runs",
				name_jp: "神託：三走り",
				details: "",
				dep: {OracleDance:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 4.5}
			},
			OracleHalo: 
			{
				name_en: "Oracle: Halo",
				name_jp: "神託：後光",
				details: "",
				dep: {OracleDance:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5.5}
			},
			HPBoost: 
			{
				name_en: "HP Boost",
				name_jp: "ＨＰブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			Purification: 
			{
				name_en: "Purification",
				name_jp: "禊",
				details: "",
				dep: {PrayerfortheSoul:5,ProtectionoftheOfferings:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 2}
			},
			TPBoost: 
			{
				name_en: "TP Boost",
				name_jp: "ＴＰブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 3.5}
			},
			ChanneltheGods: 
			{
				name_en: "Channel the Gods",
				name_jp: "神降ろし",
				details: "",
				dep: {OracleThreeRuns:5,OracleHalo:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5}
			}
		},
		specB:
		{
			PrayerMastery: 
			{
				name_en: "Prayer Mastery",
				name_jp: "祈祷マスタリー",
				details: "Increases the speed of Prayer skills. Reduces the TP cost of Prayer skills.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			PrayerEradication: 
			{
				name_en: "Prayer: Eradication",
				name_jp: "祈祷：討滅",
				details: "Increases all party members' attack for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			PrayerGuardian: 
			{
				name_en: "Prayer: Guardian",
				name_jp: "祈祷：鎮守",
				details: "Increase all party members' defense for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			PrayerBullseye: 
			{
				name_en: "Prayer: Bullseye",
				name_jp: "祈祷：適中",
				details: "Increases all party members' accuracy for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 3}
			},
			PrayerBlaze: 
			{
				name_en: "Prayer: Blaze",
				name_jp: "祈祷：焔",
				details: "Increases all party members' resistance to fire for a set number of turns.<br>Also adds fire element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 4}
			},
			PrayerColdRain: 
			{
				name_en: "Prayer: Cold Rain",
				name_jp: "祈祷：氷雨",
				details: "Increases all party members' resistance to ice for a set number of turns.<br>Also adds ice element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			PrayerPurpleLightning: 
			{
				name_en: "Prayer: Purple Lightning",
				name_jp: "祈祷：紫電",
				details: "Increases all party members' resistance to volt for a set number of turns.<br>Also adds volt element to normal attacks for the same duration.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 6}
			},
			Gospel: 
			{
				name_en: "Gospel",
				name_jp: "福音",
				details: "Party members that receive buffs from the Shaman will have their HP restored.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 0}
			},
			BlessingofHeaven: 
			{
				name_en: "Blessing of Heaven",
				name_jp: "天恵",
				details: "Dispels one buff/debuff on one party member.<br>Restores the target's HP and increases their speed by 1.5x for the turn.<br>The heal amount is doubled if both a buff and debuff are dispelled.<br>Has a 2000% speed modifier at all levels.",
				dep: {PrayerEradication:2,PrayerGuardian:2,PrayerBullseye:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			OracleDance: 
			{
				name_en: "Oracle: Dance",
				name_jp: "神託：乱舞",
				details: "Cancels Prayer: Blaze/Cold Rain/Purple Lightning on the Shaman.<br>Deals ranged damage of the element to all enemies.<br>Reduces hit targets' resistance to the element for a set number of turns.<br>Has a 200% speed modifier and 150 base accuracy at all levels.",
				dep: {PrayerBlaze:3,PrayerColdRain:3,PrayerPurpleLightning:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5}
			},
			ConsolingtheDead: 
			{
				name_en: "Consoling the Dead",
				name_jp: "慰霊",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			PrayerExorcism: 
			{
				name_en: "Prayer: Exorcism",
				name_jp: "祈祷：破邪",
				details: "",
				dep: {BlessingofHeaven:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			PrayerEscape: 
			{
				name_en: "Prayer: Escape",
				name_jp: "祈祷：脱兎",
				details: "",
				dep: {BlessingofHeaven:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2}
			},
			PrayerLongevity: 
			{
				name_en: "Prayer Longevity",
				name_jp: "祈祷：長寿",
				details: "",
				dep: {BlessingofHeaven:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3}
			},
			PurifyingFlame: 
			{
				name_en: "Purifying Flame",
				name_jp: "忌火",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 4}
			},
			Bunrei: 
			{
				name_en: "Bunrei",
				name_jp: "分霊",
				details: "",
				dep: {OracleDance:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5}
			},
			MagicDefenseBoost: 
			{
				name_en: "Magic Defense Boost",
				name_jp: "魔法防御ブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 6}
			},
			ConstraintDefenseBoost: 
			{
				name_en: "Constraint Defense Boost",
				name_jp: "抑制防御ブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			Sanctuary: 
			{
				name_en: "Sanctuary",
				name_jp: "神域",
				details: "",
				dep: {PrayerExorcism:5,PrayerEscape:5,PrayerLongevity:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 2}
			},
			Affection: 
			{
				name_en: "Affection",
				name_jp: "慈愛",
				details: "",
				dep: {PurifyingFlame:2,Bunrei:2},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 4.5}
			}
		}
	},
	herbalist:
	{
		base:
		{
			HerbMastery: 
			{
				name_en: "Herb Mastery",
				name_jp: "ハーブマスタリー",
				details: "Increases the amount of HP healed from Herb skills during battle. No effect on Herb skills outside of combat.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			CureHerb: 
			{
				name_en: "Cure Herb",
				name_jp: "キュアハーブ",
				details: "Heals one ally.<br>Healing is based on the Herbalist's WIS.<br>Has a 150% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			RefreshHerb: 
			{
				name_en: "Refresh Herb",
				name_jp: "リフレシュハーブ",
				details: "Dispels ailments from one ally.<br>Affects a row at max level.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			PoisonSmoke: 
			{
				name_en: "Poison Smoke",
				name_jp: "ポイズンスモーク",
				details: "Attempts to inflict poison on one row.<br>Also lowers poison resistance for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			DarkSmoke: 
			{
				name_en: "Dark Smoke",
				name_jp: "ダークスモーク",
				details: "Attempts to inflict blind on one row.<br>Also lowers blind resistance for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 6}
			},
			LineHerb: 
			{
				name_en: "Line Herb",
				name_jp: "ラインハーブ",
				details: "Heals one row.<br>Healing is based on the Herbalist's WIS.<br>Has no speed modifier at all levels.",
				dep: {CureHerb:5},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			ResurrectionHerb: 
			{
				name_en: "Resurrection Herb",
				name_jp: "リザレクトハーブ",
				details: "Revives a dead ally.<br>Healing is based on the Herbalist's WIS.<br>Has a 70% speed modifier at all levels.",
				dep: {RefreshHerb:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			Antibody: 
			{
				name_en: "Antibody",
				name_jp: "抗体",
				details: "Increases the recovery rate from ailments and binds.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			MedicinalKnowledge: 
			{
				name_en: "Medicinal Knowledge",
				name_jp: "薬草知識",
				details: "The entire party recovers HP and TP every time they harvest, chop, or mine.<br>NOTE: While the HP and TP recovery values are known, the first and last values (activation rate and number of maximum activations) are only guesses. They may represent something else entirely.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}	
			},
			SmokeRot: 
			{
				name_en: "Smoke Rot",
				name_jp: "スモークロット",
				details: "Decreases one row's magic defense.<br>This includes defense against stun and instant death.<br>The MDEF reduction increases (ie, 15%->50% at lvl 10) if the enemy is suffering from an Ailment Up debuff from a smoke skill.<br>Has no speed modifier at all levels.",
				dep: {PoisonSmoke:2,DarkSmoke:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5.5}	
			}
		},
		specA:
		{
			HerbMastery: 
			{
				name_en: "Herb Mastery",
				name_jp: "ハーブマスタリー",
				details: "Increases the amount of HP healed from Herb skills during battle. No effect on Herb skills outside of combat.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			CureHerb: 
			{
				name_en: "Cure Herb",
				name_jp: "キュアハーブ",
				details: "Heals one ally.<br>Healing is based on the Herbalist's WIS.<br>Has a 150% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			RefreshHerb: 
			{
				name_en: "Refresh Herb",
				name_jp: "リフレシュハーブ",
				details: "Dispels ailments from one ally.<br>Affects a row at max level.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			PoisonSmoke: 
			{
				name_en: "Poison Smoke",
				name_jp: "ポイズンスモーク",
				details: "Attempts to inflict poison on one row.<br>Also lowers poison resistance for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			DarkSmoke: 
			{
				name_en: "Dark Smoke",
				name_jp: "ダークスモーク",
				details: "Attempts to inflict blind on one row.<br>Also lowers blind resistance for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 6}
			},
			LineHerb: 
			{
				name_en: "Line Herb",
				name_jp: "ラインハーブ",
				details: "Heals one row.<br>Healing is based on the Herbalist's WIS.<br>Has no speed modifier at all levels.",
				dep: {CureHerb:5},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			ResurrectionHerb: 
			{
				name_en: "Resurrection Herb",
				name_jp: "リザレクトハーブ",
				details: "Revives a dead ally.<br>Healing is based on the Herbalist's WIS.<br>Has a 70% speed modifier at all levels.",
				dep: {RefreshHerb:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			Antibody: 
			{
				name_en: "Antibody",
				name_jp: "抗体",
				details: "Increases the recovery rate from ailments and binds.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			MedicinalKnowledge: 
			{
				name_en: "Medicinal Knowledge",
				name_jp: "薬草知識",
				details: "The entire party recovers HP and TP every time they harvest, chop, or mine.<br>NOTE: While the HP and TP recovery values are known, the first and last values (activation rate and number of maximum activations) are only guesses. They may represent something else entirely.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}	
			},
			SmokeRot: 
			{
				name_en: "Smoke Rot",
				name_jp: "スモークロット",
				details: "Decreases one row's magic defense.<br>This includes defense against stun and instant death.<br>The MDEF reduction increases (ie, 15%->50% at lvl 10) if the enemy is suffering from an Ailment Up debuff from a smoke skill.<br>Has no speed modifier at all levels.",
				dep: {PoisonSmoke:2,DarkSmoke:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5.5}	
			},
			HerbBoost: 
			{
				name_en: "Herb Boost",
				name_jp: "ハーブブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			AreaHerb: 
			{
				name_en: "Area Herb",
				name_jp: "エリアハーブ",
				details: "",
				dep: {LineHerb:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			RecoveryHerb: 
			{
				name_en: "Recovery Herb",
				name_jp: "リカバリーハーブ",
				details: "",
				dep: {ResurrectionHerb:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2}
			},
			ConstraintDefenseBoost: 
			{
				name_en: "Constraint Defense Boost",
				name_jp: "抑制防御ブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3}
			},
			SecretRemedyCompound: 
			{
				name_en: "Secret Remedy Compound",
				name_jp: "秘薬調合",
				details: "",
				dep: {MedicinalKnowledge:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 4}
			},
			ChaseHerb: 
			{
				name_en: "Chase Herb",
				name_jp: "チェイスハーブ",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5}
			},
			DelayHerb: 
			{
				name_en: "Delay Herb",
				name_jp: "ディレイハーブ",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 6}
			},
			HPBoost: 
			{
				name_en: "HP Boost",
				name_jp: "ＨＰブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			AutoResurrection: 
			{
				name_en: "Auto Resurrection",
				name_jp: "オートリザレクト",
				details: "",
				dep: {RecoveryHerb:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 2}
			},
			LingeringScent: 
			{
				name_en: "Lingering Scent",
				name_jp: "残り香",
				details: "",
				dep: {ChaseHerb:3,DelayHerb:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5.5}
			}
		},
		specB:
		{
			HerbMastery: 
			{
				name_en: "Herb Mastery",
				name_jp: "ハーブマスタリー",
				details: "Increases the amount of HP healed from Herb skills during battle. No effect on Herb skills outside of combat.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 0}
			},
			CureHerb: 
			{
				name_en: "Cure Herb",
				name_jp: "キュアハーブ",
				details: "Heals one ally.<br>Healing is based on the Herbalist's WIS.<br>Has a 150% speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 1}
			},
			RefreshHerb: 
			{
				name_en: "Refresh Herb",
				name_jp: "リフレシュハーブ",
				details: "Dispels ailments from one ally.<br>Affects a row at max level.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 2}
			},
			PoisonSmoke: 
			{
				name_en: "Poison Smoke",
				name_jp: "ポイズンスモーク",
				details: "Attempts to inflict poison on one row.<br>Also lowers poison resistance for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 5}
			},
			DarkSmoke: 
			{
				name_en: "Dark Smoke",
				name_jp: "ダークスモーク",
				details: "Attempts to inflict blind on one row.<br>Also lowers blind resistance for a set amount of turns.<br>Has no speed modifier at all levels.",
				dep: {},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:0, y: 6}
			},
			LineHerb: 
			{
				name_en: "Line Herb",
				name_jp: "ラインハーブ",
				details: "Heals one row.<br>Healing is based on the Herbalist's WIS.<br>Has no speed modifier at all levels.",
				dep: {CureHerb:5},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 1}
			},
			ResurrectionHerb: 
			{
				name_en: "Resurrection Herb",
				name_jp: "リザレクトハーブ",
				details: "Revives a dead ally.<br>Healing is based on the Herbalist's WIS.<br>Has a 70% speed modifier at all levels.",
				dep: {RefreshHerb:3},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 2}
			},
			Antibody: 
			{
				name_en: "Antibody",
				name_jp: "抗体",
				details: "Increases the recovery rate from ailments and binds.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 3}
			},
			MedicinalKnowledge: 
			{
				name_en: "Medicinal Knowledge",
				name_jp: "薬草知識",
				details: "The entire party recovers HP and TP every time they harvest, chop, or mine.<br>NOTE: While the HP and TP recovery values are known, the first and last values (activation rate and number of maximum activations) are only guesses. They may represent something else entirely.",
				dep: {},
				active: false,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 4}	
			},
			SmokeRot: 
			{
				name_en: "Smoke Rot",
				name_jp: "スモークロット",
				details: "Decreases one row's magic defense.<br>This includes defense against stun and instant death.<br>The MDEF reduction increases (ie, 15%->50% at lvl 10) if the enemy is suffering from an Ailment Up debuff from a smoke skill.<br>Has no speed modifier at all levels.",
				dep: {PoisonSmoke:2,DarkSmoke:2},
				active: true,
				reqLevel: 0,
				level: 0,
				max: 10,
				coords: {x:1, y: 5.5}	
			},
			SmokeBoost: 
			{
				name_en: "Smoke Boost",
				name_jp: "スモークブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 0}
			},
			ConstraintAttackBoost: 
			{
				name_en: "Constraint Attack Boost",
				name_jp: "抑制攻撃ブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 1}
			},
			ParalyzeSmoke: 
			{
				name_en: "Paralyze Smoke",
				name_jp: "パラライスモーク",
				details: "",
				dep: {Antibody:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 2.5}
			},
			BunglingSmoke: 
			{
				name_en: "Bungling Smoke",
				name_jp: "マズルスモーク",
				details: "",
				dep: {Antibody:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 3.5}
			},
			SmokeSolid: 
			{
				name_en: "Smoke Solid",
				name_jp: "スモークソリッド",
				details: "",
				dep: {SmokeRot:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 5}
			},
			SmokeSpark: 
			{
				name_en: "Smoke Spark",
				name_jp: "スモークスパーク",
				details: "",
				dep: {SmokeRot:5},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:2, y: 6}
			},
			TPBoost: 
			{
				name_en: "TP Boost",
				name_jp: "ＴＰブースト",
				details: "",
				dep: {},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 0}
			},
			SmokeBomb: 
			{
				name_en: "Smoke Bomb",
				name_jp: "スモークボム",
				details: "",
				dep: {ParalyzeSmoke:3,BunglingSmoke:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 3}
			},
			PersistingScent: 
			{
				name_en: "Persisting Scent",
				name_jp: "移り香",
				details: "",
				dep: {SmokeSolid:3,SmokeSpark:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 5}
			},
			PreemptiveSmoke: 
			{
				name_en: "Preemptive Smoke",
				name_jp: "先制スモーク",
				details: "",
				dep: {SmokeSolid:3,SmokeSpark:3},
				active: true,
				reqLevel: 20,
				level: 0,
				max: 10,
				coords: {x:3, y: 6}
			}
		}
	}
}