const quotes = [
    ["Looking for the meaning of life, one man can discover the order of the universe. To discover the truth, to achieve. A higher spiritual state that is the true meaning of ninja", "Masaaki Hatsumi"],
    ["A Ninja doesn't save himself. He protects those who cannot protect themselves", "Cole Brookstone"],
    ["We fight twice armed, if we fight with honor", "Plato"],
    ["You can only fight the way you practice", "Miyamoto Musashi"],
    ["Don't waste yout time looking back, you aren't going that way", "Ragnar Lothbrok"],
    ["Step by step, walk the thouasand-mile road", "Miyamoto Mushashi"],
    ["In the midst of chaos, there is also opportunity", "Sun Tzu"],
    ["Repeated practice brings proper use of power", "Wing Chun"],
    ["The way, is training", "Miyamoto Musashi"],
    ["True victory does not come from defeating an enemy. True victory comes from giving love and changing an enemies heart", "Morihei Ueshiba"]
];

const randomMessage = () => {
    let num = Math.floor(Math.random() * 10);
    let message = quotes[num][0];
    let author = quotes[num][1];
    console.log(`${message} \n................. ${author}`);
}

randomMessage();