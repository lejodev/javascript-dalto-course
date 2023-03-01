greeting = "Hi there!";
question = "How are you today?";

document.write(greeting + question);

function handleIceCreamBuy(user) {
  const money = prompt(`Hi ${user}. How much money do you have?`);

  const iceCreams = [
    { name: "waterIceCream", price: 0.6 },
    { name: "creamyIceCream", price: 1 },
    { name: "iceCreamBrand1", price: 1.6 },
    { name: "iceCreamBrand2", price: 1.7 },
    { name: "iceCreamBrand3", price: 1.8 },
    { name: "confettiIceCreamJar", price: 2.9 },
    { name: "quarterKiloIceCream", price: 2.9 },
  ];

  const iceCreamsToBuy = [];

  iceCreams.map((iceCream, index) => {
    money >= iceCream.price ? iceCreamsToBuy.push(iceCream) : "";
  });

  const finalMessage =
    iceCreamsToBuy.length > 0
      ? iceCreamsToBuy.map((iceCream) => iceCream.name)
      : "You cannot buy one";

  alert(finalMessage);
}

handleIceCreamBuy("Pedro");
handleIceCreamBuy("Robert");
handleIceCreamBuy("Cofla");
