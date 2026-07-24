export type CursorVariant = 'default' | 'pill' | 'hover' | 'hoverLarge';
export type CursorIcon = 'eye' | 'arrow' | 'mail' | 'message' | 'github' | 'linkedin' | 'none';

export type CursorState = {
  variant: CursorVariant;
  text: string;
  icon: CursorIcon;
  blend: boolean;
  reading: boolean;
  selecting: boolean;
};

export type CursorHandlers = {
  onEnterPill: (text: string, icon?: CursorIcon, blend?: boolean) => void;
  onEnterHover: () => void;
  onEnterHoverLarge: () => void;
  onEnterReading: () => void;
  onLeaveReading: () => void;
  onLeaveCursor: () => void;
};
