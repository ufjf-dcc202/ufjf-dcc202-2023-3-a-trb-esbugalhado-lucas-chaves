import Dice from "./dice.js";
import Board from "./board.js"
import Player from "./player.js"

// Pegando os elementos do HTML
const playerBoardEl = document.getElementById('player-table');
const playerDiceEl = document.getElementById('player-dice');
const cpuBoardEl = document.getElementById('cpu-table');
const cpuDiceEl = document.getElementById('cpu-dice');

// Instanciando as classes para o player
let playerBoard = new Board(playerBoardEl);
let playerDice = new Dice(playerDiceEl);
let player = new Player(playerBoard, playerDice, true);

// Instanciando as classes para a cpu
let cpuBoard = new Board(cpuBoardEl);
let cpuDice = new Dice(cpuDiceEl);
let cpu = new Player(cpuBoard, cpuDice, false);
