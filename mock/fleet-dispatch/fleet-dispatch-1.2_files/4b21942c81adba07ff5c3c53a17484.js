var days=new Array("Mon","Tus","Wed","Thu","Fri","Sat","Sun");var months=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");function getFormatedDate(b,c){var a=new Date();a.setTime(b);str=c;str=str.replace("[d]",dezInt(a.getDate(),2));str=str.replace("[D]",days[a.getDay()]);str=str.replace("[m]",dezInt(a.getMonth()+1,2));str=str.replace("[M]",months[a.getMonth()]);str=str.replace("[j]",parseInt(a.getDate()));str=str.replace("[Y]",a.getFullYear());str=str.replace("[y]",a.getFullYear().toString().substr(2,4));str=str.replace("[G]",a.getHours());str=str.replace("[H]",dezInt(a.getHours(),2));str=str.replace("[i]",dezInt(a.getMinutes(),2));str=str.replace("[s]",dezInt(a.getSeconds(),2));return str}function dezInt(b,d,f){f=(f)?f:"0";var e=(b<0)?"-":"",a=(f=="0")?e:"";b=Math.abs(parseInt(b,10));d-=(""+b).length;for(var c=1;c<=d;c++){a+=""+f}a+=((f!="0")?e:"")+b;return a}function getFormatedTime(a){hours=Math.floor(a/3600);timeleft=a%3600;minutes=Math.floor(timeleft/60);timeleft=timeleft%60;seconds=timeleft;return dezInt(hours,2)+":"+dezInt(minutes,2)+":"+dezInt(seconds,2)};