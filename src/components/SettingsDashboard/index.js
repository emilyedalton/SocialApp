import React, {Component} from 'react'
import AboutPage from '../AboutPage'
import AccountPage from '../AccountPage'
import BasicPage from '../BasicPage'
import PhotosPage from '../PhotosPage'
import SettingsNav from '../SettingsNav'
import {Route} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'




class SettingsDashbboard extends Component {
    render () {
    return(
        <div>
         <h1>Settings Dashboard</h1>    
         <Grid>
        <Grid.Column width ={12}>
        <Route path='/settings/basic' component={BasicPage}/>
        <Route path='/settings/about' component={AboutPage}/>
        <Route path='/settings/photos' component={PhotosPage}/>
        <Route path='/settings/account' component={AccountPage}/>



<Grid.Column width={4}>
<SettingsNav/>
</Grid.Column>
        </Grid.Column>

         </Grid>
         </div>
    )
    
    }
    
    
    }
    export default SettingsDashbboard 