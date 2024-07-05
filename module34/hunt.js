const loadPhone = async (searchPhone='iphone',isShowAll) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
    const Alldata = await res.json();
    // console.log(Alldata.data)
    displayPhone(Alldata.data,isShowAll)
}

const displayPhone = (phone ,isShowAll) => {
    console.log(phone)
    // 1.find the container where div will be append 
    // 2.create a div 
    // 3.set inner html
    // 4.append the div in container 
    //5. clear container cards before adding new cards;

    const phoneContainer=document.getElementById('Phone-container')
    phoneContainer.textContent ='';

    //display show all phone button if there are more than 12 phones .
    const ShowAllContaine=document.getElementById('show-all-container')
    if(phone.length>12 && !isShowAll){
        ShowAllContaine.classList.remove('hidden')
    }
    else{
        ShowAllContaine.classList.add('hidden')
    }
console.log('is show all',isShowAll)
    //display only first 12 phones if not show all 
    if(!isShowAll){
        phone =phone.slice(0,12)
    }
   
        phone.forEach(phoneSingle => {
       // console.log(phoneSingle)
        
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-5 mx-auto   shadow-xl bg-gray-50 `;
        phoneCard.innerHTML = `
    <figure ><img src="${phoneSingle.image}"  alt="Shoes" /></figure>
    <div class="card-body">
    <h2 class="card-title text-black text-2xl font-bold">${phoneSingle.phone_name}</h2>
    <p class="text-black">There are many variations of passages of available, but the majority have suffered</p>
    
    <h3 class="text-2xl font-bold text-black text-center" >$999</h3>
    <div class="card-actions justify-end">
      <button onclick="hanleShowDetail('${phoneSingle.slug}')" class="btn btn-primary flex-auto text-xl">Show Details</button>
    </div>
  </div>
    `
    phoneContainer.appendChild(phoneCard);

    });

    //hide loading spiner 
    toggleLoadingSpiner(false);
}

//
const hanleShowDetail =async(id)=>{
console.log('show details',id)
//load single phone data 

const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
const data = await res.json()
console.log(data)

const ShowData=data.data;
showPhoneDetails(ShowData);

}

const showPhoneDetails=(phoneData)=>{
   
    const phoneName=document.getElementById('phone-name')

   phoneName.innerText=phoneData.name;
  const showdetailContainer= document.getElementById('show-detail-container');
  showdetailContainer.innerHTML=`
<div class="flex justify-center items-center">  <img class=" rounded-lg" src="${phoneData.image}" alt=""> </div>

  <p class='my-5'><span>storage:</span>${phoneData.mainFeatures.storage}</p>

  <p class='my-5'><span>Display Size:</span>${phoneData.mainFeatures.
    displaySize
    }</p>

  <p class='my-5'><span>Chipset:</span>${phoneData.mainFeatures.
    chipSet
    }</p>

  <p class='my-5'><span>Memory:</span>${phoneData.mainFeatures.
    memory
    }</p>

  <p class='my-5'><span>Slug:</span>${phoneData.slug}</p>
  <p class='my-5'><span>ReleaseDate:</span>${phoneData.
    releaseDate}</p>
  <p class='my-5'><span>Brand:</span>${phoneData.
    brand
    }</p>
  <p class='my-5'><span>Sensor:</span>${phoneData.mainFeatures.sensors}</p>


  `
     
    // show the modal 
    show_details_modal.showModal();
    console.log(phoneData)
}

//search 
const handleSearch =(isShowAll)=>{
    toggleLoadingSpiner(true);
    const search =document.getElementById('textfield').value;
    loadPhone(search,isShowAll);
    
}

const toggleLoadingSpiner= (isloading)=>{
    const loadingSpiner = document.getElementById('loading-spinner');
   if(isloading){
    loadingSpiner.classList.remove('hidden');
   }
   else{
    loadingSpiner.classList.add('hidden')
   }
}

const handalShowAll =()=>{
    handleSearch(true);
}

loadPhone();



