const btn = document.querySelector(".btn"),
    tip = document.querySelector(".tip"),
    total = document.querySelector(".total"),
    error = document.querySelector(".error")

const hideerror = () => {
    setTimeout(() => {
        error.style.display = "none";
    }, 5000);
}



const calculatetip = (e) => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;


    if (bill === "" || rate === "") {
        error.style.display = "block";
        hideerror();
    }
    else if (isNaN(bill)) {

        error.innerHTML = "Please enter a number."
        error.style.display = "block";
        hideerror();

    }
    else {
        let tipamt = bill * rate;
        tipamt = Math.ceil(tipamt);

        tip.innerHTML = `Tip Amount : $${tipamt}`;

        let totalbill = Number(bill) + tipamt;
        total.innerHTML = `Total Bill : $${totalbill}`
    }

    e.preventDefault();
}


btn.addEventListener("click", calculatetip);