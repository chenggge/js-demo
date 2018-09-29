## XHTML下css+div布局总结
xml(extensible Markup Language)的出现，结构化文档和数据有了一个通用的、科适应的格式，不仅仅应用在web上，也可以应用在任何地方。标准称为可能。 
XHTML是The Extensible HyperText Markup Language可扩展标识语言的缩写。在HTML4.0的基础上，用XML的规则对其进行扩展，得到了XHTML。
它实现HTML向XML的过渡。 CSS是Cascading Style Sheets层叠样式表的缩写。纯CSS布局与结构式XHTML相结合能帮助设计师分离外观与结构，使站点的访问及维护更加容易。

#### 1)为页面添加正确的DOCTYPE DOCTYPE是document type的简写。
主要用来说明你用的XHTML或者HTML是什么版本。浏览器根据你 DOCTYPE定义的DTD(文档类型定义)来解释页面代码。 XHTML1.0提供了三种DOCTYPE可选择： 
(1)过渡型（Transitional ）--使用非常普遍。 
``` <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"> ```
(2)严格型（Strict ） ``` <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1 -strict.dtd"> ```
(3)框架型（Frameset ） ``` <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd"> ```
#### 2)设定一个名字空间（Namespace） 
直接在DOCTYPE声明后面添加如下代码： ``` <html XMLns="http://www.w3.org/1999/xhtml" > ``` 一个namespace是收集元素类型和属性名字的一个详细的DTD，namespace声明允许你通过一个在线地址指向来识别你的namespace。只要照样输入代码就可以。 

#### 3)声明你的编码语言 
为了被浏览器正确解释和通过标识校验，所有的XHTML文档都必须声明它们所使用的编码语言。代码如下： 
``` <meta http-equiv="Content-Type" content="text/html; charset=GB2312" />  ```
这里声明的编码语言是简体中文GB2312，你如果需要制作繁体内容，可以定义为BIG5。

#### 4)用小写字母书写所有的标签 
XML对大小写是敏感的，所以，XHTML也是大小写有区别的。所有的XHTML元素和属性的名字都必须使用小写。否则你的文档将被W3C校验认为是无效的。例如下面的代码是不正确的： 

#### 5)为图片添加 alt 属性 为所有图片添加alt属性。
alt属性指定了当图片不能显示的时候就显示供替换文本，这样做对正常用户可有可无，但对纯文本浏览器和使用屏幕阅读机的用户来说是至关重要的。只有添加了alt属性，代码才会被W3C正确性校验通过。注意的是我们要添加有意义的alt属性，象下面这样的写法毫无意义： <img src="logo.gif" alt="logo.gif"> 正确的写法： <img src="logo.gif" alt="互动力工作室标志，点击返回首页"> 

#### 6)给所有属性值加引号 
在HTML中，你可以不需要给属性值加引号，但是在XHTML中，它们必须被加引号。还必须用空格分开属性。 例：<hr width="75%"size="7"/> 这也是不正确的 

#### 7)关闭所有的标签 
在XHTML中，每一个打开的标签都必须关闭。空标签也要关闭，在标签尾部使用一个正斜杠 "/"来关闭它们自己。例如： <br /> 

#### 8)收藏夹小图标 
例如：首先制作一个16x16的icon图标，命名为favicon.ico，放在根目录下。然后将下面的代码嵌入head区： <link rel="icon" href="/favicon.ico" type="image/x-icon" /> <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /> 

#### 9)用CSS定义元素外观 
用css布局的一个好处是可以批量对页面进行修改，它能将文档结构和表现层分离开来，减轻工作量和服务器的负荷，增加站点的扩展能力和应用。 css是不区别空格和大小写的，下面是一些基础的归纳 

##### (1)颜色值 
颜色值可以用RGB值写，例如：color : rgb(255,0,0)，也可以用十六进制写，就象上面例子color:#FF0000。如果十六进制值是成对重复的可以简写，效果一样。例如:#FF0000可以写成#F00。但如果不重复就不可以简写，例如#FC1A1B必须写满六位。 

