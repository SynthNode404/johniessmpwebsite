import { RuleCategory, StaffMember, ServerEvent } from './types';

export const SERVER_IP_JAVA = "johniessmp.duckdns.org";
export const SERVER_IP_BEDROCK = "johniessmp.duckdns.org";
export const SERVER_BEDROCK_PORT = "19132";
export const DISCORD_INVITE_URL = "https://discord.gg/tu5EwAqvuw";

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorClass: string;
  badge?: string;
}

export const FeaturesList: FeatureCard[] = [
  {
    id: "non-school-approved",
    title: "Official Non-School Approved Server",
    description: "Johnies SMP is a community-run Minecraft server created by students, for players who want a fun and independent survival experience outside of school projects and assignments.",
    iconName: "Shield",
    colorClass: "from-rose-500/20 to-rose-600/5 text-rose-400 border-rose-500/20",
    badge: "Unique"
  },
  {
    id: "growing-community",
    title: "Growing Player Community",
    description: "Join a friendly and expanding community of players. Make new friends, build together, trade resources, and become part of the server's history.",
    iconName: "Users",
    colorClass: "from-amber-500/20 to-amber-600/5 text-amber-400 border-amber-500/20",
    badge: "Active"
  },
  {
    id: "frequent-events",
    title: "Frequent Events",
    description: "Participate in regular server events, competitions, treasure hunts, PvP tournaments, build contests, and special seasonal activities for exclusive rewards.",
    iconName: "Calendar",
    colorClass: "from-emerald-500/20 to-emerald-600/5 text-emerald-400 border-emerald-500/20",
    badge: "Popular"
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Survival",
    description: "Java and Bedrock players can play together on the same world. Whether you're on PC, console, tablet, or phone, you can join the adventure.",
    iconName: "Globe",
    colorClass: "from-cyan-500/20 to-cyan-600/5 text-cyan-400 border-cyan-500/20",
    badge: "Featured"
  }
];

export const RulesData: RuleCategory[] = [
  {
    id: "general",
    title: "General Conduct Rules",
    iconName: "MessageSquare",
    rules: [
      {
        number: 1,
        title: "Mutual Respect & Decency",
        description: "Treat other players with courtesy. Harassment, hate speech, racism, homophobia, and persistent toxicity will not be tolerated and will lead to an immediate ban.",
        severity: "Critical"
      },
      {
        number: 2,
        title: "No Game-Breaking Exploits",
        description: "Strictly no hacking, fly-mods, x-ray packs, or duping. Using exploits or unapproved clients (e.g., baritone, speedmine) will get you banned by the anti-cheat. Minimaps and cosmetic clients (like Lunar or Badlion) are permitted.",
        severity: "Critical"
      },
      {
        number: 3,
        title: "No In-Game Spam / Adverts",
        description: "No spamming chat, advertising other servers, or excessive caps. Discussion of other gaming servers or self-promotion is prohibited unless authorized.",
        severity: "Medium"
      }
    ]
  },
  {
    id: "gameplay",
    title: "Survival & Building Rules",
    iconName: "Hammer",
    rules: [
      {
        number: 4,
        title: "No Griefing or Unpermitted Stealing",
        description: "Griefing, lava casting, or destroying other players' houses/crops, even outside claimed territory, is strictly forbidden. Theft from unlocked chests in active player towns is also reportable.",
        severity: "High"
      },
      {
        number: 5,
        title: "Build Sparing & Lag Prevention",
        description: "Avoid building heavy lag machines, infinite redstone clocks without toggle-switches, or massive mob farms exceeding 50 entities in a single chunk. Admins will prune or request modifications if performance degrades.",
        severity: "High"
      },
      {
        number: 6,
        title: "Proper Tree Harvesting",
        description: "Always chop down trees fully. Flying leaves and half-cut tree trunks ruin the world aesthetics and clutter chunk rendering. Clean your lumber yards!",
        severity: "Low"
      }
    ]
  },
  {
    id: "pvp",
    title: "PvP & Interaction Rules",
    iconName: "Swords",
    rules: [
      {
        number: 7,
        title: "No Combat Logging",
        description: "Disconnecting, teleporting, or logging out while in active combat or inside a warzone is strictly forbidden. The server auto-kills players who quit during battle.",
        severity: "High"
      },
      {
        number: 8,
        title: "No Spawn-Camping or Mob-Trap Farming",
        description: "Killing fresh spawns at spawn or trap-killing targeted players repeatedly is prohibited. Let players establish themselves before engaging in PvP.",
        severity: "Medium"
      },
      {
        number: 9,
        title: "Consensual PvP in Claims",
        description: "PvP is disabled by default in claim zones. Do not bypass this state by pushing players into lava, setting up fire traps, or dropping loaded TNT on claims.",
        severity: "High"
      }
    ]
  }
];

