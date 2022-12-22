// n children have m pieces of candy. They want to eat as much candy as they can but each child must eat exactly the same amount of candy as any other child. 

function candies(children, candy) {
  //  write code here.
  return Math.floor(candy / children) * children
}

console.log(candies(3, 15))