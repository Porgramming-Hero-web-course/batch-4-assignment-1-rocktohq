type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (input: Shape): number | string => {
  if (input.shape === "circle") {
    return parseFloat((Math.PI * (input.radius * input.radius)).toFixed(2));
  } else if (input.shape === "rectangle") {
    return input.width * input.height;
  } else {
    return "Invalid input!";
  }
};
