import React from 'react'
import AboutPage from '../AboutPage'
import AccountPage from '../AccountPage'
import BasicPage from '../BasicPage/'
import PhotosPage from '../PhotosPage'
import SettingsNav from '../SettingsNav'
import {Route, Switch, Redirect} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
import {updatePassword} from '../../common/auth/authActions'
import {updateProfile} from '../../components/User/userActions'

const actions ={
    updatePassword,
    updateProfile
}

const mapState = (state)=>({
    user: state.firebase.profile

})

const SettingsDashboard =({updatePassword, user, updateProfile}) => {
    return(
        <Grid>
        <Grid.Column width ={12}>
        <Switch>
        <Route path='/settings/basic' render={()=><BasicPage initialValues={user} updateProfile={updateProfile}/>} />    
        <Route path='/settings/about' component={AboutPage}/>
        <Route path='/settings/photos' component={PhotosPage}/>
        <Route path='/settings/account' component={AccountPage}/>
        <Route
            path='/settings/account'
            render={() => (
              <AccountPage
                updatePassword={updatePassword}
              />
            )}
            />
</Switch>


<Grid.Column width={4}>
<SettingsNav/>
</Grid.Column>
        </Grid.Column>

         </Grid>
    )
    
    }
    
    
    
    export default connect(
      mapState,
      actions
    )(SettingsDashboard)