export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "Kahvaltı",
		icon: require('../assets/images/breakfast.png')
	},
	{
		id: "02",
		category: "Öğle Yemeği",
		icon: require('../assets/images/lunch.png')
	},
	{
		id: "03",
		category: "Akşam Yemeği",
		icon: require('../assets/images/dinner.png')
	}
];

export const ingredients = [
	{
		id: 1,
		name: 'Domates',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/tomato.png")
	},
	{
		id: 2,
		name: 'Havuç',
		category: ['Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/carrot.jpg")
	},
	{
		id: 3,
		name: 'Soğan',
		category: ['Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/onion.jpg")
	},
	{
		id: 4,
		name: 'Yeşil Biber',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/green-pepper.png")
	},
	{
		id: 5,
		name: 'Kırmızı Biber',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/redchilli.png")
	},
	{
		id: 6,
		name: 'Dolmalık Biber',
		category: ['Akşam Yemeği'],
		image: require("../assets/images/bell-pepper.png")
	},
	{
		id: 7,
		name: 'Salatalık',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/cucumber.png")
	},
	{
		id: 8,
		name: 'Patates',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/potato.png")
	},
	{
		id: 9,
		name: 'Tavuk Göğsü',
		category: ['Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/chicken-breast.png")
	},
	{
		id: 10,
		name: 'Zeytinyağı',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/olive-oil.png")
	},
	{
		id: 11,
		name: 'Limon',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/lemon.png")
	},
	{
		id: 12,
		name: 'Balık',
		category: ['Akşam Yemeği'],
		image: require("../assets/images/fish.png")
	},
	{
		id: 13,
		name: 'Pirinç',
		category: ['Akşam Yemeği'],
		image: require("../assets/images/rice.png")
	},
	{
		id: 14,
		name: 'Yoğurt',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/yogurt.png")
	},
	{
		id: 15,
		name: 'Baharat',
		category: ['Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/spices.png")
	},
	{
		id: 16,
		name: 'Taze Fasulye',
		category: ['Akşam Yemeği'],
		image: require("../assets/images/green-beans.png")
	},
	{
		id: 17,
		name: 'Maydanoz',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/parsley.png")
	},
	{
		id: 18,
		name: 'Sarımsak',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/garlic.png")
	},
	{
		id: 19,
		name: 'Beyaz Peynir',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/feta.png")
	},
	{
		id: 20,
		name: 'Kekik',
		category: ['Kahvaltı', 'Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/thyme.png")
	},
	{
		id: 20,
		name: 'Dom. Salçası',
		category: ['Öğle Yemeği', 'Akşam Yemeği'],
		image: require("../assets/images/tomato-paste.png")
	},
];





export const recipeList = [
	{
		id: "01",
		name: "Tuna Tartare",
		image: require("../assets/images/tuna.png"),
		rating: "4.2",
		ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
		time: "40 Dakika",
		difficulty: "Orta",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
		steps: [
			"Dice the fresh tuna into small cubes.",
			"Finely chop the red onion and avocado.",
			"Mix the tuna, red onion, and avocado in a bowl.",
			"Drizzle lime juice over the mixture and gently toss.",
			"Serve chilled and enjoy!",
		],
	},
	{
		id: "02",
		name: "Tuna Tartare",
		image: require("../assets/images/tuna.png"),
		rating: "4.2",
		ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
		time: "40 Dakika",
		difficulty: "Kolay",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
		steps: [
			"Dice the fresh tuna into small cubes.",
			"Finely chop the red onion and avocado.",
			"Mix the tuna, red onion, and avocado in a bowl.",
			"Drizzle lime juice over the mixture and gently toss.",
			"Serve chilled and enjoy!",
		],
	},
	{
		id: "03",
		name: "Tuna Tartare",
		image: require("../assets/images/tuna.png"),
		rating: "4.2",
		ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
		time: "40 Dakika",
		difficulty: "Zor",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
		steps: [
			"Dice the fresh tuna into small cubes.",
			"Finely chop the red onion and avocado.",
			"Mix the tuna, red onion, and avocado in a bowl.",
			"Drizzle lime juice over the mixture and gently toss.",
			"Serve chilled and enjoy!",
		],
	},
	{
		id: "04",
		name: "Tuna Tartare",
		image: require("../assets/images/tuna.png"),
		rating: "4.2",
		ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
		time: "40 dakika",
		difficulty: "Zor",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
		steps: [
			"Dice the fresh tuna into small cubes.",
			"Finely chop the red onion and avocado.",
			"Mix the tuna, red onion, and avocado in a bowl.",
			"Drizzle lime juice over the mixture and gently toss.",
			"Serve chilled and enjoy!",
		],
	}
]

