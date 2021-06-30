import React, { Component } from 'react';
import { Row, Col, Card, Form, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import * as actions from '../../Actions/book-action';
import Aux from "../../hoc/_Aux";
import Notification from '../../Admin-part1/Notification/Notification';

class AddBook extends Component {
    constructor() {
        super();
        this.state = {
            title: '', isbn: '', category: '', author: '', price:'', stock:'', discount:'', publishDate:'', titleError: '', categoryError: '', isbnError: '',
            authorError: '', titlevalid: 0, isbnvalid: 0, categoryvalid: 0, authorvalid: 0,
            pricevalid: 0, priceError: '', publishDatevalid: 0, stockvalid : 0, discountvalid :0,
            publishDateError:'', stockError:'', discountError:'', select:'', selectvalid : 0,notify:false
        };
    }

    title(event) {
        let value = event.target.value
        const name = new RegExp('[a-zA-Z\s]{2,20}')
        if (!name.test(value)) {
            this.setState({ titleError: "please enter a valid book name", titlevalid: 0 })
        }
        else {
            this.setState({ titleError: '', titlevalid: 1 })
        }
        this.setState({ title: value })
    }

    category(event) {
        let value = event.target.value
        const name = new RegExp('[a-zA-Z\s]{2,20}')
        if (!name.test(value)) {
            this.setState({ categoryError: "please enter a valid category", categoryvalid: 0 })
        }
        else {
            this.setState({ categoryError: '', categoryvalid: 1 })
        }
        this.setState({ category: value })
    }

    isbnCheck(event) {
        let value = event.target.value;
        if (value.length >13 || value.length<10) {
            this.setState({ isbnError: "isbn number should be 10 to 13 digits long", isbnvalid: 0 })
        }
        else {
            this.setState({ isbnError: '', isbnvalid: 1 })
        }
        this.setState({ isbn: value })
    }
    
    authorCheck(event) {
        let value = event.target.value
        const name = new RegExp('[a-zA-Z\s]{4,20}')
        if (!name.test(value)) {
            this.setState({ authorError: "please enter a valid author name", authorvalid: 0 })
        }
        else {
            this.setState({ authorError: '', authorvalid: 1 })
        }
        this.setState({ author: value })
    }

    
    priceCheck(event) {
        let value = event.target.value;
        if (value<=0) {
            this.setState({ priceError: "Price should be greater than 0", pricevalid: 0 })
        }
        else {
            this.setState({ priceError: '', pricevalid: 1 })
        }
        this.setState({ price: value })
    }

    stockCheck(event) {
        let value = event.target.value;
        if (value<0) {
            this.setState({ stockError: "Stock should be a positive number", stockvalid: 0 })
        }
        else {
            this.setState({ stockError: '', stockvalid: 1 })
        }
        this.setState({ stock: value })
    }

    discountCheck(event) {
        let value = event.target.value;
        if (value.length<0 || value<0 || value>50) {
            this.setState({ discountError: "Discount should be less than 50", discountvalid: 0 })
        }
        else {
            this.setState({ discountError: '', discountvalid: 1 })
        }
        this.setState({ discount: value })
    }

    publishDateCheck(event) {
        let value = event.target.value;
        if (value<=0) {
            this.setState({ publishDateError: "Please enter a valid publish date", publishDatevalid: 0 })
        }
        else {
            this.setState({ publishDateError: '', publishDatevalid: 1 })
        }
        this.setState({ publishDate: value })
    }


    async validateBook() {
       
        let book = { title: this.state.title, category: this.state.category, isbn: this.state.isbn, author: this.state.author,price: this.state.price, discount: this.state.discount, publishDate: this.state.publishDate, stock: this.state.stock };
        console.log(book)
        await this.props.onAddBook(book);
        if(this.props.message.length>0)
        {
            await this.setState({notify:true})
            setTimeout(()=>{
                this.setState({notify:false})
            },2000)
        }
        else
        {
            this.setState({notify:false})
        }
    }


    render() {
        var check = true;
        if ((this.state.titlevalid === 1) && (this.state.categoryvalid === 1) && (this.state.isbnvalid === 1) && (this.state.authorvalid === 1) && (this.state.pricevalid === 1) && (this.state.discountvalid === 1) && (this.state.publishDatevalid === 1) && (this.state.stockvalid === 1)) {
            check = false;
        }

        
        return (
            <Aux>
                 {this.props.message.includes('Book is not added') ? <Notification open={true} variant='error' msg={this.props.message}/> : null}
                 {this.props.message.includes('Book is added successfully') ? <Notification open={true} variant="success" msg={this.props.message}/> : null}
             
                 <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Add Book</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form autoComplete>
                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>Title</Form.Label>
                                                <Form.Control onChange={this.title.bind(this)} type="text" placeholder="Enter Title" />
                                                <p className="help-block text-danger">{this.state.titleError}</p>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicEmail">
                                                <Form.Label>ISBN</Form.Label>
                                                <Form.Control onChange={this.isbnCheck.bind(this)} type="number" placeholder="Enter ISBN" />
                                                <p className="help-block text-danger">{this.state.isbnError}</p>
                                            </Form.Group>

                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Price</Form.Label>
                                                <Form.Control  onChange={this.priceCheck.bind(this)} type="number" placeholder="Enter Price" />
                                                <p className="help-block text-danger">{this.state.priceError}</p>
                                            </Form.Group>                                
                                            <Form.Group controlId="formBasicPassword">
                                                <Form.Label>Publish Date</Form.Label>
                                                <Form.Control onChange={this.publishDateCheck.bind(this)} type="date" placeholder="Enter Publish Date" />
                                                <p className="help-block text-danger">{this.state.publishDateError}</p>
                                            </Form.Group>

                                        </Form>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Category</Form.Label>
                                            <Form.Control type="text" onChange={this.category.bind(this)} placeholder="Enter Category" />
                                            <p className="help-block text-danger">{this.state.categoryError}</p>
                                        </Form.Group>

                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label>Author Name</Form.Label>
                                            <Form.Control type="text" onChange={this.authorCheck.bind(this)} placeholder="Enter Author Name" />
                                            <p className="help-block text-danger">{this.state.authorError}</p>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Discount</Form.Label>
                                            <Form.Control  type="number" onChange={this.discountCheck.bind(this)} placeholder="Enter Discount" />
                                            <p className="help-block text-danger">{this.state.discountError}</p>
                                        </Form.Group>
                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Available Stock</Form.Label>
                                            <Form.Control type="number" onChange={this.stockCheck.bind(this)} placeholder="Enter Available Stock" />
                                            <p className="help-block text-danger">{this.state.stockError}</p>
                                        </Form.Group>
                                        
                                    </Col>
                                    <Col>
                                    <Button disabled={check} style={{width:"90px"}} onClick={this.validateBook.bind(this)} variant="primary">
                                                Add 
                                    </Button>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: state.bookReducer.message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBook: (book) => dispatch(actions.addbook(book))
    }
}

// export default AddWorkout;
export default connect(mapStateToProps, mapDispatchToProps)(AddBook);