
import React, { Component } from 'react';
import { useEffect, useState } from 'react'
import ApiCaller from '../AxiosUtils/ApiCaller'
function Products(){
  
   var initialState = [
      { id: 1, name: "Iphone 7", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_Ame0vsCGQpk1TMqQscg0sgIG9mJIlgSbYcl47eqL8q2dAYMlULRvhHUXsQhU9FhnFDyqAIY&usqp=CAc', description: "Sp do apple sx", price: 500,rating: 4},
      { id: 2, name: "Iphone 8", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo6-liq0JpfhmvedNAyovAtt3lI9dEQEt7q2AeNcNpm9FoDLiVJy9U1-NwaUEgKnXzvhkb5I&usqp=CAc', description: "Sp do apple sx", price: 450,rating: 5},
      { id: 3, name: "Iphone 10", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo6-liq0JpfhmvedNAyovAtt3lI9dEQEt7q2AeNcNpm9FoDLiVJy9U1-NwaUEgKnXzvhkb5I&usqp=CAc', description: "Sp do apple sx", price: 550,rating: 3},
      { id: 4, name: "Iphone 12", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBSY9m40EVvd9PhztQPoso1Ow2q0-eH7Y30PBXsSNNP0lw8lz9H6SZyVMissu-_o3bIOIaKc&usqp=CAc', description: "Sp do apple sx", price: 450 ,rating: 5},
   ];

   // const [products,setProduct]= useState(initialState)
   //API
//   ApiCaller("my_Asm","GET",null).then(response =>{
//      const {data} = response
//      var api=data
//      //console.log(api);
//   })

  const Products = (state = initialState, action) => {
   switch (action.type) {
      
      default: return [...state]

   }
}
return Products
}

export default Products();