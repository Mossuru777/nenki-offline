(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1437)}])},1102:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return Y}});var i=t(5893);t(7294);var r=t(1506),l=t(8346),s=t(1401),a=t(6777),o=t(244),c=t(3978),d=t(9417),h=t(5605),x=t(9807),u=t(1893),j=t(1953),f=t(9412),Z=t.n(f);function Y(n){let e=n.persons?n.persons.length>0?n.persons.map(e=>(0,i.jsxs)(d.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,i.jsx)(h.Z,{component:"th",scope:"row",children:(0,i.jsx)(l.Z,{color:"inherit",underline:"none",onClick:()=>n.setEditPerson(e),children:"".concat(e.name).concat(e.title)})}),(0,i.jsx)(h.Z,{align:"right",children:(0,i.jsx)(u.Z,{title:Z().format(e.death_date.format("YYYY-M-D"),"GGN年M月D日>>元年"),children:(0,i.jsx)("span",{children:e.death_date.format("YYYY/M/D")})})}),(0,i.jsx)(h.Z,{align:"right",children:e.nenki_list.next_nenki?(0,i.jsx)(u.Z,{title:(0,i.jsxs)(j.Z,{children:[Z().format(e.nenki_list.next_nenki.date.format("YYYY-M-D"),"GGN年M月D日>>元年"),e.nenki_list.last_nenki?(0,i.jsxs)(j.Z,{mt:1,children:["[前回]",(0,i.jsx)("br",{}),e.nenki_list.last_nenki.title,": ",e.nenki_list.last_nenki.date.format("YYYY/M/D")," (",Z().format(e.nenki_list.last_nenki.date.format("YYYY-M-D"),"GGN年M月D日>>元年"),")"]}):null]}),children:(0,i.jsxs)("span",{children:[e.nenki_list.next_nenki.title,": ",e.nenki_list.next_nenki.date.format("YYYY/M/D")]})}):(0,i.jsx)(u.Z,{title:(0,i.jsxs)(j.Z,{children:["[前回]",(0,i.jsx)("br",{}),e.nenki_list.last_nenki.title,": ",e.nenki_list.last_nenki.date.format("YYYY/M/D")," (",Z().format(e.nenki_list.last_nenki.date.format("YYYY-M-D"),"GGN年M月D日>>元年"),")"]}),children:(0,i.jsxs)("span",{children:[e.nenki_list.last_nenki.title,"が終わっています"]})})}),(0,i.jsx)(h.Z,{align:"right",children:null!==e.gyounen?null!==e.kyounen?(0,i.jsx)(u.Z,{title:"享年 (数え歳): ".concat(e.kyounen),children:(0,i.jsx)("span",{children:e.gyounen})}):e.gyounen:"(不明)"}),(0,i.jsx)(h.Z,{align:"right",children:null!==e.birth_date?e.is_birth_date_accurate?(0,i.jsx)(u.Z,{title:Z().format(e.birth_date.format("YYYY-M-D"),"GGN年M月D日>>元年"),children:(0,i.jsx)("span",{children:e.birth_date.format("YYYY/M/D")})}):(0,i.jsx)(u.Z,{title:"".concat(e.birth_date.format("YYYY/M/D")," (").concat(Z().format(e.birth_date.format("YYYY-M-D"),"GGN年M月D日>>元年"),") 頃"),children:(0,i.jsx)("span",{children:"(不正確)"})}):"(不明)"})]},e.db_id)):(0,i.jsx)(d.Z,{children:(0,i.jsx)(h.Z,{colSpan:4,children:"データがありません"})}):(0,i.jsx)(d.Z,{children:(0,i.jsxs)(h.Z,{colSpan:4,children:[(0,i.jsx)(r.Z,{}),"読込中"]})});return(0,i.jsx)(a.Z,{component:s.Z,children:(0,i.jsxs)(o.Z,{sx:{minWidth:650},"aria-label":"simple table",children:[(0,i.jsx)(c.Z,{children:(0,i.jsxs)(d.Z,{children:[(0,i.jsx)(h.Z,{children:"名前"}),(0,i.jsx)(h.Z,{align:"right",children:"命日"}),(0,i.jsx)(h.Z,{align:"right",children:"次の年忌法要"}),(0,i.jsx)(h.Z,{align:"right",children:"行年 (満年齢)"}),(0,i.jsx)(h.Z,{align:"right",children:"生年月日"})]})}),(0,i.jsx)(x.Z,{children:e})]})})}},2802:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var i=t(5893);t(7294);var r=t(9630);function l(n){return(0,i.jsx)(r.Z,{component:"h2",variant:"h5",gutterBottom:!0,children:n.children})}},1437:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return N}});var i=t(5893),r=t(7294),l=t(9762),s=t(1927),a=t(793),o=t(1953),c=t(784),d=t(9630),h=t(6336),x=t(8346),u=t(612),j=t(9072),f=t(4099),Z=t(5084),Y=t(6540),m=t(6043),_=t(1039),k=t(1614),p=t(2802),g=t(1102),b=t(8125),M=t(4276),D=t(8),y=t.n(D);function v(n,e){let t=[n.year(),n.month()+1,n.date()];return e&&t.push(n.hour(),n.minute()),t}function w(n){return(0,i.jsxs)(d.Z,{variant:"body2",color:"text.secondary",align:"center",...n,children:["Copyright \xa9 ",(0,i.jsx)(x.Z,{color:"inherit",href:"https://github.com/Mossuru777/",children:"Mossuru777"})," ",new Date().getFullYear(),"."]})}let G=(0,l.Z)();function N(){let n=(0,_.useLiveQuery)(()=>k.Z.instance.getAllPersons()),[e,t]=r.useState(void 0),l=()=>t(void 0),[x,D]=r.useState(!1),N=()=>{if(x||!n)return;D(!0);let[e,t]=function(n){let e=y().tz("Asia/Tokyo"),t={calName:"年忌カレンダー",productId:"Nenki Calendar",lastModified:v(y()(e).utc(),!0)},i=[];for(let r of n){let l=v(r.death_date,!1);for(let s of r.nenki_list.nenki_array)i.push(Object.assign({start:v(s.date,!1),end:v(y()(s.date).add(1,"days"),!1),title:s.summary,description:s.description,created:l},t))}let a=(0,M.nj)(i);if(a.error)throw a.error;let o=URL.createObjectURL(new Blob([a.value],{type:"text/calendar"}));return[o,e]}(n),i=document.createElement("a");i.href=e,i.download="nenki_".concat(t.format("YYYY-MM-DD_HH-mm-ss"),".ics"),i.click(),i.remove(),D(!1)};return(0,i.jsx)(s.Z,{theme:G,children:(0,i.jsxs)(o.Z,{sx:{display:"flex"},children:[(0,i.jsx)(a.ZP,{}),(0,i.jsx)(u.Z,{position:"absolute",children:(0,i.jsx)(c.Z,{children:(0,i.jsx)(d.Z,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,sx:{flexGrow:1},children:"Nenki Offline"})})}),(0,i.jsxs)(o.Z,{component:"main",sx:{backgroundColor:n=>"light"===n.palette.mode?n.palette.grey[100]:n.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},children:[(0,i.jsx)(c.Z,{}),(0,i.jsxs)(h.Z,{maxWidth:"lg",sx:{mt:4,mb:4},children:[(0,i.jsx)(p.default,{children:"一覧"}),(0,i.jsx)(g.default,{persons:n,setEditPerson:t}),(0,i.jsx)(o.Z,{mt:2,children:(0,i.jsxs)(j.ZP,{container:!0,direction:"row",justifyContent:"flex-end",alignItems:"center",spacing:2,children:[(0,i.jsx)(j.ZP,{item:!0,children:(0,i.jsx)(f.Z,{variant:"contained",color:"secondary",loading:x,disabled:!n||0===n.length,startIcon:(0,i.jsx)(m.Z,{}),loadingPosition:"start",onClick:N,children:"ダウンロード"})}),(0,i.jsx)(j.ZP,{item:!0,children:(0,i.jsx)(Z.Z,{variant:"contained",color:"primary",startIcon:(0,i.jsx)(Y.Z,{}),onClick:()=>t(null),children:"人物の追加"})})]})}),(0,i.jsx)(b.default,{editPerson:e,closeDialog:l}),(0,i.jsx)(w,{sx:{pt:4}})]})]})]})})}}},function(n){n.O(0,[774,678,885,630,202,174,340,791,125,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);