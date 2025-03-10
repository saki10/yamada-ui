import { ComponentMultiStyle, mode } from "@yamada-ui/core"
import { getColor, isArray } from "@yamada-ui/utils"

export const Progress: ComponentMultiStyle = {
  baseStyle: {
    track: {
      bg: ["gray.100", "whiteAlpha.300"],
    },
    filledTrack: ({
      theme: t,
      colorMode: m,
      colorScheme: c = "primary",
      hasStripe,
      isAnimation,
      filledTrackColor: f,
    }) => {
      hasStripe = !isAnimation && hasStripe

      const l = mode(500, 300)(m)

      const color = mode("rgba(255, 255, 255, 0.15)", "rgba(0,0,0,0.1)")(m)

      const bgColor = f
        ? isArray(f)
          ? mode(getColor(f[0], f[0])(t, m), getColor(f[1], f[1])(t, m))(m)
          : getColor(f, f)(t, m)
        : getColor(`${c}.${l}`)(t, m)

      const bgImage = hasStripe
        ? `linear-gradient(
            45deg,
            ${color} 25%,
            transparent 25%,
            transparent 50%,
            ${color} 50%,
            ${color} 75%,
            transparent 75%,
            transparent
          )`
        : isAnimation
        ? `linear-gradient(
            to right,
            transparent 0%,
            ${bgColor} 50%,
            transparent 100%
          )`
        : undefined

      return {
        transitionProperty: "common",
        transitionDuration: "slow",
        bgImage,
        ...(hasStripe ? { bgSize: "1rem 1rem" } : {}),
        ...(!isAnimation ? { bgColor } : {}),
      }
    },
  },

  sizes: {
    xs: {
      track: {
        h: "1",
      },
    },
    sm: {
      track: {
        h: "2",
      },
    },
    md: {
      track: {
        h: "3",
      },
    },
    lg: {
      track: {
        h: "4",
      },
    },
  },

  defaultProps: {
    size: "md",
    colorScheme: "primary",
  },
}
