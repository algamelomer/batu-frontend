import{o,c as n,a as t,y as d}from"./index-LWMYTzMc.js";const a={class:"max-w-sm rounded overflow-hidden relative shadow-lg bg-gray-700 m-auto w-96 h-[30rem]"},s={class:"h-80"},r=["src","alt"],c={class:"px-6 py-4"},m={class:"font-bold text-xl mb-2"},b={class:"px-6 pt-4 pb-2 flex justify-between absolute bottom-2 w-full"},g={__name:"Cards",props:{item:Object,handleEdit:Function,handleDelete:Function},setup(e){return(h,i)=>(o(),n("div",a,[t("div",s,[t("img",{loading:"lazy",class:"w-full h-full object-cover",src:e.item.logo||e.item.image||e.item.file||e.item.iconPath,alt:e.item.name||e.item.title},null,8,r)]),t("div",c,[t("div",m,d(e.item.name||e.item.title),1)]),t("div",b,[t("button",{onClick:i[0]||(i[0]=l=>e.handleEdit(e.item.id)),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-500 rounded"},"edit"),t("button",{onClick:i[1]||(i[1]=l=>e.handleDelete(e.item.id)),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-500 rounded"},"delete")])]))}};export{g as _};
