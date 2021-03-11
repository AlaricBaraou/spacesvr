import { ProviderProps } from "@react-three/cannon/dist/Provider";
import { ContainerProps } from "react-three-fiber/targets/shared/web/ResizeContainer";
import { PlayerRef } from "./player";
import { MutableRefObject, ReactNode } from "react";
import { AssetUrls } from "./loading";

export enum Environment {
  STANDARD,
  KEYFRAME,
  PORTAL,
}

export type EnvironmentProps = {
  children: ReactNode;
  assets?: AssetUrls;
  canvasProps?: Partial<ContainerProps>;
  physicsProps?: Partial<ProviderProps>;
};

export interface EnvironmentState {
  type: Environment;
  paused: boolean;
  player: PlayerRef;
  firstVisit: boolean;
  overlay: string | null;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  container: HTMLDivElement | null;
  events: EnvironmentEvent[];
  setPlayer: (p: PlayerRef) => void;
  setPaused: (p: boolean, overlay?: string) => void;
  setVisit: (val: boolean) => void;
  addEvent: (name: string, callback: (...args: any[]) => void) => void;
}

export interface EnvironmentEvent {
  name: string;
  callback: (...args: any[]) => void;
}
