import type {ComponentMeta, ComponentStory, Meta, StoryObj} from '@storybook/react';
import Navbar from "./Index";
import './styles.module.scss';



export default {
    title: 'header/Navbar',
    component: Navbar,
    parameters:{
        backgrounds:{
            default: 'BgBlack',
            values: [
                {name: 'BgBlack', value: '#333333'}
            ]
        }

    }

} as ComponentMeta<typeof Navbar>
const NavbarTemplate: ComponentStory<typeof Navbar> = (args) => <Navbar {...args}/>
export const Primary = NavbarTemplate.bind({});

Primary.args = {}
