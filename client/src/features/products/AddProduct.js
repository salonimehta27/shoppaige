import React from 'react'

function AddProduct() {
    return (
        <div className="m-3">
            <h1>Upload your product</h1>
        <label className="mx-3">Choose file: </label>
        <input className="d-none" type="file" />
        <button className="btn btn-outline-primary">Upload</button>
      </div>
    )
}

export default AddProduct
