/**
 * Created by kevin on 16-2-28.
 */
import React from 'react';
import MyRawTheme from '../myRawTheme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

import Paper from 'material-ui/lib/paper';
@ThemeDecorator(ThemeManager.getMuiTheme(MyRawTheme))
export default class extends React.Component {
    render() {
        return (
            <div className="content-wrapper container">
            
            </div>
        )
    }
}
