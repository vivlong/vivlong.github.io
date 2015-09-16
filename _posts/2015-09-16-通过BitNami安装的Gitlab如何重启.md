---
layout: post  
title:  通过BitNami安装的Gitlab如何重启
category: 架构  
---
#### 通过BitNami安装的Gitlab如何重启？  

查阅[Bitnami官方文档](https://bitnami.com/stack/gitlab/README.txt)  


  To start/stop/restart application on Linux you can use the included ctlscript.sh
utility, as shown below:

       ./ctlscript.sh (start|stop|restart)
       ./ctlscript.sh (start|stop|restart) postgres
       ./ctlscript.sh (start|stop|restart) redis
       ./ctlscript.sh (start|stop|restart) apache
       ./ctlscript.sh (start|stop|restart) sidekiq

  start      - start the service(s)
  stop       - stop  the service(s)
  restart    - restart or start the service(s)


- - -
