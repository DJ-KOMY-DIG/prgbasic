// 2026/01 Daisuke Komori

'use strict';

const mazecommand = document.getElementById("mazecommand");
const pseudocode = document.getElementById('pseudocode');
const flowchart = document.getElementById('flowchart');

mazecommand.addEventListener('click', (e) => {
    console.log('Maze command link clicked');
    e.preventDefault();
    // 新しいウィンドウで開く
    window.open('https://dj-komy-dig.github.io/GivingDirectToMaze/student.html', 'Maze Command', 'width=1300, height=1080, noopener');
    return false;
});

pseudocode.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://dj-komy-dig.github.io/pseudocode/', 'Pseudocode Editor','width=1500, height=1080, noopener');
    return false;
});

flowchart.addEventListener('click', (e) => {
    e.preventDefault();
    window.open('https://dj-komy-dig.github.io/flowchart/', 'Flowchart Editor','width=1500, height=1080, noopener');
    return false;
});


