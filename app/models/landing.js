import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  address: DS.attr('string'),
  date: DS.attr('string'),
  site: DS.attr('string'),
  signup: DS.attr('string')
})
.reopenClass({
  FIXTURES: [{
    id: 1,
    name: "g|Hack: A Hackathon Supporting Epic Women",
    description: "?",
    address: "Galvanize (44 Tehama St, San Francisco, CA 94105)",
    date: "Friday, March 27, 2015 at 5:00 PM - Saturday, March 28, 2015 at 7:00 PM",
    site: "",
    signup: "https://www.eventbrite.com/e/ghack-a-hackathon-supporting-epic-women-tickets-15776197030"
  }, {
    id: 2,
    name: "Gov Tech Hack: By the People, For the People",
    description: "Calling all civic-minded coders, builders, designers and ideators -- join us on March 27 - 28, 2015 to lend your skills to help make government better and more accessible by building on open source code and new data sets identified by the 18F US Digital Services team.",
    address: "Capital One 360 Café (101 Post Street, San Francisco, CA 94108)",
    date: "Friday, March 27, 2015 at 6:30 PM - Saturday, March 28, 2015 at 7:30 PM",
    site: "",
    signup: "http://www.eventbrite.com/e/gov-tech-hack-by-the-people-for-the-people-tickets-16135863803"
  }, {
    id: 3,
    name: "SfunCube Solar Hackathon #Hackthesun",
    description: "Are you a savvy developer, creative designer, or passionate about solar energy? Are you interested in $10,000 in cash prizes? Then come to the third annual SfunCube Solar Hackathon and hack the sun. SfunCube accelerates the success of solar entrepreneurs. Our Solar Hackathon is bringing the Bay Area’s most hardcore developers, creative designers, and brilliant solar business minds together to create innovative solutions to accelerate solar adoption in the US and around the world.",
    address: "SfunCube - Solar Incubator + Accelerator (426 17th Street Suite 700, Oakland, CA 94612)",
    date: "Friday, April 17, 2015 at 6:30 PM - Saturday, April 18, 2015 at 9:00 PM",
    site: "",
    signup: "https://www.eventbrite.com/e/sfuncube-solar-hackathon-hackthesun-tickets-15720907658"
  }, {
    id: 4,
    name: "IoT + Mobile Hackathon",
    description: "Join other mobile and IoT developers in building mobile interfaces for IoT apps! Work solo or with a team to build something fun and innovative in this day-long hackathon. Whether you're working to win a prize, or just building something for fun, sponsors will have on-site mentors to help you with your project. The overall winner will get a chance to present their hack during the IoT Stream Conference.",
    address: "PubNub (725 Folsom St, San Francisco, CA 94107)",
    date: "Friday, April 17, 2015 at 6:30 PM - Saturday, April 18, 2015 at 9:00 PM",
    site: "",
    signup: "https://www.eventbrite.com/e/iot-mobile-hackathon-tickets-15807304072"
  }, {
    id: 5,
    name: "AngelHack San Francisco 2015",
    description: "Take a second to think about what distinguishes you, as a hacker. Is it your impressive ability to stay (semi) functional for 24 hours on end? Maybe your unmatched ability to maintain a sense of humor, even when the Gods of Code decide to pick on you that day? Or is it your ability to easily process immense amounts of Red Bull? While all of these things are impressive (seriously, props for the no sleep thing), what really distinguishes you hackers from others, is your unparalleled PASSION for what you do. A passion that is derived from a single feeling, and is guided by your need to see that feeling turn into a thought, the thought turn into an idea, and the idea come to life! Welcome to the Eighth season of AngelHack, where Thoughts Become Things! ",
    address: "MuleSoft (77 Geary Street #400, San Francisco, CA 94108)",
    date: "Friday, April 17, 2015 at 6:30 PM - Saturday, April 18, 2015 at 9:00 PM",
    site: "http://angelhack.com/hackathon/san-francisco-2015/",
    signup: "http://www.eventbrite.com/e/angelhack-san-francisco-2015-tickets-15835676936"
  }, {
    id: 6,
    name: "GigHacks SF",
    description: "A 2-day hack event to ignite the gigabit experience. Gigabit networks are coming to a city near you! Join us for a weekend of futuristic fun and a chance to build the gigabit apps of tomorrow.",
    address: "60 Spear Street, San Francisco, CA 94105",
    date: "Friday, April 17, 2015 at 6:30 PM - Saturday, April 18, 2015 at 9:00 PM",
    site: "",
    signup: "http://gighacks-sf.challengepost.com/"
  }, {
    id: 7,
    name: "DockerCon SF Hackathon",
    description: "Docker is organizing a 24 hour hackathon the weekend before DockerCon US 2015. The prize for the winners is a ticket for DockerCon and a chance to present their project during the conference.",
    address: "San Francisco Marriott Marquis (780 Mission St, San Francisco, CA 94103)",
    date: "Friday, April 17, 2015 at 6:30 PM - Saturday, April 18, 2015 at 9:00 PM",
    site: "",
    signup: "https://www.eventbrite.com/e/sfuncube-solar-hackathon-hackthesun-tickets-15720907658"
  }, {
    id: 8,
    name: "HackingEDU",
    description: "TBD",
    address: "TBD",
    date: "TBD",
    site: "http://hackingedu.co/",
    signup: ""
  }]
});
