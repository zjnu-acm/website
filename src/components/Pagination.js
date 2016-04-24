/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import ReactPaginate from 'react-paginate';
import ChevronLeftIcon from 'material-ui/svg-icons/navigation/chevron-left';
import ChevronRightIcon from 'material-ui/svg-icons/navigation/chevron-right';

export default class extends React.Component {
    static propTypes = {
        totPages: React.PropTypes.number,
        activeIndex: React.PropTypes.number,
        onChange: React.PropTypes.func.isRequired,
    };
    static defaultProps = {
        totPages: 1,
        activeIndex: 0,
        onChange: ()=> {
        }
    };

    render() {
        const style = {
            svg: {
                height: '28px',
                fill: '#666'
            }
        }
        const {totPages, activeIndex, className,onChange} = this.props;
        return (
            <ReactPaginate previousLabel={<ChevronLeftIcon style={style.svg}/>}
                           nextLabel={<ChevronRightIcon style={style.svg}/>}
                           breakLabel={<a href="javascript:void(0)">...</a>}
                           pageNum={totPages}
                           forceSelected={activeIndex}
                           marginPagesDisplayed={2}
                           pageRangeDisplayed={5}
                           clickCallback={onChange}
                           containerClassName={"m-pagination "+className}
                           activeClassName="active"
                           disabledClassName="disabled"
                           pageClassName="item"
            />
        )
    }
}