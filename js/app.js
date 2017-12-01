$.getScript("./data.js");
totalLength = data.length;
renderedProducts = 0 // Variable to keep track of the set rendered.

// Function to display the set of 8 products initially and for every show more button click
function displayRequiredProducts(){
  dataToDisplay = data[renderedProducts]['products'];
  for(i=0;i<dataToDisplay.length;i++){
    clone = $('.copy').clone();
    clone.removeClass('copy').removeClass('hidden').addClass('product');
    clone.find(".productImage").attr('src', dataToDisplay[i]['image']);
    clone.find(".productTitle").text(dataToDisplay[i]['title']);
    clone.find(".productCost").text(dataToDisplay[i]['price']);
    $('.productDisplay').append(clone);
  }
  renderedProducts+=1;
  if(renderedProducts == totalLength){
    $('#showButton').hide();
  }
}
displayRequiredProducts();