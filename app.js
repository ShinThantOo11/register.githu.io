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
let close = document.querySelectorAll('.close');
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
        delBox.classList.add('d-none');
    })
});

inputInSelect.addEventListener('click',()=>{
    courseTitle.innerHTML += `<option value="${catTitle.value}">${catTitle.value}</option>`;
    delteTitle.innerHTML += `<option value="${catTitle.value}">${catTitle.value}</option>`;
    catBox.classList.add('d-none');
    catTitle.value = ''
})

catTitle.addEventListener('keyup',(e)=>{
    if(e.key == 'Enter'){
        courseTitle.innerHTML += `<option value="${catTitle.value}">${catTitle.value}</option>`;
        delteTitle.innerHTML += `<option value="${catTitle.value}">${catTitle.value}</option>`;
        catBox.classList.add('d-none');
        catTitle.value = ''
    }
})

// delete category

let del = document.querySelector('#delete_category');
let delBox = document.querySelector('.delete-category');
let delBtn = document.querySelector('.deleteBtn');
let delteTitle = document.querySelector('#delete_cat');
let courseTitleValue = courseTitle.value;

del.addEventListener('click',()=>{
    delBox.classList.remove('d-none');
    delBox.classList.add('ani');
});

delBtn.addEventListener('click',()=>{
    if (delteTitle.value != 'Select Category'){
        for (var i=0; i<courseTitle.length; i++) {
            if (courseTitle.options[i].value == delteTitle.value)
                courseTitle.remove(i);
        }
        for (var i=0; i<delteTitle.length; i++) {
            if (delteTitle.options[i].value == delteTitle.value)
                delteTitle.remove(i);
        }
        delBox.classList.add('d-none');
    }
})