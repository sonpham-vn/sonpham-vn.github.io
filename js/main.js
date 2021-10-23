var unreadCount = 5;

window.onload = () => {
    'use strict';

    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js');
    }
    // set the badging
    navigator.setAppBadge(unreadCount).catch((error)=>{console.log(error);});

}

//display notification when click subcription button

function displayNotification() {

    Notification.requestPermission();
    if (Notification.permission === 'granted') {
        navigator.serviceWorker.getRegistration()
        .then (reg => {reg.showNotification('A new painting is available!', options);
        unreadCount++;
    });
    
    navigator.setAppBadge(unreadCount).catch((error)=>{console.log(error)});
    }

}

const options = {
    body: 'We have a new painting in stock. Check it out!',
    icon: 'images/logo/camellia-icon-512.png',
    vibrate: [100,50,100],
    badge: 'https://vanarragon.ca/nimage/icon.png',
    data: {primaryKey: 1},
    actions:[
        {action:'go', title:'Go to painting', icon:'https://vanarragon.ca/nimage/icon.png'},
        {action:'dismiss', title:'Dismiss', icon:'https://vanarragon.ca/nimage/icon.png'},
    ]

};