muban.首图.二级.重定向='js:let url = jsp.pd(html,".playbtn&&a&&href");log("重定向到:"+url);html = request(url)';
muban.首图.二级.tabs='.play_source_tab a';
muban.首图.二级.lists='.play_list_box:eq(#id) li';

var rule = Object.assign(muban.首图,{
    title:'真爱影视',
    host:'https://www.znlove.net',
    url:'/index.php/vod/show/id/fyclass/page/fypage.html',
    searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{
        'User-Agent':'UC_UA',
    },
    // class_parse:'.fed-pops-navbar&&ul.fed-part-rows&&a.fed-part-eone:gt(0):lt(5);a&&Text;a&&href;.*/(.*?).html',
    //class_parse:'.top_nav&&ul li:gt(0):lt(25);a&&Text;a&&href;.*/(.*?).html',
    class_name:'电影&电视剧&综艺&动漫&国产剧&港台剧&日韩剧&欧美剧&海外剧',
    class_url:'1&2&3&4&13&14&15&16&27',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'ul.vodlist.vodlist_wi;li;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'li.vodlist_item;a&&title;a&&data-original;.pic_text.text_right&&Text;a&&href',
    //二级:{"title":"h2&&Text;.content_detail.content_min.fl .data_style&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(0)&&Text;.content_detail.content_min.fl li:eq(2)&&Text;.content_detail.content_min.fl li:eq(3)&&Text","content":".content&&Text","tabs":".play_source_tab:eq(0) a","lists":".content_playlist:eq(#id) li"},
    二级:{"title":"h2&&Text;.text-muted:eq(-1)&&Text","img":".content_thumb .vodlist_thumb&&data-original","desc":".content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl li:eq(-1)&&Text;.content_detail.content_min.fl&&ul&&li:eq(3)&&Text;.content_detail.content_min.fl&&ul&&li:eq(0)&&Text;.content_detail.content_min.fl&&ul&&li:eq(1)&&Text","content":".content&&Text","tabs":".play_source_tab&&a","lists":".play_list_box:eq(#id)&&.content_playlist li"},
    搜索:'body .searchlist_item;a&&title;.vodlist_thumb&&data-original;.pic_text.text_right&&Text;a&&href;.vodlist_sub&&Text',
});
