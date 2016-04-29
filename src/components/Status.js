/**
 * Created by kevin on 16-4-27.
 */
import React from 'react';
import * as colors from 'material-ui/styles/colors';
export default class extends React.Component {
    static propTypes = {
        name: React.PropTypes.string.isRequired
    }

    render() {
        let ret = colors.indigo300;//pending
        switch (this.props.name) {
            case 'Pending':
                ret = colors.indigo500;
                break;
            case 'Ended':
                ret = colors.green500;
                break;
            case 'Running':
                ret = colors.red500;
                break;
            default:
                ret = colors.orange500;
        }
        const style = {
            label: {
                // backgroundColor: ret,
                // color: '#fff',
                // lineHeight: '23px',
                // padding: '0 2px',
                // borderRadius:'2px'
                color:ret,
                fontWeight:'bold',
                textAlign:'center',
                display:'inline-block'
            }
        }
        return <div style={style.label}>{this.props.name}</div>
    }
}