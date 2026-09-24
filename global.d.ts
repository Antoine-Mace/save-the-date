import type { AddToCalendarButtonType } from "add-to-calendar-button";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "add-to-calendar-button": DetailedHTMLProps<
        Omit<HTMLAttributes<HTMLElement>, keyof AddToCalendarButtonType>,
        HTMLElement
      > &
        AddToCalendarButtonType;
    }
  }
}
