
function goToDetails(houseId, houseName, housePrice, houseLocation) {



const house=[{img1:"https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=600", img2:"https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&w=600", img3:"https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=600"}]




    // Encode the house details to include in the URL
    const params = new URLSearchParams({
        img1:house[0].img1,
        id: houseId,
        name: houseName,
        price: housePrice,
        location: houseLocation,
        img2:house[0].img2,

        
    }).toString();
    
    // Navigate to the house-details.html page with the encoded parameters
    window.location.href = `house-details.html?${params}`;

}
