
var index = 0;
document.querySelectorAll(".videocarousel").forEach(carousel => 
{
    const items = carousel.querySelectorAll(".carousel_item");
    const prevItemButton = carousel.querySelector(".carousel_button_prev");
    const nextItemButton = carousel.querySelector(".carousel_button_next");

    //Adds carousel item indicator
    const buttonsHtml = Array.from(items, () => {
        return `<span class = "carousel_button"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend", `
        <div class = "carousel_nav">
            ${ buttonsHtml.join("") }
        </div>
    `);

    const buttons = carousel.querySelectorAll(".carousel_button");

    //Adds listener and functionality to previous item button
    prevItemButton.addEventListener("click", () => {
        items.forEach(item => item.classList.remove("carousel_item--selected"));
        buttons.forEach(button => button.classList.remove("carousel_button--selected"));
        
        index -= 1;
        if(index < 0)
            index = items.length - 1;

        items[index].classList.add("carousel_item--selected");
        buttons[index].classList.add("carousel_button--selected");

    });

    //Adds listener and functionality to next item button
    nextItemButton.addEventListener("click", () => {
        items.forEach(item => item.classList.remove("carousel_item--selected"));
        buttons.forEach(button => button.classList.remove("carousel_button--selected"));
        
        index += 1;
        if(index > items.length - 1)
            index = 0;
        
        items[index].classList.add("carousel_item--selected");
        buttons[index].classList.add("carousel_button--selected");

    });

    items[0].classList.add("carousel_item--selected");
    buttons[0].classList.add("carousel_button--selected");
});