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
		id: "exam",
		name: "考试",
		icon: "fa7-solid:chalkboard-teacher",
		desc: "考试相关网站",
		weight: 1,
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
				title: "好分数",
				url: "https://www.haofenshu.com/home",
				desc: "好分数精准教学",
				icon: "/assets/images/linklogo/haofenshu.png",
				weight: 1,
			},
            {
				title: "达美嘉",
				url: "http://51baxue.com/login/",
				desc: "达美嘉教学诊断&质量监测平台",
				icon: "/assets/images/linklogo/domega.png",
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
		],
	},
	{
		id: "seewo",
		name: "希沃",
		icon: "fa7-solid:blackboard",
		desc: "希沃相关网站",
		weight: 1,
		items: [
			{
				title: "希沃·seewo",
				url: "https://www.seewo.com",
				desc: "教育数字化应用及服务提供商",
				icon: "/assets/images/linklogo/seewo.png",
				weight: 1,
			},
			{
				title: "希沃校园设备运维管理系统（希沃集控）",
				url: "https://campus.seewo.com/hugo",
				desc: "希沃集控2.0",
				icon: "/assets/images/linklogo/seewohugo.png",
				weight: 1,
			},
			{
				title: "希沃魔方·数字基座",
				url: "https://mf.seewo.com",
				desc: "统筹管理，开放融合，数据决策",
				icon: "/assets/images/linklogo/seewomofangyun.png",
				weight: 1,
			},
			{
				title: "希沃白板官网",
				url: "https://easinote.seewo.com",
				desc: "为互动教学而生",
				icon: "/assets/images/linklogo/seewoeasinote.png",
				weight: 1,
			},
			{
				title: "希沃白板Linux官网",
				url: "https://easinote.seewo.com/linux",
				desc: "为互动教学而生",
				icon: "/assets/images/linklogo/seewoeasinote.png",
				weight: 1,
			},
			{
				title: "希沃白板网页版",
				url: "https://enweb3.seewo.com",
				desc: "为互动教学而生",
				icon: "/assets/images/linklogo/seewoeasinoteweb.png",
				weight: 1,
			},
			{
				title: "希沃易+（希沃软件下载站）",
				url: "https://e.seewo.com",
				desc: "专注于教育数字化综合解决方案",
				icon: "/assets/images/linklogo/seewoe.png",
				weight: 1,
			},
			{
				title: "希沃AI备课",
				url: "https://bloom.seewo.com",
				desc: "和AI一起迸发灵感",
				icon: "/assets/images/linklogo/seewobloom.png",
				weight: 1,
			},
			{
				title: "希沃AI百宝箱（旧）",
				url: "https://easinote.seewo.com/ai-chat/app",
				desc: "希沃百宝箱",
				icon: "/assets/images/linklogo/seewoaibox.png",
				weight: 1,
			},
			{
				title: "希沃AI百宝箱（新）",
				url: "https://ai.seewo.com/ai-nexus/chat",
				desc: "希沃智能体",
				icon: "/assets/images/linklogo/seewoaibox.png",
				weight: 1,
			},
			{
				title: "希沃云盘",
				url: "https://pinco.seewo.com/teacher/main/drive/resource",
				desc: "教师个人云盘",
				icon: "/assets/images/linklogo/seewopincodrive.png",
				weight: 1,
			},
			{
				title: "希沃AI教师空间",
				url: "https://t.seewo.com",
				desc: "魔方·智慧教学",
				icon: "/assets/images/linklogo/seewoaiteacherworkspace.png",
				weight: 1,
			},
			{
				title: "希沃学苑",
				url: "https://study.seewoedu.com",
				desc: "希沃学苑,教师专属信息化教学技能提升平台,致力于K12领域信息化教学技能培训,为广大教师提供微课制作、信息化教学软件体系化课程,分享名师教学经验,共享优质教育资源",
				icon: "/assets/images/linklogo/seewostudyedu.png",
				weight: 1,
			},
			{
				title: "希沃软件历史版本收集库",
				url: "https://swapp.lazyerpaper.top/packages",
				desc: "希沃软件历史版本收集库",
				icon: "/assets/images/linklogo/seewo.png",
				weight: 1,
			},
			{
				title: "希沃集控云控配置获取工具（镜像站）",
				url: "https://hugo.swhelper.dynv6.net",
				desc: "希沃集控云控配置获取工具（镜像站）",
				icon: "/assets/images/linklogo/seewo.png",
				weight: 1,
			},
		],
	},
];
