let pemain1, pemain2, pemain3;
let balap;
let bsound;
let fin;
let mode;
let countdown = 3;
let hitung;
let isGameStarted = false;
let isSettingOpen = false;
let isInfoOpen = false;

function preload(){
  balap = loadImage('START.png');
  bsound = loadSound('music.mp3');
  fin = loadSound('1.mp3')
  hitung = loadSound('time.mp3')
}

function setup() {
  mode = 0;
  createCanvas(1200, 600);
  textAlign(CENTER,CENTER)
  background(225,225,225)
  pemain1 = new pemain(30, 410, "blue")
  pemain2 = new pemain (30,470, "red")
  pemain3 = new pemain (30, 535, "green")
  
  window.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      startCountdown(3);
    }
  });
  
}


function draw() {
  
  
  if (!isGameStarted) {
    displayMenu();
  } else {
    runGame();
  }
  
  if (isInfoOpen) {
    displayInfo();
  }
}

function displayInfo() {
  push()
  background(100);
  fill(255);
  textSize(24);
  text("Info", width / 2, 80);
  // Tampilkan informasi tentang permainan di sini
  
  // button
  fill(255, 255, 0)
  rect(0, 0, 100, 70, 0, 0, 10, 0)
  fill(0)
  text("Back", 50, 35)
  pop()
}

function displayMenu() {
  push()
  background(225)
  fill(0)
  textSize(100)
  text("Balap Karung", 600,150)
  textSize(24)
  text("By thehardworkers",600,230)
  // Tampilkan tombol "Mulai"
  fill(0, 255, 0);
  rect(550, 350, 100, 50);
  fill(0);
  textSize(20);
  text("Start", 600, 375);

  // Tampilkan tombol "Info"
  fill(255, 200, 1);
  rect(550, 450, 100, 50);
  fill(0);
  textSize(20);
  text("Info", 600, 475);
  pop()
}
function startCountdown(){
  countdown = 3;
  mode = 1;
  hitung.play()
  bsound.setVolume(0)
  bsound.play()
}
function runGame() {
  clear();
  if (mode == 0) {
    push()
    image(balap, 0, 0, width, height)
    fill('black')
    textSize(50)
    textAlign(CENTER)
    text('Press Enter To Start', 600, 300)
    stroke(0, 0, 0)
    strokeWeight(3)
    pop()
  }
  if (mode == 1) {
    push()
    image(balap, 0, 0)
    textSize(100)
    text(countdown, width / 2, height / 2);
    stroke(0)
    strokeWeight(5)
    pop()
    if (frameCount % 60 == 0 && countdown > 0) {
      countdown--;
    }
  }
  
  if (countdown == 0) {
    bsound.setVolume(1)
    image(balap, 0, 0)
    pemain1.tampilkan()
    pemain2.tampilkan()
    pemain3.tampilkan()
    pemain1.finish()
    pemain2.finish()
    pemain3.finish()
  }
}

  function keyPressed() {
  if(keyCode === CONTROL){
    pemain1.maju()
  }
  else if(keyCode === LEFT_ARROW) {
    pemain2.maju()
  }
  else if (keyCode === RIGHT_ARROW) {
    pemain3.maju()
  }
  
}

function mouseClicked() {
  if (!isGameStarted) {
    // Cek apakah pengguna mengklik tombol "Mulai"
    if (mouseX > 550 && mouseX < 650 && mouseY > 350 && mouseY < 400) {
      isGameStarted = true;
    }
    // Cek apakah pengguna mengklik tombol "Info"
    if (mouseX > 550 && mouseX < 650 && mouseY > 450 && mouseY < 500) {
      // Keluar dari permainan atau lakukan tindakan lain sesuai kebutuhan
      isInfoOpen = true;
    }
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 70) {
      isInfoOpen = false; // Close the info page
    }
  }  
}



