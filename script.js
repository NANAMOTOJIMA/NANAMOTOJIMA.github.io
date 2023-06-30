'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//１．各種イラスト要素と各枠の要素を取得して変数に格納
const trashElements = document.querySelectorAll('.trash');
const trashcanElements = document.querySelectorAll('.trashcan');
const spaceElements = document.querySelectorAll('.space');

//２．イラストのドラッグ開始時の処理
function dragStart(event) {
    console.log("start");
    event.dataTransfer.setData('text/plain', event.target.id);
}

//３．イラストを各枠にドロップしたときの処理
//音を用意しておく
const music = new Audio("boo.mp3");
const music1 = new Audio("poi.mp3");

function drop(event) {
    event.preventDefault();
    const trashId = event.dataTransfer.getData('text/plain');
    const trashElement = document.getElementById(trashId);
    const trashcanId = event.target.id;
    const trashcanElement = document.getElementById(trashcanId);

    // 配置の適切さをidの先頭2文字で判定し、メッセージを表示
    if (trashId.slice(0,2) === trashcanId.slice(0,2)) {
        //枠内に何もなければ、画像を枠内に配置し、4Sしか勝たん！を表示
        trashcanElement.appendChild(trashElement);
        showMessage("4Sしか勝たん!!");
        music1.currentTime = 0;
        music1.play();
    } else {
        //不一致の場合は、boo！を表示
        console.log("ここには置けません！");
        music.currentTime = 0;
        music.play();
        return showMessage("Boooooo!!");
    }
    
    // 全ての4Sが終了したときの処理（最初にモノが配置してあったspaceに何もなくなったことを確認してる）
    const spaceDiv = document.querySelector('.space');
    if (spaceDiv.childElementCount === 0) {
            return lastMessage("君は4Sマイスター!!");
    }
}


//４．イラストが枠内に入ったときの処理
function dragEnter(event) {
    event.preventDefault();
    // event.currentTarget.classList.add('highlight');
}

//５．枠上でドラッグオーバー時の処理
function dragOver(event) {
    event.preventDefault();
}

//６.枠に関連のイベントリスナーを追加
trashcanElements.forEach(trashcanElement => {
    trashcanElement.addEventListener('dragenter', dragEnter);
    trashcanElement.addEventListener('dragover', dragOver);
    trashcanElement.addEventListener('drop', drop);
});

//７.イラストに関連のイベントリスナーを追加
trashElements.forEach(trashElement => {
    trashElement.addEventListener('dragstart', dragStart);
});

//８.メッセージを表示する関数
function showMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.cssText = 
        "position: absolute;"
        + "top: 350px;"
        + "left: 250px;"
        + "font-weight: bold;"
        + "font-size: 100pt;"
        + "z-index:100;"
        + "color: #d148b8;";
    document.body.appendChild(messageElement);
    setTimeout(function() {
        messageElement.remove();
    }, 1000); // 1秒後にメッセージを削除
}

//９.最後のメッセージを表示する関数
//音を用意しておく
const music2 = new Audio("pafu.mp3");

function lastMessage(message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.style.cssText = 
        "position: absolute;"
        + "display: inline-block;"
        + "background:#FFD9D7;"
        + "top: 350px;"
        + "left: 250px;"
        + "font-weight: bold;"
        + "font-size: 80pt;"
        + "z-index:100;"
        + "color: #d148b8;";
    document.body.appendChild(messageElement);
    setTimeout(function() {
        messageElement.remove();
    }, 7000); // 7秒後にメッセージを削除
    music2.currentTime = 0;
    music2.play();
}



//4Sとは・・・

let start1Element = document.getElementById("start1");
let start2Element = document.getElementById("start2");
let start3Element = document.getElementById("start3");
let start4Element = document.getElementById("start4");
let end1Element = document.getElementById("end1");
let end2Element = document.getElementById("end2");
let end3Element = document.getElementById("end3");
let end4Element = document.getElementById("end4");
// new LeaderLine(
//     document.getElementById("start1"),
//     document.getElementById("end1")
//   );
// new LeaderLine(LeaderLine.mouseHoverAnchor(startElement), endElement);  
new LeaderLine(LeaderLine.mouseHoverAnchor(start1Element), end1Element, {
    color: '#fff',
    outline: true,
    endPlugOutline: true,
    endPlugSize: 1.5
});
new LeaderLine(LeaderLine.mouseHoverAnchor(start2Element), end2Element, {
    color: '#fff',
    outline: true,
    endPlugOutline: true,
    endPlugSize: 1.5
});
new LeaderLine(LeaderLine.mouseHoverAnchor(start3Element), end3Element, {
    color: '#fff',
    outline: true,
    endPlugOutline: true,
    endPlugSize: 1.5
});
new LeaderLine(LeaderLine.mouseHoverAnchor(start4Element), end4Element, {
    color: '#fff',
    outline: true,
    endPlugOutline: true,
    endPlugSize: 1.5
});
