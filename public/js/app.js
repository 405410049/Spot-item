class App{
    constructor(){
        const add_product_btn=document.querySelector('#add_product');
        add_product_btn.addEventListener('click',this.addProduct);
        this.Main_screen=new Main_screen();
        this.input_screen=new Input_screen();
    }
    addProduct()
    {
        document.querySelector('#main_screen').classList.add('inactive');
        document.querySelector('#input_screen').classList.remove('inactive');
        //this.input_screen=new Input_screen();
    }
}