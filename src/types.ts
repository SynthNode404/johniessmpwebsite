export interface ServerStatus {
  online: boolean;
  playersOnline: number;
  playersMax: number;
  ping: number;
  version: string;
  motd: string;
}

export interface RuleCategory {
  id: string;
  title: string;
  iconName: string;
  rules: {
    number: number;
    title: string;
    description: string;
    severity: 'Low' | 'Medium' | 'High' | 'Critical';
  }[];
}

export interface StaffMember {
  id: string;
  name: string;
  role: 'Owner' | 'Admin' | 'Moderator' | 'Builder';
  avatarUrl: string; // Minecraft skin avatar URL
  discordHandle?: string;
  bio: string;
  activeStatus: 'Online' | 'Offline' | 'In-Game';
}

export interface ServerEvent {
  id: string;
  title: string;
  status: 'Active' | 'Upcoming' | 'Completed';
  date: string;
  timestamp: number; // For countdowns
  reward: string;
  description: string;
  imageUrl?: string;
}
