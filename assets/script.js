var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/*! For license information please see script.js.LICENSE.txt */
!function(){var e=document,o=window,i=navigator,a=encodeURIComponent,t=o.location,r="koko_analytics";o[r].trackPageview=function(n){if("prerender"!=e.visibilityState&&!/bot|crawl|spider|seo|lighthouse|facebookexternalhit|preview/i.test(i.userAgent)){var c,s=(c=e.cookie.match(/_koko_analytics_pages_viewed=([^;]+)/))?c.pop().split("a"):[];n+="";var d,p=s.length?0:1,l=-1==s.indexOf(n)?1:0,f=e.referrer;0==e.referrer.indexOf(o[r].site_url)&&(f="",o[r].use_cookie||(p=0,e.referrer==t.href&&(l=0))),d="p="+n+"&nv="+p+"&up="+l+"&r="+a(f),d=o[r].url+(o[r].url.indexOf("?")>-1?"&":"?")+d,i.sendBeacon?i.sendBeacon(d):o.fetch(d,{method:"POST"}),l&&s.push(n),o[r].use_cookie&&(e.cookie="_"+r+"_pages_viewed="+s.join("a")+";SameSite=lax;path="+o[r].cookie_path+";max-age=21600")}},o.addEventListener("load",(function(){o[r].trackPageview(o[r].post_id)}))}();
}

/*
     FILE ARCHIVED ON 09:50:31 Jul 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 12:42:27 Feb 02, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.561
  exclusion.robots: 0.02
  exclusion.robots.policy: 0.008
  esindex: 0.01
  cdx.remote: 2152.735
  LoadShardBlock: 484.677 (3)
  PetaboxLoader3.datanode: 508.946 (5)
  load_resource: 69.217
  loaddict: 39.795
*/