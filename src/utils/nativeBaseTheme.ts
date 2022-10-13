import { extendTheme } from "native-base";
import { colors } from "../styles/theme/colors";

const nativeBaseTheme = extendTheme({
  fontConfig: {
    Serif: {
      100: {
        normal: "Serif-Regular",
        italic: "Serif-Italic",
      },
    },
    OpenSans: {
      100: {
        normal: "OpenSans-Regular",
        semibold: "OpenSans-SemiBold",
      },
    },
  },
  fonts: {
    heading: "Serif-Regular",
    body: "OpenSans-Regular",
    mono: "OpenSans-SemiBold",
  },
  colors: {
    nileBlue: {
      100: colors.nileBlue,
    },
    seaShell: {
      100: colors.seaShell,
    },
    gray: {
      100: colors.gray,
    },
  },
  components: {
    Button: {
      baseStyle: {
        rounded: "18",
        width: "328",
        height: "48px",
        alignSelf: "center",
      },
    },
  },
});

export default nativeBaseTheme;
