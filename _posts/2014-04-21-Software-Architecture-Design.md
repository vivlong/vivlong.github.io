---
layout: post
title: Software-Architecture-Design  
category: Architecture
---
# RESTful

入门请参阅阮一峰的[理解RESTful架构](http://www.ruanyifeng.com/blog/2011/09/restful.html)

作为一名Web开发者，如果还没听说过"REST"这个buzzword，显然已经落伍了。夸张点说，甚至"出了门都不好意思跟别人打招呼"。
尽管如此，对于REST这个泊来品的理解，大多数人仍然停留在"盲人摸象"的阶段。常常听到各种各样关于REST的说法，
例如：有人说：“我们这套新的API决定不用Web Service（SOAP+WSDL），而是直接使用HTTP+JSON，也就是用RESTful的方式来开发。” 不用SOAP，甚至也不用XML，就自动变成了RESTful了。
还有人认为：REST与传统的Web Service其实没有本质区别，只是对于URI的构造方式提出了更多要求，而这些要求Web Service完全都可以实现。
潜台词是：既生瑜，何生亮。Web Service已经足够好了，干嘛还要再折腾什么REST。
这些对于REST的不同说法，果真如此吗？REST究竟是什么？是一种新的技术、一种新的架构、还是一种新的规范？
---
REST（Representational State Transfer）是一种轻量级的Web Service架构风格，其实现和操作明显比SOAP和XML-RPC更为简洁，可以完全通过HTTP协议实现，还可以利用缓存Cache来提高响应速度，性能、效率和易用性上都优于SOAP协议。

#### REST架构风格最重要的架构约束有6个：
 - 客户-服务器（Client-Server）
通信只能由客户端单方面发起，表现为请求-响应的形式。
 - 无状态（Stateless）
通信的会话状态（Session State）应该全部由客户端负责维护。
 - 缓存（Cache）
响应内容可以在通信链的某处被缓存，以改善网络效率。
 - 统一接口（Uniform Interface）
通信链的组件之间通过统一的接口相互通信，以提高交互的可见性。
 - 分层系统（Layered System）
通过限制组件的行为（即，每个组件只能“看到”与其交互的紧邻层），将架构分解为若干等级的层。
 - 按需代码（Code-On-Demand，可选）
支持通过下载并执行一些代码（例如Java Applet、Flash或JavaScript），对客户端的功能进行扩展。

#### 要深入理解REST，需要理解REST的五个关键词：
1. 资源（Resource）
2. 资源的表述（Representation）
3. 状态转移（State Transfer）
4. 统一接口（Uniform Interface）
5. 超文本驱动（Hypertext Driven）

什么是资源？
资源是一种看待服务器的方式，即，将服务器看作是由很多离散的资源组成。
每个资源是服务器上一个可命名的抽象概念。因为资源是一个抽象的概念，所以它不仅仅能代表服务器文件系统中的一个文件、数据库中的一张表等等具体的东西，可以将资源设计的要多抽象有多抽象，只要想象力允许而且客户端应用开发者能够理解。
与面向对象设计类似，资源是以名词为核心来组织的，首先关注的是名词。
一个资源可以由一个或多个URI来标识。URI既是资源的名称，也是资源在Web上的地址。
对某个资源感兴趣的客户端应用，可以通过资源的URI与其进行交互。

什么是资源的表述？

资源的表述是一段对于资源在某个特定时刻的状态的描述。
可以在客户端-服务器端之间转移（交换）。资源的表述可以有多种格式，例如HTML/XML/JSON/纯文本/图片/视频/音频等等。
资源的表述格式可以通过协商机制来确定。请求-响应方向的表述通常使用不同的格式。

什么是状态转移？

状态转移（state transfer）与状态机中的状态迁移（state transition）的含义是不同的。
状态转移说的是：在客户端和服务器端之间转移（transfer）代表资源状态的表述。通过转移和操作资源的表述，来间接实现操作资源的目的。

什么是统一接口？

REST要求，必须通过统一的接口来对资源执行各种操作。
对于每个资源只能执行一组有限的操作。以HTTP/1.1协议为例，HTTP/1.1协议定义了一个操作资源的统一接口，主要包括以下内容：

7个HTTP方法：GET/POST/PUT/DELETE/PATCH/HEAD/OPTIONS

HTTP头信息（可自定义）

HTTP响应状态代码（可自定义）

一套标准的内容协商机制

一套标准的缓存机制

一套标准的客户端身份认证机制

REST还要求，对于资源执行的操作，其操作语义必须由HTTP消息体之前的部分完全表达，不能将操作语义封装在HTTP消息体内部。
这样做是为了提高交互的可见性，以便于通信链的中间组件实现缓存、安全审计等等功能。

什么是超文本驱动？

“超文本驱动”又名“将超媒体作为应用状态的引擎”（Hypermedia As The Engine Of Application State，来自Fielding博士论文中的一句话，缩写为HATEOAS）。
将Web应用看作是一个由很多状态（应用状态）组成的有限状态机。资源之间通过超链接相互关联，超链接既代表资源之间的关系，也代表可执行的状态迁移。
在超媒体之中不仅仅包含数据，还包含了状态迁移的语义。以超媒体作为引擎，驱动Web应用的状态迁移。
通过超媒体暴露出服务器所提供的资源，服务器提供了哪些资源是在运行时通过解析超媒体发现的，而不是事先定义的。
从面向服务的角度看，超媒体定义了服务器所提供服务的协议。客户端应该依赖的是超媒体的状态迁移语义，而不应该对于是否存在某个URI或URI的某种特殊构造方式作出假设。
一切都有可能变化，只有超媒体的状态迁移语义能够长期保持稳定。

一旦理解了上述REST的五个关键词，就很容易理解REST风格的架构所具有的6个的主要特征：

面向资源（Resource Oriented）

可寻址（Addressability）

连通性（Connectedness）

无状态（Statelessness）

统一接口（Uniform Interface）

超文本驱动（Hypertext Driven）


从架构风格的抽象高度来看，常见的分布式应用架构风格有三种：

分布式对象（Distributed Objects，简称DO）
架构实例有CORBA/RMI/EJB/DCOM/.NET Remoting等等

远程过程调用（Remote Procedure Call，简称RPC）
架构实例有SOAP/XML-RPC/Hessian/Flash AMF/DWR等等

表述性状态转移（Representational State Transfer，简称REST）
架构实例有HTTP/WebDAV

DO和RPC这两种架构风格在企业应用中非常普遍，而REST则是Web应用的架构风格，它们之间有非常大的差别。

REST与DO的差别在于：

REST支持抽象（即建模）的工具是资源，DO支持抽象的工具是对象。在不同的编程语言中，对象的定义有很大差别，所以DO风格的架构通常都是与某种编程语言绑定的。跨语言交互即使能实现，实现起来也会非常复杂。而REST中的资源，则完全中立于开发平台和编程语言，可以使用任何编程语言来实现。

DO中没有统一接口的概念。不同的API，接口设计风格可以完全不同。DO也不支持操作语义对于中间组件的可见性。

DO中没有使用超文本，响应的内容中只包含对象本身。REST使用了超文本，可以实现更大粒度的交互，交互的效率比DO更高。

REST支持数据流和管道，DO不支持数据流和管道。

DO风格通常会带来客户端与服务器端的紧耦合。在三种架构风格之中，DO风格的耦合度是最大的，而REST的风格耦合度是最小的。REST松耦合的源泉来自于统一接口+超文本驱动。

REST与RPC的差别在于：

REST支持抽象的工具是资源，RPC支持抽象的工具是过程。REST风格的架构建模是以名词为核心的，RPC风格的架构建模是以动词为核心的。简单类比一下，REST是面向对象编程，RPC则是面向过程编程。

RPC中没有统一接口的概念。不同的API，接口设计风格可以完全不同。RPC也不支持操作语义对于中间组件的可见性。

RPC中没有使用超文本，响应的内容中只包含消息本身。REST使用了超文本，可以实现更大粒度的交互，交互的效率比RPC更高。

REST支持数据流和管道，RPC不支持数据流和管道。

因为使用了平台中立的消息，RPC风格的耦合度比DO风格要小一些，但是RPC风格也常常会带来客户端与服务器端的紧耦合。支持统一接口+超文本驱动的REST风格，可以达到最小的耦合度。


　REST架构遵循了CRUD原则，CRUD原则对于资源只需要四种行为：Create（创建）、Read（读取）、Update（更新）和Delete（删除）就可以完成对其操作和处理。这四个操作是一种原子操作，即一种无法再分的操作，通过它们可以构造复杂的操作过程，正如数学上四则运算是数字的最基本的运算一样。

REST架构让人们真正理解我们的网络协议HTTP本来面貌，对资源的操作包括获取、创建、修改和删除资源的操作正好对应HTTP协议提供的GET、POST、PUT和DELETE方法:

1) 使用HTTP POST方法去创建 资源

