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
                backgroundColor: ret,
                color: '#fff',
                lineHeight: '23px',
                padding: '0 8px',
                borderRadius:'2px',
                fontWeight:'bold',
                textAlign:'center'
            }
        }
        return <div style={style.label}>{this.props.name}</div>
    }
}