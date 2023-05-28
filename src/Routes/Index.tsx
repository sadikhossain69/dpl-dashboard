import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';
import NonAuthLayout from 'Layout/NonAuthLayout';

//routes
import { authProtectedRoutes } from "./allRoutes";
import { publicRoutes } from "./allRoutes";
import { AuthProtected } from './AuthProtected';
import SingleTeamMemberEdit from 'pages/Teams/SingleTeamMemberEdit';
import EditSignleBanner from 'pages/Banner/EditSingleBanner';
import SingleTestimonialEdit from 'pages/Testimonials/SingleTestimonialEdit';
import SinglePropertyEdit from 'pages/Products/SinglePropertyEdit';
import Login from 'pages/Authentication/Login';
import ListView from 'pages/Products/ListView';
import CreateProduct from 'pages/Products/CreateProduct';
import TeamMembers from 'pages/Teams/TeamMembers';
import CreateTeamMember from 'pages/Teams/CreateTeamMember';
import AboutDashboard from 'pages/About';
import TestimonialsDashboard from 'pages/Testimonials/TestimonialsList';
import CreateTestimonials from 'pages/Testimonials/CreateTestimonials';
import BannerList from 'pages/Banner/BannerList';
import CreateBanner from 'pages/Banner/CreateBanner';
import ClientsAndFamilies from 'pages/ClientsAndFamilies';

const Index = () => {
    return (
        <React.Fragment>
            <Routes>
                {/* <Route>
                    {publicRoutes.map((route: any, idx: number) => (
                        <Route
                            key={idx}
                            path={route.path}
                            element={<NonAuthLayout> {route.component} </NonAuthLayout>}
                        // exact={true}
                        />
                    ))}
                </Route> */}
                <Route path='/' element={<Login/>} />
                <Route path='team-member-edit/:id' element={<AuthProtected><Layout><SingleTeamMemberEdit /></Layout></AuthProtected>} />
                <Route path='edit-banner/:id' element={<AuthProtected><Layout><EditSignleBanner /></Layout></AuthProtected>} />
                <Route path='edit-testimonial/:id' element={<AuthProtected><Layout><SingleTestimonialEdit /></Layout></AuthProtected>} />
                <Route path='property/edit/:id' element={<AuthProtected><Layout><SinglePropertyEdit /></Layout></AuthProtected>} />
                <Route path='/property-list' element={<AuthProtected><Layout><ListView /></Layout></AuthProtected>} />
                <Route path='/property-create' element={<AuthProtected><Layout><CreateProduct /></Layout></AuthProtected>} />
                <Route path='/teams-member-list' element={<AuthProtected><Layout><TeamMembers /></Layout></AuthProtected>} />
                <Route path='/teams-member-add' element={<AuthProtected><Layout><CreateTeamMember /></Layout></AuthProtected>} />
                <Route path='/about-dashboard' element={<AuthProtected><Layout><AboutDashboard /></Layout></AuthProtected>} />
                <Route path='/testimonials-list' element={<AuthProtected><Layout><TestimonialsDashboard /></Layout></AuthProtected>} />
                <Route path='/create-testimonial' element={<AuthProtected><Layout><CreateTestimonials /></Layout></AuthProtected>} />
                <Route path='/banner-list' element={<AuthProtected><Layout><BannerList /></Layout></AuthProtected>} />
                <Route path='/create-banner' element={<AuthProtected><Layout><CreateBanner /></Layout></AuthProtected>} />
                <Route path='/projects-and-families' element={<AuthProtected><Layout><ClientsAndFamilies /></Layout></AuthProtected>} />


                {/* <Route>
                    {authProtectedRoutes.map((route: any, idx: number) => (
                        <Route
                            key={idx}
                            path={route.path}
                            element={<AuthProtected> <Layout>{route.component}</Layout> </AuthProtected>}
                        // exact={true}
                        />
                    ))}
                </Route> */}
            </Routes>
        </React.Fragment>
    );
}

export default Index;