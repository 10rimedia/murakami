const quotsMurakami = ["If you only read the books that everyone else is reading, you can only think what everyone else is thinking. - Norwegian Wood",
    "Memories warm you up from the inside. But they also tear you apart. - Kafka on the Shore",
    "What a terrible thing it is to wound someone you really care for and to do it so unconsciously. - Norwegian Wood",
    "I think you still love me, but we can't escape the fact that I'm not enough for you. - South of the Border, West of the Sun",
    "Whatever it is you're seeking won't come in the form you're expecting. - Kafka on the Shore",
    "Closing your eyes isn't going to change anything. Nothing's going to disappear just because you can't see what's going on. - Kafka on the Shore",
    "If you're young and talented, it's like you have wings. - Hard-Boiled Wonderland and the End of the World",
    "Spend your money on the things money can buy. Spend your time on the things money can't buy. - Money",
    "I'm not sure what I'm looking for. But I'll know it when I see it. - Norwegian Wood",
    "Silence, I discover, is something you can actually hear. - Kafka on the Shore",
    "Nobody likes being alone that much. I don't go out of my way to make friends, that's all. It just leads to disappointment. - Norwegian Wood",
    "It's not that the world is so sad, it's that people are so unkind. - Kafka on the Shore",
    "Lost opportunities, lost possibilities, feelings we can never get back. That's part of what it means to be alive. - Kafka on the Shore",
    "In dreams, you don't need to make any distinctions between things. Not at all. Boundaries don't exist. - Kafka on the Shore",
    "I'm not going to die, sweetheart. I'm going to stay here and wait for you. - Sputnik Sweetheart",
    "When you come out of the storm, you won't be the same person who walked in. - Kafka on the Shore",
    "Memories and thoughts age, just as people do. But certain thoughts can never age, and certain memories can never fade. - South of the Border, West of the Sun",
    "Anyone who falls in love is searching for the missing pieces of themselves. - What I Talk About When I Talk About Running",
    "But who can say what's best? That's why you need to grab whatever chance you have of happiness where you find it, and not worry about other people too much. - Norwegian Wood",
    "It's like Tolstoy said. Happiness is an allegory, unhappiness a story. - Kafka on the Shore"
    ];
const generateMessage = () => {
const button = document.getElementById('message');
const num = Math.floor(Math.random() * quotsMurakami.length);
const massage = `"${quotsMurakami[num]}"`;
return button.innerHTML = massage;
}
console.log(generateMessage());
// Example JavaScript code
let greeting = "Hello, World!";
console.log(greeting);
