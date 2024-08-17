import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, quantity, supplierName, category, details, taste, photoUrl } = coffee;

    const handleDeleteCoffee = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this coffee?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Deleted coffee successfully",
                                icon: "success"
                            });
                        }
                    })

            }
        });

    }

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
                        <Link to={`/updateCoffee/${_id}`}>
                            <button className="btn btn-secondary join-item">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDeleteCoffee(coffee._id)}
                            className="btn btn-primary join-item">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;