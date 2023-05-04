import type {ComponentMeta, ComponentStory, Meta, StoryObj} from '@storybook/react';
import Button from "./Index";
import './styles.module.scss';


export default {
    title: 'ui-kit/Button',
    component: Button,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#333333'}
            ]
        }

    }

} as ComponentMeta<typeof Button>


const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args}/>
export const Primary = ButtonTemplate.bind({});

export const PrimarySmall = ButtonTemplate.bind({});
PrimarySmall.args = {
    children: 'Click me!',
    theme: 'contained',
    size: "small",
};

Primary.args = {
    children: 'Click me!',
    theme: 'contained',
};
export const PrimaryLarge = ButtonTemplate.bind({});
PrimaryLarge.args = {
    children: 'Click me!',
    theme: 'contained',
    size: "large"
};

export const SecondarySmall = ButtonTemplate.bind({})
SecondarySmall.args = {
    children: 'Click me!',
    theme: 'contained',
    size: "small",
    variant: 'secondary'
}

export const SecondaryMedium = ButtonTemplate.bind({})
SecondaryMedium.args = {
    children: 'Click me!',
    theme: 'contained',
    size: "medium",
    variant: 'secondary'
}

export const SecondaryLarge = ButtonTemplate.bind({})
SecondaryLarge.args = {
    children: 'Click me!',
    theme: 'contained',
    size: "large",
    variant: 'secondary'
}


export const LinkSmall = ButtonTemplate.bind({})

LinkSmall.args = {
    children: 'small',
    theme: 'outline',
    size: 'small'
}
export const LinkMedium = ButtonTemplate.bind({})
LinkMedium.args = {
    children: 'medium',
    theme: 'outline',
    size: 'medium'
}

export const LinkLarge = ButtonTemplate.bind({})
LinkLarge.args = {
    children: 'large',
    theme: 'outline',
    size: 'large'
}


export const FullWidthSmall = ButtonTemplate.bind({})
FullWidthSmall.args = {
    children: 'small',
    theme: 'contained',
    size: 'small',
    fullWidth: true,
}

export const FullWidthMedium = ButtonTemplate.bind({})
FullWidthMedium.args = {
    children: 'medium',
    theme: 'contained',
    size: 'medium',
    fullWidth: true,
}


export const FullWidthLarge = ButtonTemplate.bind({})
FullWidthLarge.args = {
    children: 'large',
    theme: 'contained',
    size: 'large',
    fullWidth: true,
}

export const Disabled = ButtonTemplate.bind({})
Disabled.args = {
    children: 'large',
    theme: 'disabled',
    size: 'medium',
    disabled: true,
}
