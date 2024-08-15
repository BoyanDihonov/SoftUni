function solve() {

    const infoSpanRef = document.querySelector("#info span")
    const departBtnRef = document.getElementById('depart');
    const arriveBtnRef = document.getElementById('arrive')
    const url = "http://localhost:3030/jsonstore/bus/schedule/"

    const stop = {
        currentStop: "",
        nextStop: "depot"
    }

    async function depart() {
        try{
        const response = await fetch(url + stop.nextStop);
        const data = await response.json()
        stop.currentStop = data.name;
        stop.nextStop = data.next;
        infoSpanRef.textContent = `Next spot ${stop.currentStop}`
        departBtnRef.disabled = true
        arriveBtnRef.disabled = false
        }catch (error){
            infoSpanRef.textContent = "Error"
            departBtnRef.disabled = false
            arriveBtnRef.disabled = false
        }

    }

    function arrive() {
        infoSpanRef.textContent = `Arriving at ${stop.currentStop}`
        departBtnRef.disabled = false
        arriveBtnRef.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();