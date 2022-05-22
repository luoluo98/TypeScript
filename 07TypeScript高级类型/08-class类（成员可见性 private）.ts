// 父类
class Animal {
  private __run__() {
    console.log('Animal 内部辅助函数')
  }

  // 受保护的
  protected move() {
    this.__run__()
    console.log('走两步')
  }

  // 公开的
  run() {
    this.__run__()
    this.move()
    console.log('跑起来')
  }
}

const a = new Animal()
// a.

// 子类
class Dog extends Animal {
  bark() {
    // this.
    console.log('旺旺！')
  }
}

const d = new Dog()
// d.
