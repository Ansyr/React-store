import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {Typography} from "./Index";
import './styles.module.scss';

export default {
    title: 'ui-kit/Typography',
    component: Typography,
    backgrounds: {
        default: 'BgBlack',
        values: [
            {name: 'BgBlack', value: '#333333'}
        ]
    }

} as ComponentMeta<typeof Typography>

const InputTemplate: ComponentStory<typeof Typography> = (args) => <Typography {...args}/>

export const PrimarySmall = InputTemplate.bind({});
PrimarySmall.args = {
    children: 'Text',
    color: 'primary',
    size: 'small'
}

export const PrimaryMedium = InputTemplate.bind({});
PrimaryMedium.args = {
    children: 'Text',
    color: 'primary',
    size: 'medium'
}

export const PrimaryBig = InputTemplate.bind({});
PrimaryBig.args = {
    children: 'Text',
    color: 'primary',
    size: 'big'
}


export const SecondarySmall = InputTemplate.bind({});
SecondarySmall.args = {
    children: 'Text',
    color: 'secondary',
    size: 'small'
}

export const SecondaryMedium = InputTemplate.bind({});
SecondaryMedium.args = {
    children: 'Text',
    color: 'secondary',
    size: 'medium'
}

export const SecondaryBig = InputTemplate.bind({});
SecondaryBig.args = {
    children: 'Text',
    color: 'secondary',
    size: 'big'
}