class pemain {
  constructor(x, y, warna){
    this.d = 50
    this.x = x
    this.y = y
    this.warna = color(warna)
    this.loncat = 10
    
  }
  tampilkan(){
    fill(this.warna)
    circle(this.x, this.y, this.d)
  }
  
  maju() {
    this.x += this.loncat
  }
  finish(){
    if(this.x > 1165 - this.d){
      stop()
      push()
      stroke(0,0,0)
      strokeWeight(15)
      fill(this.warna)
      textSize(100)
      textAlign(CENTER)
      text('YOU WIN!!', width/2, height/2)
      pop()
      bsound.stop()
      fin.play()
      noLoop()
    }
  }
}