##### (2)定义字体 
web标准推荐如下字体定义方法： ```body { font-family : "Lucida Grande", Verdana, Lucida, Arial, Helvetica, 宋体,sans-serif; } ``` 字体按照所列出的顺序选用。如果用户的计算机含有Lucida Grande字体，文档将被指定为Lucida Grande。没有的话，就被指定为Verdana字体，如果也没有Verdana，就指定为Lucida字体，依此类推，； Lucida Grande字体适合Mac OS X； Verdana字体适合所有的Windows系统； Lucida适合UNIX用户 "宋体"适合中文简体用户; 如果所列出的字体都不能用，则默认的sans-serif字体能保证调用; 

##### (3)群选择器 
当几个元素样式属性一样时，可以共同调用一个声明，元素之间用逗号分隔，： p, td, li { font-size : 12px ; }

##### (4)派生选择器 
可以使用派生选择器给一个元素里的子元素定义样式，例如这样： li strong { font-style : italic; font-weight : normal；} 就是给li下面的子元素strong定义一个斜体不加粗的样式。

##### (5)id选择器 
用CSS布局主要用层"div"来实现，而div的样式通过"id选择器"来定义。例如我们首先定义一个层 ```<div id="menubar"></div>``` 然后在样式表里这样定义： ```#menubar {MARGIN: 0px;BACKGROUND: #FEFEFE;COLOR: #666;} ```其中"menubar"是你自己定义的id名称。注意在前面加"#"号。 id选择器也同样支持派生，例如： ```#menubar p { text-align : right; margin-top : 10px; }``` 这个方法主要用来定义层和那些比较复杂，有多个派生的元素。

##### (6)类别选择器 
在CSS里用一个点开头表示类别选择器定义，例如： ```.14px {color : #f60 ;font-size:14px ;}``` 在页面中，用class= "类别名"的方法调用：``` <span class="14px">14px大小的字体</span> ``` 这个方法比较简单灵活，可以随时根据页面需要新建和删除。 

##### (7)定义链接的样式 
CSS中用四个伪类来定义链接的样式，分别是：a:link、a:visited、a:hover和a : active，例如： 
```
a:link{font-weight : bold ;text-decoration : none ;color : #c00 ;} 
a:visited {font-weight : bold ;text-decoration : none ;color : #c30 ;} 
a:hover {font-weight : bold ;text-decoration : underline ;color : #f60 ;} 
a:active {font-weight : bold ;text-decoration : none ;color : #F90 ;} 
```
以上语句分别定义了 "链接、已访问过的链接、鼠标停在上方时、点下鼠标时"的样式。注意，必须按以上顺序写，否则显示可能和你预想的不一样。记住它们的顺序是“LVHA”。

#### (8)组合使用选择器创造精致的设计效果 
用漂亮的图案代替普通无序列表前沉闷的黑点。站点http://marine.happycog.com/ 先用css规则告诉类别属性inventory的无序列表。 
```
ul.inventory{ list-style:disc url(/images/common/lister2.gig) inside;}
``` 
它的调用标记: 
```
<ul class="inventory"> 
    <li><a href="/angelfish">Angelfish</a>(67 items)</li> 
    <li><a href="/angeld">Angels/Frogfish</a>(35 items)</li> 
    <li><a href="/anthias">Angelfish</a>(5526 items)</li> 
    <li><a href="/basslets">Angelfish</a>(15 items)</li> 
<ul>
```

#### (9)缩写是按照顺时针的顺序 margin:25px 0 25px 0;

#### (10)行高 line-height:150% 
说明行距为正常的150% 10)结构化代码div(division)、id、class 用它们来书写紧凑的xhtml，更明智的使用css. 

##### (1)结构化id标签，
与class的有区别： 如果你的属性页面包含了一个div，它的id为"content",它就不可能有另外一个div或者其他元素拥有相同的名字。相反，class属性可以在意个页面中一次又一次地使用。

