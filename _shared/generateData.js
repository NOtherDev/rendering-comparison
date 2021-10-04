const template = {
    price: 22495,
    fuelEfficiencyCity: 8.5,
    fuelEfficiencyHwy: 7.1,
    engine: [
        "1.4L MultiAir",
        "16V I-4 Turbo"
    ],
    horsepower: 135
};

const images = [
    "https://imgur.com/edOjtEC.png",
    "https://imgur.com/SKZolYE.png",
    "https://imgur.com/gUQNKPd.png",
];

const result = [];

for (let i = 0; i < 120; ++i) {
    result.push({...template, id: `id_${i}`, imageUrl: images[i % 3]})
}

console.log(JSON.stringify(result, null, 2));