2) 使用HTTP GET方法去读取 资源

3) 使用HTTP PUT 方法去更新 资源

4) 使用HTTP DELETE方法去删除 资源

因此REST把HTTP对一个URL资源的操作限制在GET、POST、PUT和DELETE这四个之内。这种针对网络应用的设计和开发方式，可以降低开发的复杂性，提高系统的可伸缩性。


## Version Control - 版本控制系统:

## Code Review - 代码审查工具:

SourceAnalysis （StyleCop）的终极目标是让所有人都能写出优雅和一致的代码，因此这些代码具有很高的可读性。
SourceAnalysis （StyleCop）不是代码格式化（代码美化）工具，而是代码规范检查工具（Code Review 工具），它不仅仅检查代码格式，而是编码规范，包括命名和注释等。
SourceAnalysis （StyleCop）目的是帮助项目团队执行一系列常用的源代码格式规范，这些规范是关于如何开发布局规整，易读，易维护并且文档良好的优雅代码的 （help teams enforce a common set of best practices for layout, readability, maintainability, and documentation of C# source code）。
SourceAnalysis （StyleCop） 现在包含了 200 个左右的最佳实践规则（best practice rules），这些规则与 Visual Studio 2005 和  Visual Studio 2008 中默认的代码格式化规则是一致的。

[StyleCop](http://stylecop.codeplex.com/)

## Web Server
Nginx是一款轻量级的Web 服务器／反向代理服务器及电子邮件（IMAP/POP3）代理服务器，并在一个BSD-like 协议下发行。
[Nginx](http://nginx.org/)
[Windows 下使用 Nginx+Mono 部署 ASP.Net](http://zhangguofuwangyi.blog.163.com/blog/static/17175948720109461452894/)

## 构建全面统一的IT运维管理体系
[监控宝](http://www.jiankongbao.com/)
---

---
