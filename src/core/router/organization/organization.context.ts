import React from 'react';
import { OrganizationContextModel } from './organization.model';

export const OrganizationContext = React.createContext<OrganizationContextModel>(null);

export const useOrganizationContext = () => React.useContext(OrganizationContext);