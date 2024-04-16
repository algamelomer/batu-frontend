import{C as w,r as p,c as s,e as f,a as e,l as k,H as D,F as c,b as h,d as _,i as d,o as a,y as o}from"./index-LWMYTzMc.js";import{u as C}from"./auth-6_PZbXhN.js";import{_ as S}from"./AddButton-la3Ryn68.js";const V=e("div",{class:"flex flex-col items-center w-2/3 sm:w-9/12 md:w-5/6 lg:w-11/12 mt-2 border-t border-gray-700"},null,-1),B={class:"relative overflow-x-auto mx-4 mt-4 w-2/3 sm:w-9/12 md:w-5/6 lg:w-11/12"},j={class:"relative"},E=e("option",{disabled:"",value:""},"Select Department",-1),L=["value"],N=e("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[e("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e("path",{"fill-rule":"evenodd",d:"M8.293 11.293a1 1 0 011.414 0L12 13.586V7a1 1 0 112 0v6.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})])],-1),$={class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mt-8"},A=e("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"},[e("tr",null,[e("th",{scope:"col",class:"px-6 py-3"}," name "),e("th",{scope:"col",class:"px-6 py-3"}," description "),e("th",{scope:"col",class:"px-6 py-3"}," lecturer "),e("th",{scope:"col",class:"px-6 py-3"}," academic year "),e("th",{scope:"col",class:"px-6 py-3"}," semester "),e("th",{scope:"col",class:"px-6 py-3"}," credits "),e("th",{scope:"col",class:"px-6 py-3"}," edit subject "),e("th",{scope:"col",class:"px-6 py-3"}," remove subject ")])],-1),F={scope:"row",class:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"},M={class:"px-6 py-4"},P={class:"px-6 py-4"},U={class:"px-6 py-4"},z={class:"px-6 py-4"},H={class:"px-6 py-4"},I={class:"px-6 py-4"},R=["onClick"],T={class:"px-6 py-4"},q=["onClick"],W={__name:"Dashboard_study_plan",setup(G){const g=C(),i=w(),u=p(null),r=p(null),n=p("");(async()=>{await d().getStudyPlan("/"),u.value=d().studyPlan.data,await d().getDepartments("/"),r.value=d().department.departments,console.log(r.value)})();const x=()=>{i.push({name:"DashboardUpload",params:{category:"study"}})},b=l=>{i.push({name:"DashboardEdit",params:{category:"study",id:l}})},m=async l=>{await g.handleStudyDelete(l)};return(l,y)=>(a(),s(c,null,[f(S,{buttonText:"want to add subject?",buttonLabel:"Add",handleClick:x}),V,e("div",B,[e("div",j,[r.value?k((a(),s("select",{key:0,id:"department","onUpdate:modelValue":y[0]||(y[0]=t=>n.value=t),class:"block appearance-none w-full bg-gray-400 border border-gray-300 text-gray-900 py-3 px-4 pr-8 rounded-lg focus:outline-none focus:bg-white focus:border-gray-500"},[E,(a(!0),s(c,null,h(r.value,t=>(a(),s("option",{key:t.id,value:t.id},o(t.name),9,L))),128))],512)),[[D,n.value]]):_("",!0),N]),e("table",$,[A,e("tbody",null,[(a(!0),s(c,null,h(u.value,t=>(a(),s("tr",{class:"bg-white border-b dark:bg-gray-800 dark:border-gray-700",key:t.id},[n.value==t.department_id?(a(),s(c,{key:0},[e("th",F,o(t.name),1),e("td",M,o(t.description),1),e("td",P,o(t.lecturer),1),e("td",U,o(t.academic_year),1),e("td",z,o(t.semester),1),e("td",H,o(t.credits),1),e("td",I,[e("button",{onClick:v=>b(t.id),class:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-500 rounded"},"edit",8,R)]),e("td",T,[e("button",{onClick:v=>m(t.id),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-500 rounded"},"delete",8,q)])],64)):_("",!0)]))),128))])])])],64))}};export{W as default};