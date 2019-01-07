import { connect } from 'react-redux'
import { setVisibilityFilter } from "../actions/filterActions";
import Link from '../components/utils/Link'

const mapStateToProps = (state, ownProps) => ({
  //active: ownProps.filterName === "style"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filterName,ownProps.filterValue))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)