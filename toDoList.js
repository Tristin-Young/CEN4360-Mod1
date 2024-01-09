//initialize prompt-sync (required to get user input / give console output)
const prompt = require("prompt-sync")({ sigint: true });

// function to get the number of items the user wants to add
let getNumItems = () => {
  //ask the user how many items they want to add in the list
  let numberOfItems = prompt("How many items do you want to add in the list?\t");
  //if the number is greater than 10, have them re-pick
  while (numberOfItems > 10) {
    numberOfItems = prompt("Please enter a number less than 10.\t");
  }
  return numberOfItems;
};
// function to get the items from the user
let getItems = (num, items) => {
  for (var i = 0; i < num; i++) {
    //ask the user to enter an item
    let item = prompt("Enter To-Do item #" + (i + 1) + ":\t");
    //if the item is already in the list, have them enter another item
    if (items.includes(item)) {
      alert("This item is already in the list. Please enter another item.\t");
      i--;
    } else {
      //add the item to the list
      items.push(item);
    }
  }
  return items;
};
// function to print the list to the console
let printList = (items) => {
  //print the list
  console.log("\nTo-Do List:");
  for (var i in items) {
    console.log(Number(i) + 1 + ". " + items[i]);
  }
}

// create an array to store the to do items
var toDoItems = [];
// get the number of items the user wants to add
var numItems = getNumItems();
// get the items from the user
var toDoList = getItems(numItems, toDoItems);
// print the list to the console
printList(toDoList);



