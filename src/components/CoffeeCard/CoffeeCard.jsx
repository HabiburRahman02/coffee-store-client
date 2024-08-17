

const CoffeeCard = ({ coffee }) => {
    const { coffeeName, quantity, supplierName, category, details, taste, photoUrl } = coffee;
    return (
        <div className=" flex gap-6 items-center shadow-2xl p-4 rounded-lg">
            <figure className="w-1/2">
                <img
                    className="rounded-lg"
                    src={photoUrl} alt="Movie" />
            </figure>
            <div className="flex justify-between w-full">
                <div className="space-y-3">
                    <p className="font-semibold">Name: {coffeeName}</p>
                    <p className="font-semibold">Supplier: {supplierName}</p>
                    <p className="font-semibold">Category: {category}</p>
                    <p className="font-semibold">Quantity: {quantity}</p>
                    <p className="font-semibold">Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-4">
                        <button className="btn btn-info text-white join-item">View</button>
                        <button className="btn btn-secondary join-item">Edit</button>
                        <button className="btn btn-primary join-item">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;