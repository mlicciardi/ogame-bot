if(ogame===undefined){var ogame={}}ogame.Notify=function(c,b,a){this.canNotify=false;this.title=c||"OGame";this.options=a||{};this.options.body=b||"";if(!("Notification" in window)){return false}else{if(Notification.permission==="granted"){this.canNotify=true}else{if(Notification.permission!=="denied"){Notification.requestPermission(function(d){if(d==="granted"){this.canNotify=true}})}}}};ogame.Notify.prototype.setImage=function(a){this.options.icon=a};ogame.Notify.prototype.setTag=function(a){this.options.tag=a};ogame.Notify.prototype.show=function(){if(this.canNotify){this.notification=new Notification(this.title,this.options);setTimeout(this.notification.close.bind(this.notification),5000)}};