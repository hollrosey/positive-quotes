// Create an array of quote and author objects
const positiveQuote = [
    {
        quote: `"No one has ever become poor by giving."`,
        author: `Anne Frank`
    },
    {
        quote: `"Kindness is a language that the deaf hear and the blind see."`,
        author: `Mark Twain`
    },
    {
        quote: `"Imperfection is beauty, madness is genius, and it's better to be absolutely ridiculous than absolutely boring."`,
        author: `Marilyn Monroe`
    },
    {
        quote: `"Our greatest glory is not in never falling, but in rising every time we fall."`,
        author: `Nelson Mandela`
    },
    {
        quote: `"You are loved for who you are, not for what you have."`,
        author: `Oscar Wilde`
    },
    {
        quote: `"To love yourself is the greatest revolution."`,
        author: `Nipsey Hussle`
    },
    {
        quote: `"The world is full of magic things, patiently waiting for our senses to grow sharper."`,
        author: `W.B. Yeats`
    },
    {
        quote: `"We may encounter many defeats but we must not be defeated."`,
        author: `Maya Angelou`
    },
];

// Create variables for button, quote and author
let newQuote = document.querySelector("#quote");
let newAuthor = document.querySelector("#author");
let quoteButton = document.querySelector("#quoteButton");

// Create random index generator
let randomQuote = Math.floor(Math.random() * positiveQuote.length);

// Create an event listener for a button click

// When button is clicked, return a new quote 