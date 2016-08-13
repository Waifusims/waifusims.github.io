var classSkillForwardReqs =
{
	fencer:
	{
		base:
		{
			RapierMastery: {},
			ChainFire: {ChainBoost:2, ChainBurst:2},
			ChainIce: {ChainBoost:2, ChainBurst:2},
			ChainVolt: {ChainBoost:2, ChainBurst:2},
			Predict: {WindCurtain:3},
			ChainBoost: {},
			ChainBurst: {},
			WindCurtain: {},
			VisionThrust: {},
			Sylphid: {}
		},
		specA:
		{
			RapierMastery: {},
			ChainFire: {ChainBoost:2, ChainBurst:2},
			ChainIce: {ChainBoost:2, ChainBurst:2},
			ChainVolt: {ChainBoost:2, ChainBurst:2},
			Predict: {WindCurtain:3},
			ChainBoost: {},
			ChainBurst: {},
			WindCurtain: {PreemptiveCurtain:3},
			VisionThrust: {SharpThrust:3},
			Sylphid: {CounterBoost:5},
			RayofLight: {},
			BewitchingSwordDance: {PileOn:3, AvoidAccel:3},
			PreemptiveCurtain: {DivineWind:3},
			SharpThrust: {RevengeThrust:5},
			CounterBoost: {},
			Unburdened: {},
			PileOn: {},
			AvoidAccel: {},
			DivineWind: {},
			RevengeThrust: {}
		},
		specB:
		{
			RapierMastery: {SpeedofSoundBlade:3},
			ChainFire: {ChainBoost:2, ChainBurst:2},
			ChainIce: {ChainBoost:2, ChainBurst:2},
			ChainVolt: {ChainBoost:2, ChainBurst:2},
			Predict: {WindCurtain:3},
			ChainBoost: {ChainKiller:3},
			ChainBurst: {ChainKiller:3},
			WindCurtain: {},
			VisionThrust: {RandomStab:3},
			Sylphid: {},
			SpeedofSoundBlade: {},
			ChainKiller: {ChainAll:5, ChainPlus:5, ChainDouble:5},
			SylphScreen: {},
			RandomStab: {Resonance:5},
			SpeedBoost: {},
			PhysicalAttackBoost: {},
			ChainAll: {},
			ChainPlus: {},
			ChainDouble: {},
			Resonance: {}
		}
	},
	dragoon: 
	{
		base:
		{
			ShieldMastery: {},
			LineGuard: {GunMount:2},
			MaterialGuard: {GunMount:2},
			HealingGuard: {GunMount:2},
			Bunker: {DefensivePosition:2},
			ArtilleryMastery: {},
			GunMount: {},
			BarrageWall: {},
			DragonsRoar: {},
			DefensivePosition: {}
		},
		specA:
		{
			ShieldMastery: {},
			LineGuard: {GunMount:2},
			MaterialGuard: {GunMount:2},
			HealingGuard: {GunMount:2},
			Bunker: {DefensivePosition:2},
			ArtilleryMastery: {},
			GunMount: {RecoveryGuard:3,CounterGuard:3,DivideGuard:3},
			BarrageWall: {},
			DragonsRoar: {PreemptiveRoar:3},
			DefensivePosition: {PreemptiveBunker:3},
			HPBoost: {},
			RecoveryGuard: {FullGuard:3,SoulGuard:3},
			CounterGuard: {FullGuard:3,SoulGuard:3},
			DivideGuard: {FullGuard:3,SoulGuard:3},
			ShieldThrow: {},
			PreemptiveRoar: {DragonForce:3},
			PreemptiveBunker: {},
			FullGuard: {},
			SoulGuard: {},
			DragonForce: {}
		},
		specB:
		{
			ShieldMastery: {},
			LineGuard: {GunMount:2},
			MaterialGuard: {GunMount:2},
			HealingGuard: {GunMount:2},
			Bunker: {DefensivePosition:2},
			ArtilleryMastery: {},
			GunMount: {},
			BarrageWall: {RapidCannon:3,CurseCannon:3,HypnoCannon:3},
			DragonsRoar: {},
			DefensivePosition: {Pillbox:3},
			GunRevenge: {},
			TPBoost: {BombardmentPrep:3},
			RapidCannon: {BusterCannon:3},
			CurseCannon: {BusterCannon:3},
			HypnoCannon: {BusterCannon:3},
			Pillbox: {GunSupport:3},
			PhysicalAttackBoost: {},
			BombardmentPrep: {},
			BusterCannon: {},
			GunSupport: {}
		}
	},
	cestus:
	{
		base:
		{
			GauntletMastery: {},
			Flicker: {OneTwo:3},
			ArmBreak: {OneTwo:3},
			LiverBlow: {OneTwo:3},
			RushingBlood: {GivingitEverything:1},
			ThunderGodFist: {DemonFist:2},
			PhysicalAttackBoost: {},
			OneTwo: {},
			GivingitEverything: {},
			DemonFist: {}
		},
		specA:
		{
			GauntletMastery: {},
			Flicker: {OneTwo:3},
			ArmBreak: {OneTwo:3},
			LiverBlow: {OneTwo:3},
			RushingBlood: {GivingitEverything:1},
			ThunderGodFist: {DemonFist:2},
			PhysicalAttackBoost: {},
			OneTwo: {LeadBlow:5},
			GivingitEverything: {CrossCounter:5},
			DemonFist: {},
			DoublePunch: {},
			Corkscrew: {LeadBlow:2},
			SpeedBoost: {RushOut:5},
			CrossCounter: {},
			Interval: {Clinch:3},
			ArmBlock: {Clinch:3},
			ConstraintAttackBoost: {},
			LeadBlow: {},
			RushOut: {},
			Clinch: {}
		},
		specB:
		{
			GauntletMastery: {},
			Flicker: {OneTwo:3},
			ArmBreak: {OneTwo:3},
			LiverBlow: {OneTwo:3},
			RushingBlood: {GivingitEverything:1},
			ThunderGodFist: {DemonFist:2},
			PhysicalAttackBoost: {},
			OneTwo: {},
			GivingitEverything: {BackFromtheDead:3},
			DemonFist: {DemonGodFist:3},
			Grit: {},
			VajraStance: {OugiRengokusatsu:5},
			SoulSmash: {OugiRengokusatsu:5},
			GiantKiller: {OugiTenchihaten:3},
			BackFromtheDead: {OugiTenchihaten:3},
			DemonGodFist: {},
			ConstraintDefenseBoost: {},
			HPBoost: {},
			OugiRengokusatsu: {},
			OugiTenchihaten: {}
		}
	},
	reaper:
	{
		base:
		{
			ScytheMastery: {},
			MiasmaWeapon: {PreemptiveWeapon:2,EndlessShroud:2,DeathsJudgment:2},
			FrailMiasma: {FeebleMiasma:3},
			ScytheofNumbStasis: {ScytheofExorcism:3},
			GatherSouls: {},
			PreemptiveWeapon: {},
			EndlessShroud: {},
			DeathsJudgment: {},
			FeebleMiasma: {},
			ScytheofExorcism: {}
		},
		specA:
		{
			ScytheMastery: {},
			MiasmaWeapon: {PreemptiveWeapon:2,EndlessShroud:2,DeathsJudgment:2},
			FrailMiasma: {FeebleMiasma:3},
			ScytheofNumbStasis: {ScytheofExorcism:3},
			GatherSouls: {},
			PreemptiveWeapon: {},
			EndlessShroud: {},
			DeathsJudgment: {FreshBloodSlash:3,GreateScytheofColdAsh:3},
			FeebleMiasma: {},
			ScytheofExorcism: {ScytheofCruelPoison:3,ScytheofWickedChaos:3},
			BlackBlade: {},
			TPBoost: {},
			FreshBloodSlash: {ShroudofReality:3},
			GreateScytheofColdAsh: {ShroudofReality:3},
			ScytheofCruelPoison: {ScytheofDeath:3},
			ScytheofWickedChaos: {ScytheofDeath:3},
			BlackShroud: {},
			ConstraintAttackBoost: {},
			ShroudofReality: {},
			ScytheofDeath: {}
		},
		specB:
		{
			ScytheMastery: {},
			MiasmaWeapon: {PreemptiveWeapon:2,EndlessShroud:2,DeathsJudgment:2},
			FrailMiasma: {FeebleMiasma:3},
			ScytheofNumbStasis: {ScytheofExorcism:3},
			GatherSouls: {},
			PreemptiveWeapon: {},
			EndlessShroud: {DeathResistance:5},
			DeathsJudgment: {},
			FeebleMiasma: {BrittleMiasma:3,DimMiasma:3},
			ScytheofExorcism: {},
			AbsorbVitality: {},
			MagicDefenseBoost: {},
			DeathResistance: {BloodofAtonement:5,WallofMiasma:5},
			BrittleMiasma: {ScytheofTransience:5,SoulTransfer:5},
			DimMiasma: {ScytheofTransience:5,SoulTransfer:5},
			HPBoost: {},
			BloodofAtonement: {},
			WallofMiasma: {},
			ScytheofTransience: {},
			SoulTransfer: {}
		}
	},
	warlock:
	{
		base:
		{
			MagiMastery: {HighSpeedIncantation:5},
			Amplifier: {MagicShield:2},
			Levitation: {},
			HighSpeedIncantation: {},
			Fireball: {},
			IcicleLance: {},
			Lightning: {},
			MagicShield: {},
			IncantationCompressionForm: {},
			Invisible: {}
		},
		specA:
		{
			MagiMastery: {HighSpeedIncantation:5},
			Amplifier: {MagicShield:2},
			Levitation: {},
			HighSpeedIncantation: {},
			Fireball: {Windstorm:3,EarthSpike:3,Rockfall:3},
			IcicleLance: {Windstorm:3,EarthSpike:3,Rockfall:3},
			Lightning: {Windstorm:3,EarthSpike:3,Rockfall:3},
			MagicShield: {AntiMagic:3},
			IncantationCompressionForm: {IncantationMultistrikeForm:5},
			Invisible: {},
			ReserveMagic: {},
			Windstorm: {Alter:5},
			EarthSpike: {Alter:5},
			Rockfall: {Alter:5},
			AntiMagic: {LifeDrain:3},
			IncantationMultistrikeForm: {},
			MagicDefenseBoost: {},
			TPBoost: {},
			Alter: {},
			LifeDrain: {}
		},
		specB:
		{
			MagiMastery: {HighSpeedIncantation:5},
			Amplifier: {MagicShield:2},
			Levitation: {},
			HighSpeedIncantation: {},
			Fireball: {Explode:5},
			IcicleLance: {IceStream:5},
			Lightning: {ThunderBreak:5},
			MagicShield: {MagicWeapon:3},
			IncantationCompressionForm: {IncantationReductionForm:5},
			Invisible: {},
			CommonMagic: {},
			Explode: {MagicLeak:3,CostCut:3},
			IceStream: {MagicLeak:3,CostCut:3},
			ThunderBreak: {MagicLeak:3,CostCut:3},
			MagicWeapon: {},
			IncantationReductionForm: {},
			ConstraintDefenseBoost: {},
			MagicAttackBoost: {},
			MagicLeak: {},
			CostCut: {}
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