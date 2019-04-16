import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch } from 'react-router-dom';
import Index from '../components/Index';
import Contact from '../components/contact/Contact';
import About from '../components/about/About';
import Appointment from '../components/appointment/Appointment';
import DentalCare from '../components/dentalCare/DentalCare';
import Testimonial from '../components/testimonials/Testimonial';
import Gallery from '../components/gallery/Gallery';
import PatientResources from '../components/patientResources/PatientResources';
import NewPatientExperience from '../components/newPatientExperience/NewPatientExperience';


const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div className='container'>
           <Switch>
                <Route path='/' component={Index} exact={true}/>
                <Route path='/contact' component={Contact} exact={true}/>
                <Route path='/about' component={About} exact={true}/>
                <Route path='/appointment' component={Appointment} exact={true}/>
                <Route path='/dental-care' component={DentalCare} exact={true}/>
                <Route path='/testimonials' component={Testimonial} exact={true}/>
                <Route path='/gallery' component={Gallery} exact={true}/>
                <Route path='/patient-resources' component={PatientResources} exact={true}/>
                <Route path='/new-patient-experience' component={NewPatientExperience} exact={true}/>
           </Switch> 
        </div>
    </Router>
)

export default AppRouter;