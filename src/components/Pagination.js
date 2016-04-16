/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import ReactPaginate from 'react-paginate';
import ChevronLeftIcon from 'material-ui/lib/svg-icons/navigation/chevron-left';
import ChevronRightIcon from 'material-ui/lib/svg-icons/navigation/chevron-right';

export default class extends React.Component {
    static propTypes = {
        totPages: React.PropTypes.number,
        activeIndex: React.PropTypes.number,
        onChange: React.PropTypes.func
    };
    static defaultProps = {
        totPages: 1,
        activeIndex: 0,
        onChange: ()=> {
        }
    };

    render() {

        return (
            <ReactPaginate previousLabel="&laquo;"
                           nextLabel="&raquo;"
                           breakLabel={<a href="">...</a>}
                           pageNum={this.props.totPages}
                           initialSelected={this.props.activeIndex}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           clickCallback={this.props.onChange}
                           containerClassName={"m-pagination "+this.props.className}
                           activeClassName="active"
                           disabledClassName="disabled"
                           pageClassName="item"
            />
        )
    }
}