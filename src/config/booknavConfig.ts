import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "test",
		name: "测试",
		icon: "material-symbols:code-rounded",
		desc: "这只是个测试板块",
		weight: -1,
		items: [
			{
				title: "测试",
				url: "https://example.com",
				desc: "测试",
				icon: "material-symbols:code-rounded",
				weight: -1,
			},
		],
	},
  	{
		id: "teach",
		name: "教育",
		icon: "fa7-solid:chalkboard-teacher",
		desc: "教育相关网站",
		weight: 9000,
		items: [
			{
				title: "易查分",
				url: "https://www.yichafen.com/v20/index",
				desc: "让学校和老师轻松拥有查分系统",
				icon: "/assets/images/linklogo/yichafen.png",
				weight: 1,
			},
			{
				title: "智学网",
				url: "https://www.zhixue.com",
				desc: "让学习更简单",
				icon: "/assets/images/linklogo/zhixue.png",
				weight: 1,
			},
			{
				title: "云学AI阅",
				url: "https://yunxuexin.com:8098/#/Login",
				desc: "AI赋能阅卷，让教育更美好",
				icon: "https://yunxuexin.com:8098/logo.png",
				weight: 1,
			},
			{
				title: "七天网络",
				url: "https://www.7net.cc/build/home/index/index.html",
				desc: "让数据驱动个性化学习发展，致力于“为每个人创建个性化学习空间”",
				icon: "/assets/images/linklogo/7net.png",
				weight: 1,
			},
			{
				title: "育路通阅卷系统",
				url: "https://yue.hbyltedu.com",
				desc: "考试服务云平台",
				icon: "/assets/images/linklogo/hbyltedu.png",
				weight: 1,
			},
            {
				title: "华腾睿云阅卷系统（旧）",
				url: "https://yj.xuepingedu.com/tchclassroom/#/login",
				desc: "华腾睿云专注K12领域，为教育主管部门、教研单位及学校提供“智慧教育检测方案设计与实施”综合服务，聚焦数据采集、教学诊断、教育测量与考试评价，为用户开展教学诊断、诊治提供依据。",
				icon: "/assets/images/linklogo/huatengruiyun.png",
				weight: 1,
			},
            {
				title: "华腾睿云阅卷系统（新）",
				url: "https://yj.xuepingedu.com/#/login",
				desc: "华腾睿云专注K12领域，为教育主管部门、教研单位及学校提供“智慧教育检测方案设计与实施”综合服务，聚焦数据采集、教学诊断、教育测量与考试评价，为用户开展教学诊断、诊治提供依据。",
				icon: "/assets/images/linklogo/huatengruiyun.png",
				weight: 1,
			},
            {
				title: "好分数",
				url: "https://www.haofenshu.com/home",
				desc: "好分数精准教学",
				icon: "/assets/images/linklogo/haofenshu.png",
				weight: 1,
			},
		],
	},
];
