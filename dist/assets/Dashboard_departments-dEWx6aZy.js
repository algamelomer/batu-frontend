import{C as u,r as _,c as n,e as l,w as f,F as c,a as h,E as D,o as t,b,p as y}from"./index-LWMYTzMc.js";import{u as x}from"./auth-6_PZbXhN.js";import{_ as g}from"./AddButton-la3Ryn68.js";import{_ as k}from"./Grid-i8WpFMf9.js";import{_ as E}from"./Cards-vTspZuXl.js";const w=h("div",{class:"flex flex-col items-center w-full mt-2 border-t border-gray-700"},null,-1),N={__name:"Dashboard_departments",setup(v){const d=x(),r=u(),e=_(!1),s=async()=>{try{const a=await D.get("/api/department");e.value=a.data.departments}catch(a){console.error("Error fetching data:",a)}finally{}};s();const m=()=>{r.push({name:"DashboardUpload",params:{category:"department"}})},i=a=>{r.push({name:"DashboardEdit",params:{category:"department",id:a}})},p=async a=>{await d.handleDepartmentDelete(a),s()};return(a,B)=>(t(),n(c,null,[l(g,{buttonText:"add department",buttonLabel:"Add",handleClick:m}),w,l(k,{apiData:e.value},{default:f(()=>[(t(!0),n(c,null,b(e.value,o=>(t(),y(E,{key:o.id,item:o,handleEdit:i,handleDelete:p},null,8,["item"]))),128))]),_:1},8,["apiData"])],64))}};export{N as default};