// Lazy function definition

let work = () => {
  console.log("do some initial work here");
  work = () => {
   console.log("now let's do the rest of the work");
  }

  work = () => {
    console.log('third time');
  }
 }

work();
work();
