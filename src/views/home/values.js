/* 新闻走马灯数据结构 */
const newsList = [
  {
    key: 1,
    href: "javascript:void(0);",
    value: "立项四年，腾讯互娱如何做编程教育",
  },
  {
    key: 2,
    href: "javascript:void(0);",
    value: "2021腾讯追梦营嘉年华圆满落幕",
  },
  {
    key: 3,
    href: "javascript:void(0);",
    value: "腾讯编程课进村，这是孩子们创作的“APP”",
  },
  {
    key: 4,
    href: "javascript:void(0);",
    value: "腾讯编程课进村，这是孩子们创作的“APP”",
  },
];

/* 轮播图数据结构 */
const carouselList = [
  {
    key: 1,
    picture:
      "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_2huzgbj4onv.png",
    title: "第四届追梦营",
    href: "javascript:void(0);",
  },
  {
    key: 2,
    picture:
      "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20221017_i1n62bthmuobanner.png",
    title: "深圳创客节创意编程赛",
    href: "javascript:void(0);",
  },
  {
    key: 3,
    picture:
      "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220901_rz0z7qqh2gtgebanner.jpg",
    title: "深圳TGE虚拟机器人挑战赛",
    href: "javascript:void(0);",
  },
  {
    key: 4,
    picture:
      "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_9e0choci7rg_20220909101245.jpg",
    index: 3,
    title: "编程与人工智能活动",
    href: "javascript:void(0);",
  },
  {
    key: 5,
    picture:
      "https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20211230_u9kh06gxj4a79e15a997c42203c515773168a900f9.jpg",
    index: 4,
    title: "腾讯游戏年度故事片",
    href: "javascript:void(0);",
  },
];

