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
      items: ['地理/人界','地理/天界','地理/狱界'],
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
      items: ['势力/九州帝国','势力/帝国联盟','势力/贤者之塔','势力/山脉同盟','势力/精灵乡','势力/天空之都','势力/星蓝共和国'],
    },
  ],
};

module.exports = sidebars;
