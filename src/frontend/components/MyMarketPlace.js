import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

export const MyMarketPlace = ({ marketplace, nft, account, web3Handler }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [address, setAddress] = useState("");
  const [showAddressModal, setShowAddressModal] = useState(false);

  const loadMarketplaceItems = async () => {
    // Load all unsold items
    const itemCount = await marketplace.itemCount();
    let items = [];
    for (let i = 1; i <= itemCount; i++) {
      const item = await marketplace.items(i);
      if (!item.sold) {
        const uri = await nft.tokenURI(item.tokenId);
        const response = await fetch(uri);
        const metadata = await response.json();
        const totalPrice = await marketplace.getTotalPrice(item.itemId);
        items.push({
          totalPrice,
          itemId: item.itemId,
          seller: item.seller,
          name: metadata.name,
          description: metadata.description,
          image: metadata.image,
          category: metadata.category || "Products", // Default to Misc if no category
        });
      }
    }
    setLoading(false);
    setItems(items);
  };

  const buyMarketItem = async (item) => {
    if (!address) {
      alert("Please enter a valid address.");
      return;
    }

    await (
      await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })
    ).wait();

    console.log("Shipping Address:", address);
    setAddress("");
    setShowAddressModal(false);
    loadMarketplaceItems();
  };

  useEffect(() => {
    loadMarketplaceItems();
  }, []);

  // Group items by category
  const categorizedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="mt-24">
      {Object.keys(categorizedItems).length > 0 ? (
        <div className="px-5 container">
          {Object.keys(categorizedItems).map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {categorizedItems[category].map((item, idx) => (
                  <div key={idx} className="mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <img
                        className="w-full h-48 object-cover mb-4"
                        src={item.image}
                        alt={item.name}
                      />
                      <div className="text-secondary">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.name}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={() => {
                            setSelectedItem(item);
                            setShowAddressModal(true);
                          }}
                          className="bg-primary text-white py-2 px-4 rounded-lg"
                        >
                          Buy for {ethers.utils.formatEther(item.totalPrice)}{" "}
                          ETH
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <main className="p-4">
          <h2 className="text-2xl text-white font-semibold">
            No listed products
          </h2>
        </main>
      )}

      {/* Address Modal */}
      {showAddressModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Enter Shipping Address
            </h3>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter your shipping address here..."
              className="w-full border border-gray-300 p-2 rounded-lg mb-4"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowAddressModal(false)}
                className="bg-gray-400 text-white py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => buyMarketItem(selectedItem)}
                className="bg-primary text-white py-2 px-4 rounded-lg"
              >
                Confirm Purchase
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
