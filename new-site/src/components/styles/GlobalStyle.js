import { createGlobalStyle } from "styled-components"
import { themes } from "./ColorStyle"

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${themes.light.backgroundColor};
    
    // 跟随系统 darkmode 切换样式
    @media (prefers-color-scheme: dark) {
      background: ${themes.dark.backgroundColor};
    }
  }
`
