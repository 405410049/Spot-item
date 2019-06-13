class App{
    constructor(){
        const add_product_btn=document.querySelector('#add_btn');
        add_product_btn.addEventListener('click',this.addProduct);
        const back=document.querySelector('.back img');
        back.addEventListener('click',this.backFunc);
     //   const del=document.querySelector('.del_btn');
    //    del.addEventListener('click',this.selectDelItem);
        this.Main_screen=new Main_screen();
        this.input_screen=new Input_screen();
        
    }
    addProduct()
    {
        document.querySelector('#main_screen').classList.add('inactive');
        document.querySelector('#input_screen').classList.remove('inactive');
        document.querySelector('.back img').classList.remove('inactive');
        document.querySelector('.back div').classList.add('inactive');
    }
    backFunc()
    {
        document.querySelector('#main_screen').classList.remove('inactive');
        document.querySelector('#input_screen').classList.add('inactive');  
        document.querySelector('.back img').classList.add('inactive');
        document.querySelector('.back div').classList.remove('inactive');
    }
    selectDelItem()
    {
        console.log("123");
        const item=document.querySelectorAll('.item');
        for(let i of item)
            i.addEventListener('click',(event)=>{
            console.log(event.currentTarget);
        });
 
    }
}