/* 卡片面板数据结构 */
/* childNodes 数据点击之后在获取，获取后插入到 childNodes 中缓存，减少首页请求 */
const cardPanelList = [
  {
    key: 1,
    index: 0,
    picture: require("@/assets/main/cardpanel_0.png"),
    title: "创意实验室",
    minorTitle: "6+岁创造力图形化",
    childNodes: {
      details: {
        hdTitle: "像搭积木一样编程创作",
        midTitle: "创意实验室",
        midIntroduce:
          "让学编程和搭积木一样简单，有效帮助孩子形成编程思维，锻炼逻辑思维，轻松制作有趣有料的编程项目，发挥自己的无限创意。",
        oper: "立即创作",
        operLink: null,
        operExtra: null,
        more: "了解更多",
        moreLink: "https://coding.qq.com/xgame-pc-home/",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: {
        title: "应用截图",
        exampleGroup: [
          {
            picture: require("@/assets/main/example_pic_1.png"),
            introduce: "妙趣剧情，学习不枯燥",
          },
          {
            picture: require("@/assets/main/example_pic_2.png"),
            introduce: "编程闯关，探索编程奥秘",
          },
          {
            picture: require("@/assets/main/example_pic_3.png"),
            introduce: "知识解锁，收获丰富趣味知识",
          },
        ],
      },
    },
  },
  {
    key: 2,
    index: 1,
    picture: require("@/assets/main/cardpanel_1.png"),
    title: "Python实验室",
    minorTitle: "7+岁逻辑思维Python",
    childNodes: {
      details: {
        hdTitle: "通用易读的编程语言",
        midTitle: "Python实验室",
        midIntroduce:
          "从图形化编程到文本编程，从AI应用到硬件物联，首创带有舞台区的编辑模式，运用动画和声音制作游戏，全方面体会Python语言的乐趣。",
        oper: "立即创作",
        operLink: null,
        operExtra: null,
        more: "了解更多",
        moreLink: "https://coding.qq.com/xgame-pc-home/",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: {
        title: "应用截图",
        exampleGroup: [
          {
            picture: require("@/assets/main/example_pic_1.png"),
            introduce: "妙趣剧情，学习不枯燥",
          },
          {
            picture: require("@/assets/main/example_pic_2.png"),
            introduce: "编程闯关，探索编程奥秘",
          },
          {
            picture: require("@/assets/main/example_pic_3.png"),
            introduce: "知识解锁，收获丰富趣味知识",
          },
        ],
      },
    },
  },
  {
    key: 3,
    index: 2,
    picture: require("@/assets/main/cardpanel_2.png"),
    title: "腾讯扣叮-编程第一课",
    minorTitle: "6-9岁编程启蒙计算思维",
    childNodes: {
      details: {
        hdTitle: "专为6-9岁孩子定制的编程启蒙App",
        midTitle: "腾讯扣叮-编程第一课",
        midIntroduce:
          "腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。",
        oper: "立即体验",
        operLink: null,
        operExtra: {
          icon: "el-icon-mobile",
          qrcode: require("@/assets/main/qrCode_2.png"),
          tips: "扫码下载，立即体验",
        },
        more: "了解更多",
        moreLink: "",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: {
        title: "应用截图",
        exampleGroup: [
          {
            picture: require("@/assets/main/example_pic_1.png"),
            introduce: "妙趣剧情，学习不枯燥",
            picLink: "",
          },
          {
            picture: require("@/assets/main/example_pic_2.png"),
            introduce: "编程闯关，探索编程奥秘",
            picLink: "",
          },
          {
            picture: require("@/assets/main/example_pic_3.png"),
            introduce: "知识解锁，收获丰富趣味知识",
            picLink: "",
          },
        ],
      },
    },
  },
  {
    key: 4,
    index: 3,
    picture: require("@/assets/main/cardpanel_3.png"),
    title: "3D实验室",
    minorTitle: "6岁+创造力3D立体",
    childNodes: {
      details: {
        hdTitle: "创意实验室的3D版本",
        midTitle: "3D实验室",
        midIntroduce:
          "扣叮和艾兰岛共同出品，学会了创意实验室就可以轻松上手，培养空间思维，制作3D创意作品。也可前往艾兰岛官网体验更专业的游戏编辑器。",
        oper: "立即创作",
        operLink: null,
        operExtra: null,
        more: null,
        moreLink: "",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: null,
    },
  },
  {
    key: 5,
    index: 4,
    picture: require("@/assets/main/cardpanel_4.png"),
    title: "人工智能实验室",
    minorTitle: "10+岁前沿科技走进AI",
    childNodes: {
      details: {
        hdTitle: "专为6-9岁孩子定制的编程启蒙App",
        midTitle: "腾讯扣叮-编程第一课",
        midIntroduce:
          "腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。",
        oper: "立即体验",
        operLink: null,
        operExtra: null,
        more: "了解更多",
        moreLink: "https://coding.qq.com/xgame-pc-home/",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: {
        title: "应用截图",
        exampleGroup: [
          {
            picture: require("@/assets/main/example_pic_1.png"),
            introduce: "妙趣剧情，学习不枯燥",
          },
          {
            picture: require("@/assets/main/example_pic_2.png"),
            introduce: "编程闯关，探索编程奥秘",
          },
          {
            picture: require("@/assets/main/example_pic_3.png"),
            introduce: "知识解锁，收获丰富趣味知识",
          },
        ],
      },
    },
  },
  {
    key: 6,
    index: 5,
    picture: require("@/assets/main/cardpanel_5.png"),
    title: "游戏实验室",
    minorTitle: "6-8岁创意游戏零基础",
    childNodes: {
      details: {
        hdTitle: "专为6-9岁孩子定制的编程启蒙App",
        midTitle: "腾讯扣叮-编程第一课",
        midIntroduce:
          "腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。",
        oper: "立即体验",
        operLink: null,
        operExtra: null,
        more: "了解更多",
        moreLink: "https://coding.qq.com/xgame-pc-home/",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: {
        title: "应用截图",
        exampleGroup: [
          {
            picture: require("@/assets/main/example_pic_1.png"),
            introduce: "妙趣剧情，学习不枯燥",
          },
          {
            picture: require("@/assets/main/example_pic_2.png"),
            introduce: "编程闯关，探索编程奥秘",
          },
          {
            picture: require("@/assets/main/example_pic_3.png"),
            introduce: "知识解锁，收获丰富趣味知识",
          },
        ],
      },
    },
  },
  {
    key: 7,
    index: 6,
    picture: require("@/assets/main/cardpanel_6.png"),
    title: "艺术(p5)实验室",
    minorTitle: "7+岁艺术表达数理知识",
    childNodes: {
      details: {
        hdTitle: "专为6-9岁孩子定制的编程启蒙App",
        midTitle: "腾讯扣叮-编程第一课",
        midIntroduce:
          "腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。",
        oper: "立即体验",
        operLink: null,
        operExtra: null,
        more: "了解更多",
        moreLink: "https://coding.qq.com/xgame-pc-home/",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: {
        title: "应用截图",
        exampleGroup: [
          {
            picture: require("@/assets/main/example_pic_1.png"),
            introduce: "妙趣剧情，学习不枯燥",
          },
          {
            picture: require("@/assets/main/example_pic_2.png"),
            introduce: "编程闯关，探索编程奥秘",
          },
          {
            picture: require("@/assets/main/example_pic_3.png"),
            introduce: "知识解锁，收获丰富趣味知识",
          },
        ],
      },
    },
  },
  {
    key: 8,
    index: 7,
    picture: require("@/assets/main/cardpanel_7.png"),
    title: "硬件实验室",
    minorTitle: "6+岁软硬结合创客教育",
    childNodes: {
      details: {
        hdTitle: "专为6-9岁孩子定制的编程启蒙App",
        midTitle: "腾讯扣叮-编程第一课",
        midIntroduce:
          "腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。",
        oper: "立即体验",
        operLink: null,
        operExtra: null,
        more: "了解更多",
        moreLink: "https://coding.qq.com/xgame-pc-home/",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: {
        title: "应用截图",
        exampleGroup: [
          {
            picture: require("@/assets/main/example_pic_1.png"),
            introduce: "妙趣剧情，学习不枯燥",
          },
          {
            picture: require("@/assets/main/example_pic_2.png"),
            introduce: "编程闯关，探索编程奥秘",
          },
          {
            picture: require("@/assets/main/example_pic_3.png"),
            introduce: "知识解锁，收获丰富趣味知识",
          },
        ],
      },
    },
  },
  {
    key: 9,
    index: 8,
    picture: require("@/assets/main/cardpanel_8.png"),
    title: "JS实验室",
    minorTitle: "7+岁前端开发JavaScript",
    childNodes: {
      details: {
        hdTitle: "专为6-9岁孩子定制的编程启蒙App",
        midTitle: "腾讯扣叮-编程第一课",
        midIntroduce:
          "腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一课”，通过趣味的积木编程闯关，让孩子学习编程更简单、更有趣、更高效。",
        oper: "立即体验",
        operLink: null,
        operExtra: null,
        more: "了解更多",
        moreLink: "https://coding.qq.com/xgame-pc-home/",
        mediaType: "video",
        mediaData: [
          {
            type: "video/mp4",
            source: require("@/assets/main/demo_video.mp4"),
          },
        ],
      },
      examples: {
        title: "应用截图",
        exampleGroup: [
          {
            picture: require("@/assets/main/example_pic_1.png"),
            introduce: "妙趣剧情，学习不枯燥",
          },
          {
            picture: require("@/assets/main/example_pic_2.png"),
            introduce: "编程闯关，探索编程奥秘",
          },
          {
            picture: require("@/assets/main/example_pic_3.png"),
            introduce: "知识解锁，收获丰富趣味知识",
          },
        ],
      },
    },
  },
];

/* 卡片面板侧边栏Icon背景色组 */
const siderBgColorList = [
  "rgb(251, 232, 194)",
  "rgb(193, 223, 251)",
  "rgb(246, 202, 219)",
  "rgb(187, 255, 245)",
  "rgb(193, 244, 236)",
  "rgb(220, 199, 251)",
  "rgb(246, 202, 219)",
  "rgb(193, 244, 236)",
  "rgb(251, 232, 194)",
];

export const VALUES = {
  newsList,
  carouselList,
  cardPanelList,
  siderBgColorList,
};
