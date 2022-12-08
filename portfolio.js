import emoji from "react-easy-emoji";

export const greetings = {
	name: "Mahmood Ahmed",
	title: "Hi all, I'm Mahmood Ahmed",
	description:
		"Software engineer having an experience of building Cross Platform Mobile Apps With Flutter. 4+ years of professional work experience with multidisciplinary teams in international projects for Startups and with independent professionals in Development, User Experience and Product Design. Experienced team lead, ability to work in team and individual as well. I have a great passion for technology and always eager to learn new skills, discover new technology, and find ways I can help. I love design, coding, startup, business. I like to be challenged and get out of my comfort zone.",
	resumeLink:
		"https://drive.google.com/file/d/1dEefgIaDuqZzBgCV7tW-9gQahtWcZAgz/view?usp=sharing",
};

export const openSource = {
	githubUserName: "MahmoodAhmed01",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/mahmood.ahmed.1690/",
	instagram: "https://www.instagram.com/mahmood.ahmed.1690/",
	twitter: "https://twitter.com/Mahmood79956213",
	github: "https://github.com/MahmoodAhmed01",
	linkedin: "https://www.linkedin.com/in/mahmood-ahmed-83370495/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"CRAZY MOBILE APPLICATION DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	data: [
		{
			title: "Mobile Application Development",
			lottieAnimationFile: "/lottie/mobiledev.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Develop highly interactive mobile applications"
				),
				emoji("⚡ Progressive Mobile Applications"),
				emoji(
					"⚡ Integration of third party services such as Firebase / MongoDB / Digital Ocean"
				),
			],
			softwareSkills: [
				{
					skillName: "flutter",
					fontAwesomeClassname: "logos:flutter",
				},
				{
					skillName: "firebase",
					fontAwesomeClassname: "logos:firebase",
				},
				{
					skillName: "nodejs",
					fontAwesomeClassname: "logos:nodejs-icon",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "TypeScript",
					fontAwesomeClassname: "logos:typescript-icon",
				},
				{
					skillName: "npm",
					fontAwesomeClassname: "vscode-icons:file-type-npm",
				},
				{
					skillName: "sql-database",
					fontAwesomeClassname: "vscode-icons:file-type-sql",
				},
				{
					skillName: "mongoDB",
					fontAwesomeClassname: "vscode-icons:file-type-mongo",
				},
				{
					skillName: "git",
					fontAwesomeClassname: "logos:git-icon",
				},
				{
					skillName: "gitlab",
					fontAwesomeClassname: "logos:gitlab",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "UI Designing",
		progressPercentage: "100",
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Programming",
		progressPercentage: "100",
	},
];

export const educationInfo = [
	{
		schoolName: "Bahauddin Zakariya University",
		subHeader: "Master of Science in Computer Science",
		duration: "November 2015 - November 2017",
		desc: "Participated in the Mobile Application Development Competition Visio Spark (2K16).",
		descBullets: [
			"Programming Fundamentals",
			"Object Oriented Programming",
			"Operating Systems",
			"Data Structures & Algorithms",
			"Human Computer Interaction",
		],
	},
	{
		schoolName: "Bahauddin Zakariya University",
		subHeader: "Bachelor of Science in Computer Science",
		duration: "September 2013 - August 2015",
		desc: "Ranked top 10% in the programming. Took course about Programming, Software Engineering, Operating Systems.",
		descBullets: [
			"Object Oriented Programming",
			"Introduction to Database",
			"System Analysis & Design",
			"Data Structures & Algorithms",
			"Operating Systems",
		],
	},
	{
		schoolName: "Board of Intermediate Education",
		subHeader: "Intermediate of Computer Science",
		duration: "September 2011 - September 2013",
		desc: "",
		descBullets: [
			"Computer Studies",
		],
	},
];

export const experience = [
	{
		role: "Flutter Developer",
		company: "Bamrec",
		companylogo: "/img/icons/common/bamrec.png",
		headerColor: '#F7941D',
		date: "February 2020 – Present",
		desc: "In my role as a mobile application developer at Bamrec, I proved to be an efficient, enthusiastic, and creative developer. My value quickly became apparent to Bamrec’s shareholders after I help the team to developed a mobile applications using flutter.",
		descBullets: [
			"Firebase Database",
			"REST api integration",
			"Mobx for state management",
			"Shifting to GetX from Mobx for state management",
			"Firebase cloud functions",
			"Push Notifications",
			"Deep linking",
		],
	},
	{
		role: "React Native Developer",
		company: "Tbox",
		companylogo: "/img/icons/common/tbox.png",
		headerColor: '#D20205',
		date: "February 2018 – January 2020",
		desc: "",
		descBullets: [
			"Firebase Database",
			"REST api integration",
			"Redux for state management",
			"Firebase cloud functions",
			"Push Notifications",
			"Deep linking",
			"Took initiative to help redesign and implement various screens"
		],
	},
	{
		role: "Software Engineer Intern",
		company: "Vzotech",
		companylogo: "/img/icons/common/vzo.png",
		headerColor: '#1977B4',
		date: "July 2017 – December 2017",
		desc: "",
		descBullets: [
			"Android activity life cycle",
			"Creating Restful APIs",
			"Making connection with database using hapi server",
			"Firebase"
		],

	},
];

export const projects = [
	{
		name: "Bamrec Events",
		desc: "Explore the upcoming events, parents can register their kids for some of them! They can see their kid's activities during events and much more.",
		link: "https://apps.apple.com/us/app/bamrec-events/id1437166908",
		appLogo: "/img/icons/common/bamrec.png",

	},
	{
		name: "Bamrec Organizer",
		desc: "Bamrec Organizer App empowers organizer and mentors to create and manage different events. It allows to see the statistics of each event.",
		link: "https://apps.apple.com/us/app/bamrec-organizer/id1453497890",
		appLogo: "/img/icons/common/bamrec.png",
	},
	{
		name: "Usalak",
		desc: "Users can order grocery items while sitting at home. They can see their nearby shops and can place orders. They also keep track of orders. Users can see latest offers, discounts and much more.",
		link: "https://play.google.com/store/apps/details?id=com.usalak",
		appLogo: "/img/icons/common/bamrec.png",
	},
	{
		name: "Clubenz",
		desc: "Clubenz app is your digital hub for all automobile services providers in Egypt specialised in Mercedes. It is putting all the information about all these providers between your hands including their working hours and latest offers.",
		link: "https://apps.apple.com/us/app/clubenz/id1547165477",
		appLogo: "/img/icons/common/bamrec.png",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];
