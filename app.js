"use strict";

// ES5 Version
var url = "http://localhost:3000"; // get data from api

(function () {
    fetch("".concat(url, "/client/10"))
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            if (data.enabled) {
                pauseCampaign();
            } else {
                console.log('Do Nothing...');
                return;
            }
        })
        .catch(function (err) {
            console.log(err);
        });
})();

function pauseCampaign() {
    console.log("pause campaingn");
    // here will go the google's script code for pausing a campaign
}


// // ES6 Version
// const url = 'http://localhost:3000';

// // get data from api
// (function () {
//     fetch(`${url}/client/1`)
//         .then(function (res) {
//             return (res.json());
//         })
//         .then(function (data) {
//             if (data.enabled) {
//                 pauseCampaign();
//             } else {
//                 console.log('Do Nothing...');
//                 return;
//             }
//         })
//         .catch(function (err) {
//             console.log(err)
//         })
// }());

// function pauseCampaign() {
//     console.log('pause campaingn');
//     // here will go the google's script code for pausing a campaign
// }