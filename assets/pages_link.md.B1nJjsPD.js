import{L as a,_ as s,s as e}from"./chunks/theme.D7APZqDh.js";import{_ as l,b as t,J as n,C as i,c,F as r,H as d,e as u,A as o,f as p,D as m,B as h,T as v,y as k,u as g,E as f}from"./chunks/framework.DttWr7at.js";const y={key:0,class:"link-list"},L={class:"title"},w={class:"name"},_={class:"name-text"},D={key:0,class:"name-count"},F={class:"tip"},b={key:0,class:"all-link"},C=["href"],x={class:"cover"},I=["src","alt"],O={class:"data"},P={class:"desc"},j={key:1,class:"no-data"},B=l({__name:"LinkList",props:{listData:{type:[Array,String],default:()=>[]},showCount:{type:Boolean,default:!0},useFriendsLink:{type:Boolean,default:!1}},setup:s=>(e,l)=>{const k=a;return t(),n(v,{name:"fade",mode:"out-in"},{default:i((()=>{var a;return[(null==(a=s.listData)?void 0:a.length)?(t(),c("div",y,[(t(!0),c(r,null,d(s.listData,((a,e)=>{var n;return t(),c("div",{key:e,class:"link-type-list"},[u("div",L,[u("h2",w,[u("span",_,o((null==a?void 0:a.typeName)||"未知分组"),1),s.showCount?(t(),c("span",D,"（"+o((null==(n=null==a?void 0:a.typeList)?void 0:n.length)||0)+"）",1)):p("",!0)]),u("span",F,o((null==a?void 0:a.typeDesc)||"分组暂无简介"),1)]),(null==a?void 0:a.typeList)?(t(),c("div",b,[(t(!0),c(r,null,d(a.typeList,((e,n)=>(t(),c("a",{class:m(["link-card","s-card",{loss:"loss"===(null==a?void 0:a.type),"cf-friends-link":"loss"!==(null==a?void 0:a.type)&&s.useFriendsLink}]),key:n,href:"loss"!==(null==a?void 0:a.type)?e.url:null,target:"_blank"},[u("div",x,[h(k,{useFriendsLink:e.avatar||e.ico},{default:i((()=>[u("img",{src:e.avatar||e.ico,class:m(["cover-img",{"cf-friends-avatar":s.useFriendsLink}]),alt:(null==e?void 0:e.name)||"cover",onLoad:l[0]||(l[0]=a=>a.target.classList.add("loaded"))},null,42,I)])),_:2},1032,["useFriendsLink"])]),u("div",O,[u("span",{class:m(["name",{"cf-friends-name":s.useFriendsLink}])},o(e.name),3),u("span",P,o(e.desc),1)])],10,C)))),128))])):p("",!0)])})),128))])):(t(),c("div",j,"暂无友链数据"))]})),_:1})}},[["__scopeId","data-v-3c82cc0e"]]),N=[{type:"rec",typeName:"推荐",typeDesc:"都是大佬，推荐关注",typeList:[{name:"WL",avatar:"https://cdn.luogu.com.cn/upload/usericon/851495.png",desc:"WritingLetter，《南谷的往事与未来》作者",url:"https://www.luogu.com.cn/user/851495"},{name:"一只小菜包",avatar:"https://cdn.luogu.com.cn/upload/usericon/907233.png",desc:"少年陈哲原作者",url:"https://www.luogu.com.cn/user/907233"},{name:"CodingOIer",avatar:"https://cdn.luogu.com.cn/upload/usericon/754324.png",desc:"顶级OIer，洛谷工具站建立者",url:"https://www.luogu.com.cn/user/754324"},{name:"Ender_pearl2333",avatar:"https://cdn.luogu.com.cn/upload/usericon/1167457.png",desc:"tsh朋友，mc大佬",url:"https://www.luogu.com.cn/user/1167457"}]}],A={class:"link"},E={class:"menu"},J=l({__name:"Link",setup:a=>(k((()=>N.flatMap((a=>a.typeList)))),(a,l)=>{const n=s,r=B;return t(),c("div",A,[h(n,{type:"page",title:"友情链接",desc:"与各位oier无限进步"},{"header-slot":i((()=>[u("div",E,[u("div",{class:"menu-item add",onClick:l[0]||(l[0]=a=>g(e)("#友情链接申请"))},l[1]||(l[1]=[u("i",{class:"iconfont icon-right-round"},null,-1),u("span",{class:"name"},"申请友链",-1)]))])])),_:1}),h(r,{listData:g(N),useFriendsLink:!0},null,8,["listData"])])})},[["__scopeId","data-v-3028a12e"]]),S=JSON.parse('{"title":"友情链接","description":"","frontmatter":{"title":"友情链接","aside":false,"comment":true,"head":[["link",{"rel":"canonical","href":"https://tsh1203.us.kg/pages/link"}]]},"headers":[],"relativePath":"pages/link.md","filePath":"pages/link.md","lastUpdated":1735559045000}'),W={name:"pages/link.md"},H=Object.assign(W,{setup:a=>(a,s)=>(t(),c("div",null,[h(J),s[0]||(s[0]=u("h1",{id:"友情链接申请",tabindex:"-1"},[f("友情链接申请 "),u("a",{class:"header-anchor",href:"#友情链接申请","aria-label":'Permalink to "友情链接申请"'},"​")],-1)),s[1]||(s[1]=u("p",null,"很高兴能和各位优秀的朋友们交流，本站友链目前采用**手动添加*，请联系洛谷用户1485346申请。",-1)),s[2]||(s[2]=u("h3",{id:"友链相关须知",tabindex:"-1"},[f("友链相关须知 "),u("a",{class:"header-anchor",href:"#友链相关须知","aria-label":'Permalink to "友链相关须知"'},"​")],-1)),s[3]||(s[3]=u("ul",null,[u("li",null,"为了友链相关页面和组件的统一性和美观性，可能会对你的部分信息进行缩短处理"),u("li",null,"请私信洛谷用户1485346申请")],-1))]))});export{S as __pageData,H as default};