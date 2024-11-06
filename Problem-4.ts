type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (input: Circle | Rectangle) => {
  if (input.shape === "circle") {
    return (Math.PI * (input.radius * input.radius)).toFixed(2);
  } else if (input.shape === "rectangle") {
    return input.width * input.height;
  }
};
