import{C as p,r as f,x as _,c as n,e as l,w as h,F as c,a as D,E as b,o as t,b as y,p as x}from"./index-LWMYTzMc.js";import{f as g}from"./filterData-1zVakbgj.js";import{u as k}from"./auth-6_PZbXhN.js";import{_ as E}from"./AddButton-la3Ryn68.js";import{_ as w}from"./Grid-i8WpFMf9.js";import{_ as B}from"./Cards-vTspZuXl.js";const C=D("div",{class:"flex flex-col items-center w-full mt-2 border-t border-gray-700"},null,-1),M={__name:"Dashboard_article",setup(v){const i=k(),r=p(),e=f(!1),s=async()=>{try{const a=await b.get("/api/posts");g(a.data,e,"type","article")}catch(a){console.error("Error fetching data:",a)}finally{}};_(()=>{s()});const d=()=>{r.push({name:"DashboardUpload",params:{category:"article"}})},m=a=>{r.push({name:"DashboardEdit",params:{category:"article",id:a}})},u=async a=>{await i.handlePostsDelete(a),s()};return(a,$)=>(t(),n(c,null,[l(E,{buttonText:"Want to add article?",buttonLabel:"Add",handleClick:d}),C,l(w,{apiData:e.value},{default:h(()=>[(t(!0),n(c,null,y(e.value,o=>(t(),x(B,{key:o.id,item:o,handleEdit:m,handleDelete:u},null,8,["item"]))),128))]),_:1},8,["apiData"])],64))}};export{M as default};
