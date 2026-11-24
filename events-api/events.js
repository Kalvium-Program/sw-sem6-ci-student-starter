const events = [
  { id: 1, title: 'Intro to Docker Workshop', seats: 40 },
  { id: 2, title: 'Resume Review Evening', seats: 25 },
  { id: 3, title: 'Inter-College Hackathon', seats: 120 },
];

function seatsLeft(id, booked) {
  const event = events.find((e) => e.id === id);
  if (!event) throw new Error(`Unknown event id ${id}`);
  return Math.max(event.seats - booked, 0);
}

module.exports = { events, seatsLeft };
