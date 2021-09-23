var timer = 1000
var decline_friend = document.querySelectorAll("[id^= friends_deny_request_");

(async() => {for (var i = 0; i <= decline_friend.length; i++){
    decline_friend[i].click();
    await delay();
} console.log("helloworld");})()


function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timer);
    });
}
