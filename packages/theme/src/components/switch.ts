import { ComponentMultiStyle } from "@yamada-ui/core"
import { transparentizeColor } from "@yamada-ui/utils"

export const Switch: ComponentMultiStyle = {
  baseStyle: {
    container: {
      _readOnly: { cursor: "auto" },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
    track: {
      rounded: "full",
      bg: ["gray.300", "whiteAlpha.200"],
      transitionProperty: "common",
      transitionDuration: "fast",
      _checked: {
        justifyContent: "flex-end",
      },
      _focusVisible: {
        boxShadow: "outline",
      },
    },
    thumb: {
      rounded: "inherit",
      bg: "white",
    },
    label: {
      userSelect: "none",
    },
  },

  variants: {
    thick: ({ colorScheme: c = "primary" }) => ({
      track: {
        p: "1",
        _checked: {
          bg: [`${c}.500`, `${c}.400`],
        },
      },
    }),
    thin: ({ theme: t, colorMode: m, colorScheme: c = "primary" }) => ({
      track: {
        _checked: {
          bg: [
            transparentizeColor(`${c}.400`, 0.7)(t, m),
            transparentizeColor(`${c}.200`, 0.6)(t, m),
          ],
        },
      },
      thumb: {
        boxShadow: "dark-md",
        _checked: {
          bg: [`${c}.500`, `${c}.400`],
        },
      },
    }),
  },

  sizes: {
    sm: ({ variant: v }) => ({
      track: {
        w: "6",
        h: v === "thin" ? "2" : undefined,
      },
      thumb: {
        w: "3",
        h: "3",
      },
      label: { fontSize: "sm" },
    }),
    md: ({ variant: v }) => ({
      track: {
        w: "8",
        h: v === "thin" ? "3" : undefined,
      },
      thumb: {
        w: "4",
        h: "4",
      },
      label: { fontSize: "md" },
    }),
    lg: ({ variant: v }) => ({
      track: {
        w: "10",
        h: v === "thin" ? "4" : undefined,
      },
      thumb: {
        w: "5",
        h: "5",
      },
      label: { fontSize: "lg" },
    }),
  },

  defaultProps: {
    size: "md",
    variant: "thick",
    colorScheme: "primary",
  },
}
