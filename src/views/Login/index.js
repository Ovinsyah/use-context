import React from 'react';
import { LoginSection, FormSection, SectionEmptyState, Label } from './style';
import { Grids, Grid } from 'components/atoms/Grids';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Heading from 'components/atoms/Heading'

import EmptyState from 'assets/images/empty-state-register.png';

const Index = () => {
  return (
    <LoginSection>
      <Grids className="width-100">
        <Grid>
          <SectionEmptyState>
            <img src={EmptyState}/>
          </SectionEmptyState>
        </Grid>
        <Grid>
          <FormSection>
            <Heading size="is-1">Login</Heading>
            <Label className="margin-top-5">Username</Label>
            <Input full/>
            <Label className="margin-top-4">Password</Label>
            <Input full type="password"/>
            <Button theme="is-primary" className="margin-top-3">Login</Button>
          </FormSection>
        </Grid>
      </Grids>
    </LoginSection>
  )
}

export default Index
