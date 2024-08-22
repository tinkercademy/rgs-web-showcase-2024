// Game variables
let CATNAME = "";
let MONEY = 100;
let AFFECTION_POINTS = 30;

scene1();

// Function to create text elements
function createText(text) {
    console.log("Creating text:", text);
    const textElement = document.createElement("p");
    textElement.textContent = text;
    document.getElementById("game-container").appendChild(textElement);
}
    
//Function to create images
function createImage(filename) {
    const imgElement = document.createElement("img");
    imgElement.src = filename;
    imgElement.style.width = "100%";
    document.getElementById("game-container").appendChild(imgElement);
}

// Function to create buttons
function createButton(text, onclickFunction) {
    const button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", onclickFunction);
    document.getElementById("game-container").appendChild(button);
}

// Scene 1
function scene1() {
   // alert("this is scene1")
    document.getElementById("game-container").innerHTML = "";
    createText("You encounter a cat…");
    createButton("Go pet it!", option1Scene1);
    createButton("Ignore it", option2Scene1);
}

// Function to handle option 1 of scene 1
function option1Scene1() {
    document.getElementById("game-container").innerHTML = "";
    createText("You walk up to the cat and pet it, it meows and nudges against your leg.");
    setTimeout(scene2, 3000);
}

// Function to handle option 2 of scene 1
function option2Scene1() {
    document.getElementById("game-container").innerHTML = "";
    createText("The cat decides to approach you. It seems to like you!");
    setTimeout(scene2, 3000);
}

// Scene 2
function scene2() {
    document.getElementById("game-container").innerHTML = "";
    CATNAME = prompt("What would you like to name the cat?");
    if (CATNAME.length > 15) {
        alert("Cat name is too long");
        scene2();
    } else if (CATNAME.match(/fuck|bitch|slut/gi)) {
        alert("Cat name should not contain swears");
        scene2();
    } else {
        createText('The kitty seems to like it. It is now licking your leg and smiling. Great name choice!');
        createText("The cat seems to want something.");
        createButton("Belly rub", option1Scene2);
        createButton("Rub its head", option2Scene2);
        createButton("Rub bottom of chin", option3Scene2);
        createButton("Hint", hintScene2);
    }
}

// Function to handle option 1 of scene 2
function option1Scene2() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS -= 5;
    createText("Don’t touch a cat’s belly! Aw look, now the cat is mad at you.");
    setTimeout(scene3, 3000);
}

// Function to handle option 2 of scene 2
function option2Scene2() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS += 5;
    createText("Nice choice!");
    setTimeout(scene3, 3000);
}

// Function to handle option 3 of scene 2
function option3Scene2() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS += 10;
    createText("The cat loves it! Great choice!");
    setTimeout(scene3, 3000);
}

// Function to show hint for scene 2
function hintScene2() {
    alert("Hint: Cats usually enjoy head rubs or chin scratches!");
}

// Scene 3
function scene3() {
    document.getElementById("game-container").innerHTML = "";
    createText(`There seems to be a vending machine in the distance. ${CATNAME} runs up to it and looks back at you, its head tilted to the side. A soft growl emerges from ${CATNAME}'s belly, it might be hungry.`);
    createText("What do you choose to buy for " + CATNAME + "?");
    createButton("NOTHING", option1Scene3);
    createButton("Tuna sandwich", option2Scene3);
    createButton("Egg sandwich", option3Scene3);
    createButton("Chocolate bar", option4Scene3);
    createButton("Hint", hintScene3);
}

// Function to handle option 1 of scene 3
function option1Scene3() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS -= 10;
    createText(`${CATNAME} stares longingly at you, and then at the vending machine again. It seems dejected, but quickly recovers.`);
    setTimeout(scene4, 3000);
}

// Function to handle option 2 of scene 3
function option2Scene3() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS += 10;
    MONEY -= 10;
    createText(`${CATNAME} happily eats the tuna sandwich, contented. It purrs, rubbing its head against your leg.`);
    setTimeout(scene4, 3000);
}

