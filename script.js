const inputLevel = document.querySelector('#inputLevel');
const doubtResolved = document.querySelector('#doubt-resolve');
const submitButton = document.querySelector('[submit-button]');
const selectTag = document.querySelector('#dr-doubt-choice');

const level_1_thank = document.querySelectorAll('.level-1-no-of-thanks');
const level_1_amount = document.querySelectorAll('.level-1-amount');

const level_2_thank = document.querySelectorAll('.level-2-no-of-thanks');
const level_2_amount = document.querySelectorAll('.level-2-amount');

const level_3_thank = document.querySelectorAll('.level-3-no-of-thanks');
const level_3_amount = document.querySelectorAll('.level-3-amount');

const level_4_thank = document.querySelectorAll('.level-4-no-of-thanks');
const level_4_amount = document.querySelectorAll('.level-4-amount');

const level_1_dr = document.querySelectorAll('.level-1-dr-taken');
const level_1_dr_amount = document.querySelectorAll('.level-1-dr-amount');

const level_2_dr = document.querySelectorAll('.level-2-dr-taken');
const level_2_dr_amount = document.querySelectorAll('.level-2-dr-amount');

const level = [[],[level_1_thank,level_1_amount,15],[level_2_thank,level_2_amount,20],[level_3_thank,level_3_amount,30],[level_4_thank,level_4_amount,40]];
const dr = [[],[level_1_dr,level_1_dr_amount,100],[level_2_dr,level_2_dr_amount,140]];

const curTotal = document.querySelector('#curTotal');
const Total = document.querySelector('#Total');

init();
function init(){
    console.log(1);
    function getIdInit(id){
        return document.getElementById(id) ;
    }

    function localStorageRetrive(itemName){
        return localStorage.getItem(itemName)
    }

    function render(data1,data2){
        if(localStorageRetrive(data1)){
            const DoubtLevelPen = getIdInit(data1);
            DoubtLevelPen.innerText = localStorageRetrive(data1);
        }
        if(localStorageRetrive(data2)){
            const DoubtLevelPenAmount = getIdInit(data2);
            DoubtLevelPenAmount.innerText = localStorageRetrive(data2);
        }
    }

    function totalDataRenderFromLocalStorage(id){
        const totalAmountPen = document.getElementById(id) ;
        if(localStorage.getItem("totalAmountPen")){
            totalAmountPen.value = localStorage.getItem("totalAmountPen")
        }
        else totalAmountPen.value = 0;
    }
    
    render("chatDoubtLevel1Pen","chatDoubtLevel1PenAmount");
    render("chatDoubtLevel2Pen","chatDoubtLevel2PenAmount");
    render("chatDoubtLevel3Pen","chatDoubtLevel3PenAmount");
    render("chatDoubtLevel4Pen","chatDoubtLevel4PenAmount");
    render("DoubtResolutionLevel1Pen","DoubtResolutionLevel1PenAmount");
    render("DoubtResolutionLevel2Pen","DoubtResolutionLevel2PenAmount");

    // total render 
    totalDataRenderFromLocalStorage("curTotal");

    render("chatDoubtLevel1","chatDoubtLevel1Amount");
    render("chatDoubtLevel2","chatDoubtLevel2Amount");
    render("chatDoubtLevel3","chatDoubtLevel3Amount");
    render("chatDoubtLevel4","chatDoubtLevel4Amount");
    render("DoubtResolutionLevel1","DoubtResolutionLevel1Amount");
    render("DoubtResolutionLevel2","DoubtResolutionLevel2Amount");

    // final total render
    totalDataRenderFromLocalStorage("Total");
}


submitButton.addEventListener('click',() =>{
    if(inputLevel.value != "" && doubtResolved.value != ""){
        let selectedValue = selectTag.options[selectTag.selectedIndex].value ;
        if(selectedValue === 'doubt-resolve') doubtUpdate();
        else drUpdate();
    }
    
});

function updateDataToLocalStorage(){
    
    // function to access the element by id 
    function getId(id){
        return document.getElementById(id).innerText ;
    }

    function saveDataToLocalStorage(data1,data2){
        const DoubtLevelPen = getId(data1);
        const DoubtLevelPenAmount = getId(data2);
        localStorage.setItem(data1,DoubtLevelPen);
        localStorage.setItem(data2,DoubtLevelPenAmount);
    }

    function totalDataSaveToLocalStorage(id){
        const totalAmountPen = document.getElementById(id).value ;
        console.log(totalAmountPen);
        if(totalAmountPen != null && totalAmountPen != "" && totalAmountPen != NaN) localStorage.setItem("totalAmountPen",totalAmountPen);
    }
    
    // chat doubt support info saving 
    saveDataToLocalStorage("chatDoubtLevel1Pen","chatDoubtLevel1PenAmount");
    saveDataToLocalStorage("chatDoubtLevel2Pen","chatDoubtLevel2PenAmount");
    saveDataToLocalStorage("chatDoubtLevel3Pen","chatDoubtLevel3PenAmount");
    saveDataToLocalStorage("chatDoubtLevel4Pen","chatDoubtLevel4PenAmount");

    // doubt resolution info saving 
    saveDataToLocalStorage("DoubtResolutionLevel1Pen","DoubtResolutionLevel1PenAmount");
    saveDataToLocalStorage("DoubtResolutionLevel2Pen","DoubtResolutionLevel2PenAmount");

    // total input box value saving 
    totalDataSaveToLocalStorage("curTotal");

    // overall payment chat doubt support info saving 
    saveDataToLocalStorage("chatDoubtLevel1","chatDoubtLevel1Amount");
    saveDataToLocalStorage("chatDoubtLevel2","chatDoubtLevel2Amount");
    saveDataToLocalStorage("chatDoubtLevel3","chatDoubtLevel3Amount");
    saveDataToLocalStorage("chatDoubtLevel4","chatDoubtLevel4Amount");

    // overall payment doubt resolution info saving 
    saveDataToLocalStorage("DoubtResolutionLevel1","DoubtResolutionLevel1Amount");
    saveDataToLocalStorage("DoubtResolutionLevel2","DoubtResolutionLevel2Amount");
    
    // final total value storing 
    totalDataSaveToLocalStorage("Total");

}

