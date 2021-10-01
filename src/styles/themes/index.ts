export * from './CustomDefaultTheme'
export * from './CustomDarkTheme'

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      alert: string
    }
    interface ThemeSizingMajor {
      x1: number
      x2: number
      x3: number
      x4: number
      x5: number
      x6: number
      x7: number
      x8: number
      x9: number
      x10: number
    }
    interface ThemeSizingMinor {
      x1: number
      x2: number
      x3: number
      x4: number
      x5: number
      x6: number
      x7: number
    }
    interface Theme {
      sizingMajor: ThemeSizingMajor
      sizingMinor: ThemeSizingMinor
    }
  }
}