// Function to handle option 3 of scene 3
function option3Scene3() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS += 10;
    MONEY -= 10;
    createText(`${CATNAME} paws hesitantly at the egg sandwich, it doesn’t like eggs very much :(`);
    setTimeout(scene4, 3000);
}

// Function to handle option 4 of scene 3
function option4Scene3() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS -= 10;
    MONEY -= 5;
    createText(`${CATNAME} takes a few bites of the chocolate bar, liking the taste at first, but soon stops mid-bite. It seems to be in pain — after all, chocolate is toxic to cats.`);
    setTimeout(function() {
        createText(`${CATNAME} purrs sadly, as it glances at you and you watch it die, regretting your choice.`);
        setTimeout(endingDeath, 2000);
    }, 2000);
}

// Function to show hint for scene 3
function hintScene3() {
    alert("Hint: Chocolate is toxic to cats...");
}

// Scene 4
function scene4() {
    document.getElementById("game-container").innerHTML = "";
    createText(`The cat approaches you, pawing at your watch. Do you let the cat have the watch? It seems interested…`);
    createButton("Offer the cat your watch", option1Scene4);
    createButton("NO", option2Scene4);
}

// Function to handle option 1 of scene 4
function option1Scene4() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS += 5;
    createText(`${CATNAME} is intrigued, as it plays with the watch for a while, purring happily.`);
    setTimeout(scene5, 3000);
}

// Function to handle option 2 of scene 4
function option2Scene4() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS -= 5;
    createText(`${CATNAME} seems disappointed, its ears flattened against the back of its head.`);
    setTimeout(scene5, 3000);
}

// Scene 5
function scene5() {
    document.getElementById("game-container").innerHTML = "";
    createText(`All of a sudden, ${CATNAME} dashes towards a toy shop. You run up, trying to catch it. Lo and behold, what the kitten was running after was a toy shop. It meows at you, as if begging you to buy something for it.`);
    createText("You look at the options, and you choose to buy..");
    createButton("Yarn", option1Scene5);
    createButton("Plush", option2Scene5);
}

// Function to handle option 1 of scene 5
function option1Scene5() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS += 10;
    createText(`${CATNAME} immediately paws at the yarn, mewing and playing with it. It rubs against you, extremely satisfied with its new toy.`);
    setTimeout(function() {
        const randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber <= 25) {
            scene6();
        } else {
            scene7();
        }
    }, 3000);
}

// Function to handle option 2 of scene 5
function option2Scene5() {
    document.getElementById("game-container").innerHTML = "";
    AFFECTION_POINTS += 5;
    createText(`${CATNAME} approaches the plush, peering at it curiously. It hops onto the plush toy, tackling it to the ground, its tail swishing around. It seems to like the toy, good choice!`);
    setTimeout(function() {
        const randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber <= 25) {
            scene6();
        } else {
            scene7();
        }
    }, 3000);
}

// Scene 6
function scene6() {
    document.getElementById("game-container").innerHTML = "";
    createText(`After playing the toy for a while, suddenly, another cat comes! ${CATNAME} stares at it, observing it. The second cat LUNGES forward, grabbing ${CATNAME}. ${CATNAME} yelps, and looks at you, begging for your help.`);
    createButton("Ignore it! I’m not going to get my hands dirty..???", option1Scene6);
    createButton("Grab the other cat and pull it away.", option2Scene6);
    createButton("Grab " + CATNAME + " and pull it away.", option3Scene6);
}

