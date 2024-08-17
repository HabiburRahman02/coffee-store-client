import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, coffeeName, quantity, supplierName, category, details, taste, photoUrl } = coffee;
    const handleUpdateCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const quantity = form.quantity.value;
        const supplierName = form.supplierName.value;
        const category = form.category.value;
        const details = form.details.value;
        const taste = form.taste.value;
        const photoUrl = form.photoUrl.value;
        const updatedCoffee = { coffeeName, quantity, supplierName, category, details, taste, photoUrl }

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "updated coffee successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="p-12 bg-[#F4F3F0]">
            <div className="max-w-2xl mx-auto text-center mb-6">
                <h2 className="text-3xl font-bold">Update Coffee</h2>
                <p> lorum id. Architecto quis excepturi dignissimos. Exercitationem ad aperiam laboriosam quo nobis labore accusamus, voluptatem dolor! Dignissimos, voluptatum.</p>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className="md:flex gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <input type="text" name="coffeeName" defaultValue={coffeeName} placeholder="Coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <input type="number" name="quantity" defaultValue={quantity} placeholder="Quantity" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Supplier Name</span>
                        </label>
                        <input type="text" name="supplierName" defaultValue={supplierName} placeholder="Supplier name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered" required />
                    </div>
                </div>
                <div className="gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Photo Url</span>
                        </label>
                        <input type="text" name="photoUrl" defaultValue={photoUrl} placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                </div>
                <div className="gap-9 mb-4">
                    <button className="btn btn-block text-white bg-[#D2B48C] hover:bg-orange-300">Update Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCoffee;