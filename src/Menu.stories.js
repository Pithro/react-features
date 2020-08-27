// YourComponent.stories.js

import React from 'react';
import Menu from './Menu';

// This default export determines where you story goes in the story list
export default {
    title: 'My Menu',
    component: Menu,
};

const Template = (args) => <Menu {...args} />;

export const FirstMenuStory = Template.bind({});

FirstMenuStory.args = {
    /* the args you need here will depend on your component */
};
