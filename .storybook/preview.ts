import type {Preview} from "@storybook/react";
import {StyleDecorator} from "../src/config/storybook/styleDecorator";
import {ThemeDecorator} from "../src/config/storybook/themeDecorator";
import {Theme} from "../src/providers/Theme";
import {RouteDecorator} from "../src/config/storybook/routeDecorator";

const preview: Preview = {
  decorators:[StyleDecorator,ThemeDecorator(Theme.LIGHT),RouteDecorator],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
