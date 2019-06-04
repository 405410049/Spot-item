class Main_screen{
    constructor()
    {
        this.getFetch();
        this.afterPost=this.afterPost.bind(this);
        document.addEventListener('afterPost',this.afterPost);
    }
    createItemDOM()
    {
        const item_container=document.createElement('div');
        item_container.classList.add('item');       
        const name=document.createElement('p');
        name.classList.add('item_name');
        const price=document.createElement('p');
        price.classList.add('item_price');
        const sale=document.createElement('p');
        sale.classList.add('item_sale');
        const date=document.createElement('p');
        date.classList.add('item_date');
        const img=document.createElement('img');
        img.classList.add('item_img');

        item_container.appendChild(name);
        item_container.appendChild(price);
        item_container.appendChild(sale);
        item_container.appendChild(date);
        item_container.appendChild(img);
        return item_container;
    }
    afterPost(event)
    {
        const container=this.createItemDOM();
        const parent_container=document.querySelector('.item_list');
        parent_container.append(container);
        const name=document.querySelectorAll('.item_name');
        const price=document.querySelectorAll('.item_price');
        const sale=document.querySelectorAll('.item_sale');
        const date=document.querySelectorAll('.item_date');
        const img=document.querySelectorAll('.item_img');
        const event_info=event.detail.mes;   
        const i=name.length-1;
        name[i].textContent="產品名稱 :"+event_info.name;
        price[i].textContent="原始售價 :"+event_info.price;
        sale[i].textContent="特價 :"+event_info.sale;
        date[i].textContent="保存期限 :"+event_info.expired_date;
        img[i].setAttribute("src",event_info.url);
    }
    getFetch()
    {
        fetch('/product')
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            var i;
            let json_obj=JSON.parse(json);
            console.log(json_obj);
            const parent_container=document.querySelector('.item_list');
            let name_arr=new Array(),price_arr=new Array(),sale_arr=new Array(),date_arr=new Array(),img_arr=new Array();
            for(i=0;i<json_obj.length;i++){
                let item_container=this.createItemDOM();
                parent_container.append(item_container);
                name_arr[i]=json_obj[i]['name'];
                price_arr[i]=json_obj[i]['price'];
                sale_arr[i]=json_obj[i]['sale'];
                date_arr[i]=json_obj[i]['expired_date'];
                img_arr[i]=json_obj[i]['url'];
            }             
         //   console.log(img_arr[0]);           
            const name=document.querySelectorAll('.item_name');
            const price=document.querySelectorAll('.item_price');
            const sale=document.querySelectorAll('.item_sale');
            const date=document.querySelectorAll('.item_date');
            const img=document.querySelectorAll('.item_img');
            for(i=0;i<json_obj.length;i++){
                name[i].textContent="產品名稱 :"+name_arr[i];
                price[i].textContent="原始售價 :"+price_arr[i];
                sale[i].textContent="特價 :"+sale_arr[i];
                date[i].textContent="保存期限 :"+date_arr[i];
                img[i].setAttribute("src",img_arr[i]);
            }
        })
        .catch(function(){
            console.log("fetch_error");
        });    
    }
    
}