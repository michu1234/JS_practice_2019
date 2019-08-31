// Lazy function definition

let work = () => {
  console.log("do some initial work here");
  work = () => {
   console.log("now let's do the rest of the work");
  }
 }

work();
work();


// generator alternative

function* job() {
  console.log("do some initial work here");
  yield "done 1/2";
  console.log("now let's do the rest of the work");
  yield "done 1/1"
}


let j = job();
j.next();
j.next();
