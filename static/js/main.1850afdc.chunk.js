(this["webpackJsonpmy-redux-todo-app"]=this["webpackJsonpmy-redux-todo-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),l=a.n(i),r=(a(18),a(26)),s=function(e){return{type:"SET_GROUP",payload:{id:e}}},o=function(e){return{type:"ADDING_GROUP",payload:{title:e}}},d=function(e){return{type:"IS_EDITING_GROUP",payload:{isEditing:e}}},u=function(e){return{type:"SET_LIST",payload:{id:e}}},m=function(e){return{type:"ADDING_LIST",payload:{title:e}}},E=function(e){return{type:"EDITING_LIST",payload:{title:e}}},p=function(e){return{type:"IS_EDITING_LIST",payload:{isEditing:e}}},b=function(e){return{type:"SET_TASK",payload:{id:e}}},f=function(e){return{type:"ADDING_TASK",payload:{title:e}}},k=function(e,t){return{type:"CHECK_TASK",payload:{id:e,isChecked:t}}},y=function(e){return{type:"EDITING_TASK",payload:{title:e}}},v=function(e){return{type:"IS_EDITING_TASK",payload:{isEditing:e}}},N=function(e,t,a){return{type:"OPEN_MENU",payload:{isOpen:e,source:t,sourceId:a}}},O=function(e){return{type:"OPEN_DETAILBAR",payload:{isOpen:e}}},T=function(e){return{type:"OPEN_TOOLBAR",payload:{isOpen:e}}},h=a(1),I=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.addingTask.title})),a=Object(h.c)((function(e){return e.currentList.listId}));return c.a.createElement("div",{className:"task-item-body add-task-body"},c.a.createElement("div",{className:"add-list add-task"},c.a.createElement("button",{className:"btn btn-no-hover",onClick:function(){e({type:"ADD_TASK",payload:{id:Object(r.a)(),title:t,steps:[],isChecked:!1,addedToMyDay:null,Important:!1,Planned:null,parentList:a,createdAt:Date.now()}}),e(f(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{className:"btn-no-hover",type:"text",name:"addTask",maxLength:"255",placeholder:"New Task",value:t,onChange:function(t){e(f(t.target.value))}})))},j=function(e){var t=e.id,a=e.source,n=e.sourceId,i=Object(h.b)(),l=Object(h.c)((function(e){return e.currentList.listId})),r=Object(h.c)((function(e){return e.currentTask.taskId})),s=Object(h.c)((function(e){return e.menu.isOpen})),o=Object(h.c)((function(e){return e.menu.source})),d=!(a!==o||t!==("TASK_HEADER"===o?l:r)||!s),m="TASK_HEADER"===o?" list":" task";return c.a.createElement("div",{className:d?"tasks-toolbar-menu unhide":"tasks-toolbar-menu"},c.a.createElement("ul",null,c.a.createElement("div",{onClick:function(){i(function(e,t){switch(e){case"TASK_ITEM":case"TASK_DETAIL":return{type:"RENAMEING_TASK",payload:{taskId:t,isEditing:!0}};case"TASK_HEADER":return{type:"RENAMEING_LIST",payload:{listId:t,isEditing:!0}}}}(a,n))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Rename",m))))),c.a.createElement("div",{onClick:function(){"TASK_HEADER"===o?(i(u("Tasks")),i(function(e){return{type:"DELETE_LIST",payload:{id:e}}}(n))):i(function(e){return{type:"DELETE_TASK",payload:{id:e}}}(n))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Delete ",m)))))))},g=function(e){var t=e.taskId,a=e.isEditing,i=e.oldName,l=Object(h.b)(),r=Object(h.c)((function(e){return e.currentTask.title}));return Object(n.useEffect)((function(){l(v(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){l({type:"EDIT_TASK",payload:{id:t,title:r}}),l(y("")),l(v(!1))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editTask",maxLength:"255",placeholder:i,value:r,onChange:function(e){l(y(e.target.value))}}))},D=function(e){var t=e.taskId,a=e.taskTitle,n=e.isChecked,i=Object(h.c)((function(e){return e.menu.isOpen})),l=Object(h.c)((function(e){return e.currentTask.taskId})),r=Object(h.c)((function(e){return e.currentTask.isEditing})),s=Object(h.c)((function(e){return e.menu.source})),o=l===t&&"TASK_ITEM"===s&&r,d=Object(h.c)((function(e){return e.detailbar.isOpen})),u=Object(h.b)();return c.a.createElement("div",{className:"task-item-body",key:t},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){u(k(t,!n))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:n?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),o?c.a.createElement(g,{taskId:t,isEditing:r,oldName:a}):"",c.a.createElement("button",{className:o?"btn task-item-title hide":"btn task-item-title",onClick:function(){u(b(l===t?null:t)),u(O(!d))}},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"tasks-toolbar-options",onClick:function(){u(N(!i,"TASK_ITEM",t))}},c.a.createElement("div",{className:"tasks-toolbar-title-item"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),c.a.createElement(j,{id:l,source:"TASK_ITEM",sourceId:t})))},_=function(e){return(new Date).setHours(0,0,0,0)===new Date(e).setHours(0,0,0,0)},C=function(e){return(new Date).setHours(0,0,0,0)<new Date(e).setHours(0,0,0,0)},A=function(){var e=Object(h.c)((function(e){return e.tasks})),t=Object(h.c)((function(e){return e.currentList.listId})),a=function(){switch(t){case"My Day":return e.map((function(e){return _(e.addedToMyDay)?c.a.createElement(D,{key:e.id,taskId:e.id,taskTitle:e.title,isChecked:e.isChecked}):null}));case"Important":return e.map((function(e){return e.Important?c.a.createElement(D,{key:e.id,taskId:e.id,taskTitle:e.title,isChecked:e.isChecked}):null}));case"Planned":return e.map((function(e){return C(e.Planned)?c.a.createElement(D,{key:e.id,taskId:e.id,taskTitle:e.title,isChecked:e.isChecked}):null}));case"Tasks":return e.map((function(e){return"Tasks"===e.parentList?c.a.createElement(D,{key:e.id,taskId:e.id,taskTitle:e.title,isChecked:e.isChecked}):null}));default:return e.map((function(e){return e.parentList===t?c.a.createElement(D,{key:e.id,taskId:e.id,taskTitle:e.title,isChecked:e.isChecked}):null}))}};return c.a.createElement("div",{className:"task-items"},c.a.createElement(a,null))},S=function(e){var t=e.listId,a=e.isEditing,i=e.oldName,l=Object(h.b)(),r=Object(h.c)((function(e){return e.currentList.title}));return Object(n.useEffect)((function(){l(p(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){l({type:"EDIT_LIST",payload:{id:t,title:r}}),l(E("")),l(p(!1))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editList",maxLength:"255",placeholder:i,value:r,onChange:function(e){l(E(e.target.value))}}))},L=function(e){var t=e.currentListId,a=e.currentListTitle,n=Object(h.c)((function(e){return e.currentList.isEditing})),i="TASK_HEADER"===Object(h.c)((function(e){return e.menu.source}))&&n,l=Object(h.b)(),r=Object(h.c)((function(e){return e.menu.isOpen}));return c.a.createElement("div",{className:"tasks-toolbar"},c.a.createElement("div",{className:"tasks-toolbar-title"},i?c.a.createElement(S,{listId:t,isEditing:n,oldName:a}):"",c.a.createElement("div",{className:i?"tasks-toolbar-title-item hide":"tasks-toolbar-title-item"},c.a.createElement("h1",{className:"list-title"},a))),"My Day"===t||"Important"===t||"Planned"===t||"Tasks"===t?"":c.a.createElement("div",{className:"tasks-toolbar-options",onClick:function(){l(N(!r,"TASK_HEADER",t))}},c.a.createElement("div",{className:"tasks-toolbar-title-item"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),c.a.createElement(j,{id:t,source:"TASK_HEADER",sourceId:t})))},w=function(){var e=Object(h.c)((function(e){return e.lists})),t=Object(h.c)((function(e){return e.currentList.listId})),a=e.find((function(e){return e.id===t})),n=void 0===a?t:a.title,i=Object(h.c)((function(e){return e.screen.width})),l=Object(h.c)((function(e){return e.detailbar.isOpen})),r=Object(h.c)((function(e){return e.toolbar.isOpen})),s=l||r,o=Object(h.b)();return c.a.createElement("div",{className:"container container-center"},c.a.createElement("button",{className:i<800?"btn overlay-btn":"btn overlay-btn hide",onClick:function(){o(T(!r))}},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:i<1020&&s?"overlay unhide":"overlay",onClick:function(){o(O(!1)),o(T(!1)),o(b(null))}}),c.a.createElement("div",{className:"center tasks"},c.a.createElement(L,{currentListId:t,currentListTitle:n}),c.a.createElement(A,null),c.a.createElement(I,null)))},G=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.addingList.title}));return c.a.createElement("div",{className:"add-list-and-group"},c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){e({type:"ADD_LIST",payload:{id:Object(r.a)(),title:t,group:null}}),e(m(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"addList",maxLength:"255",placeholder:"New List",value:t,onChange:function(t){e(m(t.target.value))}})),c.a.createElement("div",{className:"add-group"},c.a.createElement("button",{className:"btn",onClick:function(){e({type:"ADD_GROUP",payload:{id:Object(r.a)(),title:"New Group"}})}},c.a.createElement("i",{className:"icon icon-group-plus"}))))},K=function(e){var t=e.listId,a=e.listTitle,n=e.activeTaskCount,i=Object(h.b)();return c.a.createElement("div",{key:t,onClick:function(){i(u(t))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"toolbar-count"},n>0?n:""))))},P=function(e){var t=e.groupId,a=e.isEditing,i=e.oldName,l=Object(h.b)(),r=Object(h.c)((function(e){return e.addingGroup.title}));return Object(n.useEffect)((function(){l(d(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){l({type:"EDIT_GROUP",payload:{id:t,title:r}}),l(o(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editGroup",maxLength:"255",placeholder:i,value:r,onChange:function(e){l(o(e.target.value))}}))},M=function(e){var t=e.groupId,a=e.groupTitle,n=Object(h.b)(),i=Object(h.c)((function(e){return e.tasks})),l=Object(h.c)((function(e){return e.lists})),r=Object(h.c)((function(e){return e.currentGroup.groupId})),o=Object(h.c)((function(e){return e.currentGroup.isEditing})),u=r===t&&"New Group"===a,m=l.filter((function(e){return e.group===t}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("li",{className:"toolbar-item"},u?c.a.createElement(P,{groupId:t,isEditing:!0,oldName:a}):"",c.a.createElement("div",{className:o&&u?"toolbar-inner hide":"toolbar-inner",key:t,onClick:function(){r===t?n(s(null))&&n(d(!1)):n(s(t))}},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-group"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),m.length>0?c.a.createElement("div",{className:"toolbar-collapse-arrow"},c.a.createElement("i",{className:"icon icon-arrow"})):""))),c.a.createElement("ul",{className:r===t?"group-lists unhide":"group-lists"},l.map((function(e){return e.group===t?c.a.createElement(K,{key:e.id,listId:e.id,listTitle:e.title,activeTaskCount:(a=e.id,i.filter((function(e){return e.parentList===a&&!1===e.isChecked}))).length}):"";var a}))))},x=function(){var e=Object(h.c)((function(e){return e.groups}));return c.a.createElement("div",{className:"groups"},e.map((function(e){return c.a.createElement(M,{key:e.id,groupId:e.id,groupTitle:e.title})})))},R=function(){var e=Object(h.b)(),t=Object(h.c)((function(e){return e.tasks})),a=0,n=0,i=0,l=0;return t.forEach((function(e){_(e.addedToMyDay)&&!e.isChecked&&a++,e.Important&&!e.isChecked&&n++,C(e.Planned)&&!e.isChecked&&i++,"Tasks"!==e.parentList||e.isChecked||l++})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){e(u("My Day")),e(O(!1)),e(T(!1)),e(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-sun"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"My Day")),c.a.createElement("div",{className:"toolbar-count"},a>0?a:"")))),c.a.createElement("div",{onClick:function(){e(u("Important")),e(O(!1)),e(T(!1)),e(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-star"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Important")),c.a.createElement("div",{className:"toolbar-count"},n>0?n:"")))),c.a.createElement("div",{onClick:function(){e(u("Planned")),e(O(!1)),e(T(!1)),e(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-calendar"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Planned")),c.a.createElement("div",{className:"toolbar-count"},i>0?i:"")))),c.a.createElement("div",{onClick:function(){e(u("Tasks")),e(O(!1)),e(T(!1)),e(b(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-home"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Tasks")),c.a.createElement("div",{className:"toolbar-count"},l>0?l:"")))))},H=function(e){var t=e.listId,a=e.listTitle,n=e.activeTaskCount,i=Object(h.b)();return c.a.createElement("div",{key:t,onClick:function(){i(u(t))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"toolbar-count"},n>0?n:""))))},U=function(){var e=Object(h.c)((function(e){return e.lists})),t=Object(h.c)((function(e){return e.tasks})),a=Object(h.c)((function(e){return e.toolbar.isOpen})),n=Object(h.c)((function(e){return e.screen.width}));return c.a.createElement("div",{className:n<800&&a?"container container-left unshift":"container container-left"},c.a.createElement("div",{className:"left toolbar"},c.a.createElement("ul",null,c.a.createElement(R,null),c.a.createElement("div",{className:"devider"}),c.a.createElement(x,null),e.map((function(e){return null===e.group?c.a.createElement(H,{key:e.id,listId:e.id,listTitle:e.title,activeTaskCount:(a=e.id,t.filter((function(e){return e.parentList===a&&!1===e.isChecked}))).length}):"";var a})))),c.a.createElement(G,null))},W=function(){return c.a.createElement("div",{className:"task-item-body add-task-body add-step-body"},c.a.createElement("div",{className:"add-list add-task"},c.a.createElement("button",{className:"btn btn-no-hover"},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{className:"btn-no-hover",type:"text",name:"addTask",maxLength:"255",placeholder:"New Step"})))},B=function(e){var t=e.taskId,a=Object(h.b)();return c.a.createElement("div",{className:"toolbar-item detailbar-item",onClick:function(){var e,n;a((e=t,n=Date.now(),{type:"ADD_TO_MY_DAY",payload:{id:e,addedToMyDay:n}})),a(O(!1)),a(b(null))}},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-sun"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Add To My Day"))))},X=function(e){var t=e.currentTaskDate,a=Object(h.b)();return c.a.createElement("div",{className:"toolbar-item detail-footer"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon add-group",onClick:function(){a(O(!1)),a(b(null))}},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Created on ",t)),c.a.createElement("div",{className:"add-group detail-delete"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-plus"})))))},Y=function(e){var t=e.parentTaskId,a=e.steps,n=Object(h.b)();return a.map((function(e){return c.a.createElement("div",{key:e.id,className:"task-item-body task-detail-title step"},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){n(function(e,t,a){return{type:"CHECK_STEP",payload:{parentTaskId:e,id:t,isChecked:a}}}(t,e.id,!e.isChecked))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:e.isChecked?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),c.a.createElement("button",{className:"btn task-item-title"},c.a.createElement("span",null,e.title)))}))},J=function(e){var t=e.currentTaskId,a=e.currentTaskTitle,n=e.isChecked,i=e.currentTaskSteps,l=Object(h.c)((function(e){return e.currentTask.isEditing})),r="TASK_DETAIL"===Object(h.c)((function(e){return e.menu.source}))&&l,s=Object(h.b)(),o=Object(h.c)((function(e){return e.menu.isOpen}));return c.a.createElement("div",{className:"task-item-body task-detail-title"},c.a.createElement("div",{className:"task-detail-header"},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){s(k(t,!n))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:n?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),r?c.a.createElement(g,{taskId:t,isEditing:l,oldName:a}):"",c.a.createElement("button",{className:r?"btn task-item-title hide":"btn task-item-title"},c.a.createElement("span",null,c.a.createElement("h2",null,a))),c.a.createElement("div",{className:"tasks-toolbar-options",onClick:function(){s(N(!o,"TASK_DETAIL",t))}},c.a.createElement("div",{className:"tasks-toolbar-title-item"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),c.a.createElement(j,{id:t,source:"TASK_DETAIL",sourceId:t}))),c.a.createElement(Y,{parentTaskId:t,steps:i}))},F=function(){var e=Object(h.c)((function(e){return e.tasks})),t=Object(h.c)((function(e){return e.currentTask.taskId})),a=e.find((function(e){return e.id===t})),n=void 0===a?t:a.title,i=void 0!==a&&a.isChecked,l=void 0===a?[]:a.steps,r=void 0===a?t:new Date(a.createdAt).toDateString(),s=Object(h.c)((function(e){return e.detailbar.isOpen})),o=Object(h.c)((function(e){return e.screen.width}));return c.a.createElement("div",{className:o>1020&&s?"container container-right":o>1020&&!s?"container container-right hide":o<1020&&s?"container container-right unshift":"container container-right"},c.a.createElement(J,{currentTaskId:t,currentTaskTitle:n,isChecked:i,currentTaskSteps:l}),c.a.createElement(W,null),c.a.createElement(B,{taskId:t}),c.a.createElement(X,{currentTaskDate:r}))};var V=function(){var e=Object(h.b)();return window.addEventListener("resize",(function(){e({type:"SET_WIDTH",payload:{screenWidth:document.documentElement.clientWidth}})})),c.a.createElement("div",{className:"App"},c.a.createElement(U,null),c.a.createElement(w,null),c.a.createElement(F,null))},z=a(2),q=a(3),Q=a(5),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.Tasks,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return[].concat(Object(q.a)(e),[{id:t.payload.id,title:t.payload.title,steps:t.payload.steps,isChecked:t.payload.isChecked,addedToMyDay:t.payload.addedToMyDay,Important:t.payload.Important,Planned:t.payload.Planned,parentList:t.payload.parentList,createdAt:t.payload.createdAt}]);case"EDIT_TASK":var a=e.find((function(e){return e.id===t.payload.id})),n=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(q.a)(n),[Object(z.a)(Object(z.a)({},a),{},{title:t.payload.title})]);case"CHECK_TASK":var c=e.find((function(e){return e.id===t.payload.id})),i=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(q.a)(i),[Object(z.a)(Object(z.a)({},c),{},{isChecked:t.payload.isChecked})]);case"ADD_TO_MY_DAY":var l=e.find((function(e){return e.id===t.payload.id})),r=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(q.a)(r),[Object(z.a)(Object(z.a)({},l),{},{addedToMyDay:t.payload.addedToMyDay})]);case"CHECK_STEP":var s=e.find((function(e){return e.id===t.payload.parentTaskId})),o=s.steps.find((function(e){return e.id===t.payload.id})),d=s.steps.filter((function(e){return e.id!==t.payload.id})),u=[].concat(Object(q.a)(d),[Object(z.a)(Object(z.a)({},o),{},{isChecked:t.payload.isChecked})]),m=Object(z.a)(Object(z.a)({},s),{},{steps:Object(q.a)(u)}),E=e.filter((function(e){return e.id!==t.payload.parentTaskId}));return[].concat(Object(q.a)(E),[Object(z.a)({},m)]);case"DELETE_TASK":var p=e.filter((function(e){return e.id!==t.payload.id}));return Object(q.a)(p);default:return e}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.Lists,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":return[].concat(Object(q.a)(e),[{id:t.payload.id,title:t.payload.title,group:t.payload.group}]);case"EDIT_LIST":var a=e.find((function(e){return e.id===t.payload.id})),n=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(q.a)(n),[Object(z.a)(Object(z.a)({},a),{},{title:t.payload.title})]);case"DELETE_LIST":var c=e.filter((function(e){return e.id!==t.payload.id}));return Object(q.a)(c);default:return e}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.Groups,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GROUP":return[].concat(Object(q.a)(e),[{id:t.payload.id,title:t.payload.title}]);case"EDIT_GROUP":var a=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(q.a)(a),[{id:t.payload.id,title:t.payload.title}]);default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,source:null,sourceId:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MENU":return Object(z.a)(Object(z.a)({},e),{},{isOpen:t.payload.isOpen,source:t.payload.source,sourceId:t.payload.sourceId});default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:document.documentElement.clientWidth},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WIDTH":return Object(z.a)(Object(z.a)({},e),{},{width:t.payload.screenWidth});default:return e}},ne=a(4),ce=Object(ne.b)({tasks:Z,lists:$,groups:ee,currentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{listId:"Tasks",title:"",isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIST":return Object(z.a)(Object(z.a)({},e),{},{listId:t.payload.id});case"IS_EDITING_LIST":return Object(z.a)(Object(z.a)({},e),{},{isEditing:t.payload.isEditing});case"EDITING_LIST":return Object(z.a)(Object(z.a)({},e),{},{title:t.payload.title});case"RENAMEING_LIST":return Object(z.a)(Object(z.a)({},e),{},{listId:t.payload.listId,isEditing:t.payload.isEditing});default:return e}},currentGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{groupId:null,isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GROUP":return Object(z.a)(Object(z.a)({},e),{},{groupId:t.payload.id});case"IS_EDITING_GROUP":return Object(z.a)(Object(z.a)({},e),{},{isEditing:t.payload.isEditing});default:return e}},currentTask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{taskId:null,title:"",isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASK":return Object(z.a)(Object(z.a)({},e),{},{taskId:t.payload.id});case"IS_EDITING_TASK":return Object(z.a)(Object(z.a)({},e),{},{isEditing:t.payload.isEditing});case"EDITING_TASK":return Object(z.a)(Object(z.a)({},e),{},{title:t.payload.title});case"RENAMEING_TASK":return Object(z.a)(Object(z.a)({},e),{},{taskId:t.payload.taskId,isEditing:t.payload.isEditing});default:return e}},addingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_LIST":return Object(z.a)(Object(z.a)({},e),{},{title:t.payload.title});default:return e}},addingGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_GROUP":return Object(z.a)(Object(z.a)({},e),{},{title:t.payload.title});default:return e}},addingTask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_TASK":return Object(z.a)(Object(z.a)({},e),{},{title:t.payload.title});default:return e}},menu:te,detailbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_DETAILBAR":return Object(z.a)(Object(z.a)({},e),{},{isOpen:t.payload.isOpen});default:return e}},toolbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_TOOLBAR":return Object(z.a)(Object(z.a)({},e),{},{isOpen:t.payload.isOpen});default:return e}},screen:ae}),ie=Object(ne.c)(ce,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h.a,{store:ie},c.a.createElement(V,null))),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"Tasks":[{"id":1,"title":"Important and my day","steps":[{"id":111,"title":"step step","isChecked":false},{"id":222,"title":"step step","isChecked":false}],"isChecked":true,"addedToMyDay":1603251982185,"Important":true,"Planned":1602058400000,"parentList":1,"createdAt":1602994834230},{"id":2,"title":"Tasks","steps":[{"id":333,"title":"step step","isChecked":false}],"isChecked":false,"addedToMyDay":1603081025853,"Important":false,"Planned":1605058400000,"parentList":"Tasks","createdAt":1602994853734},{"id":3,"title":"belong to list num 2","steps":[{"id":444,"title":"bla step","isChecked":false}],"isChecked":true,"addedToMyDay":1603520393640,"Important":false,"Planned":null,"parentList":2,"createdAt":1602994853734}],"Lists":[{"id":1,"title":"List Num #1","group":1},{"id":2,"title":"List Num #2","group":null}],"Groups":[{"id":1,"title":"group num #1"},{"id":2,"title":"group num #2"}]}')}},[[13,1,2]]]);
//# sourceMappingURL=main.1850afdc.chunk.js.map