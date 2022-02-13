import {
	MDBRow,
	MDBCard,
	MDBCardBody,
	MDBTooltip,
	MDBInput,
	MDBBtn,
} from "mdb-react-ui-kit"
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact"
import { Container, Nav, Col, Row } from "react-bootstrap"
import {
	cartProductAmount,
	cartProductItemQuantity,
	cartProductRemoved,
} from "./cartsSlice"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

function Cart({ currentUser, cartData }) {
	const dispatch = useDispatch()
	const columns = [
		{
			label: "",
			field: "img",
		},
		{
			label: <strong>Product</strong>,
			field: "product",
		},
		{
			label: <strong>Color</strong>,
			field: "color",
		},
		{
			label: <strong>Price</strong>,
			field: "price",
		},
		{
			label: <strong>QTY</strong>,
			field: "qty",
		},
		{
			label: <strong>Amount</strong>,
			field: "amount",
		},
		{
			label: "",
			field: "button",
		},
	]
	const rows = []
	{
		cartData ? (
			cartData.cart_products.map((row) => {
				function handleProductDelete() {
					fetch(`/cart_products/${row.product.id}`, {
						method: "delete",
					})
					dispatch(cartProductRemoved(row.product.id))
					dispatch(cartProductAmount({ ...cartData, ["currentProduct"]: row }))
					dispatch(cartProductItemQuantity(cartData))
				}
				return rows.push({
					img: (
						<Link to={`/products/${row.product.id}`}>
							<img
								src={row.images[0].image_url}
								alt=""
								className="img-fluid z-depth-0"
							/>
						</Link>
					),
					product: [
						<h5 className="mt-3" key={new Date().getDate + 1}>
							<strong>{row.product.name}</strong>
						</h5>,
						<p key={new Date().getDate} className="text-muted">
							no subtitle yet
						</p>,
					],
					color: row.product.color,
					price: `$${row.product.price}`,
					qty: (
						<MDBInput
							type="number"
							default={row.item_quantity}
							value={row.item_quantity}
							className="form-control"
							style={{ width: "100px" }}
						/>
					),
					amount: <strong>${row.item_quantity * row.product.price}</strong>,
					button: (
						<MDBTooltip placement="top">
							<MDBBtn color="primary" size="sm" onClick={handleProductDelete}>
								X
							</MDBBtn>
							<div>Remove item</div>
						</MDBTooltip>
					),
				})
			})
		) : (
			<h1>Cart is Empty</h1>
		)
	}
	return (
		<Container style={{ marginTop: "58px" }}>
			{cartData === undefined ||
			cartData === null ||
			cartData.total_amount === 0 ? (
				<>
					<h1 style={{ marginTop: "100px" }}>
						Cart is empty please add a product
					</h1>{" "}
					<Nav.Link href="/">back to shopping</Nav.Link>
				</>
			) : (
				<>
					<MDBRow className="my-2" center>
						<MDBCard className="w-100">
							<MDBCardBody>
								<MDBTable className="product-table">
									<MDBTableHead
										className="font-weight-bold"
										color="mdb-color lighten-5"
										columns={columns}
									/>
									<MDBTableBody rows={rows} />
								</MDBTable>
								<Row className="justify-content-md-center">
									<Col xs lg="7">
										{cartData && <h3>Total:- ${cartData.total_amount}</h3>}
										<Nav.Link href="/checkout">
											<button>
												{currentUser
													? "Checkout"
													: "Continue Checkout as Guest"}
											</button>
										</Nav.Link>
										{!currentUser && (
											<>
												<p style={{ textAlign: "center" }}>or</p>
												<Nav.Link href="/signin">
													<button>Sign in</button>
												</Nav.Link>
											</>
										)}
									</Col>
								</Row>
							</MDBCardBody>
						</MDBCard>
					</MDBRow>
				</>
			)}
		</Container>
	)
}

export default Cart