export const StaffData: StaffMember[] = [
  {
    id: "johnie",
    name: "Johnie",
    role: "Owner",
    avatarUrl: "https://minotar.net/helm/johnie/128.png",
    discordHandle: "johnie#0001",
    bio: "Founding creator of Johnies SMP. Manages systems administration, custom plugin development, and infrastructure scaling. Lover of redstone and high ticks.",
    activeStatus: "In-Game"
  },
  {
    id: "skyward",
    name: "Skyward_Grid",
    role: "Admin",
    avatarUrl: "https://minotar.net/helm/Steve/128.png",
    discordHandle: "skygrid#1010",
    bio: "Chief Community Admin. Oversees server events, rule-enforcement policies, and custom storylines. If you have an economy request, she's your go-to!",
    activeStatus: "Online"
  },
  {
    id: "block_ninja",
    name: "BlockNinjaX",
    role: "Moderator",
    avatarUrl: "https://minotar.net/helm/Alex/128.png",
    discordHandle: "ninja_x#9999",
    bio: "Grief investigator and security expert. Keeps chat positive, handles land claim conflicts, and maintains the anti-grief logs.",
    activeStatus: "Online"
  },
  {
    id: "pixel_craft",
    name: "Pixel_Craft",
    role: "Builder",
    avatarUrl: "https://minotar.net/helm/Herobrine/128.png",
    discordHandle: "pixelcraft#4580",
    bio: "Senior Realm Architect. Created the custom server lobby, warp gateways, and the gorgeous survival trade market area.",
    activeStatus: "Offline"
  }
];

export const EventsData: ServerEvent[] = [
  {
    id: "uhc-clash",
    title: "Summer UHC Tournament",
    status: "Active",
    date: "June 6, 2026 - 18:00 UTC",
    timestamp: Date.now() + 5 * 24 * 60 * 60 * 1000, // 5 days from now
    reward: "Exclusive Champion Row Name Tag & 5,000 Coins",
    description: "An ultra hardcore test of survival: No health regeneration except through golden apples or health potions. Last builder/duolist standing wins!",
    imageUrl: "https://picsum.photos/seed/uhcminecraft/800/450"
  },
  {
    id: "dragon-slayer",
    title: "Refreshed Ender Dragon Co-op Kill",
    status: "Upcoming",
    date: "June 12, 2026 - 20:00 UTC",
    timestamp: Date.now() + 11 * 24 * 60 * 60 * 1000, // 11 days from now
    reward: "Elytra wings, dragon breath, & double XP tiering boosts",
    description: "We are summoning an infused Level 5 Ender Dragon with custom attack phases! Bring all your maxed diamond/netherite armor and support the community army.",
    imageUrl: "https://picsum.photos/seed/enddragon/800/450"
  },
  {
    id: "base-showcase",
    title: "Grand Spawn Build Contest",
    status: "Upcoming",
    date: "June 20, 2026 - 12:00 UTC",
    timestamp: Date.now() + 19 * 24 * 60 * 60 * 1000, 
    reward: "Master Architect Badge & 10x Claim Crystals",
    description: "Build a beautiful medieval outpost near the main spawn. Ranks will be voted on by all players on the official server Discord. Ready your blocks!",
    imageUrl: "https://picsum.photos/seed/medievalspawn/800/450"
  }
];
