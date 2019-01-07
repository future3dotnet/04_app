var left, top, columns, currentColumn, currentRow, availableWidth, fittingBanner, tmpBannersArray, newBannersArray, banners;

var narrowest = 175
var shortest = 175

export default function masonry (tmpBanners, width){
    
    
    left = 0;
    top = 0;

    columns = []
    currentColumn = 0
    currentRow = 0   
    
    banners = tmpBanners
    tmpBannersArray = [];
    newBannersArray = [];

    

    width = getBrowserWidth(width)

    //console.log("width = " + width)

    columns = initialiseColumns(width)

    //console.log("columns = " + columns)

    tmpBannersArray = tmpBanners.slice(0);

    
    for (var x = 0; x < tmpBanners.length; x++) {

        availableWidth = getAvailableWidth();
        
        
/*
        console.log("---------")

        console.log("x = " + x)
        console.log("currentRow = " + (currentRow+1))
        console.log("currentColumn = " + (currentColumn+1))
        console.log("availableWidth = " + availableWidth)
*/
                
        
         insertHeightToColumns(getFittingBanner())
        
         addCSS();
        

        
//        console.log("columns = " + columns)
//        console.log("---------")
        
        
        
        checkCurrentColumn()
       

    }

   
   return newBannersArray;

}



function getBrowserWidth(width) {

    if (width > 1400) {
        width = 1400;
    } else
    if (width > 1050) {
        width = 1050;
    } else
    if (width > 700) {
        width = 700;
    } else
    if (width > 350) {
        width = 350;
    }
    
    return width;

}

function initialiseColumns(width) {
    
    var numOfColumns = width / narrowest

    for (let x = 0; x < numOfColumns; x++) {

        columns[x] = 0;
    }
    
    return columns;

}


function getAvailableWidth() {
    
    let availableWidth = 0;
    
    
    for (var x = 0; x < banners.length; x++) {
                
        for (let y = currentColumn; y < columns.length; y++) {
            
             availableWidth = checkAvailableWidth()
            
             if(availableWidth > 0){
                 
                 return availableWidth;
                 
             }
            
            currentColumn++
            
        }
        
        checkCurrentColumn()
        
    }
    

//    console.log("availableWidth = " + availableWidth)
//    console.log("currentColumn = " + currentColumn)
//    console.log("shortest*columnCount = " + shortest * columns.length)
    
    return availableWidth;

}


function checkAvailableWidth() {
    
    let availableWidth = 0;

    for (let x = currentColumn; x < columns.length; x++) {

        if (columns[x] <= shortest * currentRow) {
            
         //console.log("columns[w] = "  + columns[x])
         //console.log("shortest*columnCount = "  + shortest*currentRow)

            availableWidth += narrowest

        }else{
        
            break;
            
        }
    }

//    console.log("availableWidth = " + availableWidth)
//    console.log("currentColumn = " + currentColumn)
//    console.log("shortest*columnCount = " + shortest * columns.length)
    
    return availableWidth;

}



function insertHeightToColumns() {
    
//        console.log('fittingBanner = ')
//        console.log(fittingBanner)
/*
        console.log(fittingBanner.divStyle)
        console.log(fittingBanner.divStyle.width)
        console.log(fittingBanner.divStyle.height)
*/
    
    left = currentColumn*narrowest

    
    var numOfColumnsToUpdate = fittingBanner.divStyle.width / shortest 
    
   // console.log('numOfColumnsToUpdate = '+ numOfColumnsToUpdate)
    
    for (let x = currentColumn; x < currentColumn+numOfColumnsToUpdate; x++) {
        
        columns[x] += fittingBanner.divStyle.height;
        
    }
    
    currentColumn += numOfColumnsToUpdate;
    

    return numOfColumnsToUpdate;

}

function getFittingBanner(){
    
    fittingBanner = {};
        
    
    for (var x = 0; x < banners.length; x++) {
                 
                
        for (let y = currentColumn; y < columns.length; y++) {
            
             fittingBanner = checkFittingBanner()
            
             if(Object.keys(fittingBanner).length > 0 && fittingBanner.constructor === Object){
                                  
                 return fittingBanner;
                 
             }
            
            currentColumn++
            
        }
        
        checkCurrentColumn()
        
        availableWidth = getAvailableWidth(tmpBannersArray)
        
    }

    
}

function checkFittingBanner(){
    
    
   // console.log("tmpBannersArray.length = "+ tmpBannersArray.length)
    
    for (let x = 0; x < tmpBannersArray.length; x++) {
        
   //  console.log("divStyle.width = "+tmpBannersArray[x].divStyle.width)
        
        if( tmpBannersArray[x].divStyle.width <= availableWidth ){

            
            fittingBanner = Object.assign({}, tmpBannersArray[x]);
            
            newBannersArray.push(fittingBanner)
            
            tmpBannersArray.splice(x,1);
            
            //console.log("tmpBannersArray")
            //console.log(tmpBannersArray)
            //console.log("newBannersArray")
            //console.log(newBannersArray)
            
            //console.log("fittingBanner")
            //console.log(fittingBanner)
                        
            return fittingBanner;
        }
        
    }
    
    return fittingBanner;

    
}

function addCSS() {

    var bannerCss = document.getElementById("bannercard_" + (fittingBanner.id))

    if (bannerCss) {

        bannerCss.style.left = left + "px"
        bannerCss.style.top = top + "px"
        
/*
        
    console.log("id = "+fittingBanner.id)
    console.log("name = "+fittingBanner.client.brand)
    console.log("left = "+bannerCss.style.left)
    console.log("top = "+bannerCss.style.top)

*/
    }
    


}
function checkCurrentColumn() {

    if (currentColumn === columns.length) {
        currentColumn = 0
        currentRow++
        left = 0
        top = currentRow*shortest;
       // console.log("top = "+top)
       // console.log("currentRow = "+currentRow)

    }

}