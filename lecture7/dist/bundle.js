!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Your company";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t};function i(e,t){return Math.floor(Math.random()*(t-e+1))+e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.surname=n,this.experience=r,this.lines,this.state}var t,n,r;return t=e,(n=[{key:"getSalary",value:function(){return this.experience<2?300:this.experience<5?600:1e3}},{key:"getLines",value:function(e){if("easy"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(400,600),this.lines):this.experience<5?(this.lines=i(700,900),this.lines):(this.lines=i(1e3,1400),this.lines);alert("Опыт должен быть больше 0 лет")}else if("medium"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(300,500),this.lines):this.experience<5?(this.lines=i(600,800),this.lines):(this.lines=i(800,1200),this.lines);alert("Опыт должен быть больше 0 лет")}else if("hard"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(200,400),this.lines):this.experience<5?(this.lines=i(500,700),this.lines):(this.lines=i(800,1e3),this.lines);alert("Опыт должен быть больше 0 лет")}}}])&&a(t.prototype,n),r&&a(t,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.surname=n,this.experience=r,this.salary,this.state,this.developers=[]}var t,n,r;return t=e,(n=[{key:"getSalary",value:function(){if(!(this.experience<0))return this.experience<2?400:this.experience<5?600:1e3;alert("Опыт должен быть больше 0 лет")}},{key:"getQuotient",value:function(){if(!(this.experience<0))return this.experience<2?1.2:this.experience<5?1.5:2.5;alert("Опыт должен быть больше 0 лет")}}])&&o(t.prototype,n),r&&o(t,r),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New project";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.cost,this.linesOfCode,this.manager,this.remainsLinesOfCode}var t,n,r;return t=e,(n=[{key:"getCost",value:function(e){return"easy"===e?(this.cost=i(3e4,1e5),this.cost):"medium"===e?(this.cost=i(15e3,6e4),this.cost):"hard"===e?(this.cost=i(1e4,4e4),this.cost):void 0}},{key:"getLinesOfCode",value:function(e){return"easy"===e?(this.linesOfCode=i(4e3,8e3),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):"medium"===e?(this.linesOfCode=i(6e3,12e3),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):"hard"===e?(this.linesOfCode=i(1e4,2e4),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):void 0}}])&&l(t.prototype,n),r&&l(t,r),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.companyNameInput=document.querySelector(".company-name-input"),this.startButton=document.querySelector(".start"),this.stopButton=document.querySelector(".stop"),this.easyButton=document.querySelector(".easy"),this.mediumButton=document.querySelector(".medium"),this.hardButton=document.querySelector(".hard"),this.timeDiv=document.querySelector(".time"),this.budgetDiv=document.querySelector(".budget"),this.addProjectButton=document.querySelector(".add-project"),this.projectNameInput=document.querySelector(".project-name-input"),this.addManagerButton=document.querySelector(".add-manager"),this.managerNameInput=document.querySelector(".manager-name-input"),this.managerSurnameInput=document.querySelector(".manager-surname-input"),this.managerExperienceInput=document.querySelector(".manager-experience-input"),this.developerNameInput=document.querySelector(".developer-name-input"),this.developerSurnameInput=document.querySelector(".developer-surname-input"),this.developerExperienceInput=document.querySelector(".developer-experience-input"),this.addDeveloperButton=document.querySelector(".add-developer"),this.userProjects=document.querySelector(".user-projects"),this.userManagers=document.querySelector(".user-managers"),this.userDevelopers=document.querySelector(".user-developers"),this.userCompanyName=document.querySelector(".user-company-name"),this.userSettings=document.querySelector(".settings"),this.userStatistics=document.querySelector(".statistics")}var t,n,r;return t=e,(n=[{key:"clearDOM",value:function(){for(this.timeDiv.innerHTML="",this.budgetDiv.innerHTML="",this.companyNameInput.value="",this.projectNameInput.value="",this.managerNameInput.value="",this.managerSurnameInput.value="",this.managerExperienceInput.value="",this.developerNameInput.value="",this.developerSurnameInput.value="",this.developerExperienceInput.value="",this.easyButton.classList.remove("button-active"),this.mediumButton.classList.remove("button-active"),this.hardButton.classList.remove("button-active"),this.userSettings.className="show";this.userProjects.firstChild;)this.userProjects.removeChild(this.userProjects.firstChild);for(;this.userManagers.firstChild;)this.userManagers.removeChild(this.userManagers.firstChild);for(;this.userDevelopers.firstChild;)this.userDevelopers.removeChild(this.userDevelopers.firstChild)}},{key:"createNewDeveloper",value:function(e,t,n,r,i,a,s){a.className="fire",a.innerHTML="Fire",s.appendChild(document.createTextNode("Name: "+e+", ")),s.appendChild(document.createTextNode("Surname: "+t+", ")),s.appendChild(document.createTextNode("Experience: "+n+", ")),s.appendChild(document.createTextNode("Lines: "+r+", "));var o=document.createElement("p");o.className="inline",o.appendChild(document.createTextNode("Project: "+i)),s.appendChild(o),s.appendChild(a),this.userDevelopers.appendChild(s)}},{key:"createNewManager",value:function(e,t,n,r,i,a,s){a.className="fire",a.innerHTML="Fire",s.appendChild(document.createTextNode("Name: "+e+", ")),s.appendChild(document.createTextNode("Surname: "+t+", ")),s.appendChild(document.createTextNode("Experience: "+n+", ")),s.appendChild(document.createTextNode("Quotient: "+r+", "));var o=document.createElement("p");o.appendChild(document.createTextNode("Project: "+i)),o.className="inline",s.appendChild(o),s.appendChild(a),this.userManagers.appendChild(s)}},{key:"createNewProject",value:function(e,t,n,r){var i=document.createElement("div");i.appendChild(document.createTextNode("Name: "+e+", ")),i.appendChild(document.createTextNode("Cost: "+t+", ")),i.appendChild(document.createTextNode("Lines needed: "+n+", "));var a=document.createElement("p");a.appendChild(document.createTextNode("Lines remain: "+r)),i.appendChild(a),this.userProjects.appendChild(i)}},{key:"isEasySelected",value:function(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.easyButton.className="easy button-active",this.mediumButton.className="medium",this.hardButton.className="hard"}},{key:"isMediumSelected",value:function(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.mediumButton.className="medium button-active",this.easyButton.className="easy",this.hardButton.className="hard"}},{key:"isHardSelected",value:function(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.hardButton.className="hard button-active",this.easyButton.className="easy",this.mediumButton.className="medium"}}])&&d(t.prototype,n),r&&d(t,r),e}();n.d(t,"main",function(){return m});var m=function(){var e,t=!1,n=0,i=void 0,a=0,o=0,l=0,d=0,m=!1,p=[],v=[],f=[],g=[],y=[],C=[],x=[],L=[],N=new h;function M(){clearInterval(e),N.clearDOM(),o=0,a=0,p=[],v=[],f=[],t=!1}N.startButton.addEventListener("click",function(){if(m){t=!0;var i=N.companyNameInput.value,s=new r(i);N.userCompanyName.innerHTML=s.name,N.userSettings.className="hide",e=window.setInterval(function(){o+=1,d=0;for(var e=0;e<p.length;e++)if(p[e].remainsLinesOfCode<=0){a+=p[e].cost,p[e].manager.state="Free",x.push(p[e].manager),N.userManagers.children[e].children[0].innerHTML="Project: "+p[e].manager.state;for(var t=0;t<p[e].manager.developers.length;t++)p[e].manager.developers[t].state="Free",C.push(p[e].manager.developers[t]);for(var n=0;n<N.userDevelopers.childElementCount;n++)N.userDevelopers.children[n].children[0].innerHTML==="Project: "+p[e].name&&(N.userDevelopers.children[n].children[0].innerHTML="Project: Free");p.splice(p.indexOf(p[e]),1),N.userProjects.removeChild(N.userProjects.children[e])}else{if(null!==p[e].manager){for(var r=0;r<p[e].manager.developers.length;r++)d+=p[e].manager.developers[r].lines;d*=p[e].manager.getQuotient()}p[e].remainsLinesOfCode-d<0?p[e].remainsLinesOfCode=0:p[e].remainsLinesOfCode=p[e].remainsLinesOfCode-d,N.userProjects.children[e].children[0].innerHTML="Lines remain:\n\t\t\t\t\t\t                                                     ".concat(p[e].remainsLinesOfCode),d=0}N.timeDiv.innerHTML=o,N.budgetDiv.innerHTML=a,N.userStatistics.innerHTML="You have ".concat(v.length," managers\n\t\t\t\t                                and ").concat(f.length," developers"),(a-=function(){l=0;for(var e=0;e<f.length;e++)l+=f[e].getSalary();for(var t=0;t<v.length;t++)l+=v[t].getSalary();return l}())<=0&&(M(),alert("You lose :("))},n)}else alert("Choose mode!")}),N.stopButton.addEventListener("click",function(){M()}),N.easyButton.addEventListener("click",function(){m=!0,i="easy",a=1e6,n=3e3,N.isEasySelected(o,a)}),N.mediumButton.addEventListener("click",function(){m=!0,i="medium",a=5e5,n=2e3,N.isMediumSelected(o,a)}),N.hardButton.addEventListener("click",function(){m=!0,i="hard",a=25e4,n=1e3,N.isHardSelected(o,a)}),N.addProjectButton.addEventListener("click",function(){if(t){var e=N.projectNameInput.value;if(function(e,t,n){for(var r=0;r<t.length;r++)if(e===t[r].name)return!0;for(var i=0;i<n.length;i++)if(e===n[i].name)return!0;return!1}(e,p,L))alert("Project with this name already exists!");else{var n=new c(e);N.createNewProject(n.name,n.getCost(i),n.getLinesOfCode(i),n.remainsLinesOfCode),L.push(n);var r=null;if(0!==x.length){(r=x[0]).state=L[0].name,v.push(r),y.push(r),L[0].manager=r,p.push(L[0]);for(var a=0;a<C.length;a++)r.developers<5&&r.developers.push(C[a]);for(var s=0,o=0;o<N.userDevelopers.childElementCount;o++)s<5&&"Project: Free"===N.userDevelopers.children[o].children[0].innerHTML&&(N.userDevelopers.children[o].children[0].innerHTML="Project: "+L[0].name,s++);x.pop();for(var u=0;u<N.userManagers.childElementCount;u++)if("Project: Free"===N.userManagers.children[u].children[0].innerHTML){N.userManagers.children[u].children[0].innerHTML="Project: "+L[0].name;break}L.shift()}}}else alert("You need to choose mode and start the game first!")}),N.addManagerButton.addEventListener("click",function(){if(t){var e=N.managerNameInput.value,n=N.managerSurnameInput.value;if(function(e,t,n){for(var r=0;r<n.length;r++)if(e===n[r].name&&t===n[r].surname)return!0;return!1}(e,n,v))alert("Manager with this name and surname already exists!");else{var r=N.managerExperienceInput.value,i=document.createElement("div"),a=document.createElement("div"),s=new u(e,n,r);if(0===L.length)s.state="Free",v.push(s),x.push(s);else{s.state=L[0].name,v.push(s),y.push(s),L[0].manager=s,p.push(L[0]);for(var o=0;o<C.length;o++)s.developers<5&&s.developers.push(C[o]);for(var l=0,c=0;c<N.userDevelopers.childElementCount;c++)l<5&&"Project: Free"===N.userDevelopers.children[c].children[0].innerHTML&&(N.userDevelopers.children[c].children[0].innerHTML="Project: "+L[0].name,l++)}L.shift(),N.createNewManager(s.name,s.surname,s.experience,s.getQuotient(),s.state,i,a),i.addEventListener("click",function(){if("Free"===s.state)v.splice(v.indexOf(s),1),x.splice(v.indexOf(s),1),N.userManagers.removeChild(a),console.log(L);else{v.splice(v.indexOf(s),1),y.splice(v.indexOf(s),1);for(var e=0;e<s.developers.length;e++)s.developers[e].state="Free",C.push(s.developers[e]);for(var t=0;t<p.length;t++)if(null!==p[t].manager&&p[t].manager.name===s.name&&p[t].manager.surname===s.surname){L.push(p[t]),p[t].manager=null;for(var n=0;n<N.userDevelopers.childElementCount;n++)N.userDevelopers.children[n].children[0].innerHTML==="Project: "+p[t].name&&(N.userDevelopers.children[n].children[0].innerHTML="Project: Free");console.log(L)}N.userManagers.removeChild(a)}})}}else alert("You need to choose mode and start the game first!")}),N.addDeveloperButton.addEventListener("click",function(){if(t)if(f.length>=5*v.length)alert("You don't have enough managers!");else{var e=N.developerNameInput.value,n=N.developerSurnameInput.value;if(function(e,t,n){for(var r=0;r<n.length;r++)if(e===n[r].name&&t===n[r].surname)return!0;return!1}(e,n,f))alert("Developer with this name and surname already exists!");else{for(var r=N.developerExperienceInput.value,a=new s(e,n,r),o=!1,u=document.createElement("div"),l=document.createElement("div"),c=0;c<p.length;c++)if(null!==p[c].manager&&p[c].manager.developers.length<5){p[c].manager.developers.push(a),a.state=p[c].name,g.push(a),o=!0;break}!1===o&&(C.push(a),a.state="Free"),N.createNewDeveloper(a.name,a.surname,a.experience,a.getLines(i),a.state,u,l),u.addEventListener("click",function(){if("Free"===a.state)C.splice(f.indexOf(a),1),f.splice(f.indexOf(a),1),N.userDevelopers.removeChild(l);else{for(var e=0;e<p.length;e++)-1!==p[e].manager.developers.indexOf(a)&&p[e].manager.developers.splice(p[e].manager.developers.indexOf(a),1);f.splice(f.indexOf(a),1),N.userDevelopers.removeChild(l)}}),f.push(a)}}else alert("You need to choose mode and start the game first!")})}()}]);