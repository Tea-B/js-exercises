function focus (event) {
    console.log(event.target.value);
 }

let input$$ = document.querySelector("input");

input$$.addEventListener("focus", focus);