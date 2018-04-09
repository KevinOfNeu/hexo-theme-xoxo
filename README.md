# hexo-theme-xoxo

Hexo theme inspired by [microb](https://github.com/microacup/hexo-theme-micorb) 

[Demo](https://blog.0xff000000.com)

Snapshots: 

![](http://7xr586.com1.z0.glb.clouddn.com/images/fbehv.png)

![](http://7xr586.com1.z0.glb.clouddn.com/images/kwyq1.png)

![](http://7xr586.com1.z0.glb.clouddn.com/images/og6jh.png)

...

## 特点

- 简约
- 对移动屏幕友好
- 名字骚气...
- 颜色搭配让人更容易集中注意力
- 编不下去了


## 使用
除了基础 Hexo 配置外,你还需要这样...

### _config.yml
```yml
# Custom Config
menu:
  home: /
  archives: /archives
  tags: /tags
  search: /search
  about: https://0xff000000.com
  rss: /atom.xml

search:
  path: search.xml
  field: post

#RSS feed https://github.com/hexojs/hexo-generator-feed
feed:
  type: atom
  path: atom.xml
  limit: 20
  hub:
  content_limit: 140


sitemap:
    path: sitemap.xml

disqus_shortname: XXX

google_analytics: XXX
baidu_analytics: FuckUBaidu

#footer
index_page: https://blog.0xff000000.com
main_site: https://0xff000000.com
github: https://github.com/KevinOfNeu

```

## TODO
- [ ] 模板文件中的中文字符提取, 支持 i18n
- [ ] 增加分享 widget
