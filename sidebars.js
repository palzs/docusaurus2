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
      type: 'doc',
      id: 'intro', // 文档 ID
      label: '首页', // 侧边栏标签
    },
    {
      type: 'category',
      label: '地理',
      link: {
        type: 'generated-index',
        title: '地理',
        description: '地理',
        keywords: ['geography'],
      },
      items: [        
              {
                type: 'category',
                label: '人界',
                link: {
                        type: 'doc', 
                        id: '地理/人界/人界'},
                items: [
                        '地理/人界/九州大陆',
                        '地理/人界/西方大陆',
                        '地理/人界/封印大陆'
                       ],
              },
              '地理/天界',
              '地理/狱界'],
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
      items: ['势力/九州帝国',
              '势力/帝国联盟',
              '势力/贤者之塔',
              '势力/山脉同盟',
              '势力/精灵乡',
              '势力/天空之都',
              '势力/星蓝共和国'],
    },
    {
      type: 'category',
      label: '种族',
      link: {
        type: 'generated-index',
        title: '种族',
        description: '种族',
        keywords: ['species'],
      },
      items: ['种族/人族',
              '种族/妖族',
              '种族/光灵族',
              '种族/恶魔族'],
    },
    {
      type: 'category',
      label: '语言',
      link: {
        type: 'generated-index',
        title: '语言',
        description: '语言',
        keywords: ['language'],
      },
      items: ['语言/通用语',
              '语言/太古语',
              '语言/九州语',
              '语言/星蓝语',
              '语言/光灵语',
              '语言/炼狱语'],
    },
    {
      type: 'category',
      label: '体系',
      link: {
        type: 'generated-index',
        title: '体系',
        description: '体系',
        keywords: ['system'],
      },
      items: ['体系/修真体系',
              '体系/魔法体系',
              '体系/科学体系'],
    },
    {
      type: 'category',
      label: '历史',
      link: {
        type: 'generated-index',
        title: '历史',
        description: '历史',
        keywords: ['history'],
      },
      items: ['历史/原初世界史',
              '历史/三界史',
              '历史/新宇宙史'],
    },
    {
      type: 'category',
      label: '历法',
      link: {
        type: 'generated-index',
        title: '历法',
        description: '历法',
        keywords: ['calendar'],
      },
      items: ['历法/人界通用历',
              '历法/九州历',
              '历法/光灵历',
              '历法/炼狱历'],
    },
    {
      type: 'category',
      label: '实体',
      link: {
        type: 'generated-index',
        title: '实体',
        description: '实体',
        keywords: ['object'],
      },
      items: ['实体/虚创世机构',
              '实体/真灭世机构',
              '实体/天书',
              '实体/地书',
              '实体/人书',
              '实体/太上宝库',
              '实体/诛仙',
              '实体/七叶宝树',
              '实体/河洛天启',
              '实体/浑沌钟',
              '实体/连山鞭',
              '实体/轩辕剑',
              '实体/落日弓',
              '实体/初枪',
              '实体/化玺',
              '实体/空剑',
              '实体/全知之眼',
              '实体/贤者之石',
              '实体/神盾',
              '实体/天车',
              '实体/圣环',
              '实体/神枪',
              '实体/世界树',
              '实体/神座',
              '实体/乐园',
              '实体/原罪兵装',
              '实体/八卦盘',
              '实体/六道转轮',
              '实体/靛空星穹珠',
              '实体/血之月',
              '实体/炼狱大结界',
              '实体/樱殇',
              '实体/银之钥',
              '实体/九天玄剑阵',
              '实体/建御雷封印',
              '实体/衡天日晷',
              '实体/天球仪',
              '实体/原子时计',
              '实体/装甲',
              '实体/人工岛Genesis'],
    },
  ],
};

module.exports = sidebars;
