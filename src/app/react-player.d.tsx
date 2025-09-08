// react-player.d.ts
declare module "react-player" {
  import * as React from "react";

  export interface ReactPlayerProps {
    url: string | string[];
    playing?: boolean;
    loop?: boolean;
    controls?: boolean;
    volume?: number; // 0.0 – 1.0
    muted?: boolean;
    playbackRate?: number;
    width?: string | number;
    height?: string | number;
    style?: React.CSSProperties;
    progressInterval?: number;
    playsinline?: boolean;
    config?: Record<string, unknown>;

    // Lifecycle callbacks
    onReady?: () => void;
    onStart?: () => void;
    onPlay?: () => void;
    onPause?: () => void;
    onBuffer?: () => void;
    onSeek?: (seconds: number) => void;
    onEnded?: () => void;
    onError?: (error: unknown) => void;
    onProgress?: (state: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number }) => void;
    onDuration?: (duration: number) => void;
  }

  export default class ReactPlayer extends React.Component<ReactPlayerProps> {}
}
