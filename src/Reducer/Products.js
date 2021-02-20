var initialState = [
   { id: 1, name: "Iphone 7", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_Ame0vsCGQpk1TMqQscg0sgIG9mJIlgSbYcl47eqL8q2dAYMlULRvhHUXsQhU9FhnFDyqAIY&usqp=CAc', description: "Sp do apple sx", price: 500, inventory: 10,rating: 4},
   { id: 2, name: "Iphone 8", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo6-liq0JpfhmvedNAyovAtt3lI9dEQEt7q2AeNcNpm9FoDLiVJy9U1-NwaUEgKnXzvhkb5I&usqp=CAc', description: "Sp do apple sx", price: 450, inventory: 7 ,rating: 5},
   { id: 3, name: "Iphone 10", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo6-liq0JpfhmvedNAyovAtt3lI9dEQEt7q2AeNcNpm9FoDLiVJy9U1-NwaUEgKnXzvhkb5I&usqp=CAc', description: "Sp do apple sx", price: 550, inventory: 5 ,rating: 3},
]

const Products = (state = initialState, action) => {
   switch (action.type) {
      default: return [...state]

   }
}
export default Products;