import { WeaponType } from "@/utils/enums/enums";

export interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string;
    fireMode: string;
    altFireType: string;
  };
  adsStats: {
    zoomMultiplier: number;
    fireRate: number;
    runSpeedMultiplier: number;
    burstCount: number;
    firstBulletAccuracy: number;
  };
  altShotgunStats: {
    shotgunPelletCount: number;
    burstRate: number;
  };
  airBurstStats: {
    shotgunPelletCount: number;
    burstDistance: number;
  };
  damageRanges: DamageRange[];
  shopData?: {
    cost: number;
    category: WeaponType;
    categoryText: string;
    gridPosition: {
      row: number;
      column: number;
    };
    canBeTrashed: boolean;
    image: string;
    newImage: string;
    newImage2: string;
    assetPath: string;
  };
  skins: Skin[];
  chromas: Chroma[];
  levels: Level[];
}

export interface DamageRange {
  rangeStartMeters: number;
  rangeEndMeters: number;
  headDamage: number;
  bodyDamage: number;
  legDamage: number;
}

export interface Skin {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  wallpaper: string;
  assetPath: string;
}

export interface Chroma {
  uuid: string;
  displayName: string;
  displayIcon: string;
  fullRender: string;
  swatch: string;
  streamedVideo: string;
  assetPath: string;
}

export interface Level {
  uuid: string;
  displayName: string;
  levelItem: string;
  displayIcon: string;
  streamedVideo: string;
  assetPath: string;
}
export interface GetWeaponsParams {
  language?: string;
}
