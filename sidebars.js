/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '地理',
      link: {
        type: 'generated-index',
        title: '地理',
        description: '地理',
        keywords: ['geography'],
      },
      items: ['人界','天界','狱界'],
    },
    {
      type: 'category',
      label: '势力',
      link: {
        type: 'generated-index',
        title: '势力',
        description: '势力',
        keywords: ['group'],
      },
      items: ['九州帝国','帝国联盟','贤者之塔','山脉同盟','精灵乡','天空之都','星蓝共和国'],
    },
  ],
};

module.exports = sidebars;
