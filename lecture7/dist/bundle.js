!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);class r{constructor(e="Your company"){this.name=e}}function i(e,t){return Math.floor(Math.random()*(t-e+1))+e}class s{constructor(e,t,n=1){this.name=e,this.surname=t,this.experience=n,this.lines,this.state}getSalary(){return this.experience<2?300:this.experience<5?600:1e3}getLines(e){if("easy"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(400,600),this.lines):this.experience<5?(this.lines=i(700,900),this.lines):(this.lines=i(1e3,1400),this.lines);alert("Опыт должен быть больше 0 лет")}else if("medium"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(300,500),this.lines):this.experience<5?(this.lines=i(600,800),this.lines):(this.lines=i(800,1200),this.lines);alert("Опыт должен быть больше 0 лет")}else if("hard"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(200,400),this.lines):this.experience<5?(this.lines=i(500,700),this.lines):(this.lines=i(800,1e3),this.lines);alert("Опыт должен быть больше 0 лет")}}}class a{constructor(e,t,n=1){this.name=e,this.surname=t,this.experience=n,this.salary,this.state,this.developers=[]}getSalary(){if(!(this.experience<0))return this.experience<2?400:this.experience<5?600:1e3;alert("Опыт должен быть больше 0 лет")}getQuotient(){if(!(this.experience<0))return this.experience<2?1.2:this.experience<5?1.5:2.5;alert("Опыт должен быть больше 0 лет")}}class o{constructor(e="New project"){this.name=e,this.cost,this.linesOfCode,this.manager,this.remainsLinesOfCode}getCost(e){return"easy"===e?(this.cost=i(3e4,1e5),this.cost):"medium"===e?(this.cost=i(15e3,6e4),this.cost):"hard"===e?(this.cost=i(1e4,4e4),this.cost):void 0}getLinesOfCode(e){return"easy"===e?(this.linesOfCode=i(4e3,8e3),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):"medium"===e?(this.linesOfCode=i(6e3,12e3),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):"hard"===e?(this.linesOfCode=i(1e4,2e4),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):void 0}}class u{constructor(){this.companyNameInput=document.querySelector(".company-name-input"),this.startButton=document.querySelector(".start"),this.stopButton=document.querySelector(".stop"),this.easyButton=document.querySelector(".easy"),this.mediumButton=document.querySelector(".medium"),this.hardButton=document.querySelector(".hard"),this.timeDiv=document.querySelector(".time"),this.budgetDiv=document.querySelector(".budget"),this.addProjectButton=document.querySelector(".add-project"),this.projectNameInput=document.querySelector(".project-name-input"),this.addManagerButton=document.querySelector(".add-manager"),this.managerNameInput=document.querySelector(".manager-name-input"),this.managerSurnameInput=document.querySelector(".manager-surname-input"),this.managerExperienceInput=document.querySelector(".manager-experience-input"),this.developerNameInput=document.querySelector(".developer-name-input"),this.developerSurnameInput=document.querySelector(".developer-surname-input"),this.developerExperienceInput=document.querySelector(".developer-experience-input"),this.addDeveloperButton=document.querySelector(".add-developer"),this.userProjects=document.querySelector(".user-projects"),this.userManagers=document.querySelector(".user-managers"),this.userDevelopers=document.querySelector(".user-developers"),this.userCompanyName=document.querySelector(".user-company-name"),this.userSettings=document.querySelector(".settings"),this.userStatistics=document.querySelector(".statistics"),this.error=document.querySelector(".error")}clearDOM(){for(this.timeDiv.innerHTML="",this.budgetDiv.innerHTML="",this.companyNameInput.value="",this.projectNameInput.value="",this.managerNameInput.value="",this.managerSurnameInput.value="",this.managerExperienceInput.value="",this.developerNameInput.value="",this.developerSurnameInput.value="",this.developerExperienceInput.value="",this.easyButton.classList.remove("button-active"),this.mediumButton.classList.remove("button-active"),this.hardButton.classList.remove("button-active"),this.userSettings.className="show";this.userProjects.firstChild;)this.userProjects.removeChild(this.userProjects.firstChild);for(;this.userManagers.firstChild;)this.userManagers.removeChild(this.userManagers.firstChild);for(;this.userDevelopers.firstChild;)this.userDevelopers.removeChild(this.userDevelopers.firstChild)}createNewDeveloper(e,t,n,r,i,s,a){s.className="fire",s.innerHTML="Fire",a.appendChild(document.createTextNode("Name: "+e+", ")),a.appendChild(document.createTextNode("Surname: "+t+", ")),a.appendChild(document.createTextNode("Experience: "+n+", ")),a.appendChild(document.createTextNode("Lines: "+r+", "));const o=document.createElement("p");o.className="inline",o.appendChild(document.createTextNode("Project: "+i)),a.appendChild(o),a.appendChild(s),this.userDevelopers.appendChild(a)}createNewManager(e,t,n,r,i,s,a){s.className="fire",s.innerHTML="Fire",a.appendChild(document.createTextNode("Name: "+e+", ")),a.appendChild(document.createTextNode("Surname: "+t+", ")),a.appendChild(document.createTextNode("Experience: "+n+", ")),a.appendChild(document.createTextNode("Quotient: "+r+", "));const o=document.createElement("p");o.appendChild(document.createTextNode("Project: "+i)),o.className="inline",a.appendChild(o),a.appendChild(s),this.userManagers.appendChild(a)}createNewProject(e,t,n,r){const i=document.createElement("div");i.appendChild(document.createTextNode("Name: "+e+", ")),i.appendChild(document.createTextNode("Cost: "+t+", ")),i.appendChild(document.createTextNode("Lines needed: "+n+", "));const s=document.createElement("p");s.appendChild(document.createTextNode("Lines left: "+r)),i.appendChild(s),this.userProjects.appendChild(i)}isEasySelected(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.easyButton.className="easy button-active",this.mediumButton.className="medium",this.hardButton.className="hard"}isMediumSelected(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.mediumButton.className="medium button-active",this.easyButton.className="easy",this.hardButton.className="hard"}isHardSelected(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.hardButton.className="hard button-active",this.easyButton.className="easy",this.mediumButton.className="medium"}}n.d(t,"main",function(){return l});const l=function(){let e,t=!1,n=0,i=void 0,l=0,d=0,c=0,h=0,m=!1,p=[],f=[],v=[],g=[],y=[],x=[],C=[],L=[],M=new u;function N(){clearInterval(e),M.clearDOM(),d=0,l=0,p=[],f=[],v=[],g=[],y=[],x=[],C=[],L=[],t=!1}function S(e){M.error.innerHTML=`Error: ${e}`,setTimeout(()=>{M.error.innerHTML=""},2e3)}M.startButton.addEventListener("click",()=>{if(m){t=!0;const i=M.companyNameInput.value,s=new r(i);M.userCompanyName.innerHTML=s.name,M.userSettings.className="hide",e=window.setInterval(function(){d+=1,h=0;for(let e of p)if(e.remainsLinesOfCode<=0){l+=e.cost,e.manager.state="Free",C.push(e.manager),M.userManagers.children[p.indexOf(e)].children[0].innerHTML="Project: Free";for(let t of e.manager.developers)t.state="Free",x.push(t);for(let t of M.userDevelopers.children)t.children[0].innerHTML===`Project: ${e.name}`&&(t.children[0].innerHTML="Project: Free");M.userProjects.removeChild(M.userProjects.children[p.indexOf(e)]),p.splice(p.indexOf(e),1)}else{if(null!==e.manager){for(let t of e.manager.developers)h+=t.lines;h*=e.manager.getQuotient()}e.remainsLinesOfCode-h<0?e.remainsLinesOfCode=0:e.remainsLinesOfCode=Math.round(e.remainsLinesOfCode-h),M.userProjects.children[p.indexOf(e)].children[0].innerHTML=`Lines left: ${e.remainsLinesOfCode}`,h=0}M.timeDiv.innerHTML=d,M.budgetDiv.innerHTML=l,M.userStatistics.innerHTML=`You have ${f.length} managers\n\t\t\t\t                                and ${v.length} developers`,(l-=function(){c=0;for(let e of v)c+=e.getSalary();for(let e of f)c+=e.getSalary();return c}())<=0&&(N(),alert("You lose :("))},n)}else S("Choose mode!")}),M.stopButton.addEventListener("click",()=>{N()}),M.easyButton.addEventListener("click",()=>{m=!0,i="easy",l=1e6,n=3e3,M.isEasySelected(d,l)}),M.mediumButton.addEventListener("click",()=>{m=!0,i="medium",l=5e5,n=2e3,M.isMediumSelected(d,l)}),M.hardButton.addEventListener("click",()=>{m=!0,i="hard",l=25e4,n=1e3,M.isHardSelected(d,l)}),M.addProjectButton.addEventListener("click",()=>{if(t){const e=M.projectNameInput.value;if(function(e,t,n){for(var r=0;r<t.length;r++)if(e===t[r].name)return!0;for(var i=0;i<n.length;i++)if(e===n[i].name)return!0;return!1}(e,p,L))S("Project with this name already exists!");else{const t=new o(e);M.createNewProject(t.name,t.getCost(i),t.getLinesOfCode(i),t.remainsLinesOfCode),L.push(t);let n=null;if(0!==C.length){(n=C[0]).state=L[0].name,y.push(n),L[0].manager=n,p.push(L[0]);for(let e of x)n.developers<5&&n.developers.push(e);let e=0;for(let t of M.userDevelopers.children)e<5&&"Project: Free"===t.children[0].innerHTML&&(t.children[0].innerHTML=`Project: ${L[0].name}`,e++);C.pop();for(let e of M.userManagers.children)if("Project: Free"===e.children[0].innerHTML){e.children[0].innerHTML=`Project: ${L[0].name}`;break}L.shift()}}}else S("You need to choose mode and start the game first!")}),M.addManagerButton.addEventListener("click",()=>{if(t){const e=M.managerNameInput.value,t=M.managerSurnameInput.value;if(function(e,t,n){for(var r=0;r<n.length;r++)if(e===n[r].name&&t===n[r].surname)return!0;return!1}(e,t,f))S("Manager with this name and surname already exists!");else{const n=M.managerExperienceInput.value,r=document.createElement("div"),i=document.createElement("div"),s=new a(e,t,n);if(0===L.length)s.state="Free",f.push(s),C.push(s);else{s.state=L[0].name,f.push(s),y.push(s),L[0].manager=s,p.push(L[0]);for(let e of x)s.developers<5&&s.developers.push(e);let e=0;for(let t of M.userDevelopers.children)e<5&&"Project: Free"===t.children[0].innerHTML&&(t.children[0].innerHTML=`Project: ${L[0].name}`,e++)}L.shift(),M.createNewManager(s.name,s.surname,s.experience,s.getQuotient(),s.state,r,i),r.addEventListener("click",()=>{if("Free"===s.state)f.splice(f.indexOf(s),1),C.splice(f.indexOf(s),1),M.userManagers.removeChild(i),console.log(L);else{f.splice(f.indexOf(s),1),y.splice(f.indexOf(s),1);for(let e of s.developers)e.state="Free",x.push(e);for(let e of p)if(null!==e.manager&&e.manager.name===s.name&&e.manager.surname===s.surname){L.push(e),e.manager=null;for(let t of M.userDevelopers.children)t.children[0].innerHTML===`Project: ${e.name}`&&(t.children[0].innerHTML="Project: Free");console.log(L)}M.userManagers.removeChild(i)}})}}else S("You need to choose mode and start the game first!")}),M.addDeveloperButton.addEventListener("click",()=>{if(t)if(v.length>=5*f.length)S("You don't have enough managers!");else{const e=M.developerNameInput.value,t=M.developerSurnameInput.value;if(function(e,t,n){for(var r=0;r<n.length;r++)if(e===n[r].name&&t===n[r].surname)return!0;return!1}(e,t,v))S("Developer with this name and surname already exists!");else{const n=M.developerExperienceInput.value,r=new s(e,t,n);let a=!1;const o=document.createElement("div"),u=document.createElement("div");for(let e of p)if(null!==e.manager&&e.manager.developers.length<5){v.push(r),e.manager.developers.push(r),r.state=e.name,g.push(r),a=!0;break}!1===a&&(v.push(r),x.push(r),r.state="Free"),M.createNewDeveloper(r.name,r.surname,r.experience,r.getLines(i),r.state,o,u),o.addEventListener("click",()=>{if("Free"===r.state)x.splice(v.indexOf(r),1),v.splice(v.indexOf(r),1),M.userDevelopers.removeChild(u);else{for(let e of p)-1!==e.manager.developers.indexOf(r)&&e.manager.developers.splice(e.manager.developers.indexOf(r),1);v.splice(v.indexOf(r),1),M.userDevelopers.removeChild(u)}})}}else S("You need to choose mode and start the game first!")})}()}]);