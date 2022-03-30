

  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }

  function setCookie(cName, cValue, expDays) {
    let date = new Date();
    date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
  }

  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie); //to be careful
    const cArr = cDecoded.split('; ');
    let res;
    cArr.forEach(val => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    })
    return res
  }

  // function getCookie(cName) {
  //   if (cName != null) {
  //     const a = cName
  //     const cDecoded = JSON.parse($.cookie("user_inf")); //to be careful
  //     let res = cDecoded[a]
  //     // const cArr = cDecoded .split('; ');

  //     // let res;
  //     // cArr.forEach(val => {
  //     //     if (val.indexOf(name) === 0) res = val.substring(name.length);
  //     // })
  //     return res;
  //   }

  // }

  function delCookie(CName) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    const cDecoded = JSON.parse($.cookie("user_inf"));
    if (cDecoded != null) document.cookie = CName + "=" + cDecoded + ";expires=" + exp.toGMTString();
  }


  if (getCookie("user_Id") != null) {

    var a = String(getCookie("user_Id")).length
    if (a.length != 0) {
      $('#account_login').addClass("hidden");
      $('.drop-down-menu').removeClass("hidden");
    }
  }

  $('.logout').click(() => {

    delCookie("user_inf");
  })




function updateImage(){
  const imagePreview = document.querySelector('[data-target="image-preview"]');
  const getImg = localStorage.getItem("user_img");
  if (getImg) {
    $('.userImg').css('background-image', 'url(' + getImg + ')');
    if(imagePreview){
      imagePreview.src = getImg;
    }
    
  
  }
  
}

setTimeout(updateImage, 1000)

