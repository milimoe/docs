---
prev: /markdown/
next: image
---

# Markdown 代码布局设计

在 VuePress 中，你可以使用 Markdown 来创建漂亮的代码布局。

## Markdown 代码布局

你可以使用代码块语法来展示代码。VuePress 支持代码高亮，通过在代码块开始位置指定语言名称来实现。

### 示例：

```markdown
```js
// JavaScript 示例代码
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('VuePress'));
```

``` ```

显示效果：

```js
// JavaScript 示例代码
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('VuePress'));
```

### 支持的语言高亮：

你可以使用多种语言的高亮，例如：

- JavaScript (`js`)
- Python (`python`)
- HTML (`html`)
- CSS (`css`)
- Bash (`bash`)

### 插入代码片段：

你还可以在文档中插入代码片段。以下是一个 HTML 代码片段示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VuePress</title>
</head>
<body>
  <h1>Hello, VuePress!</h1>
</body>
</html>
```

## 结论

通过这些示例和技巧，你可以在 VuePress 文档中创建漂亮的代码布局。灵活使用 Markdown 和 HTML/CSS，可以帮助你实现所需的视觉效果。