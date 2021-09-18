var timer = 10000
var add_friends = document.getElementsByClassName("friends_find_user_add");

(async() => {for (var i = 0; i <= 100; i++){
    add_friends[i].click();
    await delay();
} console.log("helloworld");})()


function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, timer);
    });
}
