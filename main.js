// Create an array of quote and author objects
const positiveQuotes = [
    {
        quote: `"No one has ever become poor by giving."`,
        author: `- Anne Frank`
    },
    {
        quote: `"Kindness is a language that the deaf hear and the blind see."`,
        author: `- Mark Twain`
    },
    {
        quote: `"Imperfection is beauty, madness is genius, and it's better to be absolutely ridiculous than absolutely boring."`,
        author: `- Marilyn Monroe`
    },
    {
        quote: `"Our greatest glory is not in never falling, but in rising every time we fall."`,
        author: `- Nelson Mandela`
    },
    {
        quote: `"You are loved for who you are, not for what you have."`,
        author: `- Oscar Wilde`
    },
    {
        quote: `"To love yourself is the greatest revolution."`,
        author: `- Nipsey Hussle`
    },
    {
        quote: `"The world is full of magic things, patiently waiting for our senses to grow sharper."`,
        author: `- W.B. Yeats`
    },
    {
        quote: `"We may encounter many defeats but we must not be defeated."`,
        author: `- Maya Angelou`
    },
];

// Create variables for button, quote and author
const quoteElement = document.querySelector("#quote");
const authorElement = document.querySelector("#author");
const quoteButton = document.querySelector("#quoteButton");

// Function that chooses a random quote and displays it
function generateQuote() {
  // Get random index within quotes array
  const randomIndex = Math.floor(Math.random() * positiveQuotes.length);

  // Access quote and author using random index
  const selectedQuote = positiveQuotes[randomIndex];

  // Update elements with new quote and author
  quoteElement.textContent = selectedQuote.quote;
  authorElement.textContent = selectedQuote.author;
}

// Add event listener to the button to trigger the quote generation
quoteButton.addEventListener("click", generateQuote);

