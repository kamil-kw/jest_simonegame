/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

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
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
});

