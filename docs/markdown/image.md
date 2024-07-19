---
prev: code
next: table
---

# Markdown 图片布局设计

## 图片布局

在 VuePress 中，你可以使用 Markdown 语法插入图片，并结合 HTML 或 CSS 进行布局设计。

### 插入图片：

使用标准的 Markdown 语法插入图片：

```markdown
![Alt text](./path/to/image.png)
```

### 设置图片大小：

使用 HTML 标签控制图片大小：

```markdown
<img src="./path/to/image.png" alt="Alt text" width="400" height="300">
```

### 图片居中：

结合 HTML 和 CSS 居中图片：

```markdown
<div style="text-align: center;">
  <img src="./path/to/image.png" alt="Alt text" style="width: 400px; height: 300px;">
</div>
```

### 图片和文字混排：

将图片和文字混排，可以使用浮动属性：

```markdown
<p>
  <img src="./path/to/image.png" alt="Alt text" style="float: left; margin-right: 10px; width: 200px;">
  这是与图片混排的文本内容。图片将浮动在文本的左侧，文本内容会环绕图片。
</p>
```

### 图片画廊布局：

如果你需要创建图片画廊，可以使用表格布局或 CSS Grid 布局。

#### 表格布局示例：

```markdown
| 图片 1 | 图片 2 | 图片 3 |
| --- | --- | --- |
| ![Image 1](./path/to/image1.png) | ![Image 2](./path/to/image2.png) | ![Image 3](./path/to/image3.png) |
```

#### CSS Grid 布局示例：

使用 HTML 和 CSS 实现更复杂的布局：

```markdown
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
  <img src="./path/to/image1.png" alt="Image 1" style="width: 100%;">
  <img src="./path/to/image2.png" alt="Image 2" style="width: 100%;">
  <img src="./path/to/image3.png" alt="Image 3" style="width: 100%;">
</div>
```

## 结论

通过这些示例和技巧，你可以在 VuePress 文档中创建漂亮的图片布局。灵活使用 Markdown 和 HTML/CSS，可以帮助你实现所需的视觉效果。