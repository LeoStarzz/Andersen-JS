!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Your company";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t};function i(e,t){return Math.floor(Math.random()*(t-e+1))+e}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.surname=n,this.experience=r,this.lines,this.state}var t,n,r;return t=e,(n=[{key:"getSalary",value:function(){return this.experience<2?300:this.experience<5?600:1e3}},{key:"getLines",value:function(e){if("easy"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(400,600),this.lines):this.experience<5?(this.lines=i(700,900),this.lines):(this.lines=i(1e3,1400),this.lines);alert("Опыт должен быть больше 0 лет")}else if("medium"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(300,500),this.lines):this.experience<5?(this.lines=i(600,800),this.lines):(this.lines=i(800,1200),this.lines);alert("Опыт должен быть больше 0 лет")}else if("hard"===e){if(!(this.experience<0))return this.experience<2?(this.lines=i(200,400),this.lines):this.experience<5?(this.lines=i(500,700),this.lines):(this.lines=i(800,1e3),this.lines);alert("Опыт должен быть больше 0 лет")}}}])&&a(t.prototype,n),r&&a(t,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.surname=n,this.experience=r,this.salary,this.state,this.developers=[]}var t,n,r;return t=e,(n=[{key:"getSalary",value:function(){if(!(this.experience<0))return this.experience<2?400:this.experience<5?600:1e3;alert("Опыт должен быть больше 0 лет")}},{key:"getQuotient",value:function(){if(!(this.experience<0))return this.experience<2?1.2:this.experience<5?1.5:2.5;alert("Опыт должен быть больше 0 лет")}}])&&o(t.prototype,n),r&&o(t,r),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New project";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.cost,this.linesOfCode,this.manager,this.remainsLinesOfCode}var t,n,r;return t=e,(n=[{key:"getCost",value:function(e){return"easy"===e?(this.cost=i(3e4,1e5),this.cost):"medium"===e?(this.cost=i(15e3,6e4),this.cost):"hard"===e?(this.cost=i(1e4,4e4),this.cost):void 0}},{key:"getLinesOfCode",value:function(e){return"easy"===e?(this.linesOfCode=i(4e3,8e3),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):"medium"===e?(this.linesOfCode=i(6e3,12e3),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):"hard"===e?(this.linesOfCode=i(1e4,2e4),this.remainsLinesOfCode=this.linesOfCode,this.linesOfCode):void 0}}])&&l(t.prototype,n),r&&l(t,r),e}();function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.companyNameInput=document.querySelector(".company-name-input"),this.startButton=document.querySelector(".start"),this.stopButton=document.querySelector(".stop"),this.easyButton=document.querySelector(".easy"),this.mediumButton=document.querySelector(".medium"),this.hardButton=document.querySelector(".hard"),this.timeDiv=document.querySelector(".time"),this.budgetDiv=document.querySelector(".budget"),this.addProjectButton=document.querySelector(".add-project"),this.projectNameInput=document.querySelector(".project-name-input"),this.addManagerButton=document.querySelector(".add-manager"),this.managerNameInput=document.querySelector(".manager-name-input"),this.managerSurnameInput=document.querySelector(".manager-surname-input"),this.managerExperienceInput=document.querySelector(".manager-experience-input"),this.developerNameInput=document.querySelector(".developer-name-input"),this.developerSurnameInput=document.querySelector(".developer-surname-input"),this.developerExperienceInput=document.querySelector(".developer-experience-input"),this.addDeveloperButton=document.querySelector(".add-developer"),this.userProjects=document.querySelector(".user-projects"),this.userManagers=document.querySelector(".user-managers"),this.userDevelopers=document.querySelector(".user-developers"),this.userCompanyName=document.querySelector(".user-company-name"),this.userSettings=document.querySelector(".settings"),this.userStatistics=document.querySelector(".statistics"),this.error=document.querySelector(".error")}var t,n,r;return t=e,(n=[{key:"clearDOM",value:function(){for(this.timeDiv.innerHTML="",this.budgetDiv.innerHTML="",this.companyNameInput.value="",this.projectNameInput.value="",this.managerNameInput.value="",this.managerSurnameInput.value="",this.managerExperienceInput.value="",this.developerNameInput.value="",this.developerSurnameInput.value="",this.developerExperienceInput.value="",this.easyButton.classList.remove("button-active"),this.mediumButton.classList.remove("button-active"),this.hardButton.classList.remove("button-active"),this.userSettings.className="show";this.userProjects.firstChild;)this.userProjects.removeChild(this.userProjects.firstChild);for(;this.userManagers.firstChild;)this.userManagers.removeChild(this.userManagers.firstChild);for(;this.userDevelopers.firstChild;)this.userDevelopers.removeChild(this.userDevelopers.firstChild)}},{key:"createNewDeveloper",value:function(e,t,n,r,i,a,s){a.className="fire",a.innerHTML="Fire",s.appendChild(document.createTextNode("Name: "+e+", ")),s.appendChild(document.createTextNode("Surname: "+t+", ")),s.appendChild(document.createTextNode("Experience: "+n+", ")),s.appendChild(document.createTextNode("Lines: "+r+", "));var o=document.createElement("p");o.className="inline",o.appendChild(document.createTextNode("Project: "+i)),s.appendChild(o),s.appendChild(a),this.userDevelopers.appendChild(s)}},{key:"createNewManager",value:function(e,t,n,r,i,a,s){a.className="fire",a.innerHTML="Fire",s.appendChild(document.createTextNode("Name: "+e+", ")),s.appendChild(document.createTextNode("Surname: "+t+", ")),s.appendChild(document.createTextNode("Experience: "+n+", ")),s.appendChild(document.createTextNode("Quotient: "+r+", "));var o=document.createElement("p");o.appendChild(document.createTextNode("Project: "+i)),o.className="inline",s.appendChild(o),s.appendChild(a),this.userManagers.appendChild(s)}},{key:"createNewProject",value:function(e,t,n,r){var i=document.createElement("div");i.appendChild(document.createTextNode("Name: "+e+", ")),i.appendChild(document.createTextNode("Cost: "+t+", ")),i.appendChild(document.createTextNode("Lines needed: "+n+", "));var a=document.createElement("p");a.appendChild(document.createTextNode("Lines remain: "+r)),i.appendChild(a),this.userProjects.appendChild(i)}},{key:"isEasySelected",value:function(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.easyButton.className="easy button-active",this.mediumButton.className="medium",this.hardButton.className="hard"}},{key:"isMediumSelected",value:function(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.mediumButton.className="medium button-active",this.easyButton.className="easy",this.hardButton.className="hard"}},{key:"isHardSelected",value:function(e,t){this.timeDiv.innerHTML=e,this.budgetDiv.innerHTML=t,this.hardButton.className="hard button-active",this.easyButton.className="easy",this.mediumButton.className="medium"}}])&&d(t.prototype,n),r&&d(t,r),e}();n.d(t,"main",function(){return m});var m=function(){var e,t=!1,n=0,i=void 0,a=0,o=0,l=0,d=0,m=!1,p=[],v=[],f=[],y=[],g=[],x=[],C=[],S=[],L=new h;function b(){clearInterval(e),L.clearDOM(),o=0,a=0,p=[],v=[],f=[],y=[],g=[],x=[],C=[],S=[],t=!1}function M(e){L.error.innerHTML="Error: "+e,setTimeout(function(){L.error.innerHTML=""},2e3)}L.startButton.addEventListener("click",function(){if(m){t=!0;var i=L.companyNameInput.value,s=new r(i);L.userCompanyName.innerHTML=s.name,L.userSettings.className="hide",e=window.setInterval(function(){o+=1,d=0;for(var e=0;e<p.length;e++){var t=p[e];if(t.remainsLinesOfCode<=0){a+=t.cost,t.manager.state="Free",C.push(t.manager),L.userManagers.children[p.indexOf(t)].children[0].innerHTML="Project: Free";var n=!0,r=!1,i=void 0;try{for(var s,u=t.manager.developers[Symbol.iterator]();!(n=(s=u.next()).done);n=!0){var c=s.value;c.state="Free",x.push(c)}}catch(e){r=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(r)throw i}}var h=!0,m=!1,y=void 0;try{for(var g,S=L.userDevelopers.children[Symbol.iterator]();!(h=(g=S.next()).done);h=!0){var M=g.value;M.children[0].innerHTML==="Project: ".concat(t.name)&&(M.children[0].innerHTML="Project: Free")}}catch(e){m=!0,y=e}finally{try{h||null==S.return||S.return()}finally{if(m)throw y}}L.userProjects.removeChild(L.userProjects.children[p.indexOf(t)]),p.splice(p.indexOf(t),1)}else{if(null!==t.manager){var N=!0,T=!1,O=void 0;try{for(var j,w=t.manager.developers[Symbol.iterator]();!(N=(j=w.next()).done);N=!0){var P=j.value;d+=P.lines}}catch(e){T=!0,O=e}finally{try{N||null==w.return||w.return()}finally{if(T)throw O}}d*=t.manager.getQuotient()}t.remainsLinesOfCode-d<0?t.remainsLinesOfCode=0:t.remainsLinesOfCode=Math.round(t.remainsLinesOfCode-d),L.userProjects.children[p.indexOf(t)].children[0].innerHTML="Lines remain:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t ".concat(t.remainsLinesOfCode),d=0}}L.timeDiv.innerHTML=o,L.budgetDiv.innerHTML=a,L.userStatistics.innerHTML="You have ".concat(v.length," managers\n\t\t\t\t                                and ").concat(f.length," developers"),(a-=function(){l=0;for(var e=0;e<f.length;e++){var t=f[e];l+=t.getSalary()}for(var n=0;n<v.length;n++){var r=v[n];l+=r.getSalary()}return l}())<=0&&(b(),alert("You lose :("))},n)}else M("Choose mode!")}),L.stopButton.addEventListener("click",function(){b()}),L.easyButton.addEventListener("click",function(){m=!0,i="easy",a=1e6,n=3e3,L.isEasySelected(o,a)}),L.mediumButton.addEventListener("click",function(){m=!0,i="medium",a=5e5,n=2e3,L.isMediumSelected(o,a)}),L.hardButton.addEventListener("click",function(){m=!0,i="hard",a=25e4,n=1e3,L.isHardSelected(o,a)}),L.addProjectButton.addEventListener("click",function(){if(t){var e=L.projectNameInput.value;if(function(e,t,n){for(var r=0;r<t.length;r++)if(e===t[r].name)return!0;for(var i=0;i<n.length;i++)if(e===n[i].name)return!0;return!1}(e,p,S))M("Project with this name already exists!");else{var n=new c(e);L.createNewProject(n.name,n.getCost(i),n.getLinesOfCode(i),n.remainsLinesOfCode),S.push(n);var r=null;if(0!==C.length){(r=C[0]).state=S[0].name,v.push(r),g.push(r),S[0].manager=r,p.push(S[0]);for(var a=0;a<x.length;a++){var s=x[a];r.developers<5&&r.developers.push(s)}var o=0,u=!0,l=!1,d=void 0;try{for(var h,m=L.userDevelopers.children[Symbol.iterator]();!(u=(h=m.next()).done);u=!0){var f=h.value;o<5&&"Project: Free"===f.children[0].innerHTML&&(f.children[0].innerHTML="Project: "+S[0].name,o++)}}catch(e){l=!0,d=e}finally{try{u||null==m.return||m.return()}finally{if(l)throw d}}C.pop();var y=!0,b=!1,N=void 0;try{for(var T,O=L.userManagers.children[Symbol.iterator]();!(y=(T=O.next()).done);y=!0){var j=T.value;if("Project: Free"===j.children[0].innerHTML){j.children[0].innerHTML="Project: "+S[0].name;break}}}catch(e){b=!0,N=e}finally{try{y||null==O.return||O.return()}finally{if(b)throw N}}S.shift()}}}else M("You need to choose mode and start the game first!")}),L.addManagerButton.addEventListener("click",function(){if(t){var e=L.managerNameInput.value,n=L.managerSurnameInput.value;if(function(e,t,n){for(var r=0;r<n.length;r++)if(e===n[r].name&&t===n[r].surname)return!0;return!1}(e,n,v))M("Manager with this name and surname already exists!");else{var r=L.managerExperienceInput.value,i=document.createElement("div"),a=document.createElement("div"),s=new u(e,n,r);if(0===S.length)s.state="Free",v.push(s),C.push(s);else{s.state=S[0].name,v.push(s),g.push(s),S[0].manager=s,p.push(S[0]);for(var o=0;o<x.length;o++){var l=x[o];s.developers<5&&s.developers.push(l)}var c=0,d=!0,h=!1,m=void 0;try{for(var f,y=L.userDevelopers.children[Symbol.iterator]();!(d=(f=y.next()).done);d=!0){var b=f.value;c<5&&"Project: Free"===b.children[0].innerHTML&&(b.children[0].innerHTML="Project: "+S[0].name,c++)}}catch(e){h=!0,m=e}finally{try{d||null==y.return||y.return()}finally{if(h)throw m}}}S.shift(),L.createNewManager(s.name,s.surname,s.experience,s.getQuotient(),s.state,i,a),i.addEventListener("click",function(){if("Free"===s.state)v.splice(v.indexOf(s),1),C.splice(v.indexOf(s),1),L.userManagers.removeChild(a),console.log(S);else{v.splice(v.indexOf(s),1),g.splice(v.indexOf(s),1);var e=!0,t=!1,n=void 0;try{for(var r,i=s.developers[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var o=r.value;o.state="Free",x.push(o)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}for(var u=0;u<p.length;u++){var l=p[u];if(null!==l.manager&&l.manager.name===s.name&&l.manager.surname===s.surname){S.push(l),l.manager=null;var c=!0,d=!1,h=void 0;try{for(var m,f=L.userDevelopers.children[Symbol.iterator]();!(c=(m=f.next()).done);c=!0){var y=m.value;y.children[0].innerHTML==="Project: ".concat(l.name)&&(y.children[0].innerHTML="Project: Free")}}catch(e){d=!0,h=e}finally{try{c||null==f.return||f.return()}finally{if(d)throw h}}console.log(S)}}L.userManagers.removeChild(a)}})}}else M("You need to choose mode and start the game first!")}),L.addDeveloperButton.addEventListener("click",function(){if(t)if(f.length>=5*v.length)M("You don't have enough managers!");else{var e=L.developerNameInput.value,n=L.developerSurnameInput.value;if(function(e,t,n){for(var r=0;r<n.length;r++)if(e===n[r].name&&t===n[r].surname)return!0;return!1}(e,n,f))M("Developer with this name and surname already exists!");else{for(var r=L.developerExperienceInput.value,a=new s(e,n,r),o=!1,u=document.createElement("div"),l=document.createElement("div"),c=0;c<p.length;c++){var d=p[c];if(null!==d.manager&&d.manager.developers.length<5){f.push(a),d.manager.developers.push(a),a.state=d.name,y.push(a),o=!0;break}}!1===o&&(f.push(a),x.push(a),a.state="Free"),L.createNewDeveloper(a.name,a.surname,a.experience,a.getLines(i),a.state,u,l),u.addEventListener("click",function(){if("Free"===a.state)x.splice(f.indexOf(a),1),f.splice(f.indexOf(a),1),L.userDevelopers.removeChild(l);else{for(var e=0;e<p.length;e++){var t=p[e];-1!==t.manager.developers.indexOf(a)&&t.manager.developers.splice(t.manager.developers.indexOf(a),1)}f.splice(f.indexOf(a),1),L.userDevelopers.removeChild(l)}})}}else M("You need to choose mode and start the game first!")})}()}]);