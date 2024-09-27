import Image from "next/image";

export default function Home() {
  return (
    
    
<body className="bg-gray-100 text-gray-600">

  <header>
    <div className="container mx-auto px-4 h-24 flex items-center justify-between">
      
      <div className="font-black">
        LOGO
      </div>
      
      <ul className="flex gap-3">

          <li><a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Como reservar</a></li>
          <li><a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Sobre nós</a></li>
          <li><a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Informações</a></li>
          <li><a href="" className="text-sm text-gray-600 hover:text-gray-800 hover:underline">Contato</a></li>

      </ul>
    </div>

  </header>

{/* Inicio do banner >>> */}

  <section>
    <div className="container mx-auto px-4 ">

      

      <div className="relative flex items-center justify-center">
        <img className="h-[450px] " src="/img/hero-image-1.png" alt="" />
        
        {/* Conteúdo dentro da imagem (INICIO) */}
        <div className="absolute flex justify-center flex-wrap space-y-20">

          {/* Texto da imagem (INICIO) */}

          <div className="text-center">
            <h1 className="text-gray-100 text-3xl mb-2">Onde você quer ir?</h1>
            <p className="text-green-100">Escolha o estado e cidade para achar os melhores resorts.</p>
          </div>
          {/* Texto da imagem (FIM) */}

          {/* FORMS >>>*/}

          <div className="absolute ">

            <form className="flex space-x-4 mt-7">
              <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500 ">
                <option value="">Escolha o estado</option>
              </select>

              <select className="bg-gray-50 px-3 py-2 border border-gray-300 rounded text-gray-500">
                <option value="">Escolha a cidade</option>
              </select> 

              <button className="bg-yellow-600 text-yellow-950 font-medium px-3 py-2 rounded text-nowrap flex items-center gap-1">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

                Pesquisar resorts
              </button>

            </form>
          
          </div>

          {/* <<< FORMS */}


        </div>
        {/* Conteúdo dentro da imagem (FIM)*/} 

        
      </div>
         

    </div>
  </section>

{/* <<< FIM do banner */}


{/* Painel (inicio) >>> */}

    <section>
      <div className="container mx-auto px-4 py-10">

        {/* Texto >> */}
        <main className="flex">
            
          <div className="space-y-3 pr-10">
            
            <h2 className="text-sm text-gray-400 font-medium ">Resort em destaque</h2>

            <h1 className="text-2xl">Ecoresort Praia do Forte Bahia</h1>

            <p className="text-sm text-gray-400 font-medium  ">Hotel qualidade 5 estrelas</p>

            <div className="text-sm text-gray-400 font-medium space-y-2   ">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit molestiae fuga voluptates. Assumenda, excepturi! Error beatae iure, cupiditate omnis eius saepe, voluptatum accusantium, ut iusto minus consequuntur! Dolor, dolore fuga.</h3>

              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, neque consectetur provident quos possimus consequuntur quaerat obcaecati magni natus recusandae porro ullam optio delectus ducimus ipsa incidunt exercitationem ut quisquam.</h3>
            </div>

            <button className="bg-yellow-600 text-yellow-950 font-medium px-3 py-2 rounded text-nowrap flex items-center gap-4">
              
              Solicitar Reserva

              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>

              
            </button>

          </div>
          {/* << Texto */}



          {/* Imagem >> */}

          <div className="ml-auto flex-shrink-0">
          
            <img className="w-[450px] " src="/img/praia-do-forte-820x547.jpg" alt="" />
            
          </div>
          {/* << imagem */}

        </main>

        
      </div>
    </section>


{/* <<< Painel (fim) */}


{/* grid de fotos (inicio) >>> */}

    <section>
      <main className="container mx-auto px-4 ">

        <div className="space-y-8">
          
          <h3 className="text-2xl text-center font-semibold">Conheça mais Resorts</h3>

          <div className="grid grid-cols-4 grid-rows-2 gap-6">

            <div className="col-span-2 row-span-2 relative">
              <img className="w-full h-full object-cover rounded overflow-hidden" src="/grid/hotel_1.jpg"/>
              <div className="absolute bottom-0 pl-4 pb-2 z-20"><h1 className="text-white text-base font-medium">Beach Park Resort</h1></div>
              <img className="absolute h-20 bottom-0 left-0 right-0 z-10" src="/img/image-shadow.png"/>

            </div>

            <div className="col-span-2 h-40 relative">
              <img className="w-full h-full object-cover rounded overflow-hidden" src="/grid/hotel_2.jpg"/>
              <div className="absolute bottom-0 pl-4 pb-1 z-20"><h1 className="text-white text-base font-medium">Fortal Resort</h1></div>
              <img className="absolute h-20 bottom-0 left-0 right-0 z-10" src="/img/image-shadow.png"/>

            </div>

            <div className=" relative ">
              <img className="w-full h-full object-cover rounded overflow-hidden" src="/grid/hotel_3.jpg"/>
              <div className="absolute bottom-0 pl-4 pb-1 z-20"><h1 className="text-white text-base font-medium">Miami Beach Hotel Resort</h1></div>
              <img className="absolute h-20 bottom-0 left-0 right-0 z-10" src="/img/image-shadow.png"/>

            </div>
            
            <div className=" relative ">
              <img className="w-full h-full object-cover rounded overflow-hidden" src="/grid/hotel_4.jpg"/>
              <div className="absolute bottom-0 pl-4 pb-1 z-20"><h1 className="text-white text-base font-medium">Resort Maxaranguape </h1></div>
              <img className="absolute h-20 bottom-0 left-0 right-0 z-10" src="/img/image-shadow.png"/>

            </div>

          </div>

        </div>

      </main>
    </section>




    <div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /></div>




{/* <<< grid de fotos (fim) */}



</body>
  );
}
