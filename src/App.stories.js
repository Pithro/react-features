// YourComponent.stories.js

import React from 'react';
import App from './App';

// This default export determines where you story goes in the story list
export default {
    title: 'My App',
    component: App,
};

const Template = (args) => <App {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    /* the args you need here will depend on your component */
};
