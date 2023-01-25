// GET Permettant de visualiser les commandes, recupère commandes enregistrées dans bookings
fetch('http://localhost:3000/bookings')
	.then(response => response.json())
	.then(booking => {console.log(booking)
        
    })
//calcule le temps qu'il reste avant le depart du train