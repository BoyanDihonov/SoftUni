class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        const existingFlight = this.flights.find(flight => flight.flightNumber === flightNumber);
        if (existingFlight) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({
            flightNumber,
            destination,
            departureTime,
            price
        });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        const flight = this.flights.find(flight => flight.flightNumber === flightNumber);

        if (!flight) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({
            passengerName,
            flightNumber
        });

        this.bookingsCount++;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const index = this.bookings.findIndex(booking =>
            booking.passengerName === passengerName && booking.flightNumber === flightNumber
        );

        if (index === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings.splice(index, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error("No bookings have been made yet.");
        }

        const filteredBookings = this.bookings.filter(booking => {
            const flight = this.flights.find(f => f.flightNumber === booking.flightNumber);
            return criteria === "all" ||
                (criteria === "cheap" && flight.price <= 100) ||
                (criteria === "expensive" && flight.price > 100);
        });

        if (filteredBookings.length === 0) {
            return criteria === "cheap" ? "No cheap bookings found." : "No expensive bookings found.";
        }

        if (criteria === "all") {
            const bookingInfo = filteredBookings.map(booking =>
                `${booking.passengerName} booked for flight ${booking.flightNumber}.`
            ).join('\n');
            return `All bookings(${this.bookingsCount}):\n${bookingInfo}`;
        } else {
            const type = criteria === "cheap" ? "Cheap" : "Expensive";
            const bookingInfo = filteredBookings.map(booking =>
                `${booking.passengerName} booked for flight ${booking.flightNumber}.`
            ).join('\n');
            return `${type} bookings:\n${bookingInfo}`;
        }
    }
}