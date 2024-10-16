var fortunes  = [
    "conquer your fears or they will conquer you",
    "rivers need springs",
    "do not fear what you dot know",
    "you will have a pleasant suprise",
    "whenever possible, keep it simple"
];

module.exports.getFortune = () => {
    var fortune = Math.floor(Math.random() * fortunes.length);
    return fortunes[fortune];
};