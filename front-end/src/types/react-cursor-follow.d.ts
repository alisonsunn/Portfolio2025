declare module "react-cursor-follow" {
  import { ComponentType } from "react";

  interface CursorProps {
    hollow?: boolean;
    duration?: number;
    size?: number;
    color?: string;
    hoverSize?: number;
    hoverColor?: string;
    hoverClasses?: string[];
    smoothness?: {
      movement?: number;
      scale?: number;
    };
    position?: string;
    offsetX?: number;
    offsetY?: number;
    delay?: number;
  }

  const Cursor: ComponentType<CursorProps>;
  export default Cursor;
}
