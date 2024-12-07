// textContentにHTMLタグを入れても無視されるので注意

const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");



const colorBg = () => {
    document.body.style.backgroundColor = color.value;
     
    if (color.value === '#ffffff'){
        text.textContent = `カラーコード：${color.value} (white)`;
    }else if (color.value === '#000000'){
        text.textContent = `カラーコード：${color.value} (brack)`;
    }else{
        text.textContent = `カラーコード：${color.value}`;
    }
}

//カラーピッカーが変更されたらcolorBgを発動させる
color.addEventListener('input',colorBg);