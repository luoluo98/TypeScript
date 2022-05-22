class Animal {
  move() {
    console.log('走两步')
  }
}

class Dog extends Animal {
  name = '二哈'

  bark() {
    console.log('旺旺！')
  }
}

const d = new Dog()
d.move()
d.bark()
console.log(d.name)
