function detectRainbowColor(color) {
  switch (color) {
    case "red":
      console.log("Color is Red");
      break;

    case "orange":
      console.log("Color is Orange");
      break;

    case "yellow":
      console.log("Color is Yellow");
      break;

    case "green":
      console.log("Color is Green");
      break;

    case "sky-blue":
      console.log("Color is Sky-Blue");
      break;

    case "blue":
      console.log("Color is Blue");
      break;
    case "purple":
      console.log("Color is Purple");
      break;
    default:
      console.log("Your Choosen Color isn't Rainbow Color");
  }
}

detectRainbowColor("SkY-BlUE".toLowerCase());
