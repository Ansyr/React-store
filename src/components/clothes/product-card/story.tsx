import {ComponentMeta, ComponentStory} from "@storybook/react";
import ProductCard from "@/components/clothes/product-card/index";

export default {
    title: 'ui-kit/ProductCard',
    component: ProductCard,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#333333'}
            ]
        }

    }

} as ComponentMeta<typeof ProductCard>


const ProductCardTemplate: ComponentStory<typeof ProductCard> = () => <ProductCard/>

export const PrimarySmall = ProductCardTemplate.bind({});

PrimarySmall.args = {

}

