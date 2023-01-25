// GET Permettant de visualiser les commandes, recupère commandes enregistrées dans bookings
fetch('http://localhost:3000/bookings')
	.then(response => response.json())
	.then(dat => {
		const array = dat.data
		console.log(array)
		for(let i=0; i<array.length; i++) {
			console.log("tu me vois??")
			let date = new Date(array[i].selectedTrip.date)
			let countdown = Math.floor((date - Date.now()) /3600 /1000);
			console.log('countdown ' + countdown)
			document.querySelector('#mainContent').innerHTML +=
			`<div class="BookingTrip">
				<div class="bookingRoute">${array[i].selectedTrip.departure} > ${array[i].selectedTrip.arrival}</div>
				<div class="bookingArrival">${date.getHours()}:${date.getMinutes()}</div>
				<div class="bookingPrice">${array[i].buyingPrice}€</div>
				<div class="bookingCountdown">Departure in ${-countdown} hours</div>
			</div>`
		}
        
    })

