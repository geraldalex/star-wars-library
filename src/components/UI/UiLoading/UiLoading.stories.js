import UiButton from './UiLoading'

export default {
    title:'Ui-Kit/UiLoading',
    component: UiButton
}

const Template = (args) => <UiLoading {...args} />;

const props = {
    theme : 'black',
    isShadow: false,
    classes:''
}

//👇 Each story then reuses that template
export const Black = Template.bind({});
Black.args = {
    ...props,
 
   theme: 'black'
};

export const Blue = Template.bind({});
Blue.args = {
    ...props,
 
   theme: 'blue'
};

export const White = Template.bind({});
White.args = {
    ...props,
 
   theme: 'white',
   isShadow:true
};