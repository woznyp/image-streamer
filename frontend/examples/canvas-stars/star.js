class Star{
  constructor(){
    this.position = {
      x: 0,
      y: 0
    }
  }

  move(){
    this.position.y++;
  }
}

export default Star;