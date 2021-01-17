(this["webpackJsonpmy-redux-todo-app"]=this["webpackJsonpmy-redux-todo-app"]||[]).push([[0],{18:function(e,t,a){e.exports=a(38)},23:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(6),i=a.n(l),r=(a(23),a(39)),s=function(e){return{type:"SET_GROUP",payload:{id:e}}},o=function(e){return{type:"ADDING_GROUP",payload:{title:e}}},d=function(e){return{type:"IS_EDITING_GROUP",payload:{isEditing:e}}},u=function(e){return{type:"SET_LIST",payload:{id:e}}},m=function(e){return{type:"ADDING_LIST",payload:{title:e}}},p=function(e){return{type:"EDITING_LIST",payload:{title:e}}},E=function(e){return{type:"IS_EDITING_LIST",payload:{isEditing:e}}},b=function(e){return{type:"SET_TASK",payload:{id:e}}},f=function(e){return{type:"ADDING_TASK",payload:{title:e}}},y=function(e,t){return{type:"CHECK_TASK",payload:{id:e,isChecked:t}}},k=function(e){return{type:"EDITING_TASK",payload:{title:e}}},v=function(e){return{type:"IS_EDITING_TASK",payload:{isEditing:e}}},N=function(e){return{type:"DELETE_TASK",payload:{id:e}}},O=function(e,t){return{type:"ADD_TO_MY_DAY",payload:{id:e,addedToMyDay:t}}},T=function(e,t){return{type:"DUE_DATE",payload:{id:e,Planned:t}}},h=function(e,t,a){return{type:"OPEN_MENU",payload:{isOpen:e,source:t,sourceId:a}}},I=function(e){return{type:"OPEN_DETAILBAR",payload:{isOpen:e}}},g=function(e){return{type:"OPEN_TOOLBAR",payload:{isOpen:e}}},j=a(1),D=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.addingTask.title})),a=Object(j.c)((function(e){return e.currentList.listId}));return c.a.createElement("div",{className:"task-item-body add-task-body"},c.a.createElement("div",{className:"add-list add-task"},c.a.createElement("button",{className:"btn btn-no-hover",onClick:function(){e({type:"ADD_TASK",payload:{id:Object(r.a)(),title:t,steps:[],isChecked:!1,addedToMyDay:null,Important:!1,Planned:null,parentList:a,createdAt:Date.now()}}),e(f(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{className:"btn-no-hover",type:"text",name:"addTask",maxLength:"255",placeholder:"New Task",value:t,onChange:function(t){e(f(t.target.value))}})))},_=function(e){var t=e.source,a=e.sourceId,n=e.taskOrList,l=Object(j.b)(),i=Object(j.c)((function(e){return e.menu.source}));return c.a.createElement("div",{className:"tasks-toolbar-menu unhide"},c.a.createElement("ul",null,c.a.createElement("div",{onClick:function(){l(function(e,t){switch(e){case"TASK_ITEM":case"TASK_DETAIL":return{type:"RENAMEING_TASK",payload:{taskId:t,isEditing:!0}};case"TASK_HEADER":return{type:"RENAMEING_LIST",payload:{listId:t,isEditing:!0}}}}(t,a))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Rename",n))))),c.a.createElement("div",{onClick:function(){"TASK_HEADER"===i?(l(I(!1)),l(u("Tasks")),l({type:"DELETE_LIST",payload:{id:a}})):(l(I(!1)),l(N(a)))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Delete ",n)))))))},C=function(e){var t=e.taskId,a=e.isEditing,l=e.oldName,i=Object(j.b)(),r=Object(j.c)((function(e){return e.currentTask.title}));return Object(n.useEffect)((function(){i(v(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){i({type:"EDIT_TASK",payload:{id:t,title:r}}),i(k("")),i(v(!1))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editTask",maxLength:"255",placeholder:l,value:r,onChange:function(e){i(k(e.target.value))}}))},A=function(e){var t=e.taskId,a=Object(j.c)((function(e){return function(e,t){return e.tasks.find((function(e){return e.id===t}))}(e,t)})),n=a.id,l=a.title,i=a.isChecked,r=a.Important,s=a.Planned,o=Object(j.b)(),d=Object(j.c)((function(e){return e.menu.isOpen})),u=Object(j.c)((function(e){return e.menu.source})),m=Object(j.c)((function(e){return e.currentTask.taskId})),p=Object(j.c)((function(e){return e.currentTask.isEditing})),E=Object(j.c)((function(e){return e.menu.source})),f=m===t&&"TASK_ITEM"===E&&p,k=Object(j.c)((function(e){return e.detailbar.isOpen}));return c.a.createElement("div",{className:"task-item-body"},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){o(y(n,!i))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:i?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),f?c.a.createElement(C,{taskId:n,isEditing:p,oldName:l}):"",c.a.createElement("button",{className:f?"btn task-item-title hide":null!==s?"btn task-item-title planned":"btn task-item-title",onClick:function(){!1===k&&m!==n?(o(b(n)),o(I(!0))):!0===k&&m!==n?(o(I(!1)),o(b(n)),o(I(!0))):!0===k&&m===n?o(I(!1)):!1===k&&m===n&&o(I(!0))}},c.a.createElement("span",{className:null!==s?"planned-title":""},l),null!==s?c.a.createElement("span",{className:"planned-date"},new Date(s).toLocaleDateString()):null),c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){o(function(e,t){return{type:"IMPORTANT_TASK",payload:{id:e,Important:t}}}(n,!r))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:r?"icon icon-star-checked":"icon icon-star"}))),c.a.createElement("div",{className:"tasks-toolbar-options",onClick:function(){o(b(n)),console.log(d),o(h(!d||m!==n||"TASK_ITEM"!==u,"TASK_ITEM",n))}},c.a.createElement("div",{className:"tasks-toolbar-title-item"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-menu"}))),n===m&&"TASK_ITEM"===u&&d?c.a.createElement(_,{source:"TASK_ITEM",sourceId:n,taskOrList:" task"}):""))},S=function(e){return(new Date).setHours(0,0,0,0)===new Date(e).setHours(0,0,0,0)},L=function(e){return(new Date).setHours(0,0,0,0)<new Date(e).setHours(0,0,0,0)};function w(e){var t=Object(n.useRef)(null);return function(e){var t=Object(j.b)();Object(n.useEffect)((function(){function a(a){e.current&&!e.current.contains(a.target)&&t({type:"TOGGLE_MENU",payload:{isOpen:!1}})}return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[e])}(t),c.a.createElement("div",{ref:t},e.children)}var G=function(){var e=Object(j.c)((function(e){return e.tasks})),t=Object(j.c)((function(e){return e.currentList.listId})),a=function(){switch(t){case"My Day":var a=[],n=[];return e.map((function(e){return S(e.addedToMyDay)?e.isChecked?n.push(e.id):a.push(e.id):null})),c.a.createElement("div",null,a.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})),n.length>0?c.a.createElement("div",null,"Completed Tasks"):null,n.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})));case"Important":var l=[],i=[];return e.map((function(e){return e.Important?e.isChecked?i.push(e.id):l.push(e.id):null})),c.a.createElement("div",null,l.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})),i.length>0?c.a.createElement("div",null,"Completed Tasks"):null,i.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})));case"Planned":var r=[],s=[];return e.map((function(e){return L(e.Planned)?e.isChecked?s.push(e.id):r.push(e.id):null})),c.a.createElement("div",null,r.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})),s.length>0?c.a.createElement("div",null,"Completed Tasks"):null,s.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})));case"Tasks":var o=[],d=[];return e.map((function(e){return"Tasks"===e.parentList?e.isChecked?d.push(e.id):o.push(e.id):null})),c.a.createElement("div",null,o.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})),d.length>0?c.a.createElement("div",null,"Completed Tasks"):null,d.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})));default:var u=[],m=[];return e.map((function(e){return e.parentList===t?e.isChecked?m.push(e.id):u.push(e.id):null})),c.a.createElement("div",null,u.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})),m.length>0?c.a.createElement("div",null,"Completed Tasks"):null,m.map((function(e){return c.a.createElement(A,{key:e,taskId:e})})))}};return c.a.createElement("div",{className:"task-items"},c.a.createElement(w,null,c.a.createElement(a,null)))},P=function(e){var t=e.listId,a=e.isEditing,l=e.oldName,i=Object(j.b)(),r=Object(j.c)((function(e){return e.currentList.title}));return Object(n.useEffect)((function(){i(E(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){i({type:"EDIT_LIST",payload:{id:t,title:r}}),i(p("")),i(E(!1))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editList",maxLength:"255",placeholder:l,value:r,onChange:function(e){i(p(e.target.value))}}))},M=function(e){var t=e.currentListId,a=e.currentListTitle,n=Object(j.c)((function(e){return e.currentList.isEditing})),l="TASK_HEADER"===Object(j.c)((function(e){return e.menu.source}))&&n,i=Object(j.b)(),r=Object(j.c)((function(e){return e.menu.isOpen})),s=Object(j.c)((function(e){return e.currentList.listId})),o=Object(j.c)((function(e){return e.menu.source}));return c.a.createElement("div",{className:"tasks-toolbar"},c.a.createElement("div",{className:"tasks-toolbar-title"},l?c.a.createElement(P,{listId:t,isEditing:n,oldName:a}):"",c.a.createElement("div",{className:l?"tasks-toolbar-title-item hide":"tasks-toolbar-title-item"},c.a.createElement("h1",{className:"list-title"},a))),"My Day"===t||"Important"===t||"Planned"===t||"Tasks"===t?"":c.a.createElement(w,null,c.a.createElement("div",{className:"tasks-toolbar-options",onClick:function(){i(h(!r||s!==t||"TASK_HEADER"!==o,"TASK_HEADER",t))}},c.a.createElement("div",{className:"tasks-toolbar-title-item"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-menu"}))),s===t&&"TASK_HEADER"===o&&r?c.a.createElement(_,{source:"TASK_HEADER",sourceId:t,taskOrList:" list"}):"")))},K=function(){var e=Object(j.c)((function(e){return e.lists})),t=Object(j.c)((function(e){return e.currentList.listId})),a=e.find((function(e){return e.id===t})),n=void 0===a?t:a.title,l=Object(j.c)((function(e){return e.screen.width})),i=Object(j.c)((function(e){return e.detailbar.isOpen})),r=Object(j.c)((function(e){return e.toolbar.isOpen})),s=i||r,o=Object(j.b)();return c.a.createElement("div",{className:"container container-center"},c.a.createElement("button",{className:l<800?"btn overlay-btn":"btn overlay-btn hide",onClick:function(){o(g(!r))}},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:l<1020&&s?"overlay unhide":"overlay",onClick:function(){o(I(!1)),o(g(!1)),o(b(null))}}),c.a.createElement("div",{className:"center tasks"},c.a.createElement(M,{currentListId:t,currentListTitle:n}),c.a.createElement(G,null),c.a.createElement(D,null)))},R=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.addingList.title}));return c.a.createElement("div",{className:"add-list-and-group"},c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){e({type:"ADD_LIST",payload:{id:Object(r.a)(),title:t,group:null}}),e(m(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"addList",maxLength:"255",placeholder:"New List",value:t,onChange:function(t){e(m(t.target.value))}})),c.a.createElement("div",{className:"add-group"},c.a.createElement("button",{className:"btn",onClick:function(){e({type:"ADD_GROUP",payload:{id:Object(r.a)(),title:"New Group"}})}},c.a.createElement("i",{className:"icon icon-group-plus"}))))},x=function(e){var t=e.listId,a=e.listTitle,n=e.activeTaskCount,l=Object(j.b)();return c.a.createElement("div",{key:t,onClick:function(){l(u(t)),l(I(!1)),l(g(!1)),l(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"toolbar-count"},n>0?n:""))))},U=function(e){var t=e.groupId,a=e.isEditing,l=e.oldName,i=Object(j.b)(),r=Object(j.c)((function(e){return e.addingGroup.title}));return Object(n.useEffect)((function(){i(d(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){i({type:"EDIT_GROUP",payload:{id:t,title:r}}),i(o(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editGroup",maxLength:"255",placeholder:l,value:r,onChange:function(e){i(o(e.target.value))}}))},H=function(e){var t=e.groupId,a=e.groupTitle,n=Object(j.b)(),l=Object(j.c)((function(e){return e.tasks})),i=Object(j.c)((function(e){return e.lists})),r=Object(j.c)((function(e){return e.currentGroup.groupId})),o=Object(j.c)((function(e){return e.currentGroup.isEditing})),u=r===t&&"New Group"===a,m=i.filter((function(e){return e.group===t}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("li",{className:"toolbar-item"},u?c.a.createElement(U,{groupId:t,isEditing:!0,oldName:a}):"",c.a.createElement("div",{className:o&&u?"toolbar-inner hide":"toolbar-inner",key:t,onClick:function(){r===t?n(s(null))&&n(d(!1)):n(s(t))}},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-group"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),m.length>0?c.a.createElement("div",{className:"toolbar-collapse-arrow"},c.a.createElement("i",{className:"icon icon-arrow"})):""))),c.a.createElement("ul",{className:r===t?"group-lists unhide":"group-lists"},i.map((function(e){return e.group===t?c.a.createElement(x,{key:e.id,listId:e.id,listTitle:e.title,activeTaskCount:(a=e.id,l.filter((function(e){return e.parentList===a&&!1===e.isChecked}))).length}):"";var a}))))},W=function(){var e=Object(j.c)((function(e){return e.groups}));return c.a.createElement("div",{className:"groups"},e.map((function(e){return c.a.createElement(H,{key:e.id,groupId:e.id,groupTitle:e.title})})))},B=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.tasks})),a=0,n=0,l=0,i=0;return t.forEach((function(e){S(e.addedToMyDay)&&!e.isChecked&&a++,e.Important&&!e.isChecked&&n++,L(e.Planned)&&!e.isChecked&&l++,"Tasks"!==e.parentList||e.isChecked||i++})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){e(u("My Day")),e(I(!1)),e(g(!1)),e(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-sun"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"My Day")),c.a.createElement("div",{className:"toolbar-count"},a>0?a:"")))),c.a.createElement("div",{onClick:function(){e(u("Important")),e(I(!1)),e(g(!1)),e(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-star"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Important")),c.a.createElement("div",{className:"toolbar-count"},n>0?n:"")))),c.a.createElement("div",{onClick:function(){e(u("Planned")),e(I(!1)),e(g(!1)),e(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-calendar"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Planned")),c.a.createElement("div",{className:"toolbar-count"},l>0?l:"")))),c.a.createElement("div",{onClick:function(){e(u("Tasks")),e(I(!1)),e(g(!1)),e(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-home"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Tasks")),c.a.createElement("div",{className:"toolbar-count"},i>0?i:"")))))},J=function(e){var t=e.listId,a=e.listTitle,n=e.activeTaskCount,l=Object(j.b)();return c.a.createElement("div",{key:t,onClick:function(){l(u(t)),l(I(!1)),l(g(!1)),l(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"toolbar-count"},n>0?n:""))))},X=function(){var e=Object(j.c)((function(e){return e.lists})),t=Object(j.c)((function(e){return e.tasks})),a=Object(j.c)((function(e){return e.toolbar.isOpen})),n=Object(j.c)((function(e){return e.screen.width}));return c.a.createElement("div",{className:n<800&&a?"container container-left unshift":"container container-left"},c.a.createElement("div",{className:"left toolbar"},c.a.createElement("ul",null,c.a.createElement(B,null),c.a.createElement("div",{className:"devider"}),c.a.createElement(W,null),e.map((function(e){return null===e.group?c.a.createElement(J,{key:e.id,listId:e.id,listTitle:e.title,activeTaskCount:(a=e.id,t.filter((function(e){return e.parentList===a&&!1===e.isChecked}))).length}):"";var a})))),c.a.createElement(R,null))},Y=function(){return c.a.createElement("div",{className:"task-item-body add-task-body add-step-body"},c.a.createElement("div",{className:"add-list add-task"},c.a.createElement("button",{className:"btn btn-no-hover"},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{className:"btn-no-hover",type:"text",name:"addTask",maxLength:"255",placeholder:"New Step"})))},F=function(e){var t=e.taskId,a=e.addedToMyDay,n=Object(j.b)();return c.a.createElement("div",{className:"detailbar-item",onClick:function(){S(a)||n(O(t,Date.now()))}},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-sun"})),c.a.createElement("div",{className:"toolbar-title"},S(a)?c.a.createElement("span",{style:{color:"lightblue"}},"Added To My Day"):c.a.createElement("span",null,"Add To My Day"))),S(a)?c.a.createElement("button",{className:"return-to-null",onClick:function(){n(O(t,null))}},c.a.createElement("i",{className:"icon icon-plus"})):null)},V=function(e){var t=e.currentTaskDate,a=e.sourceId,n=Object(j.b)();return c.a.createElement("div",{className:"toolbar-item detail-footer"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon add-group",onClick:function(){n(I(!1)),n(b(null))}},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Created on ",t)),c.a.createElement("div",{className:"add-group detail-delete",onClick:function(){n(I(!1)),n(N(a)),n(b(null))}},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-trash"})))))},z=function(e){var t=e.parentTaskId,a=e.steps,n=Object(j.b)();return a.map((function(e){return c.a.createElement("div",{key:e.id,className:"task-item-body task-detail-title step"},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){n(function(e,t,a){return{type:"CHECK_STEP",payload:{parentTaskId:e,id:t,isChecked:a}}}(t,e.id,!e.isChecked))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:e.isChecked?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),c.a.createElement("button",{className:"btn task-item-title"},c.a.createElement("span",null,e.title)))}))},q=function(e){var t=e.currentTaskId,a=e.currentTaskTitle,n=e.isChecked,l=e.currentTaskSteps,i=Object(j.c)((function(e){return e.currentTask.isEditing})),r="TASK_DETAIL"===Object(j.c)((function(e){return e.menu.source}))&&i,s=Object(j.b)();return c.a.createElement("div",{className:"task-item-body task-detail-title"},c.a.createElement("div",{className:"task-detail-header"},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){s(y(t,!n))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:n?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),r?c.a.createElement(C,{taskId:t,isEditing:i,oldName:a}):"",c.a.createElement("button",{className:r?"btn task-item-title hide":"btn task-item-title"},c.a.createElement("span",null,c.a.createElement("h2",null,a)))),c.a.createElement(z,{parentTaskId:t,steps:l}))},Q=function(e){var t=e.taskId,a=e.Planned,n=Object(j.b)();return c.a.createElement("div",{className:"detailbar-item input-container"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-calendar"})),null!==a?c.a.createElement("span",{style:{color:"lightblue"}},"\xa0 Due Date ",new Date(a).toLocaleDateString()):c.a.createElement("span",null,"\xa0 Due Date"),c.a.createElement("input",{type:"date",className:"datepicker-input",id:"datepicker-input",onChange:function(e){return n(T(t,e.target.valueAsNumber))}})),null!==a?c.a.createElement("button",{className:"return-to-null",onClick:function(){n(T(t,null))}},c.a.createElement("i",{className:"icon icon-plus"})):null)},Z=function(){var e=Object(j.c)((function(e){return e.tasks})),t=Object(j.c)((function(e){return e.currentTask.taskId})),a=e.find((function(e){return e.id===t})),n=void 0===a?null:a.addedToMyDay,l=void 0===a?null:a.Planned,i=void 0===a?t:a.title,r=void 0!==a&&a.isChecked,s=void 0===a?[]:a.steps,o=void 0===a?t:new Date(a.createdAt).toDateString(),d=Object(j.c)((function(e){return e.detailbar.isOpen})),u=Object(j.c)((function(e){return e.screen.width}));return c.a.createElement("div",{className:u>1020&&d?"container container-right":u>1020&&!d?"container container-right hide":u<1020&&d?"container container-right unshift":"container container-right"},c.a.createElement(q,{currentTaskId:t,currentTaskTitle:i,isChecked:r,currentTaskSteps:s}),c.a.createElement(Y,null),c.a.createElement(F,{taskId:t,addedToMyDay:n}),c.a.createElement(Q,{taskId:t,Planned:l}),c.a.createElement(V,{currentTaskDate:o,sourceId:t}))};var $=function(){var e=Object(j.b)();return window.addEventListener("resize",(function(){e({type:"SET_WIDTH",payload:{screenWidth:document.documentElement.clientWidth}})})),c.a.createElement("div",{className:"App"},c.a.createElement(X,null),c.a.createElement(K,null),c.a.createElement(Z,null))},ee=a(2),te=a(3),ae=a(5),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae.Tasks,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return[].concat(Object(te.a)(e),[{id:t.payload.id,title:t.payload.title,steps:t.payload.steps,isChecked:t.payload.isChecked,addedToMyDay:t.payload.addedToMyDay,Important:t.payload.Important,Planned:t.payload.Planned,parentList:t.payload.parentList,createdAt:t.payload.createdAt}]);case"EDIT_TASK":var a=e.find((function(e){return e.id===t.payload.id})),n=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(te.a)(n),[Object(ee.a)(Object(ee.a)({},a),{},{title:t.payload.title})]);case"CHECK_TASK":var c=e.find((function(e){return e.id===t.payload.id})),l=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(te.a)(l),[Object(ee.a)(Object(ee.a)({},c),{},{isChecked:t.payload.isChecked})]);case"IMPORTANT_TASK":var i=e.find((function(e){return e.id===t.payload.id})),r=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(te.a)(r),[Object(ee.a)(Object(ee.a)({},i),{},{Important:t.payload.Important})]);case"ADD_TO_MY_DAY":var s=e.find((function(e){return e.id===t.payload.id})),o=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(te.a)(o),[Object(ee.a)(Object(ee.a)({},s),{},{addedToMyDay:t.payload.addedToMyDay})]);case"DUE_DATE":var d=e.find((function(e){return e.id===t.payload.id})),u=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(te.a)(u),[Object(ee.a)(Object(ee.a)({},d),{},{Planned:t.payload.Planned})]);case"CHECK_STEP":var m=e.find((function(e){return e.id===t.payload.parentTaskId})),p=m.steps.find((function(e){return e.id===t.payload.id})),E=m.steps.filter((function(e){return e.id!==t.payload.id})),b=[].concat(Object(te.a)(E),[Object(ee.a)(Object(ee.a)({},p),{},{isChecked:t.payload.isChecked})]),f=Object(ee.a)(Object(ee.a)({},m),{},{steps:Object(te.a)(b)}),y=e.filter((function(e){return e.id!==t.payload.parentTaskId}));return[].concat(Object(te.a)(y),[Object(ee.a)({},f)]);case"DELETE_TASK":var k=e.filter((function(e){return e.id!==t.payload.id}));return Object(te.a)(k);default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae.Lists,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":return[].concat(Object(te.a)(e),[{id:t.payload.id,title:t.payload.title,group:t.payload.group}]);case"EDIT_LIST":var a=e.find((function(e){return e.id===t.payload.id})),n=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(te.a)(n),[Object(ee.a)(Object(ee.a)({},a),{},{title:t.payload.title})]);case"DELETE_LIST":var c=e.filter((function(e){return e.id!==t.payload.id}));return Object(te.a)(c);default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae.Groups,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GROUP":return[].concat(Object(te.a)(e),[{id:t.payload.id,title:t.payload.title}]);case"EDIT_GROUP":var a=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(te.a)(a),[{id:t.payload.id,title:t.payload.title}]);default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,source:null,sourceId:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MENU":return Object(ee.a)(Object(ee.a)({},e),{},{isOpen:t.payload.isOpen,source:t.payload.source,sourceId:t.payload.sourceId});case"TOGGLE_MENU":return Object(ee.a)(Object(ee.a)({},e),{},{isOpen:t.payload.isOpen});default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:document.documentElement.clientWidth},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WIDTH":return Object(ee.a)(Object(ee.a)({},e),{},{width:t.payload.screenWidth});default:return e}},se=a(4),oe=Object(se.b)({tasks:ne,lists:ce,groups:le,currentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{listId:"Tasks",title:"",isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIST":return Object(ee.a)(Object(ee.a)({},e),{},{listId:t.payload.id});case"IS_EDITING_LIST":return Object(ee.a)(Object(ee.a)({},e),{},{isEditing:t.payload.isEditing});case"EDITING_LIST":return Object(ee.a)(Object(ee.a)({},e),{},{title:t.payload.title});case"RENAMEING_LIST":return Object(ee.a)(Object(ee.a)({},e),{},{listId:t.payload.listId,isEditing:t.payload.isEditing});default:return e}},currentGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{groupId:null,isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GROUP":return Object(ee.a)(Object(ee.a)({},e),{},{groupId:t.payload.id});case"IS_EDITING_GROUP":return Object(ee.a)(Object(ee.a)({},e),{},{isEditing:t.payload.isEditing});default:return e}},currentTask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{taskId:null,title:"",isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASK":return Object(ee.a)(Object(ee.a)({},e),{},{taskId:t.payload.id});case"IS_EDITING_TASK":return Object(ee.a)(Object(ee.a)({},e),{},{isEditing:t.payload.isEditing});case"EDITING_TASK":return Object(ee.a)(Object(ee.a)({},e),{},{title:t.payload.title});case"RENAMEING_TASK":return Object(ee.a)(Object(ee.a)({},e),{},{taskId:t.payload.taskId,isEditing:t.payload.isEditing});default:return e}},addingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_LIST":return Object(ee.a)(Object(ee.a)({},e),{},{title:t.payload.title});default:return e}},addingGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_GROUP":return Object(ee.a)(Object(ee.a)({},e),{},{title:t.payload.title});default:return e}},addingTask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_TASK":return Object(ee.a)(Object(ee.a)({},e),{},{title:t.payload.title});default:return e}},menu:ie,detailbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_DETAILBAR":return Object(ee.a)(Object(ee.a)({},e),{},{isOpen:t.payload.isOpen});default:return e}},toolbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_TOOLBAR":return Object(ee.a)(Object(ee.a)({},e),{},{isOpen:t.payload.isOpen});default:return e}},screen:re}),de=a(16),ue=a.n(de),me=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),pe=Object(se.c)(oe,me,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());pe.subscribe(ue()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}({tasks:pe.getState().tasks,tists:pe.getState().tists,groups:pe.getState().groups})})),1e3);var Ee=pe;i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j.a,{store:Ee},c.a.createElement($,null))),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"Tasks":[{"id":1,"title":"Important and my day","steps":[{"id":111,"title":"step step","isChecked":false},{"id":222,"title":"step step","isChecked":false}],"isChecked":true,"addedToMyDay":1610820874021,"Important":true,"Planned":null,"parentList":1,"createdAt":1602994834230},{"id":2,"title":"Tasks and Planned1","steps":[{"id":333,"title":"step step","isChecked":false}],"isChecked":false,"addedToMyDay":1603081025853,"Important":false,"Planned":null,"parentList":"Tasks","createdAt":1602994853734},{"id":10,"title":"Tasks and Planned2","steps":[{"id":333,"title":"step step","isChecked":false}],"isChecked":false,"addedToMyDay":1603081025853,"Important":false,"Planned":null,"parentList":"Tasks","createdAt":1602994853734},{"id":12,"title":"This task from futur","steps":[{"id":333,"title":"step step","isChecked":false}],"isChecked":false,"addedToMyDay":1603081025853,"Important":false,"Planned":1608076800000,"parentList":"Tasks","createdAt":1602994853734},{"id":3,"title":"belong to list num 2","steps":[{"id":444,"title":"bla step","isChecked":false}],"isChecked":true,"addedToMyDay":1609905396515,"Important":false,"Planned":null,"parentList":2,"createdAt":1602994853734}],"Lists":[{"id":1,"title":"List Num #1","group":1},{"id":2,"title":"List Num #2","group":null}],"Groups":[{"id":1,"title":"group num #1"},{"id":2,"title":"group num #2"}]}')}},[[18,1,2]]]);
//# sourceMappingURL=main.f67c4e37.chunk.js.map