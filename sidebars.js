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
      label: '测试',
      link: {
        type: 'generated-index',
        title: 'Docusaurus 教程',
        description: '学习最重要的 Docusaurus 概念！',
        slug: '/index',
      },
      items: ['intro'],
    },
  ],
};

module.exports = sidebars;
