export const orderItemsCreator = (selectedItems) =>
selectedItems.map((item) => ({
product: item["_id"],
name: item.name,
image: item.image,
price: item.price,
countInStock: item.countInStock,
qty: item.count,
}));