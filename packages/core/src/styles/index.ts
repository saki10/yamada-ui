export * from "./utils"
export * from "./config"
export * from "./pseudos"

import { background, BackgroundProps } from "./background"
import { border, BorderProps } from "./border"
import { color, ColorProps } from "./color"
import { effect, EffectProps } from "./effect"
import { filter, FilterProps } from "./filter"
import { flex, FlexProps } from "./flex"
import { grid, GridProps } from "./grid"
import { interactivity, InteractivityProps } from "./interactivity"
import { layout, LayoutProps } from "./layout"
import { list, ListProps } from "./list"
import { others, OthersProps } from "./others"
import { position, PositionProps } from "./position"
import { scroll, ScrollProps } from "./scroll"
import { space, SpaceProps } from "./space"
import { transform, TransformProps } from "./transform"
import { transition, TransitionProps } from "./transition"
import { typography, TypographyProps } from "./typography"

export const styles = {
  ...layout,
  ...color,
  ...grid,
  ...flex,
  ...typography,
  ...list,
  ...scroll,
  ...position,
  ...background,
  ...space,
  ...transform,
  ...transition,
  ...filter,
  ...interactivity,
  ...effect,
  ...border,
  ...others,
}

export const stylesProperties: any[] = Object.keys(styles)

export const layoutStyle = {
  ...layout,
  ...grid,
  ...flex,
  ...space,
  ...position,
}

export const layoutStylesProperties: any[] = Object.keys(layoutStyle)

export type StylesProps = LayoutProps &
  ColorProps &
  GridProps &
  FlexProps &
  ScrollProps &
  ListProps &
  TypographyProps &
  PositionProps &
  BackgroundProps &
  SpaceProps &
  EffectProps &
  InteractivityProps &
  FilterProps &
  TransformProps &
  TransitionProps &
  BorderProps &
  OthersProps
