(this["webpackJsonpmy-redux-todo-app"]=this["webpackJsonpmy-redux-todo-app"]||[]).push([[0],{13:function(e,t,a){e.exports=a(25)},18:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),l=a.n(i),r=(a(18),a(26)),o=function(e){return{type:"SET_GROUP",payload:{id:e}}},s=function(e){return{type:"ADDING_GROUP",payload:{title:e}}},d=function(e){return{type:"IS_EDITING_GROUP",payload:{isEditing:e}}},u=function(e){return{type:"SET_LIST",payload:{id:e}}},m=function(e){return{type:"ADDING_LIST",payload:{title:e}}},E=function(e){return{type:"EDITING_LIST",payload:{title:e}}},p=function(e){return{type:"IS_EDITING_LIST",payload:{isEditing:e}}},b=function(e){return{type:"DELETE_LIST",payload:{id:e}}},f=function(e){return{type:"SET_TASK",payload:{id:e}}},N=function(e){return{type:"ADDING_TASK",payload:{title:e}}},v=function(e,t){return console.log("id: ".concat(e,", isImportant ").concat(t)),{type:"IMPORTANT_TASK",payload:{id:e,Important:t}}},y=function(e,t){return{type:"CHECK_TASK",payload:{id:e,isChecked:t}}},O=function(e){return{type:"EDITING_TASK",payload:{title:e}}},k=function(e){return{type:"IS_EDITING_TASK",payload:{isEditing:e}}},T=function(e){return{type:"DELETE_TASK",payload:{id:e}}},I=function(e,t,a){return{type:"OPEN_MENU",payload:{isOpen:e,source:t,sourceId:a}}},h=function(e,t){switch(e){case"TASK_ITEM":case"TASK_DETAIL":return{type:"RENAMEING_TASK",payload:{taskId:t,isEditing:!0}};case"TASK_HEADER":return{type:"RENAMEING_LIST",payload:{listId:t,isEditing:!0}}}},j=function(e){return{type:"OPEN_DETAILBAR",payload:{isOpen:e}}},g=function(e){return{type:"OPEN_TOOLBAR",payload:{isOpen:e}}},D=a(1),_=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.addingTask.title})),a=Object(D.c)((function(e){return e.currentList.listId}));return c.a.createElement("div",{className:"task-item-body add-task-body"},c.a.createElement("div",{className:"add-list add-task"},c.a.createElement("button",{className:"btn btn-no-hover",onClick:function(){e({type:"ADD_TASK",payload:{id:Object(r.a)(),title:t,steps:[],isChecked:!1,addedToMyDay:null,Important:!1,Planned:null,parentList:a,createdAt:Date.now()}}),e(N(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{className:"btn-no-hover",type:"text",name:"addTask",maxLength:"255",placeholder:"New Task",value:t,onChange:function(t){e(N(t.target.value))}})))},A=function(e){var t=e.source,a=e.sourceId,n=e.taskOrList,i=Object(D.b)(),l=Object(D.c)((function(e){return e.menu.source}));return c.a.createElement("div",{className:"tasks-toolbar-menu unhide"},c.a.createElement("ul",null,c.a.createElement("div",{onClick:function(){i(h(t,a))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Rename",n))))),c.a.createElement("div",{onClick:function(){"TASK_HEADER"===l?(i(j(!1)),i(u("Tasks")),i(b(a))):(i(j(!1)),i(T(a)))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Delete ",n)))))))},S=function(e){var t=e.taskId,a=e.isEditing,i=e.oldName,l=Object(D.b)(),r=Object(D.c)((function(e){return e.currentTask.title}));return Object(n.useEffect)((function(){l(k(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){l({type:"EDIT_TASK",payload:{id:t,title:r}}),l(O("")),l(k(!1))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editTask",maxLength:"255",placeholder:i,value:r,onChange:function(e){l(O(e.target.value))}}))},C=function(e){return(new Date).setHours(0,0,0,0)===new Date(e).setHours(0,0,0,0)},L=function(e){return(new Date).setHours(0,0,0,0)<new Date(e).setHours(0,0,0,0)},w=function(e){var t=e.taskId,a=Object(D.c)((function(e){return function(e,t){return e.tasks.find((function(e){return e.id===t}))}(e,t)})),n=a.id,i=a.title,l=a.isChecked,r=a.Important,o=a.addedToMyDay,s=a.Planned,d=a.parentList,u=Object(D.c)((function(e){return e.currentList.listId})),m=Object(D.b)(),E=Object(D.c)((function(e){return e.menu.isOpen})),p=Object(D.c)((function(e){return e.menu.source})),b=Object(D.c)((function(e){return e.currentTask.taskId})),N=Object(D.c)((function(e){return e.currentTask.isEditing})),O=Object(D.c)((function(e){return e.menu.source})),k=b===t&&"TASK_ITEM"===O&&N,T=Object(D.c)((function(e){return e.detailbar.isOpen}));return d===u||"My Day"===u&&C(o)||"Important"===u&&r||"Planned"===u&&L(s)?c.a.createElement("div",{className:"task-item-body"},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){m(y(n,!l))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:l?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),k?c.a.createElement(S,{taskId:n,isEditing:N,oldName:i}):"",c.a.createElement("button",{className:k?"btn task-item-title hide":"btn task-item-title",onClick:function(){m(f(b===n?null:n)),m(j(!T))}},c.a.createElement("span",null,i)),c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){m(v(n,!r))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:r?"icon icon-star-checked":"icon icon-star"}))),c.a.createElement("div",{className:"tasks-toolbar-options",onClick:function(){m(I(!1,null,null)),m(f(n)),m(I(!E,"TASK_ITEM",n))}},c.a.createElement("div",{className:"tasks-toolbar-title-item"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),n===b&&"TASK_ITEM"===p&&E?c.a.createElement(A,{source:"TASK_ITEM",sourceId:n,taskOrList:" task"}):"")):null},K=function(e){return e.tasks.map((function(e){return e.id}))},G=function(){var e=Object(D.c)(K).map((function(e){return c.a.createElement(w,{key:e,taskId:e})}));return c.a.createElement("div",{className:"task-items"},e)},R=function(e){var t=e.listId,a=e.isEditing,i=e.oldName,l=Object(D.b)(),r=Object(D.c)((function(e){return e.currentList.title}));return Object(n.useEffect)((function(){l(p(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){l({type:"EDIT_LIST",payload:{id:t,title:r}}),l(E("")),l(p(!1))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editList",maxLength:"255",placeholder:i,value:r,onChange:function(e){l(E(e.target.value))}}))},M=function(e){var t=e.currentListId,a=e.currentListTitle,n=Object(D.c)((function(e){return e.currentList.isEditing})),i="TASK_HEADER"===Object(D.c)((function(e){return e.menu.source}))&&n,l=Object(D.b)(),r=Object(D.c)((function(e){return e.menu.isOpen})),o=Object(D.c)((function(e){return e.currentList.listId})),s=Object(D.c)((function(e){return e.menu.source}));return c.a.createElement("div",{className:"tasks-toolbar"},c.a.createElement("div",{className:"tasks-toolbar-title"},i?c.a.createElement(R,{listId:t,isEditing:n,oldName:a}):"",c.a.createElement("div",{className:i?"tasks-toolbar-title-item hide":"tasks-toolbar-title-item"},c.a.createElement("h1",{className:"list-title"},a))),"My Day"===t||"Important"===t||"Planned"===t||"Tasks"===t?"":c.a.createElement("div",{className:"tasks-toolbar-options",onClick:function(){l(I(!1,null,null)),l(I(!r,"TASK_HEADER",t))}},c.a.createElement("div",{className:"tasks-toolbar-title-item"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),o===t&&"TASK_HEADER"===s&&r?c.a.createElement(A,{source:"TASK_HEADER",sourceId:t,taskOrList:" list"}):""))},P=function(){var e=Object(D.c)((function(e){return e.lists})),t=Object(D.c)((function(e){return e.currentList.listId})),a=e.find((function(e){return e.id===t})),n=void 0===a?t:a.title,i=Object(D.c)((function(e){return e.screen.width})),l=Object(D.c)((function(e){return e.detailbar.isOpen})),r=Object(D.c)((function(e){return e.toolbar.isOpen})),o=l||r,s=Object(D.b)();return c.a.createElement("div",{className:"container container-center"},c.a.createElement("button",{className:i<800?"btn overlay-btn":"btn overlay-btn hide",onClick:function(){s(g(!r))}},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:i<1020&&o?"overlay unhide":"overlay",onClick:function(){s(j(!1)),s(g(!1)),s(f(null))}}),c.a.createElement("div",{className:"center tasks"},c.a.createElement(M,{currentListId:t,currentListTitle:n}),c.a.createElement(G,null),c.a.createElement(_,null)))},x=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.addingList.title}));return c.a.createElement("div",{className:"add-list-and-group"},c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){e({type:"ADD_LIST",payload:{id:Object(r.a)(),title:t,group:null}}),e(m(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"addList",maxLength:"255",placeholder:"New List",value:t,onChange:function(t){e(m(t.target.value))}})),c.a.createElement("div",{className:"add-group"},c.a.createElement("button",{className:"btn",onClick:function(){e({type:"ADD_GROUP",payload:{id:Object(r.a)(),title:"New Group"}})}},c.a.createElement("i",{className:"icon icon-group-plus"}))))},H=function(e){var t=e.listId,a=e.listTitle,n=e.activeTaskCount,i=Object(D.b)();return c.a.createElement("div",{key:t,onClick:function(){i(u(t))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"toolbar-count"},n>0?n:""))))},U=function(e){var t=e.groupId,a=e.isEditing,i=e.oldName,l=Object(D.b)(),r=Object(D.c)((function(e){return e.addingGroup.title}));return Object(n.useEffect)((function(){l(d(a))})),c.a.createElement("div",{className:"add-list"},c.a.createElement("button",{className:"btn",onClick:function(){l({type:"EDIT_GROUP",payload:{id:t,title:r}}),l(s(""))}},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{type:"text",name:"editGroup",maxLength:"255",placeholder:i,value:r,onChange:function(e){l(s(e.target.value))}}))},W=function(e){var t=e.groupId,a=e.groupTitle,n=Object(D.b)(),i=Object(D.c)((function(e){return e.tasks})),l=Object(D.c)((function(e){return e.lists})),r=Object(D.c)((function(e){return e.currentGroup.groupId})),s=Object(D.c)((function(e){return e.currentGroup.isEditing})),u=r===t&&"New Group"===a,m=l.filter((function(e){return e.group===t}));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("li",{className:"toolbar-item"},u?c.a.createElement(U,{groupId:t,isEditing:!0,oldName:a}):"",c.a.createElement("div",{className:s&&u?"toolbar-inner hide":"toolbar-inner",key:t,onClick:function(){r===t?n(o(null))&&n(d(!1)):n(o(t))}},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-group"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),m.length>0?c.a.createElement("div",{className:"toolbar-collapse-arrow"},c.a.createElement("i",{className:"icon icon-arrow"})):""))),c.a.createElement("ul",{className:r===t?"group-lists unhide":"group-lists"},l.map((function(e){return e.group===t?c.a.createElement(H,{key:e.id,listId:e.id,listTitle:e.title,activeTaskCount:(a=e.id,i.filter((function(e){return e.parentList===a&&!1===e.isChecked}))).length}):"";var a}))))},B=function(){var e=Object(D.c)((function(e){return e.groups}));return c.a.createElement("div",{className:"groups"},e.map((function(e){return c.a.createElement(W,{key:e.id,groupId:e.id,groupTitle:e.title})})))},X=function(){var e=Object(D.b)(),t=Object(D.c)((function(e){return e.tasks})),a=0,n=0,i=0,l=0;return t.forEach((function(e){C(e.addedToMyDay)&&!e.isChecked&&a++,e.Important&&!e.isChecked&&n++,L(e.Planned)&&!e.isChecked&&i++,"Tasks"!==e.parentList||e.isChecked||l++})),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{onClick:function(){e(u("My Day")),e(j(!1)),e(g(!1)),e(f(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-sun"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"My Day")),c.a.createElement("div",{className:"toolbar-count"},a>0?a:"")))),c.a.createElement("div",{onClick:function(){e(u("Important")),e(j(!1)),e(g(!1)),e(f(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-star"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Important")),c.a.createElement("div",{className:"toolbar-count"},n>0?n:"")))),c.a.createElement("div",{onClick:function(){e(u("Planned")),e(j(!1)),e(g(!1)),e(f(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-calendar"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Planned")),c.a.createElement("div",{className:"toolbar-count"},i>0?i:"")))),c.a.createElement("div",{onClick:function(){e(u("Tasks")),e(j(!1)),e(g(!1)),e(f(null))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-home"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Tasks")),c.a.createElement("div",{className:"toolbar-count"},l>0?l:"")))))},Y=function(e){var t=e.listId,a=e.listTitle,n=e.activeTaskCount,i=Object(D.b)();return c.a.createElement("div",{key:t,onClick:function(){i(u(t))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,a)),c.a.createElement("div",{className:"toolbar-count"},n>0?n:""))))},J=function(){var e=Object(D.c)((function(e){return e.lists})),t=Object(D.c)((function(e){return e.tasks})),a=Object(D.c)((function(e){return e.toolbar.isOpen})),n=Object(D.c)((function(e){return e.screen.width}));return c.a.createElement("div",{className:n<800&&a?"container container-left unshift":"container container-left"},c.a.createElement("div",{className:"left toolbar"},c.a.createElement("ul",null,c.a.createElement(X,null),c.a.createElement("div",{className:"devider"}),c.a.createElement(B,null),e.map((function(e){return null===e.group?c.a.createElement(Y,{key:e.id,listId:e.id,listTitle:e.title,activeTaskCount:(a=e.id,t.filter((function(e){return e.parentList===a&&!1===e.isChecked}))).length}):"";var a})))),c.a.createElement(x,null))},F=function(){return c.a.createElement("div",{className:"task-item-body add-task-body add-step-body"},c.a.createElement("div",{className:"add-list add-task"},c.a.createElement("button",{className:"btn btn-no-hover"},c.a.createElement("i",{className:"icon icon-plus"})),c.a.createElement("input",{className:"btn-no-hover",type:"text",name:"addTask",maxLength:"255",placeholder:"New Step"})))},V=function(e){var t=e.taskId,a=Object(D.b)();return c.a.createElement("div",{className:"toolbar-item detailbar-item",onClick:function(){var e,n;a((e=t,n=Date.now(),{type:"ADD_TO_MY_DAY",payload:{id:e,addedToMyDay:n}})),a(j(!1)),a(f(null))}},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-sun"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Add To My Day"))))},z=function(e){var t=e.currentTaskDate,a=e.sourceId,n=Object(D.b)();return c.a.createElement("div",{className:"toolbar-item detail-footer"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon add-group",onClick:function(){n(j(!1)),n(f(null))}},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Created on ",t)),c.a.createElement("div",{className:"add-group detail-delete",onClick:function(){n(j(!1)),n(T(a)),n(f(null))}},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-plus"})))))},q=function(e){var t=e.id,a=e.source,n=e.sourceId,i=Object(D.b)(),l=Object(D.c)((function(e){return e.currentList.listId})),r=Object(D.c)((function(e){return e.currentTask.taskId})),o=Object(D.c)((function(e){return e.menu.isOpen})),s=Object(D.c)((function(e){return e.menu.source})),d=!(a!==s||t!==("TASK_HEADER"===s?l:r)||!o),m="TASK_HEADER"===s?" list":" task";return c.a.createElement("div",{className:d?"tasks-toolbar-menu unhide":"tasks-toolbar-menu"},c.a.createElement("ul",null,c.a.createElement("div",{onClick:function(){i(h(a,n))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Rename",m))))),c.a.createElement("div",{onClick:function(){"TASK_HEADER"===s?(i(j(!1)),i(u("Tasks")),i(b(n))):(i(j(!1)),i(T(n)))}},c.a.createElement("li",{className:"toolbar-item"},c.a.createElement("div",{className:"toolbar-inner"},c.a.createElement("div",{className:"toolbar-icon"},c.a.createElement("i",{className:"icon icon-ham"})),c.a.createElement("div",{className:"toolbar-title"},c.a.createElement("span",null,"Delete ",m)))))))},Q=function(e){var t=e.parentTaskId,a=e.steps,n=Object(D.b)();return a.map((function(e){return c.a.createElement("div",{key:e.id,className:"task-item-body task-detail-title step"},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){n(function(e,t,a){return{type:"CHECK_STEP",payload:{parentTaskId:e,id:t,isChecked:a}}}(t,e.id,!e.isChecked))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:e.isChecked?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),c.a.createElement("button",{className:"btn task-item-title"},c.a.createElement("span",null,e.title)))}))},Z=function(e){var t=e.currentTaskId,a=e.currentTaskTitle,n=e.isChecked,i=e.currentTaskSteps,l=Object(D.c)((function(e){return e.currentTask.isEditing})),r="TASK_DETAIL"===Object(D.c)((function(e){return e.menu.source}))&&l,o=Object(D.b)(),s=Object(D.c)((function(e){return e.menu.isOpen}));return c.a.createElement("div",{className:"task-item-body task-detail-title"},c.a.createElement("div",{className:"task-detail-header"},c.a.createElement("div",{className:"task-item-checkbox",onClick:function(){o(y(t,!n))}},c.a.createElement("span",{className:"checkbox"},c.a.createElement("i",{className:n?"icon icon-checkbox-checked":"icon icon-checkbox-empty"}))),r?c.a.createElement(S,{taskId:t,isEditing:l,oldName:a}):"",c.a.createElement("button",{className:r?"btn task-item-title hide":"btn task-item-title"},c.a.createElement("span",null,c.a.createElement("h2",null,a))),c.a.createElement("div",{className:"tasks-toolbar-options",onClick:function(){o(I(!s,"TASK_DETAIL",t))}},c.a.createElement("div",{className:"tasks-toolbar-title-item"},c.a.createElement("button",{className:"btn"},c.a.createElement("i",{className:"icon icon-arrow"}))),c.a.createElement(q,{id:t,source:"TASK_DETAIL",sourceId:t}))),c.a.createElement(Q,{parentTaskId:t,steps:i}))},$=function(){var e=Object(D.c)((function(e){return e.tasks})),t=Object(D.c)((function(e){return e.currentTask.taskId})),a=e.find((function(e){return e.id===t})),n=void 0===a?t:a.title,i=void 0!==a&&a.isChecked,l=void 0===a?[]:a.steps,r=void 0===a?t:new Date(a.createdAt).toDateString(),o=Object(D.c)((function(e){return e.detailbar.isOpen})),s=Object(D.c)((function(e){return e.screen.width}));return c.a.createElement("div",{className:s>1020&&o?"container container-right":s>1020&&!o?"container container-right hide":s<1020&&o?"container container-right unshift":"container container-right"},c.a.createElement(Z,{currentTaskId:t,currentTaskTitle:n,isChecked:i,currentTaskSteps:l}),c.a.createElement(F,null),c.a.createElement(V,{taskId:t}),c.a.createElement(z,{currentTaskDate:r,sourceId:t}))};var ee=function(){var e=Object(D.b)();return window.addEventListener("resize",(function(){e({type:"SET_WIDTH",payload:{screenWidth:document.documentElement.clientWidth}})})),c.a.createElement("div",{className:"App"},c.a.createElement(J,null),c.a.createElement(P,null),c.a.createElement($,null))},te=a(2),ae=a(3),ne=a(5),ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.Tasks,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TASK":return[].concat(Object(ae.a)(e),[{id:t.payload.id,title:t.payload.title,steps:t.payload.steps,isChecked:t.payload.isChecked,addedToMyDay:t.payload.addedToMyDay,Important:t.payload.Important,Planned:t.payload.Planned,parentList:t.payload.parentList,createdAt:t.payload.createdAt}]);case"EDIT_TASK":var a=e.find((function(e){return e.id===t.payload.id})),n=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(ae.a)(n),[Object(te.a)(Object(te.a)({},a),{},{title:t.payload.title})]);case"CHECK_TASK":var c=e.find((function(e){return e.id===t.payload.id})),i=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(ae.a)(i),[Object(te.a)(Object(te.a)({},c),{},{isChecked:t.payload.isChecked})]);case"IMPORTANT_TASK":var l=e.find((function(e){return e.id===t.payload.id})),r=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(ae.a)(r),[Object(te.a)(Object(te.a)({},l),{},{Important:t.payload.Important})]);case"ADD_TO_MY_DAY":var o=e.find((function(e){return e.id===t.payload.id})),s=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(ae.a)(s),[Object(te.a)(Object(te.a)({},o),{},{addedToMyDay:t.payload.addedToMyDay})]);case"CHECK_STEP":var d=e.find((function(e){return e.id===t.payload.parentTaskId})),u=d.steps.find((function(e){return e.id===t.payload.id})),m=d.steps.filter((function(e){return e.id!==t.payload.id})),E=[].concat(Object(ae.a)(m),[Object(te.a)(Object(te.a)({},u),{},{isChecked:t.payload.isChecked})]),p=Object(te.a)(Object(te.a)({},d),{},{steps:Object(ae.a)(E)}),b=e.filter((function(e){return e.id!==t.payload.parentTaskId}));return[].concat(Object(ae.a)(b),[Object(te.a)({},p)]);case"DELETE_TASK":var f=e.filter((function(e){return e.id!==t.payload.id}));return Object(ae.a)(f);default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.Lists,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_LIST":return[].concat(Object(ae.a)(e),[{id:t.payload.id,title:t.payload.title,group:t.payload.group}]);case"EDIT_LIST":var a=e.find((function(e){return e.id===t.payload.id})),n=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(ae.a)(n),[Object(te.a)(Object(te.a)({},a),{},{title:t.payload.title})]);case"DELETE_LIST":var c=e.filter((function(e){return e.id!==t.payload.id}));return Object(ae.a)(c);default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne.Groups,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_GROUP":return[].concat(Object(ae.a)(e),[{id:t.payload.id,title:t.payload.title}]);case"EDIT_GROUP":var a=e.filter((function(e){return e.id!==t.payload.id}));return[].concat(Object(ae.a)(a),[{id:t.payload.id,title:t.payload.title}]);default:return e}},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1,source:null,sourceId:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_MENU":return Object(te.a)(Object(te.a)({},e),{},{isOpen:t.payload.isOpen,source:t.payload.source,sourceId:t.payload.sourceId});default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:document.documentElement.clientWidth},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_WIDTH":return Object(te.a)(Object(te.a)({},e),{},{width:t.payload.screenWidth});default:return e}},se=a(4),de=Object(se.b)({tasks:ce,lists:ie,groups:le,currentList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{listId:"Tasks",title:"",isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LIST":return Object(te.a)(Object(te.a)({},e),{},{listId:t.payload.id});case"IS_EDITING_LIST":return Object(te.a)(Object(te.a)({},e),{},{isEditing:t.payload.isEditing});case"EDITING_LIST":return Object(te.a)(Object(te.a)({},e),{},{title:t.payload.title});case"RENAMEING_LIST":return Object(te.a)(Object(te.a)({},e),{},{listId:t.payload.listId,isEditing:t.payload.isEditing});default:return e}},currentGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{groupId:null,isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_GROUP":return Object(te.a)(Object(te.a)({},e),{},{groupId:t.payload.id});case"IS_EDITING_GROUP":return Object(te.a)(Object(te.a)({},e),{},{isEditing:t.payload.isEditing});default:return e}},currentTask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{taskId:null,title:"",isEditing:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TASK":return Object(te.a)(Object(te.a)({},e),{},{taskId:t.payload.id});case"IS_EDITING_TASK":return Object(te.a)(Object(te.a)({},e),{},{isEditing:t.payload.isEditing});case"EDITING_TASK":return Object(te.a)(Object(te.a)({},e),{},{title:t.payload.title});case"RENAMEING_TASK":return Object(te.a)(Object(te.a)({},e),{},{taskId:t.payload.taskId,isEditing:t.payload.isEditing});default:return e}},addingList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_LIST":return Object(te.a)(Object(te.a)({},e),{},{title:t.payload.title});default:return e}},addingGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_GROUP":return Object(te.a)(Object(te.a)({},e),{},{title:t.payload.title});default:return e}},addingTask:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{title:""},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADDING_TASK":return Object(te.a)(Object(te.a)({},e),{},{title:t.payload.title});default:return e}},menu:re,detailbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_DETAILBAR":return Object(te.a)(Object(te.a)({},e),{},{isOpen:t.payload.isOpen});default:return e}},toolbar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{isOpen:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_TOOLBAR":return Object(te.a)(Object(te.a)({},e),{},{isOpen:t.payload.isOpen});default:return e}},screen:oe}),ue=Object(se.c)(de,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D.a,{store:ue},c.a.createElement(ee,null))),document.getElementById("root"))},5:function(e){e.exports=JSON.parse('{"Tasks":[{"id":1,"title":"Important and my day","steps":[{"id":111,"title":"step step","isChecked":false},{"id":222,"title":"step step","isChecked":false}],"isChecked":true,"addedToMyDay":1609651798075,"Important":true,"Planned":1602058400000,"parentList":1,"createdAt":1602994834230},{"id":2,"title":"Tasks","steps":[{"id":333,"title":"step step","isChecked":false}],"isChecked":false,"addedToMyDay":1603081025853,"Important":false,"Planned":1609738483913,"parentList":"Tasks","createdAt":1602994853734},{"id":3,"title":"belong to list num 2","steps":[{"id":444,"title":"bla step","isChecked":false}],"isChecked":true,"addedToMyDay":1603520393640,"Important":false,"Planned":null,"parentList":2,"createdAt":1602994853734}],"Lists":[{"id":1,"title":"List Num #1","group":1},{"id":2,"title":"List Num #2","group":null}],"Groups":[{"id":1,"title":"group num #1"},{"id":2,"title":"group num #2"}]}')}},[[13,1,2]]]);
//# sourceMappingURL=main.5164e909.chunk.js.map