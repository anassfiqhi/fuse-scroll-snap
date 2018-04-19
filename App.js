export default class App {
  constructor () {
    this.currentIndex = 0
    this.items=[{ index: 1 }, { index: 2 }]
  }

  get hasNext () {
    return this.currentIndex < this.items.length -1
  }

  forward () {
    this.currentIndex = this.currentIndex + 1
    if (this.currentIndex === this.items.length -1) {
      this.items.push({ index: this.items.length + 1 })
    }
  }

  backward () {
    this.currentIndex = this.currentIndex - 1
  }
}
