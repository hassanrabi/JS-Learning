const inventory = [
  { id: 1, name: "Laptop", price: 1200, category: "Electronics", stock: 5 },
  { id: 2, name: "Desk Chair", price: 150, category: "Furniture", stock: 0 }, // Out of stock!
  { id: 3, name: "Wireless Mouse", price: 40, category: "Electronics", stock: 12 },
  { id: 4, name: "Desk Lamp", price: 30, category: "Furniture", stock: 8 },
  { id: 5, name: "Headphones", price: 200, category: "Electronics", stock: 0 }, // Out of stock!
  { id: 6, name: "Notebook", price: 5, category: "Stationery", stock: 50 }
];
// Filtering available items using filter method
const availableItems = inventory.filter(item => item.stock > 0);

// Applying discount on electronics using map method
const discountedItems = availableItems.map(item => {
    if(item.category === "Electronics"){
        return{...item, price: item.price * 0.9}
    } return item;
});

// Calculating total cost using reduce method

const totalInventoryValue = discountedItems.reduce((total, item)=>{
    return total + (item.price * item.stock)
} ,0);

// Printing final report
function generateReport(productList, totalValue){
    console.log("----- Inventory Report -----");
    for(const item of productList){
        console.log(`* ${item.name} - $${item.price} each (${item.stock} in stock)`)
    }
    console.log("------------------------");
    console.log(`Total Value of In-Stock Inventory is: $${totalValue}`)
};
generateReport(discountedItems, totalInventoryValue);