##### (2)id的规则 
一个id值必须用一个字母或者下划线开头，它不能用一个数字进行开头，然后跟随字母、数字和下划线。空格和连字符-都是不允许的。

#### (11）制作好的网站可以到w3c进行标准校正 http:validator.w3.org http://jigsaw.w3.org/css-validator/

#### (12)meta标签设置技巧

##### 收藏夹图标
```
<link rel="icon" href="/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
```

##### 为搜索引擎准备的配置
* 允许搜索机器人搜索站内所有链接。如果你想某些页面不被搜索，推荐采用robots.txt方法
```
<meta content="all" name="robots" />
```
* 设置站点作者信息
```
<meta name="author" content="ajie@netease.com,阿捷" /> 
```
* 设置站点版权信息
```
<meta name="Copyright" content="www.w3cn.org,自由版权,任意转载" />
```
* 站点的简要介绍(推荐)
```
<meta name="description" content="新网页设计师。web标准的教程站点，推动web标准在中国的应用" />
```
* 站点的关键词(推荐)
```
<meta content="designing, with, web, standards, xhtml, css, graphic, design, layout, usability, ccessibility, w3c, w3, w3cn, ajie" name="keywords" /> 
```

#### XHTML代码规范
##### 1.所有的标记都必须要有一个相应的结束标记
以前在HTML中，你可以打开许多标签，例如<p>和<li>而不一定写对应的</p>和</li>来关闭它们。但在XHTML中这是不合法的。XHTML要求有严谨的结构，所有标签必须关闭。如果是单独不成对的标签，在标签最后加一个"/"来关闭它。例如: 
```<br /><img height="80" alt="网页设计师" src="../images/logo_w3cn_200x80.gif" width="200" />```

##### 2.所有标签的元素和属性的名字都必须使用小写
与HTML不一样，XHTML对大小写是敏感的，<title>和<TITLE>是不同的标签。XHTML要求所有的标签和属性的名字都必须使用小写。例如：<BODY>必须写成<body> 。大小写夹杂也是不被认可的，通常dreamweaver自动生成的属性名字"onMouseOver"也必须修改成"onmouseover"。

##### 3.所有的XML标记都必须合理嵌套
同样因为XHTML要求有严谨的结构，因此所有的嵌套都必须按顺序，以前我们这样写的代码： ```<p><b></p>/b>``` 必须修改为：``` <p><b></b>/p> ``` 就是说，一层一层的嵌套必须是严格对称。

##### 4.所有的属性必须用引号""括起来
在HTML中，你可以不需要给属性值加引号，但是在XHTML中，它们必须被加引号。例如: <height=80> 必须修改为： <height="80"> 特殊情况，你需要在属性值里使用双引号，你可以用"，单引号可以使用&apos;，例如： ```<alt="say&apos;hello&apos;">```

##### 5.把所有<和&特殊符号用编码表示
* 任何小于号（<），不是标签的一部分，都必须被编码为& l t ;
* 任何大于号（>），不是标签的一部分，都必须被编码为& g t ;
* 任何与号（&），不是实体的一部分的，都必须被编码为& a m p;
注：以上字符之间无空格。

##### 6.给所有属性赋一个值
XHTML规定所有属性都必须有一个值，没有值的就重复本身。例如： 
```
<td nowrap> 
    <input type="checkbox" name="shirt" value="medium" checked>
```
必须修改为： ```<td nowrap="nowrap"> <input type="checkbox" name="shirt" value="medium" checked="checked">```

##### 7.不要在注释内容中使“--”
“--”只能发生在XHTML注释的开头和结束，也就是说，在内容中它们不再有效。例如下面的代码是无效的: ```<!--这里是注释-----------这里是注释-->``` 用等号或者空格替换内部的虚线。 ```<!--这里是注释============这里是注释-->``` 以上这些规范有的看上去比较奇怪，但这一切都是为了使我们的代码有一个统一、唯一的标准，便于以后的数据再利用。
