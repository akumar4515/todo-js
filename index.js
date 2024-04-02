let input=document.querySelector('#input');
let addBtn=document.querySelector('#btn');


let item=document.querySelector('.main_list');
let list=document.querySelector('.list');
let counter=document.querySelector('.counter');

let count=0;


addBtn.addEventListener('click',()=>{
    if(input.value!==''){
        let div=document.createElement('div');
        div.textContent=input.value;
        div.className='item';
        let delbtn=document.createElement('button');
        delbtn.textContent="delete";
        delbtn.id='delbtn';
        delbtn.addEventListener('click', ()=>{
            count-=1;
            item.removeChild(div);
            counter.innerText=`${count} item added`;
        });

        count+=1;
        div.appendChild(delbtn);
        item.appendChild(div);
        input.value='';
        counter.innerText=`${count} item added`;

    }
});