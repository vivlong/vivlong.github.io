---
layout: post  
title:  通过BitNami安装的Gitlab如何重启
category: 架构  
---
#### 通过BitNami安装的Gitlab如何重启？  
先说怎么重启

  1、找到BitNami gitlab的安装目录，我安装在默认目录下：/opt/gitlab-7.8.1-0

  2、运行命令：sudo ./ctlscript.sh start

  3、然后你就会愉快的看到这个脚本在帮你慢慢重启mysql、redis、gitlab组件和apache  

今天遇到的问题是git服务器重启，但是BitNami没有加入启动项，就导致了访问git服务器的时候出现访问错误。
- - -
