import * as colors from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {mergeDeep} from '../utils';
const defaultBaseTheme = {
    fontFamily: 'Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,WenQuanYi Micro He,Microsoft YaHei,sans-serif',
    palette: {
        primary1Color: colors.indigo500,
        primary2Color: colors.indigo700,
        primary3Color: colors.grey400,
        accent1Color: colors.deepOrange500,
        pickerHeaderColor: colors.blue500
    },
    appBar:{
        height: '68'
    }
};

const defaultTheme = getMuiTheme(defaultBaseTheme);
export default defaultTheme;

const navTabBaseTheme = mergeDeep({},defaultBaseTheme,{
    tabs:{
        backgroundColor:colors.white,
        textColor:defaultTheme.palette.textColor,
        selectedTextColor:colors.black,
    },
    inkBar: {
        backgroundColor: defaultTheme.palette.primary1Color
    }
})
export const navTabTheme = getMuiTheme(navTabBaseTheme);

