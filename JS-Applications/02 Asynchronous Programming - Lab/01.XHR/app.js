async function getInfo() {
    const stopIdRef = document.getElementById('stopId');
    const stopId = stopIdRef.value;
    const stopNameRef = document.getElementById('stopName');
    const busesRef = document.getElementById('buses');

    stopNameRef.textContent = '';
    busesRef.innerHTML = '';

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        stopNameRef.textContent = data.name;
        appendChild(Object.entries(data.buses));
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        stopNameRef.textContent = 'Error';
    }
}

function appendChild(data) {
    const busesRef = document.getElementById('buses');
    for (const [bus, time] of data) {
        let li = document.createElement('li');
        li.textContent = `Bus ${bus} arrives in ${time} minutes`;
        busesRef.appendChild(li);
    }
}

    //     fetch(url)
    //         .then(res => {
        //             if (!res.ok) {
            //                 throw new Error('Network response was not ok');
            //             }
    //             return res.json();
    //         })
    //         .then(data => {
    //             stopNameRef.textContent = data.name;
    //             appendChild(Object.entries(data.buses));
    //         })
    //         .catch(error => {
    //             console.error('There was a problem with the fetch operation:', error);
    //             stopNameRef.textContent = "Error";
    //         });
    // }
