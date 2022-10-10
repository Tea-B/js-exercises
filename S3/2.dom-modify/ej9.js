let div$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < div$$.length; i++) {
    let p$$ = document.createElement("p");
    p$$.textContent = "Voy dentro!";
    div$$[i].appendChild(p$$);
}