// YourComponent.stories.js

import React from 'react';
import ButtonAppBar from './ButtonAppBar';

// This default export determines where you story goes in the story list
export default {
    title: 'ButtonAppBar',
    component: ButtonAppBar,
};

const Template = (args) => <ButtonAppBar {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    title: 'React features'
    /* the args you need here will depend on your component */
};
