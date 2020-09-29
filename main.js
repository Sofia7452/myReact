import { createElement, Component, render } from './toy.react'
// MyComponent如果不想改变行为，可以默认继承Component
class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

render(
  <MyComponent id='a' class='c'>
    <div>abc</div>
    <div></div>
    <div></div>
  </MyComponent>, document.body)
//会翻译成一个函数调用