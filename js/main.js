// Create div in html has id called box  
for (let i = 1; i <= 700 ; i++) {
    let myHeader = document.createElement("div");
    myHeader.setAttribute("id",`box`);
    document.body.appendChild(myHeader)
}

// Select Elements 
var quoteBtn = document.getElementById("qBtn");
var quoteText = document.querySelector(".quote");
var writer = document.getElementById("writer")


// array contains a set of Quotes 
var quotes = [{

    quoteText : `"The best revenge is massive success."`,
    writer: `--Frank Sinatra`

}, {

    quoteText : `"Be yourself; everyone else is already taken."`,
    writer: `--Oscar Wilde`

}, {

    quoteText : `"So many books, so little time."`,
    writer: `--Frank Zappa`

}, {

    quoteText : `"A room without books is like a body without a soul."`,
    writer: `--Marcus Tullius Cicero`

}, {

    quoteText : `"You only live once, but if you do it right, once is enough."`,
    writer: `--Mae West`

}, {

    quoteText : `"Be the change that you wish to see in the world."`,
    writer: `--Mahatma Gandhi`

},
]


// onclick function 
quoteBtn.addEventListener("click",function() {
    var quoteRandom = Math.floor(Math.random() * quotes.length);

    quoteText.innerHTML = quotes[quoteRandom].quoteText;
    writer.innerHTML = quotes[quoteRandom].writer;
    quoteBtn.innerHTML = "New Quote"
} )



