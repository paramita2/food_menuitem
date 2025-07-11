import React from 'react';

function FoodMenu() {
  const menuItems = [
    {
      name: 'Burgur',
      category: 'Fast Food',
      price: 150,
      image: 'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg?im=AspectCrop=(16,9);Resize,width=718;', 
    },
    {
      name: 'Chapati',
      category: 'Dinner',
      price: 250,
      image: 'data:image/jpeg;base64,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', 
    },
    {
      name: 'Chicken Chilli',
      category: 'Non Veg',
      price: 200,
      image: 'https://www.licious.in/blog/wp-content/uploads/2022/04/shutterstock_1498639676-min.jpg', 
    },
    {
      name: 'Chowmin',
      category: 'Fast Food',
      price: 60,
      image: 'https://tiffycooks.com/wp-content/uploads/2023/09/188E6766-B4B4-48FB-80F9-9E7EBA5B6278-scaled.jpg', 
    },
    {
      name: 'Capichino',
      category: 'Coffee',
      price: 100,
      image: 'https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA=', 
    },
    {
      name: 'Green Tea',
      category: 'Tea',
      price: 160,
      image: 'data:image/jpeg;base64,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', 
    },
    {
      name: 'Idali Dosha',
      category: 'Break Fast',
      price: 160,
      image: 'https://www.shutterstock.com/shutterstock/photos/2209054725/display_1500/stock-photo-famous-south-indian-food-dosa-idly-vada-oothappam-with-sambar-coconut-chutney-and-tomato-chutney-2209054725.jpg', 
    
    },
  

]



  const categories = [
    'All Food',
    'Fast Food',
    'Veg',
    'Non Veg',
    'Break Fast',
    'Lunch',
    'Dinner',
    'Tea',
    'Coffee',
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('All Food');

  const filteredMenuItems = selectedCategory === 'All Food'
    ? menuItems
    : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>FOOD MENU ITEMS</h1>
      <div style={{ textAlign: 'center'}}>
        {categories.map((category) => (
          <button
            
            onClick={() => setSelectedCategory(category)}
            style={{
             
              backgroundColor: selectedCategory === category ? 'lightblue' : 'yellow',
              padding: '8px 16px',
              margin: '4px',
              border: '1px solid black',
         
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredMenuItems.map((item) => (
          <div
            key={item.name}
            style={{
              border: '1px solid gray',
              margin: '10px',
              padding: '10px',
              width: '200px',
              height:'250px',
              textAlign: 'center',
            }}
          >
            
            <h3><img
              src={item.image}
              alt={item.name}
              style={{ width: '180px', height: '100px', }}
            />
            {item.name}</h3>
            <h5><p>{item.category}</p></h5>
            <h6><p>Price : Rs.{item.price}
              <button
              style={{
                backgroundColor: 'lightgreen',
                padding: '1px 10px',
                border: 'none',
              }}
            >
              Order Now
            </button>
            </p>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;