import { DefaultTheme } from "./defaultTheme.d.ts";

export interface ThemeProviderProps<Theme = DefaultTheme> {
  children: React.ReactNode;
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme);
}
export default function ThemeProvider<T = DefaultTheme>(
  props: ThemeProviderProps<T>,
): React.ReactElement<ThemeProviderProps<T>>;
