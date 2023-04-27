import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetails from "./DishDetails";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addComment } from "../../redux/actionCreators";

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (dishId, author, rating, comment) =>
      dispatch(addComment(dishId, author, rating, comment)),
  };
};

class Menu extends Component {
  state = {
    selectedDish: null,
    modalOpen: false,
  };

  onClickSelect = (dish) => {
    this.setState({ selectedDish: dish, modalOpen: !this.state.modalOpen });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

  render() {
    document.title = "Menu";
    const menu = this.props.dishes.map((item) => {
      return (
        <MenuItem
          dish={item}
          key={item.id}
          clickFunction={() => this.onClickSelect(item)}
        />
      );
    });

    let details = null;
    if (this.state.selectedDish != null) {
      const comments = this.props.comments.filter((comment) => {
        return comment.dishId === this.state.selectedDish.id;
      });
      details = (
        <DishDetails
          dish={this.state.selectedDish}
          comments={comments}
          addComment={this.props.addComment}
        />
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-6">{menu}</div>
          <Modal isOpen={this.state.modalOpen}>
            <ModalBody>
              <button color="secondary" onClick={this.toggleModal}>
                Close
              </button>
              {details}
            </ModalBody>
            <ModalFooter>
              <button color="secondary" onClick={this.toggleModal}>
                Close
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
