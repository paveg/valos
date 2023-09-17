/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Valos
 * Example valorant web service
 * OpenAPI spec version: 2023.9.17
 */
/**
 * This field is excluded from the response when a locale is set
 */
export interface LocalizedNames {
  /** English */
  'en-US': string;
  /** Japanese */
  'ja-JP': string;
}

/**
 * A content item
 */
export interface ContentItem {
  id: string;
  assetName: string;
  /** This field is only included for maps and game modes. These values are used in the match response. */
  assetPath: string;
  localizedNames?: LocalizedNames;
}

/**
 * An act
 */
export interface Act {
  id: string;
  name: string;
  isActive: boolean;
  localizedNames?: LocalizedNames;
}

/**
 * A player title
 */
export type PlayerTitle = ContentItem;

/**
 * A player card
 */
export type PlayerCard = ContentItem;

/**
 * A charm level
 */
export type CharmLevel = ContentItem;

/**
 * A charm
 */
export type Charm = ContentItem;

/**
 * A spray level
 */
export type SprayLevel = ContentItem;

/**
 * A spray
 */
export type Spray = ContentItem;

/**
 * A game mode
 */
export type GameMode = ContentItem;

/**
 * An equip
 */
export type Equip = ContentItem;

/**
 * A skin level
 */
export type SkinLevel = ContentItem;

/**
 * A skin
 */
export type Skin = ContentItem;

/**
 * A chroma
 */
export type Chroma = ContentItem;

/**
 * A map
 */
export type Map = ContentItem;

/**
 * A character
 */
export type Character = ContentItem;

/**
 * Base Error
 */
export interface BaseError {
  /** Human readable error code */
  status: string;
  /** HTTP Status Code */
  status_code?: number;
}

/**
 * A contents
 */
export interface Content {
  version: string;
  /** A character list */
  characters: ContentItem[];
  /** A map list */
  maps: ContentItem[];
  /** A chroma list */
  chromas: ContentItem[];
  /** A skin list */
  skins: ContentItem[];
  /** A skin level list */
  skinLevels: ContentItem[];
  /** An equip list */
  equips: ContentItem[];
  /** A game mode list */
  gameModes: ContentItem[];
  /** A spray list */
  sprays: ContentItem[];
  /** A spray level list */
  sprayLevels: ContentItem[];
  /** A charm list */
  charms: ContentItem[];
  /** A charm level list */
  charmLevels: ContentItem[];
  /** A player card list */
  playerCards: ContentItem[];
  /** A player title list */
  playerTitles: ContentItem[];
  /** An act list */
  acts: Act[];
}

/**
 * A response of the get a content with bad request
 */
export interface GetContentBadRequestResponse {
  status: BaseError;
}

/**
 * A response of the get a content successfully
 */
export interface GetContentSuccessResponse {
  contents: Content;
}

