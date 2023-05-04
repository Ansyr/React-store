import MainPage from './index'
import './styles.module.scss';
import {ComponentMeta, ComponentStory} from "@storybook/react";



export default {
    title: 'MainPage/MainPage',
    component: MainPage,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#333333'}
            ]
        }

    }

} as ComponentMeta<typeof MainPage>
const NavbarTemplate: ComponentStory<typeof MainPage> = (args) => <MainPage/>
export const Primary = NavbarTemplate.bind({});

Primary.args = {}
