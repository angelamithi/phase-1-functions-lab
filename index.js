// Code your solution in this file!
function distanceFromHqInBlocks (street){
   const belowStreet = 42;    
   const distance = Math.abs(street - belowStreet);
    return distance;
  }
  distanceFromHqInBlocks(43);
  distanceFromHqInBlocks(50);
  distanceFromHqInBlocks(34)

  function distanceFromHqInFeet(feet) {
    const belowStreet=42;
    const distance = Math.abs(feet-belowStreet) * 264;
    return distance;
  }
  distanceFromHqInFeet(43);
  
  function distanceTravelledInFeet(start, finish) {
   const distanceTravelled= Math.abs(finish-start);
   const distance= distanceTravelled*264;
   return distance;
  }
  distanceTravelledInFeet(43,48);

  function calculatesFarePrice(start, destination) {
  const distanceTravelled = Math.abs(start-destination);
  let distanceinFeet= distanceTravelled*264;
  let farePrice=0;
    if (distanceinFeet <= 400)
    {
      return farePrice=0;
    } 
    else if (distanceinFeet > 400 && distanceinFeet <= 2000)
    {
      farePrice = Math.abs((distanceinFeet - 400) * 0.02);
      return farePrice;
    }
    else if (distanceinFeet>2000 && distanceinFeet <=2500)
    {
      return farePrice=25;
    }
    else 
    {
      return "cannot travel that far";
    }

    }
    calculatesFarePrice(43, 44);
    calculatesFarePrice(34, 32);  
    calculatesFarePrice(50, 58);
    calculatesFarePrice(34, 24);
 