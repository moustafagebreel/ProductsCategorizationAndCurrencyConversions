const fs= require("fs");
const data= JSON.parse(fs.readFileSync("./problems/problem1.json","utf-8"))
console.log(data.name)

data.name = "Fluffyy";
data.height ="60cm";
data.wight ="20kg";

console.log("updated name: " + data.name + "\n Height: " + data.height +"\n Weight: "+ data.wight);


data.catFriends.forEach(element => {
        console.log("name:"+ element.name +"\n"+ " activities: " + "\n"+element.activities)    
});

let totalWeight=0;

data.catFriends.forEach(element =>{
    // console.log(" catFriends names :" + element.name)
    // console.log(" total weight of catFriends:"+element.weight)
    totalWeight+=element.weight;
})
console.log(" total weight of : \n" + totalWeight)

const activitie = () =>{
    let totalActivities = data.activities.length;
data.catFriends.forEach(element => {
    totalActivities += element.activities.length;
});
return totalActivities
} 
console.log("Total activities of all cats: " + activitie());


data.catFriends[0].activities.push(" meowing");
data.catFriends[0].activities.push("Scratching");
data.catFriends[1].activities.push("zooming");
data.catFriends[1].activities.push("singning");

console.log("New total activities of all cats: " + activitie());


data.catFriends.forEach(cat => {
    console.log(cat.name + "'s updated activities: " + cat.activities);
});


data.catFriends[0].furcolor = "green!";

console.log("Bar's fur color: " + data.catFriends[0].furcolor);

// var display= require("./grating")

// display.grateing();