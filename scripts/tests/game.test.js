/**
 * @jest-environment jsdom
 */

// exporting function from game.js
const { game, newGame, showScore, addTurn } = require("../game");

beforeAll(() => {
    // install fs libary 
    let fs = require("fs");
    // read file index.html with utf character set
    let fileContents = fs.readFileSync("index.html", "utf-8");
    // open document
    document.open();
    // write the file contents to it
    document.write(fileContents);
    // document close
    document.close();
});

describe("game objects contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contains correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("new game works correctly", () =>{
    beforeAll(() => {
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button3", "button4"];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    // test("should clear the computer sequence array", () => {
    //     expect(game.currentGame.length).toBe(0);
    // });
    test("should be one move element in the computers game array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    
    
    
    test("should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should display 0 for the element with id of score", () =>{
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});

