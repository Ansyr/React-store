import MainPage from './index'
import './styles.module.scss';
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {ThemeDecorator} from "@/config/storybook/themeDecorator";
import {Theme} from "@/providers/Theme";


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
export const PrimaryLight = NavbarTemplate.bind({});

PrimaryLight.args = {}
PrimaryLight.decorators=[ThemeDecorator(Theme.LIGHT)]


export const PrimaryBlack = NavbarTemplate.bind({});

PrimaryBlack.args = {}
PrimaryBlack.decorators=[ThemeDecorator(Theme.DARK)]