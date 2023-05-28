import BreadCrumb from 'Common/BreadCrumb';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import TeamMemberFilter from './TeamMemberFilter';

const TeamMembers = () => {

    document.title = "Team Member List | Dreamers Properties Limited + Admin React Template";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Team Member List" pageTitle="TeamMembers" />
                    <Row>
                        <TeamMemberFilter />
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default TeamMembers;