function sortArr(event){
    var numArr=event.data;
    numArr.sort(function (a,b){
        return a-b;
    });
  postMessage(numArr);
}
self.addEventListener("message",sortArr,false);
