import { useLoaderData } from "react-router-dom";


const CoffeeDetails = () => {
    const coffee = useLoaderData();
    console.log(coffee);
    const { coffeeName, quantity, supplierName, category, details, taste, photoUrl } = coffee;
    return (
        <div className="md:flex justify-around items-center gap-4 bg-[#F4F3F0] p-10 md:px-40">
            <div className="">
                <img className="rounded-lg h-[500px] w-full object-cover" src={photoUrl} alt="" />
            </div>
            <div className="">
                <div className="space-y-5">
                    <h3 className="text-3xl font-bold italic mb-3">Coffees</h3>
                    <p ><span className="font-bold">Name:</span> {coffeeName}</p>
                    <p ><span className="font-bold">Supplier:</span> {supplierName}</p>
                    <p ><span className="font-bold">Category:</span> {category}</p>
                    <p ><span className="font-bold">Quantity:</span> {quantity}</p>
                    <p ><span className="font-bold">Taste:</span> {taste}</p>
                    <p ><span className="font-bold">Details:</span> {details}</p>

                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;