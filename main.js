
class Product
{
    constructor(name,price,year)
    {
      this.name=name;
      this.price=price;
      this.year=year;
    }
}
class UI
{
    agregarproducto(Productos)
    {
      const lista_producto=document.getElementById('lista_producto');
      const elemento = document.createElement('div');
      elemento.innerHTML=`
      <div  class="card text-center mb-4 conventa"   data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000">
      <div class="card-body">
           <strong>Nombre Producto</strong>: ${Productos.name}
           <strong>Precio Producto</strong>: ${Productos.price}
           <strong>Año Producto</strong>: ${Productos.year}
           <a href="#" class="btn btn-danger" name='delete'>Eliminar <i class='bx bxs-trash'></i></a>
      </div>
 </div> `;
     lista_producto.appendChild(elemento);


    }
    resetform()
    {
        document.getElementById('product-form').reset();
    }

    /*
    !Esta mierda tiene error
    ?xdxdxdxdxdx
    *looooool
    */ 
    eliminarproductos(element)
    {
      if (element.name==='delete')
      {
        
        console.log(element.parentElement.parentElement.parentElement.remove());
        this.mostrarmensajes('Producto eliminado correctamente','danger',2500);
        
      }

    }
  
    mostrarmensajes(mensaje,cssClass,time)
    {
      const div= document.createElement('div');
      div.className='msj alert alert-'+cssClass ;
      div.appendChild(document.createTextNode(mensaje));
      let ji=div;
      div.innerHTML=`<div class=cont3> <p class="pa">${mensaje} </p> <i class='bx bx-check-circle'></i></div> `;

      const contenedor= document.querySelector('.container');
      const app=document.querySelector('#app');
      contenedor.insertBefore(div,app);
      setTimeout(function()
      {
        document.querySelector('.alert').remove();
      },time);
    }
}
function aparecerbarra()
{
  $("#lis").addClass("agrebar");
}

//! eventos del dom......
document.getElementById('product-form').addEventListener("submit", function(e)
{

    const name=document.getElementById('nombre').value;
    const price=document.getElementById('precio').value;
    const year=document.getElementById('año').value;
    const Productos= new Product(name,price,year);
    const ui=new UI();

    if(name==="" || price==="" || year==="")
    {
       return ui.mostrarmensajes('complete los espacios','danger',2500);
    }
    aparecerbarra();
    ui.agregarproducto(Productos);
    ui.resetform();
    ui.mostrarmensajes('Producto agregado correctamente', 'success',2000);

    //*cancelar los eventos por defecto
    e.preventDefault();
});

document.getElementById('lista_producto').addEventListener('click',function(e)
{
    const ui=new UI();
    ui.eliminarproductos(e.target);
});


    

