import {ComponentMeta, ComponentStory} from "@storybook/react";
import Card from "@/components/ui-kit/Card/index";

export default {
    title: 'ui-kit/Card',
    component: Card,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#333333'}
            ]
        }

    }

} as ComponentMeta<typeof Card>


const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args}/>

export const PrimarySmall = CardTemplate.bind({});

PrimarySmall.args = {
    children:'12312312',
    size: 'small',
    theme: 'outline'
}

export const PrimaryMedium = CardTemplate.bind({});

PrimaryMedium.args = {
    children: <img src={"https://e7.pngegg.com/pngimages/122/393/png-clipart-man-wearing-white-crew-neck-t-shirt-and-black-shorts-t-shirt-sportswear-clothing-sports-wear-tshirt-white.png"}/>,
    size: 'medium',
    theme: 'outline'
}

export const PrimaryLarge = CardTemplate.bind({});

PrimaryLarge.args = {
    children:'12312312',
    size: 'large',
    theme: 'outline',
}


export const FullWidth = CardTemplate.bind({});

FullWidth.args = {
    children:'12312312',
    size: 'medium',
    theme: 'outline',
    fullWidth: true,
}