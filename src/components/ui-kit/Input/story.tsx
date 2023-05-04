import {Input} from "./Index";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'ui-kit/Input',
    component: Input,

} as ComponentMeta<typeof Input>

const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args}/>

export const PrimarySmall = InputTemplate.bind({});
PrimarySmall.args = {
    value: 'input text',
    size: "small"
}
export const PrimaryMedium = InputTemplate.bind({});
PrimaryMedium.args = {
    value: 'input text',
    size: "medium"
}
export const PrimaryLarge = InputTemplate.bind({});
PrimaryLarge.args = {
    value: 'input text',
    size: "large"
}

export const FullWidth = InputTemplate.bind({});
FullWidth.args = {
    value: 'Input text',
    theme: 'fullWidth',
    fullWidth: true,
}

export const Disabled = InputTemplate.bind({});
Disabled.args = {
    value: 'Input text',
    theme: 'disabled',
    fullWidth: false,
    disabled: true,
}

