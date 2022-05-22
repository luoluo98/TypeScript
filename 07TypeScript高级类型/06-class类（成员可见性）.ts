// 父类
class Animal {
  public move() {
    console.log('走两步')
  }
}

const a = new Animal()
a.move()

// 子类
class Dog extends Animal {
  bark() {
    console.log('旺旺！')
  }
}

const d = new Dog()
d.move()
