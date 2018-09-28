import { connect } from "react-redux";
import { ProjectInsertModal } from "../components/Modal";

const mapStateToProps = (state) => ({
    visible: true,
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
    onClickAdd: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectInsertModal);

