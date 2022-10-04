// upload img files 
let imgUpload = document.querySelector('.img-upload');
let upload = document.querySelector('#image_input');
let img = document.querySelector('.display-image');

imgUpload.addEventListener('click',()=>{
    upload.click()
})

upload.addEventListener('change',()=>{
    let photo = upload.files[0];
    console.log(upload.files)
    let reader = new FileReader();
    
    reader.addEventListener('load',()=>{
        img.src = reader.result;
        img.classList = 'display-image'
    });

    reader.readAsDataURL(photo);
})


// add_new_category
let add = document.querySelector('#add_new_category');
let close = document.querySelectorAll('.close')
let catBox = document.querySelector('.add-category');
let inputInSelect = document.querySelector('.add');
let catTitle = document.querySelector('#new_cat');
let courseTitle = document.querySelector('#course_title');

add.addEventListener('click',()=>{
    catBox.classList.remove('d-none');
    catBox.classList.add('ani');
});

close.forEach( el => {
    el.addEventListener('click',()=>{
        catBox.classList.add('d-none');
    })
});

inputInSelect.addEventListener('click',()=>{
    courseTitle.innerHTML += `<option value="${catTitle.value}">${catTitle.value}</option>`;
    catBox.classList.add('d-none');
    catTitle.value = ''
})

catTitle.addEventListener('keyup',(e)=>{
    if(e.key == 'Enter'){
        courseTitle.innerHTML += `<option value="${catTitle.value}">${catTitle.value}</option>`;
        catBox.classList.add('d-none');
        catTitle.value = ''
    }
})