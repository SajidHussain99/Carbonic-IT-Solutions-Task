
let testimonialsArray = 
[
    {name:"Sajid Hussain", profe:"Engineer",testiPara:"I am sajid hussain and Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat ab cumque amet odit recusandae quam dolor quos eligendi possimus labore aliquid dolorum magnam.",img:"./images/person1.jfif"},

    {name:"kashif khan", profe:"Front-end Engineer",testiPara:"I am kashif and I am web developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat ab cumque amet odit recusandae quam dolor quos eligendi possimus labore aliquid dolorum magnam.",img:"./images/person2.jfif"},

    {name:"Nasir Malik", profe:"Doctor",testiPara:"I am nasir and I am doctor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat ab cumque amet odit recusandae quam dolor quos eligendi possimus labore aliquid dolorum magnam.",img:"./images/person3.jfif"},

    {name:"jawaad ali", profe:"Teacher",testiPara:"I am jawaad ali and I am teacher. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat ab cumque amet odit recusandae quam dolor quos eligendi possimus labore aliquid dolorum magnam.",img:"./images/person4.jpg"},
]
let nextCount =0;
let arrayLength = testimonialsArray.length;
let preCount = arrayLength-1;


function nextTesti()
{
    if(nextCount < arrayLength)
    {

    
    let newTesti =
    `
    <h4 class="font-weight-bold pb-4">What Our core client say?</h4>
    <p class=" pb-4">
    ${testimonialsArray[nextCount].testiPara}
    </p>

    <div class="d-flex">
        <div class="tes-img mr-4">
        <img src="${testimonialsArray[nextCount].img}" alt="" style="height: 100%;width:100%; border-radius: 50%;object-fit:fill;">
        </div>

        <div>
        <p class="name mb-0 fs-1 font-weight-bold">${testimonialsArray[nextCount].name}</p>
        <p class="${testimonialsArray[nextCount].profe}</p>
        </div>
        
    </div>

    <div class=" mt-3 pl-3">
    <button class="btn-left mr-1">
      <i class="fas fa-long-arrow-alt-left arrow-btn" onClick="previousTesti()"></i>
    </button>
    
    <button class="btn-right" onclick="nextTesti()">
      <i class="fas fa-long-arrow-alt-right arrow-btn"></i>
    </button>

    
    </div>
    `

    document.getElementById("testimonial").innerHTML = newTesti;
    nextCount++;

    }
    else
    {
        nextCount=0;

            
    let newTesti =
    `
    <h4 class="font-weight-bold pb-4">What Our core client say?</h4>
    <p class=" pb-4">
    ${testimonialsArray[nextCount].testiPara}
    </p>

    <div class="d-flex">
        <div class="tes-img mr-4">
        <img src="${testimonialsArray[nextCount].img}" alt="" style="height: 100%;width:100%; border-radius: 50%;object-fit:fill;">
        </div>

        <div>
        <p class="name mb-0 fs-1 font-weight-bold">${testimonialsArray[nextCount].name}</p>
        <p class="${testimonialsArray[nextCount].profe}</p>
        </div>
        
    </div>

    <div class=" mt-3 pl-3">
    <button class="btn-left mr-1">
      <i class="fas fa-long-arrow-alt-left arrow-btn" onClick="previousTesti()"></i>
    </button>
    
    <button class="btn-right" onclick="nextTesti()">
      <i class="fas fa-long-arrow-alt-right arrow-btn"></i>
    </button>

    
    </div>
    `

    document.getElementById("testimonial").innerHTML = newTesti;
    nextCount++;

    }
}

function previousTesti()
{
    if(nextCount < arrayLength && nextCount > 0 )
    {
        preCount = nextCount-1;

    
    let newTesti =
    `
    <h4 class="font-weight-bold pb-4">What Our core client say?</h4>
    <p class=" pb-4">
    ${testimonialsArray[preCount].testiPara}
    </p>

    <div class="d-flex">
        <div class="tes-img mr-4">
        <img src="${testimonialsArray[preCount].img}" alt="" style="height: 100%;width:100%; border-radius: 50%;object-fit:fill;">
        </div>

        <div>
        <p class="name mb-0 fs-1 font-weight-bold">${testimonialsArray[preCount].name}</p>
        <p class="${testimonialsArray[preCount].profe}</p>
        </div>
        
    </div>

    <div class=" mt-3 pl-3">
    <button class="btn-left mr-1">
      <i class="fas fa-long-arrow-alt-left arrow-btn" onClick="previousTesti()"></i>
    </button>
    
    <button class="btn-right" onclick="nextTesti()">
      <i class="fas fa-long-arrow-alt-right arrow-btn"></i>
    </button>

    
    </div>
    `

    document.getElementById("testimonial").innerHTML = newTesti;
    nextCount++;

    }
    else
    {
        nextCount=0;

            
    let newTesti =
    `
    <h4 class="font-weight-bold pb-4">What Our core client say?</h4>
    <p class=" pb-4">
    ${testimonialsArray[preCount].testiPara}
    </p>

    <div class="d-flex">
        <div class="tes-img mr-4">
        <img src="${testimonialsArray[preCount].img}" alt="" style="height: 100%;width:100%; border-radius: 50%;object-fit:fill;">
        </div>

        <div>
        <p class="name mb-0 fs-1 font-weight-bold">${testimonialsArray[preCount].name}</p>
        <p class="${testimonialsArray[preCount].profe}</p>
        </div>
        
    </div>

    <div class=" mt-3 pl-3">
    <button class="btn-left mr-1">
      <i class="fas fa-long-arrow-alt-left arrow-btn" onClick="previousTesti()"></i>
    </button>
    
    <button class="btn-right" onclick="nextTesti()">
      <i class="fas fa-long-arrow-alt-right arrow-btn"></i>
    </button>

    
    </div>
    `

    document.getElementById("testimonial").innerHTML = newTesti;
    nextCount++;

    }
}