import Swal from "sweetalert2";


const AddCoffee = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const coffeeName = form.coffeeName.value;
        const quantity = form.quantity.value;
        const supplierName = form.supplierName.value;
        const category = form.category.value;
        const details = form.details.value;
        const taste = form.taste.value;
        const photoUrl = form.photoUrl.value;
        const newCoffee = { coffeeName, quantity, supplierName, category, details, taste, photoUrl }

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "New coffee added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className="p-12 bg-[#F4F3F0]">
            <div className="max-w-2xl mx-auto text-center mb-6">
                <h2 className="text-3xl font-bold">Add New Coffee</h2>
                <p> lorum id. Architecto quis excepturi dignissimos. Exercitationem ad aperiam laboriosam quo nobis labore accusamus, voluptatem dolor! Dignissimos, voluptatum.</p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className="md:flex gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Coffee Name</span>
                        </label>
                        <input type="text" name="coffeeName" placeholder="Coffee name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <input type="number" name="quantity" placeholder="Quantity" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Supplier Name</span>
                        </label>
                        <input type="text" name="supplierName" placeholder="Supplier name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Taste" className="input input-bordered" required />
                    </div>
                </div>
                <div className="md:flex gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered" required />
                    </div>
                </div>
                <div className="gap-9 mb-4">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">Photo Url</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="Photo Url" className="input input-bordered" required />
                    </div>
                </div>
                <div className="gap-9 mb-4">
                    <button className="btn btn-block text-white bg-[#D2B48C] hover:bg-orange-300">Add Coffee</button>
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;