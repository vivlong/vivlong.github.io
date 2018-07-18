---
layout: post  
title:  WordPress如何绑定多个域名  
category: blog  
tags: [WP]  
---  


使用过wordpress的站长应该都清楚，wordpress在安装的时候会默认绑定当前的域名，后续绑定其他的域名但是页面的链接也还是安装时候的域名。那么今天给大家分享一下wordpress绑定多个域名或者取消域名绑定限制的方法。  
### 1.  打开网站根目录下的wp-config.php，在define(‘WP_DEBUG’, false);后面添加下面内容  

	define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST']);  
	define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST']);   

### 2.  这两句的意思就是设置网站域名为当前访问的域名，也就是取消了域名的绑定，如果不需要任意域名都能访问，只是几个域名的话，可以这样：  

	$domain = array("www.a.com", "www.b.com", "www.c.com"); 
	if(in_array($_SERVER['HTTP_HOST'], $domain)){
    	define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST']);
    	define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST']);
	}   

### 3.  把指定的域名放在$domain数组里面即可  
  

### 4.  注意：

如果是https，请修改代码里面的http://为https://；
如果网站安装在二级目录，则将’http://’ . $_SERVER[‘HTTP_HOST’]修改为’http://’ . $_SERVER[‘HTTP_HOST’].’/对应目录名’
2. 在完成上面的工作以后，你的网站已经可以实现多域名访问了，但是还是有一个问题，那就是静态资源，在wordpress上传的图片插入文章里面，地址是固定的，修改域名以后，并不会修改图片的域名，所以还需要修改静态文件地址，使用以下代码可以解决：  
 

	define( 'WP_CONTENT_URL', '/wp-content');


### 5.  把这段代码加入上面的代码下面即可。

OK，到这里你的网站已经完美的突破了域名绑定的限制了。  



---

