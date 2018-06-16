## 目标
http://www.kanunu8.com/book/4430/
爬去该网页上鲁迅作品《三闲集》的正文所在的网页
直接将文件内容写入本地的文件系统

## 分析
该网站为html + css 写的静态网页，没有AJAX技术。
字符集为gb2312 原生nodejs不支持

观察URL规律:
http://www.kanunu8.com/book/4430/55262.html 
——》http://www.kanunu8.com/book/4430/55295.html

1. 写一个循环，依次爬去各个网页

2. 在on("end")后，直接将内容写入本地。

## 总结
现在的飞快，刚一运行，一两秒就把所有的结果下载下来了。

还有一个道理，不在http响应中指明chareset指明字符集，在html中没用

这是打印日志，可以看到异步IO的巨大优势。

```
getting 55264.html
wirting 55264.html
getting 55262.html
getting 55276.html
wirting 55276.html
getting 55266.html
wirting 55266.html
getting 55268.html
done 55266.html
done 55276.html
done 55264.html
wirting 55268.html
getting 55265.html
getting 55289.html
done 55268.html
wirting 55289.html
done 55289.html
getting 55295.html
getting 55292.html
getting 55294.html
getting 55291.html
wirting 55262.html
getting 55290.html
wirting 55290.html
getting 55293.html
done 55290.html
done 55262.html
getting 55282.html
getting 55287.html
wirting 55282.html
done 55282.html
wirting 55295.html
done 55295.html
wirting 55291.html
wirting 55292.html
done 55291.html
done 55292.html
wirting 55293.html
done 55293.html
wirting 55294.html
done 55294.html
getting 55281.html
getting 55286.html
getting 55288.html
getting 55283.html
wirting 55287.html
done 55287.html
getting 55267.html
getting 55272.html
getting 55270.html
wirting 55281.html
done 55281.html
wirting 55288.html
done 55288.html
getting 55273.html
getting 55285.html
getting 55280.html
getting 55278.html
wirting 55286.html
done 55286.html
getting 55284.html
wirting 55272.html
done 55272.html
getting 55263.html
getting 55279.html
wirting 55283.html
done 55283.html
getting 55274.html
getting 55271.html
getting 55275.html
getting 55269.html
getting 55277.html
wirting 55270.html
wirting 55267.html
done 55270.html
done 55267.html
wirting 55278.html
done 55278.html
wirting 55280.html
wirting 55265.html
done 55280.html
done 55265.html
wirting 55273.html
done 55273.html
wirting 55274.html
wirting 55285.html
done 55285.html
done 55274.html
wirting 55275.html
done 55275.html
wirting 55269.html
done 55269.html
wirting 55263.html
done 55263.html
wirting 55277.html
done 55277.html
wirting 55284.html
wirting 55271.html
done 55284.html
done 55271.html
wirting 55279.html
done 55279.html
```