import ThemeProvider, {Theme} from "@/providers/Theme";
import {Story} from "@storybook/react";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
    return <ThemeProvider initTheme={theme}>
        <div className={theme}>
            <StoryComponent/>
        </div>
    </ThemeProvider>
}