function isNumeric(a){
    a = parseInt(a) ;
    return (a >= 0 && a <= 9) ;
}

function doubtUpdate(){
    let val = inputLevel.value ;
    let noDoubtSolve = doubtResolved.value ;

    let fang = true ;

    for(let i = 0 ; i < val.length ; i++){
        if(!isNumeric(val[i])) fang = false ;
    }

    let neg = false ;
    if(noDoubtSolve[0] == '-'){
        neg = true ;
        if(noDoubtSolve.length == 1) fang = false ;
        for(let i = 1 ; i < noDoubtSolve.length ; i++){
            if(!isNumeric(noDoubtSolve[i])) fang = false ;
        }

        let tempNoOfDoubtSolve = noDoubtSolve ;
        noDoubtSolve = '';
        for(let i = 1 ; i < tempNoOfDoubtSolve.length ; i++){
            noDoubtSolve += tempNoOfDoubtSolve[i] ;
        }
    }
    else{
        for(let i = 0 ; i < noDoubtSolve.length ; i++){
            if(!isNumeric(noDoubtSolve[i])) fang = false ;
        }
    }
    
    if(!fang) return ;
    
    val = parseInt(inputLevel.value) ;
    noDoubtSolve = parseInt(noDoubtSolve) ;

    level[val][0].forEach((item) =>{
        if(!neg) item.innerText = parseInt(item.innerText) + parseInt(noDoubtSolve) ;
        else if(parseInt(item.innerText) - parseInt(noDoubtSolve) >= 0){
            item.innerText = parseInt(item.innerText) - parseInt(noDoubtSolve);
        }
            
    })

    level[val][1].forEach((item) =>{
        let convert = '';
        for(let i = 1 ; i < item.innerText.length - 1 ; i++){
            convert += item.innerText[i];
        }

        if(!neg) item.innerText = `[${parseInt(convert) + (parseInt(noDoubtSolve) * level[val][2])}]` ;
        else if(parseInt(convert) - (parseInt(noDoubtSolve) * level[val][2]) >= 0) 
            item.innerText = `[${parseInt(convert) - (parseInt(noDoubtSolve) * level[val][2])}]`;
    })

    emptyInputField() ;
    displayTotal(parseInt(noDoubtSolve) * level[val][2],neg);
    updateDataToLocalStorage();
}

function drUpdate(){
    let val = inputLevel.value ;
    let noDoubtSolve = doubtResolved.value ;

    let fang = true ;
    for(let i = 0 ; i < val.length ; i++){
        if(!isNumeric(val[i])) fang = false ;
    }

    let neg = false ;
    if(noDoubtSolve[0] == '-'){
        neg = true ;
        if(noDoubtSolve.length == 1) fang = false ;
        for(let i = 1 ; i < noDoubtSolve.length ; i++){
            if(!isNumeric(noDoubtSolve[i])) fang = false ;
        }

        let tempNoOfDoubtSolve = noDoubtSolve ;
        noDoubtSolve = '';
        for(let i = 1 ; i < tempNoOfDoubtSolve.length ; i++){
            noDoubtSolve += tempNoOfDoubtSolve[i] ;
        }
    }
    else{
        for(let i = 0 ; i < noDoubtSolve.length ; i++){
            if(!isNumeric(noDoubtSolve[i])) fang = false ;
        }
    }

    if(!fang) return ;

    val = parseInt(inputLevel.value) ;
    noDoubtSolve = parseInt(noDoubtSolve) ;

    dr[val][0].forEach((item) =>{
        if(!neg) item.innerText = parseInt(item.innerText) + parseInt(noDoubtSolve) ;
        else if(parseInt(item.innerText) - parseInt(noDoubtSolve) >= 0){
            item.innerText = parseInt(item.innerText) - parseInt(noDoubtSolve) ;
        }
    })

    dr[val][1].forEach((item) =>{
        let convert = '';
        for(let i = 1 ; i < item.innerText.length - 1 ; i++){
            convert += item.innerText[i];
        }
        if(!neg) item.innerText = `[${parseInt(convert) + (parseInt(noDoubtSolve) * dr[val][2])}]` ;
        else if(parseInt(convert) - (parseInt(noDoubtSolve) * dr[val][2]) >= 0){
            item.innerText = `[${parseInt(convert) - (parseInt(noDoubtSolve) * dr[val][2])}]` ;
        }
    })

    emptyInputField() ;
    displayTotal(parseInt(noDoubtSolve) * dr[val][2],neg);
    updateDataToLocalStorage();

}

function emptyInputField(){
    inputLevel.value = '';
    doubtResolved.value = '';
}

function displayTotal(updateTotal , neg){
    if(!neg){
        Total.value = parseInt(Total.value) + updateTotal ;
        curTotal.value = parseInt(curTotal.value) + updateTotal ;
    }
    else if(parseInt(curTotal.value) - updateTotal >= 0){
        Total.value = parseInt(Total.value) - updateTotal ;
        curTotal.value = parseInt(curTotal.value) - updateTotal ;
    }
}