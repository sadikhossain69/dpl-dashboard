import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TeamMemberTable from './TeamMemberTable';

const TeamMemberFilter = () => {
  return (
    <React.Fragment>


      <Col xl={12} lg={12}>
        <TeamMemberTable />
      </Col>
    </React.Fragment>
  );
};

export default TeamMemberFilter;