var newm = new Image();
var waxcres = new Image();
waxcres.src = "images/waxcres.png";
newm.src = "images/new.png";
var firstquart = new Image();
firstquart.src = "images/firstquart.png";
var waxgib = new Image();
waxgib.src = "images/waxgib.png";
var full = new Image();
full.src = "images/full.png";
var wangib = new Image();
wangib.src = "images/wangib.png";
var thirdquart = new Image();
thirdquart.src = "images/thirdquart.png";
var wancres = new Image();
wancres.src = "images/wancres.png";


function moonphase() {
    "use strict";

    var MOONPHASE = {
        get: function() {
            // Converted and adapted from: http://jivebay.com/calculating-the-moon-phase/

            var d = new Date(),
                year = d.getFullYear(),
                month = d.getMonth(),
                date = d.getDate(),
                c,e,jd,b,diff;

            if (month < 3) {
                year--;
                month += 12;
            }

            month++;

            c = 365.25 * year;
            e = 30.6 * month;
            jd = c + e + date - 694039.09;
            jd /= 29.5305882;
            b = parseInt(jd);
            jd -= b;
            b = Math.round(jd * 8);

            diff = jd*10;
            diff = +diff.toFixed(2);

            if (b >= 8 ) {
                b = 0;
            }

            switch (b) {
                case 0:
                    document.getElementById("moonimg").appendChild(newm);
                    return "New Moon";
                    break;
                case 1:
                    document.getElementById("moonimg").appendChild(waxcres);
                    return "Waxing Crescent";
                    break;
                case 2:
                    document.getElementById("moonimg").appendChild(firstquart);
                    return "First Quarter";
                    break;
                case 3:
                    document.getElementById("moonimg").appendChild(waxgib);
                    return "Waxing Gibbous";
                    break;
                case 4:
                    document.getElementById("moonimg").appendChild(full);
                    return "Full Moon";
                    break;
                case 5:
                    document.getElementById("moonimg").appendChild(wangib);
                    return "Waning Gibbous"
                    break;
                case 6:
                    document.getElementById("moonimg").appendChild(thirdquart);
                    return "Third Quarter";
                    break;
                case 7:
                    document.getElementById("moonimg").appendChild(wancres);
                    return "Waning Crescent";
                    break;
                default:
                    console.log('Error');
            }
        }
    };

    return {
        get: MOONPHASE.get
    }
}
var moon = moonphase();
document.getElementById("moon").innerHTML = moon.get();
