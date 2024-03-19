//entering the data
let click = document.getElementById('submit');
let div = document.getElementById('exac');
let olddata = [];

click.addEventListener("click", function () {
    let value = document.getElementById('text').value;

    if (value === "") {
        alert("Enter data");
    } else {
        appendEntry(value);
        document.getElementById('text').value = "";
    }
    
});

function appendEntry(value) {
    let ul = document.createElement('ul');
    ul.innerHTML = `
        <input class="checkbox" type="checkbox" name="">
        <li class="lost">${value}</li><span class="span material-symbols-outlined">close</span>
    `;
    div.appendChild(ul);
    localStorage.setItem("data",ul.innerHTML);
    ul.addEventListener('click', function (e) {
        if (e.target.className === "checkbox") {
            console.log(e.target.nextElementSibling)
            e.target.nextElementSibling.classList.toggle("tetxtcross");
        }else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
        }
    });
}

