/**
 * Created by kevin on 16-4-5.
 */
import React from 'react';
import styles from 'material-ui/lib/styles';
const colors = styles.Colors;
export default class extends React.Component{
    static propTypes={
        result:React.PropTypes.string.isRequired
    }
    render(){
        let ret=colors.indigo300;//pending
        switch(this.props.result){
            case 'Running': ret = colors.indigo500;break;
            case 'Accepted':ret = colors.green500;break;
            case 'Wrong Answer':ret = colors.red500;break;
            case 'Presentation Error':ret=colors.deepOrange500;break;
            case 'Time Limit Exceeded':ret=colors.deepOrange500;break;
            case 'Memory Limit Exceeded':ret=colors.deepOrange500;break;
            case 'Output Limit Exceeded':ret=colors.deepOrange500;break;
            case 'Complication Error':ret=colors.orange500;break;
            case 'Runtime Error':ret=colors.orange500;break;
            default:ret = colors.red500;
        }
        return <b style={{color:ret}}>{this.props.result}</b>
    }
}
    
