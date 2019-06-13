class Input_screen{
    constructor()
    {
        document.addEventListener('submit',this.onSubmit);
    }
    onSubmit(event){
        event.preventDefault();
        post();
        document.querySelector('#main_screen').classList.remove('inactive');
        document.querySelector('#input_screen').classList.add('inactive');
    }
}
async function post()
{
    const form_name=document.querySelector('.form_name').value;
    const form_price=document.querySelector('.form_price').value;
    const form_sale=document.querySelector('.form_sale').value;
    const form_date=document.querySelector('.form_date').value;
    const form_seller=document.querySelector('.form_seller').value;
    const form_url=document.querySelector('.form_url').value;
    const fetch_body={
        name:form_name,
        price:form_price,
        sale:form_sale,
        expired_date:form_date,
        seller:form_seller,
        url:form_url
    };
    const event_info={
        mes:fetch_body
       };
    document.dispatchEvent(new CustomEvent('afterPost',{detail:event_info}));
    const fetch_option={
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body:JSON.stringify(fetch_body)
    };
    const result=await fetch('/add_product',fetch_option);
    console.log(result);

}