// Function to handle option 1 of scene 6
function option1Scene6() {
    document.getElementById("game-container").innerHTML = "";
    createText(`After a while, after the other cat seems satisfied, it left. Inspecting ${CATNAME}, you see it’s heavily injured, about to die. It is essential to get yourself some bandages to stop its bleeding.`);
    if (MONEY > 20) {
        MONEY -= 20;
        createText("You grab your remaining money and buy it bandages. You save it, but it gives you a cold stare.");
        AFFECTION_POINTS -= 20;
        setTimeout(scene7, 3000);
    } else {
        setTimeout(endingDeath, 2000);
    }
}

// Function to handle option 2 of scene 6
function option2Scene6() {
    document.getElementById("game-container").innerHTML = "";
    createText(`You grab the cat away, but it decides to switch its target from ${CATNAME} to you, scratching your hands. In a panic, you drop the cat and it lunges to bite ${CATNAME}, and you helplessly watch as your kitten dies.`);
    setTimeout(endingDeath, 2000);
}

// Function to handle option 3 of scene 6
function option3Scene6() {
    document.getElementById("game-container").innerHTML = "";
    createText(`As you grab your kitten, the other kitten attempts to jump up and grab it but fails. After a while, it runs off, glaring at ${CATNAME} the whole way. ${CATNAME} stares at you, injured but smiling, glad you were a hero and saved it.`);
    AFFECTION_POINTS += 35;
    setTimeout(scene7, 3000);
}

// Scene 7
function scene7() {
    document.getElementById("game-container").innerHTML = "";
    createText(`${CATNAME} goes towards a nearby bench, hopping onto a sunny spot and glancing back at you, beckoning you to follow it. Do you choose to go towards the cat?`);
    createButton("Yes", option1Scene7);
    createButton("No", option2Scene7);
}

// Function to handle option 1 of scene 7
function option1Scene7() {
    document.getElementById("game-container").innerHTML = "";
    createText(`As you approach the bench, ${CATNAME} hops onto your lap, letting you scratch its ears.`);
    AFFECTION_POINTS += 10;
    if (AFFECTION_POINTS > 70) {
        setTimeout(endingAdopt, 3000);
    } else if (AFFECTION_POINTS < 40) {
        setTimeout(endingDislike, 3000);
    } else {
        setTimeout(endingLike, 3000);
    }
}

// Function to handle option 2 of scene 7
function option2Scene7() {
    document.getElementById("game-container").innerHTML = "";
    createText(`${CATNAME} watches you leave, its whiskers drooping. It seems to miss you already.`);
    if (AFFECTION_POINTS > 70) {
        setTimeout(endingAdopt, 3000);
    } else if (AFFECTION_POINTS < 40) {
        setTimeout(endingDislike, 3000);
    } else {
        setTimeout(endingLike, 3000);
    }
}

// Ending: Adopt
function endingAdopt() {
    document.getElementById("game-container").innerHTML = "";
    createText(`You've grown close to ${CATNAME} and decide to adopt it. Congratulations, you've found a new friend!`);
    createImage("adopt.jpeg")
    createButton("Restart", restartGame);
}

// Ending: Like
function endingLike() {
    document.getElementById("game-container").innerHTML = "";
    createText(`You and ${CATNAME} part ways, but you'll always remember the special bond you shared.`);
    createImage("like.jpeg")
    createButton("Restart", restartGame);
}

// Ending: Dislike
function endingDislike() {
    document.getElementById("game-container").innerHTML = "";
    createText(`You and ${CATNAME} don't seem to get along. Perhaps it's best if you part ways.`);
    createImage("dislike.jpeg")
    createButton("Restart", restartGame);
}

//Ending: Death
function endingDeath() {
    document.getElementById("game-container").innerHTML = "";
    createText(`You watch in horror as the cat dies. Game over.`);
    createImage("death.jpeg")
    createButton("Restart", restartGame);
}

// Function to restart the game
function restartGame() {  
    location.reload();

}
    /* 
    make money and affection points bar
    shopping thingy
    fix our css (do tgt)
    background effects and music
    volume settings button
    make the hint button at the top right
    edit palettee
background in between scenes
   
    */  