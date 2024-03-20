//Initialize possibleNames with a list of names ["Tyler", "Megan", "Joe", "Dave", "Adam"]
const possibleNames = ["Tyler", "Megan", "Joe", "Dave", "Adam"];

//Initialize possibleOccupations with a list of occupations ["writer", "teacher", "programmer","designer", "marketer"]
const possibleOccupations = ["writer", "teacher", "programmer","designer", "marketer"];

//Initialize freelancers with an inital array of freelancers objects, each having a name, occupation, and startingPrice
const freelancers = [
  {name:"Tyler", occupation: "writer", startingPrice: 50},
  {name:"Megan", occupation: "teacher", startingPrice: 70},
  {name:"Joe", occupation: "programmer", startingPrice: 80},
  {name:"Dave", occupation: "designer", startingPrice: 60},
  {name:"Adam", occupation: "marketer", startingPrice: 90}
  
];

//Define a function calculateAveragePrice initialize total to 0
const calculateAveragePrice = () => {
  //initialize total to 0 and add each freelancer's startingPrice to total
  const total = freelancers.reduce((acc, curr) => acc + curr.startingPrice, 0);
  //return total divided by the number of freelancers
  return total / freelancers.length

};

//Define a function for renderFreelancers:
const renderFreelancer = () => {
  // select the freelancer container element by its ID and clear its content
  const container = document.querySelector("#freelancer-container");
  container.innerHTML ="";
  freelancers.forEach(freelancer =>{
    //create a new div element for the freelancer and set its content
    const freelancerDiv = document.createElement("div");
    freelancerDiv.className="freelancer";
    freelancerDiv.textContent = `${freelancer.name}, the ${freelancer.occupation}, Starting Price: ${freelancer.startingPrice}`;
    //add the div to the freelancer container
    container.appendChild(freelancerDiv);
  });
  //calculate the average price and update the average price element 
  const averagePrice = calculateAveragePrice();
  document.querySelector("#average-price").textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

//define a function generateRandomFreelancer
const generateRandomFreelancer = () => {
  //Randomly select a name from possibleNames and an occupation from possibleOccupations
  const name = possibleNames[Math.floor(Math.random() * possibleNames.length)];
  const occupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
  //generate a random startingPrice between 20 and 120
  const startingPrice = Math.floor(Math.random() * 100) + 20;
  //return a new freelancer object with the selected name, occupation, and startingPrice
  return { name, occupation, startingPrice};
};

//Define a function addFreelancer
const addFreelancer = () => {
  //generate a random freelancer and add it to the freelancers array
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  //re-render the freelancers on the page
};
 //initial rendering of freelancers
 renderFreelancer();

 //set an interval to add a freelancers and re-render every few seconds
 setInterval(addFreelancer, 3000); //adds a new freelancer every 3 sec